





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[0] = [607]
argument2[4] = ""
argument2[3] = ["6",655,100,"a(S",705,"s"]
return a/b/c
};
var argument2 = false;
var argument3 = [460,100];
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[5][2] = 1.322100675385112e+308
return a-b*c
};
var argument5 = null;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[8] = ["t","_|","hT ",714,"BE",627]
return a/b/c
};
var argument7 = ["y}","Y^JM","WK@","T","a","@s","-+","<v","er"];
var argument8 = false;
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument10['io'] = {"1.5841399680809252e+308":8.720333514909753e+307,",e4":"9U+0","1.1541272707530355e+308":7.287558778304391e+307}
return a*b-c
};
var argument10 = [" ",";","-+","qp{]","$","{#"];
var argument11 = null;
var base_0 = ["^t","Hq;","k","Mz","+QnEi5","}t","-","1","y[","j"]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["^t","Hq;","k","Mz","+QnEi5","}t","-","1","y[","j"]
var r_1= undefined
try {
r_1 = base_1.every(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["^t","Hq;","k","Mz","+QnEi5","}t","-","1","y[","j"]
var r_2= undefined
try {
r_2 = base_2.every(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["^t","Hq;","k","Mz","+QnEi5","}t","-","1","y[","j"]
var r_3= undefined
try {
r_3 = base_3.every(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/every/everyGen/test897.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)