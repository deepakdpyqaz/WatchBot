from django.urls import path
from .views import ai

urlpatterns = [
    path("process/", ai)
]