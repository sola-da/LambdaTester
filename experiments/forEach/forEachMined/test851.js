





var callbackArguments = [];
var argument1 = function (doc) {
 callbackArguments.push(arguments) 

    var tr = $('<tr />');
    self.el.find('tbody').append(tr);
    var newView = new my.GridRow({
            model: doc,
            el: tr,
            fields: self.fields
        });
    newView.render();
};
var argument2 = function (ln) {
 callbackArguments.push(arguments) 

    keys[getKey(ln)] = true;
};
var argument3 = null;
var argument4 = function (c) {
 callbackArguments.push(arguments) 

    var key = vars[c].value || c;
    returnObj.d3plus[key] = d3.sum(leaves, function (d) {
        if (vars[c].value) {
            var a = fetchValue(vars, d, vars[c].value);
            if (typeof a !== 'number') {
                a = a ? 1 : 0;
            }
        } else if (c === 'total') {
            var a = 1;
        } else {
            var a = 0;
        }
        return a;
    });
};
var argument5 = 2.1948952514040151e+307;
var argument6 = function (prop) {
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
var argument7 = null;
var argument8 = null;
var base_0 = ["$","{","j",-100,783,403]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["$","{","j",-100,783,403]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["$","{","j",-100,783,403]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["$","{","j",-100,783,403]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test851.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)