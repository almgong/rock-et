from django.shortcuts import render
from django.http import HttpResponse

from . import api

def index(request):
	'''Route: <app>.com/'''

	return render(request, 'main/index.html', dict(status=api.test())) #need .html extension

def test(request):
	
	return HttpResponse("Testin success!!!")
