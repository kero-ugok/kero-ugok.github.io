let ebrowser = window.navigator.userAgent.toLowerCase(); //ブラウザ取得

let btnAll = document.getElementById('all');
let btnSingle = document.getElementById('single');
let btnAlbum = document.getElementById('album');

let single = document.querySelectorAll('.single');
let album = document.querySelectorAll('.album');

let singleImg = document.querySelectorAll('.single img');
let albumImg = document.querySelectorAll('.album img');

let btnJ = document.querySelectorAll('.jacket button')
let cd = document.querySelectorAll('.cd');

let btnTop = document.getElementById('top');
let jacket = document.querySelector('.jacket').getBoundingClientRect().bottom;
let body = document.querySelector('body');

btnAll.addEventListener('click', () => {
  for (let i = 0; i < single.length; i++) {
    single[i].style.display = "block";
    singleImg[i].style.display = "block";
  }
  for (let i = 0; i < album.length; i++) {
    album[i].style.display = "block";
    albumImg[i].style.display = "block";
  }
});

btnSingle.addEventListener('click', () => {
  for (let i = 0; i < single.length; i++) {
    single[i].style.display = "block";
    singleImg[i].style.display = "block";
  }
  for (let i = 0; i < album.length; i++) {
    album[i].style.display = "none";
    albumImg[i].style.display = "none";
  }
});

btnAlbum.addEventListener('click', () => {
  for (let i = 0; i < single.length; i++) {
    single[i].style.display = "none";
    singleImg[i].style.display = "none";
  }
  for (let i = 0; i < album.length; i++) {
    album[i].style.display = "block";
    albumImg[i].style.display = "block";
  }
});

for (let i = 0; i < btnJ.length; i++) {
  btnJ[i].addEventListener('click', () => {
    for (let i = 0; i < cd.length; i++) {
      if (cd[i].classList.contains('cd_show') === true) {
        cd[i].classList.remove('cd_show');
      }
    }
    let num = btnJ[i].dataset.num;
    cd[num].classList.add('cd_show');

    if (ebrowser.indexOf('iphone') !== -1 || ebrowser.indexOf('ipad') !== -1) {
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

      phonesmooth(cd[num], 400, where);
    } else if (ebrowser.indexOf('safari') !== -1) {
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
        if (where == "top") window.scrollBy(0, eAmt);
      }

      smooth(cd[num], 250, "");
    } else {
      window.scroll({
        top: cd[num].getBoundingClientRect().top,
        behavior: 'smooth'
      });
    }
  });
}

window.onscroll = () => {
  let scroll = document.documentElement.scrollTop || document.body.scrollTop;

    if (scroll > jacket) {
      btnTop.style.opacity = "1";
    } else {
      btnTop.style.opacity = "0";
    }
}

btnTop.addEventListener('click', () => {
  if (ebrowser.indexOf('iphone') !== -1 || ebrowser.indexOf('ipad') !== -1) {
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

    phonesmooth(body, 400, where);
  } else if (ebrowser.indexOf('safari') !== -1) {
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

    smooth(body, 250, "");
  } else {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  }
});
