





var callbackArguments = [];
var argument1 = function (user) {
 callbackArguments.push(arguments) 

    return '' + user.id;
};
var argument2 = function (x) {
 callbackArguments.push(arguments) 

    return x.children[0];
};
var argument3 = r_0;
var argument4 = false;
var argument5 = function (arg, i) {
 callbackArguments.push(arguments) 

    return make_node(AST_String, self.args[i], { value: arg.print_to_string() });
};
var argument6 = r_1;
var argument7 = function (all) {
 callbackArguments.push(arguments) 

    var blobId = all[0], fileV = all[1];
    file = fileV;
    var previousId = file ? file.version : null;
    version = {
        userAccountId: userAccount.id,
        date: new Date(),
        blobId: blobId,
        creatorId: userAccount.id,
        previousId: previousId
    };
    version.id = Version.createHash(version);
    return Version.insert(version).execWithin(tx);
};
var base_0 = [403,460,122]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.map(argument7)
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
require("fs").writeFileSync("./experiments/map/mapMined/test461.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)