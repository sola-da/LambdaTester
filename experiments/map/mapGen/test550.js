





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[1.7173047913506838e+308] = [823,705,126,403,59,823]
argument3[7] = [969,823,82,25,705,893,49,607,403]
argument2['f'] = true
return a/b*c
};
var argument2 = [705,893];
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4 = true
return a*b/c
};
var argument5 = r_1;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[4] = false
base_2[3][4] = {"595":1.2867279853467656e+308,"714":2.290243300803415e+307,"1.7976931348623157e+308":1.1710710199800236e+308,"1.619980047287098e+308":"L","{":"WT","q":"","1.4899536501971767e+308":7.928422522139007e+307}
return a+b*c
};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[157] = true
argument8[3.208837311680636e+307] = 655
argument8['f'] = {"0":"","213":"H)u-Q+","1.5617021763148979e+307":"?dv'D","":9.473948695566654e+307,"6.679455611304265e+306":"hrK"}
return a/b+c
};
var base_0 = [126,655,627,49,843,403]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [126,655,627,49,843,403]
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.map(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [126,655,627,49,843,403]
var r_3= undefined
try {
r_3 = base_3.map(argument7)
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
require("fs").writeFileSync("./experiments/map/mapGen/test550.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)