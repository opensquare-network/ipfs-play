import * as IPFS from 'ipfs-core';
import sharp from 'sharp';

;(async () => {
  const node = await IPFS.create()
  const stream = node.cat('QmaTVEBZtj6m579TuxTHc5dFDWkZXMb4rSDNXw4qVDYjYs')
  let data = []

  for await (const chunk of stream) {
    data = [...data, ...chunk];
  }

  console.log("image data fetched, length:", data.length);

  const sharpImage = sharp(data);
  const { format, size, width, height } = await sharpImage.metadata();

  console.log(format, size, width, height);
})()
