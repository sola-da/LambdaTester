





var callbackArguments = [];
var argument1 = function addFile(expandedFile) {
 callbackArguments.push(arguments) 

    var stat = fs.lstatSync(expandedFile);
    if (!stat.isSymbolicLink()) {
        files.push(expandedFile);
        if (stat.isDirectory()) {
            fs.readdirSync(expandedFile).forEach(function (child) {
                addFile(expandedFile + '/' + child);
            });
        }
    }
};
var argument2 = false;
var argument3 = {"100":8.990654916863262e+307};
var argument4 = function (linkChildData) {
 callbackArguments.push(arguments) 

    linkChildData.clearVirtuals();
};
var argument5 = function (cp) {
 callbackArguments.push(arguments) 

    resolveCp(cp, metadataStore);
};
var argument6 = null;
var argument7 = function (k) {
 callbackArguments.push(arguments) 

    opts[k] = otr.smw[k];
};
var argument8 = false;
var argument9 = r_2;
var base_0 = ["C","s"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["C","s"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["C","s"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["C","s"]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test444.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)