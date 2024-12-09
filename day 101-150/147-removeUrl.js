// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// Examples
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"

function removeUrlAnchor(url){
    const aIndex = url.indexOf('#');

    if ( aIndex === -1) {
        return url;
    }
    return url.slice(0, aIndex);
}

function removeUrlAnchor(url){
    return url.split('#')[0];
  }

const removeUrlAnchor = (url) => url.split("#")[0];