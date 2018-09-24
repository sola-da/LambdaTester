





var callbackArguments = [];
var argument1 = 893;
var argument2 = "";
var argument3 = [126,"`r",460,-100];
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[8] = true
return a+b+c-d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5 = {"0":-100,"82":"`}","1.4222989740383356e+308":-100,"1.4366850417463585e+308":1.1874283988943192e+308,"":705,"1.5380614098971504e+308":"<,"}
argument5[2.1869172855352885e+307] = true
base_1[8] = ["r",618,823,"?",618,-100,49,"]v,TED"]
return a-b+c*d
};
var argument6 = 59;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7 = true
argument8[5] = true
return a/b-c*d
};
var argument8 = r_0;
var argument9 = null;
var argument10 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument12[25] = [783,-100,"2g"]
return a+b-c/d
};
var argument11 = r_0;
var argument12 = true;
var base_0 = ["9e","e","u","X","lkY","%t","M"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["9e","e","u","X","lkY","%t","M"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["9e","e","u","X","lkY","%t","M"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["9e","e","u","X","lkY","%t","M"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test940.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)