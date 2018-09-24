





var callbackArguments = [];
var argument1 = function (c, i) {
 callbackArguments.push(arguments) 

    var test = d3plus.util.copy(d);
    test.geometry.coordinates = [test.geometry.coordinates[i]];
    var a = vars.path.area(test);
    if (a == areas[areas.length - 1]) {
        largest.geometry.coordinates = test.geometry.coordinates;
    }
    return a >= d3.quantile(areas, 0.9);
};
var argument2 = function (value, index, array) {
 callbackArguments.push(arguments) 

    return !predicate(value, index, array);
};
var argument3 = "";
var argument4 = function (item) {
 callbackArguments.push(arguments) 

    return item['cols'];
};
var argument5 = function () {
 callbackArguments.push(arguments) 

    for (var i = 0, l = targets.length; i < l; i++) {
        if (jQuery.contains(this, targets[i])) {
            return true;
        }
    }
};
var argument6 = r_1;
var argument7 = null;
var base_0 = [-1,213,"`=b",618]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-1,213,"`=b",618]
var r_1= undefined
try {
r_1 = base_1.filter(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-1,213,"`=b",618]
var r_2= undefined
try {
r_2 = base_2.filter(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-1,213,"`=b",618]
var r_3= undefined
try {
r_3 = base_3.filter(argument5,argument6,argument7)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test29.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)