#urls.py for dashboard app
from django.conf.urls import url
from . import views

urlpatterns = [
	url(r'^$', views.index, name="dashboard_index")
]