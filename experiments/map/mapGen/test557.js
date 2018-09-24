





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[5] = {"49":3.051067124938239e+307,"705":"v","969":"","":8.881959842233924e+307,"fe":5.053808373458476e+307,"<@":6.736228027286508e+307,"xs":3.9835084805267347e+307,"1.4635807031448202e+308":"","1.1269204124044902e+308":969}
argument3[714] = ""
return a/b+c
};
var argument2 = 6.555799760691922e+307;
var argument3 = true;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[7] = false
argument5['A'] = [59]
return a/b/c
};
var argument5 = true;
var argument6 = [-1,0,618,100];
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[3][3] = 1.3555388172143238e+308
base_2[1][4] = ""
argument9[6] = null
return a/b+c
};
var argument8 = null;
var argument9 = ["#1","+"," 2|","2#-"];
var argument10 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[6][3] = null
base_3[2] = ["de",",!","P4h","_","cABdv","C","X","B","KoUO"]
return a-b/c
};
var base_0 = [627,"ix",213,1.7976931348623157e+308]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [627,"ix",213,1.7976931348623157e+308]
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.map(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.map(argument10)
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
require("fs").writeFileSync("./experiments/map/mapGen/test557.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)