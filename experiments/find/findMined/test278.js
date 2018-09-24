





var callbackArguments = [];
var argument1 = function (d) {
 callbackArguments.push(arguments) 

    return d.newDoc === 'yes';
};
var argument2 = 2.5895375696816313e+307;
var argument3 = function (err, ids) {
 callbackArguments.push(arguments) 

    t.same(ids.length, 1, 'Did not find the correct number of ids for non-incremental id model.');
    t.same(ids[0], self.userIds[1], 'Did not find the correct id for non-incremental id model.');
    t.done();
};
var argument4 = "";
var argument5 = null;
var argument6 = function (doc) {
 callbackArguments.push(arguments) 

    return doc._id === doc3._id;
};
var argument7 = function (result) {
 callbackArguments.push(arguments) 

    return result.id === discussionId;
};
var base_0 = [25,714,-1,607,25,100,607,607,213,969]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [25,714,-1,607,25,100,607,607,213,969]
var r_1= undefined
try {
r_1 = base_1.find(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [25,714,-1,607,25,100,607,607,213,969]
var r_2= undefined
try {
r_2 = base_2.find(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [25,714,-1,607,25,100,607,607,213,969]
var r_3= undefined
try {
r_3 = base_3.find(argument7)
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
require("fs").writeFileSync("./experiments/find/findMined/test278.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)