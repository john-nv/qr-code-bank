let number = 1015422345
let binCode = 970436

let getUsername = !localStorage.getItem('username') || String(localStorage.getItem('username')).length < 1 
    ? ''
    : localStorage.getItem('username') 

$('#banking_content').val(getUsername)

$("#qrImage").attr("src", `https://qr.sepay.vn/img?acc=${number}&bank=${binCode}`);
// $('#dialog').modal('show')

// $('#start').on('click', () => {
//     let value_input = $('#value_start').val()
//     console.log(value_input.length)
//     if(value_input.length > 0) {
//         $('#dialog').modal('hide')
//         $("#banking_amount").focus();
//         updateQRCode()
//     } else {
//         alert("Please enter information")
//     }
// })

// $("#value_start").on("input", function () {
//     if($('#value_start').val().length > 0) {
//         $('#start').prop( "disabled", false );
//         $('#banking_content').val($('#value_start').val())
//     }else {
//         $('#start').prop( "disabled", true );
//     }
// });

$("#banking_amount, #banking_content").on("input", function () {
    localStorage.setItem('username', $('#banking_content').val())
    updateQRCode();
});

$("#banking_amount").on("input", function () {
    this.value = this.value.replace(/[^0-9]/g, '');
    updateQRCode();
});

$("#banking_content").on("input", function () {
    updateQRCode();
});

$("#banking_copy").click(function () { copyToClipboard("banking"); });
$("#banking_id_copy").click(function () { copyToClipboard("banking_id"); });
$("#banking_name_copy").click(function () { copyToClipboard("banking_name"); });
$("#banking_content_copy").click(function () { copyToClipboard("banking_content"); });
$("#banking_amount_copy").click(function () { copyToClipboard("banking_amount"); });

function copyToClipboard(inputId) {
    const input = $("#" + inputId)[ 0 ];
    input.select();
    document.execCommand('copy');

    alert(`Copy success ! \n\n${input.value}`);
}

function updateQRCode() {
    const amount = $("#banking_amount").val();
    const des = $("#banking_content").val();
    const newSrc = `https://qr.sepay.vn/img?acc=${number}&bank=${binCode}&amount=${amount}&des=${des}`;
    $("#qrImage").attr("src", newSrc);
}