from django.urls import path;
from django.contrib import admin
from . import views

urlpatterns = [
    path("apply/", views.apply, name="apply-main"),
    path("apply/other-forms", views.continuedForm, name="other-forms"),
    path("apply/pds-view", views.pdsview, name="pds-view"),
    path("apply/province-options/", views.load_provinces, name="ajax_load_provinces"),
    path("apply/citymun-options/", views.load_citymun, name="ajax_load_citymun"),
    path("apply/brgy-options/", views.load_brgy, name="ajax_load_brgy"),
    path("apply/province-options/", views.load_provinces_per, name="ajax_load_provinces_per"),
    path("apply/citymun-options/", views.load_citymun_per, name="ajax_load_citymun_per"),
    path("apply/brgy-options/", views.load_brgy_per, name="ajax_load_brgy_per")
]