





var callbackArguments = [];
var argument1 = {"0":"","7":"","49":"%;c","843":"TeN<W","":"","3.2727391256826944e+307":5.679312903124451e+307,"1.7976931348623157e+308":"`Un","1.6956082207297743e+308":"lh","UU":-1,"2.955397749835582e+307":"$5W"};
var argument2 = null;
var argument3 = {"823":1.51900151131127e+307,"":""};
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1] = 7.120866697662739e+307
return a-b*c*d
};
var argument5 = "^";
var argument6 = null;
var argument7 = false;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[0] = 82
return a/b*c/d
};
var argument9 = null;
var argument10 = null;
var argument11 = [843];
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[3] = [">","@w",-1]
return a*b*c-d
};
var argument13 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument15[25] = {}
return a/b/c+d
};
var argument14 = r_2;
var base_0 = [25,242,655,595,618,-1]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [25,242,655,595,618,-1]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = [25,242,655,595,618,-1]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10,argument11,argument12)
}
catch(e) {
r_2= "Error"
}
var base_3 = [25,242,655,595,618,-1]
var r_3= undefined
try {
r_3 = base_3.reduce(argument13,argument14)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test259.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)