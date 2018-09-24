





var callbackArguments = [];
var argument1 = function (r) {
 callbackArguments.push(arguments) 

    c = r.insertCell(o.colIndex + 1);
    c.innerHTML = '&nbsp;';
};
var argument2 = true;
var argument3 = {"1.7207422997466325e+308":"","1.3095297103889539e+308":59,"a":1.5374837878717174e+308,"":"'","-100":""};
var argument4 = function (c) {
 callbackArguments.push(arguments) 

    c.entityType.concurrencyProperties.forEach(function (cp) {
        updateConcurrencyProperty(c, cp);
    });
};
var argument5 = r_1;
var argument6 = function (c) {
 callbackArguments.push(arguments) 

    titles.push(vars.format.value(c));
};
var argument7 = {"893":"","1.5839152669485746e+307":"T","1.0610074277964655e+308":"kr7LVO","e)Ej;":""};
var argument8 = null;
var argument9 = function (prop) {
 callbackArguments.push(arguments) 

    Object.defineProperty(enchant.gl.Sprite3D.prototype, prop, {
        get: function () {
            return this['_' + prop];
        },
        set: function (n) {
            this['_' + prop] = n;
            this._changedTranslation = true;
        }
    });
};
var argument10 = null;
var argument11 = null;
var base_0 = [25,59,49,0,607,242]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [25,59,49,0,607,242]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [25,59,49,0,607,242]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [25,59,49,0,607,242]
var r_3= undefined
try {
r_3 = base_3.forEach(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test299.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)