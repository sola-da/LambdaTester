





var callbackArguments = [];
var argument1 = function (interceptorFactory) {
 callbackArguments.push(arguments) 

    reversedInterceptors.unshift(isString(interceptorFactory) ? $injector.get(interceptorFactory) : $injector.invoke(interceptorFactory));
};
var argument2 = function (method) {
 callbackArguments.push(arguments) 

    console[method] = this.bind(console[method], console);
};
var argument3 = function (child) {
 callbackArguments.push(arguments) 

    child.updateDom(options);
};
var argument4 = "";
var argument5 = null;
var argument6 = function (v) {
 callbackArguments.push(arguments) 

    relatedEntity = v.entityAspect ? v : navEntityType.createEntity(v);
    relatedEntities.push(relatedEntity);
};
var base_0 = ["$mP",705,627]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["$mP",705,627]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["$mP",705,627]
var r_2= undefined
try {
r_2 = base_2.forEach(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["$mP",705,627]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test750.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)