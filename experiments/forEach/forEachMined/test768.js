





var callbackArguments = [];
var argument1 = function (node) {
 callbackArguments.push(arguments) 

    newP.appendChild(node);
};
var argument2 = {"618":"","-1":893,"1.46423611865254e+308":"","":714};
var argument3 = r_0;
var argument4 = function (key) {
 callbackArguments.push(arguments) 

    this._dialogs[key].destroy();
};
var argument5 = r_0;
var argument6 = "32";
var argument7 = function (entry) {
 callbackArguments.push(arguments) 

    let filtered = Params.filter(entry, {
            activate: null,
            state_changed: null,
            context: null
        });
    let action = new Gio.SimpleAction(entry);
    let context = filtered.context || actionMap;
    if (filtered.activate)
        action.connect('activate', filtered.activate.bind(context));
    if (filtered.state_changed)
        action.connect('state-changed', filtered.state_changed.bind(context));
    actionMap.add_action(action);
};
var argument8 = 655;
var argument9 = [126,403,403,122,783,25,823,59,714];
var argument10 = function (storeName) {
 callbackArguments.push(arguments) 

    store = tx.objectStore(storeName);
    stores.push({
        name: storeName,
        keyPath: store.keyPath,
        autoIncrement: store.autoIncrement,
        count: store.count(),
        indices: Array.prototype.slice.apply(store.indexNames)
    });
};
var base_0 = ["a*","i+b#",")f","[","{^"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["a*","i+b#",")f","[","{^"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["a*","i+b#",")f","[","{^"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["a*","i+b#",")f","[","{^"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument10)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test768.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)