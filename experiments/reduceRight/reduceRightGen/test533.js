





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2['L'] = 1.7976931348623157e+308
argument2['a'] = ["?;","S","XV","9f"]
argument2[7] = true
return a+b/c/d
};
var argument2 = 969;
var argument3 = 1.1102375333141617e+308;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5['y'] = null
argument5[3.286160553564105e+307] = 6.827940056751146e+307
argument6['8('] = null
return a+b+c*d
};
var argument5 = false;
var argument6 = true;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0][3] = null
argument9[7] = [969]
return a+b/c-d
};
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[126] = ""
argument9[7] = 1.7976931348623157e+308
return a*b+c+d
};
var argument9 = 1.7976931348623157e+308;
var base_0 = [213,82,403,-1,823,157,242]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [213,82,403,-1,823,157,242]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [213,82,403,-1,823,157,242]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [213,82,403,-1,823,157,242]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument8,argument9)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test533.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)