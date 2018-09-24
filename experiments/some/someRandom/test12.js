





var callbackArguments = [];
var argument1 = {"0":"=v","607":"","705":5.069830540616556e+307,"893":1.4536617123292348e+308,"_":595,"":"'","1.5960736029641476e+308":"d","f":1.4491847584408095e+307};
var argument2 = {"783":"","9.594908706717669e+307":157,"":6.636041156642326e+307,"G":1.4408349792145094e+308,"9.323435168156194e+307":7.530607368672627e+306,"4.3055675149882927e+307":1.3463009577694051e+308};
var argument3 = null;
var base_0 = [1.7976931348623157e+308,893,122,82,607,893]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
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
require("fs").writeFileSync("./experiments/some/someRandom/test12.json",JSON.stringify({"baseObjects":serialize([base_0]),"returnObjects":serialize([r_0]),"callbackArgs":callbackArguments}))
},300)