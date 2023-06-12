$(document).ready(function () {
    $("form").submit(function (e) {
        e.preventDefault();// Evita que o formulário seja submetido normalmente (impedindo o envio dos dados e o recarregar da página)

        let dados = $("#qrcode").val();
        let qrcodeURL = "https://chart.googleapis.com/chart?cht=qr&chs=150x150&chl=" + dados;
        $("img").attr({ src: qrcodeURL, alt: "QR Code" });
    });
});
