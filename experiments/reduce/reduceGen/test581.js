





var callbackArguments = [];
var argument1 = null;
var argument2 = 122;
var argument3 = null;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[0] = ""
return a+b+c-d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7['*c'] = true
argument6[403] = null
return a*b+c*d
};
var argument6 = null;
var argument7 = true;
var argument8 = true;
var argument9 = null;
var argument10 = true;
var argument11 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0][3] = ""
return a/b-c*d
};
var argument12 = null;
var argument13 = 8.544899600130169e+307;
var argument14 = {"{":"","":595,"7.771442629080406e+307":"","0b)":")|d","-100":""};
var argument15 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument14[1.359136872727139e+308] = {"618":893,"969":122,"`?":"Sha","":823,"1.443935436011749e+308":157,"eODF0N":1.737859796267207e+308,"g":"","S":9.859714342266016e+307}
argument13[1] = {"?":714,"-1":"9","x":"","4.988780277357191e+306":"^>H3","1.0370637471636989e+308":",E","":3.17508817353492e+307}
return a-b-c*d
};
var base_0 = ["Z","d#"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["Z","d#"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["Z","d#"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument8,argument9,argument10,argument11)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["Z","d#"]
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test581.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)