





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[4] = {"^in":"","":"H","6.930622702100845e+307":7.36878923624889e+307,"gN":823,"1.4944476348093422e+308":"","1.3630620754626891e+308":"F"}
argument2['5L'] = "s"
return a-b+c
};
var argument2 = "5";
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[4][7] = {"0":4.444400181481686e+307,"=":"wEnZ","3.4340214260266245e+307":100,"-":"7@&"}
argument5 = 213
base_1[6] = "k"
return a+b-c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[4] = null
return a/b/c
};
var argument6 = r_2;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[9] = null
argument8['j'] = null
return a+b+c
};
var argument8 = true;
var argument9 = 705;
var base_0 = ["j2RU_","c","Z","MC"]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["j2RU_","c","Z","MC"]
var r_1= undefined
try {
r_1 = base_1.some(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["j2RU_","c","Z","MC"]
var r_2= undefined
try {
r_2 = base_2.some(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["j2RU_","c","Z","MC"]
var r_3= undefined
try {
r_3 = base_3.some(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/some/someGen/test344.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)