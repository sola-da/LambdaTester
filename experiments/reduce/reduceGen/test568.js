





var callbackArguments = [];
var argument1 = null;
var argument2 = true;
var argument3 = false;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[1] = [714,122,0,-100,627,655,-100]
base_0[3] = ""
return a*b/c*d
};
var argument5 = r_1;
var argument6 = null;
var argument7 = false;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[59] = false
return a-b/c/d
};
var argument9 = null;
var argument10 = false;
var argument11 = "'_";
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[3][1] = "["
argument11[4] = ""
return a*b+c/d
};
var argument13 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument15[1.3938918493123786e+308] = "&9`I"
base_3[1][0] = [969,969,1.7976931348623157e+308,823,618,25,242,49,-1,607]
argument14[627][126] = 1.268270866436623e+308
return a/b-c-d
};
var argument14 = r_1;
var argument15 = r_1;
var base_0 = [126,1.7976931348623157e+308,100,126]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [126,1.7976931348623157e+308,100,126]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = [126,1.7976931348623157e+308,100,126]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10,argument11,argument12)
}
catch(e) {
r_2= "Error"
}
var base_3 = [126,1.7976931348623157e+308,100,126]
var r_3= undefined
try {
r_3 = base_3.reduce(argument13,argument14,argument15)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test568.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)