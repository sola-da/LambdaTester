





var callbackArguments = [];
var argument1 = r_0;
var argument2 = false;
var argument3 = false;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[4] = 595
return a*b*c*d
};
var argument5 = ["cB","e","yK",213,126,618,")tAxt",100,460];
var argument6 = {"403":1.592499731865572e+307,"KY`pKPHNw^D":"","5.73453312688609e+307":25,"3.871869015654619e+307":"","!Ae08":1.5098788893756186e+308};
var argument7 = {"126":1.385277064050844e+308,"":655,"Zf":"M","1.7004594008779321e+308":"","?i":1.5219355364265078e+308};
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[25] = 1.3128382271797021e+308
argument6[25] = [893]
return a-b-c/d
};
var argument9 = "u";
var argument10 = {"0":1.7587274721365938e+308,"460":"","607":1.3540320273759756e+308,"893":"h","969":"v","":"","1.5539425816593359e+308":49,"#":2.4784805751328714e+306,"3lU":5.09837045847676e+307,"%h":""};
var argument11 = "[";
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[627] = 843
argument10[2] = null
return a*b+c+d
};
var argument13 = ["d%V,","!-)","O U>o|s","0"];
var argument14 = false;
var argument15 = r_3;
var argument16 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument14[403] = null
return a*b/c+d
};
var base_0 = ["Q?","Nq","bS"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["Q?","Nq","bS"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["Q?","Nq","bS"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10,argument11,argument12)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["Q?","Nq","bS"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument13,argument14,argument15,argument16)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test195.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)