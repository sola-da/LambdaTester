





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[5] = {"3.685654975090564e+307":"6_"}
argument2[8] = true
argument2[460] = null
return a*b*c-d
};
var argument2 = true;
var argument3 = null;
var argument4 = null;
var argument5 = r_0;
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[25] = ""
argument3[7.999889602676851e+307] = "J1"
return a*b/c-d
};
var argument7 = true;
var argument8 = null;
var argument9 = {"1":"","627":3.733639939306525e+307,"705":1.7976931348623157e+308,"":460,"2.3739317624672486e+307":1.6951160581232713e+308,"2.393177499879298e+307":1.7774064672043904e+308,"=i":"nB?"};
var argument10 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9 = {}
argument8[9.331954948603684e+307] = ""
argument8[627][126] = {"460":"{[","655":"","893":"","":"","n":6.936419312743356e+307,"<":"","5.351687730813467e+307":-1,"8.897833622960608e+307":"QQ"}
return a/b+c+d
};
var argument11 = {"25":1.2251250522228236e+308,"49":3.6884805410342373e+307,"213":"G1","595":"i#On","618":1.429774188428042e+308,"":4.848178822098409e+307,"-1":595,"u":"yS"};
var argument12 = null;
var argument13 = "";
var argument14 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[9] = true
argument13[25] = 4.885438319812363e+307
base_3[7] = [607,460,82,607,49,705,100,607,823,0]
return a+b+c/d
};
var base_0 = [49,59,1.7976931348623157e+308,627]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [49,59,1.7976931348623157e+308,627]
var r_1= undefined
try {
r_1 = base_1.reduce(argument3,argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [49,59,1.7976931348623157e+308,627]
var r_2= undefined
try {
r_2 = base_2.reduce(argument7,argument8,argument9,argument10)
}
catch(e) {
r_2= "Error"
}
var base_3 = [49,59,1.7976931348623157e+308,627]
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test955.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)