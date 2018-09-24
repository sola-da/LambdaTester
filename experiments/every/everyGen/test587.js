





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0] = "lP^9eR"
base_0[7] = false
return a/b/c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[0] = ""
argument3 = 100
base_1[1][4] = "-CVFB"
return a*b+c
};
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[0] = [1.7976931348623157e+308]
base_2[2][7] = 705
base_2[0][0] = null
return a+b-c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6 = 4.839350563996593e+307
base_3[0][6] = {"893":1.2260452789970033e+308,"969":"","":9.575722842313938e+307,"6.750605395822894e+307":8.871517522307857e+306,"1.5679208681023166e+308":969}
argument5 = {"157":1.419587975768915e+308,"655":5.649127313232719e+307,"":403,"EOG^6":"","1.0582573793571022e+308":"","1.3213280269416904e+307":"7C","3.5332117121871684e+307":"G","A;":"zq"}
return a/b/c
};
var argument6 = null;
var argument7 = null;
var base_0 = [460,460,893,5e-324,82,100,126,969]
var r_0= undefined
try {
r_0 = base_0.every(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [460,460,893,5e-324,82,100,126,969]
var r_1= undefined
try {
r_1 = base_1.every(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [460,460,893,5e-324,82,100,126,969]
var r_2= undefined
try {
r_2 = base_2.every(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [460,460,893,5e-324,82,100,126,969]
var r_3= undefined
try {
r_3 = base_3.every(argument5,argument6,argument7)
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
require("fs").writeFileSync("./experiments/every/everyGen/test587.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)