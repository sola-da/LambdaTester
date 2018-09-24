





var callbackArguments = [];
var argument1 = function (err, docs) {
 callbackArguments.push(arguments) 

    assert.isNull(err);
    docs.length.should.equal(2);
    _.pluck(docs, 'somedata').should.not.contain('ok');
    return cb();
};
var argument2 = false;
var argument3 = function (hier) {
 callbackArguments.push(arguments) 

    return hier.name == hierarchyName;
};
var argument4 = function (err, results) {
 callbackArguments.push(arguments) 

    expect(results).to.exist;
    expect(results.length).to.equal[0];
    done();
};
var argument5 = null;
var argument6 = function (err, ids) {
 callbackArguments.push(arguments) 

    t.ok(!err, 'Unexpected redis error in custom query');
    t.same([
        1,
        7
    ], ids, 'Searching when min>max condition(ZREVRANGEBYSCORE) with limit is invalid.');
    t.done();
};
var base_0 = [607,-100,618]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [607,-100,618]
var r_1= undefined
try {
r_1 = base_1.find(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [607,-100,618]
var r_2= undefined
try {
r_2 = base_2.find(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [607,-100,618]
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
require("fs").writeFileSync("./experiments/find/findMined/test975.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)