





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
return a/b-c
};
var argument2 = true;
var argument3 = 1.3534062637012366e+308;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[122] = {"242":6.976105784001069e+307,"595":157,"":"","I":"`"," u":1.6096776352281925e+307,"$T":"^d"}
argument5[6] = {"783":"Fo6","":4.630403907240558e+307,"L":"","1.6237154286427e+308":1.3713121263365243e+308,"1.4008323944072824e+308":"J","F":100,"4.98991800945057e+307":843}
base_1[3] = true
return a-b+c
};
var argument5 = 1.2649366113382333e+308;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[4] = 2.082485138281123e+307
base_2[4] = false
argument7[2] = ["7",1.7976931348623157e+308,823,607,"Nvi"]
return a-b-c
};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[4] = ["m","$","n","mK","@Cm"]
return a-b*c
};
var argument8 = ["b",403];
var argument9 = r_0;
var base_0 = [-1,969,-1,-1,969,893,157,213,49]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-1,969,-1,-1,969,893,157,213,49]
var r_1= undefined
try {
r_1 = base_1.every(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-1,969,-1,-1,969,893,157,213,49]
var r_2= undefined
try {
r_2 = base_2.every(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-1,969,-1,-1,969,893,157,213,49]
var r_3= undefined
try {
r_3 = base_3.every(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/every/everyGen/test221.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)