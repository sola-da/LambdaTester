





var callbackArguments = [];
var argument1 = function (o) {
 callbackArguments.push(arguments) 

    return o.ins === currentPair;
};
var argument2 = 6.039871226994925e+307;
var argument3 = ["G","O"];
var argument4 = function (err, ids) {
 callbackArguments.push(arguments) 

    t.same(0, ids.length, 'Searching for a nonexistant index did not return an empty array.');
    t.done();
};
var argument5 = function (err, ids) {
 callbackArguments.push(arguments) 

    if (err) {
        console.dir(err);
    }
    t.same(ids, [userUnique.id], 'The found id did not match the id of the saved object.');
    t.done();
};
var argument6 = false;
var argument7 = 1.7976931348623157e+308;
var argument8 = function (err, docs) {
 callbackArguments.push(arguments) 

    docs[0].hello = 'changed';
    d.findOne({ a: 2 }, function (err, doc) {
        doc.hello.should.equal('world');
        done();
    });
};
var base_0 = [627,126,-100,714,82]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [627,126,-100,714,82]
var r_1= undefined
try {
r_1 = base_1.find(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [627,126,-100,714,82]
var r_2= undefined
try {
r_2 = base_2.find(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [627,126,-100,714,82]
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
require("fs").writeFileSync("./experiments/find/findMined/test680.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)