





var callbackArguments = [];
var argument1 = function (m) {
 callbackArguments.push(arguments) 

    addRole(m.roleId);
};
var argument2 = null;
var argument3 = false;
var argument4 = function (f) {
 callbackArguments.push(arguments) 

    if (f[0] != '.') {
        arr.push(f);
    }
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
var argument6 = function (n) {
 callbackArguments.push(arguments) 

    searchData = searchData.concat(vars.data.nested.all[n]);
};
var base_0 = [595,893,1.7976931348623157e+308,460,607,460,242,460,82]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [595,893,1.7976931348623157e+308,460,607,460,242,460,82]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [595,893,1.7976931348623157e+308,460,607,460,242,460,82]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [595,893,1.7976931348623157e+308,460,607,460,242,460,82]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test716.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)