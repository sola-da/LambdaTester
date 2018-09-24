





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[8] = {"82":5e-324,"":"","1.7976931348623157e+308":-1,"1.1841138505739727e+308":969,"1.360630230240399e+308":"A-"}
base_0[0][0] = [595]
return a/b/c
};
var argument2 = "s";
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[5] = "v2"
argument5[1] = null
argument6[9] = {"":1.0189647858221425e+308,"1.0390629665478804e+308":618,"9c":460}
return a*b/c
};
var argument5 = true;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[9] = null
base_2[1] = {"82":1.7313346076668722e+308,"969":627,"1.1999695258791068e+308":783,"9.91040096269862e+307":157,"E)S":1.0409968788528605e+308}
return a/b*c
};
var argument7 = [1.7976931348623157e+308,213,705,100,100,607,126];
var argument8 = null;
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument10['wIs'] = 1.7775699498159222e+308
base_3[2] = null
argument11[4] = {"100":"","-":59,"1.2314799759543875e+308":595,"1.2031856330515085e+308":"","1.349033534817146e+308":1.023273150186547e+308,"1.4816625627170622e+308":"k6C","1.1886295413437096e+308":100}
return a/b-c
};
var base_0 = [893,242,59]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,242,59]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,242,59]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893,242,59]
var r_3= undefined
try {
r_3 = base_3.forEach(argument9)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test318.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)