





var callbackArguments = [];
var argument1 = -1;
var argument2 = {"126":"","J":9.51427155256739e+307,"H":"","2.7364938486572965e+307":"","2.624518757434797e+307":3.019233712083943e+307,"":1.2405086764925561e+308,"?NE":"","1.634012382773645e+308":9.76034060619332e+307,"YP":"","1.2024557613506655e+308":969};
var argument3 = 3.60065080006838e+306;
var base_0 = [618,618,893,705,-1]
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
require("fs").writeFileSync("./experiments/reduce/reduceRandom/test68.json",JSON.stringify({"baseObjects":serialize([base_0]),"returnObjects":serialize([r_0]),"callbackArgs":callbackArguments}))
},300)