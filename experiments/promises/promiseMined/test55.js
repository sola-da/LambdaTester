/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = null;
var argument2 = function (results) {
 callbackArguments.push(arguments) 

    try {
        assertOccurrences(results, [
            {
                start: 31,
                end: 39
            },
            {
                start: 81,
                end: 89
            },
            {
                start: 106,
                end: 114
            }
        ]);
    } finally {
        tearDown();
    }
};
var argument3 = p2;
var argument4 = function (error) {
 callbackArguments.push(arguments) 

    error.stack = error.stack + self.stack.replace(/^[^\n]+/, '');
    throw error;
};
var argument5 = true;
var argument6 = r_1;
var argument7 = function (doc) {
 callbackArguments.push(arguments) 

    doc._rev.should.equal('1-b', 'Correct revision wins');
    return db.bulkDocs({
        new_edits: false,
        docs: [{
                _id: 'fubar',
                _rev: '2-2',
                _revisions: {
                    start: 2,
                    ids: [
                        '2',
                        '1'
                    ]
                }
            }]
    });
};
var argument8 = 8.840223523610711e+307;
var argument9 = p2;
var argument10 = function () {
 callbackArguments.push(arguments) 

    _this.store.clear();
    reject();
};
var base_0 = p2
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
r_2 = base_2.then(argument6,argument7,argument8)
}
catch(e) {
r_2= e.message
}
var base_3 = p2
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test55.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)