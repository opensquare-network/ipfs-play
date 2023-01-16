import axios from "axios";
import { fileTypeFromBuffer } from 'file-type';

const cids = [
  "QmeXMHxaaWRAUPAFa9KAuDLmf4w3kSYyWwjw6aDjtKncnW",
  "QmaTVEBZtj6m579TuxTHc5dFDWkZXMb4rSDNXw4qVDYjYs",
  "QmYK58GeYcGMbjjfPDo69jsUU4A8PpLEyPcxBY1yJCSnD1",
];

;(async () => {
  for (const cid of cids) {
    const res = await axios({
      url: `https://ipfs.io/ipfs/${ cid }`,
      responseType: "arraybuffer",
    });

    const data = res.data;
    console.log("cid", cid, "res type", res.headers['content-type']);
    console.log("parsed file type:", await fileTypeFromBuffer(data));
  }
})();
