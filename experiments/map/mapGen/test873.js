





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[8] = ""
argument2[1.268696794505825e+308] = ["Il]0","#V"]
return a+b-c
};
var argument2 = "";
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0][0] = 969
return a-b-c
};
var argument4 = null;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[6] = false
return a+b/c
};
var argument6 = true;
var argument7 = null;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[6][3] = {"59":"XY3","655":705,"$":8.258405771285632e+307,"5.071899041640685e+306":82}
argument10[0] = "qF"
base_3[3][1] = {"3.3905983743432133e+307":8.311370168481157e+307,"":"]"}
return a*b/c
};
var argument9 = true;
var argument10 = r_2;
var base_0 = [25,969,843,100,"K{j)s",893]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [25,969,843,100,"K{j)s",893]
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [25,969,843,100,"K{j)s",893]
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.map(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/map/mapGen/test873.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)