





var callbackArguments = [];
var argument1 = function (plugin) {
 callbackArguments.push(arguments) 

    return plugin.prototype.name === name;
};
var argument2 = function (err, ids) {
 callbackArguments.push(arguments) 

    t.ok(!err, 'Unexpected redis error in custom query');
    t.same(ids, [
        3,
        8
    ], 'The found ids were incorrect.');
    t.done();
};
var argument3 = function (err, docs) {
 callbackArguments.push(arguments) 

    docs.length.should.equal(1);
    Object.keys(docs[0]).length.should.equal(3);
    docs[0].hello.should.equal('world');
    docs[0].bloup.should.equal('blap');
    assert.isDefined(docs[0]._id);
    done();
};
var argument4 = null;
var argument5 = function (err, ids) {
 callbackArguments.push(arguments) 

    t.ok(!err, 'Unexpected redis error in custom query');
    t.same([
        1,
        7,
        6,
        5,
        4
    ], ids, 'Searching when min>max condition(ZREVRANGEBYSCORE) is invalid.');
    t.done();
};
var argument6 = 1.3622614800127408e+308;
var argument7 = r_2;
var base_0 = [49,403,82,25,705,823,157,595]
var r_0= undefined
try {
r_0 = base_0.find(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [49,403,82,25,705,823,157,595]
var r_1= undefined
try {
r_1 = base_1.find(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [49,403,82,25,705,823,157,595]
var r_2= undefined
try {
r_2 = base_2.find(argument3,argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [49,403,82,25,705,823,157,595]
var r_3= undefined
try {
r_3 = base_3.find(argument5,argument6,argument7)
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
require("fs").writeFileSync("./experiments/find/findMined/test701.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)