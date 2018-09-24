





var callbackArguments = [];
var argument1 = function (err, user) {
 callbackArguments.push(arguments) 

    if (err)
        err;
    done(err, user);
};
var argument2 = null;
var argument3 = function (doc) {
 callbackArguments.push(arguments) 

    return doc._id === 'aaa';
};
var argument4 = true;
var argument5 = false;
var argument6 = function (doc) {
 callbackArguments.push(arguments) 

    return doc._id === doc2._id;
};
var argument7 = "_";
var argument8 = null;
var argument9 = function (err, ids) {
 callbackArguments.push(arguments) 

    ids.sort();
    t.same(self.userIds, ids, 'find() did not return all users when not given any search parameters.');
    t.done();
};
var argument10 = true;
var base_0 = ["b]#",893,"PAa","$P%","t?D",242,25,25,714]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["b]#",893,"PAa","$P%","t?D",242,25,25,714]
var r_1= undefined
try {
r_1 = base_1.find(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["b]#",893,"PAa","$P%","t?D",242,25,25,714]
var r_2= undefined
try {
r_2 = base_2.find(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["b]#",893,"PAa","$P%","t?D",242,25,25,714]
var r_3= undefined
try {
r_3 = base_3.find(argument9,argument10)
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
require("fs").writeFileSync("./experiments/find/findMined/test295.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)