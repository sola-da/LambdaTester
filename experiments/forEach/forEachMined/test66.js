





var callbackArguments = [];
var argument1 = function (key) {
 callbackArguments.push(arguments) 

    this.bindKey(key, keyList[key]);
};
var argument2 = function (key, keyMap) {
 callbackArguments.push(arguments) 

    array.push({
        key: key,
        values: entries(keyMap, depth)
    });
};
var argument3 = r_0;
var argument4 = function (mutation) {
 callbackArguments.push(arguments) 

    if (mutation.addedNodes.length > 0) {
        base.execute(mutation.addedNodes);
    } else if (mutation.attributeName === 'data-src') {
        base.execute(mutation.target);
    }
};
var argument5 = function (ext) {
 callbackArguments.push(arguments) 

    app.get('*.' + ext, function (req, res, next) {
        res.sendfile(req.url.path);
    });
};
var base_0 = ["9","&"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["9","&"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["9","&"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["9","&"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument5)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test66.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)