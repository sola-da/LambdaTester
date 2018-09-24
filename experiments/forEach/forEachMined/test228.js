





var callbackArguments = [];
var argument1 = function (d) {
 callbackArguments.push(arguments) 

    if (d[primaryAxis.position + 'Bound'] < bounds.min) {
        bounds.min = d[primaryAxis.position + 'Bound'];
    }
    if (d[primaryAxis.position + 'Bound'] > bounds.max) {
        bounds.max = d[primaryAxis.position + 'Bound'];
    }
};
var argument2 = 460;
var argument3 = function (name) {
 callbackArguments.push(arguments) 

    var desc = webshims.defineNodeNameProperty(name, 'checkValidity', {
            prop: {
                value: function () {
                    isCheckValidity = true;
                    var ret = desc.prop._supvalue.apply(this, arguments);
                    isCheckValidity = false;
                    return ret;
                }
            }
        });
};
var argument4 = r_1;
var argument5 = function (key) {
 callbackArguments.push(arguments) 

    keys.push(key);
};
var argument6 = function (e) {
 callbackArguments.push(arguments) 

    var group = entityGroupMap[e.entityType.name];
    if (!group) {
        group = {};
        group.entityType = e.entityType;
        group._entities = [];
        entityGroupMap[e.entityType.name] = group;
    }
    group._entities.push(e);
};
var argument7 = true;
var argument8 = 1.362585769417458e+308;
var base_0 = [783,-100,893,59,49,627,"q>uZ","+9","<i"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [783,-100,893,59,49,627,"q>uZ","+9","<i"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [783,-100,893,59,49,627,"q>uZ","+9","<i"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [783,-100,893,59,49,627,"q>uZ","+9","<i"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test228.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)