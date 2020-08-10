function toggleNav() {
   let body = document.body;
   let hamburger = document.getElementById('js_hamburger');
   let nav = document.getElementById('js_nav');

   hamburger.addEventListener('click', function () {
      body.classList.toggle('nav_open');
   });
   nav.addEventListener('click', function () {
      body.classList.remove('nav_open');
   });
}
toggleNav();

let nowBrowser = window.navigator.userAgent.toLowerCase(); //ブラウザ取得

let logo = document.getElementById('logo');

logo.addEventListener('click', (e) => {
  if (nowBrowser.indexOf('iphone') !== -1 || nowBrowser.indexOf('ipad') !== -1) {
    let phonesmooth = (e, time, where) => {
      let eTop = e.getBoundingClientRect().top;
      let eAmt = eTop / 100;
      let curTime = 0;
      while (curTime <= time) {
        window.setTimeout(phonescroll, curTime, eAmt, where);
        curTime += time / 130;
      }
    }

    let phonescroll = (eAmt, where) => {
      if (where == "center" || where == "") window.scrollBy(0, eAmt * 2);
      if (where == "top") window.scrollBy(0, eAmt * 2);
    }

    phonesmooth(document.querySelector('body'), 400, where);
  } else if (nowBrowser.indexOf('safari') !== -1) {
    let smooth = (e, time, where) => {
      let eTop = e.getBoundingClientRect().top;
      let eAmt = eTop / 100;
      let curTime = 0;
      while (curTime <= time) {
        window.setTimeout(scroll, curTime, eAmt, where);
        curTime += time / 100;
      }
    }

    let scroll = (eAmt, where) => {
      if (where == "center" || where == "") window.scrollBy(0, eAmt + 1);
      if (where == "body") window.scrollBy(0, eAmt);
    }

    smooth(document.querySelector('body'), 250, "");
  } else {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  }
});
