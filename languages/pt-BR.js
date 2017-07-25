const DateFormats = require('../constants/DateFormats')

const formatter = (n, type) => {
  switch (DateFormats[type]) {
    case DateFormats.YEARS_FROM:
      return 'em ' + n + ' ano' + (n > 1 ? 's' : '')
    case DateFormats.MONTHS_FROM:
      return 'em ' + n + (n > 1 ? ' meses' : ' mês')
    case DateFormats.WEEKS_FROM:
      return 'em ' + n + ' semana' + (n > 1 ? 's' : '')
    case DateFormats.DAYS_FROM:
      return 'em ' + n + ' dia' + (n > 1 ? 's' : '')
    case DateFormats.TOMORROW:
      return 'amanhã'
    case DateFormats.HOURS_FROM:
      return 'em ' + n + ' hora' + (n > 1 ? 's' : '')
    case DateFormats.MINUTES_FROM:
      return 'em ' + n + ' minuto' + (n > 1 ? 's' : '')
    case DateFormats.SECONDS_FROM:
      return 'em ' + n + ' segundo' + (n > 1 ? 's' : '')
    case DateFormats.NOW:
      return 'agora'
    case DateFormats.SECONDS_AGO:
      return '' + n + ' segundo' + (n > 1 ? 's' : '') + ' atrás'
    case DateFormats.MINUTES_AGO:
      return '' + n + ' minuto' + (n > 1 ? 's' : '') + ' atrás'
    case DateFormats.YESTERDAY:
      return 'ontem'
    case DateFormats.HOURS_AGO:
      return '' + n + ' hora' + (n > 1 ? 's' : '') + ' atrás'
    case DateFormats.DAYS_AGO:
      return '' + n + ' dia' + (n > 1 ? 's' : '') + ' atrás'
    case DateFormats.WEEKS_AGO:
      return '' + n + ' semana' + (n > 1 ? 's' : '') + ' atrás'
    case DateFormats.MONTHS_AGO:
      return '' + n + ' ' + (n > 1 ? 'meses' : 'mês') + ' atrás'
    case DateFormats.YEARS_AGO:
      return '' + n + ' ano' + (n > 1 ? 's' : '') + ' atrás'
    default:
      throw new Error('Invalid Internal Date Type')
  }
}

module.exports = formatter
