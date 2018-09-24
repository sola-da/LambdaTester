





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[3][1] = ""
argument3[893] = ["tHel<z","|","-","W","ll","!","a","+","u"]
return a/b+c
};
var argument2 = [126,823,82,460,"nJ-1",-100,705,"g","gQ"];
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[3] = [242,"f?X",705,705]
base_1[5] = 1.625278671389167e+307
return a*b-c
};
var argument4 = 100;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[82] = [",","n","0","X","_"]
argument6 = {"705":9.19251265171786e+307,"6.502140054313662e+306":"0","7.87935978159773e+307":1.0323484754541868e+308,"":1.486448416666482e+308}
argument6[4] = "VH+e"
return a+b/c
};
var argument6 = "O#m|zhSRI";
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0][1.4677087964888306e+308] = null
argument8['A'] = [655,627,460,82,25,157]
base_3 = [213,-1,122,705,213,157]
return a/b*c
};
var argument8 = null;
var argument9 = null;
var base_0 = [714,460]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [714,460]
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [714,460]
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.map(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/map/mapGen/test207.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)