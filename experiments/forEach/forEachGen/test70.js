





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[3] = true
return a+b/c
};
var argument2 = {"655":1.1665178431473182e+308,"+":655,"D?R":""};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1][1] = ""
base_1[9] = [49,213,893,-1,0,618,122,893,1.7976931348623157e+308,655]
return a*b*c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[126] = false
base_2[5] = true
return a*b/c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5 = {"627":"m","1.3525734672468675e+308":4.1249855321716053e+307,"Fn":9.518434361342049e+307,"1.6633790894557595e+308":893,"4.0863214550114195e+307":783,"2.329586229988876e+307":242,"9.87584936400125e+307":"","":"","e":"rI"}
base_3[9] = [100,1.7976931348623157e+308,627,627,-1]
base_3[9] = null
return a/b-c
};
var base_0 = [595,"1","VhU","u5(",213,843]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [595,"1","VhU","u5(",213,843]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [595,"1","VhU","u5(",213,843]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [595,"1","VhU","u5(",213,843]
var r_3= undefined
try {
r_3 = base_3.forEach(argument5)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test70.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)