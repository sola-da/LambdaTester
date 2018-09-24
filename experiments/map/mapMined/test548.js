





var callbackArguments = [];
var argument1 = function (rev) {
 callbackArguments.push(arguments) 

    pos--;
    return {
        rev: pos + '-' + rev.id,
        status: rev.opts.status
    };
};
var argument2 = {"3":"S","714":"","843":157,"1.8707147505862566e+307":1.024319838641586e+308,"":2.8766818609100017e+307};
var argument3 = function (version) {
 callbackArguments.push(arguments) 

    return version == info.current ? chalk.yellow(version) : version;
};
var argument4 = [82,122,213,969,126,213,893,100,242];
var argument5 = null;
var argument6 = function () {
 callbackArguments.push(arguments) 

    return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
};
var argument7 = false;
var argument8 = function (meta) {
 callbackArguments.push(arguments) 

    if (_.isString(meta)) {
        return _.merge(metadata, exports.readDataFiles(meta, opts));
    } else if (_.isObject(meta)) {
        return _.extend(metadata, meta);
    }
};
var argument9 = null;
var argument10 = ["f","cR8","b","%","2d","g","d4","q<","Z"];
var base_0 = [705,25,783,-1,714]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [705,25,783,-1,714]
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [705,25,783,-1,714]
var r_2= undefined
try {
r_2 = base_2.map(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [705,25,783,-1,714]
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
require("fs").writeFileSync("./experiments/map/mapMined/test548.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)