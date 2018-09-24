





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[1.4250811791542279e+308] = {"607":82,"`q<":1.7976931348623157e+308,"1.6733817455211557e+308":2.509199097277954e+307,"":4.2419151464384056e+307}
argument3[126] = {"126":82,"5.705922235444635e+307":"","":8.712880867832713e+307,"5FmDK":"","-100":"","1.7976931348623157e+308":"w@","Vz":0}
base_0[1] = 4.767368250670922e+307
return a/b/c*d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[8] = {"25":2.7778745738796e+307,"":"E","D":"u;O",";$q":1.2800743689522165e+308,"F":"="}
argument4['8('] = null
return a*b-c+d
};
var argument3 = null;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[7] = {"8.46868948253437e+307":126,"o":8.778453812599566e+307,"":126,"|":"+","5.692340722961603e+307":595,"x":242,"_":1.5925784231146751e+308}
argument4[0] = [0,242,122,714,823,627,460,49]
argument4 = false
return a/b+c-d
};
var argument5 = "qH";
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8['8('] = {"":"W","5.232113048211444e+307":""}
argument7['T'] = null
return a/b*c+d
};
var argument7 = false;
var argument8 = 6.633109716462702e+307;
var base_0 = ["S","9<"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["S","9<"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["S","9<"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["S","9<"]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test758.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)