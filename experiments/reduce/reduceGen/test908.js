





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[5.71178064163152e+307] = 1.2431941390252437e+308
argument1[1] = {"100":1.2602330167857889e+308,"595":"","Y":8.825197998691134e+307,"":8.937627189699309e+307,"1.4107754381365886e+308":618,"1.5028312107859888e+308":1.6577719686727001e+308}
argument2[1.1277822633002616e+308] = null
return a+b-c+d
};
var argument2 = false;
var argument3 = {"705":1.6069106053619725e+307,"":"","2.807024256120969e+307":1.1178769705408298e+308};
var argument4 = r_1;
var argument5 = true;
var argument6 = r_1;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[9.331954948603684e+307] = null
argument5[1.1532786076532189e+308] = true
return a/b-c-d
};
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[627] = 1.7973519351435597e+308
argument9[3] = {"49":82,"893":"","":"","b":"","1.7976931348623157e+308":"","1.3482018330729349e+308":"","4.825076846885131e+307":"n","5.784309990494596e+307":""}
argument9[627] = false
return a*b*c+d
};
var argument9 = null;
var argument10 = "";
var argument11 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[9] = 6.086106043004974e+307
argument11[8] = true
return a/b/c-d
};
var argument12 = r_1;
var argument13 = null;
var base_0 = [607,618,"u<","5j9","f",969,"4"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [607,618,"u<","5j9","f",969,"4"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5,argument6,argument7)
}
catch(e) {
r_1= "Error"
}
var base_2 = [607,618,"u<","5j9","f",969,"4"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument8,argument9,argument10)
}
catch(e) {
r_2= "Error"
}
var base_3 = [607,618,"u<","5j9","f",969,"4"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument11,argument12,argument13)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test908.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)