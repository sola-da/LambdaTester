





var callbackArguments = [];
var argument1 = function (p) {
 callbackArguments.push(arguments) 

    return p && p.length > 0;
};
var argument2 = function (user) {
 callbackArguments.push(arguments) 

    return user.p('name') === 'uniquefind';
};
var argument3 = function (child) {
 callbackArguments.push(arguments) 

    return child !== element;
};
var argument4 = r_1;
var argument5 = r_1;
var argument6 = function (match) {
 callbackArguments.push(arguments) 

    return !hasMatch(nextMatches, match);
};
var argument7 = null;
var argument8 = {"100":-1,"627":"h","!p":1.7337205830402562e+308,"":"","1.6611521623160232e+308":1.5986440118448503e+308,"5.580251427134623e+307":"*Y","1.6645707170836928e+308":595};
var base_0 = [49,122]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.filter(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.filter(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.filter(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test96.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)