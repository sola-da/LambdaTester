





var callbackArguments = [];
var argument1 = ["9","&","hML","AD","<G","KA=",":"];
var argument2 = {"25":1.0432927967811147e+308,"969":"uN","6.393164411584145e+307":969,"1.2497306840197869e+308":5.592556221293803e+307,"":-1,"cG'":";ww{1F","6.829500784486032e+307":"","7.981824869836094e+307":""};
var base_0 = [595,"N","3",242]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightRandom/test100.json",JSON.stringify({"baseObjects":serialize([base_0]),"returnObjects":serialize([r_0]),"callbackArgs":callbackArguments}))
},300)