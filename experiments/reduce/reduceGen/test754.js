





var callbackArguments = [];
var argument1 = {"122":7.140673252258944e+307,"705":"m?@","823":5.076040082533242e+307,"IZ":"","t":"","":"gn+SA","1.594516369835194e+308":-100,"1.273126281789181e+308":"g",")":"m"};
var argument2 = 126;
var argument3 = false;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[4] = [607,-1,783,25,242,82,122,595,893]
return a*b+c-d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6 = {"25":"<","126":"z>","":1.1637992550152161e+308,"7.711376881696581e+307":242,"1.54724689775929e+308":4.1403286252097866e+307,"1.104095841128329e+308":1.3985363743424228e+308,"*_Dz":705,"1.7870492254737591e+308":"C","2.059431777382494e+307":"Hz!"}
return a*b*c*d
};
var argument6 = 1.0048353167360095e+308;
var argument7 = "[";
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[2] = ""
return a-b+c*d
};
var argument9 = r_2;
var argument10 = null;
var argument11 = ["U$,","x","N(2","p","jM","F","B,","&I^","mU","D"];
var argument12 = r_3;
var argument13 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[4] = 1.5579815022870798e+308
return a*b*c*d
};
var base_0 = [0,627,460,-1,607]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [0,627,460,-1,607]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7)
}
catch(e) {
r_1= "Error"
}
var base_2 = [0,627,460,-1,607]
var r_2= undefined
try {
r_2 = base_2.reduce(argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [0,627,460,-1,607]
var r_3= undefined
try {
r_3 = base_3.reduce(argument10,argument11,argument12,argument13)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test754.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)