from django.shortcuts import render, HttpResponse
from apply.models import personal_Info
from datetime import datetime
from modules import helpers
from apply.models import ref_region, ref_province, ref_barangay, ref_citymun
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
import pdb;


def apply(request):
    region = ref_region.objects.all;
    province = ref_province.objects.all;
    citymun = ref_citymun.objects.all;
    brgy = ref_barangay.objects.all;
    return render(request, 'apply/apply.html', {"ref_region": region, "ref_province": province, "ref_citymun": citymun, "ref_barangay": brgy});
    pass;

def load_provinces(request):
    reg_id = request.GET.get('res_reg');
    prov = ref_province.objects.all().filter(f_region_id=reg_id).order_by('name');
    return render(request, 'apply/province_options.html', {'province': prov});
    pass;

def load_citymun(request):
    prov_id = request.GET.get('res_province');
    city = ref_citymun.objects.all().filter(f_province_id=prov_id).order_by('name');
    return render(request, 'apply/citymun_options.html', {'city': city});
    pass;

def load_brgy(request):
    city_id = request.GET.get('res_city');
    brgy = ref_barangay.objects.all().filter(f_citymun_id=city_id).order_by('name');
    return render(request, 'apply/brgy_options.html', {'brgy': brgy});
    pass;

def load_provinces_per(request):
    reg_id = request.GET.get('res_reg');
    prov = ref_province.objects.all().filter(f_region_id=reg_id).order_by('name');
    return render(request, 'apply/province_options.html', {'province': prov});
    pass;

def load_citymun_per(request):
    prov_id = request.GET.get('res_province');
    city = ref_citymun.objects.all().filter(f_province_id=prov_id).order_by('name');
    return render(request, 'apply/citymun_options.html', {'city': city});
    pass;

def load_brgy_per(request):
    city_id = request.GET.get('res_city');
    brgy = ref_barangay.objects.all().filter(f_citymun_id=city_id).order_by('name');
    return render(request, 'apply/brgy_options.html', {'brgy': brgy});
    pass;


def pdsview(request):
    info_list = personal_Info.objects.all();
    page = request.GET.get('page', 1)

    paginator = Paginator(info_list, 10)
    try:
        infos = paginator.page(page)
    except PageNotAnInteger:
        infos = paginator.page(1)
    except EmptyPage:
        infos = paginator.page(paginator.num_pages)
    args = {'infos': infos}
    return render(request, 'apply/pds-view.html', args);
    pass;


def continuedForm(request):
    date_accomplished = datetime.now()
    try:
        constraint = helpers.constraint(request, "POST");
        data = constraint.safe({
            "sur_name": True,
            "first_name": True,
            "middle_name": False,
            "date_of_birth": True,
            "pace_of_birth": True,
            "sex": True,
            "civil_status": True,
            "height": True,
            "weight": True,
            "citizenship": True,
            "res_reg": True,
            "res_province": True,
            "res_city": True,
            "res_brgy": True,
            "res_lot_no": True,
            "res_street": True,
            "res_subd": True,
            "res_zipcode": True,
            "per_reg": True,
            "per_province": True,
            "per_lot_no": True,
            "per_street": True,
            "per_subd": True,
            "per_zipcode": True,
            "per_brgy": True,
            "per_city": True,
            "mobile_no": True,
            "email_address": True,
            "name_ext": False,
            "telephone": False,
            "gsis_id_no": False,
            "pagibig_id_no": False,
            "philhealth_no": False,
            "sss_no": False,
            "tin_no": False,
            "agency_employee_no": False,
            "citizenship_country": False,
            "blood_type": False
        })

        pers_info = personal_Info(sur_name=data["sur_name"],
                                  first_name=data["first_name"],
                                  middle_name=data["middle_name"],
                                  name_ext=data["name_ext"],
                                  date_of_birth=data["date_of_birth"],
                                  pace_of_birth=data["pace_of_birth"],
                                  sex=data["sex"],
                                  civil_status=data["civil_status"],
                                  height=data["height"],
                                  weight=data["weight"],
                                  blood_type=data["blood_type"],
                                  gsis_id_no=data["gsis_id_no"],
                                  pagibig_id_no=data["pagibig_id_no"],
                                  philhealth_no=data["philhealth_no"],
                                  sss_no=data["sss_no"],
                                  tin_no=data["tin_no"],
                                  agency_employee_no=data["agency_employee_no"],
                                  citizenship=data["citizenship"],
                                  citizenship_country=data["citizenship_country"],
                                  res_reg=data["res_reg"],
                                  res_province=data["res_province"],
                                  res_city=data["res_city"],
                                  res_brgy=data["res_brgy"],
                                  res_lot_no=data["res_lot_no"],
                                  res_street=data["res_street"],
                                  res_subd=data["res_subd"],
                                  res_zipcode=data["res_zipcode"],
                                  per_reg=data["per_reg"],
                                  per_province=data["per_province"],
                                  per_lot_no=data["per_lot_no"],
                                  per_street=data["per_street"],
                                  per_subd=data["per_subd"],
                                  per_zipcode=data["per_zipcode"],
                                  per_brgy=data["per_brgy"],
                                  per_city=data["per_city"],
                                  telephone=data["telephone"],
                                  mobile_no=data["mobile_no"],
                                  email_address=data["email_address"],
                                  date_accomplished=date_accomplished)

        pers_info.save()
        data = {
            'pi_pk': pers_info.pi_pk
        }
        print("Data Saved")
    except helpers.InvalidRequest:
        return render(request, 'apply/continue-form.html')

    return render(request, 'apply/continue-form.html', data)
    pass;
