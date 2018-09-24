





var callbackArguments = [];
var argument1 = "?";
var argument2 = {"705":6.201153422039201e+306,"3.7138224498778335e+307":"","7.874125191048803e+307":49,"":8.207833640839383e+307,"5.207614748987645e+307":"","-":1.4804344884196164e+308};
var argument3 = null;
var base_0 = ["*","Gc@","W6","j","F"]
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightRandom/test385.json",JSON.stringify({"baseObjects":serialize([base_0]),"returnObjects":serialize([r_0]),"callbackArgs":callbackArguments}))
},300)