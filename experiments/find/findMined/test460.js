





var callbackArguments = [];
var argument1 = function (err, docs) {
 callbackArguments.push(arguments) 

    docs.length.should.equal(1);
    Object.keys(docs[0]).length.should.equal(2);
    docs[0].a.should.equal(2);
    docs[0]._id.should.equal(newDoc._id);
    done();
};
var argument2 = function (err, docs) {
 callbackArguments.push(arguments) 

    docs.sort(function (a, b) {
        return a.a - b.a;
    });
    docs.length.should.equal(2);
    _.isEqual(docs[0], {
        _id: doc1._id,
        a: 1,
        hello: 'world'
    }).should.equal(true);
    _.isEqual(docs[1], {
        _id: doc3._id,
        a: 3,
        hello: 'moto'
    }).should.equal(true);
    done();
};
var argument3 = false;
var argument4 = 618;
var argument5 = function (err, docs) {
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
var argument6 = null;
var argument7 = function (key) {
 callbackArguments.push(arguments) 

    var stop = iter(key, self.getPackageVersions(key));
    return stop;
};
var argument8 = r_2;
var base_0 = [-1,25,714,82,627,-1,595,705,893,655]
var r_0= undefined
try {
r_0 = base_0.find(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-1,25,714,82,627,-1,595,705,893,655]
var r_1= undefined
try {
r_1 = base_1.find(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-1,25,714,82,627,-1,595,705,893,655]
var r_2= undefined
try {
r_2 = base_2.find(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-1,25,714,82,627,-1,595,705,893,655]
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
require("fs").writeFileSync("./experiments/find/findMined/test460.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)