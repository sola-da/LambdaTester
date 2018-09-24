





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2['wIs'] = {"49":595,"82":3.488978944645887e+307,"403":"","655":59,"783":"","":"L<#Kdk","RQQ":"","7.262150158877682e+307":5.951297889443528e+307,"1.7976931348623157e+308":403,"1.7745540229374439e+308":783}
return a-b-c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[3.0481490052276395e+306] = 9.056374422444084e+307
base_1[0][823] = {"1.5547127932795997e+308":"F","(":"","1.547917258838046e+308":618}
return a*b-c
};
var argument3 = {"969":242,"":122,"M5etW>D":1.098436747707739e+308,"4.923030791333652e+307":49,"1.9548942023972179e+307":403,"H":"u6","1.5843970963287755e+307":"","1.0063026970055224e+308":"_"};
var argument4 = true;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[4][6] = false
argument7[1.7976931348623157e+308] = {"969":"","Mj*":823,"4.728616307749162e+307":"`","5.815971982036044e+307":25,"":1.0876010698513508e+308}
return a-b/c
};
var argument6 = r_2;
var argument7 = true;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9 = [618,823,-1,460]
argument9[969] = [843,25]
return a+b+c
};
var argument9 = [157,627];
var base_0 = ["=","*","5"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["=","*","5"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["=","*","5"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["=","*","5"]
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test462.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)