





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
var argument2 = function (obj2) {
 callbackArguments.push(arguments) 

    if (comparison != null) {
        return comparison(obj1, obj2);
    } else {
        return _.isEqual(obj1, obj2);
    }
};
var argument3 = false;
var argument4 = function (err, ids) {
 callbackArguments.push(arguments) 

    if (err) {
        console.dir(err);
    }
    userIds.push(self.userIds[self.userIds.length - 1]);
    t.same(userIds.length, 3, 'Didn\'t create 2 users, instead: ' + userIds.length);
    t.same(ids.sort(), userIds.sort(), 'The found id did not match the id of the saved objects.');
    t.done();
};
var argument5 = function (d) {
 callbackArguments.push(arguments) 

    return d._id === _doc3._id;
};
var argument6 = r_1;
var base_0 = [1.7976931348623157e+308,82,893,-100,126,618,403,1.7976931348623157e+308,100]
var r_0= undefined
try {
r_0 = base_0.find(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [1.7976931348623157e+308,82,893,-100,126,618,403,1.7976931348623157e+308,100]
var r_1= undefined
try {
r_1 = base_1.find(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [1.7976931348623157e+308,82,893,-100,126,618,403,1.7976931348623157e+308,100]
var r_2= undefined
try {
r_2 = base_2.find(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [1.7976931348623157e+308,82,893,-100,126,618,403,1.7976931348623157e+308,100]
var r_3= undefined
try {
r_3 = base_3.find(argument5,argument6)
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
require("fs").writeFileSync("./experiments/find/findMined/test409.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)