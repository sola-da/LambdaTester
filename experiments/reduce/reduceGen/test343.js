





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[627] = [82]
base_0 = "@"
return a*b/c/d
};
var argument2 = r_0;
var argument3 = [823,100,100];
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[';N'] = 0
argument4['s'] = {"59":1.6894686158015725e+308,"157":"","705":"-","969":25,"":1.5323173937644542e+308,"J":5.355718623046913e+307,"v":823,"1.0473399729857955e+308":8.461441588550943e+307,"y8f":""}
argument4['Cb'] = {"49":"","460":"","1.6953103986414528e+308":460,"":"3&jx","9.203947200533536e+307":"7","9.798860514741942e+307":""}
return a*b/c-d
};
var argument5 = 1.3752187228353399e+308;
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[0] = [607,627,213,893,893,1.7976931348623157e+308,1.7976931348623157e+308]
base_2 = ["&","_FR"]
argument8[90] = null
return a+b-c-d
};
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[1][3] = ""
argument9[59] = null
argument8[627] = null
return a/b/c+d
};
var argument8 = r_0;
var base_0 = [607,122,618,893,82,-1]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [607,122,618,893,82,-1]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [607,122,618,893,82,-1]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [607,122,618,893,82,-1]
var r_3= undefined
try {
r_3 = base_3.reduce(argument7,argument8)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test343.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)