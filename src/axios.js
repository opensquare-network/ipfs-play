import axios from "axios";

(async () => {
  const data = (await axios.get(`https://ipfs.io/ipfs/QmaTVEBZtj6m579TuxTHc5dFDWkZXMb4rSDNXw4qVDYjYs`)).data;
  console.log(data);
})();
