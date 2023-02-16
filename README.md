### Description
This node.js library can merge multiple PDF documents, or parts of them, to one new PDF document. It's only dependency is pdf-lib so it can run in any javascript-only environnement without any external dependencies.

If you are searching for the legacy version based on pdfjs please install a v3 release. Since v4 we use pdf-lib instead.

This library is inspired by the PHP library PDFMerger and has a very similar API.

### Installation
npm install --save pdf-merger-js

### Usage
node.js
The node.js version has the following export functions:

1.saveAsBuffer exports a merged pdf as an Buffer.
2.save saves the pdf under the given filename.
3.setMetadata set Metadata for producer, author, title or creator

### async node.js example
const PDFMerger = require('pdf-merger-js');
```
var merger = new PDFMerger();

(async () => {
  await merger.add('pdf1.pdf');  //merge all pages. parameter is the path to file and filename.
  await merger.add('pdf2.pdf', 2); // merge only page 2
  await merger.add('pdf2.pdf', [1, 3]); // merge the pages 1 and 3
  await merger.add('pdf2.pdf', '4, 7, 8'); // merge the pages 4, 7 and 8
  await merger.add('pdf3.pdf', '3 to 5'); //merge pages 3 to 5 (3,4,5)
  await merger.add('pdf3.pdf', '3-5'); //merge pages 3 to 5 (3,4,5)

  await merger.save('merged.pdf'); //save under given name and reset the internal document
  
  // Export the merged PDF as a nodejs Buffer
  // const mergedPdfBuffer = await merger.saveAsBuffer();
  // fs.writeSync('merged.pdf', mergedPdfBuffer);
})();
```
### FrontEnd :
  HTML,CSS,JAVASCRIPT,NODE JS

### BackEnd :
  EXPRESS JS(Framework used for Node)

### LocalHost Used:
   http://localhost:3001
