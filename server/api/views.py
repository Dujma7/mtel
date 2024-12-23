from django.contrib.auth.models import User
from django.http import Http404
from django.shortcuts import render, get_object_or_404
from django.utils.datastructures import MultiValueDictKeyError
from rest_framework import status
from rest_framework.authtoken.models import Token
from rest_framework.decorators import api_view
from rest_framework.response import Response

from api.serializers import UserSerializer


# Create your views here.
@api_view(['POST'])
def login(request):
    try:
        user = get_object_or_404(User, username=request.data['username'])
    except MultiValueDictKeyError as e:
        return Response({'error': 'Missing username and/or password'}, status=401)
    except Exception as e:
        print(e)
        return Response({'error': str(e)}, status=401)
    if not user.check_password(request.data['password']):
        return Response("missing user", status=status.HTTP_404_NOT_FOUND)
    token, created = Token.objects.get_or_create(user=user)
    serializer = UserSerializer(user)
    print({'token': token.key, 'user': serializer.data})
    return Response({'token': token.key, 'user': serializer.data})


@api_view(['POST'])
def register(request):
    try:
        get_object_or_404(User, email=request.data['email'])
        return Response({'error': 'User already exists with this email', "conflict": "email"}, status=409)
    except Http404 as e:
        try:
            get_object_or_404(User, username=request.data['username'])
            return Response({'error': 'User already exists with this user', "conflict": "username"}, status=409)
        except:
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
    try:
        # check token
        user = get_object_or_404(Token, key=request.data['token']).user
    except Http404 as e:
        return Response(status=401)

    serializer = UserSerializer(user)

    out = {
        'email': serializer.data['email'],
        'username': serializer.data['username'],
    }
    return Response(out, status=200)