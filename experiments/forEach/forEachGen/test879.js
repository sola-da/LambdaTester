





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[4] = [607,618,607,242]
argument3[2] = false
argument2[6] = true
return a-b*c
};
var argument2 = false;
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[1.0446313380579697e+308] = {"893":1.7883333668932724e+308,"1.7976931348623157e+308":655,"":9.41199922614702e+306,"n:":1.4500967752202492e+308,"1.4562261678048385e+308":"","4.149229882180277e+307":"';"}
return a+b-c
};
var argument5 = 1.4273061969080986e+308;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[4] = null
argument8[4] = 126
argument7[3] = 7.508225192474387e+307
return a+b/c
};
var argument7 = true;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[8.748669805137695e+307] = {"gk":"","7.730846957707493e+306":""}
argument9[157] = 242
return a+b-c
};
var argument9 = [82,"#","o",25,843,"9B","%","m","n",122];
var base_0 = [100,893,82,213,705,893,82]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [100,893,82,213,705,893,82]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [100,893,82,213,705,893,82]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [100,893,82,213,705,893,82]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8,argument9)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test879.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)