





var callbackArguments = [];
var argument1 = function (err, docs) {
 callbackArguments.push(arguments) 

    done('Find should not be executed since autoload failed');
};
var argument2 = null;
var argument3 = function (doc) {
 callbackArguments.push(arguments) 

    return doc._id === _doc3._id;
};
var argument4 = r_1;
var argument5 = function (err, docs) {
 callbackArguments.push(arguments) 

    var datafileContents = model.deserialize(fs.readFileSync(testDb, 'utf8'));
    assert.deepEqual(datafileContents, {
        $$indexCreated: {
            fieldName: 'a',
            unique: true
        }
    });
    docs.length.should.equal(0);
    done();
};
var argument6 = function (err, ids) {
 callbackArguments.push(arguments) 

    t.ok(!err, 'Unexpected redis error in custom query');
    t.same([], ids, 'Defining an endpoint failed.');
    t.done();
};
var argument7 = r_0;
var argument8 = r_1;
var base_0 = [705,618,705,100,823,893]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [705,618,705,100,823,893]
var r_1= undefined
try {
r_1 = base_1.find(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [705,618,705,100,823,893]
var r_2= undefined
try {
r_2 = base_2.find(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [705,618,705,100,823,893]
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
require("fs").writeFileSync("./experiments/find/findMined/test150.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)