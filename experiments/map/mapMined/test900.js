





var callbackArguments = [];
var argument1 = function (colpos) {
 callbackArguments.push(arguments) 

    var i, newpos = colpos;
    for (i = 0; i < rmindx.length; i++) {
        if (colpos > rmindx[i]) {
            newpos--;
        }
    }
    return newpos;
};
var argument2 = function (i, elem) {
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
var argument3 = null;
var argument4 = function (i) {
 callbackArguments.push(arguments) 

    return 'this._stride' + i + '*i' + i;
};
var argument5 = 2.1948952514040151e+307;
var argument6 = function (arg) {
 callbackArguments.push(arguments) 

    return arg + '.js';
};
var argument7 = null;
var argument8 = null;
var base_0 = ["$","{","j",-100,783,403]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["$","{","j",-100,783,403]
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["$","{","j",-100,783,403]
var r_2= undefined
try {
r_2 = base_2.map(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
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
require("fs").writeFileSync("./experiments/map/mapMined/test900.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)