





var callbackArguments = [];
var argument1 = true;
var argument2 = ["J","n","8","^","G","M","e","f","+4["];
var argument3 = {"3":82,"595":"","618":122,"9.329154558202423e+306":7.132198436179097e+307,"":"",";":""};
var base_0 = ["0QwR",126,59,618,-100,",1c",100,"@VZ&"]
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightRandom/test393.json",JSON.stringify({"baseObjects":serialize([base_0]),"returnObjects":serialize([r_0]),"callbackArgs":callbackArguments}))
},300)