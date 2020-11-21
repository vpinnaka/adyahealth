from django.db import models

# Create your models here.
class TimeStampModel(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True

class BaseModel(TimeStampModel):
    active = models.BooleanField(default=True)

    class Meta:
        abstract = True


class HealthIdentifier(models.Model):
    health_id = models.CharField(max_length=64, primary_key=True, unique=True)
    health_id_number = models.CharField(max_length=64)
    health_id_provider = models.CharField(max_length=64, blank=True)


class Address(models.Model):
    class AddressUse(models.TextChoices):
        HOME = "H", "home"
        WORK = "W", "work"
        TEMP = "T", "temp"
        OLD = "O", "old"
        BILLING = "B", "billing"        
    use = models.CharField(max_length=1, blank=True, choices=AddressUse.choices, default=AddressUse.HOME)
    text = models.TextField(max_length=100, blank=True)
    line = models.TextField(max_length=100, blank=True)
    city = models.CharField(max_length=28, blank=True)
    district = models.CharField(max_length=255, blank=True)
    state = models.CharField(max_length=255, blank=True)
    postal_code = models.CharField(max_length=255, blank=True)
    country = models.CharField(max_length=255, blank=True)


class SocialAccount(models.Model):
    platform = models.CharField(max_length=20)
    value = models.CharField(max_length=64)

class ContactInfo(models.Model):
    class ContactInfoUse(models.TextChoices):
        HOME = "H", "home"
        WORK = "W", "work"
        TEMP = "T", "temp"
        OLD = "O", "old"
    use = models.CharField(max_length=1, blank=True, choices=ContactInfoUse.choices, default=ContactInfoUse.HOME)
    phone = models.CharField(max_length=13, blank=True)
    email = models.CharField(max_length=64, blank=True)
    fax = models.CharField(max_length=25, blank=True)
    social = models.ManyToManyField(SocialAccount, blank=True, null=True)

