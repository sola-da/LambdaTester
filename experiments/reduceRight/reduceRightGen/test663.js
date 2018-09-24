





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2['L'] = "?I4"
argument2[8.575765443877852e+307] = false
return a*b-c/d
};
var argument2 = {"11":5.3253639865751e+307,"705":25,"":1.5365337553104073e+308,"0i":242,"?":607};
var argument3 = null;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[1.921533274132203e+307] = {"49":"","783":"","":1.3908372723276407e+308,"1.1590483757819826e+308":"Z","2.1591441612081928e+307":"j?","0$":"u)","1.360354313629395e+308":1.4830131934493258e+308}
argument5['y'] = null
return a-b*c-d
};
var argument5 = null;
var argument6 = true;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[8.575765443877852e+307] = {}
argument8['^N'] = false
base_2[0][2] = false
return a*b*c/d
};
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[6] = null
return a-b-c-d
};
var argument9 = {"7.148677589985395e+307":1.796998669169131e+307};
var base_0 = [595,100,655,213,25,122,25]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [595,100,655,213,25,122,25]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [595,100,655,213,25,122,25]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [595,100,655,213,25,122,25]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument8,argument9)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test663.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)