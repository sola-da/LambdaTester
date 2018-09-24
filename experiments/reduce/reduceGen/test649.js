





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1][0] = {"627":"yz*:G","I":5.911591254136306e+306}
return a-b+c-d
};
var argument2 = r_0;
var argument3 = true;
var argument4 = {"":"","1.7976931348623157e+308":"^","1.7659558306444168e+308":893,"6.010380532352755e+307":59,"2.500782894039314e+307":714,"5e-324":""};
var argument5 = true;
var argument6 = [122,49,157,618,82];
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[6] = null
argument5[1.1277822633002616e+308] = null
return a/b+c/d
};
var argument8 = r_0;
var argument9 = true;
var argument10 = r_0;
var argument11 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[0] = [627,100,893]
argument10[1] = -100
return a+b-c/d
};
var argument12 = {"0":893,"213":4.2908213503713496e+306,"460":242,"":"*","+G":""};
var argument13 = 25;
var argument14 = null;
var argument15 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument14[403] = {"0":"N","":1.6724254398979148e+308,"K":1.3211763441705002e+307}
argument13[627][126] = ""
return a-b/c*d
};
var base_0 = ["s","U"," i","3+","c","6!"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["s","U"," i","3+","c","6!"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5,argument6,argument7)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["s","U"," i","3+","c","6!"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument8,argument9,argument10,argument11)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["s","U"," i","3+","c","6!"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument12,argument13,argument14,argument15)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test649.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)