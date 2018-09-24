





var callbackArguments = [];
var argument1 = function (np) {
 callbackArguments.push(arguments) 

    if (np.isScalar) {
        mergeRelatedEntity(mc, np, targetEntity, node);
    } else {
        mergeRelatedEntities(mc, np, targetEntity, node);
    }
};
var argument2 = null;
var argument3 = function (entity) {
 callbackArguments.push(arguments) 

    var ea = entity.entityAspect;
    if (!ea)
        return;
    ea._markAsLoaded(propName);
    if (propNames.length === 1)
        return;
    var next = entity.getProperty(propName);
    if (!next)
        return;
    if (!next.arrayChanged)
        next = [next];
    markLoadedNavPath(next, propNames.slice(1));
};
var argument4 = function (file) {
 callbackArguments.push(arguments) 

    code.push(file.content, 'steal.loaded(\'' + file.rootSrc + '\')');
};
var argument5 = null;
var argument6 = function (topic) {
 callbackArguments.push(arguments) 

    if (!regex.test(topic)) {
        topicCounts[topic] = count;
    }
};
var argument7 = r_2;
var argument8 = true;
var base_0 = ["=zp","v"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["=zp","v"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["=zp","v"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["=zp","v"]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test183.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)