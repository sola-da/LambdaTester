





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[126] = null
return a-b-c
};
var argument2 = true;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1][1] = null
base_1[3] = null
argument4[1.0446313380579697e+308] = 82
return a-b/c
};
var argument4 = {"403":""};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[1] = [607,893,5e-324,59]
return a+b/c
};
var argument6 = null;
var argument7 = r_0;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[4] = ""
base_3 = "f"
argument9[8] = {"783":843,"1.6726253559762077e+307":893,"1.2262504017357746e+307":":{p1",":Do":"","k^u":7.634121087639417e+307,"S9V":"X","T?GJ>2":"","f'":"","Qw":-1}
return a*b*c
};
var argument9 = true;
var argument10 = false;
var base_0 = ["*","R","M","<","XB8",")VP[^L","r","V5H"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["*","R","M","<","XB8",")VP[^L","r","V5H"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["*","R","M","<","XB8",")VP[^L","r","V5H"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["*","R","M","<","XB8",")VP[^L","r","V5H"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test559.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)