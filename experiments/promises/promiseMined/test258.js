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
                start: 11,
                end: 13
            },
            {
                start: 26,
                end: 28
            },
            {
                start: 32,
                end: 34
            }
        ]);
    } finally {
        tearDown();
    }
};
var argument2 = 783;
var argument3 = false;
var argument4 = function (content) {
 callbackArguments.push(arguments) 

    assert.equal(content, test.content, test.method + ' content');
};
var argument5 = null;
var argument6 = [-1,843];
var argument7 = function () {
 callbackArguments.push(arguments) 

    expect(reporterHasFinished).toBe(true);
    done();
};
var argument8 = true;
var argument9 = {"49":595,"":6.165520825114779e+306,"YO":6.330459348552803e+307};
var argument10 = function listenForRequests() {
 callbackArguments.push(arguments) 

    casper.on('resource.requested', handleUserRequest);
};
var argument11 = true;
var base_0 = p2
var r_0= undefined
try {
r_0 = base_0.then(argument1,argument2,argument3)
}
catch(e) {
r_0= e.message
}
var base_1 = p1
var r_1= undefined
try {
r_1 = base_1.then(argument4,argument5,argument6)
}
catch(e) {
r_1= e.message
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.then(argument7,argument8)
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test258.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)