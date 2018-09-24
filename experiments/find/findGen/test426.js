





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[403] = [705,843,100,122,714,242]
argument2[25] = "#"
return a/b/c
};
var argument2 = {"":"","H]":""};
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[1] = 1.0807390172572984e+307
return a*b+c
};
var argument5 = true;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[3] = null
argument7[1.399309004356655e+308] = {"0":1.8900169501848738e+307,"82":2.602794494837258e+307,"627":"NRR4","893":1.6555152742988208e+308,"":"u*","|2":"","7.162589742997978e+306":"","1.6610369648713198e+308":9.98024505642774e+307,"3.6562418562035853e+307":""}
argument7[1] = [823,823,618,460,157]
return a+b*c
};
var argument7 = 9.75282001509702e+307;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[1.0500354979187844e+308] = true
argument10 = false
return a-b/c
};
var base_0 = ["ACCD2[","<","|j","0QJ","_"]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["ACCD2[","<","|j","0QJ","_"]
var r_1= undefined
try {
r_1 = base_1.find(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["ACCD2[","<","|j","0QJ","_"]
var r_2= undefined
try {
r_2 = base_2.find(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["ACCD2[","<","|j","0QJ","_"]
var r_3= undefined
try {
r_3 = base_3.find(argument8)
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
require("fs").writeFileSync("./experiments/find/findGen/test426.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)