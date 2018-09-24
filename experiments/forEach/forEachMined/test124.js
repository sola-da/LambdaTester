





var callbackArguments = [];
var argument1 = function (value, index) {
 callbackArguments.push(arguments) 

    model.push(value.id);
};
var argument2 = r_0;
var argument3 = function (et) {
 callbackArguments.push(arguments) 

    var entityType = parseCsdlEntityType(et, schema, metadataStore);
};
var argument4 = 9.754601669564732e+307;
var argument5 = function (require) {
 callbackArguments.push(arguments) 

    value.push(getControllers(require, $element));
};
var argument6 = function (d) {
 callbackArguments.push(arguments) 

    try {
        d.center();
        assert.ok(true);
    } catch (e) {
        assert.ok(false);
    }
    cluster.forEach(function (e) {
        if (d !== e) {
            assert.ok(spec.metric(d.center(), e.center()) > spec.clusterDistance);
        }
    });
    singlet.forEach(function (e) {
        assert.ok(spec.metric(d.center(), e) > spec.clusterDistance);
    });
};
var argument7 = 783;
var base_0 = ["I","&<6-"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["I","&<6-"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["I","&<6-"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["I","&<6-"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6,argument7)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test124.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)