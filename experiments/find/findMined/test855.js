





var callbackArguments = [];
var argument1 = function (err, ids) {
 callbackArguments.push(arguments) 

    if (err) {
        console.dir(err);
    }
    userIds.push(self.userIds[self.userIds.length - 1]);
    t.same(userIds.length, 3, 'Didn\'t create 2 users, instead: ' + userIds.length);
    t.same(ids.sort(), userIds.sort(), 'The found id did not match the id of the saved objects.');
    t.done();
};
var argument2 = {"7.073305320189049e+307":"","":"","Bt":"","4.712146541256184e+307":"ah","4.960918702053864e+307":"52","6.376828791624742e+307":"h"};
var argument3 = false;
var argument4 = function (err, mappings) {
 callbackArguments.push(arguments) 

    if (err) {
        if (callback)
            callback(err);
        return;
    }
    return mappings.map(function (m) {
        return m.principalId;
    });
};
var argument5 = function (ext) {
 callbackArguments.push(arguments) 

    return !!v.canPlayType(ext).replace(/no/, '');
};
var argument6 = false;
var argument7 = null;
var argument8 = function (err, ids) {
 callbackArguments.push(arguments) 

    ids.sort();
    t.same(self.userIds, ids, 'find() did not return all users when not given any search parameters.');
    t.done();
};
var base_0 = [627,213,-100,618,49,705]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [627,213,-100,618,49,705]
var r_1= undefined
try {
r_1 = base_1.find(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [627,213,-100,618,49,705]
var r_2= undefined
try {
r_2 = base_2.find(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [627,213,-100,618,49,705]
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
require("fs").writeFileSync("./experiments/find/findMined/test855.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)