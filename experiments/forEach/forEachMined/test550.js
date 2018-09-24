





var callbackArguments = [];
var argument1 = function (mediaield) {
 callbackArguments.push(arguments) 

    if (Ext.isEmpty(mediaield.get('mediaTypeId'))) {
        mediaError = true;
    }
};
var argument2 = function (val) {
 callbackArguments.push(arguments) 

    moxieData.append(appendData[i].name, val);
};
var argument3 = [893,714];
var argument4 = function (datum) {
 callbackArguments.push(arguments) 

    datum_deselect.call(datum);
};
var argument5 = function (c) {
 callbackArguments.push(arguments) 

    assert.ok(_.isArray(c));
    assert.ok(c.length > 1);
    c.forEach(function (d) {
        assert.strictEqual(c, d.cluster);
        c.forEach(function (e) {
            assert.ok(spec.metric(d, e) < spec.clusterDistance * 2);
        });
    });
};
var base_0 = [655,213,49,25,403,627,100,403]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [655,213,49,25,403,627,100,403]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [655,213,49,25,403,627,100,403]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [655,213,49,25,403,627,100,403]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test550.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)