





var callbackArguments = [];
var argument1 = function (v, i) {
 callbackArguments.push(arguments) 

    return v === a2[i];
};
var argument2 = null;
var argument3 = [823,403,705,126,893];
var argument4 = function () {
 callbackArguments.push(arguments) 

    context = this;
};
var argument5 = function (x) {
 callbackArguments.push(arguments) 

    return x;
};
var argument6 = "";
var argument7 = function (v1) {
 callbackArguments.push(arguments) 

    return prevContext.fn(prevContext, v1);
};
var base_0 = ["u","|Cz)rf",213,59,"[5"]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["u","|Cz)rf",213,59,"[5"]
var r_1= undefined
try {
r_1 = base_1.every(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["u","|Cz)rf",213,59,"[5"]
var r_2= undefined
try {
r_2 = base_2.every(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["u","|Cz)rf",213,59,"[5"]
var r_3= undefined
try {
r_3 = base_3.every(argument7)
}
catch(e) {
r_3= "Error"
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
require("fs").writeFileSync("./experiments/every/everyMined/test723.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)