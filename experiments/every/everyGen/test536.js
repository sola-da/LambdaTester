





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[6] = null
base_0[2][7] = null
base_0[0][0] = 126
return a-b*c
};
var argument2 = null;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0] = false
return a+b-c
};
var argument4 = false;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[2.4183178393969103e+306] = ["aK",":",")ICx__6"]
return a/b*c
};
var argument6 = false;
var argument7 = false;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[2.4183178393969103e+306] = true
return a-b/c
};
var argument9 = "";
var base_0 = ["P","U7}YKNS","x;","uc5","*O","p","6",")","u{"]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["P","U7}YKNS","x;","uc5","*O","p","6",")","u{"]
var r_1= undefined
try {
r_1 = base_1.every(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["P","U7}YKNS","x;","uc5","*O","p","6",")","u{"]
var r_2= undefined
try {
r_2 = base_2.every(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["P","U7}YKNS","x;","uc5","*O","p","6",")","u{"]
var r_3= undefined
try {
r_3 = base_3.every(argument8,argument9)
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
require("fs").writeFileSync("./experiments/every/everyGen/test536.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)