





var callbackArguments = [];
var argument1 = function (doc) {
 callbackArguments.push(arguments) 

    return doc._id === doc2._id;
};
var argument2 = null;
var argument3 = false;
var argument4 = function (name) {
 callbackArguments.push(arguments) 

    if (1 === arg.length)
        return name[0] == arg;
    return name == arg;
};
var argument5 = function (d) {
 callbackArguments.push(arguments) 

    return d.name == dimension;
};
var argument6 = true;
var argument7 = {"1.7976931348623157e+308":242};
var argument8 = function (err, docs) {
 callbackArguments.push(arguments) 

    assert.isNull(err);
    docs.length.should.equal(1);
    var doc = docs[0];
    Object.keys(doc).length.should.equal(4);
    doc.cac.should.equal('rrr');
    doc.hello.should.equal('world');
    doc.bloup.should.equal(3);
    done();
};
var base_0 = [595,627,595,-100,627]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [595,627,595,-100,627]
var r_1= undefined
try {
r_1 = base_1.find(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [595,627,595,-100,627]
var r_2= undefined
try {
r_2 = base_2.find(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [595,627,595,-100,627]
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
require("fs").writeFileSync("./experiments/find/findMined/test821.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)