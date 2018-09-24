





var callbackArguments = [];
var argument1 = function (err, docs) {
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
var argument2 = {"59":893,"1.0782087277772865e+308":1.240602923391889e+308,"9.203585517299925e+307":49,"1.660787653066699e+308":403,"":"B","ht1R":"","1.3276466738196832e+308":""};
var argument3 = function (err, apiKeys) {
 callbackArguments.push(arguments) 

    assert(!err);
    assert(apiKeys.length === 1);
    assert(apiKeys[0].owner === fixtures.models.user.id);
    done();
};
var argument4 = function (err, docs) {
 callbackArguments.push(arguments) 

    assert.isNull(err);
    docs.length.should.equal(1);
    Object.keys(docs[0]).length.should.equal(2);
    docs[0].somedata.should.equal('ok');
    assert.isDefined(docs[0]._id);
    done();
};
var argument5 = r_2;
var argument6 = function (err, docs) {
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
var argument7 = true;
var base_0 = [783,893,122,595,403,100]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [783,893,122,595,403,100]
var r_1= undefined
try {
r_1 = base_1.find(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [783,893,122,595,403,100]
var r_2= undefined
try {
r_2 = base_2.find(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [783,893,122,595,403,100]
var r_3= undefined
try {
r_3 = base_3.find(argument6,argument7)
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
require("fs").writeFileSync("./experiments/find/findMined/test867.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)