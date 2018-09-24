





var callbackArguments = [];
var argument1 = function (side) {
 callbackArguments.push(arguments) 

    sides[side] = Math.max(a[side] || 0, b[side] || 0);
};
var argument2 = false;
var argument3 = function (key) {
 callbackArguments.push(arguments) 

    this._getAttachment(attachments[key], {
        encode: true,
        ctx: ctx
    }, function (err, data) {
        var att = doc._attachments[key];
        att.data = data;
        delete att.stub;
        if (!--count) {
            callback(null, doc);
        }
    });
};
var argument4 = null;
var argument5 = false;
var argument6 = function (init) {
 callbackArguments.push(arguments) 

    var tw = new TreeWalker(function (node) {
            if (node instanceof AST_SymbolRef) {
                push_uniq(in_use, node.definition());
            }
        });
    init.walk(tw);
};
var argument7 = function (d) {
 callbackArguments.push(arguments) 

    completeParseCsdlEntityType(d.entityType, d.csdlEntityType, schema, metadataStore);
};
var argument8 = r_1;
var base_0 = ["v","8N+y","]v4","@","7RR"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["v","8N+y","]v4","@","7RR"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["v","8N+y","]v4","@","7RR"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["v","8N+y","]v4","@","7RR"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7,argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test102.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)