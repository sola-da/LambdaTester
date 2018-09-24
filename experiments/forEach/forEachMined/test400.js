





var callbackArguments = [];
var argument1 = function (ct) {
 callbackArguments.push(arguments) 

    var complexType = parseCsdlComplexType(ct, schema, metadataStore);
};
var argument2 = null;
var argument3 = [969,59,213,783,893,823,843,705];
var argument4 = function (type) {
 callbackArguments.push(arguments) 

    var desc = descs[type];
    if (desc) {
        if (type === 'prop') {
            desc = $.extend({ writeable: true }, desc);
        } else {
            desc = $.extend({}, desc, { writeable: true });
        }
        extendQ[type](nodeName, prop, desc);
        if (nodeName != '*' && webshims.cfg.extendNative && type == 'prop' && desc.value && $.isFunction(desc.value)) {
            extendNativeValue(nodeName, prop, desc);
        }
        descs[type] = desc;
    }
};
var argument5 = "";
var argument6 = function (result) {
 callbackArguments.push(arguments) 

    delete result._bulk_seq;
    if (result.error) {
        aresults.push(result);
        return;
    }
    var metadata = result.metadata;
    var rev = merge.winningRev(metadata);
    aresults.push({
        ok: true,
        id: metadata.id,
        rev: rev
    });
    if (utils.isLocalId(metadata.id)) {
        return;
    }
    IdbPouch.Changes.notify(name);
    IdbPouch.Changes.notifyLocalWindows(name);
};
var argument7 = "";
var argument8 = [122,714,100];
var argument9 = function (x) {
 callbackArguments.push(arguments) 

    if (typeof x == 'string')
        this.exec(x, editor);
    else
        this.exec(x[0], editor, x[1]);
};
var argument10 = 823;
var base_0 = [126,5e-324,969,607,213,460]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [126,5e-324,969,607,213,460]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [126,5e-324,969,607,213,460]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [126,5e-324,969,607,213,460]
var r_3= undefined
try {
r_3 = base_3.forEach(argument9,argument10)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test400.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)