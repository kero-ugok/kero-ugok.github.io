let body = document.body;
let header = document.getElementById('head');
let headerPh = document.getElementById('head_ph');
let logo = document.getElementById('logo_img')

//ヘッダーロゴ色変更
header.addEventListener('mouseenter', () => {
  logo.setAttribute('src', "img/sample_logo_w.png");
});

header.addEventListener('mouseleave', () => {
  logo.setAttribute('src', "img/sample_logo.png");
});

//ヘッダーボタンここから
let under = document.querySelector('.nav_under');

let btn = ['item', 'recruit', 'company', 'ask', 'brand', 'online'];
btn[0] = document.getElementById('item');
btn[1] = document.getElementById('recruit');
btn[2] = document.getElementById('company');
btn[3] = document.getElementById('ask');
btn[4] = document.getElementById('brand');
btn[5] = document.getElementById('online');

let otherBtn = ['shop', 'insta'];
otherBtn[0] = document.getElementById('shop');
otherBtn[1] = document.getElementById('insta');

let menu = ['unItem', 'unRecruit', 'unCompany', 'unAsk', 'unBrand', 'unOnline'];
menu[0] = document.querySelector('.un_item');
menu[1] = document.querySelector('.un_recruit');
menu[2] = document.querySelector('.un_company');
menu[3] = document.querySelector('.un_ask');
menu[4] = document.querySelector('.un_brand');
menu[5] = document.querySelector('.un_online');

let showCheck = (elem, unElem) => {
  elem.classList.remove('white');
  unElem.classList.remove('show');
};

let allCheck = (num) => {
  for (i = 0; i < 6; i++) {
    if (num != i) {
      showCheck(btn[i], menu[i]);
    }
  }
}

for (let i = 0; i < 6; i++) {
  btn[i].addEventListener('mouseenter', () => {
    allCheck(i);
    console.log(i);
    if (!menu[i].classList.contains('show')) {
      under.classList.add('nav_show');
      menu[i].classList.add('show');
      btn[i].classList.add('white');
    }
  });
  menu[i].addEventListener('mouseleave', () => {
    under.classList.remove('nav_show');
    menu[i].classList.remove('show');
    btn[i].classList.remove('white');
    console.log('fin');
  });
}

for (let i = 0; i < 2; i++) {
  otherBtn[i].addEventListener('mouseenter', () => {
    allCheck(7);
  });
}

//スクロール色変更
window.onscroll = () => {
  let scroll = document.documentElement.scrollTop || document.body.scrollTop;


  if (scroll > 0) {
    header.classList.add('header_scroll');
    headerPh.classList.add('header_scroll');
  } else if (scroll < 10) {
    header.classList.remove('header_scroll');
    headerPh.classList.remove('header_scroll');
  }
};

let phLogo = document.getElementById('ph_logo');

function toggleNav() {
  let body = document.body;
  let hamburger = document.getElementById('js_hamburger');
  let nav = document.getElementById('hamnav');

  hamburger.addEventListener('click', function () {
    body.classList.toggle('nav_open');

    if (body.classList.contains('nav_open')) {
      phLogo.setAttribute('src', 'img/sample_logo_w.png');
    } else {
      phLogo.setAttribute('src', 'img/sample_logo.png');
    }
  });
  nav.addEventListener('click', function () {
    body.classList.remove('nav_open');
  });
}
toggleNav();
