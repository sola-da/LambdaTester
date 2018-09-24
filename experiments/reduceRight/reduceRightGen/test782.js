





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[0] = null
base_0[0][3] = true
base_0[6] = {"0":"]","100":-100,"213":"","242":"R",";d,I":")i","":242,"8.483583281460309e+307":"q"}
return a-b-c+d
};
var argument2 = {"627":"O ","705":"f","823":"&","893":"s","969":714,"T":"","":"","1.1786488053396747e+308":""};
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5['UU'] = 1.7976931348623157e+308
argument4[82] = "{"
argument4[82] = false
return a-b+c-d
};
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5['v'] = ""
return a*b*c*d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0][2] = [25,59,823,893]
base_3['length'] = null
return a-b/c-d
};
var argument6 = r_1;
var base_0 = ["WL","m","SNu`","K|(","q","Q8R","6","e"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["WL","m","SNu`","K|(","q","Q8R","6","e"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["WL","m","SNu`","K|(","q","Q8R","6","e"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["WL","m","SNu`","K|(","q","Q8R","6","e"]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument5,argument6)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test782.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)