





var callbackArguments = [];
var argument1 = function (type) {
 callbackArguments.push(arguments) 

    return tokenTypes.indexOf(type) !== -1;
};
var argument2 = null;
var argument3 = null;
var argument4 = function (x) {
 callbackArguments.push(arguments) 

    return x.length > 0;
};
var argument5 = null;
var argument6 = 5.025484007053388e+307;
var argument7 = function (other) {
 callbackArguments.push(arguments) 

    return _.indexOf(other, item) >= 0;
};
var argument8 = function (type) {
 callbackArguments.push(arguments) 

    return tokenTypes.indexOf(type) !== -1;
};
var argument9 = true;
var argument10 = {"1.1160483267937641e+308":"","5kRy":627,"rQ":"Y","":"T|","w":607};
var base_0 = [1.7976931348623157e+308,122,59,705,82]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [1.7976931348623157e+308,122,59,705,82]
var r_1= undefined
try {
r_1 = base_1.every(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [1.7976931348623157e+308,122,59,705,82]
var r_2= undefined
try {
r_2 = base_2.every(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [1.7976931348623157e+308,122,59,705,82]
var r_3= undefined
try {
r_3 = base_3.every(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/every/everyMined/test200.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)