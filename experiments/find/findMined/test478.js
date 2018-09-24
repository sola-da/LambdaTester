





var callbackArguments = [];
var argument1 = function (err, ids) {
 callbackArguments.push(arguments) 

    if (err) {
        console.dir(err);
    }
    t.same(ids, [], 'Ids were found even though the name should not be findable.');
    t.done();
};
var argument2 = "#,";
var argument3 = function (err, docs) {
 callbackArguments.push(arguments) 

    docs.length.should.equal(1);
    d.getAllData().length.should.equal(1);
    d.indexes._id.getMatching(doc1._id).length.should.equal(1);
    d.indexes.a.getMatching(1).length.should.equal(1);
    d.indexes._id.getMatching(doc1._id)[0].should.equal(d.indexes.a.getMatching(1)[0]);
    d.indexes.a.getMatching(2).length.should.equal(0);
    done();
};
var argument4 = function (err, docs) {
 callbackArguments.push(arguments) 

    docs[0].something.should.equal('created ok');
    assert.isUndefined(docs[0].newField);
    done();
};
var argument5 = [893,-100,893];
var argument6 = function (err, mappings) {
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
var argument7 = r_2;
var base_0 = ["q;","j","s","),"]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["q;","j","s","),"]
var r_1= undefined
try {
r_1 = base_1.find(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["q;","j","s","),"]
var r_2= undefined
try {
r_2 = base_2.find(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["q;","j","s","),"]
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
require("fs").writeFileSync("./experiments/find/findMined/test478.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)