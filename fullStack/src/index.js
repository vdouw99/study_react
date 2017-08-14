/**
 * Created by sf on 2017/6/29.
 */

console.log('src/index.js');

var arr1 = ['数', '组', '合', '并'];
var arr2 = ['数', '组', '合', '并'];
var arr3 = arr1.concat(arr2);
document.write('<br><br>' + arr3 + '<br>');
var arr4 = [...arr1, ...arr2];
document.write(arr4 + '<br>');

// document.getElementById('app').innerHTML = 'APP';

import hello from './hello.js';
document.write(hello());


