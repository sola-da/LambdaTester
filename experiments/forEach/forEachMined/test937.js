





var callbackArguments = [];
var argument1 = function (d) {
 callbackArguments.push(arguments) 

    d.task = db[d.name].apply(null, d.parameters);
};
var argument2 = function (val) {
 callbackArguments.push(arguments) 

    moxieData.append(appendData[i].name, val);
};
var argument3 = function (testName) {
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
var argument4 = function (init) {
 callbackArguments.push(arguments) 

    var tw = new TreeWalker(function (node) {
            if (node instanceof AST_SymbolRef) {
                push_uniq(in_use, node.definition());
            }
        });
    init.walk(tw);
};
var argument5 = r_3;
var base_0 = ["=",595,122,843,"C<_"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["=",595,122,843,"C<_"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["=",595,122,843,"C<_"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument3)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["=",595,122,843,"C<_"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument4,argument5)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test937.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)