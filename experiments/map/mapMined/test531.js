





var callbackArguments = [];
var argument1 = function () {
 callbackArguments.push(arguments) 

    return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
};
var argument2 = r_0;
var argument3 = function (all) {
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
var argument4 = true;
var argument5 = function (delta) {
 callbackArguments.push(arguments) 

    return _.map(delta.ops, function (op) {
        if (op.value != null) {
            return op.value;
        } else {
            return '';
        }
    }).join('');
};
var argument6 = function (foldLine) {
 callbackArguments.push(arguments) 

    var folds = foldLine.folds.map(function (fold) {
            return fold.clone();
        });
    return new FoldLine(fd, folds);
};
var argument7 = {"4.399155487304713e+307":"1","x":1.589455066288949e+308,"F":"ui","":"]2p"};
var argument8 = 618;
var base_0 = ["`2",823,"8s3-","S",460,"q"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["`2",823,"8s3-","S",460,"q"]
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["`2",823,"8s3-","S",460,"q"]
var r_2= undefined
try {
r_2 = base_2.map(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["`2",823,"8s3-","S",460,"q"]
var r_3= undefined
try {
r_3 = base_3.map(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/map/mapMined/test531.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)