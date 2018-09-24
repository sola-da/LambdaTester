





var callbackArguments = [];
var argument1 = function (err, docs) {
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
var argument2 = false;
var argument3 = {"714":"`#`f","":4.757844257568974e+307};
var argument4 = function (key) {
 callbackArguments.push(arguments) 

    var stop = iter(key, self.getPackageVersions(key));
    return stop;
};
var argument5 = null;
var argument6 = function (doc) {
 callbackArguments.push(arguments) 

    return doc._id === _doc1._id;
};
var argument7 = false;
var argument8 = function (ext) {
 callbackArguments.push(arguments) 

    return !!v.canPlayType(ext).replace(/no/, '');
};
var base_0 = [126,627,783,157,25,49]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [126,627,783,157,25,49]
var r_1= undefined
try {
r_1 = base_1.find(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [126,627,783,157,25,49]
var r_2= undefined
try {
r_2 = base_2.find(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [126,627,783,157,25,49]
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
require("fs").writeFileSync("./experiments/find/findMined/test140.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)