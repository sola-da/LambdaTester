





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[1.4205726959827606e+308] = ["_H",">b","$"]
return a-b+c-d
};
var argument2 = 8.024926245958967e+307;
var argument3 = {"3.2183437465566857e+307":"","6.217913462937438e+307":595,"":7.319314067777088e+307,"1.3601299442284886e+308":"","_]":"oec=Dmx"};
var argument4 = r_0;
var argument5 = [82,49,82,714,157,783,126,607,595,122];
var argument6 = null;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[82] = ["U"]
base_1[8] = null
return a+b+c/d
};
var argument8 = true;
var argument9 = null;
var argument10 = r_0;
var argument11 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[1] = null
return a-b+c-d
};
var argument12 = "";
var argument13 = {"843":"v2z","g":5.52724391783168e+307,"8.2392234218644e+307":"w"};
var argument14 = r_2;
var argument15 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument12[2.1280896016417002e+307] = true
argument14[2] = {"242":49,"403":"","595":969,"618":"","":"","gg":"","8.267422213711599e+307":"","x#":5.3843701998173945e+306}
argument14[1.359136872727139e+308] = null
return a-b*c/d
};
var base_0 = ["<","l&SFm"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["<","l&SFm"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5,argument6,argument7)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["<","l&SFm"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument8,argument9,argument10,argument11)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["<","l&SFm"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument12,argument13,argument14,argument15)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test844.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)