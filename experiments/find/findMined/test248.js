





var callbackArguments = [];
var argument1 = function (err, docs) {
 callbackArguments.push(arguments) 

    docs.sort(function (a, b) {
        return a.a - b.a;
    });
    docs.length.should.equal(3);
    _.isEqual(docs[0], {
        _id: doc1._id,
        a: 1,
        hello: 'changed'
    }).should.equal(true);
    _.isEqual(docs[1], {
        _id: doc2._id,
        a: 2,
        hello: 'changed'
    }).should.equal(true);
    _.isEqual(docs[2], {
        _id: doc3._id,
        a: 5,
        hello: 'pluton'
    }).should.equal(true);
    done();
};
var argument2 = function (err, docs) {
 callbackArguments.push(arguments) 

    done('Find should not be executed since autoload failed');
};
var argument3 = [618,49,"QQ-","N%",705,"+7E",242,595,969,783];
var argument4 = function (err, ids) {
 callbackArguments.push(arguments) 

    t.same(ids.length, 1, 'Did not find the correct number of ids for non-incremental id model.');
    t.same(ids[0], self.userIds[1], 'Did not find the correct id for non-incremental id model.');
    t.done();
};
var argument5 = function (doc) {
 callbackArguments.push(arguments) 

    return doc._id === doc1._id;
};
var base_0 = ["[1Nc$","j:ec","d","eHB","r","zC5$"]
var r_0= undefined
try {
r_0 = base_0.find(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["[1Nc$","j:ec","d","eHB","r","zC5$"]
var r_1= undefined
try {
r_1 = base_1.find(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["[1Nc$","j:ec","d","eHB","r","zC5$"]
var r_2= undefined
try {
r_2 = base_2.find(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["[1Nc$","j:ec","d","eHB","r","zC5$"]
var r_3= undefined
try {
r_3 = base_3.find(argument5)
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
require("fs").writeFileSync("./experiments/find/findMined/test248.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)