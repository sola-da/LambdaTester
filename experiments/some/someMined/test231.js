





var callbackArguments = [];
var argument1 = function (t) {
 callbackArguments.push(arguments) 

    return typeof t === 'object';
};
var argument2 = function (es) {
 callbackArguments.push(arguments) 

    return e.entityAspect.entityState === es;
};
var argument3 = r_0;
var argument4 = function (r) {
 callbackArguments.push(arguments) 

    return comparePoints(r.start, start) <= 0 && comparePoints(r.end, end) >= 0;
};
var argument5 = ["SP0$","m",">!"];
var argument6 = [-1,49];
var argument7 = function (route) {
 callbackArguments.push(arguments) 

    return route.props.name === routeName;
};
var base_0 = [714,100,705,655]
var r_0= undefined
try {
r_0 = base_0.some(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [714,100,705,655]
var r_1= undefined
try {
r_1 = base_1.some(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [714,100,705,655]
var r_2= undefined
try {
r_2 = base_2.some(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [714,100,705,655]
var r_3= undefined
try {
r_3 = base_3.some(argument7)
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
require("fs").writeFileSync("./experiments/some/someMined/test231.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)