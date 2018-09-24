





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[9] = {"49":1.3322899409285168e+308,"":1.3127894897113395e+308}
return a-b*c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[6] = ";"
argument3[1] = null
base_1[2][5e-324] = true
return a+b*c
};
var argument3 = {"100":6.714342175168815e+307,"1.1747662830077309e+308":1.7009349548149635e+308,"":5.362990998961199e+307,"]n":"","1.7976931348623157e+308":""};
var argument4 = {};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[1][2] = {"122":"5","403":"","705":"","1.6302281897852883e+308":3.9578609519476467e+307,"8.279959502765332e+307":1.0419444993335778e+308,"":2.6666257156277594e+307,"9.086138392763165e+307":"H"}
base_2[1][8] = true
return a/b*c
};
var argument6 = true;
var argument7 = true;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument10['T'] = null
return a*b*c
};
var argument9 = true;
var base_0 = [823,213,823]
var r_0= undefined
try {
r_0 = base_0.some(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [823,213,823]
var r_1= undefined
try {
r_1 = base_1.some(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [823,213,823]
var r_2= undefined
try {
r_2 = base_2.some(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [823,213,823]
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
require("fs").writeFileSync("./experiments/some/someGen/test232.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)