





var callbackArguments = [];
var argument1 = function (item) {
 callbackArguments.push(arguments) 

    return item.login == params.profile_id;
};
var argument2 = null;
var argument3 = null;
var argument4 = function (err, ids) {
 callbackArguments.push(arguments) 

    t.same(ids, [user.id], 'Did not find an exact number match');
    findUser.find({ number: num - 1 }, function (err, ids) {
        t.same(ids, [], 'Searching for a nonexistant number did not return an empty array.');
        t.done();
    });
};
var argument5 = false;
var argument6 = [460,618,157,-100,213,783,25,122,1.7976931348623157e+308];
var argument7 = function (err, ids) {
 callbackArguments.push(arguments) 

    t.same(ids.length, 1, 'Did not find the correct number of ids for non-incremental id model.');
    t.same(ids[0], self.userIds[1], 'Did not find the correct id for non-incremental id model.');
    t.done();
};
var argument8 = ["t9","RA","G"];
var argument9 = r_2;
var argument10 = function (doc) {
 callbackArguments.push(arguments) 

    return doc._id === _doc1._id;
};
var argument11 = null;
var argument12 = {"2.9920449445584527e+307":"[","":"q"};
var base_0 = [607,893]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [607,893]
var r_1= undefined
try {
r_1 = base_1.find(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [607,893]
var r_2= undefined
try {
r_2 = base_2.find(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [607,893]
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
require("fs").writeFileSync("./experiments/find/findMined/test210.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)