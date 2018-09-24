





var callbackArguments = [];
var argument1 = function () {
 callbackArguments.push(arguments) 

    var hFor = this.attributes['for'] || {};
    return !hFor.specified || hFor.value == id;
};
var argument2 = function () {
 callbackArguments.push(arguments) 

    return this.nodeName === name;
};
var argument3 = true;
var argument4 = function (d) {
 callbackArguments.push(arguments) 

    return fetchValue(vars, d, vars.id.value) == vars.focus.value[0];
};
var argument5 = "c";
var argument6 = 1.360504603159235e+308;
var argument7 = function (v) {
 callbackArguments.push(arguments) 

    return !(v instanceof Comment);
};
var base_0 = ["fW","^g$",100,893,823,213,"#V","NUXx"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["fW","^g$",100,893,823,213,"#V","NUXx"]
var r_1= undefined
try {
r_1 = base_1.filter(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["fW","^g$",100,893,823,213,"#V","NUXx"]
var r_2= undefined
try {
r_2 = base_2.filter(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["fW","^g$",100,893,823,213,"#V","NUXx"]
var r_3= undefined
try {
r_3 = base_3.filter(argument7)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test10.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)