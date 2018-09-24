





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[627] = {"607":1.1075404057428825e+308,"969":"","1.4750072755525083e+308":1.6029077369694106e+308,"2.2339655292538535e+307":100,"8.990654916863262e+307":""}
base_0[5] = false
return a+b+c+d
};
var argument2 = true;
var argument3 = ["}","0","AB"];
var argument4 = true;
var argument5 = ["Q9=","r2DO1","8r","%:J","q","5",";!C","Sl"];
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4 = false
argument4[1.1277822633002616e+308] = 4.492434327216403e+307
argument4[25] = 618
return a/b/c/d
};
var argument7 = true;
var argument8 = 893;
var argument9 = false;
var argument10 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[1] = ["*",122,"5",1.7976931348623157e+308,595,"d4 "]
return a-b+c/d
};
var argument11 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument12[627] = null
return a+b*c/d
};
var argument12 = false;
var argument13 = "T";
var base_0 = [126,5e-324,607]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [126,5e-324,607]
var r_1= undefined
try {
r_1 = base_1.reduce(argument3,argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [126,5e-324,607]
var r_2= undefined
try {
r_2 = base_2.reduce(argument7,argument8,argument9,argument10)
}
catch(e) {
r_2= "Error"
}
var base_3 = [126,5e-324,607]
var r_3= undefined
try {
r_3 = base_3.reduce(argument11,argument12,argument13)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test161.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)