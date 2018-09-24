





var callbackArguments = [];
var argument1 = function (name) {
 callbackArguments.push(arguments) 

    app.middleware(name, namedHandler(name));
};
var argument2 = function (nonletter) {
 callbackArguments.push(arguments) 

    expect(XRegExp('\\P{L}').test(nonletter)).toBe(true);
    expect(XRegExp('\\P{Letter}').test(nonletter)).toBe(true);
    expect(XRegExp('\\PL').test(nonletter)).toBe(true);
    expect(XRegExp('\\p{^L}').test(nonletter)).toBe(true);
    expect(XRegExp('\\p{^Letter}').test(nonletter)).toBe(true);
};
var argument3 = function (k) {
 callbackArguments.push(arguments) 

    if (k.charCodeAt(0) === 36) {
        k = k.slice(1);
    } else {
        k = +k;
    }
    m.set(k, k);
};
var argument4 = r_0;
var argument5 = "2luX";
var argument6 = function (row) {
 callbackArguments.push(arguments) 

    if (row.doc && !row.deleted && row.value.rev.slice(0, 2) === '1-' && (!row.doc._attachments || Object.keys(row.doc._attachments).length === 0)) {
        result.docs_read++;
        currentBatch.pendingRevs++;
        currentBatch.docs.push(row.doc);
        delete currentBatch.diffs[row.id];
    }
};
var base_0 = [460,242,627,627,213,783]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [460,242,627,627,213,783]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [460,242,627,627,213,783]
var r_2= undefined
try {
r_2 = base_2.forEach(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [460,242,627,627,213,783]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test869.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)