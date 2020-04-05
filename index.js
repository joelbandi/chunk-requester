module.exports = function (requestFns, chunkSize, onEachResponse) {
  var chunks = require('lodash.chunk')(requestFns, chunkSize);
  
  return chunks.reduce((previousChunkPromise, nextChunk) => {
    return previousChunkPromise.then((chunkResponsesSoFar) => {
      
      return new Promise((resolve, _) => {
        Promise
          .all(nextChunk.map(fn => fn()))
          .then(nextChunkResponses => {
            typeof onEachResponse === 'function' && onEachResponse(nextChunkResponses);
            chunkResponsesSoFar.push(nextChunkResponses)
            resolve(flatten(chunkResponsesSoFar))
          })
      });

    })
  }, Promise.resolve([]));
}
