


$(function() {
        $('#citizenship_country').hide();
        $('#red_country_hide').hide();
        $('#country_hide').hide();
        $("#sur_name_error_message").hide();
        $("#first_name_error_message").hide();
        $("#middle_name_error_message").hide();
        $("#name_ext_error_message").hide();
        $("#date_of_birth_error_message").hide();
        $("#pace_of_birth_error_message").hide();
        $("#sex_error_message").hide();
        $("#civil_status_error_message").hide();
        $("#height_error_message").hide();
        $("#weight_error_message").hide();
        $("#blood_type_error_message").hide();
        $("#gsis_id_no_error_message").hide();
        $("#pagibig_id_no_error_message").hide();
        $("#philhealth_no_error_message").hide();
        $("#sss_no_error_message").hide();
        $("#tin_no_error_message").hide();
        $("#agency_employee_no_error_message").hide();
        $("#citizenship_error_message").hide();
        $("#citizenship_country_error_message").hide();
        $("#residence_error_message").hide();
        $("#permanent_error_message").hide();
        $("#telephone_error_message").hide();
        $("#mobile_no_error_message").hide();
        $("#email_address_error_message").hide();

        var error_sur_name = false;
        var error_first_name = false;
        var error_middle_name = false;
        var error_name_ext = false;
        var error_date_of_birth = false;
        var error_pace_of_birth = false;
        var error_sex = false;
        var error_civil_status = false;
        var error_height = false;
        var error_weight = false;
        var error_blood_type = false;
        var error_gsis_id_no = false;
        var error_pagibig_id_no = false;
        var error_philhealth_no = false;
        var error_sss_no = false;
        var error_tin_no = false;
        var error_agency_employee_no = false;
        var error_citizenship = false;
        var error_citizenship_country = false;
        var error_residence = false;
        var error_permanent = false;
        var error_telephone = false;
        var error_mobile_no = false;
        var error_email_address = false;

         $("#sur_name").focusout(function(){
            check_sur_name();
         });
         $("#first_name").focusout(function(){
            check_first_name();
         });
         $("#middle_name").focusout(function(){
            check_middle_name();
         });
         $("#date_of_birth").focusout(function(){
            check_date_of_birth();
         });
         $("#pace_of_birth").focusout(function(){
            check_pace_of_birth();
         });
         $("#sex").focusout(function(){
            check_sex();
         });
         $("#civil_status").focusout(function(){
            check_civil_status();
         });
         $("#height").focusout(function(){
            check_height();
         });
         $("#weight").focusout(function(){
            check_weight();
         });
         $("#gsis_id_no").focusout(function(){
            check_gsis_id_no();
         });
         $("#pagibig_id_no").focusout(function(){
            check_pagibig_id_no();
         });
         $("#philhealth_no").focusout(function(){
            check_philhealth_no();
         });
         $("#sss_no").focusout(function(){
            check_sss_no();
         });
         $("#tin_no").focusout(function(){
            check_tin_no();
         });
         $("#agency_employee_no").focusout(function(){
            check_agency_employee_no();
         });
         $("#citizenship").focusout(function(){
            check_citizenship();
         });
         $("#citizenship_country").focusout(function(){
            check_citizenship_country();
         });
         $("#res_reg").focusout(function(){
            check_residence();
         });
         $("#res_province").focusout(function(){
            check_residence();
         });
         $("#res_city").focusout(function(){
            check_residence();
         });
         $("#res_brgy").focusout(function(){
            check_residence();
         });
         $("#res_lot_no").focusout(function(){
            check_residence();
         });
         $("#res_street").focusout(function(){
            check_residence();
         });
         $("#res_subd").focusout(function(){
            check_residence();
         });
         $("#res_zipcode").focusout(function(){
            check_residence();
         });
        $("#per_reg").focusout(function(){
           check_permanent();
        });
        $("#per_province").focusout(function(){
           check_permanent();
        });
        $("#per_city").focusout(function(){
           check_permanent();
        });
        $("#per_brgy").focusout(function(){
           check_permanent();
        });
        $("#per_lot_no").focusout(function(){
           check_permanent();
        });
        $("#per_street").focusout(function(){
           check_permanent();
        });
        $("#per_subd").focusout(function(){
           check_permanent();
        });
        $("#per_zipcode").focusout(function(){
           check_permanent();
        });

         $("#permanent").focusout(function(){
            check_permanent();
         });
         $("#telephone").focusout(function(){
            check_telephone();
         });
         $("#mobile_no").focusout(function(){
            check_mobile_no();
         });
         $("#email_address").focusout(function(){
            check_email_address();
         });

         function check_sur_name() {
            var pattern = /^[a-zA-Z ]*$/;
            var sur_name = $("#sur_name").val();
            if (pattern.test(sur_name) && sur_name !== '') {
               $("#sur_name_error_message").hide();
               error_sur_name = false;
            } else {
               $("#sur_name_error_message").html("Should contain Letters only.");
               $("#sur_name_error_message").show();
               error_sur_name = true;
            }
         }

         function check_first_name() {
            var pattern = /^[a-zA-Z ]*$/;
            var first_name = $("#first_name").val()
            if (pattern.test(first_name) && first_name !== '') {
               $("#first_name_error_message").hide();
               error_first_name = false;
            } else {
               $("#first_name_error_message").html("Should contain Letters only.");
               $("#first_name_error_message").show();
               error_first_name = true;
            }
         }
        function check_middle_name() {
            var pattern = /^[a-zA-Z ]*$/;
            var middle_name = $("#middle_name").val()
            if (pattern.test(middle_name) && middle_name !== '') {
               $("#middle_name_error_message").hide();
               error_middle_name = false;
            } else {
               $("#middle_name_error_message").html("Should contain Letters only.");
               $("#middle_name_error_message").show();
               error_middle_name = true;
            }
         }
         function check_date_of_birth() {
            var pattern = /^[a-zA-Z ]*$/;
            var date_of_birth = $("#date_of_birth").val()
            if (date_of_birth !== '') {
               $("#date_of_birth_error_message").hide();
               error_date_of_birth = false;
            } else {
               $("#date_of_birth_error_message").html("Please provide.");
               $("#date_of_birth_error_message").show();
               error_date_of_birth = true;
            }
         }
        function check_pace_of_birth() {
            var pace_of_birth = $("#pace_of_birth").val()
            if (pace_of_birth !== '') {
               $("#pace_of_birth_error_message").hide();
               error_pace_of_birth = false;
            } else {
               $("#pace_of_birth_error_message").html("Please provide Place of Birth.");
               $("#pace_of_birth_error_message").show();
               error_pace_of_birth = true;
            }
         }
         function check_sex() {
            var sex = $("#sex").val()
            if (sex !== '') {
               $("#sex_error_message").hide();
               error_sex = false;
            } else {
               $("#sex_error_message").html("Please provide gender.");
               $("#sex_error_message").show();
               error_sex = true;
            }
         }
         function check_civil_status() {
            var civil_status = $("#civil_status").val()
            if (civil_status !== '') {
               $("#civil_status_error_message").hide();
               error_sex = false;
            } else {
               $("#civil_status_error_message").html("Please provide.");
               $("#civil_status_error_message").show();
               error_sex = true;
            }
         }


         function check_height() {
            var pattern = /^[0-9.]+$/;
            var height = $("#height").val()
            if (pattern.test(height) && height !== '') {
               $("#height_error_message").hide();
               error_height = false;
            } else {
               $("#height_error_message").html("Numbers only.");
               $("#height_error_message").show();
               error_height = true;
            }
         }
         function check_weight() {
            var pattern = /^[0-9.]+$/;
            var weight = $("#weight").val()
            if (pattern.test(weight) && weight !== '') {
               $("#weight_error_message").hide();
               error_weight = false;
            } else {
               $("#weight_error_message").html("Numbers only.");
               $("#weight_error_message").show();
               error_weight = true;
            }
         }
         function check_gsis_id_no() {
            var pattern = /^[0-9]+$/;
            var gsis_id_no = $("#gsis_id_no").val()
            if (pattern.test(gsis_id_no) || gsis_id_no == "") {
               $("#gsis_id_no_error_message").hide();
               error_gsis_id_no = false;
            } else {
               $("#gsis_id_no_error_message").html("Numbers only.");
               $("#gsis_id_no_error_message").show();
               error_gsis_id_no = true;
            }
         }
         function check_pagibig_id_no() {
            var pattern = /^[0-9]+$/;
            var pagibig_id_no = $("#pagibig_id_no").val()
            if (pattern.test(pagibig_id_no) || pagibig_id_no == "") {
               $("#pagibig_id_no_error_message").hide();
               error_pagibig_id_no = false;
            } else {
               $("#pagibig_id_no_error_message").html("Numbers only.");
               $("#pagibig_id_no_error_message").show();
               error_pagibig_id_no = true;
            }
         }
         function check_philhealth_no() {
            var pattern = /^[0-9]+$/;
            var philhealth_no = $("#philhealth_no").val()
            if (pattern.test(philhealth_no) || philhealth_no == "") {
               $("#philhealth_no_error_message").hide();
               error_philhealth_no = false;
            } else {
               $("#philhealth_no_error_message").html("Numbers only.");
               $("#philhealth_no_error_message").show();
               error_philhealth_no = true;
            }
         }

         function check_sss_no() {
            var pattern = /^[0-9]+$/;
            var sss_no = $("#sss_no").val()
            if (pattern.test(sss_no) || sss_no == "") {
               $("#sss_no_error_message").hide();
               error_sss_no = false;
            } else {
               $("#sss_no_error_message").html("Numbers only.");
               $("#sss_no_error_message").show();
               error_sss_no = true;
            }
         }

         function check_tin_no() {
            var pattern = /^[0-9]+$/;
            var tin_no = $("#tin_no").val()
            if (pattern.test(tin_no) || tin_no == "") {
               $("#tin_no_error_message").hide();
               error_tin_no = false;
            } else {
               $("#tin_no_error_message").html("Numbers only.");
               $("#tin_no_error_message").show();
               error_tin_no = true;
            }
         }

         function check_agency_employee_no() {
            var pattern = /^[0-9]+$/;
            var agency_employee_no = $("#agency_employee_no").val()
            if (pattern.test(agency_employee_no) || agency_employee_no == "") {
               $("#agency_employee_no_error_message").hide();
               error_agency_employee_no = false;
            } else {
               $("#agency_employee_no_error_message").html("Numbers only.");
               $("#agency_employee_no_error_message").show();
               error_agency_employee_no = true;
            }
         }
         function check_citizenship() {
            var citizenship = $("#citizenship").val()
            if (citizenship !== '') {
               $("#citizenship_error_message").hide();
               error_citizenship = false;
            } else {
               $("#citizenship_error_message").html("Please provide.");
               $("#citizenship_error_message").show();
               error_citizenship = true;
            }
         }
         function check_residence() {
            var pattern = /^[0-9]+$/;
            var res_reg = $("#res_reg").val()
            var res_province = $("#res_province").val()
            var res_city = $("#res_city").val()
            var res_brgy = $("#res_brgy").val()
            var res_lot_no = $("#res_lot_no").val()
            var res_street = $("#res_street").val()
            var res_subd = $("#res_subd").val()
            var res_zipcode = $("#res_zipcode").val()
            if (res_reg == "") {
               $("#residence_error_message").html("Please provide region.");
               $("#residence_error_message").show();
               error_residence = true;
            } else if (res_province == "") {
               $("#residence_error_message").html("Please provide province.");
               $("#residence_error_message").show();
               error_residence = true;
            } else if (res_city == "") {
               $("#residence_error_message").html("Please provide city.");
               $("#residence_error_message").show();
               error_residence = true;
            } else if (res_brgy == "") {
               $("#residence_error_message").html("Please provide barangay.");
               $("#residence_error_message").show();
               error_residence = true;
            } else if (res_lot_no == "") {
               $("#residence_error_message").html("Please provide house no.");
               $("#residence_error_message").show();
               error_residence = true;
            } else if (res_street == "") {
               $("#residence_error_message").html("Please provide street.");
               $("#residence_error_message").show();
               error_residence = true;
            } else if (res_subd == "") {
               $("#residence_error_message").html("Please provide subdivision.");
               $("#residence_error_message").show();
               error_residence = true;
            } else if (res_zipcode == "") {
               $("#residence_error_message").html("Please provide zip code.");
               $("#residence_error_message").show();
               error_residence = true;
            }else if (!pattern.test(res_zipcode)) {
               $("#residence_error_message").html("Number only.");
               $("#residence_error_message").show();
               error_residence = true;
            } else  {
               $("#residence_error_message").hide();
               error_residence = false;
            }
         }
         function check_permanent() {
            var pattern = /^[0-9]+$/;
           var per_reg = $("#per_reg").val()
           var per_province = $("#per_province").val()
           var per_city = $("#per_city").val()
           var per_brgy = $("#per_brgy").val()
           var per_lot_no = $("#per_lot_no").val()
           var per_street = $("#per_street").val()
           var per_subd = $("#per_subd").val()
           var per_zipcode = $("#per_zipcode").val()
           if (per_reg == "") {
              $("#permanent_error_message").html("Please provide region.");
              $("#permanent_error_message").show();
              error_permanent = true;
           } else if (per_province == "") {
              $("#permanent_error_message").html("Please provide province.");
              $("#permanent_error_message").show();
              error_permanent = true;
           } else if (per_city == "") {
              $("#permanent_error_message").html("Please provide city.");
              $("#permanent_error_message").show();
              error_permanent = true;
           } else if (per_brgy == "") {
              $("#permanent_error_message").html("Please provide barangay.");
              $("#permanent_error_message").show();
              error_permanent = true;
           } else if (per_lot_no == "") {
              $("#permanent_error_message").html("Please provide house no.");
              $("#permanent_error_message").show();
              error_permanent = true;
           } else if (per_street == "") {
              $("#permanent_error_message").html("Please provide street.");
              $("#permanent_error_message").show();
              error_permanent = true;
           } else if (per_subd == "") {
              $("#permanent_error_message").html("Please provide subdivision.");
              $("#permanent_error_message").show();
              error_permanent = true;
           } else if (per_zipcode == "") {
              $("#permanent_error_message").html("Please provide zip code.");
              $("#permanent_error_message").show();
              error_permanent = true;
           } else if (!pattern.test(per_zipcode)) {
              $("#permanent_error_message").html("Number only.");
              $("#permanent_error_message").show();
              error_permanent = true;
           }else  {
              $("#permanent_error_message").hide();
              error_permanent = false;
           }
        }
         function check_telephone() {
            var pattern = /^[0-9]+$/;
            var telephone = $("#telephone").val()
            if (pattern.test(telephone) || telephone == "") {
               $("#telephone_error_message").hide();
               error_telephone = false;
            } else {
               $("#telephone_error_message").html("Numbers only.");
               $("#telephone_error_message").show();
               error_telephone = true;
            }
         }
         function check_mobile_no() {
            var pattern = /^\d{11}$/;
            var mobile_no = $("#mobile_no").val()
            if (pattern.test(mobile_no)) {
               $("#mobile_no_error_message").hide();
               error_mobile_no = false;
            } else {
               $("#mobile_no_error_message").html("Numbers only.");
               $("#mobile_no_error_message").show();
               error_mobile_no = true;
            }
         }
         function check_email_address() {
            var pattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
            var email_address = $("#email_address").val();
            if (pattern.test(email_address) && email_address !== '') {
               $("#email_address_error_message").hide();
               error_email_address = false;
            } else {
               $("#email_address_error_message").html("Invalid Email");
               $("#email_address_error_message").show();
               error_email_address = true;
            }
         }

         $("#personal_info_form").submit(function() {
            error_sur_name = false;
             error_first_name = false;
             error_middle_name = false;
             error_name_ext = false;
             error_date_of_birth = false;
             error_pace_of_birth = false;
             error_sex = false;
             error_civil_status = false;
             error_height = false;
             error_weight = false;
             error_blood_type = false;
             error_gsis_id_no = false;
             error_pagibig_id_no = false;
             error_philhealth_no = false;
             error_sss_no = false;
             error_tin_no = false;
             error_agency_employee_no = false;
             error_citizenship = false;
             error_citizenship_country = false;
             error_residence = false;
             error_permanent = false;
             error_telephone = false;
             error_mobile_no = false;
             error_email_address = false;

            check_sur_name();
            check_first_name();
            check_middle_name();
            check_date_of_birth();
            check_pace_of_birth();
            check_sex();
            check_civil_status();
            check_height();
            check_weight();
            check_citizenship();
            check_residence();
            check_permanent();
            check_telephone();
            check_mobile_no();
            check_email_address();


            if (error_sur_name == false
            && error_first_name == false
            && error_middle_name == false
            && error_pace_of_birth == false
            && error_sex == false
            && error_date_of_birth == false
            && error_civil_status == false
            && error_height == false
            && error_weight == false
            && error_citizenship == false
            && error_citizenship_country == false
            && error_residence == false
            && error_permanent == false
            && error_email_address == false
            && error_telephone == false
            && error_mobile_no == false) {
               return true;
            } else {
               alert("Please Fill the form Correctly");
               return false;
            }


         });
      });

$(document).ready(function(){
            $("#citizenship").change(function(){
                if($("#citizenship" ).val() == 0){
                console.log("not filipino");
                    $('#citizenship_country').hide();
                    $('#red_country_hide').hide();
                    $('#country_hide').hide();
                }else{
                    $('#citizenship_country').show();
                    $('#red_country_hide').show();
                    $('#country_hide').show();
                }
            });
        });

