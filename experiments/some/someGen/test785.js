





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2['Y'] = ""
argument2['Y'] = false
base_0[5][1] = null
return a/b+c
};
var argument2 = 100;
var argument3 = true;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[7] = null
argument4[0] = {"122":",","893":"","?#_":"","3.864881224663458e+307":1.4895700927021728e+308,"1.5464971154842163e+308":1.1852702502692125e+308,"ue":"E","8.934866246612965e+307":"N","-1":5.69972519316123e+307,"3.355609001060768e+306":1.7229817517230804e+308}
return a*b-c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[157] = false
return a-b+c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[5][1] = 0
argument7[8] = [607,714,213,59,969,100,595,82,843]
return a*b/c
};
var argument7 = true;
var argument8 = {"0":"#l","59":1.1381683672021875e+308,"242":1.7699913131683138e+308,"1.057554402091974e+308":"","[5]:Z":8.153295688697705e+306,"yU":8.25958033952004e+306,"":"<","-":1.4906830445407756e+308,"1.2683469639797119e+308":49};
var base_0 = [460,82,705]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [460,82,705]
var r_1= undefined
try {
r_1 = base_1.some(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [460,82,705]
var r_2= undefined
try {
r_2 = base_2.some(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [460,82,705]
var r_3= undefined
try {
r_3 = base_3.some(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/some/someGen/test785.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)