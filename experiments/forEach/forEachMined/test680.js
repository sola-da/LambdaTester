





var callbackArguments = [];
var argument1 = function (fold) {
 callbackArguments.push(arguments) 

    fold.setFoldLine(foldLine);
};
var argument2 = 6.039871226994925e+307;
var argument3 = ["G","O"];
var argument4 = function (value, key) {
 callbackArguments.push(arguments) 

    lines.push(key + ': ' + value);
};
var argument5 = function (p) {
 callbackArguments.push(arguments) 

    var curr = path.join(dir, p);
    var stat = fs.statSync(curr);
    if (stat.isDirectory()) {
        _rmDir(curr);
    } else {
        try {
            fs.unlinkSync(curr);
        } catch (e) {
            if (e.code === 'EPERM') {
                fs.chmodSync(curr, '0666');
                fs.unlinkSync(curr);
            } else {
                throw e;
            }
        }
    }
};
var argument6 = false;
var argument7 = 1.7976931348623157e+308;
var argument8 = function (entity) {
 callbackArguments.push(arguments) 

    entity.entityAspect.isBeingSaved = flag;
};
var base_0 = [627,126,-100,714,82]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [627,126,-100,714,82]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [627,126,-100,714,82]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [627,126,-100,714,82]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test680.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)