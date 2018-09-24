/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = null;
var argument2 = function (error) {
 callbackArguments.push(arguments) 

    testUtil.reportAsyncError(test, error);
};
var argument3 = "h7";
var argument4 = p1;
var argument5 = function (items) {
 callbackArguments.push(arguments) 

    if (promise !== lastPromise) {
        return;
    }
    items = makeObjectArray(items.data || items, options.tagsInput.displayProperty);
    items = getDifference(items, tags);
    self.items = items.slice(0, options.maxResultsToShow);
    if (self.items.length > 0) {
        self.show();
    } else {
        self.reset();
    }
};
var argument6 = function (res) {
 callbackArguments.push(arguments) 

    assert.equal(res.body, 'a server response');
    done();
};
var argument7 = function (data) {
 callbackArguments.push(arguments) 

    vm.totalRecords = data.totalRecords;
    vm.customers = data.results;
    filterCustomersProducts('');
};
var argument8 = [-100,403,843,618,5e-324,-100];
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
r_1 = base_1.then(argument4,argument5)
}
catch(e) {
r_1= e.message
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.then(argument6)
}
catch(e) {
r_2= e.message
}
var base_3 = p2
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test376.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)