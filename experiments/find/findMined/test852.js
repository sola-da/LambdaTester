





var callbackArguments = [];
var argument1 = function (d) {
 callbackArguments.push(arguments) 

    return d._id === id1;
};
var argument2 = null;
var argument3 = function (err, ids) {
 callbackArguments.push(arguments) 

    errLogger(err);
    t.same(ids.sort(), [
        users[0].id,
        users[1].id
    ].sort(), 'The found id did not match the id of the saved object.');
    t.done();
};
var argument4 = null;
var argument5 = null;
var argument6 = function (query) {
 callbackArguments.push(arguments) 

    return _.isEqual(query.args, args);
};
var argument7 = null;
var argument8 = r_1;
var argument9 = function (d) {
 callbackArguments.push(arguments) 

    return d._id === id3;
};
var argument10 = null;
var argument11 = r_1;
var base_0 = [823,823,25,1.7976931348623157e+308,82,25,403,705,25,618]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [823,823,25,1.7976931348623157e+308,82,25,403,705,25,618]
var r_1= undefined
try {
r_1 = base_1.find(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [823,823,25,1.7976931348623157e+308,82,25,403,705,25,618]
var r_2= undefined
try {
r_2 = base_2.find(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [823,823,25,1.7976931348623157e+308,82,25,403,705,25,618]
var r_3= undefined
try {
r_3 = base_3.find(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/find/findMined/test852.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)