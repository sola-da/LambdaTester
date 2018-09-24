





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[1.6706143966770798e+306] = 1.7427079349308691e+308
return a+b-c
};
var argument2 = "";
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1][6] = ["`","!j",460,100,618,969,"@","V]","2(yG"]
return a-b-c
};
var argument5 = null;
var argument6 = false;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[6] = {"82":100,"2.4969556359950495e+307":"","":";c","1.7976931348623157e+308":893}
argument8[122] = 893
base_2[1][2] = ""
return a/b/c
};
var argument8 = false;
var argument9 = {};
var argument10 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument12[6] = "7"
base_3[2] = ""
argument11[122] = "B=S}"
return a/b/c
};
var argument11 = {"893":1.4402897017996946e+308,"1.100436138062296e+308":"p","":893};
var base_0 = [403,82,595,1.7976931348623157e+308,122,-1,-1,0,823]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [403,82,595,1.7976931348623157e+308,122,-1,-1,0,823]
var r_1= undefined
try {
r_1 = base_1.every(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [403,82,595,1.7976931348623157e+308,122,-1,-1,0,823]
var r_2= undefined
try {
r_2 = base_2.every(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [403,82,595,1.7976931348623157e+308,122,-1,-1,0,823]
var r_3= undefined
try {
r_3 = base_3.every(argument10,argument11)
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
require("fs").writeFileSync("./experiments/every/everyGen/test654.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)