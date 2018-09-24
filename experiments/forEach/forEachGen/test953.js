





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[1.7976931348623157e+308] = null
argument3[1.4034744228995816e+308] = {"655":"1","":1.1044992058710231e+307,"6.641462515316336e+307":59,"1.6861434173368258e+308":3.7800154508246547e+307,"5e-324":"","1.6637096743042118e+308":"","1.7597968103442236e+308":1.335748157165834e+308}
argument3[1.4034744228995816e+308] = "<JH"
return a+b*c
};
var argument2 = r_0;
var argument3 = true;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[403] = true
argument5[2] = "A5Wf"
argument4[2] = null
return a+b+c
};
var argument5 = true;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[8] = [":",25,783,"e^LD*","k2","?",82,"UJN"]
base_2[0][1] = "g"
return a-b*c
};
var argument7 = true;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9['a8r['] = null
argument10[49] = 1.7976931348623157e+308
argument9[6] = null
return a+b*c
};
var argument9 = [655,"nDuj*j",783,618,"#",969,49];
var base_0 = ["$>","P","K","L;q;sjr","t","Y",">"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["$>","P","K","L;q;sjr","t","Y",">"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["$>","P","K","L;q;sjr","t","Y",">"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["$>","P","K","L;q;sjr","t","Y",">"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8,argument9)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test953.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)