





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[1.359136872727139e+308] = {"3.376466938791049e+307":1.175041535489772e+308,"-100":1.4009845293677859e+308,"n|9Q<":9.284542135757962e+307}
argument2[2] = true
return a*b/c*d
};
var argument2 = null;
var argument3 = false;
var argument4 = null;
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0][9.12287810829114e+307] = ""
argument3 = "(v"
return a/b+c+d
};
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[3] = null
base_2 = null
return a-b*c-d
};
var argument7 = null;
var argument8 = false;
var argument9 = false;
var argument10 = r_2;
var argument11 = {"62":82,"213":"]0>Dr","460":"x","i":460,"H":6.709310805679605e+307,"RE6":714,"1.6679668012642575e+308":"Nd","":1.2787697432181799e+308,"6.870533630771349e+307":""};
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[3] = {"49":2.503292143386772e+307,"":"","St":"AG","6.816424221662585e+307":5.787688711954549e+307,"4.3885681475201975e+307":618,"6.344618328348093e+307":""}
base_3[1][3] = {"460":1.7119967604570232e+308,"618":969,"7.836890751896982e+307":714,"":1.7976931348623157e+308,"6.276069128833895e+307":5.673569750883785e+307,"1.2421645642809447e+308":49,"Jsp4":""}
argument10[-1] = {"122":893,"893":"u","":"dcP0M","1.7016677571127676e+308":1.3707529723997486e+308,"1.1122344190935054e+308":"","#N":7.673806602777071e+307,"1.3078576924037522e+308":"","9.242707927027557e+307":"s"}
return a-b*c/d
};
var base_0 = [823,213,82,655,1.7976931348623157e+308]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [823,213,82,655,1.7976931348623157e+308]
var r_1= undefined
try {
r_1 = base_1.reduce(argument2,argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [823,213,82,655,1.7976931348623157e+308]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [823,213,82,655,1.7976931348623157e+308]
var r_3= undefined
try {
r_3 = base_3.reduce(argument9,argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test609.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)