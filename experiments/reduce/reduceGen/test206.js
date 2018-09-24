





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1][0] = {"59":"!","655":"","":"d1","`":242,"1.1560375467206387e+308":1.0089235770155026e+308}
argument3[1] = "h["
base_0[8] = null
return a*b*c/d
};
var argument2 = 1.356271953739033e+308;
var argument3 = "e1v";
var argument4 = 49;
var argument5 = false;
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1] = {"1.644142599594615e+308":"","7.040431825087699e+307":242,"":"_"}
return a+b-c+d
};
var argument7 = 823;
var argument8 = [242,783,893,59,783,655,-1,-1];
var argument9 = "";
var argument10 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[3] = [627,-100,126,242,-100,893]
base_2[0][3] = true
argument8[3] = ""
return a-b-c-d
};
var argument11 = ["&U"];
var argument12 = r_3;
var argument13 = [969,82,714,0,25,213,25,59,-100];
var argument14 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument12[2] = "<6z"
base_3[3] = null
return a-b-c*d
};
var base_0 = ["mq","4","Cd"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["mq","4","Cd"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument3,argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["mq","4","Cd"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument7,argument8,argument9,argument10)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["mq","4","Cd"]
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test206.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)