





var callbackArguments = [];
var argument1 = function (categScene) {
 callbackArguments.push(arguments) 

    totalHeight += categScene.vars.link.labelHeight;
};
var argument2 = false;
var argument3 = function (prompt) {
 callbackArguments.push(arguments) 

    prompt.message = chalk.stripColor(prompt.message);
};
var argument4 = true;
var argument5 = "U";
var argument6 = function (node2) {
 callbackArguments.push(arguments) 

    var n2, xx, yy;
    if (checked.indexOf(node2) < 0) {
        n2 = accessor ? accessor(node2) : [
            node2.x,
            node2.y
        ];
        xx = Math.abs(n1[0] - n2[0]);
        yy = Math.abs(n1[1] - n2[1]);
        return distances.push(Math.sqrt(xx * xx + yy * yy));
    }
};
var argument7 = {"8.455170510563758e+307":"K","c,":607};
var argument8 = r_1;
var argument9 = function (val, key) {
 callbackArguments.push(arguments) 

    buggyZero = 1 / key === -Infinity;
};
var argument10 = r_2;
var base_0 = [-1,893,893,59,823,595,49,122]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-1,893,893,59,823,595,49,122]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-1,893,893,59,823,595,49,122]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-1,893,893,59,823,595,49,122]
var r_3= undefined
try {
r_3 = base_3.forEach(argument9,argument10)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test136.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)