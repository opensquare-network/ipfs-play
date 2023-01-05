import axios from "axios";
import { fileTypeFromBuffer } from 'file-type';

(async () => {
  const data = (await axios({
    url: `https://ipfs.io/ipfs/QmaTVEBZtj6m579TuxTHc5dFDWkZXMb4rSDNXw4qVDYjYs`,
    responseType: "arraybuffer",
  })).data;
  console.log(await fileTypeFromBuffer(data));
})();
