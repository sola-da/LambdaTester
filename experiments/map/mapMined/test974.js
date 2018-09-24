





var callbackArguments = [];
var argument1 = function () {
 callbackArguments.push(arguments) 

    return $(this).button('widget')[0];
};
var argument2 = function (c) {
 callbackArguments.push(arguments) 

    c = clamp(Math.round(c), 255);
    return (c < 16 ? '0' : '') + c.toString(16);
};
var argument3 = null;
var argument4 = r_0;
var argument5 = function (result) {
 callbackArguments.push(arguments) 

    if (result._bulk_seq) {
        delete result._bulk_seq;
    } else if (!Object.keys(result).length) {
        return { ok: true };
    }
    if (result.error) {
        return result;
    }
    var metadata = result.metadata;
    var rev = merge.winningRev(metadata);
    return {
        ok: true,
        id: metadata.id,
        rev: rev
    };
};
var argument6 = function (line) {
 callbackArguments.push(arguments) 

    return '  ' + line;
};
var base_0 = [-100,823,893,"`B4j",460,"A"]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-100,823,893,"`B4j",460,"A"]
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-100,823,893,"`B4j",460,"A"]
var r_2= undefined
try {
r_2 = base_2.map(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-100,823,893,"`B4j",460,"A"]
var r_3= undefined
try {
r_3 = base_3.map(argument6)
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
require("fs").writeFileSync("./experiments/map/mapMined/test974.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)