





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2 = ["%","E","Z","^","Y","|j="]
argument2[1] = ""
return a+b/c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[8.748669805137695e+307] = {"100":"5","823":1.1687191025101798e+308,"1.4651499821108604e+308":"m","":1.7105460582225284e+308,"sFA":607,"6.149575494850336e+307":"J","3.0655649643805775e+307":157,"2.1262996664607829e+307":"!"}
return a/b/c
};
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[1.4034744228995816e+308] = false
return a/b-c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5['1SHF1'] = true
argument6[126] = {"82":1.606468573303944e+308,"D":2.7071903524160595e+307,"1.714508587422269e+308":"ha","AP":1.2341701347659202e+308,"=#L":"","1.1644251580175262e+307":"U_","1.5332880299252223e+308":82,"1.7055241312972207e+308":"I"}
argument6[3] = {"4.71079454948321e+307":5.244331368207548e+307}
return a/b*c
};
var argument6 = null;
var base_0 = [783,893,893,595]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [783,893,893,595]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [783,893,893,595]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [783,893,893,595]
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test102.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)