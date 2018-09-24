





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0 = null
argument3[0] = "4"
return a/b+c
};
var argument2 = false;
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[3] = null
argument6[9.551053197482062e+307] = 1.208221672364765e+308
return a/b/c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6['f9zgt4n!ZJR]W'] = {"0":5e-324,"6":"","460":403,"893":"","":"","s":"","!I":59,"h":"fBc","6.205607310478591e+307":714,"1.6765868423149165e+308":1.382034702622121e+308}
return a-b/c
};
var argument6 = [823,823,627];
var argument7 = false;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[4] = 3.6025092463369327e+307
argument10[7] = {"823":607,"M]=C":"@I","":"","1.748654806512541e+308":1.2638472901528557e+308,"^":1.2419647218058332e+308,">Y":4.646389803532883e+307,"6.3472136096316e+307":627,"ui":"","mk":"_","1.175996353978334e+308":""}
return a*b-c
};
var argument9 = r_3;
var base_0 = ["f>","U"]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["f>","U"]
var r_1= undefined
try {
r_1 = base_1.some(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["f>","U"]
var r_2= undefined
try {
r_2 = base_2.some(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["f>","U"]
var r_3= undefined
try {
r_3 = base_3.some(argument8,argument9)
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
require("fs").writeFileSync("./experiments/some/someGen/test412.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)