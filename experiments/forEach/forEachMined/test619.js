





var callbackArguments = [];
var argument1 = function (e) {
 callbackArguments.push(arguments) 

    self.sm.on(e, function () {
        self.trigger('smp', [e].concat(Array.prototype.slice.call(arguments)));
    });
};
var argument2 = function (dp) {
 callbackArguments.push(arguments) 

    var pn = dp.name;
    var nv = newValue.getProperty(pn);
    oldValue.setProperty(pn, nv);
};
var argument3 = function (file) {
 callbackArguments.push(arguments) 

    debug('file %s', file);
    fs.watchFile(file, options, function (curr, prev) {
        if (prev.mtime < curr.mtime)
            fn(file);
    });
};
var argument4 = function (sym) {
 callbackArguments.push(arguments) 

    sym.validatorCtor = getValidatorCtor(sym);
};
var base_0 = [607,122,843]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [607,122,843]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [607,122,843]
var r_2= undefined
try {
r_2 = base_2.forEach(argument3)
}
catch(e) {
r_2= "Error"
}
var base_3 = [607,122,843]
var r_3= undefined
try {
r_3 = base_3.forEach(argument4)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test619.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)