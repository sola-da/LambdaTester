





var callbackArguments = [];
var argument1 = function (stuff) {
 callbackArguments.push(arguments) 

    model.compareThings(undefined, stuff).should.equal(-1);
    model.compareThings(stuff, undefined).should.equal(1);
};
var argument2 = ";";
var argument3 = null;
var argument4 = function (file) {
 callbackArguments.push(arguments) 

    debug('file %s', file);
    fs.watchFile(file, options, function (curr, prev) {
        if (prev.mtime < curr.mtime)
            fn(file);
    });
};
var argument5 = ["evT>$","(d","n","2","<","c",")","(","@"];
var argument6 = function (axis) {
 callbackArguments.push(arguments) 

    var isDiscrete = 'discrete' === axis.scaleType;
    isDiscrete || axis.option.defaults({ Offset: 0.01 });
};
var argument7 = function (kp) {
 callbackArguments.push(arguments) 

    uriKey = uriKey + delim + kp.nameOnServer + '=' + fmtProperty(kp, aspect);
    delim = ',';
};
var argument8 = ["M","I","W","$[","|","<",":","0","[W-"];
var argument9 = r_3;
var base_0 = [213,242,655,783,157,403,655]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [213,242,655,783,157,403,655]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [213,242,655,783,157,403,655]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [213,242,655,783,157,403,655]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test586.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)