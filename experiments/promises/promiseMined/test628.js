/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = function (err) {
 callbackArguments.push(arguments) 

    /permission/i.test(err.message).should.be.true;
};
var argument2 = {"655":655,"1.2996437972174193e+308":""};
var argument3 = false;
var argument4 = null;
var argument5 = function () {
 callbackArguments.push(arguments) 

    assert.calledOnceWith(spy, expected);
};
var argument6 = false;
var argument7 = function (stores) {
 callbackArguments.push(arguments) 

    stores.forEach(function (store) {
        if (store.owner === that._manifestURL) {
            that._dataStore = store;
            that._dataStore.addEventListener('change', that._onChange.bind(that));
        }
    });
    if (that._dataStore) {
        resolve(that._dataStore);
    } else {
        reject();
    }
};
var argument8 = null;
var argument9 = function (results) {
 callbackArguments.push(arguments) 

    try {
        assertOccurrences(results, [
            {
                start: 9,
                end: 14
            },
            {
                start: 20,
                end: 25
            },
            {
                start: 43,
                end: 48
            },
            {
                start: 135,
                end: 140
            }
        ]);
    } finally {
        tearDown();
    }
};
var argument10 = p1;
var base_0 = p2
var r_0= undefined
try {
r_0 = base_0.catch(argument1,argument2,argument3)
}
catch(e) {
r_0= e.message
}
var base_1 = p1
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
r_2 = base_2.then(argument6,argument7)
}
catch(e) {
r_2= e.message
}
var base_3 = p1
var r_3= undefined
try {
r_3 = base_3.then(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test628.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)