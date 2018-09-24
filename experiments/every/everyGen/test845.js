





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[8] = {"843":3.267863283064042e+307,"-1":"","F?^":"8","":82,"-#`":"","Fd-,":""}
argument3[5] = [460,843,607,618,595,-1,122]
return a-b*c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[2] = null
argument3[3] = [";","eMe_","I:;:","]","^",242,0,-1,-1,59]
argument4[0] = null
return a-b-c
};
var argument3 = null;
var argument4 = {"122":1.5824407605943037e+308,"":3.406069688803398e+307,"4.035264979310309e+307":1.0109286570604563e+308,"1.577495935778045e+307":823,"`":"kn","lJ":"3"};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[893] = {"100":1.3438655573619064e+308,"":"","R":627,"4.0776225717014754e+307":823}
base_2[1] = [126,1.7976931348623157e+308,122,595,1.7976931348623157e+308]
argument6[6] = [",",25,"MX",126,893,157]
return a-b*c
};
var argument6 = 893;
var argument7 = 843;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[122] = null
return a+b-c
};
var base_0 = [607,"QM",5e-324,843,843,-1,"WUTb>",714,"6zx"]
var r_0= undefined
try {
r_0 = base_0.every(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [607,"QM",5e-324,843,843,-1,"WUTb>",714,"6zx"]
var r_1= undefined
try {
r_1 = base_1.every(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [607,"QM",5e-324,843,843,-1,"WUTb>",714,"6zx"]
var r_2= undefined
try {
r_2 = base_2.every(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [607,"QM",5e-324,843,843,-1,"WUTb>",714,"6zx"]
var r_3= undefined
try {
r_3 = base_3.every(argument8)
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
require("fs").writeFileSync("./experiments/every/everyGen/test845.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)