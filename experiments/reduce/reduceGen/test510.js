





var callbackArguments = [];
var argument1 = r_0;
var argument2 = true;
var argument3 = r_0;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[2][0] = true
return a+b/c-d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[2.1869172855352885e+307] = ""
return a-b*c*d
};
var argument6 = null;
var argument7 = "5>,WZ1";
var argument8 = 242;
var argument9 = {"213":"","607":"v8","823":"!U","893":-1,"ZUb!":"z","":"","Y":4.1782166920935344e+307,"1.3128454481856216e+308":"p","&":"50"};
var argument10 = 1.2182606028193129e+308;
var argument11 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[25] = 126
argument10 = "oa"
base_2[1][0] = false
return a/b+c*d
};
var argument12 = r_0;
var argument13 = false;
var argument14 = r_3;
var argument15 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0][0] = null
base_3[1] = ["l","d4Fw","a","#e","C;","3:"]
return a*b+c/d
};
var base_0 = [460,893,705,893,403,0,1.7976931348623157e+308,100]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [460,893,705,893,403,0,1.7976931348623157e+308,100]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7)
}
catch(e) {
r_1= "Error"
}
var base_2 = [460,893,705,893,403,0,1.7976931348623157e+308,100]
var r_2= undefined
try {
r_2 = base_2.reduce(argument8,argument9,argument10,argument11)
}
catch(e) {
r_2= "Error"
}
var base_3 = [460,893,705,893,403,0,1.7976931348623157e+308,100]
var r_3= undefined
try {
r_3 = base_3.reduce(argument12,argument13,argument14,argument15)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test510.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)