





var callbackArguments = [];
var argument1 = function (d) {
 callbackArguments.push(arguments) 

    return d.name == fileName;
};
var argument2 = function (err, docs) {
 callbackArguments.push(arguments) 

    docs.sort(function (a, b) {
        return a.a - b.a;
    });
    docs.length.should.equal(3);
    _.isEqual(docs[0], {
        _id: doc1._id,
        a: 1,
        hello: 'changed'
    }).should.equal(true);
    _.isEqual(docs[1], {
        _id: doc2._id,
        a: 2,
        hello: 'changed'
    }).should.equal(true);
    _.isEqual(docs[2], {
        _id: doc3._id,
        a: 5,
        hello: 'pluton'
    }).should.equal(true);
    done();
};
var argument3 = function (value, key) {
 callbackArguments.push(arguments) 

    var stop = iter(CS.PackageAndVersion.fromString(key), value);
    return stop;
};
var argument4 = function (d) {
 callbackArguments.push(arguments) 

    return d._id === _doc3._id;
};
var argument5 = true;
var argument6 = null;
var base_0 = ["GfR7","r#_t][I","P","P:"]
var r_0= undefined
try {
r_0 = base_0.find(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["GfR7","r#_t][I","P","P:"]
var r_1= undefined
try {
r_1 = base_1.find(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["GfR7","r#_t][I","P","P:"]
var r_2= undefined
try {
r_2 = base_2.find(argument3)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["GfR7","r#_t][I","P","P:"]
var r_3= undefined
try {
r_3 = base_3.find(argument4,argument5,argument6)
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
require("fs").writeFileSync("./experiments/find/findMined/test839.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)