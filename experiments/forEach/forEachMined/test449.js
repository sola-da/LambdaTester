





var callbackArguments = [];
var argument1 = function (e) {
 callbackArguments.push(arguments) 

    delete s[o][e.i], 'removeEventListener' in t && t.removeEventListener(g(e.e), e.proxy, m(e, r));
};
var argument2 = null;
var argument3 = function (w) {
 callbackArguments.push(arguments) 

    if (w && w.el && w.el.parentNode) {
        w._inDocument = false;
        w.el.parentNode.removeChild(w.el);
    }
};
var argument4 = ["8O",618,705,126];
var argument5 = function (name) {
 callbackArguments.push(arguments) 

    if (name.indexOf(npm_config_prefix) !== 0)
        return;
    var val = process.env[name];
    if (name === npm_config_prefix + 'loglevel') {
        log.level = val;
    } else {
        name = name.substring(npm_config_prefix.length);
        this.opts[name] = val;
    }
};
var argument6 = r_1;
var argument7 = function (rev) {
 callbackArguments.push(arguments) 

    var index = txn.objectStore(BY_SEQ_STORE).index('_doc_id_rev');
    var key = docId + '::' + rev;
    index.getKey(key).onsuccess = function (e) {
        var seq = e.target.result;
        if (!seq) {
            return;
        }
        var req = txn.objectStore(BY_SEQ_STORE)['delete'](seq);
        count--;
        if (!count) {
            txn.objectStore(DOC_STORE).put(metadata);
        }
    };
};
var argument8 = false;
var base_0 = [595,607,618,893,49,893,460]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [595,607,618,893,49,893,460]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [595,607,618,893,49,893,460]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [595,607,618,893,49,893,460]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test449.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)