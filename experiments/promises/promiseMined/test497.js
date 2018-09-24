/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = function (error) {
 callbackArguments.push(arguments) 

    done();
};
var argument2 = null;
var argument3 = [893,-100];
var argument4 = function () {
 callbackArguments.push(arguments) 

    return db.bulkDocs([{
            _id: 'foo',
            _rev: '1-a'
        }], { new_edits: false });
};
var argument5 = null;
var argument6 = function () {
 callbackArguments.push(arguments) 

    self.emit('contacts.loaded', identity);
};
var argument7 = r_0;
var argument8 = function (lastSeqDoc) {
 callbackArguments.push(arguments) 

    view.seq = lastSeqDoc ? lastSeqDoc.seq : 0;
    if (!temporary) {
        sourceDB._cachedViews = sourceDB._cachedViews || {};
        sourceDB._cachedViews[viewSignature] = view;
        view.db.on('destroyed', function () {
            delete sourceDB._cachedViews[viewSignature];
        });
    }
    return view;
};
var base_0 = p1
var r_0= undefined
try {
r_0 = base_0.catch(argument1,argument2)
}
catch(e) {
r_0= e.message
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.then(argument3,argument4,argument5)
}
catch(e) {
r_1= e.message
}
var base_2 = p1
var r_2= undefined
try {
r_2 = base_2.then(argument6)
}
catch(e) {
r_2= e.message
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.then(argument7,argument8)
}
catch(e) {
r_3= e.message
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test497.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)