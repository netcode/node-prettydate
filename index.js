const DateFormats = require('./constants/DateFormats')
const ptBr = require('./languages/pt-BR')
const enUS = require('./languages/en-US')

let dateFormatLocale
if (typeof window !== 'undefined') {
  dateFormatLocale = window.navigator && window.navigator.language
} else {
  dateFormatLocale = 'en-US'
}

/**
 * @param {integer} n
 * @param {DateFormats} type
*/
function convert (diff, type) {
  let n = Math.floor(diff / DateFormats[type].divisor)
  switch (dateFormatLocale) {
    case 'pt-BR':
      return ptBr(n, type)
    default:
      return enUS(n, type)
  }
}

const prettydate = {
  format: date => {
    let diff = (((new Date()).getTime() - date.getTime()) / 1000)
    for (let type in DateFormats) {
      if (diff < DateFormats[type].threshold) {
        return convert(diff, type)
      }
    }
    throw new Error('exhausted all formatter options, none found') // should never be reached
  },
  setLocale: locale => {
    dateFormatLocale = locale
  }
}

module.exports = prettydate
