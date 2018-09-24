





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[2][2.819898637310108e+307] = ["QDM4H","z",100,460,"Jkh",59,157,59,"#","}L"]
return a-b*c/d
};
var argument2 = {"25":5.891135961115323e+307,"607":"","rm":157,"b":"","":49,"F4M=":627,"<=":"_","1.7926662211091286e+308":""};
var argument3 = null;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5['w'] = [460,893,460,122]
return a-b+c+d
};
var argument5 = null;
var argument6 = true;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8['F2nCX>6'] = ""
base_2 = null
argument9[4] = "B<]x"
return a/b+c+d
};
var argument8 = [403,5e-324,893,595,122,595,460];
var argument9 = r_0;
var argument10 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument12['!j'] = ["Pf","5f","k","8","1","^mm","t","j","b"]
return a*b+c-d
};
var base_0 = ["}4","U","!-NXe","Z&TnL",")#","C"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["}4","U","!-NXe","Z&TnL",")#","C"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["}4","U","!-NXe","Z&TnL",")#","C"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["}4","U","!-NXe","Z&TnL",")#","C"]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument10)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test640.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)