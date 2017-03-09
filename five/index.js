
// Make the http request - doesn't work at the moment...
const getWord = (host, path) => {
  fetch(host + path, {method: 'get'})
  .then(function(response) {
      return response;
  })
  .catch(function(err) {
      console.error('Error with the request:', err.message);
  });
}

// Make 5 http requests and acumulate the words.
const getWords = (host, path) => {
  const words = [];
  while(words.length < 5) {
    getWord(host, path).then((data) => {
      words.push(data);
    });
  }

  return words.join();
}

const host = 'http://127.0.0.1:9119';
const path = '/get-next-word';

getWords(host, path);
