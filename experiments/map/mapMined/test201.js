





var callbackArguments = [];
var argument1 = function (pt) {
 callbackArguments.push(arguments) 

    return [
        pt.latitude,
        pt.longitude
    ];
};
var argument2 = true;
var argument3 = null;
var argument4 = function (i, elem) {
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
var argument5 = true;
var argument6 = null;
var argument7 = function (op) {
 callbackArguments.push(arguments) 

    if (Op.isRetain(op)) {
        return op;
    } else if (Op.isInsert(op)) {
        return op;
    } else {
        throw new Error('Creating delta with invalid op. Expecting an insert or retain.');
    }
};
var argument8 = function (k) {
 callbackArguments.push(arguments) 

    return k + '=' + params[k];
};
var argument9 = null;
var argument10 = ["D*","#{",403,893,"=",893,242];
var base_0 = [783,618,705,843,"G",82]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [783,618,705,843,"G",82]
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.map(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
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
require("fs").writeFileSync("./experiments/map/mapMined/test201.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)