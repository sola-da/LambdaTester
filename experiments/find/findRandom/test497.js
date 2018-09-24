





var callbackArguments = [];
var argument1 = {"0":1.295636352918741e+307,"126":"L","":-1,"3.7577106625090977e+307":"5x","1.4814716110351425e+308":"","1.7578283603922751e+308":"X","7.26019162839447e+307":"","S":""};
var argument2 = "";
var base_0 = ["b]#",893,"PAa","$P%"]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2)
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
require("fs").writeFileSync("./experiments/find/findRandom/test497.json",JSON.stringify({"baseObjects":serialize([base_0]),"returnObjects":serialize([r_0]),"callbackArgs":callbackArguments}))
},300)