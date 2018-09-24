





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[4][8] = {}
argument3[7] = "0"
return a+b+c
};
var argument2 = r_0;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[3][3] = {"7":6.203667258865659e+307,"82":2.6122899126059187e+307,"126":"","460":"S","893":1.0745791256445797e+308,"":"","1.5858519655698696e+308":"x:","1.615580873312966e+308":"0k","8.957599151786418e+307":"_E}0Z!rC"}
base_1[9] = 1.0708225127844256e+308
return a/b-c
};
var argument4 = null;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[0] = ""
base_2[1][8] = {"460":"%H","1.477354027939092e+308":8.418646702841952e+307,"[x":""}
return a/b*c
};
var argument6 = true;
var argument7 = false;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[3] = "?"
base_3[3][3] = {"460":"","7.756875107081654e+307":""}
return a+b/c
};
var argument9 = "";
var argument10 = r_0;
var base_0 = ["]","*z$h","j","--","^","Xc"]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["]","*z$h","j","--","^","Xc"]
var r_1= undefined
try {
r_1 = base_1.some(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["]","*z$h","j","--","^","Xc"]
var r_2= undefined
try {
r_2 = base_2.some(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["]","*z$h","j","--","^","Xc"]
var r_3= undefined
try {
r_3 = base_3.some(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/some/someGen/test697.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)