





var callbackArguments = [];
var argument1 = function (r) {
 callbackArguments.push(arguments) 

    return r.line == line;
};
var argument2 = null;
var argument3 = null;
var argument4 = function (err, docs) {
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
var argument5 = ["h","c","Y%Q"];
var argument6 = false;
var argument7 = function (err, ids) {
 callbackArguments.push(arguments) 

    errLogger(err);
    t.same(ids.sort(), [
        users[0].id,
        users[1].id
    ].sort(), 'The found id did not match the id of the saved object.');
    t.done();
};
var argument8 = null;
var argument9 = false;
var argument10 = function (d) {
 callbackArguments.push(arguments) 

    return d._id === _doc4._id;
};
var argument11 = {"u+O":59};
var argument12 = r_1;
var base_0 = [-100,618,1.7976931348623157e+308,25,157,969,49]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-100,618,1.7976931348623157e+308,25,157,969,49]
var r_1= undefined
try {
r_1 = base_1.find(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-100,618,1.7976931348623157e+308,25,157,969,49]
var r_2= undefined
try {
r_2 = base_2.find(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-100,618,1.7976931348623157e+308,25,157,969,49]
var r_3= undefined
try {
r_3 = base_3.find(argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/find/findMined/test661.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)