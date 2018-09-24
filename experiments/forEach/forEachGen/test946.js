





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[1.7394185942769049e+308] = 1.6392524021052967e+308
argument3[1.1030928633982176e+308] = ["cG,*?","r","U","jk","F0|","Gm","M-","r","d"]
argument2[1.7394185942769049e+308] = ""
return a*b-c
};
var argument2 = null;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4['D'] = true
argument5['j2t'] = true
return a+b*c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0][4] = [82,"j8","0",460,403,"sc+","r",59,"|]|"]
argument5['$*I'] = {"25":"","122":8.761372882092927e+307,"893":1.4800329135545389e+308}
return a+b/c
};
var argument5 = 627;
var argument6 = null;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[2] = {"1.5585850650682081e+308":1.0129887274259074e+308,"!TNt_6":403,"1.2716587886039297e+308":"","-100":8.833063462104147e+307}
argument9[7] = false
base_3[1] = true
return a/b*c
};
var base_0 = [595,100,213,783,1.7976931348623157e+308,49,59,49,1.7976931348623157e+308]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [595,100,213,783,1.7976931348623157e+308,49,59,49,1.7976931348623157e+308]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [595,100,213,783,1.7976931348623157e+308,49,59,49,1.7976931348623157e+308]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [595,100,213,783,1.7976931348623157e+308,49,59,49,1.7976931348623157e+308]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test946.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)