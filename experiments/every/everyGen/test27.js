





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[8] = null
return a*b+c
};
var argument2 = {"":607};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1 = null
base_1[6] = {"242":2.4117353091259494e+307,"607":")","":3.0006702620700676e+307,"qn":126,"u':":242," M":"J*S","3.874595739723433e+306":595,"1.2188648631002442e+308":460,"I":595}
return a+b*c
};
var argument4 = r_0;
var argument5 = ["Z#","0Q2","M","C<P"];
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7 = 2.265551619004546e+307
base_2[8] = 1.2937370540507806e+308
base_2[7] = {":[":969,"9.908289520587372e+307":5e-324,"":1.329788913474809e+308,"Y$RjO;":82,"1e":1.0400658109989964e+308,"7.646082706400073e+307":783,"dWe":1.3959017042697757e+308,"4.9768397522802e+307":-1}
return a-b-c
};
var argument7 = r_0;
var argument8 = false;
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0] = -1
base_3[0] = null
return a+b/c
};
var base_0 = ["]","+","_NN","N","hG","H","P","G","H"]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["]","+","_NN","N","hG","H","P","G","H"]
var r_1= undefined
try {
r_1 = base_1.every(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["]","+","_NN","N","hG","H","P","G","H"]
var r_2= undefined
try {
r_2 = base_2.every(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["]","+","_NN","N","hG","H","P","G","H"]
var r_3= undefined
try {
r_3 = base_3.every(argument9)
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
require("fs").writeFileSync("./experiments/every/everyGen/test27.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)