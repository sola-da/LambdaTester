/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = {"82":1.7976931348623157e+308,"J":655,"pI$}h":"","1.3771008318787192e+308":"[","{":6.93927226589136e+307,"":"","1.0106812614204217e+308":">","4.8918018460666246e+306":783,"@z":","};
var argument2 = function (res) {
 callbackArguments.push(arguments) 

    if (returnValue.cancelled) {
        completeReplication();
        throw new Error('cancelled');
    }
    res.rows.forEach(function (row) {
        if (row.doc && !row.deleted && row.value.rev.slice(0, 2) === '1-' && (!row.doc._attachments || Object.keys(row.doc._attachments).length === 0)) {
            result.docs_read++;
            currentBatch.pendingRevs++;
            currentBatch.docs.push(row.doc);
            delete currentBatch.diffs[row.id];
        }
    });
};
var argument3 = 157;
var argument4 = function (error) {
 callbackArguments.push(arguments) 

    done();
};
var argument5 = false;
var argument6 = function (error) {
 callbackArguments.push(arguments) 

    done();
};
var argument7 = null;
var argument8 = null;
var argument9 = r_3;
var argument10 = function () {
 callbackArguments.push(arguments) 

    return 0;
};
var base_0 = p1
var r_0= undefined
try {
r_0 = base_0.then(argument1,argument2,argument3)
}
catch(e) {
r_0= e.message
}
var base_1 = p2
var r_1= undefined
try {
r_1 = base_1.catch(argument4,argument5)
}
catch(e) {
r_1= e.message
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.catch(argument6,argument7,argument8)
}
catch(e) {
r_2= e.message
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.then(argument9,argument10)
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test8.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)