





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[9] = ""
argument1[8] = ""
argument3[2] = 1.1918345294405226e+308
return a/b+c+d
};
var argument2 = r_0;
var argument3 = 1.4913072425319077e+308;
var argument4 = [705,607,25,618];
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[4] = true
argument4[2] = true
argument3[213] = 1.3470732176374105e+307
return a-b*c*d
};
var argument6 = ["+,",242,"A",460,5e-324];
var argument7 = false;
var argument8 = {"122":"A","[":"","2.946142069756656e+306":"|","hX_g":"","":1.468591093185874e+308};
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8['*c'] = 6.729936955361368e+307
argument8['*c'] = ":"
return a*b*c-d
};
var argument10 = {};
var argument11 = r_1;
var argument12 = [823,242,595,460,82,627,618,705,59,100];
var argument13 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10['Cb'] = [607,157]
return a/b*c-d
};
var base_0 = [705,823,607]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [705,823,607]
var r_1= undefined
try {
r_1 = base_1.reduce(argument2,argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [705,823,607]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [705,823,607]
var r_3= undefined
try {
r_3 = base_3.reduce(argument10,argument11,argument12,argument13)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test198.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)