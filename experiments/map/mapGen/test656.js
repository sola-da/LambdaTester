





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[6] = {"7":"","11":5.3253639865751e+307,"100":"f]+7:","823":"","i":"","j4":"","9.921615655735988e+307":"W","":"","1.0909542589126985e+308":9.60122734752051e+307,"0i":242}
argument3[714] = 1.6868065186709531e+308
return a/b+c
};
var argument2 = null;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0][0] = 1.3171369775610534e+307
argument5[5] = {"4.945399918865062e+307":"gF|","":""}
return a+b-c
};
var argument4 = r_0;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[2] = [122,783,126,618]
argument6[4] = ["3","q"]
base_2[1][7] = [49,893,618,213,157,0,0,403,213,-1]
return a/b-c
};
var argument6 = r_0;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[3] = 1.567422949900768e+308
argument9[3] = ["(2",607,122,595,"s","DV",595,1.7976931348623157e+308,126]
argument8[1] = {"7.148677589985395e+307":1.796998669169131e+307}
return a-b+c
};
var base_0 = [82,213,126,714,893]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [82,213,126,714,893]
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [82,213,126,714,893]
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [82,213,126,714,893]
var r_3= undefined
try {
r_3 = base_3.map(argument7)
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
require("fs").writeFileSync("./experiments/map/mapGen/test656.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)