





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3 = false
base_0[2] = "{a"
argument1[0] = true
return a*b*c*d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[2][2] = 618
argument3[2] = {"":59,"hnH=Vf":"Z"}
base_1[6][2] = false
return a-b-c/d
};
var argument3 = true;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2['length'] = {"100":"u","126":"eO","Mh":"","Gu|=":4.90388485499021e+307,"rK":9.665360949730542e+307,"":1.7140816815160121e+308,"1.6213939914552248e+308":"@l","eJ":3.0075778766771104e+307}
return a*b*c/d
};
var argument5 = "g";
var argument6 = true;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9 = {"0":9.392723018398118e+307,"":"","=":1.7924726009699324e+308,"V":"al","%$a&":1.2378293365772736e+308,"-1":"","1.5525087534869297e+308":8.147787627657371e+307,"gd":""}
argument8[2] = null
argument8[1.1207829086460726e+308] = true
return a/b*c*d
};
var argument8 = true;
var argument9 = null;
var base_0 = ["oY","f{","%","H","d","x","i[","p","("]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["oY","f{","%","H","d","x","i[","p","("]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["oY","f{","%","H","d","x","i[","p","("]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["oY","f{","%","H","d","x","i[","p","("]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test681.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)