





var callbackArguments = [];
var argument1 = function (obj, index) {
 callbackArguments.push(arguments) 

    this.a[index] = obj;
    numberOfRuns += 1;
    if (numberOfRuns == 3) {
        return true;
    }
    return false;
};
var argument2 = null;
var argument3 = null;
var argument4 = function (suffix) {
 callbackArguments.push(arguments) 

    return inputTrimmed.indexOf(suffix, inputTrimmed.length - suffix.length) !== -1;
};
var argument5 = function (db) {
 callbackArguments.push(arguments) 

    return db.id === doc.id;
};
var argument6 = function (v) {
 callbackArguments.push(arguments) 

    return v2(v);
};
var base_0 = ["E2","H","=","V)Go","O","[a","M"]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["E2","H","=","V)Go","O","[a","M"]
var r_1= undefined
try {
r_1 = base_1.some(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["E2","H","=","V)Go","O","[a","M"]
var r_2= undefined
try {
r_2 = base_2.some(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["E2","H","=","V)Go","O","[a","M"]
var r_3= undefined
try {
r_3 = base_3.some(argument6)
}
catch(e) {
r_3= "Error"
}
function serialize(array){
return array.map(function(a){
if (a === null || a == undefined) return a;
var name = a.constructor.name;
if (name==='Object' || name=='Boolean'|| name=='Array'||name=='Number'||name=='String')
return JSON.stringify(a);
return name;
 });
}
setTimeout(function(){
require("fs").writeFileSync("./experiments/some/someMined/test667.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)