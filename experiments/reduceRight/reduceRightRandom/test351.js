





var callbackArguments = [];
var argument1 = {"122":"","":49,"l":1.071474030063186e+308,"m'k":823,"m":1.2967816970383867e+308,"1.5262101360947533e+308":"","'J":122};
var argument2 = true;
var argument3 = [49,242,969,100,893];
var base_0 = [59,893,49,607,0,0,59,595]
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightRandom/test351.json",JSON.stringify({"baseObjects":serialize([base_0]),"returnObjects":serialize([r_0]),"callbackArgs":callbackArguments}))
},300)