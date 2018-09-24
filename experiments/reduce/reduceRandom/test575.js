





var callbackArguments = [];
var argument1 = {"":618,"1.3135381389486989e+308":"","Z@-Zw":"","1.5240690061193233e+306":49,"{a":"o","-1":49};
var argument2 = [122,705,843,-100,122,59];
var argument3 = false;
var base_0 = [618,655,"?","V803{",969,655]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
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
require("fs").writeFileSync("./experiments/reduce/reduceRandom/test575.json",JSON.stringify({"baseObjects":serialize([base_0]),"returnObjects":serialize([r_0]),"callbackArgs":callbackArguments}))
},300)