/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = p2;
var argument2 = function (err) {
 callbackArguments.push(arguments) 

    writingCheckpoint = false;
    abortReplication('writeCheckpoint completed with error', err);
    throw err;
};
var argument3 = function (results) {
 callbackArguments.push(arguments) 

    try {
        assertOccurrences(results, []);
    } finally {
        tearDown();
    }
};
var argument4 = [783];
var argument5 = function (listOfDocsToPersist) {
 callbackArguments.push(arguments) 

    var docsToPersist = [];
    listOfDocsToPersist.forEach(function (docList) {
        docsToPersist = docsToPersist.concat(docList);
    });
    lastSeqDoc.seq = seq;
    docsToPersist.push(lastSeqDoc);
    return view.db.bulkDocs({ docs: docsToPersist });
};
var argument6 = false;
var argument7 = null;
var argument8 = function (results) {
 callbackArguments.push(arguments) 

    try {
        assertOccurrences(results, [
            {
                start: 28,
                end: 29
            },
            {
                start: 36,
                end: 37
            }
        ]);
    } finally {
        tearDown();
    }
};
var argument9 = "|U`H?";
var base_0 = p1
var r_0= undefined
try {
r_0 = base_0.then(argument1,argument2)
}
catch(e) {
r_0= e.message
}
var base_1 = p2
var r_1= undefined
try {
r_1 = base_1.then(argument3)
}
catch(e) {
r_1= e.message
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.then(argument4,argument5,argument6)
}
catch(e) {
r_2= e.message
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.then(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test894.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)