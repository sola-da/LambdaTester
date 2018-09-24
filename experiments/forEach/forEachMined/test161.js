





var callbackArguments = [];
var argument1 = function (l) {
 callbackArguments.push(arguments) 

    return google.maps.event.removeListener(l);
};
var argument2 = function cb_forEach(ruleJSON) {
 callbackArguments.push(arguments) 

    var rule = new Rule(ruleJSON);
    if (!this.rules.some(function cb_some(r) {
            return deepEqual(r, rule);
        })) {
        this.rules.push(rule);
    }
};
var argument3 = {"1.4596588547220522e+308":"a","":460,"1.2960284157390719e+308":"","1.1975773311661912e+308":1.1893031039768922e+308};
var argument4 = function (key) {
 callbackArguments.push(arguments) 

    newSymbol[key] = propertiesObj[key];
};
var argument5 = function (el, i) {
 callbackArguments.push(arguments) 

    if (matchesSelector && matchesSelector.call(el, ':focus'))
        index = i;
};
var base_0 = ["0p","T","=Ma","-iy","="]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["0p","T","=Ma","-iy","="]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["0p","T","=Ma","-iy","="]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["0p","T","=Ma","-iy","="]
var r_3= undefined
try {
r_3 = base_3.forEach(argument5)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test161.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)