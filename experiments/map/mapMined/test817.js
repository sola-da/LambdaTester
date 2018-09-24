





var callbackArguments = [];
var argument1 = function (result) {
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
var argument2 = {"618":"","-1":893,"1.46423611865254e+308":"","":714};
var argument3 = r_0;
var argument4 = function (val) {
 callbackArguments.push(arguments) 

    return {
        name: elem.name,
        value: val.replace(rCRLF, '\r\n')
    };
};
var argument5 = r_0;
var argument6 = "32";
var argument7 = function (value) {
 callbackArguments.push(arguments) 

    return value == null ? '' : value + '';
};
var argument8 = 655;
var argument9 = [126,403,403,122,783,25,823,59,714];
var argument10 = function (word) {
 callbackArguments.push(arguments) 

    return word.charAt(0) === '"' ? word.match(/^"(.*)"$/)[1] : word;
};
var base_0 = ["a*","i+b#",")f","[","{^"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["a*","i+b#",")f","[","{^"]
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["a*","i+b#",")f","[","{^"]
var r_2= undefined
try {
r_2 = base_2.map(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.map(argument10)
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
require("fs").writeFileSync("./experiments/map/mapMined/test817.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)