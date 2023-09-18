document.getElementById('getqrInfo-mob').addEventListener('click', () => {
  // 入力された文字列を取得
  var userInput = document.getElementById('isbn-mob').value;
  var query = userInput.split(' ').join('+');
  // QRコードの生成
  (function () {
    var qr = new QRious({
      element: document.getElementById('qr-mob'),
      // 入力した文字列でQRコード生成
      value: query
    });
    qr.background = '#FFF'; //背景色
    qr.backgroundAlpha = 0.8; // 背景の透過率
    qr.foreground = '#000000'; //QRコード自体の色
    qr.foregroundAlpha = 1.0; //QRコード自体の透過率
    qr.level = 'L'; // QRコードの誤り訂正レベル
    qr.size = 200; // QRコードのサイズ
    // QRコードをflexboxで表示
    document.getElementById('qrOutput-mob').style.display = 'flex';
    document.getElementById('qrDownload-mob').innerHTML = 'ダウンロード方法：画像長押しで画像を保存';
    document.getElementById('qrDownload-mob').style.visibility = 'visible';
  })();
  // png出力用コード
  var cvs = document.getElementById("qr");
  var png = cvs.toDataURL();
  document.getElementById("newImg").src = png;
  document.getElementById('qrOutput-mob').style.display = 'none';
});