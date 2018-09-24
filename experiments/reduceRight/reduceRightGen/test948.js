





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[7] = 1.2833936875720886e+308
base_0[6] = null
return a+b-c*d
};
var argument2 = false;
var argument3 = null;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[6] = ""
argument5[1.738403780925446e+308] = null
return a-b-c-d
};
var argument5 = true;
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[3] = {"9":"","705":"","":"ui","a&":"","1.3607241280739928e+308":893}
argument6[0] = {"705":"O","1.4601688061092394e+308":1.5314607930185485e+308,"9.70369101863636e+307":"@1_","":">V","Os|ojg":5e-324,"3.363280761634807e+307":"UF","6o":"l="}
return a+b-c-d
};
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3['length'] = null
argument7 = "H l"
return a+b*c+d
};
var argument8 = r_3;
var base_0 = [705,"R","s",403,5e-324,"n",627,"I7"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [705,"R","s",403,5e-324,"n",627,"I7"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [705,"R","s",403,5e-324,"n",627,"I7"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [705,"R","s",403,5e-324,"n",627,"I7"]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument7,argument8)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test948.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)