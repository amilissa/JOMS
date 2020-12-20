window.addEventListener("load", function () {
    const loader = document.querySelector(".loader");
    loader.className += " hidden"; // class "loader hidden"
});

$(document).ready(function(){
        var 	$reg = $('#res_reg'),
            $prov = $('#res_province'),
            $city = $('#res_citymun'),
            $brgy = $('#res_barangay'),
            $optionprov = $prov.find('option');

            $reg.on('change', function(){

                $prov.html($optionprov.filter('[value="'+$prov.value+'"]'));

        });
        });


$("#res_reg").change(function(){
    var url = $("#personal_info_form").attr("data-provinces-url");
    var reg_id = $(this).val();
    var char = {'res_reg': reg_id};
        console.log(char);
    $.ajax({
        url: url,
        data: {
            'res_reg': reg_id
        },
        success: function(data){
        $("#res_province").html(data);
        }
    });
});

$("#res_province").change(function(){
    var url = $("#personal_info_form").attr("data-citymun-url");
    var prov_id = $(this).val();


    var char = {'prov_id': prov_id};
        console.log(char);
    $.ajax({
        url: url,
        data: {
            'res_province': prov_id
        },
        success: function(data){
        $("#res_city").html(data);

        }
    });
});

$("#res_city").change(function(){
    var url = $("#personal_info_form").attr("data-brgy-url");
    var city_id = $(this).val();


    var char = {'city_id': city_id};
        console.log(char);
    $.ajax({
        url: url,
        data: {
            'res_city': city_id
        },
        success: function(data){
        $("#res_brgy").html(data);

        }
    });
});

$("#per_reg").change(function(){
    var url = $("#personal_info_form").attr("data-provinces-url_per");
    var reg_id = $(this).val();
    var char = {'res_reg': reg_id};
        console.log(char);
    $.ajax({
        url: url,
        data: {
            'res_reg': reg_id
        },
        success: function(data){
        $("#per_province").html(data);
        }
    });
});

$("#per_province").change(function(){
    var url = $("#personal_info_form").attr("data-citymun-url_per");
    var prov_id = $(this).val();


    var char = {'prov_id': prov_id};
        console.log(char);
    $.ajax({
        url: url,
        data: {
            'res_province': prov_id
        },
        success: function(data){
        $("#per_city").html(data);

        }
    });
});

$("#per_city").change(function(){
    var url = $("#personal_info_form").attr("data-brgy-url_per");
    var city_id = $(this).val();


    var char = {'city_id': city_id};
        console.log(char);
    $.ajax({
        url: url,
        data: {
            'res_city': city_id
        },
        success: function(data){
        $("#per_brgy").html(data);

        }
    });
});



     $(document).ready(function(){

            $("#same").change(function(){
                if(this.checked){

                console.log("same address");
                    var reg = $("#res_reg").val();
                    var prov = $("#res_province").val();
                    var city = $("#res_city").val();
                    var brgy = $("#res_brgy").val();
                    var lot_no = $("#res_lot_no").val();
                    var street = $("#res_street").val();
                    var subd = $("#res_subd").val();
                    var zipcode = $("#res_zipcode").val();


                    $('#per_reg').val(reg);
                    $('#per_province').val(prov);
                    $('#per_city').val(city);
                    $('#per_brgy').val(brgy);
                    $('#per_lot_no').val(lot_no);
                    $('#per_street').val(street);
                    $('#per_subd').val(subd);
                    $('#per_zipcode').val(zipcode);


                     $('#per_reg').prop('disabled', true);
                     $('#per_province').prop('disabled', true);
                     $('#per_city').prop('disabled', true);
                     $('#per_brgy').prop('disabled', true);
                    document.getElementById('per_lot_no').readOnly = true;
                    document.getElementById('per_street').readOnly = true;
                    document.getElementById('per_subd').readOnly = true;
                    document.getElementById('per_zipcode').readOnly = true;


                }else{
                    $('#per_reg').val("");
                    $('#per_province').val("");
                    $('#per_city').val("");
                    $('#per_brgy').val("");
                    $('#per_lot_no').val("");
                    $('#per_street').val("");
                    $('#per_subd').val("");
                    $('#per_zipcode').val("");
                     $('#per_reg').prop('disabled', false);
                     $('#per_province').prop('disabled', false);
                     $('#per_city').prop('disabled', false);
                     $('#per_brgy').prop('disabled', false);
                    document.getElementById('per_lot_no').readOnly = false;
                    document.getElementById('per_street').readOnly = false;
                    document.getElementById('per_subd').readOnly = false;
                    document.getElementById('per_zipcode').readOnly = false;


                }
            });

        });