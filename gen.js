var item = {
	id:0, 
	type:0,
	/*
	1:Weapon
	2:head
	3:body
	4:hands
	5:feet
	6:neck
	*/
	statBase:0,  //weap=power   armor == def  amulet == null
	nameBase:"",
	itemName:"",
	statLevel:1,  //from enemyLevel
	statRarity:0,   // 1=normal		2=magic		3=rare		4=epic
	nameRarity:"",
	statStr:0,
	statAgi:0,
	statCon:0,
	statInt:0,
	statHp:0,
	preffix:0,
	listPreffix:"",
	suffix:0,
	listPreffix:""
};

var enemy = {
	enemyLevel:0
};

var inventory = [];

var weaponType = [
	"Axe",
	"Dagger",
	"Sword"
];

var headType = [
	"Coif",
	"Barbute",
	"Bascinet"
];

var bodyType = [
	"Gambeson",
	"Lamellar",
	"Plate"
];

var handsType = [
	"Cuff",
	"Glove",
	"Gauntlet"
];

var feetType = [
	"Shoes",
	"Boots",
	"Sabatons"
];

/*var preffix = [
	 {
	 	preffixName = "Brute",

	 }


]; */



var preffix = [
	"Brute", //str+2
	"Savage", //str+4
	"Merciless", //str+8
	"Nimble", //agi+2
	"Agile", //agi+4
	"Acrobatic", //agi+8
	"Mighty", //con+2
	"Sturdy", //con+4
	"Courageous", //con+6
	"Savvy", //int+2
	"Witty", //int+4
	"Brillant", //int+6
	"Nourishing", //hp+10
	"Vigorous", //hp+20
	"Healthy" //hp+30
];

var suffix = [
	"of Force", //str+2
	"of Cruelty", //str+4
	"of Barbarism", //str+8
	"of Grace", //agi+2
	"of Movement", //agi+4
	"of Deft", //agi+8
	"of Resolution", //con+2
	"of Perseverance", //con+4
	"of Determination", //con+6
	"of Understanding", //int+2
	"of Acumen", //int+4
	"of Luminosity", //int+6
	"of Moxie", //hp+10
	"of Resistance", //hp+20
	"of Will" //hp+30
];

var name


function genLoot(enemyLevel){
	item.statLevel = enemyLevel;
	item.type = Math.floor((Math.random() * 6) + 1);
	rarityRoll = Math.floor((Math.random() * 100));

	if(rarityRoll>90){
		item.statRarity = 4;
		item.nameRarity = "Epic"
	} 
	else if (rarityRoll>70){
		item.statRarity = 3;
		item.nameRarity = "Rare"
	}
	else if (rarityRoll>40){
		item.statRarity = 2;
		item.nameRarity = "Magic"
	}
	else{
		item.statRarity = 1;
		item.nameRarity = "Normal"
	};

	switch(item.type){
		case 1: //weapon
			item.statBase = item.statLevel;
			item.nameBase = weaponType[Math.floor((Math.random()*weaponType.length))];
			break;
		case 2: //helmet
			item.statBase = item.statLevel;
			item.nameBase = headType[Math.floor((Math.random()*headType.length))];
			break;
		case 3: //body
			item.statBase = item.statLevel;
			item.nameBase = bodyType[Math.floor((Math.random()*bodyType.length))];
			break;
		case 4: //gloves
			item.statBase = item.statLevel;
			item.nameBase = handsType[Math.floor((Math.random()*handsType.length))];
			break;
		case 5: //boots
			item.statBase = item.statLevel;
			item.nameBase = feetType[Math.floor((Math.random()*feetType.length))];
			break;
		case 6: //amulet
			item.statBase = item.statLevel;
			item.nameBase = "Amulet"
			break;
	};

	switch(item.statRarity){
		case 1 :
			inventory.push(item);
			item.id ++ ;
			break;
		case 2 :

			inventory.push(item);
			item.id ++;
			break;
		case 3 :

			inventory.push(item);
			item.id ++;
			break;
		case 4 :

			inventory.push(item);
			item.id ++;
			break;
	}

	document.getElementById('show').innerHTML = 
	"<br>item id " + item.id +
	"<br>item level " + item.statLevel + 
	"<br>item type " + item.type + 
	"<br>item base " + item.nameBase +
	"<br> item rarity " + item.nameRarity +
	"<br> item base power " + item.statBase +
	"<br>" + rarityRoll +
	"<br>" + weaponType.length;

	checkInv()
}








//debug


function checkInv(){
	document.getElementById('inv').innerHTML = inventory.length;
}