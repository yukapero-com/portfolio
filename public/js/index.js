$ = jQuery = jquery = require('jquery');
const _ = require('underscore');
const Vue = require('vue/dist/vue.min.js');
const Works = require('/Users/yukapero/git/portfolio/public/js/works.js');
const {tags, tagTypeIdIntoName} = require('/Users/yukapero/git/portfolio/public/js/tags.js');
const Muuri = require('muuri');

require('bootstrap');
require('jquery-sticky');
require('jquery-mousewheel');
require('lightgallery');
require('lg-thumbnail');
require('web-animations-js'); // dependency of muuri

global.workMuuri = null;

const app = new Vue({
  el: '#app',
  data: {
    works: Works,
    activeFilterTag: {},
    tagNum: {},

    // work detail modal
    targetWorkKey: '',
    targetWork: {},
    workImageFileNames: [],

    // contact
    contactReply: '',
    contactText: '',

    // others
    tagTypeIdIntoName: tagTypeIdIntoName,
  },

  mounted() {
    initWorkImageReplacement();
    initStickyNavbar();
    initNavbar();
    initSmoothScroll()
    initDisplayWorkDetail();
    // initWorkLightGallery();
    this.calcWorkTagNum();

    // TODO ロード画面
    setTimeout(() => {
      initMuuri();
    }, 500);
  },
  methods: {
    // getFilterBadgeClassByTag(tag) {
    //   tag.tagFilterClass
    //   return `filter-badge-${tag.typeId}`;
    // },
    calcWorkTagNum() {
      var temp = {};
      _.each(Works, work => {
        _.each(work.tags, tag => {
          temp[tag.id] = temp[tag.id] || 0;
          temp[tag.id]++;
        });
      });
      this.tagNum = temp;
    },
    getCardBorderClassNameByTags(tags) {
      var tag = _.find(tags, tag => {
        return tag.cardBorderClass;
      });

      return tag ? tag.cardBorderClass : null;
    },
    toggleTagFilter(e, tag, options = {}) {
      e.preventDefault();

      if (options.scrollToWorkTop) {
        var $target = $('#work-section');
        var adjust = -1 * ($('.site-navbar').height() + 20);
        var speed = 400;
        var position = $target.offset().top + adjust;
        $('body,html').animate({scrollTop: position}, speed, 'swing');
      }

      // disable
      if (!options.preventCancel && this.activeFilterTag.id == tag.id) {
        this.activeFilterTag = {};
        workMuuri.sort(defaultComparator);
        $('.muuri-item').removeClass('filtered-work');
        return;
      }

      // enable
      this.activeFilterTag = tag;
      tagFilter();
    },
    getTagsByTypeId(typeId) {
      return _.filter(tags, tag => {
        return tag.typeId == typeId;
      });
    },
    async sendContact(e) {
      var $button = $(e.currentTarget);
      var oldText = $button.text();
      var disableButton = () => ($button.attr('disabled', true), $button.text('送信中...'));
      var enableButton = () => ($button.attr('disabled', false), $button.text(oldText));
      var disableAllFormParts = () => {
        disableButton();
        $button.text('送信が完了しました');
        $('#input-contact-reply').attr('disabled', true);
        $('#input-contact-text').attr('disabled', true);
      };

      disableButton();

      if (!this.contactText.length) {
        alert('お問い合わせ内容を入力してください。');
        enableButton();
        return;
      }

      try {
        await $.ajax({
          url: '/contact',
          method: 'POST',
          data: {
            reply: this.contactReply,
            text: this.contactText,
          },
        });

        alert(`
お問い合わせ頂きまして誠にありがとうございます。

遅くとも3日以内にご指定の連絡先へご返信します。
万一3日を過ぎても反応がない場合は、お手数ですが

yukapero.com@gmail.com

までお問い合わせください。
`);

        disableAllFormParts();
      } catch (e) {
        console.log(e);
        alert(`
お問い合わせの送信に失敗しました.
再度お試し頂いても失敗する場合、お手数ですが

yukapero.com@gmail.com

までお問い合わせください。
`);
        enableButton();
      }
    }
  },
});

function tagFilter() {
  var targetTag = app.activeFilterTag.id;
  workMuuri.sort(tagFilterComparator);

  _.each(workMuuri.getItems(), item => {
    if (item.work._hasTag[targetTag]) {
      $(item.getElement()).removeClass('filtered-work');
    } else {
      $(item.getElement()).addClass('filtered-work');
    }
  });
}

function tagFilterComparator(a, b) {
  var targetTagId = app.activeFilterTag.id;
  var workKeyA = a.getElement().dataset.workKey;
  var workKeyB = b.getElement().dataset.workKey;
  var workA = Works[workKeyA];
  var workB = Works[workKeyB];

  var hasTagA = workA._hasTag[targetTagId];
  var hasTagB = workB._hasTag[targetTagId];

  // tag
  if (hasTagA && !hasTagB) return -1;
  if (!hasTagA && hasTagB) return 1;

  // scale tag
  if (a.scaleTagId > b.scaleTagId) return -1;
  if (a.scaleTagId < b.scaleTagId) return 1;

  // scale
  if (workA.scale > workB.scale) return -1;
  if (workA.scale < workB.scale) return 1;

  return 0;
}

