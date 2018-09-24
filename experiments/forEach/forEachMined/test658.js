





var callbackArguments = [];
var argument1 = function (d) {
 callbackArguments.push(arguments) 

    assert.notStrictEqual(d, undefined);
    assert.notStrictEqual(d.cluster, undefined);
    assert.strictEqual(d.cluster.length, 1);
    singlet.forEach(function (e) {
        if (d !== e) {
            assert.ok(spec.metric(d, e) > spec.clusterDistance);
        }
    });
};
var argument2 = function (fkName) {
 callbackArguments.push(arguments) 

    var fkProp = oldValue.entityType.getProperty(fkName);
    if (!fkProp.isPartOfKey) {
        oldValue.setProperty(fkName, null);
    }
};
var argument3 = r_1;
var argument4 = null;
var argument5 = function (handle) {
 callbackArguments.push(arguments) 

    var destroyMethodName = 'destroyRecursive' in handle ? 'destroyRecursive' : 'destroy' in handle ? 'destroy' : 'remove';
    var odh = aspect.before(this, 'destroy', function (preserveDom) {
            handle[destroyMethodName](preserveDom);
        });
    var hdh = aspect.after(handle, destroyMethodName, function () {
            odh.remove();
            hdh.remove();
        }, true);
};
var argument6 = function (key) {
 callbackArguments.push(arguments) 

    cli.log('                             ' + util.pad(key, 10) + '   ' + pbjs.sources[key].description);
};
var base_0 = [59,100,714,82,627]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [59,100,714,82,627]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [59,100,714,82,627]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [59,100,714,82,627]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test658.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)