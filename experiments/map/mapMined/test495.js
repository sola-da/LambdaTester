





var callbackArguments = [];
var argument1 = function (p) {
 callbackArguments.push(arguments) 

    return p.trim();
};
var argument2 = ["9?",714,655,893,59,1.7976931348623157e+308,"R<","W",627];
var argument3 = function _lowercase(item) {
 callbackArguments.push(arguments) 

    return item.toLowerCase();
};
var argument4 = "nYS=";
var argument5 = false;
var argument6 = function (originalContentId) {
 callbackArguments.push(arguments) 

    if (idMappings.content[currentBatch][originalContentId]) {
        return idMappings.content[currentBatch][originalContentId].generatedId;
    } else {
        console.log('    Warning: Could not map content item id for folder "%s"', nextfolder.id);
    }
};
var argument7 = function () {
 callbackArguments.push(arguments) 

    var elements = jQuery.prop(this, 'elements');
    return elements ? jQuery.makeArray(elements) : this;
};
var argument8 = [627];
var base_0 = ["H",",>C6","l","U)","1"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["H",",>C6","l","U)","1"]
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.map(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.map(argument7,argument8)
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
require("fs").writeFileSync("./experiments/map/mapMined/test495.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)