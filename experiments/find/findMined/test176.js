





var callbackArguments = [];
var argument1 = function (doc) {
 callbackArguments.push(arguments) 

    return doc._id === _doc2._id;
};
var argument2 = true;
var argument3 = null;
var argument4 = function (err, ids) {
 callbackArguments.push(arguments) 

    t.ok(!err, 'Unexpected redis error in custom query');
    t.same([], ids, 'Defining an endpoint failed.');
    t.done();
};
var argument5 = true;
var argument6 = "r";
var argument7 = function (d) {
 callbackArguments.push(arguments) 

    return d._id === _doc1._id;
};
var argument8 = true;
var argument9 = true;
var argument10 = function (d) {
 callbackArguments.push(arguments) 

    return d._id === _doc3._id;
};
var argument11 = 1.7285695815143917e+308;
var argument12 = null;
var base_0 = ["l^",";b","15X","Ov",":N+","_R<","2&j|W","}nl","["]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["l^",";b","15X","Ov",":N+","_R<","2&j|W","}nl","["]
var r_1= undefined
try {
r_1 = base_1.find(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["l^",";b","15X","Ov",":N+","_R<","2&j|W","}nl","["]
var r_2= undefined
try {
r_2 = base_2.find(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["l^",";b","15X","Ov",":N+","_R<","2&j|W","}nl","["]
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
require("fs").writeFileSync("./experiments/find/findMined/test176.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)