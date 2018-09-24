





var callbackArguments = [];
var argument1 = function (codec) {
 callbackArguments.push(arguments) 

    return 'video/mp4; codecs="' + codec + ', mp4a.40.2"';
};
var argument2 = function (v, k) {
 callbackArguments.push(arguments) 

    return parseInt(distanceRatio * (style.to[k] - style.from[k]) + style.from[k]);
};
var argument3 = function (originalContentId) {
 callbackArguments.push(arguments) 

    if (idMappings.content[currentBatch][originalContentId]) {
        return idMappings.content[currentBatch][originalContentId].generatedId;
    } else {
        console.log('    Warning: Could not map content item id for folder "%s"', nextfolder.id);
    }
};
var argument4 = true;
var argument5 = true;
var argument6 = function (value) {
 callbackArguments.push(arguments) 

    return value == null ? '' : value + '';
};
var argument7 = true;
var base_0 = ["P","[<","wm(Y","$$j6"]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["P","[<","wm(Y","$$j6"]
var r_1= undefined
try {
r_1 = base_1.map(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["P","[<","wm(Y","$$j6"]
var r_2= undefined
try {
r_2 = base_2.map(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.map(argument6,argument7)
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
require("fs").writeFileSync("./experiments/map/mapMined/test978.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)