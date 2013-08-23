node-prettydate
===============

format old JavaScript dates in a “pretty” way. ex : 2 hours ago , 3 minutes ago
inspired by the John Resig Pretty Date for jQuery (http://ejohn.org/blog/javascript-pretty-date/)


## Usage

`npm install prettyDate`

```javascript
var prettyDate = require("prettyDate");
console.log(prettyDate.format(new Date("Fri Aug 23 2013 17:30:34 GMT+0200 (EET)")));
```

## Examples
```javascript
var prettyDate = require("prettyDate");
console.log(pd.format(new Date())); 
console.log(pd.format(new Date("Fri Aug 23 2013 17:30:34 GMT+0200 (EET) "))); 
console.log(pd.format(new Date("Fri Aug 23 2013 16:30:34 GMT+0200 (EET) "))); 
console.log(pd.format(new Date("Fri Aug 23 2013 11:30:34 GMT+0200 (EET) "))); 
console.log(pd.format(new Date("Fri Aug 22 2013 11:30:34 GMT+0200 (EET) ")));
console.log(pd.format(new Date("Fri Aug 21 2013 11:30:34 GMT+0200 (EET) ")));
console.log(pd.format(new Date("Fri Aug 18 2013 11:30:34 GMT+0200 (EET) ")));
console.log(pd.format(new Date("Fri Aug 10 2013 11:30:34 GMT+0200 (EET) ")));
/* outputs
* 7 minutes  ago
* 1 hour ago
* 6 hours ago 
* Yesterday
* 2 days ago
* 5 days ago
*/
```

## Contributions
feel free to fork and add features , fix bugs and your pull reguest is more than welcome