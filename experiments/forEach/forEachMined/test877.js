





var callbackArguments = [];
var argument1 = function (deregisterWatch) {
 callbackArguments.push(arguments) 

    deregisterWatch();
};
var argument2 = true;
var argument3 = true;
var argument4 = function (itemData) {
 callbackArguments.push(arguments) 

    var itemScene = groupScene.createItem({ source: itemData }), itemValue = axis.domainItemValue(itemData);
    itemScene.color = colorScale(itemValue);
};
var argument5 = null;
var argument6 = null;
var argument7 = function (node) {
 callbackArguments.push(arguments) 

    var registrations = registrationsTable.get(node);
    if (!registrations)
        return;
    registrations.forEach(function (registration) {
        if (registration.observer === observer)
            registration.removeTransientObservers();
    });
};
var argument8 = function (i, next) {
 callbackArguments.push(arguments) 

    cache.add('test-job', i, [[
            'foo',
            'bar',
            'baz',
            'buzz',
            i
        ].join('/')], next);
};
var base_0 = [627,122,893,893,607,618,157,122,126]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [627,122,893,893,607,618,157,122,126]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [627,122,893,893,607,618,157,122,126]
var r_2= undefined
try {
r_2 = base_2.forEach(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [627,122,893,893,607,618,157,122,126]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test877.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)