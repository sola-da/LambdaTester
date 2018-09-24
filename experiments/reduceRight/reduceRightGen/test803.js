





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[3] = true
return a+b/c*d
};
var argument2 = {"213":"","p":"V'dA","m3":",{","6.491811658696916e+307":25,"":"","S":"l","i":242,"1.2016250681796564e+308":"A","9.100206843502234e+307":""};
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[4][1.7976931348623157e+308] = "2r"
return a*b*c+d
};
var argument4 = null;
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[2] = 1.9874799402151655e+307
return a-b/c/d
};
var argument6 = null;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8['F2nCX>6'] = {"157":"","1.597173513269019e+308":607,"3.0897743127645255e+307":25,"6.309281600663027e+307":"IZ,e"}
return a/b+c+d
};
var argument8 = "";
var argument9 = r_1;
var base_0 = [122,618,122,82,-1,1.7976931348623157e+308,595,823]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [122,618,122,82,-1,1.7976931348623157e+308,595,823]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [122,618,122,82,-1,1.7976931348623157e+308,595,823]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [122,618,122,82,-1,1.7976931348623157e+308,595,823]
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test803.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)