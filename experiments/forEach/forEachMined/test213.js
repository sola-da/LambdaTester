





var callbackArguments = [];
var argument1 = function (entry) {
 callbackArguments.push(arguments) 

    var path = entry[0];
    var rev;
    if (!entry[1]) {
        rev = null;
    } else {
        if (entry[1].is_dir) {
            return;
        }
        rev = entry[1].rev;
    }
    self._revCache.set(path, rev);
};
var argument2 = function (d) {
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
var argument3 = {"25":25,"157":1.031095186017137e+308,"403":1.019827371296065e+308,"1.062182293384743e+308":"6n","5.681407587487721e+307":"","":"","x":"","L":"","+":""};
var argument4 = function (element) {
 callbackArguments.push(arguments) 

    var elementData = element.data(NG_ANIMATE_CSS_DATA_KEY);
    if (elementData) {
        (elementData.closeAnimationFn || noop)();
    }
};
var argument5 = null;
var argument6 = r_2;
var argument7 = function (onLoad) {
 callbackArguments.push(arguments) 

    onLoad && onLoad(module);
};
var base_0 = [242,"J"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [242,"J"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [242,"J"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [242,"J"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test213.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)