





var callbackArguments = [];
var argument1 = function (err) {
 callbackArguments.push(arguments) 

    t.same(0, err.indexOf('Invalid search parameters'), 'The found id did not match the id of the saved object.');
    t.done();
};
var argument2 = null;
var argument3 = function (err, ids) {
 callbackArguments.push(arguments) 

    t.same(ids.length, 1, 'Did not find the correct number of ids for non-incremental id model.');
    t.same(ids[0], self.userIds[1], 'Did not find the correct id for non-incremental id model.');
    t.done();
};
var argument4 = r_1;
var argument5 = function (d) {
 callbackArguments.push(arguments) 

    return d._id === _doc1._id;
};
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
var argument7 = ["9","(","n%","f;"];
var base_0 = ["W","m9FaCU)U&","X","t","S","^","_`EJ"]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["W","m9FaCU)U&","X","t","S","^","_`EJ"]
var r_1= undefined
try {
r_1 = base_1.find(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["W","m9FaCU)U&","X","t","S","^","_`EJ"]
var r_2= undefined
try {
r_2 = base_2.find(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["W","m9FaCU)U&","X","t","S","^","_`EJ"]
var r_3= undefined
try {
r_3 = base_3.find(argument6,argument7)
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
require("fs").writeFileSync("./experiments/find/findMined/test171.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)