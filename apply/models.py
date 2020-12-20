from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver
from datetime import datetime, date;
import datetime as date_time
def generate_filename(instance, filename):
    ext = filename.split('.')[-1]
    filename = "%s.%s" % (uuid.uuid4(), ext);
    return os.path.join(instance.directory_string_var, filename);
import uuid;
import os;
import random, string
import pdb;
from django.db.models import Sum, Q;
from django.core.exceptions import ValidationError
from django.utils.translation import ugettext_lazy as _


# Create your models here.

class personal_Info(models.Model):
    pi_pk = models.AutoField(primary_key=True)
    sur_name = models.CharField(max_length=75)
    first_name = models.CharField(max_length=75)
    middle_name = models.CharField(max_length=75, null=True, blank=True)
    name_ext = models.CharField(max_length=20, null=True, blank=True)
    date_of_birth = models.DateField()
    pace_of_birth = models.CharField(max_length=100)
    sex = models.CharField(max_length=10)
    civil_status = models.CharField(max_length=15)
    height = models.CharField(max_length=15)
    weight = models.CharField(max_length=15)
    blood_type = models.CharField(max_length=5)
    gsis_id_no = models.CharField(max_length=50, default=0, null=True, blank=True)
    pagibig_id_no = models.CharField(max_length=50, default=0, null=True, blank=True)
    philhealth_no = models.CharField(max_length=50, default=0, null=True, blank=True)
    sss_no = models.CharField(max_length=50, default=0, null=True, blank=True)
    tin_no = models.CharField(max_length=50, default=0, null=True, blank=True)
    agency_employee_no = models.CharField(max_length=50, default=0, null=True, blank=True)
    citizenship = models.CharField(max_length=100)
    citizenship_country = models.CharField(max_length=100)
    res_lot_no = models.CharField(max_length=20)
    res_street = models.CharField(max_length=75)
    res_subd = models.CharField(max_length=50)
    res_brgy = models.CharField(max_length=50)
    res_city = models.CharField(max_length=50)
    res_province = models.CharField(max_length=50)
    res_reg = models.CharField(max_length=50)
    res_zipcode = models.IntegerField()
    per_lot_no = models.CharField(max_length=20)
    per_street = models.CharField(max_length=75)
    per_subd = models.CharField(max_length=50)
    per_brgy = models.CharField(max_length=50)
    per_city = models.CharField(max_length=50)
    per_province = models.CharField(max_length=50)
    per_reg = models.CharField(max_length=50)
    per_zipcode = models.IntegerField()
    telephone = models.CharField(max_length=20, null=True, blank=True)
    mobile_no = models.IntegerField()
    email_address = models.EmailField(max_length=75, null=True, blank=True)
    photo = models.CharField(max_length=100, null=True, blank=True)
    date_accomplished = models.DateField()

    def __str__(self):
        return str(self.pi_pk)
    pass
class ref_region(models.Model):
    id = models.AutoField(primary_key=True);
    psgcCode = models.CharField(max_length=50, blank=False, null=False, unique=True);
    name = models.TextField(blank=False, null=False);
    regCode = models.CharField(max_length=50, blank=False, null=False, unique=True);

    def provinces(self):
        return ref_province \
            .objects \
            .filter(region_id=self.id) \
            .order_by("provCode");

        pass;

    def __str__(self):
        return self.name;
        pass;

    class Meta:
        verbose_name = _("Region")
        verbose_name_plural = _("Regions")

    pass;
class ref_province(models.Model):
    id = models.AutoField(primary_key=True);
    psgcCode = models.CharField(max_length=50, blank=False, null=False, unique=True);
    name = models.TextField(blank=False, null=False);
    f_region = models.ForeignKey(ref_region, to_field="regCode", on_delete=models.CASCADE, blank=False, null=False);
    region = models.ForeignKey(ref_region, related_name="ref_region_id", on_delete=models.CASCADE, blank=False,null=False);
    provCode = models.CharField(max_length=50, blank=False, null=False, unique=True);

    class Meta:
        verbose_name = _("Province")
        verbose_name_plural = _("Provinces")

    def citymunicipalities(self):
        return ref_citymun \
            .objects \
            .filter(province_id=self.id) \
            .order_by("citymunCode");

        pass;

    def __str__(self):
        return self.name;
        pass;

    pass;


class ref_citymun(models.Model):
    id = models.AutoField(primary_key=True);
    psgcCode = models.CharField(max_length=50, blank=False, null=False, unique=True);
    name = models.TextField(blank=False, null=False);
    f_province = models.ForeignKey(ref_province, to_field="provCode", on_delete=models.CASCADE, blank=False, null=False);
    province = models.ForeignKey(ref_province, related_name="ref_province_id", on_delete=models.CASCADE, blank=False, null=False);
    citymunCode = models.CharField(max_length=50, blank=False, null=False, unique=True);

    def barangays(self):
        return ref_barangay \
            .objects \
            .filter(citymun_id=self.id) \
            .order_by("brgyCode");

        pass;

    def __str__(self):
        return self.name;
        pass;

    class Meta:
        verbose_name = _("City/Municipality")
        verbose_name_plural = _("Cities and Municipalities")

    pass;


class ref_barangay(models.Model):
    id = models.AutoField(primary_key=True);
    brgyCode = models.CharField(max_length=50, blank=False, null=False, unique=True);
    name = models.TextField(blank=False, null=False);
    f_citymun = models.ForeignKey(ref_citymun, to_field="citymunCode", on_delete=models.CASCADE, blank=False, null=False);
    citymun = models.ForeignKey(ref_citymun, related_name="ref_citymun_id", on_delete=models.CASCADE, blank=False, null=False);

    def __str__(self):
        return self.name;
        pass;

    class Meta:
        verbose_name = _("Barangay")
        verbose_name_plural = _("Barangays")

    pass;


class ref_purok(models.Model):
    id = models.AutoField(primary_key=True);
    name = models.CharField(max_length=50, default="", blank=False, null=False);
    president = models.CharField(max_length=50, default="", blank=True, null=True);
    barangay = models.ForeignKey(ref_barangay, related_name="ref_barangay_id", on_delete=models.CASCADE, blank=False, null=False);
    pass;

class family_Background(models.Model):
    fb_fk = models.ForeignKey(personal_Info, on_delete=models.CASCADE)
    fb_pk = models.AutoField(primary_key=True)
    spouse_sur_name = models.CharField(max_length=75, null=True, blank=True)
    spouse_first_name = models.CharField(max_length=75, null=True, blank=True)
    spouse_middle_name = models.CharField(max_length=75, null=True, blank=True)
    spouse_name_ext = models.CharField(max_length=20, null=True, blank=True)
    occupation = models.CharField(max_length=100, null=True, blank=True)
    business_name = models.CharField(max_length=150, null=True, blank=True)
    business_address = models.CharField(max_length=200, null=True, blank=True)
    spouse_telephone = models.CharField(max_length=20, null=True, blank=True)
    father_sur_name = models.CharField(max_length=75, null=True, blank=True)
    father_first_name = models.CharField(max_length=75, null=True, blank=True)
    father_middle_name = models.CharField(max_length=75, null=True, blank=True)
    father_name_ext = models.CharField(max_length=20, null=True, blank=True)
    mother_sur_name = models.CharField(max_length=75, null=True, blank=True)
    mother_first_name = models.CharField(max_length=75, null=True, blank=True)
    mother_middle_name = models.CharField(max_length=75, null=True, blank=True)

    def __str__(self):
        return str(self.fb_pk)
    pass
    pass