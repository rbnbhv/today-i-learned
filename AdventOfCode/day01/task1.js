/* - Advent of Code Tag 1
-
- Aufgabe war aus einer Liste von Zahlen zu zählen, wie oft sich der
- Zahlwert von einer auf die nächste Zeile erhöht.
-
- Zweite Teilaufgabe war die gleiche Frage, nur diesmal auf ein Sliding
- Window (Größe 3) in welchem die Einzelwerte aufsümmiert werden.
- */

const fs = require("fs");

let filename= "input"
let filecontent = fs.readFileSync(filename, "utf-8");
let fileArr = filecontent.split('\n');
fileArr.pop();

let incr = 0;

for(let i = 1; i<fileArr.length; ++i) {
    if(Number(fileArr[i]) > Number(fileArr[i-1])) {
        incr++;
    }
}

console.log(incr);
