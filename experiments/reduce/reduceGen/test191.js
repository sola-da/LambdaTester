





var callbackArguments = [];
var argument1 = null;
var argument2 = true;
var argument3 = ["M","^==","7","d","_","JfS","oY","m%9","6"];
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument1 = {}
base_0[8] = null
return a*b/c+d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[0] = 7.457943286185502e+307
return a*b+c*d
};
var argument6 = "";
var argument7 = true;
var argument8 = ["|{]ye",242,122];
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6 = 2.082485138281123e+307
argument7[403] = false
base_2[0][9.12287810829114e+307] = ["7",1.7976931348623157e+308,823,607,"Nvi"]
return a*b-c-d
};
var argument10 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[0] = null
base_3[7] = true
return a-b*c*d
};
var argument11 = null;
var argument12 = "";
var base_0 = [783,122,893,126,823,893,403,242]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [783,122,893,126,823,893,403,242]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [783,122,893,126,823,893,403,242]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [783,122,893,126,823,893,403,242]
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test191.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)