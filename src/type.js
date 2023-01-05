import { fileTypeFromFile, fileTypeFromStream } from 'file-type';
import fs from 'node:fs';

const stream = fs.createReadStream('./QmaTVEBZtj6m579TuxTHc5dFDWkZXMb4rSDNXw4qVDYjYs.jpeg');
console.log(await fileTypeFromStream(stream));
// console.log(await fileTypeFromFile('./QmaTVEBZtj6m579TuxTHc5dFDWkZXMb4rSDNXw4qVDYjYs.jpeg'));
