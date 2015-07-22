from django.shortcuts import render
from django.http import HttpResponse

# Views for Dashboard

def index(request):
	return HttpResponse("Hello Dashboard")
