





var callbackArguments = [];
var argument1 = function (err, ids) {
 callbackArguments.push(arguments) 

    t.ok(!err, 'Unexpected redis error in custom query');
    t.same([
        7,
        6,
        5,
        4
    ], ids, 'Defining an endpoint failed.');
    t.done();
};
var argument2 = true;
var argument3 = null;
var argument4 = function (doc) {
 callbackArguments.push(arguments) 

    return doc.z === '3';
};
var argument5 = function (doc) {
 callbackArguments.push(arguments) 

    return doc._id === doc2._id;
};
var argument6 = null;
var argument7 = function (doc) {
 callbackArguments.push(arguments) 

    return doc._id === _doc2._id;
};
var argument8 = 4.061918713552504e+307;
var base_0 = [627,"&",595,122,100,"G[m<","$",595]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [627,"&",595,122,100,"G[m<","$",595]
var r_1= undefined
try {
r_1 = base_1.find(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [627,"&",595,122,100,"G[m<","$",595]
var r_2= undefined
try {
r_2 = base_2.find(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [627,"&",595,122,100,"G[m<","$",595]
var r_3= undefined
try {
r_3 = base_3.find(argument7,argument8)
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
require("fs").writeFileSync("./experiments/find/findMined/test666.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)