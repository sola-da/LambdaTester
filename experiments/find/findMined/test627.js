





var callbackArguments = [];
var argument1 = function (d) {
 callbackArguments.push(arguments) 

    return d._id === _doc4._id;
};
var argument2 = null;
var argument3 = "";
var argument4 = function (err, ids) {
 callbackArguments.push(arguments) 

    t.ok(!err, 'There was en error while finding the second time');
    t.same(ids, [], 'Remove did not remove the correct instance. Uh-Oh.... :D ');
    t.done();
};
var argument5 = 49;
var argument6 = function (err, ids) {
 callbackArguments.push(arguments) 

    if (err) {
        console.dir(err);
    }
    t.same(ids, [userUnique.id], 'The found id did not match the id of the saved object.');
    t.done();
};
var argument7 = null;
var argument8 = r_2;
var argument9 = function (err, ids) {
 callbackArguments.push(arguments) 

    t.ok(!err, 'Unexpected finding error');
    t.same(ids, [saveObj.id], 'The found id did not match the id of the saved object.');
    t.done();
};
var argument10 = r_1;
var base_0 = ["2","H",59,"4r","n7^uwda","MC","=<ir"]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["2","H",59,"4r","n7^uwda","MC","=<ir"]
var r_1= undefined
try {
r_1 = base_1.find(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["2","H",59,"4r","n7^uwda","MC","=<ir"]
var r_2= undefined
try {
r_2 = base_2.find(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["2","H",59,"4r","n7^uwda","MC","=<ir"]
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
require("fs").writeFileSync("./experiments/find/findMined/test627.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)