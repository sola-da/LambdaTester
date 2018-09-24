





var callbackArguments = [];
var argument1 = function (d) {
 callbackArguments.push(arguments) 

    return d._id === _doc2._id;
};
var argument2 = function (err, ids) {
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
var argument3 = function (err, docs) {
 callbackArguments.push(arguments) 

    assert.isDefined(err);
    assert.isUndefined(docs);
    d.findOne({ $or: { hello: 'world' } }, function (err, doc) {
        assert.isDefined(err);
        assert.isUndefined(doc);
        done();
    });
};
var argument4 = {"705":"","-100":"","3.0225896104349656e+307":"","X":"","1.5388670536382877e+307":403,"V":"","<":7.152180681931094e+307,"s'$":"<","":""};
var argument5 = true;
var argument6 = function (doc) {
 callbackArguments.push(arguments) 

    return doc.z === '2';
};
var argument7 = null;
var base_0 = [25,59,0,242,460,-100]
var r_0= undefined
try {
r_0 = base_0.find(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [25,59,0,242,460,-100]
var r_1= undefined
try {
r_1 = base_1.find(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [25,59,0,242,460,-100]
var r_2= undefined
try {
r_2 = base_2.find(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [25,59,0,242,460,-100]
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
require("fs").writeFileSync("./experiments/find/findMined/test504.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)