





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[5.262931091360336e+307] = {}
argument3[6] = ["J",59,595,"$h-",";","W`_6:"]
argument3[2] = "o r"
return a-b/c
};
var argument2 = {"126":"q","":"","6.506929612833831e+307":",","1.4116744704696113e+308":213,")":""};
var argument3 = 3.422899960587152e+307;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6['T'] = ""
argument6[1.0546776681946723e+308] = "#M"
return a/b-c
};
var argument5 = null;
var argument6 = "{";
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[1] = {"969":"","c":1.7976931348623157e+308,"1.753153448333738e+308":49,"":3.1421982269267003e+307,"qDE":0}
return a-b-c
};
var argument8 = [969,1.7976931348623157e+308,460,607];
var argument9 = null;
var argument10 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[-1] = null
return a/b*c
};
var base_0 = [82,-1]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [82,-1]
var r_1= undefined
try {
r_1 = base_1.filter(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [82,-1]
var r_2= undefined
try {
r_2 = base_2.filter(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.filter(argument10)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test540.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)