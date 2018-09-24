





var callbackArguments = [];
var argument1 = function (doc) {
 callbackArguments.push(arguments) 

    return doc.z === '3';
};
var argument2 = function (doc) {
 callbackArguments.push(arguments) 

    return doc._id === 'aaa';
};
var argument3 = [-100,49];
var argument4 = function (d) {
 callbackArguments.push(arguments) 

    return d._id === _doc3._id;
};
var argument5 = null;
var argument6 = function (err, ids) {
 callbackArguments.push(arguments) 

    t.ok(!err, 'There was en error while finding the second time');
    t.same(ids, [], 'Remove did not remove the correct instance. Uh-Oh.... :D ');
    t.done();
};
var argument7 = [213];
var argument8 = "";
var base_0 = [49,"SD*","8","3",705,"R&",1.7976931348623157e+308,705,"uk,N4"]
var r_0= undefined
try {
r_0 = base_0.find(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [49,"SD*","8","3",705,"R&",1.7976931348623157e+308,705,"uk,N4"]
var r_1= undefined
try {
r_1 = base_1.find(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [49,"SD*","8","3",705,"R&",1.7976931348623157e+308,705,"uk,N4"]
var r_2= undefined
try {
r_2 = base_2.find(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [49,"SD*","8","3",705,"R&",1.7976931348623157e+308,705,"uk,N4"]
var r_3= undefined
try {
r_3 = base_3.find(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/find/findMined/test480.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)