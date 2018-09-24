





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[5] = false
base_0[0][4] = null
return a/b*c
};
var argument2 = true;
var argument3 = true;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[6] = {"2":618,"627":"","655":"","1.519329300741133e+308":"j1","":1.585340262681923e+308,"-1":"","1.1665178431473182e+308":126,"1.7320073382810557e+308":1.75273847064817e+308,",":"","1.3525734672468675e+308":4.1249855321716053e+307}
base_1[4] = null
base_1[7] = 1.4340775508811218e+308
return a/b+c
};
var argument5 = {"627":"m","1.6633790894557595e+308":893,"4.0863214550114195e+307":783,"2.329586229988876e+307":242,"9.87584936400125e+307":""};
var argument6 = r_1;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[-1] = ["I","d^2"]
return a/b-c
};
var argument8 = 242;
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[0] = {"xYP{X8":"rui"}
base_3[0][4] = "LE%"
argument10[0] = 1.2634807410669418e+308
return a/b-c
};
var argument10 = r_2;
var argument11 = r_2;
var base_0 = ["P",5e-324,"!J",126,823]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["P",5e-324,"!J",126,823]
var r_1= undefined
try {
r_1 = base_1.filter(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.filter(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.filter(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test71.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)