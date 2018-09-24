





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[7.463432409233234e+307] = 9.4506381111119e+307
argument3[1] = true
return a-b*c*d
};
var argument2 = true;
var argument3 = true;
var argument4 = ["e","_","6","[b","l","<","py","U"];
var argument5 = true;
var argument6 = {"595":1.6956801597930496e+308,"618":"","":"D6"};
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[4] = null
argument5[4] = 607
argument6[5] = 1.7036562028170295e+308
return a*b-c-d
};
var argument8 = true;
var argument9 = r_2;
var argument10 = null;
var argument11 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[9.331954948603684e+307] = {"403":8.35497172067767e+307,"655":100,"893":1.178503630213366e+307,"":"","1.1813494343227776e+308":"",",":655,"O":655,"p":"DhB","+":8.965242708831698e+306,"b":9.90053499591461e+307}
base_2[2][0] = true
base_2[3][1] = ""
return a+b+c+d
};
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument13[2] = {"49":9.836475362481363e+307,"7.783393776174068e+307":6.903069864470357e+307,"[,":1.3752731732864115e+308,"8.189056413050566e+307":607,"{U":" "}
argument12[8] = ["Buf","lb",59,823,25,"w",213,893]
argument14[627] = 1.7976931348623157e+308
return a+b-c+d
};
var argument13 = {"4W6":1.4423180026611878e+308,"":1.7976931348623157e+308,"'?S":823,")70":"a","1.3041492625873113e+308":"i","Hx":"","1.6025423116121524e+308":""};
var base_0 = [0,"4>","T",126,969,"*^f","U",627,"L",595]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [0,"4>","T",126,969,"*^f","U",627,"L",595]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5,argument6,argument7)
}
catch(e) {
r_1= "Error"
}
var base_2 = [0,"4>","T",126,969,"*^f","U",627,"L",595]
var r_2= undefined
try {
r_2 = base_2.reduce(argument8,argument9,argument10,argument11)
}
catch(e) {
r_2= "Error"
}
var base_3 = [0,"4>","T",126,969,"*^f","U",627,"L",595]
var r_3= undefined
try {
r_3 = base_3.reduce(argument12,argument13)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test484.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)