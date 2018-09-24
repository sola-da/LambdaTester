





var callbackArguments = [];
var argument1 = {"":""};
var argument2 = {"607":"","1.586015153527609e+308":157,"":6.000342534304103e+307,"6.502140054313662e+306":"0","7.87935978159773e+307":1.0323484754541868e+308,"-1":242,"#":3.318700490872629e+307,"=H":"","[Za,":1.3421978449762067e+308,"6.898783575425047e+307":"^d"};
var base_0 = [122,460,0,213,893,783,49]
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
require("fs").writeFileSync("./experiments/find/findRandom/test839.json",JSON.stringify({"baseObjects":serialize([base_0]),"returnObjects":serialize([r_0]),"callbackArgs":callbackArguments}))
},300)