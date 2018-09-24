





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2['K'] = [595,157,460,595]
base_0[8] = [1.7976931348623157e+308,618,100,82,618,607,0,242]
argument2['wIs'] = ""
return a/b/c
};
var argument2 = null;
var argument3 = "";
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5['h'] = null
base_1[3] = 1.7096849257423893e+308
argument5[2] = null
return a*b*c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[7] = {"cPT":1.7976931348623157e+308,"":1.0481697287293546e+308}
base_2[0][4] = {"59":3.3261606794509395e+307,"82":"Z%im","213":893,"5.109450816993741e+307":"a","9Z:":82}
return a*b/c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[8] = "p"
base_3 = [">",157,"K",893,"r<",100,213]
argument7[1.7847438319683965e+308] = 7.908052978163506e+307
return a-b/c
};
var argument7 = true;
var argument8 = null;
var base_0 = [403,843,705,1.7976931348623157e+308]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [403,843,705,1.7976931348623157e+308]
var r_1= undefined
try {
r_1 = base_1.filter(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [403,843,705,1.7976931348623157e+308]
var r_2= undefined
try {
r_2 = base_2.filter(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [403,843,705,1.7976931348623157e+308]
var r_3= undefined
try {
r_3 = base_3.filter(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test519.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)