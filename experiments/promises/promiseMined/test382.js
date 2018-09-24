/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = function (err) {
 callbackArguments.push(arguments) 

    expect(err).to.exist;
    done();
};
var argument2 = p2;
var argument3 = p2;
var argument4 = function (err) {
 callbackArguments.push(arguments) 

    errors.logError(err);
    return 'ghost.' + datetime + '.json';
};
var argument5 = false;
var argument6 = "";
var argument7 = function (error) {
 callbackArguments.push(arguments) 

    if (next == $route.current) {
        $rootScope.$broadcast('$routeChangeError', next, last, error);
    }
};
var argument8 = {"1.4603340890979714e+308":705,"N,":"Jnt"};
var argument9 = p1;
var argument10 = function (res) {
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
var argument11 = false;
var base_0 = p1
var r_0= undefined
try {
r_0 = base_0.catch(argument1,argument2,argument3)
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
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.then(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test382.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)