





var callbackArguments = [];
var argument1 = function (className) {
 callbackArguments.push(arguments) 

    var a = map[className];
    if (ignoreCase)
        a = a.toLowerCase();
    var list = a.split(splitChar || '|');
    for (var i = list.length; i--;)
        keywords[list[i]] = className;
};
var argument2 = function (date) {
 callbackArguments.push(arguments) 

    model.compareThings(date, stuff).should.equal(-1);
    model.compareThings(stuff, date).should.equal(1);
};
var argument3 = null;
var argument4 = function (v) {
 callbackArguments.push(arguments) 

    v.queue.shift();
};
var argument5 = false;
var argument6 = false;
var argument7 = function (v) {
 callbackArguments.push(arguments) 

    relatedEntity = v.entityAspect ? v : navEntityType.createEntity(v);
    relatedEntities.push(relatedEntity);
};
var argument8 = 403;
var base_0 = [705,82,823,714,1.7976931348623157e+308,618]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [705,82,823,714,1.7976931348623157e+308,618]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [705,82,823,714,1.7976931348623157e+308,618]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [705,82,823,714,1.7976931348623157e+308,618]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test644.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)