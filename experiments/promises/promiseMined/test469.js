/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = function (results) {
 callbackArguments.push(arguments) 

    try {
        assertOccurrences(results, [
            {
                start: 31,
                end: 32
            },
            {
                start: 96,
                end: 97
            },
            {
                start: 106,
                end: 107
            }
        ]);
    } finally {
        tearDown();
    }
};
var argument2 = null;
var argument3 = true;
var argument4 = {"783":"`O","":"X","1.6247879077870919e+308":"3vmU","Aq":"u","1.460768570110346e+308":1.0352837725228177e+308,"'e2":"b","T9":242};
var argument5 = function (result) {
 callbackArguments.push(arguments) 

    result.booths.forEach(function (booth) {
        booth.sellSheet = _.filter(booth.sellSheet, function (item) {
            return productName == item.item;
        });
        booth.hasVarieties = false;
    });
    return result;
};
var argument6 = function (error) {
 callbackArguments.push(arguments) 

    done();
};
var argument7 = r_0;
var argument8 = null;
var argument9 = function (err) {
 callbackArguments.push(arguments) 

    expect(err).to.exist;
    done();
};
var argument10 = null;
var argument11 = null;
var base_0 = p2
var r_0= undefined
try {
r_0 = base_0.then(argument1,argument2,argument3)
}
catch(e) {
r_0= e.message
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.then(argument4,argument5)
}
catch(e) {
r_1= e.message
}
var base_2 = p1
var r_2= undefined
try {
r_2 = base_2.catch(argument6,argument7,argument8)
}
catch(e) {
r_2= e.message
}
var base_3 = p1
var r_3= undefined
try {
r_3 = base_3.catch(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test469.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)