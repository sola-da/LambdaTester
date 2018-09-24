





var callbackArguments = [];
var argument1 = function (user) {
 callbackArguments.push(arguments) 

    return '' + user.id;
};
var argument2 = function (originalUserId) {
 callbackArguments.push(arguments) 

    if (idMappings.users[currentBatch][originalUserId]) {
        return idMappings.users[currentBatch][originalUserId].generatedId;
    } else {
        console.log('    Warning: Could not map folder membership for user "%s"', originalUserId);
        return originalUserId;
    }
};
var argument3 = 82;
var argument4 = null;
var argument5 = function (i, elem) {
 callbackArguments.push(arguments) 

    var val = jQuery(this).val();
    return val == null ? null : jQuery.isArray(val) ? jQuery.map(val, function (val) {
        return {
            name: elem.name,
            value: val.replace(rCRLF, '\r\n')
        };
    }) : {
        name: elem.name,
        value: val.replace(rCRLF, '\r\n')
    };
};
var argument6 = function (entry) {
 callbackArguments.push(arguments) 

    return that._handleFileTreeEntry(entry, path);
};
var argument7 = "";
var argument8 = r_1;
var base_0 = ["Q-","#)H`"]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["Q-","#)H`"]
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["Q-","#)H`"]
var r_2= undefined
try {
r_2 = base_2.map(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["Q-","#)H`"]
var r_3= undefined
try {
r_3 = base_3.map(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/map/mapMined/test616.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)