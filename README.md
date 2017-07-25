node-prettydate
===============

format old JavaScript dates in a “pretty” way. ex : 2 hours ago , 3 minutes ago

inspired by the John Resig Pretty Date plugin for jQuery (http://ejohn.org/blog/javascript-pretty-date/)


## Usage

`npm install pretty-date`

```javascript
const prettydate = require("pretty-date")
console.log(prettydate.format(new Date("Fri Aug 23 2013 17:30:34 GMT+0200 (EET)")))
```

## API

## `prettydate.format(date)`

Returns the formated date

- date: Date

## `prettydate.setLocale(locale)`

Sets the locale for the following format calls

- locale: string  Supported values are:
  - 'en-US': English(default)
  - 'pt-BR': Portuguese 

## Examples

### Formating
```javascript
const prettydate = require("pretty-date")

console.log( prettydate.format( new Date( new Date() - -2*365*24*60*60*1000 )))
console.log( prettydate.format( new Date( new Date() - -365*24*60*60*1000 )))
console.log( prettydate.format( new Date( new Date() - -2*30*24*60*60*1000 )))
console.log( prettydate.format( new Date( new Date() - -30*24*60*60*1000 )))
console.log( prettydate.format( new Date( new Date() - -2*24*60*60*1000 )))
console.log( prettydate.format( new Date( new Date() - -24*60*60*1000 )))
console.log( prettydate.format( new Date( new Date() - -2*60*60*1000 )))
console.log( prettydate.format( new Date( new Date() - -60*60*1000 )))
console.log( prettydate.format( new Date( new Date() - -2*60*1000 )))
console.log( prettydate.format( new Date( new Date() - -60*1000 )))
console.log( prettydate.format( new Date( new Date() - -2*1000 )))
console.log( prettydate.format( new Date( new Date() - -1*1000 )))
console.log( prettydate.format( new Date()))
console.log( prettydate.format( new Date( new Date() - 1*1000 )))
console.log( prettydate.format( new Date( new Date() - 2*1000 )))
console.log( prettydate.format( new Date( new Date() - 60*1000 )))
console.log( prettydate.format( new Date( new Date() - 2*60*1000 )))
console.log( prettydate.format( new Date( new Date() - 60*60*1000 )))
console.log( prettydate.format( new Date( new Date() - 2*60*60*1000 )))
console.log( prettydate.format( new Date( new Date() - 24*60*60*1000 )))
console.log( prettydate.format( new Date( new Date() - 2*24*60*60*1000 )))
console.log( prettydate.format( new Date( new Date() - 30*24*60*60*1000 )))
console.log( prettydate.format( new Date( new Date() - 2*30*24*60*60*1000 )))
console.log( prettydate.format( new Date( new Date() - 365*24*60*60*1000 )))
console.log( prettydate.format( new Date( new Date() - 2*365*24*60*60*1000 )))

/* outputs
* 2 years from now
* 1 year from now
* 2 months from now
* 1 month from now
* 2 days from now
* tomorrow
* 2 hours from now
* 1 hour from now
* 2 minutes from now
* 1 minute from now
* 2 seconds from now
* 1 second from now
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
### Languages
```javascript
const prettydate = require("pretty-date")
prettydate.setLocale('pt-BR')

console.log( prettydate.format( new Date( new Date() - -2*365*24*60*60*1000 )))
console.log( prettydate.format( new Date( new Date() - -365*24*60*60*1000 )))

console.log( prettydate.format( new Date( new Date() - 365*24*60*60*1000 )))
console.log( prettydate.format( new Date( new Date() - 2*365*24*60*60*1000 )))
/* outputs
* em 2 anos
* em 1 ano
* 2 anos atrás
* 1 ano atrás
*/
```

## Contributions
feel free to fork and add features , fix bugs and your pull request is more than welcome
