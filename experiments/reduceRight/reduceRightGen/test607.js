





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument1 = {"59":"O","63":1.6080242293560068e+307,"607":1.2081473370474025e+308,"sN":1.4347979440941616e+308,"1.392434125293866e+308":"N","1.707429808449962e+308":"","":460,"7.525561169123146e+307":157,"9c":"D","3.195587796242911e+307":"H"}
return a*b/c+d
};
var argument2 = true;
var argument3 = false;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[4] = true
argument5[627] = null
return a*b/c/d
};
var argument5 = 157;
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[5] = null
argument7[705] = 1.7522578113079655e+308
base_2[0] = [705,"jH>c",25,5e-324,0]
return a*b-c/d
};
var argument7 = {"3.380326473453762e+307":"I"};
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[4] = false
return a*b*c/d
};
var argument9 = null;
var argument10 = r_2;
var base_0 = [59,"J",157,893,714,"-H","MH"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [59,"J",157,893,714,"-H","MH"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [59,"J",157,893,714,"-H","MH"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [59,"J",157,893,714,"-H","MH"]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test607.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)