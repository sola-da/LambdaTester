





var callbackArguments = [];
var argument1 = function (d) {
 callbackArguments.push(arguments) 

    dojo.attr(d, 'width', w + '%');
};
var argument2 = null;
var argument3 = "()";
var argument4 = function (mode) {
 callbackArguments.push(arguments) 

    if (channel.removeMode[mode])
        channel.removeMode[mode].apply(channel, [
            user,
            arg
        ]);
};
var argument5 = function (element, index, array) {
 callbackArguments.push(arguments) 

    var ghFile = element.split(snippetsServer)[1];
    ghFile = ghFile.substr(0, ghFile.length - 1);
    checkScript(ghFile);
};
var argument6 = false;
var argument7 = null;
var argument8 = function (key, i) {
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
var argument9 = r_0;
var base_0 = [49,213,242]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [49,213,242]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [49,213,242]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [49,213,242]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test904.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)