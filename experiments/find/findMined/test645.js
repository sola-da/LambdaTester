





var callbackArguments = [];
var argument1 = function (doc) {
 callbackArguments.push(arguments) 

    return doc._id === _doc2._id;
};
var argument2 = 1.2950092659026908e+308;
var argument3 = false;
var argument4 = function (d) {
 callbackArguments.push(arguments) 

    return d._id === _doc1._id;
};
var argument5 = false;
var argument6 = {"25":"","403":"","893":783,"":157,"-100":8.069271064658986e+307};
var argument7 = function (plugin) {
 callbackArguments.push(arguments) 

    return plugin.name === name;
};
var argument8 = false;
var argument9 = null;
var argument10 = function (err, docs) {
 callbackArguments.push(arguments) 

    assert.deepEqual(doc1, _.find(docs, function (d) {
        return d._id === doc1._id;
    }));
    assert.deepEqual(doc2, _.find(docs, function (d) {
        return d._id === doc2._id;
    }));
    done();
};
var argument11 = false;
var argument12 = "WRc[#v";
var base_0 = [")","v",242,"#","y",655,"-?"]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [")","v",242,"#","y",655,"-?"]
var r_1= undefined
try {
r_1 = base_1.find(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [")","v",242,"#","y",655,"-?"]
var r_2= undefined
try {
r_2 = base_2.find(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [")","v",242,"#","y",655,"-?"]
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
require("fs").writeFileSync("./experiments/find/findMined/test645.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)