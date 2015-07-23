###

Documentation for Rocket:

Rocket is an "updated" version of com.et. The premise is to transfer the idea of 
com.et to a django app, from a node.js app, allowing for faster development and more structured code.

Note that this does not mean that rocket is simply a copy of com.et. Rocket will have the same insights
(and maybe even descriptive text), but will also be a re-intepretation overall.

###

### Structure ###

The Rocket project consists of multiple apps, as documented in the official 
django docs. Global static files, etc. can be found under the outer /rocket directory.

Each app, e.g. main, contains the defaul admin.py, tests.py, models.py, etc. 

Note: there are manually created urls.py for routing and api.py for another layer of abstraction.
For views, each app should have a static directory for app-local files, including an appViews.js
and [app_name].js as the main js file to load for that app/page.