from django.db import models


# Create your models here.
class File(models.Model):
    username = models.CharField(max_length=225, default='')
    title = models.CharField(max_length = 225)
    content = models.TextField()

    def __str___(self):
        return f"{self.title}"

