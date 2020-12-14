# Generated by Django 3.1.2 on 2020-12-04 13:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('apply', '0005_family_background'),
    ]

    operations = [
        migrations.AlterField(
            model_name='family_background',
            name='father_first_name',
            field=models.CharField(blank=True, max_length=75, null=True),
        ),
        migrations.AlterField(
            model_name='family_background',
            name='father_sur_name',
            field=models.CharField(blank=True, max_length=75, null=True),
        ),
        migrations.AlterField(
            model_name='family_background',
            name='mother_first_name',
            field=models.CharField(blank=True, max_length=75, null=True),
        ),
        migrations.AlterField(
            model_name='family_background',
            name='mother_sur_name',
            field=models.CharField(blank=True, max_length=75, null=True),
        ),
    ]
