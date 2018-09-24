





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0][3] = ["Fm ","g","F","@","3@","Sb",893,-100,"K"]
base_0[6] = null
return a+b*c+d
};
var argument2 = true;
var argument3 = true;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[1.1207829086460726e+308] = [";",595,126,-1,":t9bp"]
argument5['y'] = 5.873544487895291e+307
base_1[2][2.819898637310108e+307] = "s"
return a*b+c/d
};
var argument5 = false;
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[82] = "RJGWm#"
argument7[7] = 59
return a-b/c/d
};
var argument7 = 969;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3['length'] = [213,705,126,242,714,0,969]
argument10[126] = {"122":"zvQ","242":1.6829422222318822e+308,"":8.344626770522465e+307,"S":25,"|?":1.7635310520417641e+308,"4.497122282225607e+307":4.174429261539272e+307,"1.248228897412291e+308":655,"1.586274256015856e+308":893,"fZ*":""}
return a-b+c/d
};
var argument9 = 618;
var base_0 = ["e","6","_","OAT"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["e","6","_","OAT"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["e","6","_","OAT"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["e","6","_","OAT"]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument8,argument9)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test643.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)