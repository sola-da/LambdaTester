





var callbackArguments = [];
var argument1 = function (i, elem) {
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
var argument2 = function (ch) {
 callbackArguments.push(arguments) 

    return ch.charCodeAt(0);
};
var argument3 = false;
var argument4 = r_0;
var argument5 = function (opInA) {
 callbackArguments.push(arguments) 

    if (Op.isInsert(opInA)) {
        return new InsertOp(opInA.value, opInA.composeAttributes(opInB.attributes));
    } else {
        return new RetainOp(opInA.start, opInA.end, opInA.composeAttributes(opInB.attributes));
    }
};
var argument6 = function () {
 callbackArguments.push(arguments) 

    return this._DT_RowIndex;
};
var argument7 = {"655":"","x|":"","":9.752047977604405e+307,"9.130189455683348e+307":100,"1.5581908984183862e+307":9.360947328566458e+306,"qh_":4.697708005571185e+306,"e|":""};
var argument8 = r_2;
var base_0 = ["vw ",")","s","N","H","IIs"]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["vw ",")","s","N","H","IIs"]
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.map(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
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
require("fs").writeFileSync("./experiments/map/mapMined/test160.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)