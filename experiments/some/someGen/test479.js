





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[2][5e-324] = null
return a+b+c
};
var argument2 = true;
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5['f9zgt4n!ZJR]W'] = ""
return a-b/c
};
var argument5 = 1.0547654947297417e+308;
var argument6 = 7.558610420927674e+306;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8['f'] = ""
argument8['f'] = ""
return a+b/c
};
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[0] = 9.51350419710669e+307
argument10[6] = null
argument9[5] = {"59":"s"}
return a-b*c
};
var argument9 = {"49":1.2930047447878162e+308};
var base_0 = ["oj","h","CS=]","i","<","Dj","]","x","4"]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["oj","h","CS=]","i","<","Dj","]","x","4"]
var r_1= undefined
try {
r_1 = base_1.some(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["oj","h","CS=]","i","<","Dj","]","x","4"]
var r_2= undefined
try {
r_2 = base_2.some(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["oj","h","CS=]","i","<","Dj","]","x","4"]
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
require("fs").writeFileSync("./experiments/some/someGen/test479.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)