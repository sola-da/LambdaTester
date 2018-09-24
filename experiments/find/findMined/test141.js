





var callbackArguments = [];
var argument1 = function (subModelTypeName, typeValue) {
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
var argument2 = function (err, docs) {
 callbackArguments.push(arguments) 

    assert.isNull(err);
    docs.length.should.equal(1);
    var doc = docs[0];
    Object.keys(doc).length.should.equal(3);
    doc.hello.should.equal('world');
    doc.bloup.should.equal(3);
    done();
};
var argument3 = false;
var argument4 = function (err, docs) {
 callbackArguments.push(arguments) 

    assert.isNull(err);
    docs.length.should.equal(1);
    var doc = docs[0];
    Object.keys(doc).length.should.equal(4);
    doc.cac.should.equal('rrr');
    doc.hello.should.equal('world');
    doc.bloup.should.equal(3);
    done();
};
var argument5 = r_0;
var argument6 = "";
var argument7 = function (plugin) {
 callbackArguments.push(arguments) 

    return plugin.name === name;
};
var argument8 = r_0;
var base_0 = ["|","u#rh","+","a","r","6O","n"]
var r_0= undefined
try {
r_0 = base_0.find(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["|","u#rh","+","a","r","6O","n"]
var r_1= undefined
try {
r_1 = base_1.find(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["|","u#rh","+","a","r","6O","n"]
var r_2= undefined
try {
r_2 = base_2.find(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["|","u#rh","+","a","r","6O","n"]
var r_3= undefined
try {
r_3 = base_3.find(argument7,argument8)
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
require("fs").writeFileSync("./experiments/find/findMined/test141.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)