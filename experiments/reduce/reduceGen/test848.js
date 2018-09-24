





var callbackArguments = [];
var argument1 = null;
var argument2 = {"714":"","3.1470436583062724e+306":1.6166066771360716e+308,"":"ps","C":"ji","1.2643245856574963e+308":3.4849033548167434e+307,"B[":"Uh","7.45002454990192e+306":"o9e"};
var argument3 = false;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[7.999889602676851e+307] = {"":"","8.981995369175624e+306":"","G":618,"J;9m":1.3986806777762802e+307,"!u%w":969}
return a/b*c/d
};
var argument5 = r_0;
var argument6 = [122,49];
var argument7 = 4.449088345122938e+307;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[6] = [82,969,122]
argument6[82] = null
argument5[1] = [-1,783,-100,122,460,403]
return a/b+c+d
};
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9['A'] = false
base_2[3] = 1.450667403515264e+308
argument11[403] = ""
return a+b*c/d
};
var argument10 = r_2;
var argument11 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0][0] = null
base_3['length'] = true
argument13['18{'] = null
return a*b+c*d
};
var argument12 = 1.3455958959740078e+308;
var argument13 = r_2;
var base_0 = [100,5e-324,59,0,122,157,49,-100]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [100,5e-324,59,0,122,157,49,-100]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = [100,5e-324,59,0,122,157,49,-100]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10)
}
catch(e) {
r_2= "Error"
}
var base_3 = [100,5e-324,59,0,122,157,49,-100]
var r_3= undefined
try {
r_3 = base_3.reduce(argument11,argument12,argument13)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test848.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)