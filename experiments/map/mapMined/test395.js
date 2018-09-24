





var callbackArguments = [];
var argument1 = function (atom) {
 callbackArguments.push(arguments) 

    return atom.label;
};
var argument2 = ["#","zW","f7}","U2lY","_"];
var argument3 = function (originalUserId) {
 callbackArguments.push(arguments) 

    if (idMappings.users[currentBatch][originalUserId]) {
        return idMappings.users[currentBatch][originalUserId].generatedId;
    } else {
        console.log('    Warning: Could not map folder membership for user "%s"', originalUserId);
        return originalUserId;
    }
};
var argument4 = {"213":126,"":"X>","L]":1.437186133221307e+308,")":"0","0f":1.542994459195303e+308,"1.0333036211286918e+308":8.325633599369436e+307,"1.0193921682455973e+306":893,"-1":"g","1.7934322767504782e+308":""};
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
var argument6 = true;
var argument7 = function (atom) {
 callbackArguments.push(arguments) 

    return atom.label || '- ';
};
var argument8 = 969;
var argument9 = null;
var base_0 = ["0","L>","PF","Y","N","xR;l#0"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["0","L>","PF","Y","N","xR;l#0"]
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["0","L>","PF","Y","N","xR;l#0"]
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.map(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/map/mapMined/test395.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)