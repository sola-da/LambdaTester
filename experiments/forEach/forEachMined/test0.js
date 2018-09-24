





var callbackArguments = [];
var argument1 = function (eventLongname) {
 callbackArguments.push(arguments) 

    doc = _events[eventLongname] || find(data, {
        longname: eventLongname,
        kind: 'event'
    })[0];
    if (doc) {
        if (!doc.listeners) {
            doc.listeners = [listener.longname];
        } else {
            doc.listeners.push(listener.longname);
        }
        _events[eventLongname] = _events[eventLongname] || doc;
    }
};
var argument2 = null;
var argument3 = function (key) {
 callbackArguments.push(arguments) 

    if (!(key in PouchAlt)) {
        PouchAlt[key] = PouchDB[key];
    }
};
var argument4 = r_0;
var argument5 = r_0;
var argument6 = function (label) {
 callbackArguments.push(arguments) 

    label.dir = this.getTextDir(label.innerHTML, label.dir);
};
var argument7 = function (arg) {
 callbackArguments.push(arguments) 

    if (arg in this.commands) {
        var args = argv.splice(0, argv.indexOf(arg));
        argv.shift();
        if (commands.length > 0) {
            commands[commands.length - 1].args = args;
        }
        commands.push({
            name: arg,
            args: []
        });
    }
};
var base_0 = [-100,655,0]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-100,655,0]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-100,655,0]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-100,655,0]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test0.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)