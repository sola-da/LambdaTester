





var callbackArguments = [];
var argument1 = null;
var argument2 = {"25":"k","618":714,"":"XcX]o_","+":126,"1.712423720066612e+308":1.6440502208498984e+308,"r`":8.624482879827024e+307,"3.8350415936058995e+307":1.6804708052941125e+308,"ma":9.425166395606674e+307};
var argument3 = 9.531206722942118e+306;
var base_0 = ["2_","W","L4I"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
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
require("fs").writeFileSync("./experiments/forEach/forEachRandom/test703.json",JSON.stringify({"baseObjects":serialize([base_0]),"returnObjects":serialize([r_0]),"callbackArgs":callbackArguments}))
},300)