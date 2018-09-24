





var callbackArguments = [];
var argument1 = function (cache, cacheId) {
 callbackArguments.push(arguments) 

    info[cacheId] = cache.info();
};
var argument2 = function (method) {
 callbackArguments.push(arguments) 

    PouchAlt[method] = eventEmitter[method].bind(eventEmitter);
};
var argument3 = null;
var argument4 = r_0;
var argument5 = function (item) {
 callbackArguments.push(arguments) 

    dojo[i++ % 2 === 0 ? 'addClass' : 'removeClass'](item, 'sortListItemOdd');
    this.containerNode.appendChild(item);
};
var argument6 = function (leaf) {
 callbackArguments.push(arguments) 

    self.get(id, {
        rev: leaf,
        revs: opts.revs,
        attachments: opts.attachments
    }, function (err, doc) {
        if (!err) {
            result.push({ ok: doc });
        } else {
            result.push({ missing: leaf });
        }
        count--;
        if (!count) {
            callback(null, result);
        }
    });
};
var base_0 = [-100,823,893,"`B4j",460,"A"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-100,823,893,"`B4j",460,"A"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-100,823,893,"`B4j",460,"A"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-100,823,893,"`B4j",460,"A"]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test923.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)