var cars = 
        [
            ["Regular", "R_A1"],
            ["Regular", "R_A2"],
            ["Premium", "P_B1"],
            ["Premium", "P_B2"],
            ["dedicated_Regular", "DR_A1"],
            ["dedicated_Premium", "DP_B2"]
        ];

printJS({ 
            maxWidth: 375, // the width of your paper
            printable: 'print', // the id
            type: 'html',
            css: 'print.min.css' // your css
});

function submitAJAX()
{
        $.ajax(
            {
                url: "userCheckout.php", 
                data: 
                {
                    customerName: $('#customerName').value(),
                    customerNumber: $('#customerNumber').value(),
                    nationality: $('#nationality').value(),
                    serverClass: $('#serverClass').value(),
                    serverType: $('#serverType').value(),
                    rentDuration: $('#rentDuration').value(),
                    paymentType: $('#paymentType').value()
                },
                method: 'POST',
                success: function(result)
            {
                $("#div1").html(result);
            }
        });
}

function verificationComplete()
{
    swal("Verification Success!", "You are being Redirected to the Store Page", "success");
}

function getCars() 
{
            var merk = document.getElementById("serverClass").value;
            var mobil = document.getElementById("serverType").value;

            var option = "";
            
            for (let i = 0; i < cars.length; i++) 
            {
                if(cars[i][0] == merk)
                {
                    option += '<option value="'+cars[i][1]+'">'+cars[i][1]+'</option>';
                }
            }

            document.getElementById("serverType").disabled = false;
            document.getElementById('serverType').innerHTML = option;
}		

function getHarga()
{
    var e = document.getElementById("serverType");
    var value = e.options[e.selectedIndex].value;
    var text = e.options[e.selectedIndex].text;

    // debug
    // document.write(
    //                 "<center>" 
    //                     +
    //                 "<h1>value: " + "" + value 
    //                 + "<br>" + 
    //                 "text : " + text + "</h1>"
    //                     + 
    //                 "</center>"
    //               );

    var setHarga = document.getElementById("total").innerHTML;
    switch (value)
    {
       case 'R_A1':
        document.getElementById("total").innerHTML='Rp. 15000';
       break;
    
       case 'R_A2':
        document.getElementById("total").innerHTML='Rp. 25000';
       break;
    
       case 'P_B1': 
        document.getElementById("total").innerHTML='Rp. 35000';
       break;
    
       case 'P_B2': 
        document.getElementById("total").innerHTML='Rp. 45000';
       break;
    
       case 'DR_A1': 
        document.getElementById("total").innerHTML='Rp. 55000';
       break;

       case 'DP_B2': 
        document.getElementById("total").innerHTML='Rp. 65000';
       break;

       //default:  document.getElementById('harga').innerHTML='Rp25000';
       
    }
}

function FungsiNilai()
{

    var hargavar = document.getElementById("total").innerHTML;
    var rentDuration = document.getElementById("rentDuration");
    var getRentDuration = rentDuration.options[rentDuration.selectedIndex].text;
    var setRentDuration = 0;

    var dpvar = document.getElementById("dp").value;
    var year = 12;
    switch(getAngsuranValue)
    {
        case '1':
            setRentDuration = year * 3;
        break;
        case '3':
            setRentDuration = year * 4;
        break;
        case '6':
            setRentDuration = year * 5;
        break;
        case '12':
            setRentDuration = year * 5;
        break;
    }

        var output = (parseInt(hargavar) - parseInt(dpvar)) / parseInt(setRentingDuration);
    document.getElementById("hasilangsuran").value=output;
}