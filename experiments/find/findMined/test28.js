





var callbackArguments = [];
var argument1 = function (err, docs) {
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
var argument2 = function (hier) {
 callbackArguments.push(arguments) 

    return hier.name == hierarchyName;
};
var argument3 = function (err, ids) {
 callbackArguments.push(arguments) 

    t.ok(!err, 'Unexpected finding error');
    t.same(ids, [saveObj.id], 'The found id did not match the id of the saved object.');
    t.done();
};
var argument4 = r_2;
var argument5 = function (ext) {
 callbackArguments.push(arguments) 

    return !!a.canPlayType(ext).replace(/no/, '');
};
var argument6 = "";
var base_0 = [618,82,59,627,714,59,100,893]
var r_0= undefined
try {
r_0 = base_0.find(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [618,82,59,627,714,59,100,893]
var r_1= undefined
try {
r_1 = base_1.find(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [618,82,59,627,714,59,100,893]
var r_2= undefined
try {
r_2 = base_2.find(argument3,argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [618,82,59,627,714,59,100,893]
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
require("fs").writeFileSync("./experiments/find/findMined/test28.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)