





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1] = "0"
base_0[3] = ""
argument3[969] = false
return a/b+c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[1] = {"@d":"HFNv=","=*b":6.758794237127965e+307,"1.0331774965203039e+308":"","6.032737009594154e+307":1.6822010311690152e+308,"j":"l","":2.0317383947514113e+307}
base_1['length'] = "zj"
argument2[893] = null
return a*b*c
};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[2] = false
argument5['^h'] = "Y"
base_2[3][1] = {"59":"","607":"^Kt5","618":"+","627":1.7689381063139021e+308,"783":1.6130059894828052e+308,",":1.4212465692961997e+307,"m":"","DoQ":82,"NZ":"|,","1.7976931348623157e+308":59}
return a*b+c
};
var argument4 = {"122":"","":"Y]","%":1.0497641574424849e+308};
var argument5 = false;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[8.748669805137695e+307] = "{"
argument6[5] = ""
base_3[0][2] = {"843":"","^v<":242}
return a+b-c
};
var argument7 = false;
var argument8 = false;
var base_0 = [655,-100,1.7976931348623157e+308]
var r_0= undefined
try {
r_0 = base_0.find(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [655,-100,1.7976931348623157e+308]
var r_1= undefined
try {
r_1 = base_1.find(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [655,-100,1.7976931348623157e+308]
var r_2= undefined
try {
r_2 = base_2.find(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [655,-100,1.7976931348623157e+308]
var r_3= undefined
try {
r_3 = base_3.find(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/find/findGen/test543.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)