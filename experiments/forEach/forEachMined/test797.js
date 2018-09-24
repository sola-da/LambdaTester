





var callbackArguments = [];
var argument1 = function (keyPart) {
 callbackArguments.push(arguments) 

    var binding = this.parseKeys(keyPart);
    var id = KEY_MODS[binding.hashId] + binding.key;
    chain += (chain ? ' ' : '') + id;
    this._addCommandToBinding(chain, 'chainKeys');
};
var argument2 = true;
var argument3 = [783,126,627,49,"W`","<","jv","+]Kl"];
var argument4 = function (node) {
 callbackArguments.push(arguments) 

    this.selected.push(node.innerHTML);
};
var argument5 = function (d) {
 callbackArguments.push(arguments) 

    try {
        d.center();
        assert.ok(true);
    } catch (e) {
        assert.ok(false);
    }
    cluster.forEach(function (e) {
        if (d !== e) {
            assert.ok(spec.metric(d.center(), e.center()) > spec.clusterDistance);
        }
    });
    singlet.forEach(function (e) {
        assert.ok(spec.metric(d.center(), e) > spec.clusterDistance);
    });
};
var argument6 = "X";
var argument7 = [82,705,714,-100,893,595,100,157,823];
var argument8 = function (r) {
 callbackArguments.push(arguments) 

    sel.substractPoint(r.cursor);
};
var argument9 = "";
var base_0 = [100,403,"D",0,122,"1","C"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [100,403,"D",0,122,"1","C"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [100,403,"D",0,122,"1","C"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [100,403,"D",0,122,"1","C"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8,argument9)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test797.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)