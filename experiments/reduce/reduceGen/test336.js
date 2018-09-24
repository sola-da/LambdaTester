





var callbackArguments = [];
var argument1 = {"714":157,"843":843,"9.564439947598702e+307":1.3526475486377804e+308,"":"u"};
var argument2 = true;
var argument3 = true;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[0] = null
return a-b+c+d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[403] = null
argument7['*c'] = {"7.639707314160334e+307":"u'"}
return a+b/c/d
};
var argument6 = true;
var argument7 = true;
var argument8 = true;
var argument9 = true;
var argument10 = false;
var argument11 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0][0] = {"1":893,"4":618,"893":4.3105591068660785e+307,"1.410901451195573e+308":"VI","-1":"]"}
argument9[82] = {"59":25,"893":893,"*W":213,"":"s","1.7808586203758249e+308":":"}
return a/b-c*d
};
var argument12 = 7.565803888190286e+307;
var argument13 = true;
var argument14 = [25,49,627,"Zcx","1F-QYO"];
var argument15 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument13[2] = 5e-324
argument14 = [655,714,893,969,49,655]
argument14[1] = 705
return a*b*c-d
};
var base_0 = [";","D","@","6","rAU","NJ","7Y","`T"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [";","D","@","6","rAU","NJ","7Y","`T"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7)
}
catch(e) {
r_1= "Error"
}
var base_2 = [";","D","@","6","rAU","NJ","7Y","`T"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument8,argument9,argument10,argument11)
}
catch(e) {
r_2= "Error"
}
var base_3 = [";","D","@","6","rAU","NJ","7Y","`T"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument12,argument13,argument14,argument15)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test336.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)