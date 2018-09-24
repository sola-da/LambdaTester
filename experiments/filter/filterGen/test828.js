





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[705] = null
argument2['C'] = null
return a/b+c
};
var argument2 = "";
var argument3 = false;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[4] = [",","e","}"]
argument5['7q('] = null
return a+b+c
};
var argument5 = false;
var argument6 = r_0;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[618] = [";","eMe_","I:;:","]","^",242,0,-1,-1,59]
argument9[6] = null
return a/b/c
};
var argument8 = null;
var argument9 = {"122":1.5824407605943037e+308,"":3.406069688803398e+307,"4.035264979310309e+307":1.0109286570604563e+308,"1.577495935778045e+307":823,"`":"kn","lJ":"3"};
var argument10 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument12[1.7847438319683965e+308] = {"100":1.3438655573619064e+308,"":"","R":627,"4.0776225717014754e+307":823}
argument12 = [126,1.7976931348623157e+308,122,595,1.7976931348623157e+308]
argument12[5] = [",",25,"MX",126,893,157]
return a-b*c
};
var argument11 = 893;
var argument12 = 843;
var base_0 = ["&bE)5","+U",843,"H",714,595,1.7976931348623157e+308]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["&bE)5","+U",843,"H",714,595,1.7976931348623157e+308]
var r_1= undefined
try {
r_1 = base_1.filter(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.filter(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.filter(argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test828.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)