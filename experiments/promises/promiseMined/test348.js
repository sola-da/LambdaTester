/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = function (fetched) {
 callbackArguments.push(arguments) 

    expect(fetched).to.exist;
    expect(fetched.length).to.equal(0);
    done();
};
var argument2 = true;
var argument3 = [714,49,"c","3","Wxd]H",460];
var argument4 = ["<j","%J","Z","zY","P]Z{d"];
var argument5 = function () {
 callbackArguments.push(arguments) 

    utils.log('push', 'Restarting ' + manifest.name + '...');
    utils.killAppByPid(pid);
};
var argument6 = false;
var argument7 = function (ex) {
 callbackArguments.push(arguments) 

    promise.reject(ex);
};
var argument8 = function (results) {
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
var argument9 = r_3;
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
r_1 = base_1.then(argument4,argument5,argument6)
}
catch(e) {
r_1= e.message
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.then(argument7)
}
catch(e) {
r_2= e.message
}
var base_3 = p1
var r_3= undefined
try {
r_3 = base_3.then(argument8,argument9)
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test348.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)