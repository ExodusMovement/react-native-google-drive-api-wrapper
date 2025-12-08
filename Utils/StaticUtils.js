export default class StaticUtils {
  static quoteIfString(value, quotingSymbol = '"') {
    return value.constructor == String
      ? `${quotingSymbol}${value}${quotingSymbol}`
      : value;
  }

  static safeQuoteIfString(value, quoteIfString, quotingSymbol) {
    return quoteIfString
      ? StaticUtils.quoteIfString(value, quotingSymbol)
      : value;
  }
}