function defaultComparator(a, b) {
  var workKeyA = a.getElement().dataset.workKey;
  var workKeyB = b.getElement().dataset.workKey;
  var workA = Works[workKeyA];
  var workB = Works[workKeyB];

  // product or others tag
  // var productTagId = Tags.PRODUCT.id;
  // if (workA._hasTag[productTagId] && !workA._hasTag[productTagId]) return -1;
  // if (!workA._hasTag[productTagId] && workA._hasTag[productTagId]) return 1;

  // scale tag
  if (a.scaleTagId || b.scaleTagId) {
    if (+a.scaleTagId > +b.scaleTagId) return -1;
    if (+a.scaleTagId < +b.scaleTagId) return 1;
  }

  // scale
  if (workA.scale > workB.scale) return -1;
  if (workA.scale < workB.scale) return 1;

  return 0;
}

function initDisplayWorkDetail() {
  $('.work-card-has-detail').on('click', async (e) => {
    e.preventDefault();

    var targetWorkKey = $(e.currentTarget).data('work-key');

    // should update workImageFileNames before replace targetWork for rendering reason
    $("#work-image-gallery").hide();
    app.workImageFileNames = await fetchWorkImageFileNames(targetWorkKey);
    $("#work-image-gallery").show();

    app.targetWorkKey = targetWorkKey;
    app.targetWork = Works[targetWorkKey];

    await app.$forceUpdate();
    await Vue.nextTick(); // wait dom update

    if ($("#work-image-gallery").data('lightGallery')) {
      $("#work-image-gallery").data('lightGallery').destroy(true);
    }

    $("#work-image-gallery").lightGallery({
      selector: '.work-img-div',
    });

    // 自分でモーダル開く処理かく
  });
}

async function fetchWorkImageFileNames(workKey) {
  var fileNames = await $.ajax({
    url: '/api/get_work_image_file_names',
    method: 'GET',
    data: {
      key: workKey,
    },
  });

  return fileNames;
}

function initWorkImageReplacement() {
  var replaceSrcIntoNoImage = function (e) {
    e.currentTarget.setAttribute('src', '/img/work/no_image.jpg');
    e.currentTarget.removeEventListener('error', replaceSrcIntoNoImage);
  };

  const images = document.querySelectorAll('img');
  images.forEach((image) => {
    image.addEventListener('error', replaceSrcIntoNoImage);
  });
}

function initMuuri() {
  workMuuri = new Muuri('#work-muuri', {
    sortData: {
      scale: function (item, element) {
        var workKey = element.dataset.workKey;
        return -1.0 * Number.parseFloat(Works[workKey].scale);
      },
    },
    hiddenStyles: {
      opacity: '0',
      transform: 'scale(0.5)'
    },
  });

  // set work
  _.each(workMuuri.getItems(), item => {
    item.work = Works[item.getElement().dataset.workKey];
  });

  var getScaleTagIdFromWork = function (work) {
    var scaleTag = _.find(work.tags, tag => {
      return tag.typeId == 1; // 1: scale tag type id
    });

    if (!scaleTag) return 0;
    return scaleTag.id;
  }

  // set scaleId
  _.each(workMuuri.getItems(), item => {
    var work = Works[item.getElement().dataset.workKey];
    item.scaleTagId = getScaleTagIdFromWork(work);
  });

  workMuuri.sort(defaultComparator);
  // workMuuri.refreshItems();
}

function initSmoothScroll() {
  $(`a[href^='#']`).on('click', e => {
    var adjust = -1 * ($('.site-navbar').height() + 20);
    var speed = 400;
    var href = $(e.currentTarget).attr("href");

    if (href == '#') {
      return;
    } else {
      $('body').removeClass('offcanvas-menu'); // hide hamburger menu if displayed
    }

    var $target = $(!!href ? href : 'html');

    if (!$target[0]) throw new Error(`scroll destination is undefined: ${href}`);

    var position = $target.offset().top + adjust;
    $('body,html').animate({scrollTop: position}, speed, 'swing');

    return false;
  });
}

function initNavbar() {
  // prepare navbar for mobile
  _.each($('.js-clone-nav'), navEle => {
    var $nav = $(navEle);
    $nav.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
  });

  // hide navbar for mobile if enough width
  $(window).on('resize', e => {
    var windowWidth = $(e.target).width();
    if (windowWidth > 768) {
      if ($('body').hasClass('offcanvas-menu')) {
        $('body').removeClass('offcanvas-menu');
      }
    }
  });

  // show hamburger menu if the icon clicked
  $('.js-menu-toggle').on('click', e => {
    var $this = $(e.currentTarget);

    e.preventDefault();

    if ($('body').hasClass('offcanvas-menu')) {
      $('body').removeClass('offcanvas-menu');
      $this.removeClass('active');
    } else {
      $('body').addClass('offcanvas-menu');
      $this.addClass('active');
    }
  });

  // hide hamburger menu if outside is clicked
  $(document).on('mouseup', e => {
    var container = $(".site-mobile-menu");
    var isClickedOutsideOfHamburgerMenu = !container.is(e.target) && container.has(e.target).length === 0;
    if (!isClickedOutsideOfHamburgerMenu) return;

    $('body').removeClass('offcanvas-menu');
  });
}

function initStickyNavbar() {
  $(".sticky-navbar").sticky({topSpacing: 0});

  $(window).scroll(function () {
    var st = $(this).scrollTop();
    if (st > 100) {
      $('.sticky-navbar').addClass('shrink');
    } else {
      $('.sticky-navbar').removeClass('shrink');
    }
  });
}
