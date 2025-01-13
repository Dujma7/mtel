from django.urls import path

from .views import login, register, get_user_data, submit_score, get_leaderboard

urlpatterns = [
    path("login", login),
    path("register", register),
    path("get_user_data", get_user_data),
    path("submit_score", submit_score),
    path("get_leaderboard", get_leaderboard),
]
