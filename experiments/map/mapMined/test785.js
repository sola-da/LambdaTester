





var callbackArguments = [];
var argument1 = function (all) {
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
var argument2 = null;
var argument3 = function (pp) {
 callbackArguments.push(arguments) 

    return context.propertyPathFn(pp);
};
var argument4 = r_0;
var argument5 = r_0;
var argument6 = function foo(v) {
 callbackArguments.push(arguments) 

    setTimeout(function () {
        throw new Error(v);
    }, 10);
};
var argument7 = r_1;
var argument8 = r_1;
var base_0 = [59,714]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [59,714]
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [59,714]
var r_2= undefined
try {
r_2 = base_2.map(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
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
require("fs").writeFileSync("./experiments/map/mapMined/test785.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2]),"returnObjects":serialize([r_0,r_1,r_2]),"callbackArgs":callbackArguments}))
},300)