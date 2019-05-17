# angle-to-direction
角度弧度转方向

安装:
```shell
npm install angle-transform-direction --save
```


使用:

```js
var tans = require('angle-to-direction');

console.log(tans.degree(50)); // "North East"
console.log(tans.degreeAbbr(50)); // "NE"
console.log(tans.degreeCn(50)); // "东北"
 
console.log(tans.radian(50 / 180 * Math.PI)); // "North East"
console.log(tans.radianAbbr(50 / 180 * Math.PI)); // "NE"
console.log(tans.radianCn(50 / 180 * Math.PI)); // "东北"
```
