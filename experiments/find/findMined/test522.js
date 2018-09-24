





var callbackArguments = [];
var argument1 = function (plugin) {
 callbackArguments.push(arguments) 

    return plugin.name === name;
};
var argument2 = r_0;
var argument3 = function (err, docs) {
 callbackArguments.push(arguments) 

    assert.isNotNull(err);
    assert.isUndefined(docs);
    d.find({ a: 2 }, {
        a: 0,
        hello: 1
    }).exec(function (err, docs) {
        assert.isNotNull(err);
        assert.isUndefined(docs);
        done();
    });
};
var argument4 = function (err, docs) {
 callbackArguments.push(arguments) 

    docs.length.should.equal(1);
    Object.keys(docs[0]).length.should.equal(2);
    docs[0]._id.should.equal(id1);
    docs[0].somedata.should.equal('ok');
    return cb();
};
var argument5 = null;
var argument6 = function (err, ids) {
 callbackArguments.push(arguments) 

    t.ok(!err, 'There was an error while searching an inexistant unique value.');
    t.same([], ids, 'The return of a search that didn\'t find anything was wrong.');
    t.done();
};
var base_0 = [843,100,157,100,705,-1,59,893,460,242]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [843,100,157,100,705,-1,59,893,460,242]
var r_1= undefined
try {
r_1 = base_1.find(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [843,100,157,100,705,-1,59,893,460,242]
var r_2= undefined
try {
r_2 = base_2.find(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [843,100,157,100,705,-1,59,893,460,242]
var r_3= undefined
try {
r_3 = base_3.find(argument6)
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
require("fs").writeFileSync("./experiments/find/findMined/test522.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)