





var callbackArguments = [];
var argument1 = true;
var argument2 = true;
var argument3 = true;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[6] = ["&","(","%","kQ","H{`f","?"]
base_0[8] = {"7":"","w3":9.25205146482183e+307,"":9.643084600690929e+306,"8.772593840550357e+307":"N"}
argument1 = {"2":823,"213":"t","618":705,"2.9012762847135844e+307":"h","":""}
return a+b*c*d
};
var argument5 = r_0;
var argument6 = true;
var argument7 = null;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[5] = 460
return a*b+c+d
};
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[3] = true
base_2[1] = false
return a-b-c+d
};
var argument10 = r_2;
var argument11 = r_2;
var argument12 = true;
var argument13 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[2] = 1.2236709239954249e+307
return a-b+c-d
};
var base_0 = [969,460]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [969,460]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = [969,460]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [969,460]
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test15.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)