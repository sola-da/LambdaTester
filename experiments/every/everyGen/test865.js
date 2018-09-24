





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[783] = [714,595,403,122,82,893,655]
base_0[0][0] = {"IT":"","":9.965556389411536e+306}
argument2[1.6706143966770798e+306] = true
return a-b/c
};
var argument2 = 4.901965619767707e+307;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[1.3599216339661573e+308] = {"82":"8","1.5631884329204334e+308":242,"]":"","6.676409736455461e+307":8.243888202918063e+307,"":3.9726261941570216e+307,"8tt":1.4576894507467519e+308,"1.6503208615086126e+308":-1}
argument4[783] = 460
return a/b*c
};
var argument4 = {"49":"","82":",","242":1.412062040075301e+308,"607":8.525505734468107e+307,"-100":607,"Nb3G":"`i&","":"Lg","cc0":8.499180303653631e+307};
var argument5 = {"607":"_","1.6230084556900606e+308":1.2899001779014793e+308};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[122] = null
argument8[6] = false
return a+b+c
};
var argument7 = {"714":126,"1.3129768618158625e+308":6.102550735858066e+306,"":"","Cp":126,"1.7349794352000907e+308":"b","6.957023047568698e+307":595,"HJ":4.2054530717808106e+307,"1.1000059994461357e+308":"","2.40379269853574e+307":2.928739944460171e+307};
var argument8 = [783,"-","XU]lE)","!",823,82,"?X","4"];
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0][0] = true
base_3[1][4] = {"1.2827753446274256e+308":122,"1.7445391789088273e+308":2.645409972507282e+307,"1.775070073389909e+308":"","jBOq":893,"5.142596967465889e+307":"E"}
argument9[2] = false
return a/b*c
};
var argument10 = r_1;
var argument11 = "";
var base_0 = ["Y","nB","d","9","l",",","5","-"]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["Y","nB","d","9","l",",","5","-"]
var r_1= undefined
try {
r_1 = base_1.every(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["Y","nB","d","9","l",",","5","-"]
var r_2= undefined
try {
r_2 = base_2.every(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["Y","nB","d","9","l",",","5","-"]
var r_3= undefined
try {
r_3 = base_3.every(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/every/everyGen/test865.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)