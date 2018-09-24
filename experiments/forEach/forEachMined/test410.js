





var callbackArguments = [];
var argument1 = function (change) {
 callbackArguments.push(arguments) 

    exports.call(opts.onChange, change);
};
var argument2 = false;
var argument3 = 460;
var argument4 = function (leaf) {
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
var argument5 = function (stuff) {
 callbackArguments.push(arguments) 

    model.compareThings(null, stuff).should.equal(-1);
    model.compareThings(stuff, null).should.equal(1);
};
var argument6 = null;
var argument7 = null;
var argument8 = function (plotPanel) {
 callbackArguments.push(arguments) 

    plotPanel._getDatumsOnRect(datumMap, rect, keyArgs);
};
var argument9 = false;
var argument10 = null;
var base_0 = [893,126,0,823]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,126,0,823]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,126,0,823]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893,126,0,823]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test410.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)