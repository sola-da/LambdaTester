





var callbackArguments = [];
var argument1 = false;
var argument2 = {"0":1.0137123341832642e+308,"213":"","460":595,"714":460,"`":"","Ik":"","tZw":"8VA","":705,"1.0882017630142025e+307":969};
var argument3 = false;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[3] = "e"
base_0[3] = null
return a+b-c*d
};
var argument5 = "N";
var argument6 = "q3v";
var argument7 = r_0;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[6.35085648319999e+307] = 655
argument6[82] = null
argument5[9] = null
return a*b/c-d
};
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[3] = 893
return a*b+c*d
};
var argument10 = null;
var argument11 = true;
var argument12 = null;
var argument13 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[2] = 1.7976931348623157e+308
argument11[82] = ""
return a-b*c+d
};
var base_0 = ["o",82,823,"Y)",403,893,100,0]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["o",82,823,"Y)",403,893,100,0]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["o",82,823,"Y)",403,893,100,0]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["o",82,823,"Y)",403,893,100,0]
var r_3= undefined
try {
r_3 = base_3.reduce(argument10,argument11,argument12,argument13)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test850.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)