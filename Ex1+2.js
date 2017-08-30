var boys = ["Peter", "lars", "Ole"];
var girls = ["Janne", "hanne", "Sanne"];

var all = boys.concat(girls);

console.log(all); // Prints value

var girls = ["Peter", "Lars", "Ole", "Janne", "Hanne", "Sanne"];
var gurls2 = ["Peter" - "lars" - "Ole" - "Janne" - "Hanne" - "Sanne"];
var gurls3  = ["Peter", "Lars", "Ole","Janne","Hanne","Sanne"];
console.log("============================================");
console.log(all.push("Lone", "Gitte")); // End of the array
console.log(all);  
console.log("============================================");
console.log(all.unshift("Hans", "Kurt")); // Push to start
console.log(all);
console.log("============================================");
console.log(all.shift(0,1)); // Removing Hans
console.log(all);
console.log("============================================");
console.log(all.pop(9,0)); // Removing Gitte
console.log(all);
console.log("============================================");
console.log(all.splice(2,3)); // Remvoing Janne & Ole (With indexing)
console.log("============================================");
console.log(all.reverse());   // Reversing, girls come first.
console.log("============================================");
console.log(all.sort());
console.log("============================================");
var uppercases = gurls3.map(function (x) { return x.toUpperCase(); });
console.log(uppercases);      // Prints to uppercase letters in array.
console.log("============================================");
var names = ["Peter", "Lars", "Ole", "Janne", "Hanne", "Sanne"];

var dname = names.filter(function (names) { return names.match("L") });

console.log("Uppercase names, Hurray :  " + uppercases);
console.log("The names that contain L :" + dname);
console.log("Combining boys and girls: " + all);
console.log("What is this: " + girls);


//////////////////////////////////////////////////////////////////////////////////////////////









