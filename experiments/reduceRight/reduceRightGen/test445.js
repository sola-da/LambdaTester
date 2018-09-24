





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[82] = {"705":4.1458518914803835e+307,"":"OJ"}
base_0[1] = [157,"k","=",242,213,82,"3 x"]
argument2['K'] = "&"
return a-b+c/d
};
var argument2 = "";
var argument3 = null;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[25] = {"100":"NF@","969":1.3121470886669286e+308,"6.376909035185838e+307":655,"":-1,"#)":714}
argument5[7] = true
return a-b+c+d
};
var argument5 = ";";
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[627] = false
base_2[0][0] = {"783":0,"823":4.850883013700402e+307,"6.586853635650298e+306":"","B":"","a":843,"1.3458601312403486e+308":1.3625300584020863e+308,"":""}
argument7['y'] = {"59":969,"969":122,"kf":5.539742059911111e+307}
return a-b/c-d
};
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[0] = [460,969]
base_3[4][3] = null
argument8['^N'] = ""
return a-b/c-d
};
var base_0 = ["5$<1QAb@","a",82,783,100,823]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["5$<1QAb@","a",82,783,100,823]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["5$<1QAb@","a",82,783,100,823]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["5$<1QAb@","a",82,783,100,823]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument7)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test445.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)