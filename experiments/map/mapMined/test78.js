





var callbackArguments = [];
var argument1 = function (m, j) {
 callbackArguments.push(arguments) 

    if (m === n)
        i++;
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
var argument4 = 213;
var argument5 = function (v) {
 callbackArguments.push(arguments) 

    return this.dataType.fmtOData(v);
};
var argument6 = ["4","r","!zA","1I",">"];
var argument7 = null;
var argument8 = function () {
 callbackArguments.push(arguments) 

    return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
};
var argument9 = null;
var argument10 = {};
var base_0 = [969,893,823,126,126]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [969,893,823,126,126]
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [969,893,823,126,126]
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [969,893,823,126,126]
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
require("fs").writeFileSync("./experiments/map/mapMined/test78.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)