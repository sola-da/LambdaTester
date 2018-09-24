





var callbackArguments = [];
var argument1 = function (key) {
 callbackArguments.push(arguments) 

    if (key[0] === '(')
        return;
    funct['(blockscope)'].unshadow(key);
};
var argument2 = function (text) {
 callbackArguments.push(arguments) 

    var len = pv.Text.measureWidth(text, font);
    len > max && (max = len);
    return len;
};
var argument3 = {"595":1.5965483011839692e+307,"893":"ok(","7.584051725610258e+307":59};
var argument4 = "";
var argument5 = function (r) {
 callbackArguments.push(arguments) 

    var labels = options.labels;
    var units = options.units;
    return {
        units: r[units],
        labels: r[labels],
        hexcolor: r.hexcolor
    };
};
var argument6 = "";
var argument7 = {"655":595,"":"?"};
var argument8 = function (all) {
 callbackArguments.push(arguments) 

    var blobId = all[0], fileV = all[1];
    file = fileV;
    var previousId = file ? file.version : null;
    version = {
        userAccountId: userAccount.id,
        date: new Date(),
        blobId: blobId,
        creatorId: userAccount.id,
        previousId: previousId
    };
    version.id = Version.createHash(version);
    return Version.insert(version).execWithin(tx);
};
var argument9 = true;
var base_0 = [823,"X^",969,"Oy",705,82,"3=4jM","w","-"]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [823,"X^",969,"Oy",705,82,"3=4jM","w","-"]
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [823,"X^",969,"Oy",705,82,"3=4jM","w","-"]
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [823,"X^",969,"Oy",705,82,"3=4jM","w","-"]
var r_3= undefined
try {
r_3 = base_3.map(argument8,argument9)
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
require("fs").writeFileSync("./experiments/map/mapMined/test678.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)