





var callbackArguments = [];
var argument1 = null;
var argument2 = true;
var argument3 = 403;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[3] = null
argument2[0] = null
return a*b/c-d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1] = 655
return a-b+c+d
};
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[1.1277822633002616e+308] = ""
return a*b+c/d
};
var argument7 = false;
var argument8 = true;
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument11['HMm'] = 1.5803823499275743e+308
argument11['18{'] = {"157":"zi","607":893,"":1.6341327982811353e+307,"1.7297490919980757e+308":"H","4.66345029630422e+307":"4","1.0785714984121495e+308":"","5;ig":969,"H":1.5348759895509047e+308,"#":""}
argument10[-1] = ["h","WQ","O5","@o,","^m","pbA"]
return a*b*c/d
};
var argument10 = {"100":9.603001801809452e+307,"122":893,"213":3.612539681431712e+307,"823":8.625881296167539e+307,"1.0932416185064998e+307":714,"":"b!r","7.575893632183418e+307":893};
var base_0 = [893,705,969,969,122,-100,242]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,705,969,969,122,-100,242]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,705,969,969,122,-100,242]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893,705,969,969,122,-100,242]
var r_3= undefined
try {
r_3 = base_3.reduce(argument9,argument10)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test478.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)