





var callbackArguments = [];
var argument1 = "%J";
var argument2 = null;
var argument3 = null;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0][4] = ["t","xfE","5?=C"]
return a-b*c*d
};
var argument5 = true;
var argument6 = r_1;
var argument7 = 2.398393643298396e+307;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[8] = false
argument6[1.171692140852735e+308] = {"r":"%"}
return a*b-c-d
};
var argument9 = null;
var argument10 = r_1;
var argument11 = r_2;
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[627][126] = null
argument10[25] = [49,242,0,823]
argument10[-1] = null
return a/b-c*d
};
var argument13 = "";
var argument14 = r_1;
var argument15 = "n";
var argument16 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument15[2] = false
argument15[0] = 1.4045417337511528e+308
return a-b+c+d
};
var base_0 = ["Nr","!","MY-",";zx","8s"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["Nr","!","MY-",";zx","8s"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["Nr","!","MY-",";zx","8s"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10,argument11,argument12)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["Nr","!","MY-",";zx","8s"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument13,argument14,argument15,argument16)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test915.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)