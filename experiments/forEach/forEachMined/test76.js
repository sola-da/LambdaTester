





var callbackArguments = [];
var argument1 = function (route) {
 callbackArguments.push(arguments) 

    route(app);
};
var argument2 = true;
var argument3 = null;
var argument4 = function (side) {
 callbackArguments.push(arguments) 

    sidesOut[side] = (sides[side] || 0) + by;
};
var argument5 = function (entity) {
 callbackArguments.push(arguments) 

    that._linkRelatedEntities(entity);
};
var argument6 = r_0;
var argument7 = function (dir) {
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
var argument8 = ["Z#","0Q2","M","C<P"];
var argument9 = r_0;
var base_0 = [595]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [595]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [595]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [595]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test76.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)