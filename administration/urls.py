from administration.api.views import (
    OrganizationCreateReadView, 
    OrganizationReadUpdateDeleteView,
    PractionerCreateReadView,
    PractionerReadUpdateDeleteView,
    PatientCreateReadView,
    PatientReadUpdateDeleteView,
)
from django.urls import include, path

urlpatterns = [
    path(
        route="organizations/", view=OrganizationCreateReadView.as_view(), name="organizations"
    ),
    path(
        route="organizations/<uuid:uuid>", view=OrganizationReadUpdateDeleteView.as_view(), name="organizations"
    ),
    path(
        route="practioners/", view=PractionerCreateReadView.as_view(), name="practioners"
    ),
    path(
        route="practioners/<uuid:uuid>", view=PractionerReadUpdateDeleteView.as_view(), name="practioners"
    ),
    path(
        route="patients/", view=PatientCreateReadView.as_view(), name="patients"
    ),
    path(
        route="patients/<uuid:uuid>", view=PatientReadUpdateDeleteView.as_view(), name="patients"
    )
]