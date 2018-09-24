





var callbackArguments = [];
var argument1 = function (doc) {
 callbackArguments.push(arguments) 

    return doc._id === doc2._id;
};
var argument2 = null;
var argument3 = null;
var argument4 = function (err, docs) {
 callbackArguments.push(arguments) 

    assert.isNull(err);
    docs.length.should.equal(0);
    return cb();
};
var argument5 = true;
var argument6 = function (err) {
 callbackArguments.push(arguments) 

    t.same(0, err.indexOf('Invalid search parameters'), 'The found id did not match the id of the saved object.');
    t.done();
};
var argument7 = r_2;
var argument8 = function (err, ids) {
 callbackArguments.push(arguments) 

    t.ok(!err, 'There was an error while searching an inexistant unique value.');
    t.same([], ids, 'The return of a search that didn\'t find anything was wrong.');
    t.done();
};
var base_0 = [49]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [49]
var r_1= undefined
try {
r_1 = base_1.find(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [49]
var r_2= undefined
try {
r_2 = base_2.find(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [49]
var r_3= undefined
try {
r_3 = base_3.find(argument8)
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
require("fs").writeFileSync("./experiments/find/findMined/test433.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)