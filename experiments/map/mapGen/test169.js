





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[2] = null
argument2[3] = null
return a*b*c
};
var argument2 = 1.3281745684561246e+308;
var argument3 = [25,460];
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[893] = 714
return a/b+c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[1][7] = ""
base_2[1] = false
base_2[3][2] = {"122":"P2jq","627":"","g":"","":1.3948995194457116e+308,"1.6691501333502618e+308":"","-1":705,"1.5901534578742586e+308":1.352052056972924e+308,"9.347255630351497e+307":""}
return a-b+c
};
var argument6 = false;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[4] = {"893":"l","":126,"S":126,"3.7752139430913124e+307":"E","1.576830666689897e+308":714,"-1":122,"9.84003396721203e+307":2.7226108675476254e+307,"8.803986829384655e+307":6.386043247829383e+307,"z":"*xg7{<","5.720262588764512e+307":""}
argument8[403] = true
argument8[403] = 705
return a/b*c
};
var argument8 = r_2;
var argument9 = r_0;
var base_0 = [-1,783]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-1,783]
var r_1= undefined
try {
r_1 = base_1.map(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-1,783]
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-1,783]
var r_3= undefined
try {
r_3 = base_3.map(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/map/mapGen/test169.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)