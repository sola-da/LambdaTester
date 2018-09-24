





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[8] = null
return a*b+c
};
var argument2 = null;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4['io'] = {"8":1.1352205976993837e+308,"242":"2m","":5.582097342820943e+307,":":"c"}
base_1[5] = 6.416092871098612e+307
base_1[5] = true
return a*b/c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[1][6] = [-100,595,126,893]
argument5[8] = null
base_2['length'] = {"122":"L","1.3272173462684985e+308":"","1.379461841571082e+308":"","":655}
return a/b+c
};
var argument5 = {"":59,"W":1.0368428352891029e+308,"1.247833344844605e+307":627};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[0] = {"o":""}
argument7[4.960033715165713e+307] = null
argument7[8] = {"9":893}
return a*b+c
};
var base_0 = [242,893,242,655,5e-324,655,5e-324]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [242,893,242,655,5e-324,655,5e-324]
var r_1= undefined
try {
r_1 = base_1.every(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [242,893,242,655,5e-324,655,5e-324]
var r_2= undefined
try {
r_2 = base_2.every(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [242,893,242,655,5e-324,655,5e-324]
var r_3= undefined
try {
r_3 = base_3.every(argument6)
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
require("fs").writeFileSync("./experiments/every/everyGen/test635.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)