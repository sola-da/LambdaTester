





var callbackArguments = [];
var argument1 = function (o) {
 callbackArguments.push(arguments) 

    return o.ServerOrderId === order;
};
var argument2 = true;
var argument3 = true;
var argument4 = function (doc) {
 callbackArguments.push(arguments) 

    return doc._id === doc2._id;
};
var argument5 = 627;
var argument6 = function (err, mappings) {
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
var argument7 = true;
var argument8 = function (doc) {
 callbackArguments.push(arguments) 

    return doc._id === _doc2._id;
};
var argument9 = null;
var base_0 = [1.7976931348623157e+308,714,705,82,843,-100,655,-1,-100]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [1.7976931348623157e+308,714,705,82,843,-100,655,-1,-100]
var r_1= undefined
try {
r_1 = base_1.find(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [1.7976931348623157e+308,714,705,82,843,-100,655,-1,-100]
var r_2= undefined
try {
r_2 = base_2.find(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [1.7976931348623157e+308,714,705,82,843,-100,655,-1,-100]
var r_3= undefined
try {
r_3 = base_3.find(argument8,argument9)
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
require("fs").writeFileSync("./experiments/find/findMined/test327.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)