





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[6] = {"823":2.372344201247743e+307,"":595}
base_0[1] = "%"
return a*b-c-d
};
var argument2 = [893,618,25,627,100];
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[0] = "6Rx"
return a+b/c+d
};
var argument4 = null;
var argument5 = r_0;
var argument6 = true;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[3] = ["G",969,714,122,82,"!GX","3D"]
base_2[4] = ""
argument4[2] = false
return a+b*c+d
};
var argument8 = r_1;
var argument9 = [-1,460,157,-1];
var argument10 = {"100":2.2849439416882276e+307,"1.7825424881642813e+307":"","":"","I":627,"1.0894207088027357e+308":"^M","jT":"B"};
var argument11 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[59] = "k_I!H"
return a*b-c-d
};
var base_0 = ["8","P:Z","D","?J","y","J`|5","6","Sm)b2"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["8","P:Z","D","?J","y","J`|5","6","Sm)b2"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["8","P:Z","D","?J","y","J`|5","6","Sm)b2"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument4,argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["8","P:Z","D","?J","y","J`|5","6","Sm)b2"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument8,argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test602.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)