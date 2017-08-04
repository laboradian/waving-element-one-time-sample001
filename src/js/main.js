/* global */
import '../../node_modules/bootstrap-sass/assets/javascripts/bootstrap.js';
import 'babel-polyfill'

//import _ from 'lodash'

// index.html ファイルをコピーする
require('file-loader?name=../../dist/[name].[ext]!../index.html');

console.log('%c 🌈 Laboradian.com 🌈 %c http://laboradian.com ',
  'background: #2383BF; color: #fff; font-size: 1.4em;',
  'background: #e3e3e3; color: #000; margin-bottom: 1px; padding-top: 4px; padding-bottom: 1px;');


const icon = document.querySelector('#icon');
const output = document.querySelector('#output');

window.onload = () => {
  if (sessionStorage.getItem('visited') === 'true') {
    output.textContent = '2回目以降のアクセスです。';
  } else {
    output.textContent = '1回目のアクセスです。';
    sessionStorage.setItem('visited', 'true');
    icon.classList.add('shake1');
  }

  document.querySelector('#clearVisited').addEventListener('click', () => {
    sessionStorage.removeItem('visited');
  });
};
