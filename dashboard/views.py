from django.shortcuts import render
from django.http import HttpResponse
from . import api

# Views for Dashboard

def index(request):
	'''
	Main dashboard page.

	Accessible via /dashboard/
	'''

	return render(request, 'dashboard/dashboard.html')





# Pseudo-restAPI -- perhaps leave API stuff alone and use mock client-side data until tastypi
