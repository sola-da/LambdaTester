





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[6] = 126
argument3[1] = 1.3232357956919169e+308
return a+b-c
};
var argument2 = null;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[714] = true
argument5['T'] = null
return a*b*c
};
var argument4 = ["Nf","B7ix","zb","F_"];
var argument5 = false;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[1][7] = {"59":"","242":"","595":"hIvK","607":"","969":6.486317508344023e+307,"4.3001081456656e+306":"EB2","":"","7.122330047454195e+307":"hd","W":1.7128617526947587e+308}
base_2[8] = null
return a-b/c
};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7 = {"82":2.8808528513127823e+307,"157":"","607":"8@$ux","969":"=,I","2.2670869284533007e+307":"uty"}
return a+b*c
};
var argument8 = {"YS":"5a","":"","^":1.4051878145376092e+308,"5.078344490728864e+307":1.6709558450307071e+308,"1.7976931348623157e+308":"","1.1505684107794584e+308":"","1.6453709465359737e+308":"","d":"D",",e":1.7367404022949642e+308,"8.07176255139416e+307":""};
var base_0 = ["[P<","m[","r","-B","a","M","eT","WO0"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["[P<","m[","r","-B","a","M","eT","WO0"]
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["[P<","m[","r","-B","a","M","eT","WO0"]
var r_2= undefined
try {
r_2 = base_2.map(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.map(argument7,argument8)
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
require("fs").writeFileSync("./experiments/map/mapGen/test245.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)