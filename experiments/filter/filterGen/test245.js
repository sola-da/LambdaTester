





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1] = {"":"","2.4044694267503945e+307":783,"n":2.8558509016191335e+307,"z":"","1.0079533170534851e+307":"Uw:lSM&","6.508512511736796e+307":"8"}
argument2[5] = ""
base_0[1][2] = 1.3225865238547176e+308
return a+b/c
};
var argument2 = null;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[3][0] = {"0":242,"61":8.030261803464955e+307,"627":"","823":7.225196383661545e+307,"6.730483066849164e+307":893,"":213,"Q":1.520263247641672e+308}
return a+b+c
};
var argument4 = false;
var argument5 = null;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2['length'] = null
argument7['A'] = [655]
base_2[4][7] = 122
return a/b-c
};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[4][7] = {"59":3.9935946732943995e+307,"213":"^","":"",">":1.2863238241005741e+308}
argument7 = null
argument9 = null
return a-b*c
};
var argument8 = r_3;
var argument9 = r_3;
var base_0 = [122,-1,893,213,0,213,1.7976931348623157e+308,893,595]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [122,-1,893,213,0,213,1.7976931348623157e+308,893,595]
var r_1= undefined
try {
r_1 = base_1.filter(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.filter(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.filter(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test245.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)