





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[8.639664788900972e+307] = "42O]erm"
return a-b/c
};
var argument2 = true;
var argument3 = [25,783,126,-1,126,595,100,157];
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[0] = [655,783]
return a/b+c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[4.224481734419934e+307] = 8.544899600130169e+307
return a+b+c
};
var argument6 = {"{":"","":595,"7.771442629080406e+307":"","0b)":")|d","-100":""};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8['-'] = [607,460,242]
return a/b/c
};
var argument8 = 6.093110299211685e+307;
var argument9 = {"618":893,"":714,"1.443935436011749e+308":157,"eODF0N":1.737859796267207e+308,"g":"","S":9.859714342266016e+307,"-1":"9","x":"","4.988780277357191e+306":"^>H3"};
var base_0 = ["Z","d#"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["Z","d#"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["Z","d#"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["Z","d#"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test694.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)