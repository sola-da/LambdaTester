





var callbackArguments = [];
var argument1 = function (res) {
 callbackArguments.push(arguments) 

    imports_built.push(res.build(nesting, async));
};
var argument2 = function (subFold) {
 callbackArguments.push(arguments) 

    fold.subFolds.push(subFold.clone());
};
var argument3 = null;
var argument4 = function (event) {
 callbackArguments.push(arguments) 

    _this.get(Configuration.sessionPropertyName).on(event, function (error) {
        Array.prototype.unshift.call(arguments, event);
        transition.send.apply(transition, arguments);
    });
};
var argument5 = function (testName) {
 callbackArguments.push(arguments) 

    var test = getTest(testName);
    it('knows how to render ' + testName, function () {
        var output;
        if (test.partial) {
            output = Mustache.render(test.template, test.view, { partial: test.partial });
        } else {
            output = Mustache.render(test.template, test.view);
        }
        assert.equal(output, test.expect);
    });
};
var base_0 = [893,157,893,122,607,705,-100,122]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,157,893,122,607,705,-100,122]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,157,893,122,607,705,-100,122]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893,157,893,122,607,705,-100,122]
var r_3= undefined
try {
r_3 = base_3.forEach(argument5)
}
catch(e) {
r_3= "Error"
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test635.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)