





var callbackArguments = [];
var argument1 = function (err, docs) {
 callbackArguments.push(arguments) 

    docs.length.should.equal(1);
    _.isEqual(docs[0], {
        _id: doc2._id,
        a: 2,
        hello: 'earth'
    }).should.equal(true);
    done();
};
var argument2 = r_0;
var argument3 = r_0;
var argument4 = function (err, docs) {
 callbackArguments.push(arguments) 

    docs.length.should.equal(3);
    var toRemove = [
            'Mars',
            'Saturn'
        ];
    async.each(toRemove, function (planet, cb) {
        d.remove({ planet: planet }, function (err) {
            return cb(err);
        });
    }, function (err) {
        d.find({}, function (err, docs) {
            docs.length.should.equal(1);
            done();
        });
    });
};
var argument5 = r_0;
var argument6 = false;
var argument7 = function (name) {
 callbackArguments.push(arguments) 

    if (1 === arg.length)
        return name[0] == arg;
    return name == arg;
};
var argument8 = function (d) {
 callbackArguments.push(arguments) 

    return d._id === id3;
};
var base_0 = ["DW",893,"Y","P","ELA%","+[","F<"]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["DW",893,"Y","P","ELA%","+[","F<"]
var r_1= undefined
try {
r_1 = base_1.find(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["DW",893,"Y","P","ELA%","+[","F<"]
var r_2= undefined
try {
r_2 = base_2.find(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["DW",893,"Y","P","ELA%","+[","F<"]
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
require("fs").writeFileSync("./experiments/find/findMined/test771.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)