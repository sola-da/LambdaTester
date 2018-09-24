





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1][0] = [0,5e-324,893,0]
argument3[1.4034744228995816e+308] = 1.2033268133751893e+308
argument2[1.1679954109349114e+308] = true
return a/b/c
};
var argument2 = null;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[3][1.3434821406183095e+308] = false
argument5[1.0546776681946723e+308] = [403,0,618,893,627]
return a+b+c
};
var argument4 = false;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6['jo'] = null
base_2[1][1] = {"7.087876674272881e+307":"]ofQ:_3"}
argument6[-1] = {"213":655,"893":5.971170195508861e+307,"":1.7467232967168334e+308,"7.004668712060429e+307":59}
return a/b-c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[2] = {"k":1.5665185793923981e+308,"c#":"{","8.526293616241545e+307":""}
argument7[2] = [627,25,823,403,783,627]
argument7[3] = ""
return a-b+c
};
var base_0 = [1.7976931348623157e+308,126,25,655,-1]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [1.7976931348623157e+308,126,25,655,-1]
var r_1= undefined
try {
r_1 = base_1.filter(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [1.7976931348623157e+308,126,25,655,-1]
var r_2= undefined
try {
r_2 = base_2.filter(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [1.7976931348623157e+308,126,25,655,-1]
var r_3= undefined
try {
r_3 = base_3.filter(argument6)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test551.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)