





var callbackArguments = [];
var argument1 = function (d) {
 callbackArguments.push(arguments) 

    return d._id === id3;
};
var argument2 = r_0;
var argument3 = function (doc) {
 callbackArguments.push(arguments) 

    return doc._id === doc2._id;
};
var argument4 = true;
var argument5 = function (result) {
 callbackArguments.push(arguments) 

    return result.id === discussionId;
};
var argument6 = r_0;
var argument7 = r_1;
var argument8 = function (err, ids) {
 callbackArguments.push(arguments) 

    t.same(ids, [user.id], 'Did not find an exact number match');
    findUser.find({ number: num - 1 }, function (err, ids) {
        t.same(ids, [], 'Searching for a nonexistant number did not return an empty array.');
        t.done();
    });
};
var argument9 = 595;
var argument10 = true;
var base_0 = [823,843,25,157]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [823,843,25,157]
var r_1= undefined
try {
r_1 = base_1.find(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [823,843,25,157]
var r_2= undefined
try {
r_2 = base_2.find(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [823,843,25,157]
var r_3= undefined
try {
r_3 = base_3.find(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/find/findMined/test506.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)