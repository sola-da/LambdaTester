





var callbackArguments = [];
var argument1 = function (key, i) {
 callbackArguments.push(arguments) 

    path.push(key);
    if (modifiers.pre)
        modifiers.pre.call(state, state.node[key], key);
    var child = walker(state.node[key]);
    child.isLast = i == keys.length - 1;
    child.isFirst = i == 0;
    if (modifiers.post)
        modifiers.post.call(state, child);
    path.pop();
};
var argument2 = function _(key, value) {
 callbackArguments.push(arguments) 

    f(key);
};
var argument3 = true;
var argument4 = true;
var argument5 = function (eventName) {
 callbackArguments.push(arguments) 

    $.fn[eventName] = function (callback) {
        return this.on(eventName, callback);
    };
};
var argument6 = function (k) {
 callbackArguments.push(arguments) 

    self.fields[k] = fields[k];
};
var argument7 = true;
var argument8 = true;
var base_0 = [49,627,213]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [49,627,213]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [49,627,213]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [49,627,213]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test498.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)