





var callbackArguments = [];
var argument1 = {"0":1.1396232427756326e+307,"157":1.0592180834569077e+308,"403":"e_","460":"","714":705,"n":"o%","1.0745167948887026e+308":"F,","c":403,"5.916143456252428e+307":1.4914996852897865e+307,")=":1.7249157979498379e+308};
var base_0 = [705,0,969,242]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
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
require("fs").writeFileSync("./experiments/reduce/reduceRandom/test43.json",JSON.stringify({"baseObjects":serialize([base_0]),"returnObjects":serialize([r_0]),"callbackArgs":callbackArguments}))
},300)