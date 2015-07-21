#manually created file for views in the main app
from django.conf.urls import url
from . import views

urlpatterns = [
	url(r'^$', views.index, name="index")
]