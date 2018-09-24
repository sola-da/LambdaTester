





var callbackArguments = [];
var argument1 = function (x) {
 callbackArguments.push(arguments) 

    mouseHandler[x] = this[x];
};
var argument2 = function (path) {
 callbackArguments.push(arguments) 

    path = join(dir, path);
    if (fs.statSync(path).isDirectory()) {
        exports.files(path, ret);
    } else if (path.match(/\.(js|coffee)$/)) {
        ret.push(path);
    }
};
var argument3 = r_1;
var argument4 = function (notice) {
 callbackArguments.push(arguments) 

    console.error(c.colorize(notice, 'COMMENT'));
};
var argument5 = r_2;
var argument6 = function (n) {
 callbackArguments.push(arguments) 

    color[color.length] = parseInt(n, 10) / 255;
};
var base_0 = [25,5e-324,"hs",":","n>yB"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [25,5e-324,"hs",":","n>yB"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [25,5e-324,"hs",":","n>yB"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [25,5e-324,"hs",":","n>yB"]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test475.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)