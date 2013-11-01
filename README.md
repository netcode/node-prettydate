node-prettydate
===============

format old JavaScript dates in a “pretty” way. ex : 2 hours ago , 3 minutes ago

inspired by the John Resig Pretty Date plugin for jQuery (http://ejohn.org/blog/javascript-pretty-date/)


## Usage

`npm install pretty-date`

```javascript
var prettydate = require("pretty-date");
console.log(prettydate.format(new Date("Fri Aug 23 2013 17:30:34 GMT+0200 (EET)")));
```

## Examples
```javascript
var prettydate = require("pretty-date");
console.log(prettydate.format(new Date())); 
console.log(prettydate.format(new Date("Fri Aug 23 2013 17:30:34 GMT+0200 (EET) "))); 
console.log(prettydate.format(new Date("Fri Aug 23 2013 16:30:34 GMT+0200 (EET) "))); 
console.log(prettydate.format(new Date("Fri Aug 23 2013 11:30:34 GMT+0200 (EET) "))); 
console.log(prettydate.format(new Date("Fri Aug 22 2013 11:30:34 GMT+0200 (EET) ")));
console.log(prettydate.format(new Date("Fri Aug 21 2013 11:30:34 GMT+0200 (EET) ")));
console.log(prettydate.format(new Date("Fri Aug 18 2013 11:30:34 GMT+0200 (EET) ")));
console.log(prettydate.format(new Date("Fri Aug 10 2013 11:30:34 GMT+0200 (EET) ")));
/* outputs
* just now
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
