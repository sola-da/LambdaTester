





var callbackArguments = [];
var argument1 = function (file) {
 callbackArguments.push(arguments) 

    (function (file) {
        fs.readFile(path.join(buildBase, 'yql', file), stack.add(function (err, data) {
            var shasum = crypto.createHash('sha1');
            shasum.update(data);
            var d = shasum.digest('hex');
            results.post[file] = d;
        }));
    }(file));
};
var argument2 = null;
var argument3 = ["7","OJ"];
var argument4 = function (b) {
 callbackArguments.push(arguments) 

    var tr = resultsTable.insertRow(-1);
    var assignedTo = b.assigned_to.name;
    if (assignedTo === 'nobody') {
        tr.classList.add('unassigned');
    }
    addColumn(tr, versionBadge(b.blocks));
    addColumn(tr, linkBug(b.id));
    addColumn(tr, linkBug(b.id, b.summary));
    addColumn(tr, assignedTo);
    addColumn(tr, b.last_change_time);
};
var argument5 = null;
var argument6 = function (length) {
 callbackArguments.push(arguments) 

    var offsetProp = pvc_Offset.namesSizeToOffset[length], offsetValue = this[offsetProp];
    if (null != offsetValue)
        if ('number' == typeof offsetValue)
            offset[offsetProp] = offsetValue;
        else if (refSize) {
            var refLength = refSize[length];
            null != refLength && (offset[offsetProp] = offsetValue.resolve(refLength));
        }
};
var argument7 = {"":843,"8.017633214005706e+307":"","T;":1.0649488299276588e+308};
var argument8 = [82];
var argument9 = function (path) {
 callbackArguments.push(arguments) 

    var module = require('./' + path);
    for (var i in module) {
        exports[i] = module[i];
    }
};
var base_0 = [714,59,893,"t","H5>*m","Z",59,126,0]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [714,59,893,"t","H5>*m","Z",59,126,0]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [714,59,893,"t","H5>*m","Z",59,126,0]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [714,59,893,"t","H5>*m","Z",59,126,0]
var r_3= undefined
try {
r_3 = base_3.forEach(argument9)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test254.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)