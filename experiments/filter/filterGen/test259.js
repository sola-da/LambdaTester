





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[1.1679954109349114e+308] = false
argument1 = null
argument3[4] = ["{","+Iz+",242,"e","k^=",627,"2","]{1&[:Z",783]
return a-b-c
};
var argument2 = null;
var argument3 = 823;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1] = {}
base_1[1][1] = {"122":1.146659274293536e+308,"242":"4","843":"@","1.1017614908693999e+308":"","2.5137468713571327e+307":"","8.536084603868081e+307":627,"":1.0119979867472689e+308,"1.6317828096012598e+308":"","B^`":969}
argument5[1.1679954109349114e+308] = 618
return a/b-c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[0] = ["L$|","g","#","0nyD<!","-V","8","Q%","U","r9<"]
argument7[1] = -100
base_2[1][0] = 8.530878988023918e+307
return a+b*c
};
var argument6 = false;
var argument7 = [157,1.7976931348623157e+308,157,0,783,122,-100,157];
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[2] = 1.7115753026637231e+308
argument9[3] = {"82":"w","122":6.380957859177959e+307,"618":"f","705":"","1.6168273011181061e+308":6.159016153847776e+305,"":1.1045844106804113e+308,"r":893,"1.0047204202530798e+308":"","1.085417142913377e+307":1.3279326546870789e+308,"1.6920467598391058e+308":"g,"}
return a+b/c
};
var base_0 = ["q","t"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["q","t"]
var r_1= undefined
try {
r_1 = base_1.filter(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["q","t"]
var r_2= undefined
try {
r_2 = base_2.filter(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["q","t"]
var r_3= undefined
try {
r_3 = base_3.filter(argument8)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test259.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)