





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2['io'] = 7.444518891406882e+306
return a-b/c
};
var argument2 = "b)|";
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[0] = 1.5391983207349664e+308
argument5[8] = ["r<","[","54","WI"]
argument5[0] = true
return a-b-c
};
var argument5 = "";
var argument6 = 1.7652301380673718e+308;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[1][5] = "L"
argument8[2] = null
return a-b/c
};
var argument8 = r_2;
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0][1] = {"607":"m ","5.26718398733194e+307":-100,"1.2685949869554404e+308":"",")U":"","-1":"","9.080884272002657e+307":714,"l?Ax":6.988457462177e+306,"6.59815033169415e+307":"L"}
base_3[2][7] = {"595":403,"607":403,"627":59,"":100,"i^'":":5"}
return a-b-c
};
var base_0 = [1.7976931348623157e+308,627,25,59,49,82,969,-100,49]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [1.7976931348623157e+308,627,25,59,49,82,969,-100,49]
var r_1= undefined
try {
r_1 = base_1.every(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [1.7976931348623157e+308,627,25,59,49,82,969,-100,49]
var r_2= undefined
try {
r_2 = base_2.every(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [1.7976931348623157e+308,627,25,59,49,82,969,-100,49]
var r_3= undefined
try {
r_3 = base_3.every(argument9)
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
require("fs").writeFileSync("./experiments/every/everyGen/test961.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)