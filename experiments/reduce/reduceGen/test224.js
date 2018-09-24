





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[4] = true
base_0[9] = "DyX"
return a*b/c/d
};
var argument2 = {"783":5.658313676984396e+307,"y":460,"2.1277913670793115e+307":5.500925187088197e+307,"":"g","1.7976931348623157e+308":59,"g":823,"1.1039552531121805e+308":5.954387491102215e+307,"1.5835697485834718e+308":""};
var argument3 = {"P":7.089422745085744e+307,"1.5314865391387977e+308":"","9.308872125438562e+307":1.0312231444746833e+308};
var argument4 = {"1.6888028834914813e+308":3.8286982160530555e+307,"1.6123513890157737e+308":"=*","qG":"","1.0411488585605958e+308":3.6474998758631774e+307};
var argument5 = 7.117991223821681e+307;
var argument6 = r_1;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1][0] = {"627":"","783":843,"":122,"7N":":","Y 7'":"","1.2833663678968694e+308":1.848729785302769e+306,"7.13724715691107e+307":893,"1.146659274293536e+308":8.536084603868081e+307}
return a/b*c+d
};
var argument8 = null;
var argument9 = {"1":49,"4":460,"783":"","843":"B^`","969":"","1.0119979867472689e+308":242,"-1":"$|","1.0924236125852001e+307":2.8338712337056655e+307,"":"FHe","O":122};
var argument10 = "";
var argument11 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[25] = true
base_2[1][3] = 0
return a+b/c-d
};
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3['length'] = false
base_3[0][4] = [1.7976931348623157e+308,157,0,783]
return a-b+c*d
};
var base_0 = [59,25,403,-1,403,627]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [59,25,403,-1,403,627]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5,argument6,argument7)
}
catch(e) {
r_1= "Error"
}
var base_2 = [59,25,403,-1,403,627]
var r_2= undefined
try {
r_2 = base_2.reduce(argument8,argument9,argument10,argument11)
}
catch(e) {
r_2= "Error"
}
var base_3 = [59,25,403,-1,403,627]
var r_3= undefined
try {
r_3 = base_3.reduce(argument12)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test224.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)