from django.urls import path

from .views import login, register, get_user_data

urlpatterns = [
    path("login", login),
    path("register", register),
    path("get_user_data", get_user_data),
]
