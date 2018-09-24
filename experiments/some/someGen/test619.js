





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[1.5109538778533692e+308] = 6.496842616990679e+307
argument3[4] = "1r"
return a+b+c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[122] = {"460":403,"9.655966419077592e+307":655,"$":-100,"":7.013302167347234e+307,"#)c":126}
argument2[3] = ""
base_1[1][3] = false
return a*b*c
};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[3] = true
argument5[9.551053197482062e+307] = ["u93",627,82,25,49,"O","l@u",59]
return a*b/c
};
var argument4 = null;
var argument5 = true;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6 = ""
base_3[1][3] = ""
argument8['T'] = [460,403,"w","E)"]
return a*b-c
};
var argument7 = ["_",714,"PL","[",893,"F<",655,460,823];
var base_0 = [157,"T]k","4",969,242,5e-324,59]
var r_0= undefined
try {
r_0 = base_0.some(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [157,"T]k","4",969,242,5e-324,59]
var r_1= undefined
try {
r_1 = base_1.some(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [157,"T]k","4",969,242,5e-324,59]
var r_2= undefined
try {
r_2 = base_2.some(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [157,"T]k","4",969,242,5e-324,59]
var r_3= undefined
try {
r_3 = base_3.some(argument6,argument7)
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
require("fs").writeFileSync("./experiments/some/someGen/test619.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)