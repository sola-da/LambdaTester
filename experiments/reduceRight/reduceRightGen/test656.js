





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3['T'] = ")"
argument2[3] = "?"
return a*b*c/d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[705] = null
base_1[0][2] = {"0":"","3.0913540518322003e+307":"","1.3904126150675731e+308":595}
return a/b+c-d
};
var argument3 = false;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5['F2nCX>6'] = ""
argument5['^N'] = true
return a*b*c/d
};
var argument5 = r_2;
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[705] = {"^Hv4":"","":""}
argument7[627] = ""
base_3[6] = [893,"g",49,"@nEY","Y","2|"]
return a-b*c+d
};
var argument7 = r_1;
var argument8 = false;
var base_0 = ["5tW",893,403,"UrV",595,607]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["5tW",893,403,"UrV",595,607]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["5tW",893,403,"UrV",595,607]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["5tW",893,403,"UrV",595,607]
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test656.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)