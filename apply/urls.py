from django.urls import path;
from django.contrib import admin
from . import views

urlpatterns = [
    path("apply/", views.apply, name="apply-main"),
    path("apply/other-forms", views.continuedForm, name="other-forms"),
    path("apply/pds-view", views.pdsview, name="pds-view")
]