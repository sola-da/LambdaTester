





var callbackArguments = [];
var argument1 = function (value) {
 callbackArguments.push(arguments) 

    return value == null ? '' : value + '';
};
var argument2 = function (i) {
 callbackArguments.push(arguments) 

    return i.all(order);
};
var argument3 = function (result) {
 callbackArguments.push(arguments) 

    return new compute.Image(self, result);
};
var argument4 = "";
var argument5 = [82,627,823,403,969,126,25];
var argument6 = function (key) {
 callbackArguments.push(arguments) 

    return encodeURIComponent(key) + '=' + encodeURIComponent(params[key]);
};
var argument7 = null;
var base_0 = [0,627,"(",5e-324,";",1.7976931348623157e+308,59,"w","L",122]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [0,627,"(",5e-324,";",1.7976931348623157e+308,59,"w","L",122]
var r_1= undefined
try {
r_1 = base_1.map(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.map(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.map(argument6,argument7)
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
require("fs").writeFileSync("./experiments/map/mapMined/test460.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)