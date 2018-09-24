





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[3.8120440085202614e+307] = null
argument3[7] = 4.788062743828429e+307
return a*b/c/d
};
var argument2 = "Z";
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[82] = false
return a*b/c/d
};
var argument4 = {"1.7071986534150335e+308":893,"":"","_5":"","+Y":"","-100":""};
var argument5 = true;
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[100] = 4.635063156815105e+307
argument7['PK4'] = 4.933734565627326e+307
return a+b*c/d
};
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8 = ""
argument9[126] = false
base_3[0][2] = ""
return a*b+c-d
};
var argument8 = 607;
var argument9 = r_2;
var base_0 = [655,-100,242,893,-1,82,893,157,-1,1.7976931348623157e+308]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [655,-100,242,893,-1,82,893,157,-1,1.7976931348623157e+308]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [655,-100,242,893,-1,82,893,157,-1,1.7976931348623157e+308]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [655,-100,242,893,-1,82,893,157,-1,1.7976931348623157e+308]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test849.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)