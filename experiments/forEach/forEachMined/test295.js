





var callbackArguments = [];
var argument1 = function (element) {
 callbackArguments.push(arguments) 

    if (result.length === 0)
        return result.push(element);
    else {
        if (element[column].valueOf() > result[0][column].valueOf()) {
            result.length = 0;
            return result.push(element);
        }
        if (element[column].valueOf() === result[0][column].valueOf()) {
            return result.push(element);
        }
    }
};
var argument2 = null;
var argument3 = function (doclets) {
 callbackArguments.push(arguments) 

    var validationResult;
    validationResult = validate(doclets.doclets, schema.DOCLETS_SCHEMA);
    if (validationResult.errors.length) {
        expect(doclets.filename).toBe('');
        expect(validationResult.errors).toEqual([]);
    } else {
        expect(validationResult.errors.length).toBe(0);
    }
};
var argument4 = true;
var argument5 = false;
var argument6 = function (res) {
 callbackArguments.push(arguments) 

    if (!res.ok) {
        result.doc_write_failures++;
        errors.push(new Error(res.reason || res.message || 'Unknown reason'));
    }
};
var argument7 = "_";
var argument8 = null;
var argument9 = function (data) {
 callbackArguments.push(arguments) 

    answer.data = data;
    res.answer.push(answer);
    $this.logger.log('info', '%s:%s/%s - local - %s question:"%s" - %j', req.connection.remoteAddress, req.connection.remotePort, req.connection.message, hostname, question, answer, $this.meta);
};
var argument10 = true;
var base_0 = ["b]#",893,"PAa","$P%","t?D",242,25,25,714]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["b]#",893,"PAa","$P%","t?D",242,25,25,714]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["b]#",893,"PAa","$P%","t?D",242,25,25,714]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["b]#",893,"PAa","$P%","t?D",242,25,25,714]
var r_3= undefined
try {
r_3 = base_3.forEach(argument9,argument10)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test295.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)