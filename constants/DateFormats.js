/**
 * @typedef {Object} DateFormat
 * @property {number} threshold
 * @property {number} divisor
 */

/**
 * @enum {DateFormat}
 */
const DateFormats = {
  YEARS_FROM: {threshold: -31535999, divisor: -31536000},
  MONTHS_FROM: {threshold: -2591999, divisor: -2592000},
  WEEKS_FROM: {threshold: -604799, divisor: -604800},
  DAYS_FROM: {threshold: -172799, divisor: -172800},
  TOMORROW: {threshold: -86399, divisor: 1},
  HOURS_FROM: {threshold: -3599, divisor: -3600},
  MINUTES_FROM: {threshold: -59, divisor: -60},
  SECONDS_FROM: {threshold: -0.9999, divisor: -1},
  NOW: {threshold: 1, divisor: 1},
  SECONDS_AGO: {threshold: 60, divisor: 1},
  MINUTES_AGO: {threshold: 3600, divisor: 60},
  HOURS_AGO: {threshold: 86400, divisor: 3600},
  YESTERDAY: {threshold: 172800, divisor: 1},
  DAYS_AGO: {threshold: 604800, divisor: 86400},
  WEEKS_AGO: {threshold: 2592000, divisor: 604800},
  MONTHS_AGO: {threshold: 31536000, divisor: 2592000},
  YEARS_AGO: {threshold: Infinity, divisor: 31536000}
}

module.exports = DateFormats
