/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = ["U","w","h","D","|","$:M;","#"];
var argument2 = function (results) {
 callbackArguments.push(arguments) 

    try {
        assertOccurrences(results, [
            {
                start: 17,
                end: 22
            },
            {
                start: 26,
                end: 31
            }
        ]);
    } finally {
        tearDown();
    }
};
var argument3 = null;
var argument4 = function Promise_spread_fulfilled(array) {
 callbackArguments.push(arguments) 

    return fulfilled.apply(void 0, array);
};
var argument5 = function (err) {
 callbackArguments.push(arguments) 

    expect(err).to.exist;
    done();
};
var argument6 = true;
var argument7 = 1.3080520329065394e+307;
var argument8 = function (err) {
 callbackArguments.push(arguments) 

    expect(err).to.exist;
    done();
};
var argument9 = r_2;
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
r_1 = base_1.then(argument4)
}
catch(e) {
r_1= e.message
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.catch(argument5,argument6,argument7)
}
catch(e) {
r_2= e.message
}
var base_3 = p1
var r_3= undefined
try {
r_3 = base_3.catch(argument8,argument9)
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test355.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)