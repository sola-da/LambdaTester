





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[6.35085648319999e+307] = null
return a*b+c/d
};
var argument2 = false;
var argument3 = r_0;
var argument4 = null;
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[2] = ["%"]
return a/b+c/d
};
var argument6 = "";
var argument7 = null;
var argument8 = r_0;
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6['Cb'] = [595,59,-100,5e-324,126,595]
base_2[0][3] = "%"
return a-b/c/d
};
var argument10 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[5.71178064163152e+307] = {"25":"","157":25,"618":"C<5","":"","k":618,"V":"1","7+S":"","4.0581728000475903e+307":157,"yf7e":"","z":"N"}
argument12[1.359136872727139e+308] = [":",1.7976931348623157e+308,"J%","+@3!7",">"]
argument10 = null
return a*b+c/d
};
var argument11 = null;
var argument12 = "63JkL!4";
var base_0 = [655,"#=","m}uZ",-100]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [655,"#=","m}uZ",-100]
var r_1= undefined
try {
r_1 = base_1.reduce(argument2,argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [655,"#=","m}uZ",-100]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [655,"#=","m}uZ",-100]
var r_3= undefined
try {
r_3 = base_3.reduce(argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test987.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)