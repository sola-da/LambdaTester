





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[122] = {"49":"","460":"IC",",":9.85134361454881e+307,"s":714,"3.3798384878198374e+307":"x","":"kt","4.841228647455921e+305":2.5830672833320554e+307,"1.28212889693892e+306":1.670883987165502e+308,"K":"TRTQ"}
argument2[403] = null
return a+b*c
};
var argument2 = false;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3 = [969,595,-1,-100,893,82,783,59,82,49]
base_1[6] = null
argument5[2.4183178393969103e+306] = {"0":"",",":"R","4.385523552704255e+307":"","4.095353697043565e+306":"","":"i"}
return a/b+c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[8] = {"!t":618,"opj":49,"":126}
return a*b-c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[0] = ""
return a*b/c
};
var argument6 = r_2;
var base_0 = ["o","Uu3","?","8<","W^",",","`o","TNF3"]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["o","Uu3","?","8<","W^",",","`o","TNF3"]
var r_1= undefined
try {
r_1 = base_1.every(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["o","Uu3","?","8<","W^",",","`o","TNF3"]
var r_2= undefined
try {
r_2 = base_2.every(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["o","Uu3","?","8<","W^",",","`o","TNF3"]
var r_3= undefined
try {
r_3 = base_3.every(argument5,argument6)
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
require("fs").writeFileSync("./experiments/every/everyGen/test800.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)