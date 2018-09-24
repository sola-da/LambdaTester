





var callbackArguments = [];
var argument1 = function (chunk) {
 callbackArguments.push(arguments) 

    dust.onLoad(name, function (err, src) {
        if (err)
            return chunk.setError(err);
        if (!dust.cache[name])
            dust.loadSource(dust.compile(src, name));
        dust.cache[name](chunk, context).end();
    });
};
var argument2 = "";
var argument3 = function () {
 callbackArguments.push(arguments) 

    context = this;
};
var argument4 = 893;
var argument5 = null;
var argument6 = function (i, elem) {
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
var argument7 = false;
var argument8 = ["e-","=","U4",122,627,":",100,"d"];
var argument9 = function (word) {
 callbackArguments.push(arguments) 

    return word.charAt(0).toUpperCase() + word.substring(1);
};
var argument10 = "";
var argument11 = r_2;
var base_0 = [59,783,242,714]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [59,783,242,714]
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.map(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [59,783,242,714]
var r_3= undefined
try {
r_3 = base_3.map(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/map/mapMined/test128.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)