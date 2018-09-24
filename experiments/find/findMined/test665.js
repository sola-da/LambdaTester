





var callbackArguments = [];
var argument1 = function (err, ids) {
 callbackArguments.push(arguments) 

    t.ok(!err, 'Unexpected redis error in custom query');
    t.same([
        7,
        6,
        5,
        4
    ], ids, 'Defining an endpoint failed.');
    t.done();
};
var argument2 = true;
var argument3 = null;
var argument4 = function (err, docs) {
 callbackArguments.push(arguments) 

    assert.isDefined(err);
    assert.isUndefined(docs);
    d.findOne({ $or: { hello: 'world' } }, function (err, doc) {
        assert.isDefined(err);
        assert.isUndefined(doc);
        done();
    });
};
var argument5 = true;
var argument6 = function (err, docs) {
 callbackArguments.push(arguments) 

    done('Find should not be executed since autoload failed');
};
var argument7 = function (err, docs) {
 callbackArguments.push(arguments) 

    docs[0].something.should.equal('created ok');
    assert.isUndefined(docs[0].newField);
    done();
};
var argument8 = r_1;
var argument9 = r_1;
var base_0 = [100,242,714,5e-324,59,59]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [100,242,714,5e-324,59,59]
var r_1= undefined
try {
r_1 = base_1.find(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [100,242,714,5e-324,59,59]
var r_2= undefined
try {
r_2 = base_2.find(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [100,242,714,5e-324,59,59]
var r_3= undefined
try {
r_3 = base_3.find(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/find/findMined/test665.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)