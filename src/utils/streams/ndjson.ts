import * as fs from "fs";
// import { Readable } from 'stream';
// import * as ndjson from 'ndjson';
//
// const inputFile = './input.ndjson'; // replace with the path to your input file
// const outputFile = './output.json'; // replace with the path to save output file
//
// const inputStream = fs.createReadStream(inputFile);
//
// const outputStream = fs.createWriteStream(outputFile);
//
// // Create a TransformStream that consumes ndjson data and outputs json
// const transformStream = new TransformStream({
//   start(controller) {
//     // Get an iterator for the input stream of ndjson data
//     const ndJsonIterator = ndjson.iteratorFromStream(inputStream);
//
//     // Use a for...of loop to consume each chunk of ndjson data and output it as json
//     for (const chunk of ndJsonIterator) {
//       controller.enqueue(JSON.stringify(chunk));
//     }
//
//     // Close the stream when done consuming data
//     inputStream.on('finish', () => {
//       controller.close();
//     });
//   },
// });
//
// // Pipe the output stream to the consumer
// outputStream.pipe(transformStream);
// ```
// In this example, we first create a `Readable` stream from our input file using `fs.createReadStream()`. We then create a `Writeable` stream to save our output using `fs.createWriteStream()`.
//
// Next, we create a new `TransformStream` that will consume the ndjson data and output it as json. In the `start` method of this transform stream, we first get an iterator for the input stream of ndjson data using `ndjson.iteratorFromStream()`. We then use a `for...of` loop to consume each chunk of ndjson data and output it as json by calling `controller.enqueue(JSON.stringify(chunk))`.
//
// Finally, we pipe our output stream to the transform stream so that the data will be consumed and output as json: `outputStream.pipe(transformStream)`.
