





var callbackArguments = [];
var argument1 = function (err, ids) {
 callbackArguments.push(arguments) 

    t.same(0, ids.length, 'Searching for a nonexistant index did not return an empty array.');
    t.done();
};
var argument2 = false;
var argument3 = function (err, ids) {
 callbackArguments.push(arguments) 

    errLogger(err);
    t.ok(ids.length > 54, 'The limit: 0 option did not return more than 50 ids.');
    t.done();
};
var argument4 = function (doc) {
 callbackArguments.push(arguments) 

    return doc._id === _doc2._id;
};
var argument5 = function (item) {
 callbackArguments.push(arguments) 

    return item.login == params.profile_id;
};
var base_0 = [213,655,893,82,627,59,59]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [213,655,893,82,627,59,59]
var r_1= undefined
try {
r_1 = base_1.find(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [213,655,893,82,627,59,59]
var r_2= undefined
try {
r_2 = base_2.find(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [213,655,893,82,627,59,59]
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
require("fs").writeFileSync("./experiments/find/findMined/test860.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)