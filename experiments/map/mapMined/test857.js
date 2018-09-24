





var callbackArguments = [];
var argument1 = function (c) {
 callbackArguments.push(arguments) 

    return clamp(Math.round(c), 255);
};
var argument2 = null;
var argument3 = [595,0];
var argument4 = function (elem, i) {
 callbackArguments.push(arguments) 

    return callback.call(elem, i, elem);
};
var argument5 = null;
var argument6 = function () {
 callbackArguments.push(arguments) 

    return domain.alphabet[_.random(0, domain.alphabet.length - 1)];
};
var argument7 = null;
var argument8 = r_0;
var argument9 = function (m) {
 callbackArguments.push(arguments) 

    var cutAt = m.indexOf('.');
    if (cutAt === -1) {
        cutAt = m.indexOf('_');
    }
    var root = m.substring(0, cutAt);
    m = m.substring(cutAt + 1);
    var rootPath = Ink.getPath(root);
    return [
        '<script type="text/javascript" src="',
        rootPath,
        m.replace(/\./g, '/'),
        '/"></script>'
    ].join('');
};
var argument10 = r_0;
var argument11 = true;
var base_0 = [783,655,655,893,714,893,403,618,607]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [783,655,655,893,714,893,403,618,607]
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [783,655,655,893,714,893,403,618,607]
var r_2= undefined
try {
r_2 = base_2.map(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [783,655,655,893,714,893,403,618,607]
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
require("fs").writeFileSync("./experiments/map/mapMined/test857.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)