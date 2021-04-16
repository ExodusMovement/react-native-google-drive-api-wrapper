export default class StaticUtils {
  static encodedUtf8ToByteArray(encoded) {
    const ar = [];

    for (let i = 0; i < encoded.length; i++) {
      ar.push(encoded.charCodeAt(i));
    }

    return ar;
  }

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
