





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[3.377960715099946e+307] = 969
argument2[1] = {"82":"","618":"","714":"","1.198422269667096e+308":49,"7.934630102788775e+307":"PkUg","1.221323706597397e+308":7.766247677447204e+307}
argument2 = {"#On":"!Z","4.107969653874006e+307":"S","v":25}
return a/b*c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3['C'] = false
base_1[2] = "u"
return a*b-c
};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[2][1] = {"49":"","122":"","213":893,"Q#+":":g%N`W","":"eX&nE","wpt":"S71a","IJ":1.7976931348623157e+308,"1.1115470948725078e+308":"71"}
base_2[6] = {"|":1.2120422823427262e+308}
return a-b-c
};
var argument4 = {"403":"","969":"","1.7758423910226281e+308":1.0586440524646258e+308,"1.424635597856624e+308":655,"":"_","-q":122};
var argument5 = true;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[460] = 49
argument6 = ""
argument8[4] = true
return a/b-c
};
var argument7 = true;
var argument8 = ["&s","y>","*[","c","Rf","_%"];
var base_0 = [0,157,82]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [0,157,82]
var r_1= undefined
try {
r_1 = base_1.filter(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [0,157,82]
var r_2= undefined
try {
r_2 = base_2.filter(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [0,157,82]
var r_3= undefined
try {
r_3 = base_3.filter(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test904.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)