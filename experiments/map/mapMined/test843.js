





var callbackArguments = [];
var argument1 = function () {
 callbackArguments.push(arguments) 

    return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
};
var argument2 = true;
var argument3 = function () {
 callbackArguments.push(arguments) 

    var elements = jQuery.prop(this, 'elements');
    return elements ? jQuery.makeArray(elements) : this;
};
var argument4 = r_1;
var argument5 = r_0;
var argument6 = function (op) {
 callbackArguments.push(arguments) 

    if (op.value != null) {
        return op.value;
    } else {
        return '';
    }
};
var argument7 = [213,122];
var argument8 = {"122":1.4934010441767222e+308,"969":"`-","a":1.1219900327869137e+308,"":49,"^":"","1.4828538368711239e+308":"","x":1.3449833935418516e+308,"k":"IF*"};
var argument9 = function (i, elem) {
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
var argument10 = false;
var base_0 = ["v","1","i","]",">dSf","&RA-","W","3","B`1"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["v","1","i","]",">dSf","&RA-","W","3","B`1"]
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["v","1","i","]",">dSf","&RA-","W","3","B`1"]
var r_2= undefined
try {
r_2 = base_2.map(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.map(argument9,argument10)
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
require("fs").writeFileSync("./experiments/map/mapMined/test843.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)