





var callbackArguments = [];
var argument1 = function (i, elem) {
 callbackArguments.push(arguments) 

    var val = jQuery(this).val();
    return val == null ? null : jQuery.isArray(val) ? jQuery.map(val, function (val, i) {
        return {
            name: elem.name,
            value: val.replace(rCRLF, '\r\n')
        };
    }) : {
        name: elem.name,
        value: val.replace(rCRLF, '\r\n')
    };
};
var argument2 = null;
var argument3 = function (originalUserId) {
 callbackArguments.push(arguments) 

    if (idMappings.users[currentBatch][originalUserId]) {
        return idMappings.users[currentBatch][originalUserId].generatedId;
    } else {
        console.log('    Warning: Could not map folder membership for user "%s"', originalUserId);
        return originalUserId;
    }
};
var argument4 = false;
var argument5 = function (val) {
 callbackArguments.push(arguments) 

    return keyMap[val];
};
var argument6 = true;
var argument7 = false;
var argument8 = function (y) {
 callbackArguments.push(arguments) 

    return (y - translate[1]) / scale;
};
var argument9 = false;
var argument10 = true;
var base_0 = [59,213,-1]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [59,213,-1]
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [59,213,-1]
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [59,213,-1]
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
require("fs").writeFileSync("./experiments/map/mapMined/test250.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)