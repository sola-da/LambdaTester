





var callbackArguments = [];
var argument1 = function (o) {
 callbackArguments.push(arguments) 

    return o.ServerOrderId === order;
};
var argument2 = function (err, results) {
 callbackArguments.push(arguments) 

    expect(results).to.exist;
    expect(results.length).to.equal[0];
    done();
};
var argument3 = null;
var argument4 = true;
var argument5 = function (err, docs) {
 callbackArguments.push(arguments) 

    assert.isNull(err);
    docs.length.should.equal(1);
    docs[0].hello.should.equal(badString);
    done();
};
var argument6 = null;
var argument7 = null;
var argument8 = function (err, docs) {
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
var argument9 = r_3;
var argument10 = 8.232668324540544e+307;
var base_0 = [607,0,122,1.7976931348623157e+308,213,157,-100]
var r_0= undefined
try {
r_0 = base_0.find(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [607,0,122,1.7976931348623157e+308,213,157,-100]
var r_1= undefined
try {
r_1 = base_1.find(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [607,0,122,1.7976931348623157e+308,213,157,-100]
var r_2= undefined
try {
r_2 = base_2.find(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [607,0,122,1.7976931348623157e+308,213,157,-100]
var r_3= undefined
try {
r_3 = base_3.find(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/find/findMined/test251.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)