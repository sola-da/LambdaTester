





var callbackArguments = [];
var argument1 = function (err, docs) {
 callbackArguments.push(arguments) 

    docs.sort(function (a, b) {
        return a.a - b.a;
    });
    docs.length.should.equal(2);
    _.isEqual(docs[0], {
        _id: doc1._id,
        a: 1,
        hello: 'world'
    }).should.equal(true);
    _.isEqual(docs[1], {
        _id: doc3._id,
        a: 3,
        hello: 'moto'
    }).should.equal(true);
    done();
};
var argument2 = null;
var argument3 = null;
var argument4 = function (o) {
 callbackArguments.push(arguments) 

    return o.ServerOrderId === order;
};
var argument5 = null;
var argument6 = r_0;
var argument7 = function (err, ids) {
 callbackArguments.push(arguments) 

    t.ok(!err, 'There was an error while finding.');
    t.same([test.id], ids, 'Did not find the correct ids');
    t.done();
};
var argument8 = false;
var argument9 = {"618":627,"-1":9.981132669994919e+307,"":783};
var argument10 = function (err, docs) {
 callbackArguments.push(arguments) 

    docs.sort(function (a, b) {
        return a.a - b.a;
    });
    docs.length.should.equal(2);
    _.isEqual(docs[0], {
        _id: doc1._id,
        a: 1,
        hello: 'world'
    }).should.equal(true);
    _.isEqual(docs[1], {
        _id: doc2._id,
        a: 2,
        hello: 'changed'
    }).should.equal(true);
    done();
};
var argument11 = {};
var base_0 = ["e%z4`j","!","Ec","|$ite","R","("]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["e%z4`j","!","Ec","|$ite","R","("]
var r_1= undefined
try {
r_1 = base_1.find(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["e%z4`j","!","Ec","|$ite","R","("]
var r_2= undefined
try {
r_2 = base_2.find(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["e%z4`j","!","Ec","|$ite","R","("]
var r_3= undefined
try {
r_3 = base_3.find(argument10,argument11)
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
require("fs").writeFileSync("./experiments/find/findMined/test79.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)