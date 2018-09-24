





var callbackArguments = [];
var argument1 = function (o) {
 callbackArguments.push(arguments) 

    return o.ServerOrderId === order;
};
var argument2 = function (doc) {
 callbackArguments.push(arguments) 

    return doc.z === '2';
};
var argument3 = function (key) {
 callbackArguments.push(arguments) 

    var stop = iter(key, self.getPackageVersions(key));
    return stop;
};
var argument4 = null;
var argument5 = function (err, docs) {
 callbackArguments.push(arguments) 

    var d1 = _.find(docs, function (doc) {
            return doc._id === doc1._id;
        }), d2 = _.find(docs, function (doc) {
            return doc._id === doc2._id;
        }), d3 = _.find(docs, function (doc) {
            return doc._id === doc3._id;
        });
    d1.a.should.equal(1);
    assert.isUndefined(d2);
    d3.a.should.equal(5);
    done();
};
var argument6 = {"714":1.6765868423149165e+308,"1.382034702622121e+308":3.0943104169474083e+307,"1.0864805633994184e+308":1.1363402760518731e+308};
var base_0 = [49]
var r_0= undefined
try {
r_0 = base_0.find(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [49]
var r_1= undefined
try {
r_1 = base_1.find(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [49]
var r_2= undefined
try {
r_2 = base_2.find(argument3,argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [49]
var r_3= undefined
try {
r_3 = base_3.find(argument5,argument6)
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
require("fs").writeFileSync("./experiments/find/findMined/test967.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)