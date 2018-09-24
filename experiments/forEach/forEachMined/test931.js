





var callbackArguments = [];
var argument1 = function (prop) {
 callbackArguments.push(arguments) 

    Object.defineProperty(enchant.gl.PointLight.prototype, prop, {
        get: function () {
            return this['_' + prop];
        },
        set: function (n) {
            this['_' + prop] = n;
            this._changedPosition = true;
        }
    });
    enchant.gl.PointLight.prototype[prop] = 0;
};
var argument2 = function (x) {
 callbackArguments.push(arguments) 

    mouseHandler[x] = this[x];
};
var argument3 = r_1;
var argument4 = r_1;
var argument5 = function (line) {
 callbackArguments.push(arguments) 

    i = line.indexOf(':');
    key = lowercase(trim(line.substr(0, i)));
    val = trim(line.substr(i + 1));
    if (key) {
        if (parsed[key]) {
            parsed[key] += ', ' + val;
        } else {
            parsed[key] = val;
        }
    }
};
var argument6 = r_1;
var argument7 = function (categScene) {
 callbackArguments.push(arguments) 

    totalHeight += categScene.vars.link.labelHeight;
};
var argument8 = ["gS","B","-"];
var argument9 = 1.6962838041980032e+308;
var base_0 = ["h","=","U","[@WD","H",",B","0","6"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["h","=","U","[@WD","H",",B","0","6"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["h","=","U","[@WD","H",",B","0","6"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["h","=","U","[@WD","H",",B","0","6"]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test931.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)