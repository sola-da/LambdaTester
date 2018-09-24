





var callbackArguments = [];
var argument1 = function (stuff) {
 callbackArguments.push(arguments) 

    arrays.forEach(function (array) {
        model.compareThings(array, stuff).should.equal(-1);
        model.compareThings(stuff, array).should.equal(1);
    });
};
var argument2 = r_0;
var argument3 = function (tab) {
 callbackArguments.push(arguments) 

    tab.active = false;
};
var argument4 = function (node) {
 callbackArguments.push(arguments) 

    edge[node] = nodes.filter(function (n) {
        return n[vars.id.value] == edge[node][vars.id.value];
    })[0];
};
var argument5 = function (file) {
 callbackArguments.push(arguments) 

    (function (file) {
        fs.readFile(path.join(buildBase, 'yql', file), stack.add(function (err, data) {
            var shasum = crypto.createHash('sha1');
            shasum.update(data);
            var d = shasum.digest('hex');
            results.post[file] = d;
        }));
    }(file));
};
var argument6 = null;
var argument7 = r_3;
var base_0 = ["!K","m","3",25]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["!K","m","3",25]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["!K","m","3",25]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["!K","m","3",25]
var r_3= undefined
try {
r_3 = base_3.forEach(argument5,argument6,argument7)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test850.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)