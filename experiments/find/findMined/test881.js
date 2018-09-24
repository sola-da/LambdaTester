





var callbackArguments = [];
var argument1 = function () {
 callbackArguments.push(arguments) 

    return this.listens && this.listens.length;
};
var argument2 = function (err, ids) {
 callbackArguments.push(arguments) 

    errLogger(err);
    t.ok(ids.length > 54, 'The limit: 0 option did not return more than 50 ids.');
    t.done();
};
var argument3 = false;
var argument4 = r_1;
var argument5 = function (err, docs) {
 callbackArguments.push(arguments) 

    assert.isNull(err);
    docs.length.should.equal(2);
    _.pluck(docs, '_id').should.contain(doc1._id);
    _.pluck(docs, '_id').should.contain(doc3._id);
    d.find({ fruits: 'doesntexist' }, function (err, docs) {
        assert.isNull(err);
        docs.length.should.equal(0);
        done();
    });
};
var argument6 = function (err, ids) {
 callbackArguments.push(arguments) 

    if (err) {
        console.dir(err);
    }
    t.same(ids.sort(), [
        users[0].id,
        users[1].id
    ].sort(), 'The found id did not match the id of the saved object.');
    t.done();
};
var argument7 = false;
var base_0 = ["V2","J"]
var r_0= undefined
try {
r_0 = base_0.find(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["V2","J"]
var r_1= undefined
try {
r_1 = base_1.find(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["V2","J"]
var r_2= undefined
try {
r_2 = base_2.find(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["V2","J"]
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
require("fs").writeFileSync("./experiments/find/findMined/test881.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)