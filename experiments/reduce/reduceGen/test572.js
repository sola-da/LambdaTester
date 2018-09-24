





var callbackArguments = [];
var argument1 = ["sG"];
var argument2 = {"0":242,"25":"","":1.446599587843303e+308,"1.653879630867753e+308":"y","q":607,"U%":"d"};
var argument3 = ["Rr","Aj","N@!","o","-5=","p","jK<mj"];
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[5] = [618,82,595,82]
argument2[1.1277822633002616e+308] = {"783":"","0Ep?":"","":""}
return a/b/c-d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[2] = [823,122,783,893,714,100,969,126,969]
argument6[4] = 7.202263299930334e+307
return a/b+c+d
};
var argument6 = false;
var argument7 = false;
var argument8 = null;
var argument9 = null;
var argument10 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[655] = {"25":"","403":"JH","618":59,"":"VV1@z","pP=N":59}
return a-b/c/d
};
var argument11 = null;
var argument12 = r_3;
var argument13 = null;
var argument14 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument12[5] = [100,403,82,705,-1,823,460,823]
argument11[9] = 969
return a/b*c/d
};
var base_0 = [783,843,-100,595,242,595,-1,0]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [783,843,-100,595,242,595,-1,0]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [783,843,-100,595,242,595,-1,0]
var r_2= undefined
try {
r_2 = base_2.reduce(argument7,argument8,argument9,argument10)
}
catch(e) {
r_2= "Error"
}
var base_3 = [783,843,-100,595,242,595,-1,0]
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test572.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)