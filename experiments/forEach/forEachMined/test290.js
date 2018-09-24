





var callbackArguments = [];
var argument1 = function (relatedEntity) {
 callbackArguments.push(arguments) 

    if (typeof relatedEntity === 'function') {
        mc.deferredFns.push(function () {
            relatedEntity = relatedEntity();
            updateRelatedEntityInCollection(relatedEntity, originalRelatedEntities, targetEntity, inverseProperty);
        });
    } else {
        updateRelatedEntityInCollection(relatedEntity, originalRelatedEntities, targetEntity, inverseProperty);
    }
};
var argument2 = function (widget) {
 callbackArguments.push(arguments) 

    if (!widget._destroyed) {
        if (widget.destroyRecursive) {
            widget.destroyRecursive();
        } else if (widget.destroy) {
            widget.destroy();
        }
    }
};
var argument3 = function (file) {
 callbackArguments.push(arguments) 

    if (!pushFile(file, p))
        return;
    if (options.recursive) {
        var oldDir = _pwd();
        _cd('', p);
        if (fs.statSync(file).isDirectory())
            list = list.concat(_ls('-R' + (options.all ? 'A' : ''), file + '/*'));
        _cd('', oldDir);
    }
};
var argument4 = function (x) {
 callbackArguments.push(arguments) 

    if (!this.isRoot || !skip) {
        acc = cb.call(this, acc, x);
    }
};
var argument5 = false;
var base_0 = [893,100,893,213]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,100,893,213]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,100,893,213]
var r_2= undefined
try {
r_2 = base_2.forEach(argument3)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893,100,893,213]
var r_3= undefined
try {
r_3 = base_3.forEach(argument4,argument5)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test290.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)