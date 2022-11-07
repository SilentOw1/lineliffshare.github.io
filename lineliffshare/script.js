"use strict";

function initLiffSDK() {
  //啟用Liff-----------------
  var liffID = "1657612795-jyOnda3y";
  liff
    .init({
      liffId: liffID,
      // withLoginOnExternalBrowser: true,
    })
    .then(function () {
      console.log("LIFF init");
      //這邊開始寫入欲使用的LIFF功能-----------------
      //判斷是否由LINE APP存取且使用者是否已登入
      if (!liff.isInClient() && !liff.isLoggedIn()) {
        console.log("登入line");
        liff.login();
      } else {
        //開始使用LIFF API
        console.log("Start LIFF API");
      }
    })
    .catch(function (error) {
      console.log(error);
    });
}

initLiffSDK();

function sendShareData() {
  //若已經登入LINE且LINE版本支持ShareTargetPicker
  if (liff.isApiAvailable("shareTargetPicker")) {
    console.log("ShareMyMessage");
    liff
      .shareTargetPicker([
        {
          type: "text",
          text: "message",
        },
      ])
      .then((res) => window.alert(res.status))
      .catch((error) => window.alert(error));
  } else {
    console.log("Fail to ShareMyMessage");
  }
}

document
  .getElementById("sendShareTarget")
  .addEventListener("click", sendShareData);
