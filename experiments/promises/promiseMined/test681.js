/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = function (error) {
 callbackArguments.push(arguments) 

    error.stack = error.stack + self.stack.replace(/^[^\n]+/, '');
    throw error;
};
var argument2 = null;
var argument3 = function () {
 callbackArguments.push(arguments) 

    deferred.reject.apply(deferred, arguments);
};
var argument4 = p1;
var argument5 = function (err) {
 callbackArguments.push(arguments) 

    errors.logAndThrowError(err, 'Error exporting data', '');
};
var argument6 = {"126":"","893":"pZ","=":"","":460,"1.405450407282199e+307":1.7885174032656353e+307,"-100":213,"ny":2.4921324459673097e+307,"7.762060630376084e+307":4.399155487304713e+307};
var argument7 = function (results) {
 callbackArguments.push(arguments) 

    try {
        assertOccurrences(results, [
            {
                start: 32,
                end: 33
            },
            {
                start: 41,
                end: 42
            }
        ]);
    } finally {
        tearDown();
    }
};
var argument8 = {"460":"","8.643805082286602e+307":"|*","":1.8875035120644926e+307,"]2p":82,"1.2916489126213735e+308":"","3.385507327143497e+307":9.149545382514928e+307,"4.732739839118399e+307":6.316260582021143e+307};
var argument9 = {"25":"","403":1.7256673090412185e+308,"714":9.826683286098724e+306,"1.2711241329015938e+308":"}","rJ#":1.2985563183802312e+307,"7.392293694050901e+307":"","LVy":1.0703352486181174e+308,"B'9;":"&","":7.570864219255052e+307};
var base_0 = p2
var r_0= undefined
try {
r_0 = base_0.catch(argument1,argument2)
}
catch(e) {
r_0= e.message
}
var base_1 = p2
var r_1= undefined
try {
r_1 = base_1.then(argument3,argument4)
}
catch(e) {
r_1= e.message
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.catch(argument5,argument6)
}
catch(e) {
r_2= e.message
}
var base_3 = p2
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test681.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)