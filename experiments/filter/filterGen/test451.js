





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[1.7847438319683965e+308] = true
argument1[0] = ""
return a-b+c
};
var argument2 = true;
var argument3 = {"126":8.132553905715039e+307,"595":""};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5 = false
argument4[0] = false
argument6[-100] = ""
return a-b-c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[6] = null
base_2[1] = null
argument7[6] = {"126":"","627":"7s","655":"13","705":"","":"c","2.6280010864357756e+307":"n","W":1.7152304457195407e+308,"1.596680060796237e+308":"D"}
return a+b/c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7['A'] = {"25":59,"]Q$":"","dtf":"N","1.3495090736712105e+308":"EU"}
return a/b-c
};
var base_0 = [627,-100,1.7976931348623157e+308,893,25,-100]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [627,-100,1.7976931348623157e+308,893,25,-100]
var r_1= undefined
try {
r_1 = base_1.filter(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [627,-100,1.7976931348623157e+308,893,25,-100]
var r_2= undefined
try {
r_2 = base_2.filter(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [627,-100,1.7976931348623157e+308,893,25,-100]
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
require("fs").writeFileSync("./experiments/filter/filterGen/test451.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)