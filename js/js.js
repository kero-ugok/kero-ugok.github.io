let product = {
  uebxli: {
    leftCaption: '<h3><a href="https://uebxli.github.io/" target="_brank">UebXli紹介サイト</a></h3><h4>ウェブを自主的に学びたい学生たちを繋いで応援するオンラインサークル</h4><p>ゼミ活動の一環として、Web制作応援サークルを作りました。このサイトは、そのメンバーと初めて共同制作したサイトです。私はヘッダー・トップとJavaScriptを担当しました。チームの中で私が最も長くWEB制作に関して学んでいたので、自分の担当箇所を素早く終わらせ、サポート役に徹しました。</p>',
    rightTags: '<div class="tag tag-notalone">共同制作</div><div class="tag tag-htmlcss">HTML5 / CSS3</div><div class="tag tag-js">JavaScript</div>',
    Date: '2020/05 ~ 2020/06',
    url: 'https://uebxli.github.io/'
  },
  superpenguin: {
    leftCaption: '<h3><a href="SUPER_PENGUIN/index.html" target="_brank">SUPER PENGUIN -Official Site-</a></h3><h4>架空バンドグループ公式サイト</h4><p>ウェブデザイン演習という授業で制作した作品です。初めてデザインを学び、使用素材や色、背景に意味を持たせるよう意識しました。以前とは一味違うデザインができたと思っています。ロゴやバンド設定、ジャケット画像も全て制作しました。ディスコグラフィーページでの画像の使い方に苦労しました。この授業でデザインの楽しさを学びました。</p>',
    rightTags: '<div class="tag tag-alone">個人制作</div><div class="tag tag-htmlcss">HTML5 / CSS3</div><div class="tag tag-js">JavaScript</div><div class="tag tag-cssframe">CSSフレームワーク</div><div class="tag tag-illustrator">Adobe Illustrator</div>',
    Date: '2020/07 ~ 2020/08',
    url: 'SUPER_PENGUIN/index.html'
  },
  ugokradio: {
    leftCaption: '<h3><a href="https://uebxli.github.io/ugok-radio/index.html" target="_brank">UGOKラジオ紹介サイト</a></h3><h4>UGOK広報ラジオ紹介サイト</h4><p>初めて他の人のために制作したサイトです。UGOKとは、分離融合系女子大生が学んだことを発信するグループで、今回はその広報を行うラジオ班の宣伝サイトを制作しました。デザイン、トップ画像、配信内容部分を担当しています。広報班メンバーの印象からイメージカラーを決め、デザインしました。イメージカラーの許可を得た際、「私の好きな色がわかるなんてすごい」と言っていただきました。</p>',
    rightTags: '<div class="tag tag-notalone">共同制作</div><div class="tag tag-htmlcss">HTML5 / CSS3</div><div class="tag tag-js">JavaScript</div><div class="tag tag-illustrator">Adobe Illustrator</div>',
    Date: '2020/08 ~ 2020/09',
    url: 'https://uebxli.github.io/ugok-radio/index.html'
  },
  moppymovie: {
    leftCaption: '<h3><a href="https://moppymovie.github.io" target="_brank">映画もっぴぃ インターネット大冒険 公式サイト</a></h3><h4>架空映画公式サイト</h4><p>クロスメディア演習という授業で制作しました。この授業ではサイトだけでなく、映画PV・ポスター・劇場入場者特典など、様々な作品を制作しました。映画PV以外を担当しました。これまでの作品の中で最も制作期間が長く、力を注いだ作品です。インターネットの世界をイメージし、青色を多く使用しています。</p>',
    rightTags: '<div class="tag tag-notalone">共同制作</div><div class="tag tag-htmlcss">HTML5 / CSS3</div><div class="tag tag-js">JavaScript</div><div class="tag tag-cssframe">CSSフレームワーク</div><div class="tag tag-illustrator">Adobe Illustrator</div><div class="tag tag-photoshop">Adobe Photoshop</div><div class="tag tag-aftereffects">Adobe AfterEffects</div>',
    Date: '2020/11 ~ 2020/12',
    url: 'https://moppymovie.github.io'
  },
  sushi: {
    leftCaption: '<h3><a href="sushi/index.html" target="_brank">漢字読み取りゲーム 魚・魚・魚</a></h3><h4>魚の漢字読み取りゲーム</h4><p>ウェブアプリケーション設計演習という授業で制作しました。アニメーションはCSS3を使用しており、Vue.jsとの連動を目指しました。効果音を使用しており、よりゲームらしく制作できました。卒業研究でしたいことのテストとしてクイズゲームにしました。出題範囲を絞るため、魚の漢字限定にしました。（お寿司が好きだからもあります）制作日数は4日でした。</p>',
    rightTags: '<div class="tag tag-alone">個人制作</div><div class="tag tag-htmlcss">HTML5 / CSS3</div><div class="tag tag-js">JavaScript</div><div class="tag tag-vue">Vue.js</div>',
    Date: '2021/12',
    url: 'sushi/index.html'
  }
}

let productName = ['uebxli', 'superpenguin', 'ugokradio', 'moppymovie', 'sushi']

let topNum = 1;

let app = new Vue({
  el: '#app',
  data: {
    pcTop: 'img/top_' + topNum + '.jpg',
    phoneTop: 'img/phone_top_' + topNum + '.jpg',
    show: 'hide',
    urlJump: '',
    img_1: '',
    img_1_2: '',
    img_2: '',
    img_3: '',
    caption: '',
    tags: '',
    date: '',
    num: ''
  },
  methods: {
    chageTop: function () {
      setTimeout(() => {
        if (topNum < 5) {
          topNum += 1;
          this.pcTop = 'img/top_' + topNum + '.jpg';
          this.phoneTop = 'img/phone_top_' + topNum + '.jpg';
        } else {
          topNum = 1;
          this.pcTop = 'img/top_' + topNum + '.jpg';
          this.phoneTop = 'img/phone_top_' + topNum + '.jpg';
        }
        setTimeout(this.chageTop, 7000);
      }, 7000);
    },
    productChandge: function (num) {
      this.urlJump = product[productName[this.num]].url;
      this.img_1 =  'img/products/' + productName[this.num] + '_1.jpg';
      this.img_1_2 = 'img/products/' + productName[this.num] + '_1.jpg';
      this.img_2 = 'img/products/' + productName[this.num] + '_2.jpg';
      this.img_3 = 'img/products/' + productName[this.num] + '_3.jpg';
      this.caption = product[productName[this.num]].leftCaption;
      this.tags = product[productName[this.num]].rightTags;
      this.date = product[productName[this.num]].Date;
    },
    imgChange_1: function () {
      this.img_1 = this.img_1_2;
    },
    imgChange_2: function () {
      this.img_1 = this.img_2;
    },
    imgChange_3: function () {
      this.img_1 = this.img_3;
    },
    close: function () {
      this.show = 'hide';
    },
    clickUeb: function () {
      this.num = 0;
      this.productChandge();
      this.show = 'show';
    },
    clickSp: function () {
      this.num = 1;
      this.productChandge();
      this.show = 'show';
    },
    clickUgok: function () {
      this.num = 4;
      this.productChandge();
      this.show = 'show';
    },
    clickMoppy: function () {
      this.num = 5;
      this.productChandge();
      this.show = 'show';
    },
    clickSushi: function () {
      this.num = 6;
      this.productChandge();
      this.show = 'show';
    }
  }
})

app.chageTop();