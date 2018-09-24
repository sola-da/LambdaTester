





var callbackArguments = [];
var argument1 = {"":1.3974607973213151e+308,"6.884086187575244e+307":-100,"po=mx":6.191823963445398e+307,"=x=h":"3"};
var argument2 = {"9.625258062656207e+307":"1ZsY"};
var argument3 = null;
var base_0 = [655,122,"d","O",893,82,"F","-","oy"]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
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
require("fs").writeFileSync("./experiments/every/everyRandom/test936.json",JSON.stringify({"baseObjects":serialize([base_0]),"returnObjects":serialize([r_0]),"callbackArgs":callbackArguments}))
},300)