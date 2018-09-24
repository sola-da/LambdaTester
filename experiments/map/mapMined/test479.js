





var callbackArguments = [];
var argument1 = function (originalContentId) {
 callbackArguments.push(arguments) 

    if (idMappings.content[currentBatch][originalContentId]) {
        return idMappings.content[currentBatch][originalContentId].generatedId;
    } else {
        console.log('    Warning: Could not map content item id for folder "%s"', nextfolder.id);
    }
};
var argument2 = function (instr) {
 callbackArguments.push(arguments) 

    return instr.flatten();
};
var argument3 = 213;
var argument4 = -100;
var argument5 = function (num) {
 callbackArguments.push(arguments) 

    return num !== index ? num : null;
};
var argument6 = function () {
 callbackArguments.push(arguments) 

    var offsetParent = this.offsetParent || docElem;
    while (offsetParent && (!jQuery.nodeName(offsetParent, 'html') && jQuery.css(offsetParent, 'position') === 'static')) {
        offsetParent = offsetParent.offsetParent;
    }
    return offsetParent || docElem;
};
var base_0 = ["eK}","=","wH","U:","Q","+|"]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["eK}","=","wH","U:","Q","+|"]
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["eK}","=","wH","U:","Q","+|"]
var r_2= undefined
try {
r_2 = base_2.map(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["eK}","=","wH","U:","Q","+|"]
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
require("fs").writeFileSync("./experiments/map/mapMined/test479.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)