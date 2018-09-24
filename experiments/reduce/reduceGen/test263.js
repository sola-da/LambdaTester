





var callbackArguments = [];
var argument1 = null;
var argument2 = r_0;
var argument3 = {"213":"","&":"T","p#":"","2.163460605533832e+307":"`","4.607779647729916e+307":"b","":"+5i+XO",",[":"UB","-":"1nH",";":"x8muoi","1.3081791160187185e+308":""};
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3 = {"213":607,"242":"","893":705,"3.6212773637908953e+307":126,"":"","w":"","m":6.052561688697544e+307,"]":""}
argument1['Cb'] = [1.7976931348623157e+308,82,969]
return a-b-c+d
};
var argument5 = r_1;
var argument6 = null;
var argument7 = "";
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[1] = [705,126,893,823,242,82,157,-1,823,5e-324]
base_1[1][0] = {"59":3.0381706871442473e+307,"122":":","1.3287290213376709e+308":242,"":1.3888337418853272e+308,"C":""}
return a*b/c*d
};
var argument9 = 1.0777040563947294e+308;
var argument10 = [-1,-100,157,25,-100,969,969,1.7976931348623157e+308,403];
var argument11 = {"25":49,"1.721461685401845e+308":1.4850087424355889e+308,"":8.36952335497213e+307,"4.970169542839398e+307":"","1.6292099770581016e+308":7.688304178098481e+307,"1.4427714867922255e+308":"","r":"","-1":1.4857191743469784e+308};
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0][0] = 1.7976931348623157e+308
argument11[6.35085648319999e+307] = 1.1134673130566052e+308
return a/b/c*d
};
var argument13 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument14[4] = true
argument15[6.35085648319999e+307] = 5.372445529753765e+307
base_3[2] = null
return a/b*c/d
};
var base_0 = ["^K","6"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["^K","6"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["^K","6"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10,argument11,argument12)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["^K","6"]
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test263.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)