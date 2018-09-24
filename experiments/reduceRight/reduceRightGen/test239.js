





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[7] = 1.0655672506034116e+308
return a/b-c-d
};
var argument2 = {};
var argument3 = false;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[3] = true
return a+b*c+d
};
var argument5 = ["&U"];
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
return a/b-c*d
};
var argument7 = "";
var argument8 = null;
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0] = {"893":5.580362510199541e+307,"-":5.055661947856935e+307,"1.353019945122574e+307":"","3.7238091336632283e+307":"","":655,"1.0482505559629726e+308":607,"x":122}
return a-b-c-d
};
var argument10 = {"242":5.717861577368829e+307,"893":49,"IaRsl":"","1.3825082247363485e+308":1.6599931099230997e+308,"W":5.4258665121503745e+306,"-1":6.699336381388152e+307,"1.4231370878050593e+306":969,"zE":1.4328261716464415e+307,"":""};
var base_0 = [82,242,783,893,59,783,655]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [82,242,783,893,59,783,655]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [82,242,783,893,59,783,655]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [82,242,783,893,59,783,655]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument9,argument10)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test239.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)