





var callbackArguments = [];
var argument1 = 6.876245820542168e+307;
var argument2 = "";
var argument3 = {"100":-1,"783":"","-1":705,"+hzSj":-100,"|":122,"2.5350593773444405e+307":9.316543297065427e+307,"pM":1.005102947000259e+307,"1.098635400235862e+308":"5","1.1706688857958813e+308":"*"};
var base_0 = ["bs","ib4CY",-100,25]
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
require("fs").writeFileSync("./experiments/reduce/reduceRandom/test425.json",JSON.stringify({"baseObjects":serialize([base_0]),"returnObjects":serialize([r_0]),"callbackArgs":callbackArguments}))
},300)