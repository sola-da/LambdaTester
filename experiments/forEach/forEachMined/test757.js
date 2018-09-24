





var callbackArguments = [];
var argument1 = function (event) {
 callbackArguments.push(arguments) 

    SVG.Element.prototype[event] = function (f) {
        var self = this;
        this.node['on' + event] = typeof f == 'function' ? function () {
            return f.apply(self, arguments);
        } : null;
        return this;
    };
};
var argument2 = null;
var argument3 = null;
var argument4 = function (property, i) {
 callbackArguments.push(arguments) 

    data[property] = args[i];
};
var argument5 = {};
var argument6 = null;
var argument7 = function (key) {
 callbackArguments.push(arguments) 

    data[key] = settings.get(key);
};
var argument8 = function (arg) {
 callbackArguments.push(arguments) 

    args.push(formatError(arg));
};
var argument9 = null;
var argument10 = null;
var base_0 = [843]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [843]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [843]
var r_2= undefined
try {
r_2 = base_2.forEach(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [843]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test757.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)