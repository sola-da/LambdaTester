





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[6][4] = null
return a+b-c
};
var argument2 = true;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[1] = "@|["
base_1[0] = {"59":"","969":607,"oO":49,"":"{BK4","8W ":"3"}
argument4[3.7668525981726295e+307] = null
return a+b-c
};
var argument4 = "Q";
var argument5 = {"126":5.691857725744797e+307,"843":1.2820883038964174e+308,"MMfW":"","":"","6.699499322332541e+306":714,"4.953791384496108e+307":969,"-(8v":783};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2 = ""
argument8['!j'] = ""
return a*b-c
};
var argument7 = r_2;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[893] = [49,126,0,705,627,893,0,843]
return a-b+c
};
var base_0 = [242,969,1.7976931348623157e+308,705,843,1.7976931348623157e+308]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [242,969,1.7976931348623157e+308,705,843,1.7976931348623157e+308]
var r_1= undefined
try {
r_1 = base_1.find(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [242,969,1.7976931348623157e+308,705,843,1.7976931348623157e+308]
var r_2= undefined
try {
r_2 = base_2.find(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [242,969,1.7976931348623157e+308,705,843,1.7976931348623157e+308]
var r_3= undefined
try {
r_3 = base_3.find(argument8)
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
require("fs").writeFileSync("./experiments/find/findGen/test151.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)