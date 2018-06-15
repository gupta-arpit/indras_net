# Generated by Django 2.0.6 on 2018-06-14 18:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('IndrasNet', '0002_auto_20180613_1729'),
    ]

    operations = [
        migrations.AddField(
            model_name='modelparam',
            name='prop_name',
            field=models.CharField(default='prop_default', max_length=16),
        ),
        migrations.AlterField(
            model_name='modelparam',
            name='default_val',
            field=models.CharField(blank=True, default='', max_length=16, null=True),
        ),
    ]