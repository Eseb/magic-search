var invariant = require('invariant');

function search(scope, query, getter) {
  invariant(
    scope,
    'Search collection not provided'
  );

  invariant(
    query,
    'Query string not provided'
  );

  return scope.filter(function(item) {
    var value = item;
    if (getter) {
      value = getter(item);
    }

    var needleIndex = 0;

    for (var index = 0; index < value.length; index++) {
      var currentChar = value[index];

      // Found the char we're searching for.
      if (currentChar.toLowerCase() === query[needleIndex].toLowerCase()) {
        needleIndex += 1;
      }

      // We're at the end of the query--we found everything we needed.
      if (needleIndex === query.length - 1) {
        return true;
      }
    }

    return false;
  });
}

module.exports = search;
