





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[4] = ""
argument3['^h'] = {"8":1.6503208615086126e+308,"1.5135743811865242e+308":1.3536352031259422e+308,"1.616181903892171e+308":"J]","":6.676409736455461e+307,"8.243888202918063e+307":"","3.9726261941570216e+307":"8tt","1.4576894507467519e+308":82,"-1":"Iw","2.0848802792098995e+307":"@n"}
return a/b-c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3['j'] = ""
argument4[126] = [403,595,"3G"]
argument3[2] = null
return a+b-c
};
var argument3 = 8.635322655111022e+307;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[6][4] = {"783":"Lg","":"V","cc0":8.499180303653631e+307,"2.841199140273303e+307":1.6230084556900606e+308,"1.2899001779014793e+308":607,"_":783}
return a+b*c
};
var argument5 = {"R":"S"};
var argument6 = {"714":126,"1.3129768618158625e+308":6.102550735858066e+306,"":"","Cp":126,"1.7349794352000907e+308":"b","6.957023047568698e+307":595,"HJ":4.2054530717808106e+307,"1.1000059994461357e+308":"","2.40379269853574e+307":2.928739944460171e+307};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[6][4] = null
base_3[8] = false
argument8['a8r['] = true
return a/b*c
};
var argument8 = null;
var argument9 = null;
var base_0 = [893,655,157,783,-1]
var r_0= undefined
try {
r_0 = base_0.find(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,655,157,783,-1]
var r_1= undefined
try {
r_1 = base_1.find(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,655,157,783,-1]
var r_2= undefined
try {
r_2 = base_2.find(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893,655,157,783,-1]
var r_3= undefined
try {
r_3 = base_3.find(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/find/findGen/test859.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)