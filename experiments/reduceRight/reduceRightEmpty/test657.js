





var callbackArguments = [];
var argument1 = function callback(){callbackArguments.push(arguments)};
var argument2 = 618;
var argument3 = [5e-324,49];
var argument4 = function callback(){callbackArguments.push(arguments)};
var argument5 = function callback(){callbackArguments.push(arguments)};
var argument6 = true;
var argument7 = 100;
var argument8 = function callback(){callbackArguments.push(arguments)};
var argument9 = null;
var argument10 = "U";
var base_0 = [595,"r",969,714,126,">","l","3x"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [595,"r",969,714,126,">","l","3x"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [595,"r",969,714,126,">","l","3x"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [595,"r",969,714,126,">","l","3x"]
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightEmpty/test657.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)