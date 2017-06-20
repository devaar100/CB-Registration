window.onload= function () {
    var btn=document.getElementById("cblogo");
    var screen1=document.getElementById("startpage1");
    var screen2=document.getElementById("startpage2");
    btn.onclick=function () {
      console.log("works");
      screen1.style.animation="shrink1 2s";
      screen2.style.animation="shrink2 2s";
      screen1.style.height=0;
      screen2.style.height=0;
      btn.remove();
    };
};
