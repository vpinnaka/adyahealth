from rest_framework import serializers
from core.models import Address, ContactInfo
from core.serializers import AddressSerializer, ContactInfoSerializer
from administration.models import Practioner, Patient, Organization

class OrganizationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Organization
        exclude = ("address", "contact_info")
        read_only_fields = ("uuid", "created", "updated")
        lookup_field = "uuid"


class PractionerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Practioner
        exclude = ("id", "address", "contact_info")
        read_only_fields = ("uuid", "created", "updated",)
        lookup_field = "uuid"


class PatientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Patient
        exclude = ("id", "address", "contact_info")
        read_only_fields = ("uuid", "created", "updated",)
        lookup_field = "uuid"
