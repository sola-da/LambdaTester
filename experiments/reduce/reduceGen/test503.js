





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[5] = ["P","oQXI?,<","E"]
return a*b*c+d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[1] = null
argument4[6.35085648319999e+307] = {"3.7344809098920793e+307":"Yxj"}
return a/b/c+d
};
var argument3 = r_0;
var argument4 = null;
var argument5 = null;
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[1][3] = ""
return a-b+c*d
};
var argument7 = true;
var argument8 = [1.7976931348623157e+308,460,460,893,705,0,59,100];
var argument9 = 242;
var argument10 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[5] = "z"
argument9[25] = 1.0957305725242386e+308
return a/b+c-d
};
var base_0 = [122,-1,893,705,59,403,714]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [122,-1,893,705,59,403,714]
var r_1= undefined
try {
r_1 = base_1.reduce(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [122,-1,893,705,59,403,714]
var r_2= undefined
try {
r_2 = base_2.reduce(argument3,argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [122,-1,893,705,59,403,714]
var r_3= undefined
try {
r_3 = base_3.reduce(argument7,argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test503.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)