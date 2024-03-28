tempMasterJson = {};
var masterJsonArr = [];
var  fluxDensityValue= [];
masterJson = {};


coreSet = [38, 17, 0,20,43];

masterJson = {
	"name": "C1",
//	"imagePath": "images/c1.png",
	"length":"200",
	"coreSet":coreSet,
	"answer":59,
	"answerStatus":"FAIR",
	"description":"Unweathered"
};

masterJsonArr.push(masterJson);

coreSet = [38,17,20,35,0];

masterJson = {
	"name": "C2",
//	"imagePath": "images/c2.png",
	"length":"200",
	"coreSet":coreSet,
	"answer":55,
	"answerStatus":"FAIR",
	"description":"Weathered"
};

masterJsonArr.push(masterJson);

coreSet =  [250,160,190,200,0];

masterJson = {
	"name": "C3",
//	"imagePath": "images/c3.png",
	"length":"1220",
	"coreSet":coreSet,
	"answer":66,
	"answerStatus":"FAIR",
	"description":"Medium Weathered"
};

masterJsonArr.push(masterJson);



coreSet = [45, 16,24,36,0];

masterJson = {
	"name": "C4",
//	"imagePath": "images/c1.png",
	"length":"200",
	"coreSet":coreSet,
	"answer":61,
	"answerStatus":"FAIR",
	"description":"High Weathered"
};

masterJsonArr.push(masterJson);

coreSet =  [55, 35,41,56,0];

masterJson = {
	"name": "C5",
	
	"length":"2300",
	"coreSet":coreSet,
	"answer":52.3,
	"answerStatus":"FAIR",
	"description":"Completely Weathered"
};

masterJsonArr.push(masterJson);
console.log(masterJsonArr);

