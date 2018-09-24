





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[9] = ""
argument2['io'] = false
argument3[5] = false
return a*b-c
};
var argument2 = null;
var argument3 = r_0;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[2.4183178393969103e+306] = 6.12818707133145e+307
argument5[3.3156198695370476e+307] = "Iw=]"
base_1[1][2] = {"242":"M!S","3.961536333238134e+307":-100,"1.4357289514187466e+308":"","":1.7976931348623157e+308}
return a*b/c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[5] = {"82":595,"969":"E","1.208358085723173e+308":1.4153638487159647e+308,"-1":893,"5.7519528062402e+307":"N","4.4335875357705115e+307":843}
base_2[8] = null
return a*b*c
};
var argument6 = {"3.8757529104986124e+307":969,"":100};
var argument7 = true;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[8] = null
argument9 = ["m#","%","@8nO{f","1f","cd?3"]
return a*b+c
};
var argument9 = true;
var argument10 = r_2;
var base_0 = [242,893,714,-1,843,627,460]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [242,893,714,-1,843,627,460]
var r_1= undefined
try {
r_1 = base_1.every(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [242,893,714,-1,843,627,460]
var r_2= undefined
try {
r_2 = base_2.every(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [242,893,714,-1,843,627,460]
var r_3= undefined
try {
r_3 = base_3.every(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/every/everyGen/test510.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)