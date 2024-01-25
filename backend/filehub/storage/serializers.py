from rest_framework import serializers
from storage.models import File

class FileSerializer(serializers.Serializer):
    username = serializers.CharField(max_length=225)
    title = serializers.CharField(max_length=225)
    content = serializers.CharField()

    # class Meta:
    #     model = File
    #     fields = '__all__'

