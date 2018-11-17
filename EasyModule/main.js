var HashTable = require("./libs/HashTable");

var hashMap = new HashTable.HashTable();

hashMap.put("lcy", "天才")
console.log(hashMap);
var hashMap1 = new HashTable.HashTable();
hashMap1.put("y", "才")
hashMap1.put("y2", "o1")
hashMap1.put("y3", "才")
hashMap1.put("y4", "才")
hashMap1.put("y42", "o1")
hashMap1.put("y43", "才")
hashMap1.put("y5", "才")
hashMap1.put("y552", "o1")
hashMap1.put("y53", "才")
hashMap1.put("y5", "才")
hashMap1.put("y52", "o1")
hashMap1.put("5y3", "才")
console.log(hashMap1.limit);
console.log(hashMap1.storage.length);
console.log(hashMap.get("lcy"));