





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0 = null
return a+b+c-d
};
var argument2 = r_0;
var argument3 = null;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6['!j'] = true
return a*b/c*d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[1] = [157,618,627,893,122,893,100,714,126]
argument7 = ""
argument6[1] = 100
return a/b/c/d
};
var argument6 = {"7.130653261465144e+307":1.6760410302591561e+308};
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[2] = {"":1.3566802060173633e+308,")l8f":893}
base_3[8] = {"8":783,"3.956952460012422e+307":"y=","1.7976931348623157e+308":25,"1.7155156991026515e+307":25}
argument7[0] = [126,82,783,705,607,595,-1,783,893,157]
return a+b+c/d
};
var argument8 = "";
var argument9 = r_1;
var base_0 = [242,714,82,242,1.7976931348623157e+308,843,595,-1,893]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [242,714,82,242,1.7976931348623157e+308,843,595,-1,893]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [242,714,82,242,1.7976931348623157e+308,843,595,-1,893]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [242,714,82,242,1.7976931348623157e+308,843,595,-1,893]
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test120.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)