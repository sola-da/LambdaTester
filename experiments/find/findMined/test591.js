





var callbackArguments = [];
var argument1 = function (err, docs) {
 callbackArguments.push(arguments) 

    assert.isNull(err);
    docs.length.should.equal(2);
    _.pluck(docs, 'somedata').should.not.contain('ok');
    return cb();
};
var argument2 = null;
var argument3 = function (err, ids) {
 callbackArguments.push(arguments) 

    if (err) {
        console.dir(err);
    }
    t.same(ids, [
        users[0].id,
        users[1].id
    ], 'The found id did not match the id of the saved object.');
    t.done();
};
var argument4 = [618,"Z?",595,714,":Xdj1n1","FHn:}"];
var argument5 = function (err, mappings) {
 callbackArguments.push(arguments) 

    debug('Role mappings found: %s %j', err, mappings);
    if (err) {
        if (done)
            done(err);
        return;
    }
    mappings.forEach(function (m) {
        addRole(m.roleId);
    });
    if (done)
        done();
};
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
    d2.a.should.equal(12);
    d3.a.should.equal(5);
    done();
};
var argument7 = {"59":"H[Y","823":893,"893":6.357788157596447e+307,"":1.3108262771349412e+308,"1.2189982772877954e+308":"","1.7066500062956766e+308":"","QST=":"","1.4152594606946776e+308":"J"};
var base_0 = ["W",59,705,0,"Y18","N","}NrP","d",100]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["W",59,705,0,"Y18","N","}NrP","d",100]
var r_1= undefined
try {
r_1 = base_1.find(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["W",59,705,0,"Y18","N","}NrP","d",100]
var r_2= undefined
try {
r_2 = base_2.find(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["W",59,705,0,"Y18","N","}NrP","d",100]
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
require("fs").writeFileSync("./experiments/find/findMined/test591.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)