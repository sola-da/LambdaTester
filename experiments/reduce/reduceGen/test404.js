





var callbackArguments = [];
var argument1 = null;
var argument2 = "";
var argument3 = {"595":4.214344599616632e+307,"1'":893,"a":"FF","-100":1.3166027961101883e+308};
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument1['s'] = ""
base_0['length'] = [460,783,403,122,0,82,655,607,607]
return a-b-c-d
};
var argument5 = null;
var argument6 = r_0;
var argument7 = "H";
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0][4] = null
base_1[8] = [157,823,714,126,1.7976931348623157e+308,783,49,122]
argument7[1] = null
return a-b/c/d
};
var argument9 = false;
var argument10 = r_0;
var argument11 = null;
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[6.35085648319999e+307] = {"607":"m","893":-100,"":"",")T":460,"%{z":126,"1.0432409196358889e+308":"ghT90","u":"T"}
return a+b*c-d
};
var argument13 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[6] = 1.2753683273272297e+308
return a-b*c-d
};
var base_0 = ["^","#FRh2"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["^","#FRh2"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["^","#FRh2"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10,argument11,argument12)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["^","#FRh2"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument13)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test404.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)