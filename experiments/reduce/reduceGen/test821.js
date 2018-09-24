





var callbackArguments = [];
var argument1 = "";
var argument2 = true;
var argument3 = true;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[0] = null
argument2[1.1532786076532189e+308] = [100,157,213,"t","-","w",49]
base_0[4] = 5.744543936164347e+307
return a+b/c/d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7 = [100,403,"@|i","ZE"]
argument7[403] = [783,823,25,823,403,1.7976931348623157e+308,-100]
base_1[4] = {"0":783,"403":8.760632292605744e+307,"655":"sm@",")":"Q","":-1,"YK":"E'","1.436656454849666e+307":7.064533677319381e+307,"3>":5.039481477820592e+307,"-100":"","1.635419159699205e+308":5.851265385323681e+307}
return a+b+c*d
};
var argument6 = null;
var argument7 = false;
var argument8 = 1.1516196885983704e+308;
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[59] = {"3.47338138329556e+307":"K"}
return a*b-c/d
};
var argument10 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[460] = true
return a/b+c/d
};
var argument11 = r_2;
var base_0 = ["9",1.7976931348623157e+308,157,"; L",5e-324,"RI",0,618,-1]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["9",1.7976931348623157e+308,157,"; L",5e-324,"RI",0,618,-1]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["9",1.7976931348623157e+308,157,"; L",5e-324,"RI",0,618,-1]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["9",1.7976931348623157e+308,157,"; L",5e-324,"RI",0,618,-1]
var r_3= undefined
try {
r_3 = base_3.reduce(argument10,argument11)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test821.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)