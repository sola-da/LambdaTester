/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = function (err) {
 callbackArguments.push(arguments) 

    destination.currencyChoices = ['STR'];
    return destination;
};
var argument2 = null;
var argument3 = null;
var argument4 = function (err) {
 callbackArguments.push(arguments) 

    done();
};
var argument5 = {"122":"","893":-100,"969":"","":122,"F|7":"","1.6390268341825868e+308":1.4299306810659986e+307};
var argument6 = p1;
var argument7 = function (err) {
 callbackArguments.push(arguments) 

    expect(err).to.exist;
    done();
};
var argument8 = function (oldEntity) {
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
var argument9 = false;
var argument10 = [607,705];
var base_0 = p2
var r_0= undefined
try {
r_0 = base_0.catch(argument1,argument2,argument3)
}
catch(e) {
r_0= e.message
}
var base_1 = p1
var r_1= undefined
try {
r_1 = base_1.catch(argument4,argument5,argument6)
}
catch(e) {
r_1= e.message
}
var base_2 = p2
var r_2= undefined
try {
r_2 = base_2.catch(argument7)
}
catch(e) {
r_2= e.message
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.then(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test914.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)