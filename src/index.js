import * as IPFS from 'ipfs-core'

;(async () => {
  const node = await IPFS.create()
  const stream = node.cat('QmeXMHxaaWRAUPAFa9KAuDLmf4w3kSYyWwjw6aDjtKncnW')
  const decoder = new TextDecoder()
  let data = ''

  for await (const chunk of stream) {
    // chunks of data are returned as a Uint8Array, convert it back to a string
    data += decoder.decode(chunk, { stream: true })
  }

  console.log('data', data);
  console.log('json', JSON.parse(data));
})()
