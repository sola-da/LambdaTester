





var callbackArguments = [];
var argument1 = function (triangle) {
 callbackArguments.push(arguments) 

    return triangle.map(function (point) {
        return point.data;
    });
};
var argument2 = {"82":"x=e","122":627,"213":213,"":"6"};
var argument3 = function (dim) {
 callbackArguments.push(arguments) 

    return {
        y: botRuleOffs,
        dy: ruleHeight,
        dim: dim
    };
};
var argument4 = r_1;
var argument5 = function (fileIdV) {
 callbackArguments.push(arguments) 

    fileId = fileIdV;
    return FileVersion.insert({
        fileId: fileId,
        versionId: version.id
    }).execWithin(tx);
};
var argument6 = r_0;
var argument7 = false;
var argument8 = function () {
 callbackArguments.push(arguments) 

    var elem = this;
    while (elem.firstChild && elem.firstChild.nodeType === 1) {
        elem = elem.firstChild;
    }
    return elem;
};
var argument9 = [122,595,1.7976931348623157e+308,403,242,-1,59,49];
var argument10 = false;
var base_0 = ["U","9"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["U","9"]
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["U","9"]
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["U","9"]
var r_3= undefined
try {
r_3 = base_3.map(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/map/mapMined/test399.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)