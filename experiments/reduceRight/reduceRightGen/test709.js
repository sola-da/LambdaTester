





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[4] = {"100":0,"607":7.15839159930958e+307,"":"%&@","bF":"","1.5653337732292059e+308":655,"4.526250479726372e+307":1.8859091922344656e+307}
argument2[82] = true
return a-b+c*d
};
var argument2 = r_0;
var argument3 = null;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
return a+b-c-d
};
var argument5 = r_1;
var argument6 = {"25":"r","618":8.346736667442045e+307,"705":"","":"6"};
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[3.8120440085202614e+307] = {"25":"","242":"","1.7826926844310041e+308":823,"Sg":7.330524795700054e+307,"3.635782304459282e+307":460,"f":403}
argument8[8.575765443877852e+307] = ["}Q","xXi","gZwj","x","K",607,893,"g"]
base_2[1][5] = true
return a-b*c+d
};
var argument8 = [";RS","}U$O"];
var argument9 = {};
var argument10 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0][3] = ["y:1|",460,893,122,"Ywu$G",59,"A#o",122,213]
return a-b/c+d
};
var argument11 = false;
var argument12 = r_1;
var base_0 = ["%1QF","B+d","q","sj","d"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["%1QF","B+d","q","sj","d"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["%1QF","B+d","q","sj","d"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["%1QF","B+d","q","sj","d"]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test709.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)