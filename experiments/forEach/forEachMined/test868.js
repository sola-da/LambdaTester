





var callbackArguments = [];
var argument1 = function (validator) {
 callbackArguments.push(arguments) 

    ok = validate(that, validator, value, context) && ok;
};
var argument2 = {"9":"","618":"{d,","714":460,"6.057992580806615e+307":1.7055360203662907e+308,"":"","4.947335672747997e+307":1.7693423705193614e+308};
var argument3 = function (l) {
 callbackArguments.push(arguments) 

    if (l.d3plus.merged instanceof Array) {
        if (!d.d3plus.merged)
            d.d3plus.merged = [];
        d.d3plus.merged = d.d3plus.merged.concat(l.d3plus.merged);
    }
    if (l.d3plus.text)
        d.d3plus.text = l.d3plus.text;
};
var argument4 = {"0":"=","100":3.393442888848869e+307,"242":"}","4.3912393991028465e+307":705,"6.509093929888981e+307":705,"i":"","7.76535490148246e+307":82,"3.659453639482625e+307":59};
var argument5 = function (method) {
 callbackArguments.push(arguments) 

    SVG.Set.prototype[method] = function () {
        for (var i = 0, il = this.members.length; i < il; i++)
            if (this.members[i] && typeof this.members[i][method] == 'function')
                this.members[i][method].apply(this.members[i], arguments);
        return method == 'animate' ? this.fx || (this.fx = new SVG.SetFX(this)) : this;
    };
};
var argument6 = r_0;
var argument7 = {"157":"","!":"x","":""};
var argument8 = function (prop) {
 callbackArguments.push(arguments) 

    if (!modifyProps[name][prop]) {
        modifyProps[name][prop] = [];
        havePolyfill[prop] = true;
    }
    if (desc.set) {
        if (only) {
            desc.set.only = only;
        }
        modifyProps[name][prop].push(desc.set);
    }
    if (desc.initAttr) {
        initProp.content(name, prop);
    }
};
var argument9 = true;
var base_0 = [460,157]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [460,157]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [460,157]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [460,157]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8,argument9)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test868.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)