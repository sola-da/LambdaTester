





var callbackArguments = [];
var argument1 = function (d) {
 callbackArguments.push(arguments) 

    return d.newDoc === 'yes';
};
var argument2 = function (b) {
 callbackArguments.push(arguments) 

    branchArrPos++;
    return b.name == branchName;
};
var argument3 = null;
var argument4 = function (err, docs) {
 callbackArguments.push(arguments) 

    docs[0].a.should.equal('something');
    done();
};
var argument5 = function (err, mappings) {
 callbackArguments.push(arguments) 

    if (err) {
        if (callback)
            callback(err);
        return;
    }
    return mappings.map(function (m) {
        return m.principalId;
    });
};
var argument6 = "";
var base_0 = [49,242,126,122,969,242]
var r_0= undefined
try {
r_0 = base_0.find(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [49,242,126,122,969,242]
var r_1= undefined
try {
r_1 = base_1.find(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [49,242,126,122,969,242]
var r_2= undefined
try {
r_2 = base_2.find(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [49,242,126,122,969,242]
var r_3= undefined
try {
r_3 = base_3.find(argument5,argument6)
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
require("fs").writeFileSync("./experiments/find/findMined/test729.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)