





var callbackArguments = [];
var argument1 = {"157":6.876718363708873e+307,"714":59};
var argument2 = [">",714,"f",893,242,82,"&O",25];
var argument3 = null;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0][3] = null
argument3[0] = null
return a-b-c-d
};
var argument5 = null;
var argument6 = "";
var argument7 = r_0;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[2][0] = "'"
return a*b/c*d
};
var argument9 = r_2;
var argument10 = "S";
var argument11 = false;
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[59] = [1.7976931348623157e+308,"2N",-1,25,"h",157,126,"^"]
return a*b/c-d
};
var argument13 = r_2;
var argument14 = r_0;
var argument15 = false;
var argument16 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument14[2] = [25,627,893,627,783,627]
argument13[9] = null
return a-b-c+d
};
var base_0 = [242,"[1Vc^<WbRB","X","*OI","B3["]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [242,"[1Vc^<WbRB","X","*OI","B3["]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = [242,"[1Vc^<WbRB","X","*OI","B3["]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10,argument11,argument12)
}
catch(e) {
r_2= "Error"
}
var base_3 = [242,"[1Vc^<WbRB","X","*OI","B3["]
var r_3= undefined
try {
r_3 = base_3.reduce(argument13,argument14,argument15,argument16)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test330.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)