/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = p1;
var argument2 = function (oldEntity) {
 callbackArguments.push(arguments) 

    validationService.validateEntity(crudId, _.extend(oldEntity, entity));
    return getParentReferenceValue().then(function (parentReferenceValue) {
        var bfField = backReferenceField();
        if (!_.isUndefined(entity[bfField]) && !_.isEqual(entity[bfField], parentReferenceValue)) {
            entity[bfField] = parentReferenceValue;
        }
        return storageDriver.updateEntity(entityDescriptionService.tableDescription(crudId), entity);
    });
};
var argument3 = {"0":157,"607":"q&:","":893,"4.851341339393063e+307":"]","2.4317743827313965e+307":2.0986165717508823e+307,"}#u":1.7444818841836373e+308,"4.364101042681755e+306":1.6765432452191236e+307,"1.3636977680355524e+308":"Ir"};
var argument4 = function (result) {
 callbackArguments.push(arguments) 

    if (!resources.components[result.stage.component.name])
        return result.content;
    return resources.components[result.stage.component.name].content.get(result.content, result.stage, result.project, result.cycle);
};
var argument5 = p1;
var argument6 = function (results) {
 callbackArguments.push(arguments) 

    try {
        assertOccurrences(results, [
            {
                start: 4,
                end: 5
            },
            {
                start: 15,
                end: 16
            },
            {
                start: 26,
                end: 27
            }
        ]);
    } finally {
        tearDown();
    }
};
var argument7 = 969;
var argument8 = function (els) {
 callbackArguments.push(arguments) 

    expect(els.length).to.be(event.get('previousVideoEmbeds').length);
};
var argument9 = "";
var base_0 = p1
var r_0= undefined
try {
r_0 = base_0.then(argument1,argument2)
}
catch(e) {
r_0= e.message
}
var base_1 = p1
var r_1= undefined
try {
r_1 = base_1.then(argument3,argument4,argument5)
}
catch(e) {
r_1= e.message
}
var base_2 = p2
var r_2= undefined
try {
r_2 = base_2.then(argument6)
}
catch(e) {
r_2= e.message
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.then(argument7,argument8,argument9)
}
catch(e) {
r_3= e.message
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test187.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)