





var callbackArguments = [];
var argument1 = function (i, elm) {
 callbackArguments.push(arguments) 

    var template = $(elm).html().trim();
    var output = $.mustache(template, view, partials);
    return $(output).get();
};
var argument2 = null;
var argument3 = function (file) {
 callbackArguments.push(arguments) 

    var name = path.basename(file, path.extname(file));
    if (exports.isEmptyFile(file)) {
        grunt.verbose.warn('Skipping empty path:'.yellow, file);
    } else {
        if (opts.namespace === true) {
            obj[name] = exports.readData(file);
        } else {
            obj = exports.readData(file);
        }
    }
};
var argument4 = r_1;
var argument5 = false;
var argument6 = function (value) {
 callbackArguments.push(arguments) 

    return value == null ? '' : value + '';
};
var argument7 = 5.220483001833016e+307;
var argument8 = r_1;
var argument9 = function (prefix) {
 callbackArguments.push(arguments) 

    return prefix + 'ZeroLine';
};
var argument10 = null;
var argument11 = "QL";
var base_0 = ["++m",213,"6I","Ue|",655,157]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["++m",213,"6I","Ue|",655,157]
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["++m",213,"6I","Ue|",655,157]
var r_2= undefined
try {
r_2 = base_2.map(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
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
require("fs").writeFileSync("./experiments/map/mapMined/test834.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)