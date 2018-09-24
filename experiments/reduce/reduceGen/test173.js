





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0] = {"213":"","-100":595,"":"[SE"}
base_0[1][0] = 1.6850205301516696e+308
argument3[0] = 1.1146096351387308e+308
return a/b-c*d
};
var argument2 = null;
var argument3 = null;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[1] = null
base_1[0][9.12287810829114e+307] = "E2p|E1_"
return a/b/c*d
};
var argument5 = null;
var argument6 = r_0;
var argument7 = 49;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[0] = ["7","3L","[","q"]
base_2[1][0] = {"122":8.721152389507695e+305,"403":"","823":893,"893":8.377808525633074e+307,"":"b{","i":4.511351005472876e+307,"7.364352309350597e+307":"@p","1.0196689986154981e+308":"","Y":783}
return a-b/c/d
};
var argument9 = r_1;
var argument10 = false;
var argument11 = "";
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[1] = {"157":"%","":595,"z?":1.6041717936692383e+308,"A":-1,"c":714,"-100":1.5939987526784611e+308}
return a-b+c/d
};
var base_0 = [122,"%]rro(>}",157,"9"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [122,"%]rro(>}",157,"9"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [122,"%]rro(>}",157,"9"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [122,"%]rro(>}",157,"9"]
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test173.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)