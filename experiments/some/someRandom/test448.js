





var callbackArguments = [];
var base_0 = [823,"5HN",242,242,607,1.7976931348623157e+308,82,"yoP"]
var r_0= undefined
try {
r_0 = base_0.some()
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
require("fs").writeFileSync("./experiments/some/someRandom/test448.json",JSON.stringify({"baseObjects":serialize([base_0]),"returnObjects":serialize([r_0]),"callbackArgs":callbackArguments}))
},300)