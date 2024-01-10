function generateQRCode() {
  var Url = document.getElementById("url").value;
  if (Url.length != 0) {
    var qrCode = new QRCode(document.getElementById("qrcode"), {
      text: Url,
      width: 256,
      height: 256,
      colorDark: "#000000",
      colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.H,
    });

    window.qrCodeInstance = qrCode;
  } else {
    alert("Please Enter Text/URL");
  }
}
