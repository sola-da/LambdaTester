





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[0] = "v@"
argument3[1.7847438319683965e+308] = ""
base_0[8][3] = {"607":82,"1.8021998928698314e+307":"8","":783,"-100":"+","Ucu3#":"","7.016983424121191e+307":""}
return a-b+c
};
var argument2 = 5.106482529201155e+307;
var argument3 = ")*";
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[157] = {"0":"","1.5415239243830477e+308":"Q","L":"?","vV":9.897826818469736e+307,"":157,"1.0729399622947102e+308":8.901245462382447e+307,"<":"","3.823155835853277e+307":49,"T":""}
base_1[2] = ["pfdO","w|","ym","cc&b"," ;","6si;c"]
base_1[0][3] = {"Y:":8.729053078477044e+307,"7==u8Y":""}
return a/b+c
};
var argument5 = false;
var argument6 = r_0;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[3][1.3434821406183095e+308] = 1.1955209419566504e+308
argument9[403] = {"1.507647015644539e+308":"","6.641002861512657e+307":705}
argument9['#R[+'] = [627,"s&","E","K","R",213,157,618]
return a+b-c
};
var argument8 = null;
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument11 = [49,100,"]"]
return a+b-c
};
var base_0 = ["o!2m","y{zbaPP","%$@","k","*Pa","L|Jv","L","gwz","yo5^cN>="]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["o!2m","y{zbaPP","%$@","k","*Pa","L|Jv","L","gwz","yo5^cN>="]
var r_1= undefined
try {
r_1 = base_1.filter(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["o!2m","y{zbaPP","%$@","k","*Pa","L|Jv","L","gwz","yo5^cN>="]
var r_2= undefined
try {
r_2 = base_2.filter(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["o!2m","y{zbaPP","%$@","k","*Pa","L|Jv","L","gwz","yo5^cN>="]
var r_3= undefined
try {
r_3 = base_3.filter(argument9)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test810.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)