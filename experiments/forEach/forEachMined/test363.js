





var callbackArguments = [];
var argument1 = function (e) {
 callbackArguments.push(arguments) 

    if (placed.indexOf(e) < 0) {
        if (!a[''])
            a[''] = [];
        a[''].push(e);
    }
};
var argument2 = null;
var argument3 = null;
var argument4 = function (el) {
 callbackArguments.push(arguments) 

    bower[el] = pkg[el];
    jqConfig[el] = pkg[el];
};
var argument5 = "C>8,FZfO";
var argument6 = false;
var argument7 = function (key) {
 callbackArguments.push(arguments) 

    var _r = self.rooms[key];
    if (found)
        return;
    if (roomName == 'nothing') {
        found = true;
        console.log('Looks like there is nothing here..');
        return self.executer(self.currentRoom);
    }
    Object.keys(_r).forEach(function (k, v) {
        if (k === roomName) {
            found = true;
            return self.executer(_r);
        }
    });
};
var argument8 = function (key) {
 callbackArguments.push(arguments) 

    child[key] = parent[key];
};
var argument9 = r_1;
var base_0 = [460,969,607,595,49,595]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [460,969,607,595,49,595]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [460,969,607,595,49,595]
var r_2= undefined
try {
r_2 = base_2.forEach(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [460,969,607,595,49,595]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test363.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)