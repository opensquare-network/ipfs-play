import axios from "axios";
import { fileTypeFromBuffer } from 'file-type';

const cids = [
  "QmeXMHxaaWRAUPAFa9KAuDLmf4w3kSYyWwjw6aDjtKncnW",
  "QmaTVEBZtj6m579TuxTHc5dFDWkZXMb4rSDNXw4qVDYjYs",
  "QmYK58GeYcGMbjjfPDo69jsUU4A8PpLEyPcxBY1yJCSnD1",
];

;(async () => {
  for (const cid of cids) {
    const data = (await axios({
      url: `https://ipfs.io/ipfs/${ cid }`,
      responseType: "arraybuffer",
    })).data;

    console.log(await fileTypeFromBuffer(data));
  }
})();
