





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[1.7976931348623157e+308] = ""
argument3[1.7976931348623157e+308] = false
argument2[1.1881593224845412e+308] = null
return a/b+c
};
var argument2 = 100;
var argument3 = true;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[6] = null
base_1[4][4] = {"122":",","893":"","?#_":"","3.864881224663458e+307":1.4895700927021728e+308,"1.5464971154842163e+308":1.1852702502692125e+308,"ue":"E","8.934866246612965e+307":"N","-1":5.69972519316123e+307,"3.355609001060768e+306":1.7229817517230804e+308}
return a*b-c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[1.4034744228995816e+308] = false
argument6[4] = {"59":"+l","5.590383967989794e+307":"","9.80609499889386e+307":1.5364257362395878e+308}
return a-b+c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[1.7394185942769049e+308] = ["!","5]:Z","<yU","-","H","x"]
argument7[3] = true
argument6['1SHF1'] = ""
return a/b/c
};
var argument7 = true;
var argument8 = r_3;
var base_0 = [460,82,705]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [460,82,705]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [460,82,705]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [460,82,705]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test784.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)