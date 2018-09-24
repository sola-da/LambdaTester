





var callbackArguments = [];
var argument1 = [49,403,126,595,157,460,595,122];
var argument2 = ["<","G","d","l^"];
var argument3 = null;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0][9.12287810829114e+307] = null
argument3[5] = 969
return a+b*c*d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[403] = null
argument5 = {"cPT":1.7976931348623157e+308,"":1.0481697287293546e+308}
return a-b-c-d
};
var argument6 = {"59":3.3261606794509395e+307,"82":"Z%im","213":893,"5.109450816993741e+307":"a","9Z:":82};
var argument7 = null;
var argument8 = {"p":"","1.0274310839281093e+308":"n^"};
var argument9 = null;
var argument10 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[25] = "X0k "
return a+b*c*d
};
var argument11 = null;
var argument12 = [-100,25,-1,655,893,783,1.7976931348623157e+308];
var argument13 = "Z";
var argument14 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[6] = false
argument11 = null
base_3[0][9.12287810829114e+307] = ["=","u","cv","aS","Jn","bN","t"]
return a-b/c/d
};
var base_0 = [843,705,1.7976931348623157e+308,823]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [843,705,1.7976931348623157e+308,823]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [843,705,1.7976931348623157e+308,823]
var r_2= undefined
try {
r_2 = base_2.reduce(argument7,argument8,argument9,argument10)
}
catch(e) {
r_2= "Error"
}
var base_3 = [843,705,1.7976931348623157e+308,823]
var r_3= undefined
try {
r_3 = base_3.reduce(argument11,argument12,argument13,argument14)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test447.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)