





var callbackArguments = [];
var argument1 = function (p, v) {
 callbackArguments.push(arguments) 

    return { sighting: p.sighting - 1 };
};
var argument2 = true;
var argument3 = null;
var argument4 = function (length, op) {
 callbackArguments.push(arguments) 

    return length + op.getLength();
};
var argument5 = r_0;
var argument6 = function (acc, key) {
 callbackArguments.push(arguments) 

    if (/^_/.test(key) && key !== '_attachments') {
        acc.metadata[key.slice(1)] = doc[key];
    } else {
        acc.data[key] = doc[key];
    }
    return acc;
};
var argument7 = true;
var argument8 = {"0":1.2728969013871833e+308,"460":1.7061364217676174e+308,"705":4.818095222587679e+307,"783":49,"4.710917414662172e+307":242,"1.3435829872183634e+308":"p ","AA@":"","L&":""};
var argument9 = function (previousValue, currentValue, index, array) {
 callbackArguments.push(arguments) 

    return array.join();
};
var argument10 = r_0;
var base_0 = ["e","w","1"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["e","w","1"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["e","w","1"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument9,argument10)
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
require("fs").writeFileSync("./experiments/reduce/reduceMined/test520.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)