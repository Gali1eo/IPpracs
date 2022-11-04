const fs = require('fs');

//fs.mkdirSync("yash");

//fs.writeFileSync('yash/yy.txt', "Its yash here");

//fs.appendFileSync('yash/yy.txt', "Its yash here and he is doing good");

//const data = fs.readFileSync("yash/yy.txt", "utf8");
//console.log(data);

//fs.renameSync("yash/yy.txt", "yash/yyy.txt");


//fs.unlinkSync("yash/yyy.txt");
//fs.rmdirSync("yash");


//whats done here is
//1: Created a folder named yash
//2. Cretaed a file in init named yy.txt and data into it.
//3. Added more data into the file at the end of the existing data.
//4. read the data without getting the buffer data at first.
// file encoding
//5. Renamed the file name to yyy.txt
//6. deleted the file and folder