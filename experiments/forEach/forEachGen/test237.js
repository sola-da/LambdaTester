





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2 = ""
return a/b/c
};
var argument2 = null;
var argument3 = {"893":5.580362510199541e+307,"969":"","jd1I":25,"B,":242,"":5.055661947856935e+307,"1.353019945122574e+307":"","3.7238091336632283e+307":""};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1 = {"783":1.3825082247363485e+308,"":"","@":"","1.6599931099230997e+308":"W"}
argument6[1] = [-1]
argument4 = {"893":49,"1.4231370878050593e+306":969,"zE":1.4328261716464415e+307,"":"6V`"}
return a*b*c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[2] = ["%",49,655,"T","xQ!!F",25,"7"]
argument6[8.748669805137695e+307] = false
base_2[1][1] = ""
return a-b/c
};
var argument6 = 2.5543968502432146e+307;
var argument7 = null;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[2] = {"49":460,"X":3.5395532602929967e+307}
argument8['1SHF1'] = [705,82,595,823,0]
return a/b+c
};
var base_0 = [59,-100]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [59,-100]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [59,-100]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [59,-100]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test237.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)