





var callbackArguments = [];
var argument1 = function (value, key) {
 callbackArguments.push(arguments) 

    ctrlLocals[key] = tplAndVars[resolveIter++];
};
var argument2 = "";
var argument3 = function (newRow) {
 callbackArguments.push(arguments) 

    cloneTest.push(newRow);
    list1Model.push(newRow);
};
var argument4 = false;
var argument5 = function (value, key) {
 callbackArguments.push(arguments) 

    if (angular.element(value).is('option')) {
        array.push(optionToData(angular.element(value)));
    } else if (angular.element(value).is('optgroup')) {
        var group = optionGroupToData(angular.element(value));
        angular.forEach(angular.element(value).children(), function (gval, gkey) {
            array.push(optionToData(angular.element(gval), group));
        });
    }
};
var argument6 = 7.095746720868792e+307;
var argument7 = function (d) {
 callbackArguments.push(arguments) 

    assert.strictEqual(c, d.cluster);
    c.forEach(function (e) {
        assert.ok(spec.metric(d, e) < spec.clusterDistance * 2);
    });
};
var argument8 = "T3-";
var base_0 = ["@n","N","fW","?+",",0","M","zf","Pus"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["@n","N","fW","?+",",0","M","zf","Pus"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["@n","N","fW","?+",",0","M","zf","Pus"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["@n","N","fW","?+",",0","M","zf","Pus"]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test953.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)