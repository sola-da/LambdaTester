





var callbackArguments = [];
var argument1 = function (doc) {
 callbackArguments.push(arguments) 

    return doc.z === '2';
};
var argument2 = function (err, user) {
 callbackArguments.push(arguments) 

    if (err)
        err;
    done(err, user);
};
var argument3 = function (err, docs) {
 callbackArguments.push(arguments) 

    assert.deepEqual(doc1, _.find(docs, function (d) {
        return d._id === doc1._id;
    }));
    assert.deepEqual(doc2, _.find(docs, function (d) {
        return d._id === doc2._id;
    }));
    done();
};
var argument4 = function (subModelTypeName, typeValue) {
 callbackArguments.push(arguments) 

    var subModelType = this.getObjectByName(subModelTypeName);
    if (modelType === subModelType) {
        subModelDef.superModelType._subModels[typeValue] = modelType;
        modelType._superModel = subModelDef.superModelType;
        modelType._subModelTypeValue = typeValue;
        modelType._subModelTypeAttribute = subModelDef.superModelType.prototype.subModelTypeAttribute;
        return true;
    }
};
var base_0 = [460,714,82,100,49]
var r_0= undefined
try {
r_0 = base_0.find(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [460,714,82,100,49]
var r_1= undefined
try {
r_1 = base_1.find(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [460,714,82,100,49]
var r_2= undefined
try {
r_2 = base_2.find(argument3)
}
catch(e) {
r_2= "Error"
}
var base_3 = [460,714,82,100,49]
var r_3= undefined
try {
r_3 = base_3.find(argument4)
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
require("fs").writeFileSync("./experiments/find/findMined/test33.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)