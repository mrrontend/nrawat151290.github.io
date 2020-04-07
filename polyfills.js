const polyfills = function () {
  if (!String.prototype.equalsIgnoreCase) {
    String.prototype.equalsIgnoreCase = function (stringToCompare) {
      if (typeof this !== 'string' || typeof stringToCompare !== 'string') {
        return false;
      }
      return this.toLowerCase() === stringToCompare.toLowerCase();
    };
  }
}

export default polyfills;