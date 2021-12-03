const fs = require("fs");

let filename= "input"
let filecontent = fs.readFileSync(filename, "utf-8");
let fileArr = filecontent.split('\n');
fileArr.pop();

fileArr.forEach( (e,i) => {
    fileArr[i] = Number(fileArr[i]);
})

let psl = fileArr[0] + fileArr[1] + fileArr[2];
let incr = 0;

for(let i = 1; i<fileArr.length-2; ++i) {
    let nsl = fileArr[i] + fileArr[i+1] + fileArr[i+2];
    if(nsl > psl) {
        incr++;
    }
    psl=nsl;

}

console.log(incr);