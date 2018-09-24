





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[4][2] = "W"
return a+b-c
};
var argument2 = {"0":"","100":1.1277822633002616e+308,"vEcf":823,"1.0210045122227484e+308":"","":595,"1.2100434981717361e+308":"","1.2024404133371035e+308":"YP[l"};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[8] = 2.6011833149003685e+307
argument4[5] = "Ee"
return a*b/c
};
var argument4 = null;
var argument5 = 1.7565053689103518e+307;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[3][0] = {"":"N6","^_":"]"}
base_2[8] = {"242":2.4117353091259494e+307,"1.284500451645563e+308":"","":3.0006702620700676e+307,"qn":126,"u':":242," M":"J*S","3.874595739723433e+306":595,"1.2188648631002442e+308":460,"I":595}
return a/b+c
};
var argument7 = 1.5640962072223414e+307;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[6] = ""
return a*b-c
};
var argument9 = null;
var base_0 = [893,1.7976931348623157e+308,705,157,0,-100]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.filter(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.filter(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.filter(argument8,argument9)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test29.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)