





var callbackArguments = [];
var argument1 = function (prop) {
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
var argument2 = "";
var argument3 = function (cancelFn) {
 callbackArguments.push(arguments) 

    (cancelFn || noop)(true);
};
var argument4 = null;
var argument5 = {"714":""};
var argument6 = function (doc) {
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
var argument7 = false;
var argument8 = null;
var argument9 = function (tree) {
 callbackArguments.push(arguments) 

    toVisit.push({
        pos: tree.pos,
        ids: tree.ids
    });
};
var argument10 = {"49":"","5e-324":"]","1.7832016257449701e+308":"Lk","`":"6","2.397542913680057e+307":"YA"};
var base_0 = [82,-100,-1,714,-1,126,242,1.7976931348623157e+308,49,213]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [82,-100,-1,714,-1,126,242,1.7976931348623157e+308,49,213]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [82,-100,-1,714,-1,126,242,1.7976931348623157e+308,49,213]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [82,-100,-1,714,-1,126,242,1.7976931348623157e+308,49,213]
var r_3= undefined
try {
r_3 = base_3.forEach(argument9,argument10)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test36.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)