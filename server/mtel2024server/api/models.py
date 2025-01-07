from django.contrib.auth.models import User
from django.db import models


# Create your models here.

class Run(models.Model):
    id = models.IntegerField(primary_key=True)
    time = models.IntegerField()
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return "run " + str(self.id) + " by " + str(self.user)
