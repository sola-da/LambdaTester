





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[2] = true
return a*b-c-d
};
var argument2 = true;
var argument3 = null;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[5] = {"82":"f3,vl","627":714,"7.305088603228359e+307":122,"":"","1.7976931348623157e+308":":","#":705,"<3@":1.3396624260604411e+308,"d":714}
return a-b*c*d
};
var argument5 = true;
var argument6 = r_0;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[5] = null
argument7 = {"82":"9k","607":"T?LS{J"," ":893,"":"V","h":1.9887810608221318e+307,"7.918015620340516e+307":3.090116693462502e+307}
return a/b*c*d
};
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[2] = [0,122]
return a-b-c*d
};
var argument9 = null;
var argument10 = null;
var base_0 = ["V","d#2rd","di","A","Z","<&","v:","IU2&Cx0X"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["V","d#2rd","di","A","Z","<&","v:","IU2&Cx0X"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["V","d#2rd","di","A","Z","<&","v:","IU2&Cx0X"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["V","d#2rd","di","A","Z","<&","v:","IU2&Cx0X"]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test121.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)