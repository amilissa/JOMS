# Generated by Django 3.1.2 on 2020-11-27 12:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('apply', '0003_auto_20201127_2046'),
    ]

    operations = [
        migrations.AlterField(
            model_name='personal_info',
            name='agency_employee_no',
            field=models.CharField(blank=True, default=0, max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='personal_info',
            name='gsis_id_no',
            field=models.CharField(blank=True, default=0, max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='personal_info',
            name='pagibig_id_no',
            field=models.CharField(blank=True, default=0, max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='personal_info',
            name='philhealth_no',
            field=models.CharField(blank=True, default=0, max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='personal_info',
            name='sss_no',
            field=models.CharField(blank=True, default=0, max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='personal_info',
            name='tin_no',
            field=models.CharField(blank=True, default=0, max_length=50, null=True),
        ),
    ]
