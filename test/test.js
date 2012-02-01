var should = require('should'),
    uslug = require('../lib/uslug');


var word0 = 'Ελληνικά';
var word1 = [word0, word0].join('-');
var word2 = [word0, word0].join(' - ');

var tests = [
  ['The \u212B symbol invented by A. J. \u00C5ngstr\u00F6m (1814, L\u00F6gd\u00F6, \u2013 1874) denotes the length 10\u207B\u00B9\u2070 m.', 'the-å-symbol-invented-by-a-j-ångström-1814-lögdö-1874-denotes-the-length-1010-m'],
  ['Быстрее и лучше!', 'быстрее-и-лучше'],
  ['xx x  - "#$@ x', 'xx-x-x'],
  ['Bän...g (bang)', 'bäng-bang'],
  [word0, word0.toLowerCase()],
  [word1, word1.toLowerCase()],
  [word2, word1.toLowerCase()],
  ['    a ', 'a'],
  ['tags/', 'tags'],
  ['y_u_no', 'y_u_no'],
  ['el-ni\xf1o', 'el-ni\xf1o'],
  ['x荿', 'x荿'],
  ['ϧ΃蒬蓣', '\u03e7蒬蓣'],
  ['¿x', 'x'],
  ['汉语/漢語', '汉语漢語'],
  ['فار,سي', 'فارسي'],
  ['เแโ|ใไ', 'เแโใไ'],
  ['日本語ドキュメンテ(ーション)', '日本語ドキュメンテーション'],
  ['一二三四五六七八九十！。。。', '一二三四五六七八九十']
];

for (var t in tests) {
  var test = tests[t];
  uslug(test[0]).should.equal(test[1]);
}