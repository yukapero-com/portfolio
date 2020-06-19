const _ = require('underscore');

var tags = {};
var tagTypeIdIntoName = {};

var addTags = function (typeId, name, newTags, options = {}) {
  tagTypeIdIntoName[typeId] = name;

  for (var i = 0; i < newTags.length; i++) {
    var [tagName, dispName, tagOptions] = newTags[i];
    var commonAttributes = _.clone(options.commonAttributes) || {};

    tags[tagName] = _.extend(commonAttributes, {
      id: (+typeId * 10000) + (i + 1),
      name: tagName,
      typeId: typeId,
      dispName: dispName,
      // badgeClass: tagOptions.badgeClass,
      // cardBorderClass: tagOptions.cardBorderClass,
    }, tagOptions);
  }
};

// 開発規模
addTags(1, '開発規模', [
  ['SMALL', '小規模', {badgeClass: 'badge-info', cardBorderClass: 'border-info', tagFilterClass: 'tag-filter-badge-scale-small',}],
  ['MEDIUM', '中規模', {badgeClass: 'badge-primary', cardBorderClass: 'border-primary', tagFilterClass: 'tag-filter-badge-scale-medium',}],
  ['LARGE', '大規模', {badgeClass: 'badge-danger', cardBorderClass: 'border-danger', tagFilterClass: 'tag-filter-badge-scale-large',}],
], {
  commonAttributes: {},
});

// 実績種別
addTags(2, '成果物', [
  ['OTHERS', 'その他'],
  ['PRODUCT', 'プロダクト'],
], {
  commonAttributes: {
    badgeClass: 'badge-success',
    tagFilterClass: 'tag-filter-badge-result-type',
  },
});

// 仕事/趣味
addTags(3, '種別', [
  ['WORK', '仕事'],
  ['HOBBY', '趣味'],
], {
  commonAttributes: {
    badgeClass: 'badge-work-category',
    tagFilterClass: 'tag-filter-badge-objective-type',
  },
});

// スキル
addTags(4, 'スキル', [
  ['HTML', 'HTML'],
  ['CSS', 'CSS'],
  ['JS', 'Javascript'],
  ['VUE', 'Vue.js'],
  ['BOOTSTRAP', 'Bootstrap'],
  ['FIREBASE', 'Firebase'],
  ['JAVA', 'Java'],
  ['CPP', 'C++'],
  ['PERL', 'Perl'],
  ['NODE', 'Node.js'],
  ['MYSQL', 'MySQL'],
  ['AWS', 'AWS'],
  ['MWS', 'MWS'],
  ['GAS', 'GAS'],
  ['ELECTRON', 'Electron'],
  ['ENGLISH', '英語'],
  ['SCRAPING', 'スクレイピング'],
], {
  commonAttributes: {
    badgeClass: 'badge-skill',
    tagFilterClass: 'tag-filter-badge-skill',
  }
});

// その他
addTags(999, 'その他', [
  ['FFXIV', 'FFXIV'],
  ['GAME', 'ゲーム'],
  ['QUALIFICATION', '資格'],
], {
  commonAttributes: {
    badgeClass: 'badge-secondary',
    tagFilterClass: 'tag-filter-badge-other',
  },
});

module.exports = {tags, tagTypeIdIntoName};
