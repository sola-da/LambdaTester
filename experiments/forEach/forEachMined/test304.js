





var callbackArguments = [];
var argument1 = function (rev) {
 callbackArguments.push(arguments) 

    var index = txn.objectStore(BY_SEQ_STORE).index('_doc_id_rev');
    var key = docId + '::' + rev;
    index.getKey(key).onsuccess = function (e) {
        var seq = e.target.result;
        if (!seq) {
            return;
        }
        txn.objectStore(BY_SEQ_STORE)['delete'](seq);
        count--;
        if (!count) {
            txn.objectStore(DOC_STORE).put(metadata);
        }
    };
};
var argument2 = 1.3288484435214889e+308;
var argument3 = null;
var argument4 = function (c, i) {
 callbackArguments.push(arguments) 

    if (c.charCodeAt(0) < 91 && i > 0 && ns[i - 1].charCodeAt(0) != 32) {
        ns.push(' ');
    }
    if (i === 0) {
        c = c.toUpperCase();
    }
    ns.push(c);
};
var argument5 = null;
var argument6 = null;
var argument7 = function (callback, event) {
 callbackArguments.push(arguments) 

    if (networkEvents.indexOf(String(event)) >= 0) {
        network.on(event, callback);
    }
};
var argument8 = function (nonletter) {
 callbackArguments.push(arguments) 

    expect(XRegExp('\\p{L}').test(nonletter)).toBe(false);
    expect(XRegExp('\\p{Letter}').test(nonletter)).toBe(false);
    expect(XRegExp('\\pL').test(nonletter)).toBe(false);
};
var argument9 = [0,122,-1];
var argument10 = r_2;
var base_0 = [460,-1,126,122]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [460,-1,126,122]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [460,-1,126,122]
var r_2= undefined
try {
r_2 = base_2.forEach(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [460,-1,126,122]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test304.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)