





var callbackArguments = [];
var argument1 = null;
var argument2 = r_0;
var argument3 = 893;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[6] = true
argument2[1.1277822633002616e+308] = {"7":618,"49":627,"403":157,"Mk":"","&z":"","X1":1.4548884724461564e+308}
argument3[59] = ""
return a*b+c+d
};
var argument5 = [460,843,705,705,627,714];
var argument6 = 157;
var argument7 = null;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7['HMm'] = null
base_1[8] = [618,"71|x","5-L"]
base_1[5] = 893
return a+b*c-d
};
var argument9 = null;
var argument10 = "";
var argument11 = null;
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[3] = "["
argument11[403] = "x"
base_2[9] = 1.446154975715374e+308
return a+b*c-d
};
var argument13 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument14[9.331954948603684e+307] = ";"
base_3['length'] = false
return a*b-c+d
};
var base_0 = [100,655,59,969,5e-324,655,82,655]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [100,655,59,969,5e-324,655,82,655]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = [100,655,59,969,5e-324,655,82,655]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10,argument11,argument12)
}
catch(e) {
r_2= "Error"
}
var base_3 = [100,655,59,969,5e-324,655,82,655]
var r_3= undefined
try {
r_3 = base_3.reduce(argument13)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test451.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)