





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[3][4] = null
base_0[5][1] = [460]
return a+b+c
};
var argument2 = [126,25,893,-1];
var argument3 = r_0;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[5][0] = "L"
return a/b+c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[122] = {"1.7829438135679705e+308":"tgqy7}'","":"","0*":5.729116729663821e+307,"5.928618757810654e+307":"OS","1.1115893330776428e+308":"","1.6634588394005558e+308":-1,"1.157148852733071e+308":969,"1.0932394637875115e+307":1.5332078896656112e+308,"1.5589085693708857e+308":6.004903091608741e+307}
argument6['f!BO'] = false
return a/b+c
};
var argument6 = r_1;
var argument7 = ["Vc",714,"r","v","xN"];
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument10['^h'] = null
return a+b/c
};
var argument9 = false;
var argument10 = null;
var base_0 = ["Gw","H","Yff","N","CQ","J","Y","Z;Y@t","<|-","$;7I"]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["Gw","H","Yff","N","CQ","J","Y","Z;Y@t","<|-","$;7I"]
var r_1= undefined
try {
r_1 = base_1.some(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["Gw","H","Yff","N","CQ","J","Y","Z;Y@t","<|-","$;7I"]
var r_2= undefined
try {
r_2 = base_2.some(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["Gw","H","Yff","N","CQ","J","Y","Z;Y@t","<|-","$;7I"]
var r_3= undefined
try {
r_3 = base_3.some(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/some/someGen/test884.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)