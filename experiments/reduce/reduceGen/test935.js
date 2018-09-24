





var callbackArguments = [];
var argument1 = false;
var argument2 = 1.7976931348623157e+308;
var argument3 = false;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[4] = null
return a/b+c+d
};
var argument5 = {"627":"a","":"O",">":49,"5.253227102209101e+307":"PEx(z","=-":1.4302787429507832e+308};
var argument6 = false;
var argument7 = [82,100,157,"0","Y>",460,213,"Q"];
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[1.359136872727139e+308] = "Wf"
base_1[6] = 3.590679884001527e+307
return a/b/c*d
};
var argument9 = r_2;
var argument10 = null;
var argument11 = {"893":"","I":"","5.036145754103804e+307":126,"<":"RI","":"Gy","I2%jV|Gr":-100,"h2O":"","V1":"?","1.7529957079583603e+308":122};
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[0] = [969,843,460,655,49,157,100,82,0]
argument10[1.171692140852735e+308] = null
base_2[2][0] = 1.8181992285349072e+307
return a-b+c-d
};
var argument13 = r_2;
var argument14 = r_2;
var argument15 = {"49":8.088015417938989e+307,"157":5.778004472813923e+307,"":"V","8d-c":1.6893098256051406e+308,"l":8.024600201068167e+307};
var argument16 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument14[5.71178064163152e+307] = 3.9768483849178817e+307
argument15[59] = ["t","{","PF*"]
argument15 = 8.866714024081813e+307
return a-b*c*d
};
var base_0 = [-1,100,655,"U@",783,595,"1+j"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-1,100,655,"U@",783,595,"1+j"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-1,100,655,"U@",783,595,"1+j"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10,argument11,argument12)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-1,100,655,"U@",783,595,"1+j"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument13,argument14,argument15,argument16)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test935.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)