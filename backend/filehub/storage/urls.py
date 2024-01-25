from django.urls import path
from storage import views
from rest_framework.authtoken.views import obtain_auth_token

urlpatterns = [
	path('save/<str:username>/<str:file_name>', views.save_file, name='save'),
	path('get/<str:username>', views.get_files, name='get'),
	path('file/<str:username>/<str:file_name>', views.open_file, name='open'),
	path('auth/', obtain_auth_token),
	path('register/', views.register_user, name='register'),
]