





var callbackArguments = [];
var argument1 = function (key) {
 callbackArguments.push(arguments) 

    internalValues[key] = defaults[key];
    Object.defineProperty(values, key, {
        get: function () {
            return internalValues[key];
        },
        configurable: false,
        enumerable: true
    });
};
var argument2 = null;
var argument3 = null;
var argument4 = function (source) {
 callbackArguments.push(arguments) 

    for (var prop in source) {
        if (source[prop] !== void 0) {
            obj[prop] = source[prop];
        }
    }
};
var argument5 = ["h","c","Y%Q"];
var argument6 = false;
var argument7 = function (fnName) {
 callbackArguments.push(arguments) 

    self.server[fnName] = function () {
        throw Error('Cannot call the ' + fnName + ' function on the ' + name + ' hub because the server connection is not established. Place your server calls within the connect(...).done() block');
    };
};
var argument8 = null;
var argument9 = false;
var argument10 = function (cp) {
 callbackArguments.push(arguments) 

    var cos = target.getProperty(cp.name);
    if (cp.isScalar) {
        rejectChangesCore(cos);
    } else {
        cos._rejectChanges();
        cos.forEach(rejectChangesCore(co));
    }
};
var argument11 = {"u+O":59};
var argument12 = r_1;
var base_0 = [-100,618,1.7976931348623157e+308,25,157,969,49]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-100,618,1.7976931348623157e+308,25,157,969,49]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-100,618,1.7976931348623157e+308,25,157,969,49]
var r_2= undefined
try {
r_2 = base_2.forEach(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-100,618,1.7976931348623157e+308,25,157,969,49]
var r_3= undefined
try {
r_3 = base_3.forEach(argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test661.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)