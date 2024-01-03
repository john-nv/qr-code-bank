let number = 1015422345
let binCode = 970436

let getUsername = !localStorage.getItem('username') || String(localStorage.getItem('username')).length < 1 
    ? ''
    : localStorage.getItem('username') 

$('#banking_content').val(getUsername)

$("#qrImage").attr("src", `https://qr.sepay.vn/img?acc=${number}&bank=${binCode}`);

$("#banking_amount, #banking_content").on("input", function () {
    localStorage.setItem('username', $('#banking_content').val())
    updateQRCode();
});

function formatCurrency(inputElement) {
    let value = inputElement.value.replace(/[^0-9]/g, '');

    if (value === "") return inputElement.value = "";

    let formattedValue = new Intl.NumberFormat('vi-VN', { style: 'decimal' }).format(parseFloat(value));
    formattedValue = formattedValue.replace(/[₫]/g, ''); // Loại bỏ ký tự "₫" nếu có
    inputElement.value = formattedValue;
    
}

$("#banking_amount").on("input", function() {
    formatCurrency(this);
    updateQRCode();
});



formatCurrency($("#banking_amount")[0]); 

$("#banking_content").on("input", function () {
    updateQRCode();
});

function updateQRCode() {
    let amount = $("#banking_amount").val();
    amount = amount.replace(/[ .vn₫]/g, '');
    const des = $("#banking_content").val();
    const newSrc = `https://qr.sepay.vn/img?acc=${number}&bank=${binCode}&amount=${amount}&des=${des}`;
    $("#qrImage").attr("src", newSrc);
}