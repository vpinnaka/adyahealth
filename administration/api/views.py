from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status
from administration.models import Organization, Practioner, Patient
from administration.api.serializers import OrganizationSerializer, PractionerSerializer, PatientSerializer


class OrganizationCreateReadView(ListCreateAPIView):
    queryset = Organization.objects.all()
    permissions = (IsAuthenticated,)
    serializer_class = OrganizationSerializer
    lookup_field = "uuid"


class OrganizationReadUpdateDeleteView(RetrieveUpdateDestroyAPIView):
    queryset = Organization.objects.all()
    permissions = (IsAuthenticated,)
    serializer_class = OrganizationSerializer
    lookup_field = "uuid"


class PractionerCreateReadView(ListCreateAPIView):
    queryset = Practioner.objects.all()
    permissions = (IsAuthenticated,)
    serializer_class = PractionerSerializer
    lookup_field = "uuid"


class PractionerReadUpdateDeleteView(RetrieveUpdateDestroyAPIView):
    queryset = Practioner.objects.all()
    permissions = (IsAuthenticated,)
    serializer_class = PractionerSerializer
    lookup_field = "uuid"



class PatientCreateReadView(ListCreateAPIView):
    queryset = Patient.objects.all()
    permissions = (IsAuthenticated,)
    serializer_class = PatientSerializer
    lookup_field = "uuid"

    def list(self, request):
        # Note the use of `get_queryset()` instead of `self.queryset`
        queryset = self.get_queryset()
        if not request.organization:
            return Response({"error": "Organization details required to obtain patient"}, status=status.HTTP_400_BAD_REQUEST)
        queryset = queryset.filter(organization=request.organization)
        serializer = PatientSerializer(queryset, many=True)
        return Response(serializer.data)


class PatientReadUpdateDeleteView(RetrieveUpdateDestroyAPIView):
    queryset = Patient.objects.all()
    permissions = (IsAuthenticated,)
    serializer_class = PatientSerializer
    lookup_field = "uuid"