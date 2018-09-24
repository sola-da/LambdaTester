





var callbackArguments = [];
var argument1 = function (name) {
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
var argument2 = r_0;
var argument3 = function (relatedEntity) {
 callbackArguments.push(arguments) 

    if (typeof relatedEntity === 'function') {
        mc.deferredFns.push(function () {
            relatedEntity = relatedEntity();
            updateRelatedEntityInCollection(relatedEntity, originalRelatedEntities, targetEntity, inverseProperty);
        });
    } else {
        updateRelatedEntityInCollection(relatedEntity, originalRelatedEntities, targetEntity, inverseProperty);
    }
};
var argument4 = null;
var argument5 = function (file) {
 callbackArguments.push(arguments) 

    expanded.push(file);
};
var argument6 = function (id) {
 callbackArguments.push(arguments) 

    _counter[id]--;
    if (_counter[id] == 0) {
        this.globals[id].deactivate();
    }
};
var argument7 = [242,242];
var argument8 = {"403":"","595":126,"":893,"R":"K","1.2066684398691096e+308":"","3.377960715099946e+307":157,"8.270672171154207e+307":"8sR","Mv5@;":"s"};
var base_0 = [100,655,-100]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [100,655,-100]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [100,655,-100]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [100,655,-100]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test289.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)