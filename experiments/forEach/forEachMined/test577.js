





var callbackArguments = [];
var argument1 = function (fold) {
 callbackArguments.push(arguments) 

    this.addFold(fold);
};
var argument2 = function (leaf) {
 callbackArguments.push(arguments) 

    self.get(id, {
        rev: leaf,
        revs: opts.revs,
        attachments: opts.attachments
    }, function (err, doc) {
        if (!err) {
            result.push({ ok: doc });
        } else {
            result.push({ missing: leaf });
        }
        count--;
        if (!count) {
            callback(null, result);
        }
    });
};
var argument3 = function (name) {
 callbackArguments.push(arguments) 

    s.push(name + ': ' + pvc.stringify(this.atoms[name].value));
};
var argument4 = r_1;
var argument5 = function (config) {
 callbackArguments.push(arguments) 

    var group = _.cloneDeep(config);
    group.bytes = bytes.substring(config.a, config.b);
    if (heldBytes !== undefined)
        group.heldBytes = heldBytes.substring(config.a, config.b);
    $scope.groups.push(group);
};
var base_0 = ["$j","W","gl-","d"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["$j","W","gl-","d"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["$j","W","gl-","d"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument3,argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["$j","W","gl-","d"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument5)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test577.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)