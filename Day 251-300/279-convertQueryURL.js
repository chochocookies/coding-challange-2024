// In this kata, we want to convert a URL query string into a nested object. The query string will contain parameters that may or may not have embedded dots ('.'), and these dots will be used to break up the properties into the nested object.

// You will receive a string input that looks something like this:

// user.name.firstname=Bob&user.name.lastname=Smith&user.favoritecolor=Light%20Blue
// Your method should return an object hash-map that looks like this:

// {
//   'user': {
//     'name': {
//       'firstname': 'Bob',
//       'lastname': 'Smith'
//     },
//     'favoritecolor': 'Light Blue'
//   }
// }
// You can expect valid input. You won't see input like:
// // This will NOT happen
// foo=1&foo.bar=2
// All properties and values will be strings — and the values should be left as strings to pass the tests.
// Make sure you decode the URI components correctly

function convertQueryToMap(query) {
    const result = {};

    // Check for empty query string
    if (!query) {
        return result; // Return an empty object
    }

    // Split the query string into key-value pairs
    const pairs = query.split('&');

    pairs.forEach(pair => {
        const [encodedKey, encodedValue] = pair.split('=');
        const key = decodeURIComponent(encodedKey);
        const value = decodeURIComponent(encodedValue || '');

        // Split the key by '.' to create nested properties
        const keys = key.split('.');
        let current = result;

        keys.forEach((k, index) => {
            // If it's the last key, set the value
            if (index === keys.length - 1) {
                current[k] = value;
            } else {
                // If the key doesn't exist, create an empty object
                current[k] = current[k] || {};
            }
            // Move deeper into the nested structure
            current = current[k];
        });
    });

    return result;
}


//other solutions
const convertQueryToMap = query =>
    query.split(`&`).map(val => val.split(/[=.]/)).reduce((obj, arr) => {
      const value = arr.pop();
      arr.reduce((pre, val, idx) => pre[val] = ++idx === arr.length ? decodeURIComponent(value) : pre[val] || {}, obj);
      return obj;
    }, {});