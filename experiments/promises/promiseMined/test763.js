/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = function (response) {
 callbackArguments.push(arguments) 

    $scope.posting = false;
    $scope.error = response.data.errorMessage;
};
var argument2 = function (doc) {
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
var argument3 = p2;
var argument4 = function (err) {
 callbackArguments.push(arguments) 

    errors.logAndThrowError(err, 'Error exporting data', '');
};
var argument5 = "dtb";
var argument6 = {"49":"","82":"l","":"","1.289184750183003e+308":""};
var argument7 = ["Wm","D"];
var argument8 = function (results) {
 callbackArguments.push(arguments) 

    try {
        assertOccurrences(results, [
            {
                start: 61,
                end: 63
            },
            {
                start: 75,
                end: 77
            }
        ]);
    } finally {
        tearDown();
    }
};
var base_0 = p2
var r_0= undefined
try {
r_0 = base_0.catch(argument1)
}
catch(e) {
r_0= e.message
}
var base_1 = p2
var r_1= undefined
try {
r_1 = base_1.then(argument2,argument3)
}
catch(e) {
r_1= e.message
}
var base_2 = p2
var r_2= undefined
try {
r_2 = base_2.catch(argument4,argument5,argument6)
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test763.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)