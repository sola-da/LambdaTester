





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2['wIs'] = "A"
return a/b+c
};
var argument2 = null;
var argument3 = true;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0][5e-324] = false
argument6[6] = {"1":-100,"714":1.3427852818549451e+308,"893":714,",lDM":5.189823068142895e+306,"=:":"","":2.8745636649392593e+305,"D":5.3834233729487343e+306,"s,m":"7A","d":""}
return a*b+c
};
var argument5 = true;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[6] = ""
base_2[9] = null
return a+b*c
};
var argument7 = false;
var argument8 = r_1;
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[6] = 82
argument10[1.1679954109349114e+308] = {"213":"","595":"Tx!zA","783":"'","1.8740568091084975e+307":59,"Qq":2.361506531736338e+307,"1.7976931348623157e+308":""}
return a/b/c
};
var argument10 = r_1;
var base_0 = ["?C","Z","*","$3H","5P","z[","fa","4"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["?C","Z","*","$3H","5P","z[","fa","4"]
var r_1= undefined
try {
r_1 = base_1.filter(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["?C","Z","*","$3H","5P","z[","fa","4"]
var r_2= undefined
try {
r_2 = base_2.filter(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["?C","Z","*","$3H","5P","z[","fa","4"]
var r_3= undefined
try {
r_3 = base_3.filter(argument9,argument10)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test480.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)