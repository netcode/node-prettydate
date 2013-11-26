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
console.log( prettydate.format( new Date()));
console.log( prettydate.format( new Date( new Date() - 1*1000 )));
console.log( prettydate.format( new Date( new Date() - 2*1000 )));
console.log( prettydate.format( new Date( new Date() - 60*1000 )));
console.log( prettydate.format( new Date( new Date() - 2*60*1000 )));
console.log( prettydate.format( new Date( new Date() - 60*60*1000 )));
console.log( prettydate.format( new Date( new Date() - 2*60*60*1000 )));
console.log( prettydate.format( new Date( new Date() - 24*60*60*1000 )));
console.log( prettydate.format( new Date( new Date() - 2*24*60*60*1000 )));
console.log( prettydate.format( new Date( new Date() - 30*24*60*60*1000 )));
console.log( prettydate.format( new Date( new Date() - 2*30*24*60*60*1000 )));
console.log( prettydate.format( new Date( new Date() - 365*24*60*60*1000 )));
console.log( prettydate.format( new Date( new Date() - 2*365*24*60*60*1000 )));

/* outputs
* just now
* 1 second ago
* 2 seconds ago
* 1 minute ago
* 2 minutes ago
* 1 hour ago
* 2 hours ago
* yesterday
* 2 days ago
* 1 month ago
* 2 months ago
* 1 year ago
* 2 years ago
*/
```

## Contributions
feel free to fork and add features , fix bugs and your pull reguest is more than welcome
