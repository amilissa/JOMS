# Generated by Django 3.1.2 on 2020-11-27 12:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('apply', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='personal_info',
            name='agency_employee_no',
            field=models.IntegerField(default=0, null=True),
        ),
        migrations.AlterField(
            model_name='personal_info',
            name='gsis_id_no',
            field=models.IntegerField(default=0, null=True),
        ),
        migrations.AlterField(
            model_name='personal_info',
            name='pagibig_id_no',
            field=models.IntegerField(default=0, null=True),
        ),
        migrations.AlterField(
            model_name='personal_info',
            name='philhealth_no',
            field=models.IntegerField(default=0, null=True),
        ),
        migrations.AlterField(
            model_name='personal_info',
            name='sss_no',
            field=models.IntegerField(default=0, null=True),
        ),
        migrations.AlterField(
            model_name='personal_info',
            name='tin_no',
            field=models.IntegerField(default=0, null=True),
        ),
    ]