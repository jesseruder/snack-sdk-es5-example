var snackSdk = require('snack-sdk');
var qrCode = require('qrcode-npm');

window.startSessionAndGetUrlAsync = function (initialCode) {
  window.snackSession = new snackSdk.SnackSession({
    code: initialCode,
  });

  return window.snackSession.startAsync().then(function () {
    return window.snackSession.getUrlAsync();
  });
};

window.writeQRCode = function (url) {
  var qr = qrCode.qrcode(4, 'M');
  qr.addData(url);
  qr.make();
  var imgTag = qr.createImgTag(4);
  document.write(imgTag);
};
