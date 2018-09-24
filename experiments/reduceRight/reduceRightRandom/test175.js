





var callbackArguments = [];
var argument1 = 714;
var argument2 = ["s","v","5","Q"];
var argument3 = {"49":843,"126":"3-o","1.4120152067033575e+308":"R","":"","=":"","R":"","MO":6.978165069380095e+306,"z":""};
var base_0 = [0,100,460,783,-1,403,25]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightRandom/test175.json",JSON.stringify({"baseObjects":serialize([base_0]),"returnObjects":serialize([r_0]),"callbackArgs":callbackArguments}))
},300)