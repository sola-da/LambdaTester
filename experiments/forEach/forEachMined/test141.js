





var callbackArguments = [];
var argument1 = function (handler) {
 callbackArguments.push(arguments) 

    if (event.path.substr(0, pl) === path) {
        var ev = {};
        for (var key in event) {
            ev[key] = event[key];
        }
        ev.relativePath = event.path.replace(new RegExp('^' + path), '');
        try {
            handler(ev);
        } catch (e) {
            console.error('\'change\' handler failed: ', e, e.stack);
            self._emit('error', e);
        }
    }
};
var argument2 = function (n) {
 callbackArguments.push(arguments) 

    self.attachButtonBehavior(n, self.nextBtnClass, self.nextFunc);
};
var argument3 = false;
var argument4 = function (x) {
 callbackArguments.push(arguments) 

    acc.push(this.path);
};
var argument5 = r_0;
var argument6 = "";
var argument7 = function (child) {
 callbackArguments.push(arguments) 

    child._onRenderEnd(animated);
};
var argument8 = r_0;
var base_0 = ["|","u#rh","+","a","r","6O","n"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["|","u#rh","+","a","r","6O","n"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["|","u#rh","+","a","r","6O","n"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["|","u#rh","+","a","r","6O","n"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7,argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test141.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)