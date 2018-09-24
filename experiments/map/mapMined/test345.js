





var callbackArguments = [];
var argument1 = function (el) {
 callbackArguments.push(arguments) 

    return el[prop];
};
var argument2 = null;
var argument3 = function (i) {
 callbackArguments.push(arguments) 

    return 'b' + i;
};
var argument4 = function (doc, i) {
 callbackArguments.push(arguments) 

    if (doc._id && utils.isLocalId(doc._id)) {
        return doc;
    }
    var newDoc = utils.parseDoc(doc, newEdits);
    newDoc._bulk_seq = i;
    return newDoc;
};
var argument5 = ["s","Z<","dp","L","0`{","-"];
var argument6 = function (x) {
 callbackArguments.push(arguments) 

    if (typeof x[0] != 'string')
        x[0] = x[0].name;
    if (!x[1])
        x = x[0];
    return x;
};
var base_0 = [607,242,126,893,49,126]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [607,242,126,893,49,126]
var r_1= undefined
try {
r_1 = base_1.map(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [607,242,126,893,49,126]
var r_2= undefined
try {
r_2 = base_2.map(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [607,242,126,893,49,126]
var r_3= undefined
try {
r_3 = base_3.map(argument6)
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
require("fs").writeFileSync("./experiments/map/mapMined/test345.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)