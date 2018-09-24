





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[4] = ["D*","#{",403,893,"=",893,242]
base_0[8] = ""
return a/b/c
};
var argument2 = "";
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[0] = [100,100,-1,460,242,100]
base_1[0] = "S$"
return a/b+c
};
var argument4 = false;
var argument5 = "[@RW";
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[5] = {"6":4.392583087188832e+307,"82":6.496638231100557e+307,"403":5.526547854399515e+307,"(":460,"1.4548604842375142e+308":"","D":893}
base_2[3] = 627
base_2[6] = true
return a*b*c
};
var argument7 = [705,969,-1,100,607];
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[7] = false
argument9[4] = true
return a+b+c
};
var base_0 = ["X","`Y","mSz|","G","<","}{(>","5N","[<|"]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["X","`Y","mSz|","G","<","}{(>","5N","[<|"]
var r_1= undefined
try {
r_1 = base_1.every(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["X","`Y","mSz|","G","<","}{(>","5N","[<|"]
var r_2= undefined
try {
r_2 = base_2.every(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["X","`Y","mSz|","G","<","}{(>","5N","[<|"]
var r_3= undefined
try {
r_3 = base_3.every(argument8)
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
require("fs").writeFileSync("./experiments/every/everyGen/test75.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)