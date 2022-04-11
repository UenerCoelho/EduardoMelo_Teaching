/* Modo sem Design pattern
    var counter = {
      count: 0,
      increment: function() {
        return this.count += 1;
      }
    };

    counter.increment();
    counter.increment();
    counter.count = 100;
    counter.count;
*/

/* Modo com Design Pattern */
var counter = (function() {
  var count = 0;

  return {
    count: function() {
      return count;
    },

    increment: function() {
      return count += 1;
    }
  };
})();
