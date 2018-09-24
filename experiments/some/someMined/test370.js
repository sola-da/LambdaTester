





var callbackArguments = [];
var argument1 = function (sequence) {
 callbackArguments.push(arguments) 

    return sequence.hasErrorHandler();
};
var argument2 = ["6","<"];
var argument3 = function (v) {
 callbackArguments.push(arguments) 

    return v2(v);
};
var argument4 = function (t) {
 callbackArguments.push(arguments) 

    return typeof t === 'object';
};
var argument5 = false;
var argument6 = false;
var argument7 = function (nick) {
 callbackArguments.push(arguments) 

    return server.normalizeName(nick) === userNick;
};
var argument8 = false;
var argument9 = false;
var base_0 = [" ","0","8B+P","n","gFZfEi","M"]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [" ","0","8B+P","n","gFZfEi","M"]
var r_1= undefined
try {
r_1 = base_1.some(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [" ","0","8B+P","n","gFZfEi","M"]
var r_2= undefined
try {
r_2 = base_2.some(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [" ","0","8B+P","n","gFZfEi","M"]
var r_3= undefined
try {
r_3 = base_3.some(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/some/someMined/test370.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)