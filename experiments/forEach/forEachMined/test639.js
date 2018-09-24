





var callbackArguments = [];
var argument1 = function (path, i) {
 callbackArguments.push(arguments) 

    result[that._pathNames[i]] = getPropertyPathValue(entity, path);
};
var argument2 = null;
var argument3 = function (e) {
 callbackArguments.push(arguments) 

    callback.call(e.target, e.attributeName);
};
var argument4 = function (scenario) {
 callbackArguments.push(arguments) 

    var _it = scenario.annotations.Pending ? xit : it;
    _it(scenario.title, function () {
        next(scenario);
    });
};
var argument5 = true;
var argument6 = "lPt+";
var argument7 = function (path) {
 callbackArguments.push(arguments) 

    var module = require('./' + path);
    for (var i in module) {
        classes[i] = module[i];
    }
};
var argument8 = null;
var base_0 = [460,82,100,627,705,49,126,-1]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [460,82,100,627,705,49,126,-1]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [460,82,100,627,705,49,126,-1]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [460,82,100,627,705,49,126,-1]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7,argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test639.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)