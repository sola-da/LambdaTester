





var callbackArguments = [];
var argument1 = function (relatedEntity) {
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
var argument2 = null;
var argument3 = function (gMarker) {
 callbackArguments.push(arguments) 

    gMarker.isDrawn = false;
    return _this.remove(gMarker, true);
};
var argument4 = function (key) {
 callbackArguments.push(arguments) 

    delete self.remote[key];
};
var argument5 = r_1;
var argument6 = function (callback, event) {
 callbackArguments.push(arguments) 

    if (networkEvents.indexOf(String(event)) >= 0) {
        network.on(event, callback);
    }
};
var argument7 = r_2;
var argument8 = "y";
var base_0 = ["^N5g!c","D","a","v"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["^N5g!c","D","a","v"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["^N5g!c","D","a","v"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["^N5g!c","D","a","v"]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test338.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)