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