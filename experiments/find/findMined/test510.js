





var callbackArguments = [];
var argument1 = function (d) {
 callbackArguments.push(arguments) 

    return d._id === _doc1._id;
};
var argument2 = null;
var argument3 = function (doc) {
 callbackArguments.push(arguments) 

    return doc._id === _doc3._id;
};
var argument4 = function (id) {
 callbackArguments.push(arguments) 

    return id === fieldLabelId;
};
var argument5 = true;
var argument6 = function (err, apiKeys) {
 callbackArguments.push(arguments) 

    assert(!err);
    assert(apiKeys.length === 1);
    assert(apiKeys[0].owner === fixtures.models.user.id);
    done();
};
var argument7 = null;
var argument8 = null;
var base_0 = [714,607,25,0,242,705,823,893]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [714,607,25,0,242,705,823,893]
var r_1= undefined
try {
r_1 = base_1.find(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [714,607,25,0,242,705,823,893]
var r_2= undefined
try {
r_2 = base_2.find(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [714,607,25,0,242,705,823,893]
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
require("fs").writeFileSync("./experiments/find/findMined/test510.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)