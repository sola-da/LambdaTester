





var callbackArguments = [];
var argument1 = function (d) {
 callbackArguments.push(arguments) 

    return d._id === _doc2._id;
};
var argument2 = 1.9626624097305882e+307;
var argument3 = false;
var argument4 = function (err, ids) {
 callbackArguments.push(arguments) 

    t.ok(!err, 'Unexpected redis error in custom query');
    t.same(ids, [
        2,
        3,
        8
    ], 'The found ids were incorrect.');
    t.done();
};
var argument5 = {"|":"","4.0220658617968557e+307":893,"":"N","G":"a","1.6026702811810066e+308":"","-100":403,"1.5397460939832401e+308":"7t5REtQ_Ix","pC`S":6.612489646581531e+307};
var argument6 = function (err, mappings) {
 callbackArguments.push(arguments) 

    debug('Role mappings found: %s %j', err, mappings);
    if (err) {
        if (done)
            done(err);
        return;
    }
    mappings.forEach(function (m) {
        addRole(m.roleId);
    });
    if (done)
        done();
};
var argument7 = null;
var argument8 = function (p) {
 callbackArguments.push(arguments) 

    return p.canPlay(source.toString());
};
var argument9 = null;
var base_0 = [-100]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-100]
var r_1= undefined
try {
r_1 = base_1.find(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-100]
var r_2= undefined
try {
r_2 = base_2.find(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-100]
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
require("fs").writeFileSync("./experiments/find/findMined/test978.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)