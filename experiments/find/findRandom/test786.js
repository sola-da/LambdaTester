





var callbackArguments = [];
var argument1 = {"843":1.7976931348623157e+308,"4.405682042977242e+307":"","9.208293607037024e+307":"8","%":"","WXLgKSQ":"eH5","yR":126,"":"",":4":""};
var argument2 = {"893":"","":"8A","5.988017183166622e+307":"C","1.146039583086744e+308":"","7.460429978305074e+306":"!","L":893,"-100":6.187638782142163e+307,"1.4232315858213301e+308":"C"};
var argument3 = null;
var base_0 = ["LL",823,122,"h$B;",157,"P","3gJ","r#"]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
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
require("fs").writeFileSync("./experiments/find/findRandom/test786.json",JSON.stringify({"baseObjects":serialize([base_0]),"returnObjects":serialize([r_0]),"callbackArgs":callbackArguments}))
},300)