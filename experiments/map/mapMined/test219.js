





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
var argument2 = {"82":"&)","2.7791631938304026e+307":8.503864816013567e+307,"5.195835282969791e+307":"11g","V":"j3","<$&":1.179567245796544e+308,"":7.957599751885657e+307,"5.714165385045892e+307":59};
var argument3 = null;
var argument4 = function (model) {
 callbackArguments.push(arguments) 

    return this.getItemData(model);
};
var argument5 = {"82":"","595":"","s":1.3049539094462105e+308};
var argument6 = function (k) {
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
var argument7 = function (child) {
 callbackArguments.push(arguments) 

    return {
        source: parent,
        target: child
    };
};
var argument8 = true;
var base_0 = [25,59,"dwJ(",893,893,"w",618,"t",-100,607]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [25,59,"dwJ(",893,893,"w",618,"t",-100,607]
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [25,59,"dwJ(",893,893,"w",618,"t",-100,607]
var r_2= undefined
try {
r_2 = base_2.map(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [25,59,"dwJ(",893,893,"w",618,"t",-100,607]
var r_3= undefined
try {
r_3 = base_3.map(argument7,argument8)
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
require("fs").writeFileSync("./experiments/map/mapMined/test219.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)