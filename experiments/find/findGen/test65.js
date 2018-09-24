





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[6] = [49,213,893,-1,0,618,122,893,1.7976931348623157e+308,655]
argument1[893] = 1.9444750463630893e+307
argument2[1] = null
return a/b+c
};
var argument2 = {"242":9.87584936400125e+307,"783":2.329586229988876e+307,"893":4.0863214550114195e+307,"1.3158333131846012e+308":714,"":627,"1.585340262681923e+308":1.3525734672468675e+308,"4.1249855321716053e+307":"Fn","9.518434361342049e+307":1.6633790894557595e+308,"m":""};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1][0] = ["I","d^2"]
return a/b-c
};
var argument4 = 242;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[-1] = {"xYP{X8":"rui"}
argument7['AO?'] = "LE%"
argument6[-1] = 1.2634807410669418e+308
return a/b-c
};
var argument6 = r_1;
var argument7 = r_1;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[1.0500354979187844e+308] = 460
base_3[1][0] = "r;"
argument9[1] = {"":"BZ","ME5@N":"","7.834011997342561e+307":595,"xpU_":1.7976931348623157e+308,"R":"","1.6252567100507689e+308":"2!#NH"}
return a/b*c
};
var argument9 = false;
var base_0 = [595,655,618,59,157,49,403,126,0]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [595,655,618,59,157,49,403,126,0]
var r_1= undefined
try {
r_1 = base_1.find(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [595,655,618,59,157,49,403,126,0]
var r_2= undefined
try {
r_2 = base_2.find(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [595,655,618,59,157,49,403,126,0]
var r_3= undefined
try {
r_3 = base_3.find(argument8,argument9)
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
require("fs").writeFileSync("./experiments/find/findGen/test65.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)