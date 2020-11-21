import uuid
from adyahealth.users.models import User
from django.db import models
from core.models import BaseModel
from core.models import Address, ContactInfo, HealthIdentifier



class Organization(BaseModel):
    class OrganizationType(models.TextChoices):
        HEALTHCARE_PROVIDER = "prov", "Healthcare Provider"
        HOSPITAL_DEPARTMENT = "dept", " Hospital Department"
        ORGANIZATION_TEAM = "team", "Organizational team"
        GOVERNMENT = "govt", "Government"
        INSURANCE_COMPANY = "ins", "Insurance Company"
        PAYER = "pay", "Payer"
        EDUCATIONAL_INSTITUTE = "edu", "Educational Institute"
        RELIGIOUS_INSTITUTION = "reli", "Religious Institution"
        CLINICAL_RESEARCH_SPONSER = "crs", "Clinical Research Sponsor"
        COMMUNITY_GROUP = "cg", "Community Group"
        OTHER = "other", "Other"
    uuid = models.UUIDField(unique=True, default=uuid.uuid4, editable=False)         
    name = models.CharField(max_length=255, db_index=True)
    type = models.CharField(max_length=6, choices=OrganizationType.choices, default=OrganizationType.HEALTHCARE_PROVIDER)
    address = models.OneToOneField(Address, on_delete=models.CASCADE, blank=True, null=True, related_name="organization")
    contact_info = models.OneToOneField(ContactInfo, on_delete=models.CASCADE, blank=True, null=True, related_name="organization")
    part_of = models.ForeignKey("self", on_delete=models.CASCADE, blank=True, null=True)
    logo = models.ImageField(null=True, blank=True)

    def __str__(self):
        return f"{self.name}-{self.type}"


class OrganizationUserMapper(BaseModel):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name="organization_map")
    organization = models.OneToOneField(Organization, on_delete=models.CASCADE, related_name="user_map")

    class Meta:
        unique_together = ["user", "organization"]

    

class Person(BaseModel):
    class Gender(models.TextChoices):
        MALE = "M", "Male"
        FEMALE = "F", "Female"
        OTHER = "O", "Other"
        UNKNOWN = "U", "Unknown"
    name = models.CharField(max_length=255, db_index=True)
    gender = models.CharField(max_length=1, choices=Gender.choices,)
    birth_date = models.DateField(null=True, blank=True)
    address = models.OneToOneField(Address, on_delete=models.CASCADE, blank=True, null=True)
    contact_info = models.OneToOneField(ContactInfo, on_delete=models.CASCADE, blank=True, null=True)
    organization = models.ForeignKey(Organization, on_delete=models.CASCADE)
    photo = models.ImageField(null=True, blank=True)

    def __str__(self):
        return f"{self.name}-{self.gender}-{self.birth_date}"


class Practioner(Person):
    uuid = models.UUIDField(unique=True, default=uuid.uuid4, editable=False)        
    identifier = models.CharField(max_length=255, blank=True, default="")
    qualification = models.CharField(max_length=64, blank=True)
    speciality = models.CharField(max_length=64, blank=True)


class Patient(Person):
    uuid = models.UUIDField(unique=True, default=uuid.uuid4, editable=False)         
    identifier = models.OneToOneField(HealthIdentifier, blank=True, null=True, on_delete=models.CASCADE, related_name="patients", related_query_name="patient")