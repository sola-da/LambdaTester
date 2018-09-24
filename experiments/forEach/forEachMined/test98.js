





var callbackArguments = [];
var argument1 = function (file) {
 callbackArguments.push(arguments) 

    var code = options.fromString ? file : rjsFile.readFile(file, 'utf8');
    sourcesContent[file] = code;
    toplevel = parse(code, {
        filename: options.fromString ? name : file,
        toplevel: toplevel
    });
};
var argument2 = function (d, i) {
 callbackArguments.push(arguments) 

    if (td == d) {
        tdIndex = i;
    }
};
var argument3 = function (el, idx) {
 callbackArguments.push(arguments) 

    trees.push({
        ids: el,
        diff: item.diff - 1,
        parent: item.ids,
        parentIdx: idx
    });
};
var argument4 = function (k) {
 callbackArguments.push(arguments) 

    OTR[k] = root.OTR[k];
};
var base_0 = ["S","@","zp","A0w","=a","Fk","(","?","#"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["S","@","zp","A0w","=a","Fk","(","?","#"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["S","@","zp","A0w","=a","Fk","(","?","#"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument3)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["S","@","zp","A0w","=a","Fk","(","?","#"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument4)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test98.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)