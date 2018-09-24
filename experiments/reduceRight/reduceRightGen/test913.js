





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3['8('] = 2.795005408261395e+307
base_0[4][3] = 122
return a-b/c-d
};
var argument2 = null;
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[82] = false
argument4[5] = true
return a-b+c*d
};
var argument4 = 6.799372663550652e+307;
var argument5 = null;
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[4][3] = 213
argument8[5] = {"":"qv","&":460,"1.182026840640308e+308":7.96137101919134e+307,"1.0832577377860543e+308":4.69306272879051e+307,"8.951207403367118e+307":"Y"}
return a+b*c+d
};
var argument7 = {"":"e","p":1.5074304284477973e+307,"xgP4Gx":8.485297992992649e+307,"u":""};
var argument8 = true;
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10['AwD'] = 242
return a+b/c+d
};
var argument10 = r_2;
var base_0 = ["<","g","]","S",")","d9U","=Er","j","[m]J;","F{;_0w"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["<","g","]","S",")","d9U","=Er","j","[m]J;","F{;_0w"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["<","g","]","S",")","d9U","=Er","j","[m]J;","F{;_0w"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["<","g","]","S",")","d9U","=Er","j","[m]J;","F{;_0w"]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument9,argument10)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test913.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)