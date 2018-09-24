





var callbackArguments = [];
var argument1 = null;
var argument2 = null;
var argument3 = null;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[3][1] = {"213":893,"403":1.684830241449283e+308,"595":"","655":157,"969":"","8.768539196121807e+307":"d0","1.3310906065132183e+308":82,"1.165417508459564e+308":"(","L":"%6","1.291773215505099e+308":1.2805859198662048e+308}
argument3[3] = null
return a*b-c/d
};
var argument5 = false;
var argument6 = true;
var argument7 = null;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[2][0] = null
argument6[-1] = null
return a-b/c*d
};
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[2] = ["p","0","N","RM","v","L","}7","%`Cn","tq","F-O"]
argument10[3] = [655,"^N",25,"hvH",783,213,0]
base_2[0][3] = ""
return a-b+c+d
};
var argument10 = true;
var argument11 = {"0":1.7881601541910705e+308,"705":5.405969241515826e+307,"":213,"7.171415282440602e+307":843,"1.779503987481732e+308":655,"c":1.5853510047041584e+308,"K":" ","{a":969};
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[1] = null
argument13[25] = 403
return a-b-c*d
};
var argument13 = [403,714,655,25,460];
var argument14 = true;
var base_0 = ["t;","7IV *"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["t;","7IV *"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["t;","7IV *"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10,argument11)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["t;","7IV *"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument12,argument13,argument14)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test965.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)