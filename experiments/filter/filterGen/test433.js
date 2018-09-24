





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[0] = false
argument3 = null
base_0['filter'] = ""
return a+b-c
};
var argument2 = {"4":1.4425092572640681e+308,"157":"","":893,"-1":"{","1.7976931348623157e+308":"","h":213};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[3.377960715099946e+307] = null
base_1[2] = {"7":"@o","L":"","1.554822650159092e+308":1.5471719967580133e+308,"1.292632388101371e+306":1.8517114630438463e+307,"1.7976931348623157e+308":"c&","-1":"y"}
return a-b*c
};
var argument4 = "";
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[1][2] = 714
return a-b-c
};
var argument6 = [0,714,893,783,595,1.7976931348623157e+308,242];
var argument7 = [126,655,655,627,705,595,25,82];
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[1][1] = [122,627,213,783,100,893,403,893]
argument9[1.1679954109349114e+308] = ["||sm","F",460,122,"S+",705,242]
return a*b/c
};
var base_0 = [0,403,213,122]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.filter(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [0,403,213,122]
var r_2= undefined
try {
r_2 = base_2.filter(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [0,403,213,122]
var r_3= undefined
try {
r_3 = base_3.filter(argument8)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test433.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)