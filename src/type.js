import { fileTypeFromFile, fileTypeFromStream } from 'file-type';
import fs from 'node:fs';

const stream = fs.createReadStream('./QmYK58GeYcGMbjjfPDo69jsUU4A8PpLEyPcxBY1yJCSnD1.mp4');
console.log(await fileTypeFromStream(stream));
// console.log(await fileTypeFromFile('./QmaTVEBZtj6m579TuxTHc5dFDWkZXMb4rSDNXw4qVDYjYs.jpeg'));
