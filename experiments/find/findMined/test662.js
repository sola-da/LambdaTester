





var callbackArguments = [];
var argument1 = function (err, docs) {
 callbackArguments.push(arguments) 

    docs[0].hello = 'changed';
    d.findOne({ a: 2 }, function (err, doc) {
        doc.hello.should.equal('world');
        done();
    });
};
var argument2 = function (doc) {
 callbackArguments.push(arguments) 

    return doc.a === 5;
};
var argument3 = function (err, docs) {
 callbackArguments.push(arguments) 

    assert.isNull(err);
    docs.length.should.equal(1);
    var doc = docs[0];
    Object.keys(doc).length.should.equal(3);
    doc.hello.should.equal('world');
    doc.bloup.should.equal('blap');
    done();
};
var argument4 = false;
var argument5 = null;
var argument6 = function (doc) {
 callbackArguments.push(arguments) 

    return doc._id === newDoc2._id;
};
var argument7 = "]";
var argument8 = null;
var base_0 = ["}@","dm"]
var r_0= undefined
try {
r_0 = base_0.find(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["}@","dm"]
var r_1= undefined
try {
r_1 = base_1.find(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["}@","dm"]
var r_2= undefined
try {
r_2 = base_2.find(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["}@","dm"]
var r_3= undefined
try {
r_3 = base_3.find(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/find/findMined/test662.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)