





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
var argument2 = function (plugin) {
 callbackArguments.push(arguments) 

    return plugin.name === name;
};
var argument3 = function (b) {
 callbackArguments.push(arguments) 

    branchArrPos++;
    return b.name == branchName;
};
var argument4 = null;
var argument5 = function (item, idx) {
 callbackArguments.push(arguments) 

    return idx === 0;
};
var base_0 = [59,1.7976931348623157e+308]
var r_0= undefined
try {
r_0 = base_0.find(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [59,1.7976931348623157e+308]
var r_1= undefined
try {
r_1 = base_1.find(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [59,1.7976931348623157e+308]
var r_2= undefined
try {
r_2 = base_2.find(argument3,argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [59,1.7976931348623157e+308]
var r_3= undefined
try {
r_3 = base_3.find(argument5)
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
require("fs").writeFileSync("./experiments/find/findMined/test565.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)