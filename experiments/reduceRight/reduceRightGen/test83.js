





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2 = null
base_0[2] = {"0":"","1jrVQ":"","3.740207321044044e+307":4.2473113159593213e+307,"1.7976931348623157e+308":""}
return a/b-c/d
};
var argument2 = 403;
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4['{S'] = false
return a*b*c+d
};
var argument4 = false;
var argument5 = null;
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[8] = [843,49,705,100,49]
base_2[8] = {"":126}
base_2[0] = ""
return a+b/c/d
};
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[4] = "U"
argument8[4] = [-1,49,0,595,714,126,122]
argument8[2] = ["&>N","=","Y]","tl!","}"]
return a-b/c*d
};
var argument8 = r_3;
var argument9 = "";
var base_0 = [705,122,595,823,1.7976931348623157e+308,714,126,595]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [705,122,595,823,1.7976931348623157e+308,714,126,595]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [705,122,595,823,1.7976931348623157e+308,714,126,595]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [705,122,595,823,1.7976931348623157e+308,714,126,595]
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test83.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)