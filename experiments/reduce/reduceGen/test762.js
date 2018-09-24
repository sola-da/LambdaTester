





var callbackArguments = [];
var argument1 = null;
var argument2 = null;
var argument3 = ["NP","h`","&","2","FKxJH","?","qQ(=N","8Z","C"];
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[2] = [893,403]
argument3[1.3938918493123786e+308] = 8.275770268363764e+307
argument2[627][126] = {"100":"2","595":"","655":"w","843":213,"":"","5.370232740161178e+307":49,"1.7976931348623157e+308":"i"}
return a+b/c-d
};
var argument5 = "";
var argument6 = false;
var argument7 = r_1;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[0] = ["(N)D","Dv","4","8","O","v|","l_"]
argument7['*c'] = false
return a*b-c-d
};
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[';N'] = {"":""}
base_2[2][0] = {"0":"","607":59,"618":100,"":122,"2.1829396554362918e+307":"","1.7008248668294143e+308":595,"5.494870113380594e+307":"zs","-100":"!"}
return a*b-c/d
};
var argument10 = [25,122,59,82];
var argument11 = r_3;
var argument12 = r_1;
var argument13 = {"242":"","595":"","":1.082866416940405e+308,"Q":213,"1.2498188358443805e+308":"7","w":843,"a":"r"};
var argument14 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument12[7] = [59,627,403,213,213,618]
return a*b+c/d
};
var base_0 = [25,460,157,-100,607,"]",969,"PD",1.7976931348623157e+308,122]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [25,460,157,-100,607,"]",969,"PD",1.7976931348623157e+308,122]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = [25,460,157,-100,607,"]",969,"PD",1.7976931348623157e+308,122]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10)
}
catch(e) {
r_2= "Error"
}
var base_3 = [25,460,157,-100,607,"]",969,"PD",1.7976931348623157e+308,122]
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test762.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)