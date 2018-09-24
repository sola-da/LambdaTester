





var callbackArguments = [];
var argument1 = function (o) {
 callbackArguments.push(arguments) 

    var obj = {
            'id': o,
            'text': vars.format.value(o)
        };
    data.push(obj);
};
var argument2 = r_0;
var argument3 = function (command) {
 callbackArguments.push(arguments) 

    self.commands[command] = function (argv, callback) {
        log.verbose('command', command, argv);
        return require('./' + command)(self, argv, callback);
    };
};
var argument4 = function (prop) {
 callbackArguments.push(arguments) 

    Object.defineProperty(enchant.gl.Sprite3D.prototype, prop, {
        get: function () {
            return this['_' + prop];
        },
        set: function (scale) {
            this['_' + prop] = scale;
            this._changedScale = true;
        }
    });
};
var argument5 = r_0;
var argument6 = function (klass) {
 callbackArguments.push(arguments) 

    if (!$(this).hasClass(klass))
        classList.push(klass);
};
var base_0 = ["_","7","u"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["_","7","u"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["_","7","u"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["_","7","u"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test761.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)