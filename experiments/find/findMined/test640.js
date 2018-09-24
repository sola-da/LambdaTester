





var callbackArguments = [];
var argument1 = function (d) {
 callbackArguments.push(arguments) 

    return d.name == dimension;
};
var argument2 = [714,"I*6=o","1y1",823,")O",607,122];
var argument3 = 3.0319195229737497e+307;
var argument4 = function (err, docs) {
 callbackArguments.push(arguments) 

    done('Find should not be executed since autoload failed');
};
var argument5 = null;
var argument6 = {"783":893,"":"","1.5251153960460016e+308":1.6005409529284827e+308,"9.911628866658162e+306":""};
var argument7 = function (err, docs) {
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
var argument8 = r_2;
var argument9 = false;
var argument10 = function (err, apiKeys) {
 callbackArguments.push(arguments) 

    assert(!err);
    assert(apiKeys.length === 1);
    assert(apiKeys[0].owner === fixtures.models.user.id);
    done();
};
var argument11 = 59;
var argument12 = "";
var base_0 = [")","E)",82,1.7976931348623157e+308,"]",783,"mb3","|w","%"]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [")","E)",82,1.7976931348623157e+308,"]",783,"mb3","|w","%"]
var r_1= undefined
try {
r_1 = base_1.find(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [")","E)",82,1.7976931348623157e+308,"]",783,"mb3","|w","%"]
var r_2= undefined
try {
r_2 = base_2.find(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [")","E)",82,1.7976931348623157e+308,"]",783,"mb3","|w","%"]
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
require("fs").writeFileSync("./experiments/find/findMined/test640.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)