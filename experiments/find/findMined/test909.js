





var callbackArguments = [];
var argument1 = function (err, docs) {
 callbackArguments.push(arguments) 

    docs.length.should.equal(1);
    _.isEqual(docs[0], {
        _id: doc2._id,
        a: 2,
        hello: 'earth'
    }).should.equal(true);
    done();
};
var argument2 = function (plugin) {
 callbackArguments.push(arguments) 

    return plugin.name === name;
};
var argument3 = false;
var argument4 = 2.5904966959316607e+307;
var argument5 = function (err, mappings) {
 callbackArguments.push(arguments) 

    if (err) {
        if (callback)
            callback(err);
        return;
    }
    return mappings.map(function (m) {
        return m.principalId;
    });
};
var argument6 = {"8":"d","618":"","":"h",";":627,"9.643093834316737e+307":")D","1.1734734388724397e+307":"Y{tNO","g":1.7976931348623157e+308};
var argument7 = 9.492036650764367e+307;
var argument8 = function (err, docs) {
 callbackArguments.push(arguments) 

    docs.length.should.equal(1);
    d.getAllData().length.should.equal(1);
    d.indexes._id.getMatching(doc1._id).length.should.equal(1);
    d.indexes.a.getMatching(1).length.should.equal(1);
    d.indexes._id.getMatching(doc1._id)[0].should.equal(d.indexes.a.getMatching(1)[0]);
    d.indexes.a.getMatching(2).length.should.equal(0);
    done();
};
var argument9 = r_0;
var base_0 = ["G","%","Qt9","(","8mN","_nU","}","{","Fgv"]
var r_0= undefined
try {
r_0 = base_0.find(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["G","%","Qt9","(","8mN","_nU","}","{","Fgv"]
var r_1= undefined
try {
r_1 = base_1.find(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["G","%","Qt9","(","8mN","_nU","}","{","Fgv"]
var r_2= undefined
try {
r_2 = base_2.find(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["G","%","Qt9","(","8mN","_nU","}","{","Fgv"]
var r_3= undefined
try {
r_3 = base_3.find(argument8,argument9)
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
require("fs").writeFileSync("./experiments/find/findMined/test909.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)