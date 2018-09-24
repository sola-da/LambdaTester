





var callbackArguments = [];
var argument1 = {"213":"","242":1.792196639031832e+308,"":627,"4.613379241129689e+306":"hP|j4","-1":783,"1.188599934911117e+308":"","-100":714,"5.087495193218676e+307":5e-324};
var argument2 = [0,242,-100,25,655];
var base_0 = [893,0,100,607]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
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
require("fs").writeFileSync("./experiments/filter/filterRandom/test906.json",JSON.stringify({"baseObjects":serialize([base_0]),"returnObjects":serialize([r_0]),"callbackArgs":callbackArguments}))
},300)