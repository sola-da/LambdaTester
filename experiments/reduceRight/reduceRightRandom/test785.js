





var callbackArguments = [];
var argument1 = {"`":3.7091473932720097e+307,"":1.0579004459045545e+308,"1.553014924431862e+308":9.982390875822036e+307};
var argument2 = [627,893,969,100,242,627,-100,242,82];
var base_0 = ["J","R","M","AXq$"]
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightRandom/test785.json",JSON.stringify({"baseObjects":serialize([base_0]),"returnObjects":serialize([r_0]),"callbackArgs":callbackArguments}))
},300)