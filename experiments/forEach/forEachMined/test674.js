





var callbackArguments = [];
var argument1 = function (id) {
 callbackArguments.push(arguments) 

    widths[id] = maxWidth;
};
var argument2 = 8.945673297540947e+306;
var argument3 = function (trait) {
 callbackArguments.push(arguments) 

    forEach(getOwnPropertyNames(trait), function (name) {
        var pd = trait[name];
        if (hasOwnProperty(newTrait, name) && !newTrait[name].required) {
            if (pd.required) {
                return;
            }
            if (!isSameDesc(newTrait[name], pd)) {
                newTrait[name] = makeConflictingPropDesc(name);
            }
        } else {
            newTrait[name] = pd;
        }
    });
};
var argument4 = false;
var argument5 = r_1;
var argument6 = function (f, i) {
 callbackArguments.push(arguments) 

    this._addRow(i + 1, this.getFileType(f.name), f.name, f.size);
};
var argument7 = r_2;
var argument8 = function (item) {
 callbackArguments.push(arguments) 

    var height = (items.length + (item.submenu ? item.submenu.length : 0)) * 24;
    me.maxHeight = Math.max(me.maxHeight, height);
};
var argument9 = r_1;
var base_0 = ["#v","`&","aa","QZps","kW%","(3","]T2Qz",":","h"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["#v","`&","aa","QZps","kW%","(3","]T2Qz",":","h"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["#v","`&","aa","QZps","kW%","(3","]T2Qz",":","h"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["#v","`&","aa","QZps","kW%","(3","]T2Qz",":","h"]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test674.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)