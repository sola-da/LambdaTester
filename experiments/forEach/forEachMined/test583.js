





var callbackArguments = [];
var argument1 = function (p) {
 callbackArguments.push(arguments) 

    pvc[p] = def.noop;
};
var argument2 = function (command) {
 callbackArguments.push(arguments) 

    self.commands[command] = function (argv, callback) {
        log.verbose('command', command, argv);
        return require('./' + command)(self, argv, callback);
    };
};
var argument3 = function (arg, i) {
 callbackArguments.push(arguments) 

    var doc = new self(arg);
    docs[i] = doc;
    doc.save(function (err) {
        if (err)
            return promise.error(err);
        --count || promise.complete.apply(promise, docs);
    });
};
var argument4 = true;
var argument5 = function (res) {
 callbackArguments.push(arguments) 

    imports_built.push(res.build(nesting, async));
};
var base_0 = [1.7976931348623157e+308,714]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [1.7976931348623157e+308,714]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [1.7976931348623157e+308,714]
var r_2= undefined
try {
r_2 = base_2.forEach(argument3,argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [1.7976931348623157e+308,714]
var r_3= undefined
try {
r_3 = base_3.forEach(argument5)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test583.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)