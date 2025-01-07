from rest_framework import serializers
from django.contrib.auth.models import User

from .models import Run


class UserSerializer(serializers.ModelSerializer):
    class Meta(object):
        model = User
        fields = ['id', 'username', 'password', 'email']


class RunSerializer(serializers.ModelSerializer):
    class Meta(object):
        model = Run
        fields = '__all__'
