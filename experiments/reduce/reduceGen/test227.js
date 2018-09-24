





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[213] = [1.7976931348623157e+308," uZ",-1,"]_%","gi",-100,"]k"]
argument3[5] = ""
return a*b*c-d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[3] = "`5[p"
return a*b+c/d
};
var argument3 = {};
var argument4 = {};
var argument5 = false;
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0][4] = false
argument3[126] = [823,823,100]
base_2[1][3] = {"157":893,"a":3.5848719662694724e+307,"5.878170378241429e+307":"V$","1.6563015750574142e+308":460,"":"(uiggcZ-","5.488884905446732e+307":"","M4M":"","-100":5.175367241814264e+307,"n,":",m"}
return a+b-c/d
};
var argument7 = "";
var argument8 = null;
var argument9 = null;
var argument10 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[1] = "Z"
return a+b/c+d
};
var base_0 = ["70"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["70"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["70"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument3,argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["70"]
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test227.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)