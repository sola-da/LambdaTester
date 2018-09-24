





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0][4] = {"82":"]","595":">7","r;mu":714,"1.0756729742010787e+308":"","a":1.2049858222867208e+308,"":0,"%xLdJn9{":"","2.446690874764422e+307":122}
base_0 = false
base_0 = "_"
return a+b-c
};
var argument2 = true;
var argument3 = false;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[6] = "w="
return a-b/c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[3] = false
return a/b-c
};
var argument6 = false;
var argument7 = [-1,460,893,25,82];
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0][0] = {"25":"","242":59,"":2.926528901231718e+307,"E(90":1.4540822136417927e+308,"1.7976931348623157e+308":1.0329715781029271e+308,"1.123508550122385e+308":"","D":""}
base_3[8] = {"893":6.648664471301545e+307}
return a+b+c
};
var argument9 = false;
var base_0 = ["T","2","%","e","0h8D","h"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["T","2","%","e","0h8D","h"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["T","2","%","e","0h8D","h"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["T","2","%","e","0h8D","h"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8,argument9)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test266.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)