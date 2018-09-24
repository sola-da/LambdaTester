





var callbackArguments = [];
var argument1 = function (d) {
 callbackArguments.push(arguments) 

    return d._id === id1;
};
var argument2 = function (err, ids) {
 callbackArguments.push(arguments) 

    t.ok(!err, 'Unexpected finding error');
    t.same(ids, [saveObj.id], 'The found id did not match the id of the saved object.');
    t.done();
};
var argument3 = function (doc) {
 callbackArguments.push(arguments) 

    return doc.z === '3';
};
var argument4 = false;
var argument5 = function (err, docs) {
 callbackArguments.push(arguments) 

    var d1 = _.find(docs, function (doc) {
            return doc._id === doc1._id;
        }), d2 = _.find(docs, function (doc) {
            return doc._id === doc2._id;
        }), d3 = _.find(docs, function (doc) {
            return doc._id === doc3._id;
        });
    d1.a.should.equal(1);
    d2.a.should.equal(12);
    d3.a.should.equal(5);
    done();
};
var argument6 = false;
var argument7 = true;
var base_0 = [705,157,823,1.7976931348623157e+308,"{",655,"d#2rd"]
var r_0= undefined
try {
r_0 = base_0.find(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [705,157,823,1.7976931348623157e+308,"{",655,"d#2rd"]
var r_1= undefined
try {
r_1 = base_1.find(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [705,157,823,1.7976931348623157e+308,"{",655,"d#2rd"]
var r_2= undefined
try {
r_2 = base_2.find(argument3,argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [705,157,823,1.7976931348623157e+308,"{",655,"d#2rd"]
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
require("fs").writeFileSync("./experiments/find/findMined/test275.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)