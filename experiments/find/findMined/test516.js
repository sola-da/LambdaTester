





var callbackArguments = [];
var argument1 = function (err, docs) {
 callbackArguments.push(arguments) 

    assert.deepEqual(doc1, _.find(docs, function (d) {
        return d._id === doc1._id;
    }));
    assert.deepEqual(doc2, _.find(docs, function (d) {
        return d._id === doc2._id;
    }));
    done();
};
var argument2 = null;
var argument3 = null;
var argument4 = function (d) {
 callbackArguments.push(arguments) 

    return d.name == fileName;
};
var argument5 = null;
var argument6 = function (doc) {
 callbackArguments.push(arguments) 

    return doc._id === _doc3._id;
};
var argument7 = function (doc) {
 callbackArguments.push(arguments) 

    return doc._id === _doc2._id;
};
var argument8 = null;
var argument9 = false;
var base_0 = [823,"v","fG","_9",607,705]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [823,"v","fG","_9",607,705]
var r_1= undefined
try {
r_1 = base_1.find(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [823,"v","fG","_9",607,705]
var r_2= undefined
try {
r_2 = base_2.find(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [823,"v","fG","_9",607,705]
var r_3= undefined
try {
r_3 = base_3.find(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/find/findMined/test516.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)