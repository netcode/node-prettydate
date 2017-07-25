const DateFormats = require('../constants/DateFormats')

const formatter = (n, type) => {
  switch (DateFormats[type]) {
    case DateFormats.YEARS_FROM:
      return '' + n + ' year' + (n > 1 ? 's' : '') + ' from now'
    case DateFormats.MONTHS_FROM:
      return '' + n + ' month' + (n > 1 ? 's' : '') + ' from now'
    case DateFormats.WEEKS_FROM:
      return '' + n + ' week' + (n > 1 ? 's' : '') + ' from now'
    case DateFormats.DAYS_FROM:
      return '' + n + ' day' + (n > 1 ? 's' : '') + ' from now'
    case DateFormats.TOMORROW:
      return 'tomorrow'
    case DateFormats.HOURS_FROM:
      return '' + n + ' hour' + (n > 1 ? 's' : '') + ' from now'
    case DateFormats.MINUTES_FROM:
      return '' + n + ' minute' + (n > 1 ? 's' : '') + ' from now'
    case DateFormats.SECONDS_FROM:
      return '' + n + ' second' + (n > 1 ? 's' : '') + ' from now'
    case DateFormats.NOW:
      return 'just now'
    case DateFormats.SECONDS_AGO:
      return '' + n + ' second' + (n > 1 ? 's' : '') + ' ago'
    case DateFormats.MINUTES_AGO:
      return '' + n + ' minute' + (n > 1 ? 's' : '') + ' ago'
    case DateFormats.YESTERDAY:
      return 'yesterday'
    case DateFormats.HOURS_AGO:
      return '' + n + ' hour' + (n > 1 ? 's' : '') + ' ago'
    case DateFormats.DAYS_AGO:
      return '' + n + ' day' + (n > 1 ? 's' : '') + ' ago'
    case DateFormats.WEEKS_AGO:
      return '' + n + ' week' + (n > 1 ? 's' : '') + ' ago'
    case DateFormats.MONTHS_AGO:
      return '' + n + ' month' + (n > 1 ? 's' : '') + ' ago'
    case DateFormats.YEARS_AGO:
      return '' + n + ' year' + (n > 1 ? 's' : '') + ' ago'
    default:
      throw new Error('Invalid Internal Date Type')
  }
}

module.exports = formatter
