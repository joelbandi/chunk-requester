## Hmmm but how do I use this ?
----------------------------

```node
import Foo from 'chunk-requester';

const arrayOfFunctionsThatReturnAPromise = [() => Promise.resolve(1), () => Promise.resolve(2)];
const chunkSize = 3;

const onEachChunkResolve = (resolvedValue) => {
  console.log(resolvedValue);
}

const onAllChunksResolved = (allValuesInAnArray) => {
  console.log(allValuesInAnArray);
}

Foo(
  arrayOfFunctionsThatReturnAPromise,
  chunkSize,
  onEachChunkResolve
).then(onAllChunksResolved)
```
### oh well ...easy enough
