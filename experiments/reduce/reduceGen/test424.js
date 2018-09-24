





var callbackArguments = [];
var argument1 = null;
var argument2 = null;
var argument3 = {"893":"","i":6.158745702963496e+307,"":1.402749035042552e+308,"3.237762892164645e+307":783,"5.221655924890218e+307":3.1601782373829644e+307,"4.173145929951183e+306":2.6811568615938406e+307};
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2 = 3.535885379562082e+307
argument2[-1] = [403,893,607,618,-1,823,783,823,126,1.7976931348623157e+308]
return a+b+c-d
};
var argument5 = {};
var argument6 = "";
var argument7 = false;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[82] = {"2.727416242033886e+307":100,"":"2Y*","Q<^":4.0123681899180126e+307}
base_1[0][3] = 403
argument7 = true
return a/b-c/d
};
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[213] = [25,607,705,100,59,714,783,49,49]
return a-b*c*d
};
var argument10 = null;
var argument11 = false;
var argument12 = null;
var argument13 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument12[0] = null
return a-b/c/d
};
var base_0 = [705,126,460,"z0Ddf",627,25,"m","A",823,595]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [705,126,460,"z0Ddf",627,25,"m","A",823,595]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = [705,126,460,"z0Ddf",627,25,"m","A",823,595]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [705,126,460,"z0Ddf",627,25,"m","A",823,595]
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test424.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)