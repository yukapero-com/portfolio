const Moment = require('moment');
const {tags} = require('/Users/yukapero/git/portfolio/public/js/tags.js');
const _ = require('underscore');

var works = {
  tweet_alert: {
    title: 'ツイート通知アプリ',
    scale: 30,
    summary: '指定されたTwitterアカウントがツイートすると、指定された読み上げ音声と共にツイートを通知してくれるWindows/Macアプリケーション',
    releaseDate: {
      startMoment: new Moment('2020-06-21'),
      endMoment: new Moment('2020-06-23'),
    },
    detail: `
    <p>指定されたTwitterアカウントを定期的にツールが巡回し、最新ツイートを検知すると、指定された読み上げ音声で通知してくれるWindows/Macアプリケーション。</p>
    <p>いち早く特定のアカウントのツイートを察知したい場合に便利です。</p>
    <p>ソースコード、ツール共に一般公開はしていませんが、詳細が気になる方はお気軽にお問い合わせください。</p>
    `,
    tags: [
      tags.SMALL,
      tags.PRODUCT,
      tags.WORK,
      tags.ELECTRON,
      tags.JS,
      tags.VUE,
      tags.NODE,
      tags.HTML,
      tags.CSS,
      tags.BOOTSTRAP,
    ],
  },
  game_engineer: {
    title: 'ゲーム開発/運営エンジニア',
    scale: 70,
    fitImageHeight: true,
    shouldHideWorkImage: true,
    summary: '都内IT企業に新卒入社。スマートフォンのゲームエンジニアとして勤務。ゲームの機能開発と運営業務を担当。',
    releaseDate: {
      startMoment: new Moment('2016-04-01'),
      endMoment: new Moment('2018-08-31'),
    },
    detail: `
    <p>
    都内某IT企業に新卒採用。<br>
    スマートフォンゲームの運営、機能開発を担当。<br>
    本番環境へのデプロイ作業や深夜メンテナンス、サーバーログの監視業務なども担当。
    </p>
    <p>数多くのユーザーを抱えるサービスに100人規模のチームの一員として開発にガッツリと関われた経験は、技術的にも人間的にも視野を大きく広げてくれました。</p>
    <p>既に私的な理由で退職しておりますが、入って間もない新人でもエンジニアとしてのスキルを存分に発揮させてくれたことにとても感謝しています。</p>
    `,
    tags: [
      tags.OTHERS,
      tags.WORK,
      tags.JS,
      tags.PERL,
      tags.MYSQL,
    ],
  },
  ec_research_web_tool_1: {
    title: 'ECサイト商品情報収集/管理Webサービス',
    scale: 60,
    summary: '某ECサイトの指定された複数商品の情報を一定時間毎に自動的に収集し、検索したり管理できるWebアプリ',
    releaseDate: {
      startMoment: new Moment('2020-03-17'),
      endMoment: new Moment('2020-05-02'),
    },
    detail: `
      <p>某ECサイト上で販売されている任意の複数商品の価格や品質などのデータを一定時間毎に収集するスクレイピング機能と、それによって収集されたデータを様々な条件で絞り込み検索を行ったり、ターゲットとなる商品を新規登録/削除したりできるWeb管理ツール。</p>
      <p>ログイン認証機能や、ユーザ登録機能、コメント機能、リアルタイムのスクレイピング状況を確認できる機能やログ閲覧機能なども搭載。</p>
      <p>仕入れ商品の強力な管理ツールとして利用できる。</p>
      <p>サーバーの選定から環境構築、DB設計、フロントエンド・バックエンド実装、リリースまで全てを担当。</p>
      <p>ソースコード、ツール共に一般公開はしていませんが、詳細が気になる方はお気軽にお問い合わせください。</p>
    `,
    tags: [
      tags.MEDIUM,
      tags.PRODUCT,
      tags.WORK,
      tags.MYSQL,
      tags.HTML,
      tags.CSS,
      tags.JS,
      tags.NODE,
      tags.AWS,
      tags.SCRAPING,
    ],
  },
  ec_research_web_tool_2: {
    title: 'EC商品価格推移リサーチ',
    scale: 60,
    summary: '複数ECサイトから一定時間毎に価格情報を収集し、それらデータの検索/価格推移調査/価格崩れ通知などをするWebアプリ',
    releaseDate: {
      startMoment: new Moment('2020-03-06'),
    },
    detail: `
      <p>複数のECサイトから本アプリケーションに登録された商品に関する価格情報を一定時間毎に収集するスクレイピング機能と、それによって収集されたデータを様々な条件で絞り込み検索を行ったり、価格が一定ラインより下回った際に価格崩れのアラートを通知させたりできるWeb管理ツール。</p>
      <p>ログイン認証機能や、ユーザ登録機能、コメント機能、商品情報編集機能、リアルタイムのスクレイピング状況を確認できる機能やログ閲覧機能なども搭載。</p>
      <p>価格推移ログはテーブルでの閲覧の他、チャート形式で直感的に確認することも可能。</p>
      <p>サーバーの選定から環境構築、DB設計、フロントエンド・バックエンド実装、リリースまで全てを担当。</p>
      <p>ソースコード、ツール共に一般公開はしていませんが、詳細が気になる方はお気軽にお問い合わせください。</p>
    `,
    tags: [
      tags.MEDIUM,
      tags.PRODUCT,
      tags.WORK,
      tags.MYSQL,
      tags.HTML,
      tags.CSS,
      tags.JS,
      tags.BOOTSTRAP,
      tags.NODE,
      tags.AWS,
      tags.MWS,
      tags.SCRAPING,
    ],
  },
  fftrends: {
    title: 'FFTrends',
    productUrl: 'https://www.yukapero.com/fftrends',
    scale: 70,
    summary: 'FinalFantasyXIVの流行りの装備を60万を超えるキャラから検索できるWebサービス',
    releaseDate: {
      startMoment: new Moment('2018/11/12'),
    },
    detail: `
      <p>FinalFantasy XIV(以下FF14)で流行っている装備アイテムを、ランキング形式で紹介するサービス。</p>      
      <p>ランキングはDCから種族、性別、ジョブなど、細かい指定のもと統計を取ることが可能なので、例えばPandaemoniumサーバーで男性でララフェルでジョブがナイトのキャラクターのみを対象にランキングを確認することができる。</p>
      <p>装備名で検索したり、各装備を実際に装備しているキャラクターの画像で確認することもできる。</p>
      <p>キャラクターのファッションを考える際に利用されることを想定して制作。</p>
      <p>現在メンテナンスを一切していないため今のパッチの装備には対応していません。</p>
      <p class="real-intention">需要はあるもののFF14の素材を利用しているため規約上このサービスから利益は取れないのに、大量の画像を扱うサービスの性質上サーバーの維持費がヤバいので、近々閉鎖の可能性が高いです・・・（）</p>

      <ul>
        <li>
        FF14公式コミュニティサイト(Lodestone)でのサービスリリースの告知記事
          <ul>
            <li>
              <a href="https://jp.finalfantasyxiv.com/lodestone/character/18968752/blog/3967362/" target="_blank">
                【FFTrends】流行りのミラプリ装備を60万のキャラから検索できるWebサービスをリリース
              </a>
            </li>
          </ul>    
        </li>
        <li>
        FF14まとめサイト 馬鳥速報様にとりあげて頂いた際の記事
          <ul>
            <li>
              <a href="http://blog.livedoor.jp/umadori0726/archives/54428558.html" target="_blank">
                【FF14】流行りのミラプリ装備を60万のキャラから検索できるWebサービスをご紹介
              </a>
            </li>
          </ul>    
        </li>
      </ul>
    `,
    tags: [
      tags.LARGE,
      tags.PRODUCT,
      tags.HOBBY,
      tags.MYSQL,
      tags.HTML,
      tags.CSS,
      tags.JS,
      tags.BOOTSTRAP,
      tags.NODE,
      tags.AWS,
      tags.FFXIV,
      tags.GAME,
      tags.SCRAPING,
    ],
  },
  fftimelines: {
    title: 'FFTimelines',
    productUrl: 'https://www.yukapero.com/fftimelines',
    scale: 80,
    summary: 'FinalFantasyXIVの各種バトルコンテンツの攻略情報を動画に連動するタイムラインで閲覧/作成できるWebサービス',
    releaseDate: {
      startMoment: new Moment('2018/09/18'),
    },
    detail: `
      <p>FinalFantasyXIV(以下FF14)の各種バトルコンテンツの攻略情報を、動画に連動するタイムラインで閲覧/作成できるWebサービス。</p>
      <p>バトルコンテンツの予習をする際には有志が作った解説サイトや、Lodestoneの日記、プレイ動画等を参考にされると思いますが、静的なページではどうしても実戦のイメージが沸きにくいし、対して動画では編集の凝り具合にも寄るものの、情報の一覧性に乏しい問題を感じます。</p>
      <p>ということで、それなら両者の良さを合わせたら良いのではないか？を実現したWebアプリケーション。</p>
      <p>Node.jsの勉強を兼ねて作成。</p>
      <p>とりあえず<a href="https://www.yukapero.com/fftimelines/edit/d99824ea" target="_blank">こちら</a>を見て頂くとどのようなサービスなのかがよく分かるかと思います。</p>
      <p>現在メンテナンスを一切していないため今のコンテンツには対応していません。</p>
      <ul>
        <li>
        FF14公式コミュニティサイトでのサービスリリースの告知記事
          <ul>
            <li>
              <a href="https://jp.finalfantasyxiv.com/lodestone/character/18968752/blog/3918607/" target="_blank">
                FF14動画連携型タイムライン作成/共有Webサービス, FFTimelines(β)をリリース
              </a>
            </li>
          </ul>    
        </li>
        <li>
        FF14まとめサイト 馬鳥速報様にとりあげて頂いた際の記事
          <ul>
            <li>
              <a href="http://blog.livedoor.jp/umadori0726/archives/54214145.html" target="_blank">
                【FF14】海外ユーザーも絶賛！動画とタイムラインが同時に見れるFF14動画連携型タイムライン作成/共有Webサービス「FFTimelines」を紹介！
              </a>
            </li>
          </ul>
        </li>
        <li>
        <span class="strike">調子に乗って</span>韓国のコミュニティポータル dcinside.com にて宣伝した際の投稿
          <ul>
            <li>
              <a href="https://gall.dcinside.com/board/view/?id=ff14&no=791292" target="_blank">
                [FFTimelines] 일본에서 왔어요. Timeline sharing
              </a>
            </li>
          </ul>
        </li>
      </ul>
    `,
    tags: [
      tags.LARGE,
      tags.PRODUCT,
      tags.HOBBY,
      tags.MYSQL,
      tags.HTML,
      tags.CSS,
      tags.JS,
      tags.BOOTSTRAP,
      tags.NODE,
      tags.AWS,
      tags.FFXIV,
      tags.GAME,
      tags.ENGLISH,
    ],
  },
  buzzranking: {
    title: 'BuzzRanking',
    productUrl: 'https://www.buzzranking.net/',
    scale: 100,
    summary: 'Twitterでの注目度を基に商品やサービスをランキング形式で紹介する一風変わった総合ランキングサイト',
    releaseDate: {
      startMoment: new Moment('2020/06/20'),
    },
    detail: `
      <p>
      インターネット上での注目度を基に、商品やサービスをランキング形式で紹介する一風変わった総合ランキングサイト。<br>
      データ収集、注目度の測定は365日24時間体制で行われ、これを基に全てのランキングが毎日自動更新される。
      </p>
      <p>
      単にツイートを収集して集計するだけのサイトに見えますが、シリーズものの商品の取り扱いや、ツイート収集能力に制限がある条件下でどのように収集するかや、ツイートのソート周りのアルゴリズムなどが一筋縄ではいかず、意外とここまで形にするのに苦労しました。<br>
      </p>
      <p>Googleアドセンスを用いて初めて収益化を狙った作品。</p>
      <p>
      ランキングという名前をサービス名に入れておきながら実はランキングはおまけで、新の狙いは検索サイト経由の各商品ページへの集客にあります。<br>
      数万という商品を扱うので、それら全てがGoogleのインデックスに登録されることによって各ページへの少量のアクセスを大量に得られることを期待しています。<br>
      </p>
      <p>
      ※本稼働のための準備中
      </p>      
<!--      <p>-->
<!--      まず第一に同シリーズ物の商品の扱いの問題です。<br>-->
<!--      注目度を商品のタイトルを基にしてそれに関連したツイート数を取得することによって計算している都合上、同シリーズの複数商品は一つのものとして扱われるべきですが、同シリーズであることをどうやって判定すればよいでしょうか？<br>-->
<!--      例えば鬼滅の刃1巻と鬼滅の刃2巻は同じ商品として扱われなければなりません。<br>-->
<!--      様々な手法が考えられるかと思いますが、本サービスでは商品名同士の類似度を計算し、一定ラインを越えたものを同一シリーズものとして判定するようにシステムを構築しました。-->
<!--      </p>-->
<!--      <p>-->
<!--      第二に全商品に対するツイート収集行うだけのリソースが無い問題です。<br>-->
<!--      TwitterAPIの無料プランを利用してデータを収集していますが、当然APIを使う際にはリクエスト制限があります。<br>-->
<!--      日単位でのツイート数を注目度の指標としてランキングを生成している以上、本来は1日以内に全商品に対するツイートの収集処理が行われなければなりませんが、制限に従いながら数万点を超える全商品を対象に平等にツイート収集をすることはできません。<br>-->
<!--      単純にAPIの有料プランを使うことによっても解決できますが、本サービスではツイート収集に優先度の概念を取り入れることによって、これを擬似的に可能としました。<br>-->
`,
    tags: [
      tags.LARGE,
      tags.PRODUCT,
      tags.HOBBY,
      tags.MYSQL,
      tags.HTML,
      tags.CSS,
      tags.JS,
      tags.BOOTSTRAP,
      tags.NODE,
      tags.AWS,
    ],
  },
  programming_school_teacher: {
    title: 'プログラミングスクール講師(フロントエンド)',
    scale: 70,
    summary: 'HTML/CSS/Javascript/Bootstrap/WebAPI/Firebase/Vue.jsなどのフロントエンド技術の学習をビデオ通話/チャットでサポート',
    noImage: true,
    shouldHideWorkImage: true,
    releaseDate: {
      startMoment: new Moment('2020-03-23'),
    },
    tags: [
      tags.HTML,
      tags.CSS,
      tags.JS,
      tags.BOOTSTRAP,
      tags.FIREBASE,
      tags.VUE,
      tags.OTHERS,
      tags.WORK,
      tags.AWS,
    ],
  },
  portfolio: {
    title: 'ポートフォリオサイト',
    scale: 60,
    summary: '今閲覧頂いているポートフォリオサイト',
    releaseDate: {
      startMoment: new Moment('2020-06-16'),
    },
    detail: `
      <p>
      フリーランスエンジニアとして活動するために作成。<br>
      初めて今流行りのVue.jsを用いて作った作品でもあります。
      </p>
      <p>
      基本的なデザインは<a href="https://colorlib.com/" target="_blank">Colorlib</a>にて提供されているテンプレートに沿いつつ、実績欄の開発に注力。<br>
      各実績をBootstrapのcardを用いて表現し、<a href="https://muuri.dev/" target="_blank">Muuriライブラリ</a>によるグリッドシステムで一覧性を高くすると同時に、Muuriのソート機能を応用してタグによる絞り込み検索を可能としています。<br>
      さらに、後から簡単に実績やタグを追加/削除/細かい調整をできるようにコードを工夫しています。<br>      
      </p>
      <p>
      表示速度にもこだわり、実績のサムネイル画像やjsファイル、サーバーからのレスポンスなど圧縮できるところは圧縮して、トップページは僅か660kbほどの通信量で実現しています。<br>
      また、<a href="https://developers.google.com/speed/pagespeed/insights/">PageSpeed Insights</a>でPCが97点、スマホが85点とかなりの高得点を叩き出しました。
      </p>
      <p class="real-intention">
      ちなみにトップの写真は2万円以上掛けて人生で初めてお化粧とヘアセット込みでスタジオで撮影しましたが、どんなに冴えない容貌でもなんかそれっぽくしてくれる今の技術に驚きでした。<br>
      せっかく高いお金払って撮ったのでこの写真だけほぼ無圧縮にした結果、660kbの転送量の内140kbほどをこの1枚だけで占めています・・ｗ
      </p>
      <ul>
        <li>
        Webページテンプレート提供
          <ul>
            <li>
              <a href="https://colorlib.com/" target="_blank">
                Colorlib
              </a>
            </li>
          </ul>
        </li>
        <li>
        アイコン提供
          <ul>
            <li>
                        Font generated by <a href="https://www.flaticon.com" target="_blank">flaticon.com</a>. <p>
            Under <a
                    href="http://creativecommons.org/licenses/by/3.0/" target="_blank">CC</a>:
            <a data-file="005-zoom-in" href="https://www.flaticon.com/authors/kiranshastry" target="_blank">Kiranshastry</a>,
            <a data-file="002-internet" href="http://www.freepik.com" target="_blank">Freepik</a>,
            <a data-file="003-code" href="https://www.flaticon.com/authors/pixel-perfect" target="_blank">Pixel perfect</a>,
            <a data-file="004-brain" href="https://www.flaticon.com/authors/smashicons" target="_blank">Smashicons</a>,
            <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a>
            </li>
          </ul>
        </li>
      </ul>
    `,
    tags: [
      tags.MEDIUM,
      tags.PRODUCT,
      tags.WORK,
      tags.HTML,
      tags.CSS,
      tags.JS,
      tags.VUE,
      tags.BOOTSTRAP,
      tags.NODE,
      tags.AWS,
    ],
  },
  youtube_channel_info_collector: {
    title: 'Youtubeチャンネル情報自動収集ツール',
    scale: 20,
    summary: '指定されたYoutubeチャンネルの全ての動画の再生数や概要欄などの詳細情報を一定時間毎に収集し、GoogleスプレッドシートにまとめるGAS製ツール',
    releaseDate: {
      startMoment: new Moment('2020-03-04'),
      endMoment: new Moment('2020-03-14'),
    },
    detail: `
      <p>
      指定されたYoutubeチャンネルの過去全ての動画の再生数や概要欄などの詳細情報を一定時間毎に収集し、GoogleスプレッドシートにまとめるGAS製ツール。<br>
      Youtube APIを用いて指定されたチャンネルIDの情報を取得し、シートにまとめるだけのシンプルなツール。<br>
      過去のデータを上書きせずデータを累積させるので、各チャンネルの成長/衰退推移を確認することが可能。
      </p>
      <p>初めてGASを用いた作品でもあります。</p>
      <p>ソースコード、ツール共に一般公開はしていませんが、詳細が気になる方はお気軽にお問い合わせください。</p>
    `,
    tags: [
      tags.SMALL,
      tags.PRODUCT,
      tags.WORK,
      tags.GAS,
    ],
  },
  auto_clipper_ffxiv: {
    title: 'AutoClipperFFXIV',
    scale: 20,
    summary: 'FinalFantasyXIVで特定のログが出力された瞬間にTwitchのクリップを自動作成し、指定されたDiscordチャンネルにクリップのURLを共有してくれるWindowsアプリケーション',
    releaseDate: {
      startMoment: new Moment('2020-12-06'),
    },
    detail: `
      <p>FinalFantasyXIV(以下FF14)上で、特定のログが出力された瞬間にTwitchのクリップを自動作成し、指定されたDiscordチャンネルにクリップのURLを共有してくれるWindowsアプリケーション。</p>
      <p>FF14のバトルコンテンツの攻略では、パーティが全滅した際に何が原因で全滅したのかをパーティメンバー全員がしっかり認識することが非常に重要であり、その確認のために録画アプリによる自らの実際のプレイ動画を見返す機会が多い。<br>
      しかし録画はPS4でプレイしているプレイヤーにとってはすぐ確認できるものではないし、PCでプレイしている人でもPCのスペック問題や、ITの知見が低い人にとってはハードルが高い問題があります。
      </p>
      <p>このアプリケーションを利用すると、パーティ8人の内誰か1人がバックグラウンドでアプリを起動&Twitch配信しているだけでパーティ全体に決定的瞬間(基本的には全滅30秒前からの動画)の録画を自動的に共有してくれるので、手間もなく前述の問題をある程度解消できます。</p>
    `,
    tags: [
      tags.SMALL,
      tags.PRODUCT,
      tags.HOBBY,
      tags.ELECTRON,
      tags.JS,
      tags.NODE,
      tags.HTML,
      tags.CSS,
      tags.BOOTSTRAP,
      tags.FFXIV,
      tags.GAME,
      tags.ENGLISH,
    ],
  },
  toeic: {
    title: 'TOEIC 730/990点',
    scale: 20,
    summary: '大学院入試のために受験',
    noImage: true,

    tags: [
      tags.OTHERS,
      tags.QUALIFICATION,
      tags.ENGLISH,
    ],
  },
  toefl_ibt: {
    title: 'TOEFL-iBT 65/120点',
    scale: 20,
    summary: '大学院入試のために受験',
    noImage: true,
    detail: '',
    tags: [
      tags.OTHERS,
      tags.QUALIFICATION,
      tags.ENGLISH,
    ],
  },
  graduate_school: {
    title: '大学院修士課程修了',
    scale: 60,
    summary: '東京大学大学院 情報理工学系研究科 創造情報学専攻にて修士課程を修了(最終学歴)',
    shouldHideWorkImage: true,
    fitImageHeight: true,
    detail: `
      <p>
        <a href="https://www.i.u-tokyo.ac.jp/edu/course/ci/index.shtml" target="_blank">
          東京大学大学院 情報理工学系研究科 創造情報学専攻
        </a>
        にて修士課程を修了(最終学歴)
      </p>
      <p>
      創造情報学専攻は試験科目の一つにプログラミングを選択できる現代的（？）で面白い専攻となっています。<br>
      (受験勉強のために作った
      <a href="/grad_past/index.html" target="_blank">過去の様々な専攻の入試問題の私の解答メモがhtmlファイルとして残っていた</a>
      ので、どこかの大学生の役に立つことを信じてこっそり公開)
      </p>
      <p>
      大規模ネットワークにおけるコミュニティ抽出アルゴリズムの高速化をテーマにして修士論文を執筆。<br>
      同テーマでIJCEEや人工知能学会にて論文の執筆と研究の発表活動も行っていました。
      </p>
      <p class="real-intention">
      在学中は研究をサボってゲームのプラグイン開発にハマってたり、失恋したショックで研究室のミーティングを１週間すっぽかしたり、そもそもあまり研究室に顔を出さなかったり、昼夜逆転による睡眠不足と緊張でミーティング中にぶっ倒れたりなど、かなり情けない院生だったように思います。（今も根はあまり変わってないですが・・・）
      </p>
      <p>教授と補佐の方には様々な面でお世話になり、とても感謝しています。</p>
   
      <ul>
        <li>
        International Journal of Computer and Electrical Engineering (IJCEE) オーストラリアのBrisbaneにて発表した論文(英語)
          <ul>
            <li>
              <a href="http://www.ijcee.org/vol8/927-A023.pdf" target="_blank">
                Ozaki, N., Tezuka, H. & Inaba, M. A Simple Acceleration Method for the Louvain Algorithm. Int. J. Comput. Electr. Eng. 8, 207–218 (2016) 
              </a>
            </li>
          </ul>
        </li>
        <li>
        一般社団法人人工知能学会 北海道函館にて発表した論文(日本語)
          <ul>
            <li>
              <a href="https://www.ai-gakkai.or.jp/jsai2015/webprogram/2015/pdf/1C5-4.pdf" target="_blank">
                 大規模ネットワークにおけるコミュニティ抽出手法の改良
              </a>
            </li>
          </ul>
        </li>
        <li>
        大学院過去問題 回答例
          <ul>
            <li>
              <a href="/grad_past/index.html" target="_blank">
                 東京大学大学院 情報理工学系研究科, 東京大学大学院 学際情報学府, 電気通信大学大学院
              </a>
            </li>
          </ul>
        </li>
      </ul>   
    `,
    tags: [
      tags.OTHERS,
      tags.JAVA,
      tags.CPP,
      tags.QUALIFICATION,
      tags.ENGLISH,
    ],
  },
  fundamental_info_tech_engineer_exam: {
    title: '基本情報処理技術者試験合格',
    scale: 20,
    summary: '大学在学中に受験',
    noImage: true,
    tags: [
      tags.OTHERS,
      tags.QUALIFICATION,
    ],
  },
  applied_info_tech_engineer_exam: {
    title: '応用情報処理技術者試験合格',
    scale: 25,
    summary: '大学在学中に受験',
    noImage: true,
    tags: [
      tags.OTHERS,
      tags.QUALIFICATION,
    ],
  },
  mmr_logger: {
    title: 'MMRLogger',
    scale: 40,
    summary: 'StarCraft2のプレイヤーのレーティング(MMR)をゲーム毎に自動記録し、グラフ化するWindowsアプリケーション',
    detail: `
    <p>
    Eスポーツタイトルとして未だ名高いBlizzard社の代表的なタイトルである、StarCraft2(以下SC2)プレイヤーのためのWindowsアプリケーション。<br>
    バックグラウンドで起動しておくと、ゲーム毎に自動的にMMR(レーティング)の変動を記録し、さらにグラフ表示する機能を搭載。<br>
    主にSC2をTwitchなどのゲーム配信サービスで実況配信する際に利用することを想定し、自身のために作成。
    </p>
    <p>Electron製なのでWindows, Macに両対応</p>
    `,
    tags: [
      tags.MEDIUM,
      tags.PRODUCT,
      tags.HOBBY,
      tags.ELECTRON,
      tags.JS,
      tags.NODE,
      tags.HTML,
      tags.CSS,
      tags.BOOTSTRAP,
      tags.GAME,
    ],
  },
  minecraft_plugins: {
    title: 'Minecraftプラグイン(11種)',
    scale: 50,
    summary: 'サンドボックスゲームの代表格であるMinecraftのマルチプレイ用のサーバーで動作する様々な種類のプラグインを開発して公開',
    // fitImageHeight: true,
    releaseDate: {
      startMoment: new Moment('2014-12-30'),
    },
    detail: `
      <p>学生の頃に<span class="strike">研究をサボってしかも研究用に貸与されたMacbook proで</span>ハマってたMinecraftのマルチプレイサーバー用プラグインを趣味で開発し、コミュニティに公開して遊んでいました。</p>
      <p>世界のマインクラフター達に実際に使ってもらって、さらにフィードバックも貰えてとても嬉しかった記憶があります。</p>
      <p>滅茶苦茶な実装ですが、作品を通して心から楽しみながらプログラミングの学習ができたことは今に繋がる良い経験でした。</p>
      <ul>
        <li>
        開発したプラグイン(※最新のMinecraftバージョンでは恐らく動作しません)
          <ul>
            <li>
              <a href="https://dev.bukkit.org/projects/craftlevel" target="_blank">
                CraftLevel(動画あり)
              </a>
              <ul>
                <li>
                  クラフトにレベルの概念を新たに導入するプラグイン。<br>
                  従来のクラフトは100%成功する若干味気ないものでしたが、ドMの私にはそれでは刺激が足りなさすぎました。<br>
                  キャラクターのクラフトレベルとクラフトの対象となるものの制作難易度に応じて、クラフトの成功確率とそれによって得られるクラフト経験値が決まる。<br>
                  例えばレベル１では木製のツールを50%の成功率でクラフトできるが、ダイヤ系統のツールとなると成功率が5%になったりする。<br>
                  クラフトに失敗すると素材全てを失うと共にほとんど経験値も得られないため、まずは容易に手に入る素材を使ってレベルを上げていく必要がある。<br>
                  レベルが上がる度にクラフト成功率が上昇し、作れる対象の幅が徐々に広がっていく楽しみがある。<br>
                </li>
              </ul>
            </li>
            <li>
              <a href="https://dev.bukkit.org/projects/itemsounds" target="_blank">
                ItemSounds(動画あり)
              </a>
              <ul>
                <li>
                  インベントリ画面でアイテムを移動する度に、そのアイテムに応じた音声を再生するプラグイン。<br>
                  これにより各アイテムに重量感、質感が生まれます。<br>
                  Blizzard社の名作ゲームであるDiabloのインベントリから<span class="strike">パクった</span>インスパイアされたものです。<br>
                  かなりシンプルなプラグインながら実は開発したプラグインの中では一番気に入っています。
                </li>
              </ul>
            </li>
            <li>
              <a href="https://www.nicovideo.jp/watch/sm26179119" target="_blank">
                釣りシステムを大改造するプラグイン(動画のみ)
              </a>
              <ul>
                <li>
                  釣りにレベルと、釣りをする場所や季節によって釣れるアイテムが変化するシステムを導入します。<br>
                  竿を投げると今のレベルに応じて、その場所で釣れそうなアイテムと確率がチャットウィンドウに表示されます。<br>
                  また、釣れる対象はアイテムだけでなくモンスターを設定することも可能で、これにより<span class="strike">退屈な</span>釣りに緊張感が生まれます。<br>
                  わりと本家マインクラフトにも導入されてもおかしくない優れたアイデアだと今でも思ってます(キリッ)。<br>
                  プラグインは公開せず、自分で運営してたゲームサーバーでのみ利用していました。
                </li>
              </ul>
            </li>
            <li>
              <a href="https://dev.bukkit.org/projects/customdurability" target="_blank">
                CustomDurability
              </a>
              <ul>
                <li>
                  ピッケルや斧などの各ツールの耐久値を変更できるシンプルなプラグイン。<br>
                  耐久力増加エンチャントの効果値変更にも対応。
                </li>
              </ul>
            </li>
            <li>
              <a href="https://www.youtube.com/watch?v=u_JvVzAywNY" target="_blank">
                AreaEffect(動画のみ)
              </a>
              <ul>
                <li>
                  RPG系統のゲームによくある、フィールド境界を越えた際に表示される現在のフィールドの名前が表示されるあの演出をマインクラフトに追加するプラグインです。<br>
                  プラグインは公開せず、自分で運営してたゲームサーバーでのみ利用していました。
                </li>
              </ul>
            </li>
            <li>
              <a href="https://dev.bukkit.org/projects/cashdropplus" target="_blank">
                CashDropPlus(動画あり)
              </a>
              <ul>
                <li>
                  各モンスターを倒した際にドロップする金額を設定できるようにするプラグイン。<br>
                  エンチャントによる金額アップ効果も設定可能。<br>
                  ゲームに通貨の概念を導入する既存の大型プラグインに依存しています。
                </li>
              </ul>
            </li>
            <li>
              <a href="https://www.youtube.com/watch?v=hFYe4FPaz6o" target="_blank">
                EffectArea(動画のみ)
              </a>
              <ul>
                <li>
                  指定した領域内に入ったキャラクターに回復効果、盲目効果、毒効果、移動速度アップ効果など様々な効果を与えることができるプラグイン。<br>
                  プラグインは公開せず、自分で運営してたゲームサーバーでのみ利用していました。
                </li>
              </ul>
            </li>
            <li>
              <a href="https://www.youtube.com/watch?v=eREcQieMUM8" target="_blank">
                SeasonalFood(動画のみ)
              </a>
              <ul>
                <li>
                  ゲームに季節の概念を新たに導入し、農業によって得られる各作物に季節に応じて変わる成熟確率が設定されるプラグイン。<br>
                  これにより従来のように脳死でコスパの高い作物だけを栽培していればよいということはなくなり、今の季節に応じて柔軟に育てるものを変えていく必要性が生まれます。<br>
                </li>
              </ul>
            </li>
            <li>
              <a href="https://dev.bukkit.org/projects/devilnetherportal" target="_blank">
                DevilNetherPortal(動画あり)
              </a>
              <ul>
                <li>
                  ネザーポータルを開くと開いた地点のフィールドの天候が雷雨に変化すると共に、ポータルから大量のネザーに生息するモンスターが湧き出すようになるプラグイン。<br>
                  さらにネザーに入ると直後に帰還用のポータルが閉じられ、ブレイズロッドを6本手に入れるまで通常の世界に帰還できなくなる。<br>
                  個人的にネザーは地獄のような見た目通り、もっと絶望感溢れるような仕様であって欲しいと感じていたのでその思いをそのまま実現したものです。
                </li>
              </ul>
            </li>
            <li>
              <a href="https://dev.bukkit.org/projects/notificator" target="_blank">
                Notificator(動画あり)
              </a>
              <ul>
                <li>
                  一定時間毎にサーバーが発信するサーバーニュースや、プレイヤーが発信するプレイヤーニュースをオンラインの全プレイヤーに発信するプラグイン。<br>
                  告知事項を他プレイヤーに簡単に共有するための仕組みを提供します。
                </li>
              </ul>
            </li>
            <li>
              <a href="https://dev.bukkit.org/projects/freshheadnetherportal" target="_blank">
                FreshHeadNetherPortal(動画あり)
              </a>
              <ul>
                <li>
                  ポータルに4種の生首を貼り付けることをネザーゲートを開く条件として追加する謎プラグイン。
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    `,
    tags: [
      tags.PRODUCT,
      tags.MEDIUM,
      tags.HOBBY,
      tags.JAVA,
      tags.GAME,
      tags.ENGLISH,
    ],
  },
  teacher_license: {
    title: '教育職員免許状',
    scale: 50,
    releaseDate: {
      startMoment: new Moment('2014-04-01'),
      endMoment: new Moment('2016-03-31'),
    },
    summary: '高等学校教諭一種免許状(数学), 中学校教諭一種免許状(数学)。',
    noImage: true,
    detail: '',
    tags: [
      tags.OTHERS,
      tags.QUALIFICATION,
    ],
  },
};

// sort all work's tags
_.each(works, (data, name) => {
  data.tags = _.sortBy(data.tags, tag => {
    if (!tag) {
      throw new Error('specified undefined tag: ' + name);
    }

    return tag.id;
  });
});

// add _hasTag property
_.each(works, (data, name) => {
  data._hasTag = {};
  _.each(data.tags, tag => {
    data._hasTag[tag.id] = true;
  });
});

module.exports = works;
