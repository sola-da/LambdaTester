





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[90] = null
argument3[4] = [595,705]
return a-b/c-d
};
var argument2 = null;
var argument3 = null;
var argument4 = false;
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[2.1869172855352885e+307] = 1.1774296121925626e+307
argument3[1] = 1.7895093322457139e+308
argument4[403] = {"595":"PO","969":"","-":"","1.4520367453559065e+308":"","8,":6.228765068040712e+307,"-1":157}
return a/b/c*d
};
var argument6 = 1.4149604037901474e+308;
var argument7 = true;
var argument8 = [1.7976931348623157e+308,783,122,714,49,122,843,607,655];
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[6.35085648319999e+307] = {"":"","3.758533529295316e+307":"jWy","1.084557697771707e+308":"","3.9067287466425784e+307":"","w-G":1.7131410546504466e+308}
argument6['Cb'] = [-100,49]
return a*b*c-d
};
var argument10 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[3] = "B"
argument11[25] = ["QS;Jz"]
base_3[9] = {"655":"","4.524316557522581e+307":7.073031064437918e+307,"1.4064054910072868e+308":49,"1.5242502015476e+308":3.1479081264984667e+307,"4.679504980543192e+307":"","8.558993294796637e+307":"","5e-324":82}
return a*b+c-d
};
var base_0 = ["*E","?","PIV"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["*E","?","PIV"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument2,argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["*E","?","PIV"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["*E","?","PIV"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument10)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test385.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)