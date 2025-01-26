from django.contrib.auth.models import User
from django.http import Http404
from django.shortcuts import render, get_object_or_404
from django.utils.datastructures import MultiValueDictKeyError
from rest_framework import status
from rest_framework.authtoken.models import Token
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Run
from .serializers import UserSerializer, RunSerializer


def authenticate(token) -> tuple[None, Response] | tuple[User, None]:
    try:
        # check token
        user = get_object_or_404(Token, key=token).user

    except Http404 as e:
        return None, Response(status=401)

    except Exception as e:
        print(e)
        return None, Response({'error': "internal server error"}, status=500)
    return user, None


# Create your views here.
@api_view(['POST'])
def login(request):
    try:
        user = get_object_or_404(User, email=request.data['email'])
    except MultiValueDictKeyError as e:
        return Response({'error': 'Missing email and/or password'}, status=401)
    except Exception as e:
        print(e)
        return Response({'error': str(e)}, status=401)
    if not user.check_password(request.data['password']):
        return Response("missing user", status=401)
    token, created = Token.objects.get_or_create(user=user)
    serializer = UserSerializer(user)
    print({'token': token.key, 'user': serializer.data})
    return Response({'token': token.key})
    # return Response({'token': token.key, 'user': serializer.data})


@api_view(['POST'])
def register(request):
    try:
        get_object_or_404(User, email=request.data['email'])
        return Response({'error': 'User already exists with this email', "conflict": "email"}, status=409)
    except Http404:
        try:
            get_object_or_404(User, username=request.data['username'])
            return Response({'error': 'User already exists with this user', "conflict": "username"}, status=409)
        except Http404:
            pass
    except Exception as e:
        print(e)
        return Response({'error': str(e)}, status=500)
    user = User.objects.create_user(email=request.data['email'], username=request.data['username'],
                                    password=request.data['password'])
    token, created = Token.objects.get_or_create(user=user)
    serializer = UserSerializer(user)
    print({'token': token.key, 'user': serializer.data})
    return Response({'token': token.key, 'user': serializer.data, "email": request.data["email"]}, status=200)


@api_view(['POST'])
def get_user_data(request):
    user, err = authenticate(request.data['token'])

    serializer = UserSerializer(user)

    out = {
        'email': serializer.data['email'],
        'username': serializer.data['username'],
        'token': request.data['token'],
    }
    return Response(out, status=200)


@api_view(['POST'])
def submit_score(request):
    user, err = authenticate(request.data['token'])

    if err is not None:
        if err == KeyError:
            return Response({'error': str(err)}, status=401)
        return err

    # add an entry to Scores db, time is in tenths of a second
    Run.objects.create(user=user, time=int(request.data['time']))
    return Response({'time': int(request.data['time'])}, status=200)


@api_view(['POST'])
def get_leaderboard(request):
    user, err = authenticate(request.data['token'])

    if err is not None:
        return err

    runs = Run.objects.all()
    serialized = []
    for run in runs:
        data = RunSerializer(run).data
        serialized.append({
            'time': data["time"],
            'user': run.user.username
        })
    sorted_runs = sorted(serialized, key=lambda x: x["time"])
    return Response(sorted_runs[:10])
