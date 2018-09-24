





var callbackArguments = [];
var argument1 = function (r) {
 callbackArguments.push(arguments) 

    var data = [
            r.name,
            r.owner,
            Date.now()
        ];
    aq.queue(function (lock) {
        queryNew(insert, data, function (err) {
            if (!err) {
                console.log('Imported channel record ' + r.name + ' (' + r.owner + ')');
            }
            lock.release();
        });
    });
};
var argument2 = true;
var argument3 = true;
var argument4 = function (child) {
 callbackArguments.push(arguments) 

    child.collapse(recurse);
};
var argument5 = null;
var argument6 = [893,59,-100,-100];
var argument7 = function (name) {
 callbackArguments.push(arguments) 

    wsWidgetProto[name] = function (val, force) {
        if (!this._init || force || val !== this.options[name]) {
            this.element.prop(name, this.formatValue(val));
            this.options[name] = val;
            this._propertyChange(name);
            this.mirrorValidity();
        }
    };
};
var argument8 = function (def) {
 callbackArguments.push(arguments) 

    if (def.value) {
        initializations.add(def.name.name, def.value);
        if (def.value.has_side_effects(compressor)) {
            def.value.walk(tw);
        }
    }
};
var argument9 = 705;
var argument10 = r_3;
var base_0 = [627,-1,627,82,122,-100]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [627,-1,627,82,122,-100]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [627,-1,627,82,122,-100]
var r_2= undefined
try {
r_2 = base_2.forEach(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [627,-1,627,82,122,-100]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test59.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)