





var callbackArguments = [];
var argument1 = ["#","+","nA","YC7","J]@","w","+"];
var argument2 = "";
var argument3 = {"969":618,"5.241734312169204e+307":7.796959798425967e+307,"5.794253295150726e+307":"","m":49,"1.1465401138047119e+308":3.0155522481403734e+307,"-100":157,"1.5127697662235292e+308":"","":607};
var base_0 = [49,-1]
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
require("fs").writeFileSync("./experiments/some/someRandom/test337.json",JSON.stringify({"baseObjects":serialize([base_0]),"returnObjects":serialize([r_0]),"callbackArgs":callbackArguments}))
},300)