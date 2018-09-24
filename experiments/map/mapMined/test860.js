





var callbackArguments = [];
var argument1 = function (e) {
 callbackArguments.push(arguments) 

    return self.normalize(e);
};
var argument2 = null;
var argument3 = function (k) {
 callbackArguments.push(arguments) 

    var value = variables[k];
    if (!(value instanceof tree.Value)) {
        if (!(value instanceof tree.Expression)) {
            value = new tree.Expression([value]);
        }
        value = new tree.Value([value]);
    }
    return new tree.Rule('@' + k, value, false, null, 0);
};
var argument4 = false;
var argument5 = function (value) {
 callbackArguments.push(arguments) 

    return value == null ? '' : value + '';
};
var argument6 = null;
var argument7 = function (i, elem) {
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
var argument8 = r_0;
var argument9 = "s";
var base_0 = [-100,607,969,627,0,25,59]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-100,607,969,627,0,25,59]
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-100,607,969,627,0,25,59]
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-100,607,969,627,0,25,59]
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
require("fs").writeFileSync("./experiments/map/mapMined/test860.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)