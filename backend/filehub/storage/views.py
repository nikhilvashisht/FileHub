from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status
from storage.models import File
from storage.serializers import FileSerializer
from django.contrib.auth.models import User


@api_view(['POST'])
def save_file(request, username, file_name):
    data = request.data
    file = File(
        username=str(username),
        title=str(file_name),
        content=data['body']
    )
    file.save()
    return Response({"message": str(file.content)}, 200)


@api_view(['GET'])
def get_files(request, username):
    files = File.objects.filter(username=str(username))
    serialized_files = FileSerializer(files, many=True)
    response = Response(serialized_files.data, 200)
    return response


@api_view(['GET'])
def open_file(request, username, file_name):
    file = File.objects.get(username=str(username), title=str(file_name))
    serialized_file = FileSerializer(file, many=False)
    response = Response({"content": file.content}, 200)
    return response;


@api_view(['POST'])
def register_user(request):
    username = request.data.get('username')
    password = request.data.get('password')
    user = User(username=username)
    user.set_password(password)
    user.save()
    return Response({"message": "registered successfully"}, 200)

