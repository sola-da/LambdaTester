





var callbackArguments = [];
var argument1 = function (err, user) {
 callbackArguments.push(arguments) 

    if (err)
        err;
    done(err, user);
};
var argument2 = null;
var argument3 = function (key) {
 callbackArguments.push(arguments) 

    var stop = iter(key, self.getPackageVersions(key));
    return stop;
};
var argument4 = 7.897401937546955e+306;
var argument5 = r_1;
var argument6 = function (d) {
 callbackArguments.push(arguments) 

    return d._id === id2;
};
var argument7 = null;
var argument8 = function (err, docs) {
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
var argument9 = 823;
var base_0 = [403,618,49,893,403,100,705,157,213,25]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [403,618,49,893,403,100,705,157,213,25]
var r_1= undefined
try {
r_1 = base_1.find(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [403,618,49,893,403,100,705,157,213,25]
var r_2= undefined
try {
r_2 = base_2.find(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [403,618,49,893,403,100,705,157,213,25]
var r_3= undefined
try {
r_3 = base_3.find(argument8,argument9)
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
require("fs").writeFileSync("./experiments/find/findMined/test253.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)