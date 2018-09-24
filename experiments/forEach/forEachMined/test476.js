





var callbackArguments = [];
var argument1 = function (id) {
 callbackArguments.push(arguments) 

    __data_colors[id] = colors[id];
};
var argument2 = null;
var argument3 = function (dir) {
 callbackArguments.push(arguments) 

    if (fs.existsSync(dir)) {
        if (!options.fullpath)
            error('path already exists: ' + dir, true);
        return;
    }
    var baseDir = path.dirname(dir);
    if (!fs.existsSync(baseDir) && !options.fullpath) {
        error('no such file or directory: ' + baseDir, true);
        return;
    }
    if (options.fullpath)
        mkdirSyncRecursive(dir);
    else
        fs.mkdirSync(dir, parseInt('0777', 8));
};
var argument4 = null;
var argument5 = function (msg) {
 callbackArguments.push(arguments) 

    if (message.text === msg.text && message.severity === msg.severity) {
        found = true;
    }
};
var argument6 = "%";
var argument7 = function (value, key) {
 callbackArguments.push(arguments) 

    value.dispose();
};
var base_0 = [705,403,823,25,25,714,122]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [705,403,823,25,25,714,122]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [705,403,823,25,25,714,122]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [705,403,823,25,25,714,122]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test476.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)