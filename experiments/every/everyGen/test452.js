





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[6] = ["]ca5e","#=Yo","e ","4h","@","L","F"]
return a+b+c
};
var argument2 = r_0;
var argument3 = r_0;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[5] = "!_"
return a+b/c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[1][2] = -100
argument6[3.3156198695370476e+307] = null
base_2['length'] = "%"
return a*b*c
};
var argument6 = {"82":"","1.6551112074165106e+308":1.1907385736537143e+308,"6B)A":"D","h":893,",":1.2157154091444122e+308,"B|":3.456986413971884e+307,"":"OJ"};
var argument7 = 1.0518862899595418e+308;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0] = [403,"Hi;","3 x",";[",607,403,"kv",100,126]
argument9[403] = {"100":"NF@","969":1.3121470886669286e+308,"6.376909035185838e+307":655,"":-1,"#)":714}
argument9[4] = true
return a+b*c
};
var argument9 = ";";
var argument10 = null;
var base_0 = ["-",",VY",82,"Q92k-",783,"^:",595,"hP",82]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["-",",VY",82,"Q92k-",783,"^:",595,"hP",82]
var r_1= undefined
try {
r_1 = base_1.every(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["-",",VY",82,"Q92k-",783,"^:",595,"hP",82]
var r_2= undefined
try {
r_2 = base_2.every(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["-",",VY",82,"Q92k-",783,"^:",595,"hP",82]
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
require("fs").writeFileSync("./experiments/every/everyGen/test452.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)