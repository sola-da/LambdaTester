





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[6] = null
argument1 = false
argument2[403] = 1.456841693820044e+308
return a+b*c-d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3 = null
return a*b/c*d
};
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[3] = false
return a/b-c*d
};
var argument4 = [-100,705,705];
var argument5 = false;
var argument6 = r_0;
var argument7 = false;
var argument8 = null;
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[1] = {"242":"b","714":1.225415349915925e+308,"823":-1,"":5e-324,"@JM":4.669650610767305e+307,"1.6375888259454959e+308":823,"1.2522290510293303e+308":6.494963719262167e+307,"qeo;":100,"1.141506347197348e+308":893}
argument6[1] = true
return a-b/c-d
};
var base_0 = ["=p",">","F<A3k_","Ug","5@$",">","i","="]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["=p",">","F<A3k_","Ug","5@$",">","i","="]
var r_1= undefined
try {
r_1 = base_1.reduce(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["=p",">","F<A3k_","Ug","5@$",">","i","="]
var r_2= undefined
try {
r_2 = base_2.reduce(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["=p",">","F<A3k_","Ug","5@$",">","i","="]
var r_3= undefined
try {
r_3 = base_3.reduce(argument6,argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test871.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)