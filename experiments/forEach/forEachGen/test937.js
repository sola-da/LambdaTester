





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2['U+WQ'] = true
argument2[7] = null
argument2['a'] = ["Zfz,Ud","b","MAB","#vPA8j(T,S","3","_PU","q"]
return a-b-c
};
var argument2 = null;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3['VsR'] = {"893":"6","1.3651066305188404e+308":"","1.773895039508551e+308":-1,"":8.275324964183368e+306}
base_1[0][595] = false
return a/b+c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5['D'] = 5.406374418374503e+307
argument5 = 1.0620055230176772e+307
return a+b/c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[126] = [618,607,122,126,627,-1,843,242,823]
argument7[3.462967293930506e+307] = ["%_","?zo","wC$O@U:","P","eJ","%J?9U:"]
return a+b+c
};
var argument6 = [714,-1,0,126,823,714,122,655];
var base_0 = [-1,618,25,595,1.7976931348623157e+308]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-1,618,25,595,1.7976931348623157e+308]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-1,618,25,595,1.7976931348623157e+308]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-1,618,25,595,1.7976931348623157e+308]
var r_3= undefined
try {
r_3 = base_3.forEach(argument5,argument6)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test937.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)