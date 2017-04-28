# magic-search

A simple fuzzy search tool similar to Sublime-Text's cmd-P search system.

Filters a collection down to only items that contain all of the characters in the query:
* in the correct order;
* with any amount of other characters in between.

It should work with any collection that implements `filter(lambda)` like Array does.

```js
const search = require('magic-search');

const fruit = [
  'Apple',
  'Apricot',
  'Avocado',
  'Banana',
  'Bilberry',
  'Blackberry',
  'Blackcurrant',
  ...
];

```

```js
search(fruit, 'aple')
→ ['Apple', 'Custard apple', 'Pineapple']

search(fruit, 'sberry')
→ ['Boysenberry',, 'Gooseberry', 'Raspberry', ...]
```

## Use with a getter

If you need to filter a collection of items that are more than just strings, you can use a getter function as the third argument.

```
const filteredByGenus = search(fruit, 'rosales', item => item.getGenus())
```
