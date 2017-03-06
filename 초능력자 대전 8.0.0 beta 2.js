/*
초능력자 대전(ESP-SB)
© 2014-2017 Dark Tornado, All rights reserved.
version 8.0.0 beta 2

무단공유&리뷰는 허용하나, 무단수정, 제작자속이기 등을 할 시에는 싸대기 때리러 감.
그리고 무한공유는 허용하나, 비덧공유는 불허함.

능력자 관리 창(ESP Manager)에서는 능력자 전송, 사살, 회복, 능력 활성화/비활성화가 가능하며,
다른 스크립트의 능력자의 경우, 능력 활성화/비활성화는 불가능합니다.

운영자 권한 : 시계&나침반(&명령어)

아이템 이름  사슬투구 사슬갑옷 사슬레깅스 사슬부츠
아이템 아이디   302      303       304       304
  쿨타임       10초     20초      20초      2분
   비고       기본기   스킬1     스킬2     궁극기

각성블록은 능력 이름이 적혀있는 표지판+옵시디언입니다.
Mass Titan은 궁극기 쿨타임이 2분 30초 입니다.
Air Bander, The Teleporter의 기본기는 쿨타임이 5초 입니다.
이 스크립트 경우, 15틱을 1초라고 가정하고 만들었습니다.
따라서, 지속시간이나 쿨타임이 전체적으로 3/4로 줄어들어 있습니다.
Dark Tornado jr.은 서버장만 사용해 주시길 바랍니다.
능력제한 푸는법은 안알려줌(?)ㅎㅎ
인공지능 능력자는 멀티 지원이 되지 않습니다.
정확히는 서버원들에게는 거미로 보입니다.

초능력자 레벨(1~5)
Fire User - 3.5
Water Controller - 2
Nature Guardian - 3
I am Creeper - 5
Soil Master - 4
The Summoner - 2
The Luminous - 2.5
The Darkness - 4
The Freezer - 2
Desert Maker - 2.5
The Vampire - 5
Air Bander - 2.5
I am Elsa - 3
Mass Titan - 3.5
Thunder Breaker - 5
The Binder - 2
The Mechanic - 4
TNT Expert - 5
Trap Creater - 4
The Healer - 2.5
Nether Man - 3
Cloud Manager - 3.5
The Assassin - 4
Arrow Shooter - 2
The Mage - 3
The Defenser - 2.5
Poison Maven - 3.5
Ground Melter - 4.5
Hyper Freezer - 3.5
The Builder - 3
The Soldier - 3.5
The Assaulter - 4
The Burster - 5
The Warrior - 4
Ore Collecter - 3.5
The Rich - 3
The Teleporter - 3.5
Space Warpper - 3
Surround Attacker - 4
Force Shifter - 4.5
I am ReinForce - 5
Magnetism Distorter - 3
I am Steve - 3.5
I am Herobrine - 5
The Hermit - 3
Clay Gatherer - 3.5
I am Kirito - 5
Jungle Former - 3.5
I am Kanade - 5
Time Traveler - 5
The Sniper - 4.5
Zombie Employer - 3
The Necromancer - 4
I am Asuna - 4.5
Holy Knight - 4
Solar Paladin - 4
Lunar Wizard - 4
Hyper Assaulter - 5
Random Ability - 3.5
Reinforce Zwei - 4
The Decorater - 3.5
Hyper Summoner - 3
Climate Changer - 3.5
Remote Raider - 4
Wind Operater - 3.5
Energy Transfer - 3.5
The Genocider - 5
Server Dominator - 5
The Outsider - 4
I am Railgun - 5
Copying Eye - 4
Dragon Trainer - 5
Hawk Eye - 4
The Solidifier - 3.5
Gravity Twister - 4
Hyper Assassin - 5
Silent Killer - 3
Black Slayer - 4
The Slasher - 3.5
Night Worker - 4
Light Gemstone - 2
The Dracula - 5
Mushroom Grower - 3
Ender Girl - 2
Taiga Appearer - 2.5
The Ruiner - 4
Swamp Generater - 3
Arch Summoner - 3
Arch Mage - 3.5
Puella Magica - 2.5
Hyper Builder - 3
Scalar Increaser - 4
Vector Reflacter - 4.5
Tensor Veerer - 5
Arch Mechanic - 4
The Sealer - 3
The Archangel - 4
White Eye - 3.5
Mental Out - 3
World Editor - 3

Water Controller sr. - 4.5
Air Bander sr. - 4.5
The Binder sr. - 4.5

Dark Healer - 4

Fire Expert - 3.5
Magma Controller - 5
Kaian pon Kalropon - 5

Dark Tornado jr. - 5.5(6)
Hidden Ability - 4.5

Electric Current - 4
The Shader - 5
Tornado Striker - 4
Buf Exerter - 4
The X - 5
Hyper Binder - 3
I am Thor - 4
Joker Junior - 5
Chat Coverer - 1
Dark Cheater - 5

I am Flowey - 3
I am Toriel - 3
I am Napstablock - 2
I am Sans - 5
I am Papyrus - 4
I am Kid - 1
I am Undyne - 3
I am Temmie - 2
I am Alphys - 2
I am Mettaton - 4
I am Muffet - 2
I am Asgore - 4
I am Frisk - 2
I am Chara - 4
I am Gaster - 5

I am Ace - 3.5
I am Aokizi - 4
The D - 4
I am Alex
The T


//-----------
version 0.4.3+
불-268(나무칼)-269(나무삽)-270(나무 곡괭이)-271(나무도끼)
물-272(돌칼)-273(돌삽)-274(돌곡괭이)-275(돌도끼)
나무-280(막대기)-281(그릇)-288(깃털)-289(화약)
크리퍼-가죽세트(298~301)
흙-290(나무괭이)-291(돌괭이)-292(철괭이)-294(금괭이)
소환-금갑빠세트(314~317)
빛-레드스톤-눈덩이-가죽-점토벽돌(331, 332, 334, 336)
어둠-석탄-다이아-철-금(263~266)
얼음-부싯돌(318)-밀(296)-종이(339)-발광석 가루(348)
*/

//Item
ModPE.setItem(511, "book_writable", 0, "Dark Tornado's Book");

//blocks
try{
addBlocksUnder14();
}
catch(e){
addBlocksOver17();
}
function addBlocksUnder14(){
Block.defineBlock(252, "Time Pillar", [["quartz_block", 4], ["quartz_block", 4], ["quartz_block", 3], ["quartz_block", 3], ["quartz_block", 3], ["quartz_block", 3]]);
Block.defineBlock(242, "Time Jump Stone", [["quartz_block", 5]]);
Block.defineBlock(228, "ESI Stone", [["quartz_block", 5]]);
Block.defineBlock(227, "ESI Stone 2", [["quartz_block", 5]]);
Block.defineBlock(239, "Link Stone", [["quartz_block", 0]]);
Block.defineBlock(238, "Cyan Stone", [["quartz_block", 0]]);
Block.defineBlock(237, "Green Stone", [["quartz_block", 0]]);
Block.defineBlock(236, "Link Stone : on", [["quartz_block", 0]]);
Block.defineBlock(235, "Push Stone", [["quartz_block", 0]]);
Block.defineBlock(233, "Spell Stone : on", [["end_stone", 0]]);
Block.defineBlock(234, "Spell Stone : off", [["end_stone", 0]]);
Block.defineBlock(232, "Link Stone : off", [["quartz_block", 0]]);
Block.defineBlock(220, "Sparkling Log", [["log", 1], ["log", 1], ["log", 0], ["log", 0], ["log", 0], ["log", 0]]);
}
function addBlocksOver17(){
Block.defineBlock(252, "Time Pillar", [["quartz_block_bottom", 2], ["quartz_block_top", 2], ["quartz_block_side", 2], ["quartz_block_side", 2], ["quartz_block_side", 2], ["quartz_block_side", 2]]);
Block.defineBlock(242, "Time Jump Stone", [["quartz_block_side", 1]]);
Block.defineBlock(228, "ESI Stone", [["quartz_block_side", 1]]);
Block.defineBlock(227, "ESI Stone 2", [["quartz_block_side", 1]]);
Block.defineBlock(239, "Link Stone", [["quartz_block_bottom", 0]]);
Block.defineBlock(238, "Cyan Stone", [["quartz_block_bottom", 0]]);
Block.defineBlock(237, "Green Stone", [["quartz_block_bottom", 0]]);
Block.defineBlock(236, "Link Stone (on)", [["quartz_block_bottom", 0]]);
Block.defineBlock(235, "Push Stone", [["quartz_block_bottom", 0]]);
Block.defineBlock(233, "Spell Stone (on)", [["end_stone", 0]]);
Block.defineBlock(234, "Spell Stone (off)", [["end_stone", 0]]);
Block.defineBlock(232, "Link Stone (off)", [["quartz_block_bottom", 0]]);
Block.defineBlock(220, "Sparkling Log", [["log_top", 0], ["log_top", 0], ["log_side", 0], ["log_side", 0], ["log_side", 0], ["log_side", 0]]);
}
Block.defineBlock(229, "Cyan Time Stone", [["end_stone", 0]]);
Block.setColor(229, [0x00ffff]);
Block.setLightLevel(229, 15);
Block.defineBlock(251, "Red Time Stone", [["end_stone", 0]]);
Block.setColor(251, [0xff44aa]);
Block.setLightLevel(251, 15);
Block.setColor(252, [0x00ffff]);
Block.setLightLevel(252, 10);
Block.setColor(242, [0xff00ff]);
Block.setLightLevel(242, 15);
Block.setColor(228, [0xffff00]);
Block.setShape(228, 0.01, 0.15, 0.01, 0.99, 0.85, 0.99);
Block.setLightLevel(228, 15);
Block.setColor(227, [0xffff00]);
Block.setShape(227, 0.3, -1.5, 0.3, 0.7, 0.5, 0.7);
Block.setLightLevel(227, 15);
Block.setColor(239, [0x00ffff]);
Block.setShape(239, 0.3, 0, 0.3, 0.7, 1, 0.7);
Block.setLightLevel(239, 15);
Block.setColor(238, [0x00ffff]);
Block.setShape(238, 0, 0, 0, 1, 0.999, 1);
Block.setLightLevel(238, 8);
Block.setColor(237, [0x00ff00]);
Block.setLightLevel(237, 8);
Block.setColor(236, [0xffaaff]);
Block.setLightLevel(236, 5);
Block.setDestroyTime(236, 1);
Block.setExplosionResistance(236, 500);
Block.setColor(235, [0xaaffff]);
Block.setLightLevel(235, 5);
Block.setDestroyTime(235, 1);
Block.setExplosionResistance(235, 500);
Block.setColor(233, [0x89ff89]);
Block.setLightLevel(233, 15);
Block.setDestroyTime(233, 5);
Block.setExplosionResistance(233, 500);
Block.setColor(234, [0x45dd45]);
Block.setDestroyTime(234, 5);
Block.setExplosionResistance(234, 500);
Block.setColor(232, [0xffaaff]);
Block.setDestroyTime(232, 1);
Block.setExplosionResistance(232, 500);
Block.defineBlock(231, "Fake Obsidian", [["obsidian", 0]]);
Block.setDestroyTime(231, 15);
Block.setExplosionResistance(231, 500);
var cache = [229, 251, 252, 228, 242, 239, 238, 237];
for(var n=0;n<cache.length;n++){
Block.setDestroyTime(cache[n], -1);
Block.setExplosionResistance(cache[n], 6000);
}
Block.defineBlock(226, "Green Sparkling Stone", [["end_stone", 0]]);
Block.defineBlock(225, "Purple Sparkling Stone", [["end_stone", 0]]);
Block.defineBlock(224, "Sparkling Planks", [["planks", 0]]);
Block.defineBlock(223, "Half Sparkling Planks", [["planks", 0]], 1, false, 0);
Block.defineBlock(222, "Sparkling Leaf", [["leaves", 0]], 1, false, 0);
Block.defineBlock(221, "Sparkling Fence", [["planks", 0]], 1, false, 11);
Block.setLightLevel(226, 15);
Block.setDestroyTime(226, 1);
Block.setColor(225, [0xaa00ff]);
Block.setLightLevel(225, 15);
Block.setDestroyTime(225, 1);
Block.setLightLevel(224, 5);
Block.setDestroyTime(224, 1);
Block.setLightLevel(223, 3);
Block.setDestroyTime(223, 1);
Block.setLightOpacity(223, 0);
Block.setShape(223, 0, 0, 0, 1, 0.5, 1);
Block.setDestroyTime(223, 1);
Block.setLightLevel(221, 15);
Block.setDestroyTime(221, 0.5);
Block.setLightLevel(222, 15);
Block.setDestroyTime(222, 0.01);
Block.setLightOpacity(222, 0);
Block.setRenderLayer(222, 3);
Block.setLightLevel(220, 5);
Block.setDestroyTime(220, 2);
//Block.setColor(207, [0xffff00]);
Block.setLightLevel(221, 3);
Block.setLightOpacity(221, 0);
Block.setDestroyTime(221, 1);
var cache = [226, 224, 223, 221, 222, /*206, */220, 237];	
for(var n=0;n<cache.length;n++)
Block.setColor(cache[n], [0x00ffff]);


const ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
const sdcard = android.os.Environment.getExternalStorageDirectory().getAbsolutePath();

const Color = android.graphics.Color;
const Button = android.widget.Button;
const ToggleButton = android.widget.ToggleButton;
const LinearLayout = android.widget.LinearLayout;
const View = android.view.View;
const Gravity = android.view.Gravity;
const TextView = android.widget.TextView;
const EditText = android.widget.EditText;
const AlertDialog = android.app.AlertDialog;
const PopupWindow = android.widget.PopupWindow;
const DialogInterface = android.content.DialogInterface;
const ScrollView = android.widget.ScrollView;
const Thread = java.lang.Thread;
const ScriptManager = net.zhuoweizhang.mcpelauncher.ScriptManager;
const RadioButton = android.widget.RadioButton;
const RadioGroup = android.widget.RadioGroup;
const ColorDrawable = android.graphics.drawable.ColorDrawable;

const holoDark = AlertDialog.THEME_HOLO_DARK;
const number = android.text.InputType.TYPE_CLASS_NUMBER;
const number2 = android.text.InputType.TYPE_NUMBER_FLAG_SIGNED;

var maxHealthFix = false;
var getPlayers = false;
//recipe+
try{
var verss = ModPE.getMinecraftVersion().toString().split(".");
if(Number(verss[1])>=12||vers[0]=="1"){
Item.addShapedRecipe(511, 1, 0, ["   ", " i ", "   "], ["i", 340, 0]);
Item.addShapedRecipe(320, 8, 0, ["   ", " i ", "   "], ["i", 511, 0]);
var cache = [49, 246, 19, 351, 329, 302, 303, 304, 305];
for(var n=0;n<cache.length;n++)
Item.addShapedRecipe(cache[n], 1, 0, ["   ", " i ", "   "], ["i", 511, 0]);
}
else{
addRecipes();
}
if(Number(verss[1])>=14) maxHealthFix = true;
}
catch(e){
addRecipes();
}
function addRecipes(){
Item.addCraftRecipe(511, 1, 0, [340, 1, 0]);
Item.addCraftRecipe(320, 8, 0, [511, 1, 0]);
Item.addCraftRecipe(351, 2, 0, [511, 1, 0]);
Item.addCraftRecipe(329, 2, 0, [511, 1, 0]);
var cache = [49, 246, 19, 302, 303, 304, 305];
for(var n=0;n<cache.length;n++)
Item.addCraftRecipe(cache[n], 1, 0, [511, 1, 0]);
}

//else
Player.addItemCreativeInv(246, 1, 0);
Player.addItemCreativeInv(511, 1, 0);
/*
Player.addItemCreativeInv(329, 1, 0);
Player.addItemCreativeInv(305, 1, 0);
Player.addItemCreativeInv(304, 1, 0);
Player.addItemCreativeInv(303, 1, 0);
Player.addItemCreativeInv(302, 1, 0);
Player.addItemCreativeInv(242, 1, 0);
Player.addItemCreativeInv(252, 1, 0);
Player.addItemCreativeInv(251, 1, 0);
Player.addItemCreativeInv(250, 1, 0);
Player.addItemCreativeInv(236, 1, 0);
Player.addItemCreativeInv(232, 1, 0);
Player.addItemCreativeInv(235, 1, 0);
Player.addItemCreativeInv(234, 1, 0);
Player.addItemCreativeInv(233, 1, 0);
*/

ModPE.overrideTexture("images/mob/darkTornado.png", "http://darktornado.dothome.co.kr/000+/darkTornado.png");
ModPE.overrideTexture("images/mob/whiteLady.png", "https://raw.githubusercontent.com/DarkTornado/ESP-SB/master/whiteLady.png");


var admin = 0;
var admin2 = 0;
var fill = false;
var adx = null;
var ady = null;
var adz = null;
var gun = null;
var tym = false;
var ad1 = false;
var ad1a = 0;
var ho = false;
var ad;
var adt = 0;
var adH = 20;
var adt1 = 0;
var adt2 = 0;
var adt3 = 0;
var adt4 = 0;
var adsc = false;
var hhhhh = 0;
var cree = new Array(5);
var mchh = new Array(2);
var wl = {
t : 0, o : 0, pn : new Array(),
bgm  : new android.media.MediaPlayer(),
m : function(m){
clientMessage("<???> "+m);
}
};
var exp = {
onoff : false, c : 0, x : null, y : null, z : null
};
var ra = {
p : new Array(), t : 0, x : null, y : null, z : null, t2 : null, t3 : 0,
n : ["Fire User", "Water Controller", "Nature Guardian", "I am Creeper", "Soil Master", "The Summoner", "The Luminous", "The Darkness", "The Freezer", "Desert Maker", "The Vampire", "Air Bander", "I am Elsa", "Mass Titan", "Thunder Breaker", "The Binder", "The Mechanic", "TNT Expert", "Trap Creater", "The Healer", "Nether Man", "Cloud Manager", "The Assassin", "Arrow Shooter", "The Mage", "The Defenser", "Poison Maven", "Ground Melter", "Hyper Freezer", "The Builder", "The Soldier", "The Assaulter", "The Burster", "The Warrior", "Ore Collecter", "The Rich", "The Teleporter", "Space Warpper", "Surround Attacker", "Force Shifter", "I am Reinforce", "Magnetism Distorter", "I am Steve", "I am Herobrine", "The Hermit", "Clay Gatherer", "I am Kirito", "Jungle Former", "I am Kanade", "Time Traveler", "The Sniper", "Zombie Employer", "The Necromancer", "I am Asuna", "Holy Knight", "Solar Paladin", "Lunar Wizard", "Hyper Assaulter", "Random Ability", "Reinforce Zwei", "The Decorater", "Hyper Summoner", "Climate Changer", "Remote Raider", "Wind Operater", "Energy Transfer", "The Genocider", "Server Dominator", "The Outsider", "I am Railgun", "Copying Eye", "Dragon Trainer", "Hawk Eye", "The Solidifier", "Gravity Twister", "Hyper Assassin", "Silent Killer", "Black Slayer", "The Slasher", "Night Worker", "Light Gemstone", "The Dracula", "Mushroom Grower", "Ender Girl", "Taiga Appearer", "The Ruiner", "Swamp Generater", "Arch Summoner", "Arch Mage", "Puella Magica", "Hyper Builder", "Scalar Increaser", "Vector Reflacter", "Tensor Veerer", "Arch Mechanic", "The Sealer", "The Archangel", "White Eye", "Mental Out", "World Editor"]
};
var espCode = ["fire", "water", "tree", "creeper", "soil", "summon", "light", "dark",  "ice",  "sand",  "blood",  "air",  "elsa",  "titan",  "thunder",  "bind",  "meca",  "tnt",  "trap",  "heal",  "nether",  "cloud",  "assassin",  "arrow",  "mage",  "defense",  "poison",  "melt",  "hfreeze",  "builder",  "soldier",  "assault",  "burst",  "warrior",  "ore",  "rich",  "tp",  "space",  "sattack",  "force", "rein", "magnet", "steve", "hero", "hermit", "clay", "kirito", "jungle", "kanade", "time", "snipe", "zombie", "necro", "asuna", "holy", "solar", "lunar", "has", "random", "zwei", "deco", "hsum", "climate", "raid", "wind", "energy", "geno", "server", "out", "rgun", "copy", "dragon", "hawk", "solid", "gravity", "hass", "sikill", "black", "slash", "night", "gem", "dra", "mush", "ender", "taiga", "ruin", "swamp", "asum", "amage", "puella", "hbuild", "scalar", "vector", "tensor", "ameca", "seal", "angel", "white", "mental", "world"];
var espCodes = ["fire[0]", "water[0]", "tree[0]", "creeper[0]", "soil[0]", "summon[0]", "light[0]", "dark[0]",  "ice[0]",  "sand[0]",  "blood[0]",  "air[0]",  "elsa[0]",  "titan[0]",  "thunder[0]",  "bind[0]",  "meca[0]",  "tnt[0]",  "trap[0]",  "heal[0]",  "nether[0]",  "cloud[0]",  "assassin[0]",  "arrow[0]",  "mage[0]",  "defense[0]",  "poison[0]",  "melt[0]",  "hfreeze[0]",  "builder[0]",  "soldier[0]",  "assault[0]",  "burst[0]",  "warrior[0]",  "ore[0]",  "rich[0]",  "tp[0]",  "space[0]",  "sattack[0]",  "force[0]", "rein[0]", "magnet[0]", "steve[0]", "hero[0]", "hermit[0]", "clay[0]", "kirito[0]", "jungle[0]", "kanade[0]", "time[0]", "snipe[0]", "zombie[0]", "necro[0]", "asuna[0]", "holy[0]", "solar[0]", "lunar[0]", "has[0]", "random[0]", "zwei[0]", "deco[0]", "hsum[0]", "climate[0]", "raid[0]", "wind[0]", "energy[0]", "geno[0]", "server[0]", "out[0]", "rgun[0]", "copy[0]", "dragon[0]", "hawk[0]", "solid[0]", "gravity[0]", "hass[0]", "sikill[0]", "black[0]", "slash[0]", "night[0]", "gem[0]", "dra[0]", "mush[0]", "ender[0]", "taiga[0]", "ruin[0]", "swamp[0]", "asum[0]", "amage[0]", "puella[0]", "hbuild[0]", "scalar[0]", "vector[0]", "tensor[0]", "ameca[0]", "seal[0]", "angel[0]", "white[0]", "mental[0]", "world[0]"];
var sb2Code = ["t2hor", "w2ater", "k2ill", "m2isaka", "e2lsa", "p2ush", "f2ire", "f2aster", "k2ick", "t2ree", "l2ava", "b2ind", "s2and"];
var ep = {tf : false, p : []};
var zs = {t : 0, n : 0};
var la = {t : 0, a : null,
x : null, y : null, z : null,
m : function(msg){
var pe= Player.getEntity();
var pn = Player.getName(pe);
Entity.setNameTag(pe, "?????");
ScriptManager.nativeSendChat(msg);
Entity.setNameTag(pe, pn);
}
};
var underTaleActive = false;
var potionCool = [];

var mp = false;
var mp2 = false;
var mp3 = false;
var mp4 = false;
var mpk = false;
var mpr = false;
var auto = false;
var expl = -1;
var lang = 0;
var espch = new Array(3);
var item = getCarriedItem;
var version;
var espn;
var fixt = 0;
var mcpev = false;
var passOnoff = false;
var town = false;
var espOnoff = false;
var streetLight = false;
var slt = 0;
var slt2 = false;
var darkRender = Renderer.createHumanoidRenderer();
addDarkRender(darkRender);
var whiteRender = Renderer.createHumanoidRenderer();
addWhiteRender(whiteRender);
var mcpev3 = false;
var mcpev4 = false;
var spawnWhiteLady = false;
var inTheWay = false;

var se = {
tf : false,
menus : ["ESP off", "Send ESP", "Kill ESP", "Heal ESP"], locate : 0,
demon : undefined, d1 : 0, d2 : 0, d3 : 0, d4 : 0,
dx : null, dy : null, dz : null,
burst : undefined, b1 : 0, b2 : 0, b3 : 0, b4 : 0,
bx : null, by : null, bz : null,
geno : undefined, g1 : 0, g2 : 0, g3 : 0, g4 : 0,
lolita : undefined, l1 : 0, l2 : 0, l3 : 0, l4 : 0,
avenge : undefined, a1 : 0, a2 : 0, a3 : 0, a4 : 0, a4a : null,
hide : undefined, h1 : 0, h2 : 0, h3 : 0, h4 : 0,
gamble : undefined, ga1 : 0, ga2 : 0, ga3 : 0, ga4 : 0,
gr : undefined,
reaper : undefined, r1 : 0, r2 : 0, r3 : 0, r4 : 0,
rx : null, ry : null, rz : null,
ima : undefined, i1 : 0, i2 : 0, i3 : 0, i4 : 0,
i2a : undefined, ix : null, iy : null, iz : null,
over : undefined, o1 : 0, o2 : 0, o3 : 0, o4 : 0,
or : [], or2 : null,
bls : undefined, bl1 : 0, bl2 : 0, bl3 : 0, bl4 : 0,
bl3a : false, blx : null, bly : null, blz : null,
c : undefined, c1 : 0, c2 : 0, c3 : 0, c4 : 0,
doctor : undefined, do1 : 0, do2 : 0, do3 : 0, do4 : 0,
htp : undefined, ht1 : 0, ht2 : 0, ht3 : 0, ht4 : 0,
ht3a : false, hx : null, hy : null, hz : null,
evil : undefined, e1 : 0, e2 : 0, e3 : 0, e4 : 0,
exa : undefined, eza : null, ex : null, ey : null, ez : null,
code : ["se.demon", "se.burst", "se.geno", "se.lolita", "se.avenge", "se.hide", "se.gamble", "se.reaper", "se.ima", "se.over", "se.bls", "se.c", "se.doctor", "se.htp", "se.evil"]
};

var he = {
on : false, on2 : false,
names : ["Electric Current", "The Shader", "Tornado Striker", "Buf Exerter", "The X", "Hyper Binder", "I am Thor"],
names2 : ["Joker Junior", "Chat Coverer", "Dark Cheater"],
menus : ["ESP off", "Send ESP", "Kill ESP", "Heal ESP"],
elect : undefined,
shade : undefined,
torn : undefined,
buf : undefined,
x : undefined,
bind : undefined,
thor : undefined,
joker : undefined,
chat : undefined,
dark : undefined,
e1 : 0, e2 : 0, e3 : 0, e4 : 0,
e3a : false, e3b : 0, e3x : null, e3y : null, e3z : null,
ex : null, ey : null, ez : null,
s1 : 0, s2 : 0, s3 : 0, s4 : 0,
s2a : null, s4a : new Array(),
t1 : 0, t2 : 0, t3 : 0, t4 : 0,
tx : null, ty : null, tz : null,
b1 : 0, b2 : 0, b3 : 0, b4 : 0,
b3a : null, b4a : null,
x1 : 0, x2 : 0, x3 : 0, x4 : 0,
xx : null, xy : null, xz : null,
bi1 : 0, bi2 : 0, bi3 : 0, bi4 : 0,
th1 : 0, th2 : 0, th3 : 0, th4 : 0,
th2x : null, th2y : null, th2z : null, thx : null, thy : null, thz : null,
j1 : 0, j2 : 0, j3 : 0, j4 : 0,
j3a : false, j3b : null, jx : null, jy : null, jz : null,
c1 : 0, c2 : 0, c3 : 0, c4 : 0,
d1 : 0, d2 : 0, d3 : 0, d4 : 0,
d2a : false, d3x : null, d3y : null, d3z : null, dx : null, dy : null, dz : null
};

var pa = {sin : null, cos : null, n : 0};
var dt = {p : undefined, tf : false, f : false, t : 0, ek : 1, r : null, x : null, y : null, z : null, s : null, c : null, n : 0, sin : null, cos : null, s2 : null, c2 : null, l : false};

var r = {x : null, y : null, z : null, n : 0};

var u = [
{p : null, c1 : 0, c2 : 0, c3 : 0, c4 : 0},
{p : null, c1 : 0, c2 : 0, c3 : 0, c4 : 0},
{p : null, c1 : 0, c2 : 0, c3 : 0, c4 : 0},
{p : null, c1 : 0, c2 : 0, c3 : 0, c4 : 0},
{p : null, c1 : 0, c2 : 0, c3 : 0, c4 : 0},
{p : null, c1 : 0, c2 : 0, c3 : 0, c4 : 0},
{p : null, c1 : 0, c2 : 0, c3 : 0, c4 : 0},
{p : null, c1 : 0, c2 : 0, c3 : 0, c4 : 0},
{p : null, c1 : 0, c2 : 0, c3 : 0, c4 : 0},
{p : null, c1 : 0, c2 : 0, c3 : 0, c4 : 0},
{p : null, c1 : 0, c2 : 0, c3 : 0, c4 : 0},
{p : null, c1 : 0, c2 : 0, c3 : 0, c4 : 0},
{p : null, c1 : 0, c2 : 0, c3 : 0, c4 : 0, s : false},
{p : null, c1 : 0, c2 : 0, c3 : 0, c4 : 0},
{p : null, c1 : 0, c2 : 0, c3 : 0, c4 : 0, s : false},
];

var l = {
fire : null, fc : [0, 0, 0, 0],
ice : null, ic : [0, 0, 0, 0],
d : null, dc : [0, 0, 0, 0],
alex : null, ac : [0, 0, 0, 0],
t : null, tc : [0, 0, 0, 0]
};

var media = new android.media.MediaPlayer();
var bgm = new android.media.MediaPlayer();

var btn = null;
var btnTime = null;
var btnSS = null;
var btnPlayer = null;
var menu = null;
var menu2 = null;
var menu3 = null;
var menu4 = null;
var menu5 = null;
var menuP = null;
var menuS = null;
var menuH = null;
var menuI = null;
var menuE = null;
var locate = 0;
var emcolor = 0;
var playerTarget;
var espN = null;
var p0w = new Array(2);
var bgmOnoff = false;
var bgmTime = 0;
var themeSong = false;
var dn = null;
var d2 = null;
var multi = false;
var tttt = [];


var dtj;
var dtl = false;
var dtla = 0;
var dt1 = false;
var dt2 = false;
var dt3 = false;
var dt4 = false;
var dt1a = 0;
var dt2a = 0;
var dt3a = 0;
var dt4a = 0;
var dtx, dtz, dtz;

var fe;
var fe1 = false;
var fe2 = false;
var fe3 = false;
var fe4 = false;
var fe1a = 0;
var fexa, feza;
var fe2a = 0;
var fe2x, fe2y, fe2z;
var fe3a = 0;
var fe4a = 0;
var fe4b = false;
var fex, fey, fez;

var magma;
var mg1 = 0;
var mg2 = 0;
var mg3 = 0;
var mg4 = 0;
var mgx, mgy, mgz;

var kaian;
var kp1 = 0;
var kp2 = 0;
var kp3 = 0;
var kp3x, kp3y, kp3z;
var kp4 = 0;
var kpx, kpy, kpz;


var fire = [];
var water = [];
var tree = [];
var creeper = [];
var soil = [];
var summon = [];
var light = [];
var dark = [];
var ice = [];
var sand = [];
var blood = [];
var air = [];
var thunder = [];
var elsa = [];
var titan = [];
var bind = [];
var meca = [];
var tnt = [];
var trap = [];
var heal = [];
var nether = [];
var cloud = [];
var assassin = [];
var arrow = [];
var mage = [];
var defense = [];
var poison = [];
var melt = [];
var hfreeze = [];
var builder = [];
var soldier = [];
var assault = [];
var burst = [];
var warrior = [];
var ore = [];
var rich = [];
var tp = [];
var space = [];
var sattack = [];
var force = [];
var rein = [];
var magnet = [];
var steve = [];
var hero = [];
var hermit = [];
var clay = [];
var kirito = [];
var jungle = [];
var kanade = [];
var time = [];
var snipe = [];
var zombie = [];
var necro = [];
var asuna = [];
var holy = [];
var solar = [];
var lunar = [];
var has = [];
var random = [];
var zwei = [];
var deco = [];
var hsum = [];
var climate = [];
var raid = [];
var wind = [];
var energy = [];
var geno = [];
var server = [];
var out = [];
var rgun = [];
var copy = [];
var dragon = [];
var hawk = [];
var solid = [];
var gravity = [];
var sikill = [];
var hass = [];
var black = [];
var slash = [];
var night = [];
var gem = [];
var dra = [];
var mush = [];
var ender = [];
var taiga = [];
var ruin = [];
var swamp = [];
var asum = [];
var amage = [];
var puella = [];
var hbuild = [];
var scalar = [];
var vector = [];
var tensor = [];
var ameca = [];
var seal = [];
var angel = [];
var white = [];
var mental = [];
var world = [];


var f1 = [];
var f2 = [];
var f2x = [];
var f2y = [];
var f2z = [];
var f3 = [];
var f4 = [];
var f1a = [];
var f2a = [];
var f3a = [];
var f4a = [];
var f4b = [];
var f4c = [];
var f4d = [];
var fx = [];
var fy = [];
var fz = [];

var w1 = [];
var w2 = [];
var w3 = [];
var w4 = [];
var w1a = [];
var w2a = [];
var w3a = [];
var w4a = [];
var w1b = [];
var w1c = [];
var wx = [];
var wy = [];
var wz = [];
var w4b = [];
var w4c = [];
var wxa = [];
var wya = [];
var wza = [];
var w3b = [];
var w3c = [];
var wxb = [];
var wyb = [];
var wzb = [];
var w2x = [];
var w2y = [];
var w2z = [];

var t1 = [];
var t2 = [];
var t3 = [];
var t4 = [];
var t1a = [];
var t2a = [];
var t3a = [];
var t3b = [];
var t3x = [];
var t3y = [];
var t3z = [];
var t4a = [];
var t4b = [];
var tx = [];
var ty = [];
var tz = [];

var c1 = [];
var c2 = [];
var c3 = [];
var c4 = [];
var c1a = [];
var c2a = [];
var c2x = [];
var c2y = [];
var c2z = [];
var c3a = [];
var c4a = [];
var c1b = [];
var c1c = [];
var c1d = [];
var cx = [];
var cy = [];
var cz = [];
var c1e = [];
var c1f = [];
var cx1 = [];
var cy1 = [];
var cz1 = [];
var cx2 = [];
var cy2 = [];
var cz2 = [];
var cx3 = [];
var cy3 = [];
var cz3 = [];

var s1 = [];
var s2 = [];
var s3 = [];
var s4 = [];
var s1a = [];
var s2a = [];
var s2x =  [];
var s2y = [];
var s2z = [];
var s3a = [];
var s4a = [];
var sx = [];
var sy = [];
var sz = [];

var ss1 = [];
var ss2 = [];
var ss3 = [];
var ss4 = [];
var ss1a = [];
var ss2a = [];
var ss3a = [];
var ss4a = [];

var l1 = [];
var l2 = [];
var l3 = [];
var l4 = [];
var l1a = [];
var l2a = [];
var l3a = [];
var l4a = [];
var l3b = [];
var l3c = [];
var lx = [];
var ly = [];
var lz = [];
var lxa = [];
var lya = [];
var lza = [];

var d1 = [];
var d2 = [];
var d3 = [];
var d4 = [];
var d1a = [];
var d2a = [];
var d3a = [];
var d4a = [];
var dx = [];
var dy = [];
var dz = [];
var d3b = [];
var d3c = [];
var dxa = [];
var dya = [];
var dza = [];
var d1b = [];
var d1c = [];
var dxb = [];
var dyb = [];
var dzb = [];

var i1 = [];
var i2 = [];
var i3 = [];
var i4 = [];
var i1a = [];
var i2a = [];
var i3a = [];
var i4a = [];
var i1b = [];
var i1c = [];
var ix = [];
var iy = [];
var iz = [];
var i3b = [];
var i3c = [];
var ixa = [];
var iya = [];
var iza = [];
var ixb = [];
var izb = [];
var ixc = [];
var iyc = [];
var izc = [];

var m1 = [];
var m2 = [];
var m3 = [];
var m4 = [];
var m1a = [];
var m2a = [];
var m3a = [];
var m3x  = [];
var m3y = [];
var m3z = [];
var m4a = [];
var m4x = [];
var m4y = [];
var m4z = [];

var b1 = [];
var b2 = [];
var b3 = [];
var b4 = [];
var b1a = [];
var b2a = [];
var b3a = [];
var b4a = [];
var b4b = [];

var a1 = [];
var a2 = [];
var a3 = [];
var a4 = [];
var a1a = [];
var a2a = [];
var a2b = [];
var a2x = [];
var a2y = [];
var a2z = [];
var a3a = [];
var a4a = [];

var th1 = [];
var th2 = [];
var th3 = [];
var th4 = [];
var th1a = [];
var th1c = [];
var th2a = [];
var th3a = [];
var th3b = [];
var th4a = [];
var thx = [];
var thy = [];
var thz = [];
var thxa = [];
var thya = [];
var thza = [];
var thxb = [];
var thyb = [];
var thzb = [];

var e1 = [];
var e2 = [];
var e3 = [];
var e4 = [];
var e1a = [];
var e2a = [];
var e3a = [];
var e3b = [];
var e3c = [];
var ex = [];
var ey = [];
var ez = [];
var e4a = [];
var ex4 = [];
var ey4 = [];
var ez4 = [];

var tt1 = [];
var tt2 = [];
var tt3 = [];
var tt4 = [];
var tt1a = [];
var tt2a = [];
var tt3a = [];
var tt4a = [];
var tt4b = [];
var tt4c = [];
var tt4d = [];
var ttx = [];
var tty = [];
var ttz = [];
var tt2b = [];
var ttxa = [];
var ttya = [];
var ttza = [];
var ttxb = [];
var ttyb = [];
var ttzb = [];

var bb1 = [];
var bb2 = [];
var bb3 = [];
var bb4 = [];
var bb1a = [];
var bb2a = [];
var bb3a = [];
var bb4a = [];
var bb4b = [];
var bb4c = [];
var bbx = [];
var bby = [];
var bbz = [];

var mm1 = [];
var mm2 = [];
var mm3 = [];
var mm4 = [];
var mm1a = [];
var mmx1 = [];
var mmy1 = [];
var mmz1 = [];
var mmx2a = [];
var mmy2a = [];
var mmz2a = [];
var mm2a = [];
var mm3a = [];
var mm3b = [];
var mmx = [];
var mmy = [];
var mmz = [];
var mmx2 = [];
var mmy2 = [];
var mmz2 = [];
var mm4a = [];
var mmx4 = [];
var mmy4 = [];
var mmz4 = [];

var tn1 = [];
var tn2 = [];
var tn3 = [];
var tn4 = [];
var tn1a = [];
var tn1x = [];
var tn1y = [];
var tn1z = [];
var tn2a = [];
var tnx = [];
var tny = [];
var tnz = [];
var tn3a = [];
var tnx3 = [];
var tny3 = [];
var tnz3 = [];
var tn4a = [];
var tnx2 = [];
var tny2 = [];
var tnz2 = [];

var tr1 = [];
var tr2 = [];
var tr3 = [];
var tr4 = [];
var tr1a = [];
var tr1b = [];
var trx1 = [];
var try1 = [];
var trz1 = [];
var tr2a = [];
var tr2b = [];
var trx2 = [];
var try2 = [];
var trz2 = [];
var tr3a = [];
var tr3b = [];
var trx3 = [];
var try3 = [];
var trz3 = [];
var tr4a = [];
var tr4b = [];
var trx4 = [];
var try4 = [];
var trz4 = [];

var h1 = [];
var h2 = [];
var h3 = [];
var h4 = [];
var h1a = [];
var h2a = [];
var h3a = [];
var h4a = [];
var h4b = [];

var n1 = [];
var n2 = [];
var n3 = [];
var n4 = [];
var n1a = [];
var n2a = [];
var n2x = [];
var n2y = [];
var n2z = [];
var n3a = [];
var n4a = [];
var nx = [];
var ny = [];
var nz = [];

var cc1 = [];
var cc2 = [];
var cc3 = [];
var cc4 = [];
var cc1a = [];
var cc2a = [];
var cc2b = [];
var cc3a = [];
var cc3b = [];
var cc3c = [];
var cc3d = [];
var cc4a = [];
var ccx = [];
var ccy = [];
var ccz = [];
var ccx1 = [];
var ccy1 = [];
var ccz1 = [];
var ccx2 = [];
var ccy2 = [];
var ccz2 = [];
var mmxc = [];
var mmyc = [];
var mmzc = [];

var as1 = [];
var as2 = [];
var as3 = [];
var as4 = [];
var as1a = [];
var as2a = [];
var as3a = [];
var as4a = [];

var ar1 = [];
var ar2 = [];
var ar3 = [];
var ar4 = [];
var ar1a = [];
var ar1x = [];
var ar1y = [];
var ar1z = [];
var ar2a = [];
var arx2 = [];
var ary2 = [];
var arz2 = [];
var ar3a = [];
var ar4a = [];
var arx = [];
var ary = [];
var arz = [];

var ma1 = [];
var ma2 = [];
var ma3 = [];
var ma4 = [];
var ma1a = [];
var ma2a = [];
var ma2b = [];
var max2 = [];
var may2 = [];
var maz2 = [];
var ma3a = [];
var max3 = null;
var maz3 = null;
var ma4a = [];
var max = [];
var may = [];
var maz = [];

var de1 = [];
var de2 = [];
var de3 = [];
var de4 = [];
var de1a = [];
var de2a = [];
var de3a = [];
var de3b = [];
var dex3 = [];
var dey3 = [];
var dez3 = [];
var de4a = [];
var de4b = [];
var dex = [];
var dey = [];
var dez = [];
var dexa, deza;

var p1 = [];
var p2 = [];
var p3 = [];
var p4 = [];
var p1a = [];
var p1b = [];
var p2a = [];
var p2xa = [], p2ya = [], p2za = [];
var p3a = [];
var p3b = [];
var p4a = [];
var p4x = [], p4y = [], p4z = [];

var me1 = [];
var me2 = [];
var me3 = [];
var me4 = [];
var me1a = [];
var me1x = [], me1y = [], me1z = [];
var me2a = [];
var me2x = [], me2y = [], me2z = [];
var mexa = [], meza = [];
var me3a = [];
var me4a = [];
var mex = [], mey = [], mez = [];

var hf1 = [];
var hf2 = [];
var hf3 = [];
var hf4 = [];
var hf1a = [];
var hf1x = [], hf1y = [], hf1z = [];
var hf2a = [];
var hf2x = [], hf2y = [], hf2z = [];
var hf3a = [];
var hf3b = [];
var hf3c = [];
var hf3x = [], hf3y = [], hf3z = [];
var hf4a = [];
var hfx = [], hfy = [], hfz = [];

var bu1 = [];
var bu2 = [];
var bu3 = [];
var bu4 = [];
var bu1a = [];
var bu1x, bu1z;
var bu2a = [];
var bu2b = [];
var bu2x = [], bu2y = [], bu2z = [];
var bu3a = [];
var bu3b = [];
var bu3x = [], bu3y = [], bu3z = [];
var bu4a = [];
var bu4b = [];
var bux = [], buy = [], buz = [];

var so1 = [];
var so2 = [];
var so3 = [];
var so4 = [];
var so1a = [];
var so2a = [];
var so2b = [];
var so2x = [], so2y = [], so2z = [];
var so3a = [];
var so4a = [];
var so4b = [];
var so4c = [];
var sox = [], soy = [], soz = [];

var asu1 = [];
var asu2 = [];
var asu3 = [];
var asu4 = [];
var asu1a = [];
var asu2a = [];
var asu2x = [], asu2y = [], asu2z = [];
var asu3a = [];
var asu4a = [];

var bus1 = [];
var bus2 = [];
var bus3 = [];
var bus4 = [];
var bus1a = [];
var bus1b = [];
var bus1c = [];
var bus1x = [], bus1y = [], bus1z = [];
var bus2a = [];
var bus3a = [];
var bus4a = [];
var busx = [], busy = [], busz = [];

var wa1 = [];
var wa2 = [];
var wa3 = [];
var wa4 = [];
var wa1a = [];
var wa1x = [];
var wa1y = [];
var wa1z = [];
var waxa = [], waza = [];
var wa2a = [];
var wa3a = [];
var wa4a = [];
var wax = [];
var way = [];
var waz = [];

var o1 = [];
var o2 = [];
var o3 = [];
var o4 = [];
var o1a = [];
var o2a = [];
var o3a = [];
var o3x = [];
var o3y = [];
var o3z = [];
var o4a = [];
var o4b = [];
var o4c = [];
var ox = [];
var oy = [];
var oz = [];

var r1 = [];
var r2 = [];
var r3 = [];
var r4 = [];
var r1a = [];
var r1x = [];
var r1y = [];
var r1z = [];
var r2a = [];
var r3a = [];
var r3x, r3z;
var r4a = [];
var rx = [];
var ry = [];
var rz = [];

var tp1 = [];
var tp2 = [];
var tp3 = [];
var tp4 = [];
var tp1a = [];
var tp1x, tp1z;
var tp2a = [];
var tp3a = [];
var tp4a = [];
var tpx = []
var tpy = []
var tpz = [];

var sp1 = [];
var sp2 = [];
var sp3 = [];
var sp4 = [];
var sp1a = [];
var sp1x, sp1z;
var sp2a = [];
var sp2x = [];
var sp2y = [];
var sp2z = [];
var spxa = [];
var spza = [];
var sp3a = [];
var sp3x = [];
var sp3y = [];
var sp3z = [];
var sp4a = [];
var sp4b = [];
var spx = [];
var spy = [];
var spz = [];

var sa1 = [];
var sa2 = [];
var sa3 = [];
var sa4 = [];
var sa1a = [];
var sa1x = [];
var sa1y = [];
var sa1z = [];
var sa2a = [];
var sa2x = [];
var sa2y = [];
var sa2z = [];
var sa3a = [];
var sa3x = [];
var sa3y = [];
var sa3z = [];
var sa4a = [];
var sa4b = [];
var sax = [];
var say = [];
var saz = [];

var fo1 = [];
var fo2 = [];
var fo3 = [];
var fo4 = [];
var fo1a = [];
var fo1x = [];
var fo1y = [];
var fo1z = [];
var fo2a = [];
var fo2x = [];
var fo2y = [];
var fo2z = [];
var foxa = [];
var foza = [];
var fo3a = [];
var fo4a = [];
var fox = [];
var foy = [];
var foz = [];

var re1 = [];
var re2 = [];
var re3 = [];
var re4 = [];
var re1a = [];
var re1x = [];
var re1y = [];
var re1z = [];
var re2a = [];
var re2x = [];
var re2z = [];
var re3a = [];
var re3x = [];
var re3y = [];
var re3z = [];
var re4a = [];
var rex = [];
var rey = [];
var rez = [];

var mag1 = [];
var mag2 = [];
var mag3 = [];
var mag4 = [];
var mag1a = [];
var mag1b;
var mag2a = [];
var mag2x, mag2z;
var mag3a = [];
var mag3x = [];
var mag3y = [];
var mag3z = [];
var mag4a = [];
var mag4b = [];
var magx = [];
var magy = [];
var magz = [];

var st1 = [];
var st2 = [];
var st3 = [];
var st4 = [];
var st1a = [];
var st2a = [];
var st2b = [];
var st2x = [];
var st2y = [];
var st2z = [];
var stxa, stza;
var st2c = [];
var st3a = [];
var st4a = [];
var stx = [];
var sty = [];
var stz = [];

var he1 = [];
var he2 = [];
var he3 = [];
var he4 = [];
var he1a = [];
var he1b = [];
var he1x = [];
var he1y = [];
var he1z = [];
var he1c = [];
var he1d = [];
var he2a = [];
var he2b = [];
var he2x = [];
var he2y = [];
var he2z = [];
var hexa, heza;
var he3a = [];
var he3x = [];
var he3y = [];
var he3z = [];
var he4a = [];
var hex = [];
var hey = [];
var hez = [];

var her1 = [];
var her2 = [];
var her3 = [];
var her4 = [];
var her1a = [];
var her2a = [];
var her2b = [];
var her2x = [];
var her2y = [];
var her2z = [];
var her3a = [];
var her3b = [];
var her3x = [];
var her3y = [];
var her3z = [];
var her4a = [];
var herx = [];
var hery = [];
var herz = [];

var cl1 = [];
var cl2 = [];
var cl3 = [];
var cl4 = [];
var cl1a = [];
var clxa, clza;
var cl2a = [];
var cl2x = [];
var cl2y = [];
var cl2z = [];
var cl3a = [];
var cl3x = [];
var cl3y = [];
var cl3z = [];
var cl4a = [];
var clx = [];
var cly = [];
var clz = [];

var k1 = [];
var k2 = [];
var k3 = [];
var k4 = [];
var k1a = [];
var kxa = [];
var kza = [];
var k2a = [];
var k2x = [];
var k2y = [];
var k2z = [];
var k3a = [];
var k4a = [];
var k4b = [];
var kx = [];
var ky = [];
var kz = [];

var j1 = [];
var j2 = [];
var j3 = [];
var j4 = [];
var j1a = [];
var j2a = [];
var jxa = [];
var jza = [];
var j3a = [];
var j3b = [];
var j3x = [];
var j3y = [];
var j3z = [];
var j4a = [];
var j4b = [];
var jx = [];
var jy = [];
var jz = [];

var ka1 = [];
var ka2 = [];
var ka3 = [];
var ka4 = [];
var ka1a = [];
var ka2a = [];
var ka3a = [];
var ka3b = [];
var ka3x = [];
var ka3y = [];
var ka3z = [];
var ka4a = [];
var kax = [];
var kay = [];
var kaz = [];

var ti1 = [];
var ti2 = [];
var ti3 = [];
var ti4 = [];
var ti1a = [];
var ti2a = [];
var ti3a = [];
var ti3b = [];
var ti3x = [];
var ti3y = [];
var ti3z = [];
var ti4a = [];
var ti4b = [];
var ti4c = 0;
var tix = [];
var tiy = [];
var tiz = [];

var sn1 = [];
var sn2 = [];
var sn3 = [];
var sn4 = [];
var sn1a = [];
var sn2a = [];
var sn3a = [];
var sn4a = [];
var sn4b = [];
var sn4c = [];
var sn4d = [];
var snx = [];
var sny = [];
var snz = [];
var sn4x = [];
var sn4y = [];
var sn4z = [];

var z1 = [];
var z2 = [];
var z3 = [];
var z4 = [];
var z1a = [];
var z2a = [];
var z2b = [];
var z3a = [];
var z3b = [];
var z3x = [];
var z3y = [];
var z3z = [];
var z4a = [];

var ne1 = [];
var ne2 = [];
var ne3 = [];
var ne4 = [];
var ne1a = [];
var ne2a = [];
var ne3a = [];
var ne4a = [];
var ne4b = [];
var ne4c = [];
var nex = [];
var ney = [];
var nez = [];

var asn1 = [];
var asn2 = [];
var asn3 = [];
var asn4 = [];
var asn1a = [];
var asn2a = [];
var asnx = [];
var asny = [];
var asnz = [];
var asn3a = [];
var asn3b = [];
var asn4a = [];

var ho1 = [];
var ho2 = [];
var ho3 = [];
var ho4 = [];
var ho1a = [];
var ho2a = [];
var ho3a = [];
var ho4a = [];
var hox = [];
var hoy = [];
var hoz = [];

var sol1 = [];
var sol2 = [];
var sol3 = [];
var sol4 = [];
var sol1a = [];
var sol2a = [];
var sol3a = [];
var sol4a = [];
var solx = [];
var soly = [];
var solz = [];

var lu1 = [];
var lu2 = [];
var lu3 = [];
var lu4 = [];
var lu1a = [];
var lu2a = [];
var lu3a = [];
var luxa, luza;
var lu4a = [];
var lux = [];
var luy = [];
var luz = [];

var ha1 = [];
var ha2 = [];
var ha3 = [];
var ha4 = [];
var ha1a = [];
var ha2a = [];
var ha2x = [];
var ha2y = [];
var ha2z = [];
var ha3a = [];
var ha4a = [];

var ra1 = [];
var ra2 = [];
var ra3 = [];
var ra4 = [];
var ra1a = [];
var ra1b = [];
var ra2a = [];
var ra2b = [];
var raxa, raza;
var ra3a = [];
var ra3b = [];
var ra4a = [];
var ra4b = [];
var rax = [];
var ray = [];
var raz = [];

var zw1 = [];
var zw2 = [];
var zw3 = [];
var zw4 = [];
var zw1a = [];
var zw2a = [];
var zw2x = [];
var zw2y = [];
var zw2z = [];
var zw3a = [];
var zw3b = [];
var zw3x = [];
var zw3y = [];
var zw3z = [];
var zw4a = [];
var zw4b = [];
var zwx = [];
var zwy = [];
var zwz = [];

var dec1 = [];
var dec2 = [];
var dec3 = [];
var dec4 = [];
var dec1a = [];
var dec2a = [];
var decxa, decza;
var dec3a = [];
var dec3x = [];
var dec3y = [];
var dec3z = [];
var dec4a = [];
var dec4c = [];
var decx = [];
var decy = [];
var decz = [];

var hs1 = [];
var hs2 = [];
var hs3 = [];
var hs4 = [];
var hs1a = [];
var hs2a = [];
var hs3a = [];
var hs4a = [];

var cli1 = [];
var cli2 = [];
var cli3 = [];
var cli4 = [];
var cli1a = [];
var cli1b = [];
var cli2a = [];
var cli3a = [];
var cli4a = [];
var clix = [];
var cliy = [];
var cliz = [];

var rr1 = [];
var rr2 = [];
var rr3 = [];
var rr4 = [];
var rr1a = [];
var rr2a = [];
var rr3a = [];
var rr4a = [];
var rr0 = [];

var wi1 = [];
var wi2 = [];
var wi3 = [];
var wi4 = [];
var wi1a = [];
var wi2a = [];
var wixa, wiza;
var wi3a = [];
var wi4a = [];
var wi4b = [];
var wix = [];
var wiy = [];
var wiz = [];

var en1 = [];
var en2 = [];
var en3 = [];
var en4 = [];
var en1a = [];
var en1x = [];
var en1y = [];
var en1z = [];
var en2a = [];
var en3a = [];
var en3x = [];
var en3y = [];
var en3z = [];
var en4a = [];
var en4b = [];

var g1 = [];
var g2 = [];
var g3 = [];
var g4 = [];
var g1a = [];
var g2a = [];
var g2x = [];
var g2y = [];
var g2z = [];
var g3a = [];
var g3x = [];
var g3y = [];
var g3z = [];
var g4a = [];
var g4b = [];
var gx = [];
var gy = [];
var gz = [];

var se1 = [];
var se2 = [];
var se3 = [];
var se4 = [];
var se1a = [];
var se1b = [];
var se2a = [];
var se2b = [];
var se3a = [];
var se4a = [];
var se4b = [];
var se4c = [];
var sex = [];
var sey = [];
var sez = [];

var ou1 = [];
var ou2 = [];
var ou3 = [];
var ou4 = [];
var ou1a = [];
var ou2a = [];
var ou3a = [];
var ou4a = [];
var oux = [];
var ouy = [];
var ouz = [];

var rg1 = [];
var rg2 = [];
var rg3 = [];
var rg4 = [];
var rg1a = [];
var rg2a = [];
var rg3a = [];
var rg3x = [];
var rg3y = [];
var rg3z = [];
var rg4a = [];
var rgx = [];
var rgy = [];
var rgz = [];

var co1 = [];
var co2 = [];
var co3 = [];
var co4 = [];
var co1a = [];
var co1x = [];
var co1y = [];
var co1z = [];
var co2a = [];
var co2x = [];
var co2y = [];
var co2z = [];
var co3a = [];
var co3b = [];
var co3x = [];
var co3y = [];
var co3z = [];
var co4a = [];
var cox = [];
var coy = [];
var coz = [];

var dr1 = [];
var dr2 = [];
var dr3 = [];
var dr4 = [];
var dr1a = [];
var dr2a = [];
var dr3a = [];
var dr4a = [];
var drx = [];
var dry = [];
var drz = [];

var hw1 = [];
var hw2 = [];
var hw3 = [];
var hw4 = [];
var hw1a = [];
var hw1x = [];
var hw1y = [];
var hw1z = [];
var hw2a = [];
var hwxa = [];
var hwya = [];
var hwza = [];
var hw2x = [[]];
var hw2y = [[]];
var hw2z = [[]];
var hw3a = [];
var hw4a = [];
var hwx = [];
var hwy = [];
var hwz = [];

var sd1 = [];
var sd2 = [];
var sd3 = [];
var sd4 = [];
var sd1a = [];
var sdxa, sdza;
var sd2a = [];
var sd3a = [];
var sd4a = [];
var sd4x = [];
var sd4y = [];
var sd4z = [];
var sdx = [];
var sdy = [];
var sdz = [];

var gr1 = [];
var gr2 = [];
var gr3 = [];
var gr4 = [];
var gr1a = [];
var gr1b = [];
var gr1c = [];
var gr1x = [];
var gr1y = [];
var gr1z = [];
var gr2a = [];
var gr3a = [];
var gr4a = [];
var grx = [];
var gry = [];
var grz = [];

var hass1 = [];
var hass2 = [];
var hass3 = [];
var hass4 = [];
var hass1a = [];
var hass2a = [];
var hass2b = [];
var hass2x = [], hass2y = [], hass2z = [];
var hass3a = [];
var hass3b = [];
var hass4a = [];
var hass4b = [];

var sk1 = [];
var sk2 = [];
var sk3 = [];
var sk4 = [];
var sk1a = [];
var sk2a = [];
var sk2b = [];
var sk3a = [];
var sk4a = [];

var bl1 = [];
var bl2 = [];
var bl3 = [];
var bl4 = [];
var bl1a = [];
var bl2a = [];
var bl3a = [];
var bl4a = [];
var blx = [], bly = [], blz = [];

var sl1 = [];
var sl2 = [];
var sl3 = [];
var sl4 = [];
var sl1a = [];
var sl2a = [];
var sl3a = [];
var sl3x = [], sl3y = [], sl3z = [];
var sl4a = [];
var slx = [];
var sly = [];
var slz = [];

var ni1 = [];
var ni2 = [];
var ni3 = [];
var ni4 = [];
var ni1a = [];
var ni2a = [];
var ni3a = [];
var ni4a = [];

var ge1 = [];
var ge2 = [];
var ge3 = [];
var ge4 = [];
var ge1a = [];
var ge2a = [];
var ge3a = [];
var ge4a = [];

var dc1 = [];
var dc2 = [];
var dc3 = [];
var dc4 = [];
var dc1a = [];
var dc2a = [];
var dc3a = [];
var dc4a = [];
var dc4b = [];
var dc4c = [];

var mu1 = [];
var mu2 = [];
var mu3 = [];
var mu4 = [];
var mu1a = [];
var mu2a = [];
var mu3a = [];
var mu4a = [];
var mux = [], muy = [], muz = [];

var end1 = [];
var end2 = [];
var end3 = [];
var end4 = [];
var end1a = [];
var endxa, endza;
var end2a = [];
var end3a = [];
var end4a = [];
var endx = [], endy = [], endz = [];

var ta1 = [];
var ta2 = [];
var ta3 = [];
var ta4 = [];
var ta1a = [];
var ta2a = [];
var ta3a = [];
var ta4a = [];
var tax = [], tay = [], taz = [];

var ru1 = [];
var ru2 = [];
var ru3 = [];
var ru4 = [];
var ru1a = [];
var ru1b = [];
var ru2a = [];
var ru3a = [];
var ru3x = [], ru3y = [], ru3z = [];
var ru4a = [];
var rux = [], ruy = [], ruz = [];

var sw1 = [];
var sw2 = [];
var sw3 = [];
var sw4 = [];
var sw1a = [];
var swxa, swza;
var sw2a = [];
var sw3a = [];
var sw4a = [];
var sw4b = [];
var swx = [], swy = [], swz = [];

var asum1 = [];
var asum2 = [];
var asum3 = [];
var asum4 = [];
var asum1a = [];
var asum2a = [];
var asum3a = [];
var asum4a = [];

var am1 = [];
var am2 = [];
var am3 = [];
var am4 = [];
var am1a = [];
var am2a = [];
var am3a = [];
var am3x = [], am3y = [], am3z = [];
var am4a = [];
var am4b = [];
var amx = [], amy = [], amz = [];
var am4x = [], am4y = [], am4z = [];

var pm1 = [];
var pm2 = [];
var pm3 = [];
var pm4 = [];
var pm1a = [];
var pm2a = [];
var pm3a = [];
var pm3b = [];
var pmx = [], pmy = [], pmz = [];
var pm4a = [];
var pm4x = [], pm4y = [], pm4z = [];

var hb1 = [];
var hb2 = [];
var hb3 = [];
var hb4 = [];
var hb1a = [];
var hbxa, hbza;
var hb2a = [];
var hb3a = [];
var hb3b = [];
var hb4a = [];
var hbx = [], hby = [], hbz = [];

var sc1 = [];
var sc2 = [];
var sc3 = [];
var sc4 = [];
var sc1a = [];
var sc1x = [], sc1y = [], sc1z = [];
var sc2a = [];
var sc3a = [];
var sc3x = [], sc3y = [], sc3z = [];
var sc4a = [];
var scx = [];
var scy = [];
var scz = [];

var v1 = [];
var v2 = [];
var v3 = [];
var v4 = [];
var v1a = [];
var v1x = [], v1y = [], v1z = [];
var vxa = [], vza = [];
var v2a = [];
var v3a = [];
var v3b = [];
var v3x = [], v3y = [], v3z = [];
var vsin = [], vcos = [];
var v4a = [];
var v4b = [];
var vx = [], vy = [], vz = [];

var te1 = [];
var te2 = [];
var te3 = [];
var te4 = [];
var te1a = [];
var te2a = [];
var te2x = [], te2y = [], te2z = [];
var te3a = [];
var te4a = [];
var te4b = [];
var tex = [];
var tey = [];
var tez = [];

var ame1 = [];
var ame2 = [];
var ame3 = [];
var ame4 = [];
var ame1a = [];
var ame2a = [];
var ame2x = [], ame2y = [], ame2z = [];
var ame3a = [];
var ame3b = [];
var ame3x = [], ame3y = [], ame3z = [];
var ame4a = [];
var amex = [];
var amey = [];
var amez = [];

var sea1 = [];
var sea2 = [];
var sea3 = [];
var sea4 = [];
var sea1a = [];
var sea2a = [];
var sea3a = [];
var sea3b = [];
var sea3x = [], sea3y = [], sea3z = [];
var sea4a = [];
var sea4b = [];
var seax = [], seay = [], seaz = [];

var an1 = [];
var an2 = [];
var an3 = [];
var an4 = [];
var an1a = [];
var an2a = [];
var an2b = [];
var an2x = [], an2y = [], an2z = [];
var an3a = [];
var an4a = [];
var anx = [], any = [], anz = [];

var wh1 = [];
var wh2 = [];
var wh3 = [];
var wh4 = [];
var wh1a = [];
var wh2a = [];
var wh2x = [], wh2y = [], wh2z = [];
var wh3a = [];
var wh3b = [];
var wh4a = [];
var whx = [], why = [], whz = [];

var mt1 = [];
var mt2 = [];
var mt3 = [];
var mt4 = [];
var mt1a = [];
var mt1b = [];
var mt1x = [], mt1y = [], mt1z = [];
var mt2a = [];
var mt3a = [];
var mt4a = [];
var mt4b = [];
var mt4c = [];
var mtx = [], mty = [], mtz = [];

var wo1 = [];
var wo2 = [];
var wo3 = [];
var wo4 = [];
var wo1a = [];
var wo2a = [];
var wo3a = [];
var wo3b = [];
var wo3x = [], wo3y = [], wo3z = [];
var wo4a = [];
var wo4b = [];
var wo4c = new Array(3);
var wox = [];
var woy = [];
var woz = [];
var wo4d = new Array(3);


var h = {
rrr : undefined, r1 : 0, r2 : 0, r3 : 0, r4 : 0,
rx : null, ry : null, rz : null
};


var anti = false;
var anti2 = 0;
var anti3 = 0;
var anti4 = 0;


var f0 = [];
var w0 = [];
var t0 = 0;
var c0 = 0;
var i0 = 0;
var m0 = 0;
var b0 = null;
var e0 = 0;
var mm0 = 0;
var tn0 = null;
var tr0 = 0;
var h0 = 0;
var n0 = 0;
var cc0 = 0;
var ma0 = null;
var me0 = [];
var hf0 = [];
var her0 = 0;
var j0 = 0;
var ti0 = 0;
var ti0a = [];
var en0 = 0;
var ta0;

var d0 = [];
var hw0 = [];
var g0 = [];

//--0.4.3---
var ofire = 0;
var owater = 0;
var otree = 0;
var ocreeper = 0;
var osoil = 0;
var osummon = 0;
var olight = 0;
var odark = 0;
var oice = 0;


var of1 = 0;
var of2 = 0;
var of2x, of2y, of2z;
var of3 = 0;
var of4 = 0;
var ofx, ofy, ofz;

var ow1 = 0;
var ow1x, ow1y, ow1z;
var ow2 = 0;
var ow2x, ow2y, ow2z;
var ow3 = 0;
var ow3x, ow3y, ow3z;
var ow4 = 0;
var owx, owy, owz;

var ot1 = 0;
var ot2 = 0;
var ot3 = 0;
var ot4 = 0;

var oc1 = 0;
var oc2 = 0;
var oc3 = 0;
var oc4 = 0;
var ocx, ocy, ocz;

var os1 = 0;
var os2 = 0;
var os3 = 0;
var os3x, os3y, os3z;
var os4 = 0;
var osx, osy, osz;

var oss1 = 0;
var oss2 = 0;
var oss3 = 0;
var oss4 = 0;

var ol1 = 0;
var ol2 = 0;
var ol3 = 0;
var ol3x, ol3y, ol3z;
var ol4 = 0;
var olx, oly, olz;

var od1 = 0;
var od1x, od1y, od1z;
var od2 = 0;
var od3 = 0;
var od3x, od3y, od3z;
var od4 = 0;
var odx, ody, odz;

var oi1 = 0;
var oi1x, oi1y, oi1z;
var oi2 = 0;
var oi3 = 0;
var oi4 = 0;
var oix, oiy, oiz;

//--A.I.---
var aitype = null;
var aiOn = false;
var yaw, sin, cos;

var aifire;
var aif2 = 0;
var aifd = false;
var aifd2 = false;
var aift = -1;
var aifx, aify, aifz;

var aiwater;
var aiw2 = 0;
var aiwd = false;
var aiwd2 = false;
var aiwt = -1;
var aiwx, aiwy, aiwz;

var aitree;
var ait2 = 0;
var aitd = false;
var aitd2 = false;
var aitt = -1;
var aitx, aity, aitz;
var aimc = 0;

var aicreeper;
var aic2 = 0;
var aicd = false;
var aicd2 = false;
var aict = -1;
var aicx, aicy, aicz;

var aisoil;
var ais2 = 0;
var aisd = false;
var aisd2 = false;
var aist = -1;
var aisx, aisy, aisz;

var aisummon;
var aiss2 = 0;
var aissd = false;
var aissd2 = false;
var aisst = -1;
var aissx, aissy, aissz;


//-----

var t2hor;
var w2ater;
var k2ill;
var m2isaka;
var e2lsa;
var p2ush;
var f2ire;
var f2aster;
var k2ick;
var t2ree;
var l2ava;
var b2ind;
var s2and;


//fixing error over 0.11.1
Entity.getHealth = function(e){
if(e==null||Entity.getEntityTypeId(e)>=64) return;
else return ScriptManager.nativeGetMobHealth(e);
};
Entity.setHealth = function(e, n, tf){
if(e==null||Entity.getEntityTypeId(e)>=64||n==Entity.getHealth(e)){
return;
}
else{
if(tf&&n>0){
ScriptManager.nativeSetMobHealth(e, n);
return;
}
else{
if(n>60&&ESP.isPlayer(e)) n = 60;
try{
if(maxHealthFix&&ESP.isPlayer(e)){
if(n>20) Entity.setMaxHealth(e, n);
else Entity.setMaxHealth(e, 20);
}
var vers = ModPE.getMinecraftVersion().toString().split(".");
if((Number(vers[1])>=12||vers[0]=="1")&&ESP.isPlayer(e)){
if(n==0) Entity.removeAllEffects(e);
ScriptManager.nativeSetMobHealth(e, Number(n)+6);
ScriptManager.nativeMobAddEffect(e, MobEffect.harm, 10, 0, true, false);
}
else{
ScriptManager.nativeSetMobHealth(e, n);
}
}
catch(e){
ScriptManager.nativeSetMobHealth(e, n);
}
}
}
};
Entity.setFireTicks = function(e, n){
if(e==null) return;
else ScriptManager.nativeSetOnFire(e, n);
};
Entity.getEntityTypeId = function(e){
if(e==null) return;
else return ScriptManager.nativeGetEntityTypeId(e);
};
Entity.getX = function(e){
if(e==null) return;
else return ScriptManager.nativeGetEntityLoc(e, 0);
};
Entity.getY = function(e){
if(e==null) return;
else return ScriptManager.nativeGetEntityLoc(e, 1);
};
Entity.getZ = function(e){
if(e==null) return;
else return ScriptManager.nativeGetEntityLoc(e, 2);
};
Entity.getYaw = function(e){
if(e==null) return;
else return ScriptManager.nativeGetYaw(e);
};
Entity.getPitch = function(e){
if(e==null) return;
else return ScriptManager.nativeGetPitch(e);
};

Player.getDistance = function(p, x, y, z){
var px, py, pz, dist;
px = x-Entity.getX(p);
py = y-Entity.getY(p);
pz = z-Entity.getZ(p);
dist = Math.sqrt(Math.pow(px, 2)+Math.pow(py, 2)+Math.pow(pz, 2));
return dist;
};
setTile = function(x, y, z, b, bd){
if(x==null||x==undefined||y==null||y==undefined||z==null||z==undefined||b==null||b==undefined) return;
if(bd==null) ScriptManager.nativeSetTile(x, y, z, b, 0);
else ScriptManager.nativeSetTile(x, y, z, b, bd);
}
getTile = function(x, y, z){
return ScriptManager.nativeGetTile(x, y, z);
}
Level.getData = function(x, y, z){
return ScriptManager.nativeGetData(x, y, z);
}

var espCache1 = "";
var espCache2 = "";
var espCache3 = "";
var espCache4 = "";
var espCache5 = "";
var espCache6 = "";
var espCache7 = "";
var espCache8 = "";
var espCache9 = "";
var espCache10 = "";
var clientMode = "";
var underCache = null;


//Esper Function
const ESP = {
send : function(esp){
if(mpk){
teleport(esp, 151, 22, 18);
}
else if(mp3){
if(mp4){
teleport(esp, 21, 52, 40);
}
else{
if(!mp) teleport(esp, 116, 52, 25);
else if(mp) teleport(esp, 24, 52, 23);
}
}
else{
teleport(esp, Entity.getX(ad), Entity.getY(ad)+1, Entity.getZ(ad));
}
},
checkSkill : function(n){
return Level.getSignText(espch[0], espch[1]+1, espch[2], n);
},
sendHuman : function(name){
for each(var e in Entity.getAll()){
if(Player.getName(e)==name){
ESP.send(e);
ESP.sbm(Player.getName(e)+" was sent");
}
}
preventDefault();
},
kill : function(e){
Entity.setHealth(e, -10);
},
heal : function(e){
Entity.setHealth(e, 30);
},
setHealth : function(esp, n){
Entity.setHealth(esp, n);
},
mapCheck : function(t){
var map = Level.getWorldName().toString().split(" ");
if(map[1]=="Battle"&&map[2]!=null){
mp = true;
}
else{
mp = false;
}
if(map[0]=="§bThe"){
auto = true;
mp3 = true;
}
else{
auto = false;
mp3 = false;
}
if(Level.getWorldName()==t){
mp2 = true;
}
else{
mp2 = false;
}
if(Level.getWorldName()=="§bThe Battle71+"){
mp2 = true;
mp4 = true;
}
if(Level.getWorldName()=="§bThe Kaian"||Level.getWorldName()=="§bThe 능력찾기 쉬운 맵"){
town = false;
mpk = true;
}
else if(Level.getWorldName()=="§aThe Battle R"){
mpr = true;
auto = true;
}
},
reset : function(){
fire = [];
water = [];
tree = [];
creeper = [];
soil = [];
summon = [];
light = [];
dark = [];
ice = [];
sand = [];
blood = [];
air = [];
thunder = [];
elsa = [];
titan = [];
bind = [];
meca = [];
tnt = [];
trap = [];
heal = [];
nether = [];
cloud = [];
assassin = [];
arrow = [];
mage = [];
defense = [];
poison = [];
melt = [];
hfreeze = [];
builder = [];
soldier = [];
assasult = [];
burst = [];
warrior = [];
ore = [];
rich = [];
tp = [];
space = [];
sattack = [];
force = [];
rein = [];
magnet = [];
steve = [];
hero = [];
hermit = [];
clay = [];
kirito = [];
jungle = [];
kanade = [];
time = [];
snipe = [];
zombie = [];
necro = [];
asuna = [];
holy = [];
solar = [];
lunar = [];
has = [];
random = [];
zwei = [];
deco = [];
hsum = [];
climate = [];
raid = [];
wind = [];
energy = [];
geno = [];
server = [];
out = [];
rgun = [];
copy = [];
dragon = [];
hawk = [];
solid = [];
gravity = [];
hass = [];
sikill = [];
black = [];
slash = [];
night = [];
gem = [];
dra = [];
mush = [];
ender = [];
taiga = [];
ruin = [];
swamp = [];
asum = [];
amage = [];
puella = [];
hbuild = [];
scalar = [];
vector = [];
tensor = [];
ameca = [];
seal = [];
angel = [];
white = [];
mental = [];
world = [];
for(var n=0;n<100;n++)
SB.removeUserData(n, -1);
he.elect = null;
he.shade = null;
he.torn = null;
he.buf = null;
he.x = null;
he.bind = null;
he.thor = null;
he.joker = null;
he.chat = null;
he.dark = null;
for(var n=0;n<15;n++){
u[n].p = null;
}
l.fire = null;
l.ice = null;
l.d = null;
l.alex = null;
l.t = null;
},
antiLack : function(tick){
anti = true;
anti2 = tick;
},
getUser : function(){
return Player.getEntity();
},
showDialog : function(title, tf){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
if(tf) var dialog = new AlertDialog.Builder(ctx, holoDark);
else var dialog = new AlertDialog.Builder(ctx);
var layout = new LinearLayout(ctx);
layout.setOrientation(1);
var text = new TextView(ctx);
text.setText("무단 공유는 허용하나, 무단 수정 및 자신이 만들었다고 주장하는 행위는 금지하며, 그냥 또는 학습을 위해 열어보는 것은 허용합니다.\n사용법은 명령어 \"/help\"또는 \"/도움말\"을 치시면 나옵니다.");
text.setTextSize(18);
var txt = new TextView(ctx);
if(mp2) txt.setText("     자동수복 활성화");
else txt.setText("     자동수복 활성화, 스크립트와 맵의 버전이 다릅니다.");
txt.setTextSize(15);
var maker = new TextView(ctx);
maker.setText("© 2014-2017 Dark Tornado   \nhttp://blog.naver.com/dt3141592   ");
maker.setGravity(Gravity.RIGHT);
maker.setTextSize(15);
layout.addView(text);
layout.addView(txt);
layout.addView(maker);
var pad = dip2px(ctx, 5);
layout.setPadding(pad, pad, pad, pad);
var scroll = new ScrollView(ctx);
scroll.addView(layout);
dialog.setTitle(title);
dialog.setView(scroll);
dialog.setNegativeButton("확인",null);
dialog.show();
}
catch(e){
if(tf){
ESP.showDialog(title, false);
}
else{
ESP.sbm(title+" by Dark Tornado");
if(mp2) ESP.toast("자동수복 활성화");
else ESP.toast("자동수복 활성화, 스크립트와 맵의 버전이 다릅니다.");
}
}
}
}));
},
sbm : function(msg, tf){
if(tf&&mcpev){
var pe= Player.getEntity();
var pn = Player.getName(pe);
Entity.setNameTag(pe, "");
if(msg.search("\n")==-1){
ScriptManager.nativeSendChat("<S.B.> "+msg);
}
else{
var msg2 = msg.split("\n");
ScriptManager.nativeSendChat("<S.B.> "+msg2[0]);
for(var n=1;n<msg2.length;n++)
ScriptManager.nativeSendChat("<S.B.> "+msg2[n]);
}
Entity.setNameTag(pe, pn);
}
else{
clientMessage("<S.B.> "+msg);
}
},
toast : function(msg){
ctx.runOnUiThread(new java.lang.Runnable({
run : function(){
var toast = new android.widget.Toast.makeText(ctx, "<S.B.> "+msg, android.widget.Toast.LENGTH_LONG);
toast.show();
}
}));
},
timeStop : function(tf, n){
if(tf){
for each(var e in Entity.getAll()){
var type = Entity.getEntityTypeId(e);
if(e!=time[n]&&((type>=32&&type<62)||type==14||type==15||ESP.isPlayer(e))){
ti4b.push(e);
tix.push(Entity.getX(e));
if(!mcpev3){
if(ESP.isPlayer(e))
tiy.push(Math.floor(Entity.getY(e)-2)+1.5);
else
tiy.push(Math.floor(Entity.getY(e))-0.25);
}
else{
tiy.push(Entity.getY(e));
}
tiz.push(Entity.getZ(e));
ti4c++;
}
if((type>0&&type<14)||(type>15&&type<23)){
Entity.addEffect(e, MobEffect.movementSlowdown, 450, 9, true, false);
}
}
for each(var ent in ti4b){
if(getTile(Entity.getX(ent), Entity.getY(ent)-2, Entity.getZ(ent))==0&&ESP.isPlayer(ent))
setTile(Entity.getX(ent), Entity.getY(ent)-2, Entity.getZ(ent), 95);
}
}
else{
for each(var ent in ti4b){
if(getTile(Entity.getX(ent), Entity.getY(ent)-2, Entity.getZ(ent))==95&&ESP.isPlayer(ent))
setTile(Entity.getX(ent), Entity.getY(ent)-2, Entity.getZ(ent), 0);
}
ti4b = [];
tix = [];
tiy = [];
tiy = [];
ti4c = 0;
}
},
removeMob : function(){
for each(var e in Entity.getAll()){
if(Entity.getEntityTypeId(e)>=23&&Entity.getEntityTypeId(e)<40){
Entity.remove(e);
}
}
},
getSniperPoint : function(n){
px = Entity.getX(snipe[n]);
py = Entity.getY(snipe[n]);
pz = Entity.getZ(snipe[n]);
yaw = Math.floor(Entity.getYaw(snipe[n]));
pitch = Math.floor(Entity.getPitch(snipe[n]));
sin = -Math.sin(yaw/180*Math.PI);
cos = Math.cos(yaw/180*Math.PI);
tan = -Math.sin(pitch/180*Math.PI);
pcos = Math.cos(pitch/180*Math.PI);
if(Cool.isFalse(sn4b[n])){
for(var gun=5;gun<51;gun++){
if([0, 8, 9, 51].indexOf(getTile(px+gun*sin*pcos, py+gun*tan, pz+gun*cos*pcos))==-1){
return [Math.floor(px+gun*sin*pcos), Math.floor(py+gun*tan), Math.floor(pz+gun*cos*pcos)];
break;
}
}
}
else{
for(var gun=5;gun<101;gun++){
if([0, 8, 9, 51].indexOf(getTile(px+gun*sin*pcos, py+gun*tan, pz+gun*cos*pcos))==-1){
return [Math.floor(px+gun*sin*pcos), Math.floor(py+gun*tan), Math.floor(pz+gun*cos*pcos)];
break;
}
}
}
return [snx[n], sny[n], snz[n]];
},
healNG : function(n){
new Thread({
run : function(){
try{
for(var xx=Entity.getX(tree[n])-2;xx<Entity.getX(tree[n])+3;xx++){
for(var yy=Entity.getY(tree[n])-2;yy<Entity.getY(tree[n])+2;yy++){
for(var zz=Entity.getZ(tree[n])-2;zz<Entity.getZ(tree[n])+3;zz++){
if((getTile(xx, yy, zz)==17||getTile(xx, yy, zz)==18)&&Entity.getHealth(tree[n])<=25){
ESP.setHealth(tree[n], Entity.getHealth(tree[n])+2);
return;
}
}}}
}
catch(e){
//null
}
}
}).start();
},
healFreezer : function(n){
new Thread({
run : function(){
try{
for(var xx=Entity.getX(ice[n])-2;xx<Entity.getX(ice[n])+3;xx++){
for(var yy=Entity.getY(ice[n])-2;yy<Entity.getY(ice[n])+2;yy++){
for(var zz=Entity.getZ(ice[n])-2;zz<Entity.getZ(ice[n])+3;zz++){
if((getTile(xx, yy, zz)==79||getTile(xx, yy, zz)==80||getTile(xx, yy, zz)==78)&&Entity.getHealth(ice[n])<=25){
ESP.setHealth(ice[n], Entity.getHealth(ice[n])+2);
return;
}
}}}
}
catch(e){
//null
}
}
}).start();
},
healHermit : function(n){
new Thread({
run : function(){
try{
for(var xx=Entity.getX(hermit[n])-2;xx<Entity.getX(hermit[n])+3;xx++){
for(var yy=Entity.getY(hermit[n])-2;yy<Entity.getY(hermit[n])+2;yy++){
for(var zz=Entity.getZ(hermit[n])-2;zz<Entity.getZ(hermit[n])+3;zz++){
if((getTile(xx, yy, zz)==17||getTile(xx, yy, zz)==18)&&Entity.getHealth(hermit[n])<=25){
ESP.setHealth(hermit[n], Entity.getHealth(hermit[n])+2);
return;
}
}}}
}
catch(e){
//null
}
}
}).start();
},
healJF : function(n){
new Thread({
run : function(){
try{
for(var xx=Entity.getX(jungle[n])-2;xx<Entity.getX(jungle[n])+3;xx++){
for(var yy=Entity.getY(jungle[n])-2;yy<Entity.getY(jungle[n])+2;yy++){
for(var zz=Entity.getZ(jungle[n])-2;zz<Entity.getZ(jungle[n])+3;zz++){
if((getTile(xx, yy, zz)==17||getTile(xx, yy, zz)==18)&&Entity.getHealth(jungle[n])<=25){
ESP.setHealth(jungle[n], Entity.getHealth(jungle[n])+1);
return;
}
}}}
}
catch(e){
//null
}
}
}).start();
},
findHuman : function(name){
for each(var e in Entity.getAll()){
if(Player.getName(e)==name){
return e;
}
}
},
zombieFireAttack : function(n){
px = Math.floor(Entity.getX(z2b[n]));
py = Entity.getY(z2b[n])-1;
pz = Math.floor(Entity.getZ(z2b[n]));
yaw = Math.floor(Entity.getYaw(z2b[n]));
sin = -Math.sin(yaw/180*Math.PI);
cos = Math.cos(yaw/180*Math.PI);
var z2c = Math.floor(Math.random()*2);
if(z2c==0){
for(var xx=px+5*sin-1;xx<px+5*sin+2;xx++)
for(var zz=pz+5*cos-1;zz<pz+5*cos+2;zz++)
setTile(xx, py+1, zz, 51);
}
if(z2c==1){
for(var gun=3;gun<20;gun++)
setTile(px+gun*sin, py+1, pz+gun*cos, 51);
}
},
zombieWaterAttack : function(n){
px = Math.floor(Entity.getX(z3b[n]));
py = Entity.getY(z3b[n])-1;
pz = Math.floor(Entity.getZ(z3b[n]));
yaw = Math.floor(Entity.getYaw(z3b[n]));
sin = -Math.sin(yaw/180*Math.PI);
cos = Math.cos(yaw/180*Math.PI);
var z3c = Math.floor(Math.random()*2);
if(z3c==0){
setTile(px+5*sin, py+1, pz+5*cos, 8);
z3x[n] = px+5*sin;
z3y[n] = py+1;
z3z[n] = pz+5*cos;
}
if(z3c==1){
for(var yy=py+1;yy<py+4;yy++)
setTile(px+6*sin, yy, pz+6*cos, 79);
}
},
necroAttack : function(n){
px = Math.floor(Entity.getX(ne4b[n]));
py = Entity.getY(ne4b[n])-1;
pz = Math.floor(Entity.getZ(ne4b[n]));
yaw = Math.floor(Entity.getYaw(ne4b[n]));
sin = -Math.sin(yaw/180*Math.PI);
cos = Math.cos(yaw/180*Math.PI);
var ne4d = Math.floor(Math.random()*5);
if(ne4d==0){
for(var xx=px+5*sin-1;xx<px+5*sin+2;xx++)
for(var zz=pz+5*cos-1;zz<pz+5*cos+2;zz++)
setTile(xx+1, py+1, zz, 51);
}
if(ne4d==1){
for(var gun=3;gun<20;gun++)
explode(px+gun*sin, py+2, pz+gun*cos, 1.4);
}
if(ne4d==2){
for(var gun=5;gun<15;gun++)
setTile(px+gun*sin, py+1, pz+gun*cos, 30);
}
if(ne4d==3){
for(var xx=px+5*sin-1;xx<px+5*sin+2;xx++)
for(var yy=py-1;yy<py+1;yy++)
for(var zz=pz+5*cos-1;zz<pz+5*cos+2;zz++)
setTile(xx, yy, zz-2, 0);
}
if(ne4d==4){
ESP.antiLack(5);
explode(px+5*sin, py+1, pz+5*cos, 3);
}
},
kiritoHyperPlus : function(s, ep, r, n){
var px, py, pz;
for each(var e in Entity.getAll()){
px = Math.abs(Entity.getX(s)-Entity.getX(e));
py = Math.abs((Entity.getY(s)-1)-Entity.getY(e));
pz = Math.abs(Entity.getZ(s)-Entity.getZ(e));
if(px<=r&&py<=r&&pz<=r&&!(e==s||e==ep)&&Entity.getEntityTypeId(e)<64)
Entity.setHealth(e, Entity.getHealth(e)-n);
}
},
solarHyperPlus : function(s, r){
var px, py, pz;
for each(var e in Entity.getAll()){
px = Math.abs(Entity.getX(s)-Entity.getX(e));
py = Math.abs((Entity.getY(s)+1)-Entity.getY(e));
pz = Math.abs(Entity.getZ(s)-Entity.getZ(e));
if(px<=r&&py<=r&&pz<=r&&s!=e&&Entity.getEntityTypeId(e)<64){
Entity.setHealth(e, Entity.getHealth(e)-15);
Entity.setFireTicks(e, 20);
}
}
},
lunarHyperPlus : function(s, r){
var px, py, pz;
for each(var e in Entity.getAll()){
px = Math.abs(Entity.getX(s)-Entity.getX(e));
py = Math.abs((Entity.getY(s)+1)-Entity.getY(e));
pz = Math.abs(Entity.getZ(s)-Entity.getZ(e));
if(px<=r&&py<=r&&pz<=r&&s!=e&&Entity.getEntityTypeId(e)<64){
Entity.setHealth(e, Entity.getHealth(e)-17);
if(ESP.isPlayer(e)) setTile(Entity.getX(e), Entity.getY(e)-1, Entity.getZ(e), 30);
else setTile(Entity.getX(e), Entity.getY(e), Entity.getZ(e), 30);
}
}
},
addEMButton : function(){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
btn = new PopupWindow();
var layout = new android.widget.RelativeLayout(ctx);
var button = new Button(ctx);
button.setText("EM");
button.setOnClickListener(new View.OnClickListener({
onClick: function(v){
if(multi==false) openESPManager();
else if(multi==true) openSemiESPManager();
}
}));
button.setOnLongClickListener(new View.OnLongClickListener({
onLongClick: function(v){
ESP.callFunc("rebootEspManager", []);
return true;
}
}));
if(emcolor==0){
button.setBackgroundColor(Color.argb(70, 0, 0, 0));
}
else if(emcolor==1){
button.setBackgroundColor(Color.argb(70, 255, 255, 255));
}
else if(emcolor==2){
button.setBackgroundColor(Color.argb(0, 0, 0, 0));
}
layout.addView(button);
btn.setContentView(layout);
btn.setWidth(dip2px(ctx, 48));
btn.setHeight(dip2px(ctx, 48));
btn.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
if(locate==1) btn.showAtLocation(ctx.getWindow().getDecorView(), Gravity.LEFT|Gravity.TOP, 150, 70);
else if(locate==2) btn.showAtLocation(ctx.getWindow().getDecorView(), Gravity.CENTER|Gravity.TOP, 2, 0);
else if(locate==3) btn.showAtLocation(ctx.getWindow().getDecorView(), Gravity.RIGHT|Gravity.TOP, 2, 110);
else if(locate==4) btn.showAtLocation(ctx.getWindow().getDecorView(), Gravity.LEFT|Gravity.CENTER, 2, 0);
else if(locate==5) btn.showAtLocation(ctx.getWindow().getDecorView(), Gravity.CENTER, 0, 0);
else if(locate==6) btn.showAtLocation(ctx.getWindow().getDecorView(), Gravity.RIGHT|Gravity.CENTER, 2, 0);
else if(locate==8) btn.showAtLocation(ctx.getWindow().getDecorView(), Gravity.CENTER|Gravity.BOTTOM, 2, 0);
else if(locate==9) btn.showAtLocation(ctx.getWindow().getDecorView(), Gravity.RIGHT|Gravity.BOTTOM, 2, 2);
else if(locate==10) btn.showAtLocation(ctx.getWindow().getDecorView(), Gravity.LEFT|Gravity.TOP, ESP.read("btnX"), ESP.read("btnY"));
else btn.showAtLocation(ctx.getWindow().getDecorView(), Gravity.LEFT|Gravity.BOTTOM, 2, 2);
}
catch(e){
ESP.toast("이 디바이스에서는 ESP Maganer를 사용할 수 없습니다.");
}
}
}));
},
random : function(n){
return Math.floor(Math.random()*n);
},
zweiHyperPlus : function(s, r, n){
var px, py, pz;
zw4b[n] = [];
for each(var e in Entity.getAll()){
px = Math.abs(Entity.getX(s)-Entity.getX(e));
py = Math.abs(Entity.getY(s)-Entity.getY(e));
pz = Math.abs(Entity.getZ(s)-Entity.getZ(e));
if(px<=r&&py<=r&&pz<=r&&s!=e&&Entity.getEntityTypeId(e)<64){
Entity.setHealth(e, Entity.getHealth(e)-3);
zwx[n] = Entity.getX(e);
if(ESP.isPlayer(e)) zwy[n] = Entity.getY(e)-2;
else zwy[n] = Entity.getY(e)-1;
zwz[n] = Entity.getZ(e);
setTile(zwx[n]+1, zwy[n]+2, zwz[n]+1, 79);
setTile(zwx[n]+1, zwy[n]+2, zwz[n]-1, 79);
setTile(zwx[n]-1, zwy[n]+2, zwz[n]+1, 79);
setTile(zwx[n]-1, zwy[n]+2, zwz[n]-1, 79);
zw4b[n].push([zwx[n], zwy[n], zwz[n]]);
}
}
},
skillInfo : function(title, msg){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var dialog = new AlertDialog.Builder(ctx, holoDark);
dialog.setTitle(title);
dialog.setMessage(msg);
dialog.setNegativeButton("닫기",null);
dialog.show();
}
catch(e){
ESP.sbm(e+", "+e.lineNumber);
}
}
}));
},
infoDialog : function(title, msg, maker){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var layout = new LinearLayout(ctx);
layout.setOrientation(1);
var text = new TextView(ctx);
text.setText(msg);
text.setTextSize(18);
text.setTextColor(Color.WHITE);
var txt = new TextView(ctx);
txt.setText("© "+maker);
txt.setTextSize(15);
txt.setTextColor(Color.WHITE);
txt.setGravity(Gravity.CENTER);
layout.addView(text);
layout.addView(txt);
var dialog = makeDialog(title, layout, "확인", null);
dialog.show();
}
catch(e){
ESP.sbm(e+", "+e.lineNumber);
}
}
}));
},
energyHyperPlus : function(s, r, n){
var px, py, pz;
for each(var e in Entity.getAll()){
px = Math.abs(Entity.getX(s)-Entity.getX(e));
py = Math.abs((Entity.getY(s)+1)-Entity.getY(e));
pz = Math.abs(Entity.getZ(s)-Entity.getZ(e));
if(px<=r&&py<=r&&pz<=r&&s!=e&&Entity.getEntityTypeId(e)<64){
explode(Entity.getX(e), Entity.getY(e)+0.3, Entity.getZ(e), 1.5);
en4b[n].push(e);
}
}
},
aiSbm : function(msg){
clientMessage("<S.B.-a.i.> "+msg);
},
isPlayer : function(e){
if(Entity.getEntityTypeId(ESP.getUser())==Entity.getEntityTypeId(e)){
return true;
}
else{
return false;
}
},
healTA : function(){
new Thread({
run : function(){
try{
for(var xx=Entity.getX(taiga)-2;xx<Entity.getX(taiga)+3;xx++){
for(var yy=Entity.getY(taiga)-2;yy<Entity.getY(taiga)+2;yy++){
for(var zz=Entity.getZ(taiga)-2;zz<Entity.getZ(taiga)+3;zz++){
if((getTile(xx, yy, zz)==17||getTile(xx, yy, zz)==18)&&Entity.getHealth(taiga)<=25){
ESP.setHealth(taiga, Entity.getHealth(taiga)+1);
return;
}
}}}
}
catch(e){
//null
}
}
}).start();
},
setBlock : function(x, y, z, s){
var r = ESP.random(5)+1;
if(s==0) setTile(x, y-1, z, r);
if(s==1) setTile(x, y+1, z, r);
if(s==2) setTile(x, y, z-1, r);
if(s==3) setTile(x, y, z+1, r);
if(s==4) setTile(x-1, y, z, r);
if(s==5) setTile(x+1, y, z, r);
},
getDisBetwPoints : function(x, y, z, n){
var px, py, pz, dis;
px = x-wox[n][1];
py = y-woy[n][1];
pz = z-woz[n][1];
dis = Math.sqrt(Math.pow(px, 2)+Math.pow(py, 2)+Math.pow(pz, 2));
return dis;
},
getNearEntity : function(s, r){
var px, py, pz;
var ee = [];
var dis = [];
var rr = Math.pow(r, 2);
for each(var e in Entity.getAll()){
px = Math.pow(Entity.getX(s)-Entity.getX(e), 2);
py = Math.pow(Entity.getY(s)-Entity.getY(e), 2);
pz = Math.pow(Entity.getZ(s)-Entity.getZ(e), 2);
if(px<=rr&&py<=rr&&pz<=rr&&s!=e&&Entity.getEntityTypeId(e)<64){
ee.push(e);
dis.push(px+py+pz);
}
}
if(ee[0]==null){
return -1;
}
else{
var min = dis[0];
var e2 = ee[0];
for(var n=0;n<ee.length;n++){
if(min>dis[n]){
min = dis[n];
e2 = ee[n];
}
}
return e2;
}
},
save : function(name, msg){
try{
var file = new java.io.File(sdcard+"/darkTornado/ESP-SB/"+name+".txt");
var fos = new java.io.FileOutputStream(file);
var str = new java.lang.String(msg);
fos.write(str.getBytes());
fos.close();
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
},
read : function(name){
try{
var file = new java.io.File(sdcard+"/darkTornado/ESP-SB/"+name+".txt");
if(!(file.exists())) return "";
var fis = new java.io.FileInputStream(file);
var isr = new java.io.InputStreamReader(fis);
var br = new java.io.BufferedReader(isr);
var str = br.readLine();
var line = "";
while((line = br.readLine()) != null){
str += "\n" + line;
}
fis.close();
isr.close();
br.close();
return str;
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
},
makeDir : function(){
try{
var forder = new java.io.File(sdcard+"/darkTornado/");
var forder2 = new java.io.File(sdcard+"/darkTornado/ESP-SB/");
var forder3 = new java.io.File(sdcard+"/darkTornado/ESP-SB/easterEgg/");
forder.mkdir();
forder2.mkdir();
forder3.mkdir();
}
catch(e){
ESP.toast(e+", "+e.lineNumber);
}
},
download : function(url, name, hide){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
if(hide==1) var file = new java.io.File(sdcard+"/darkTornado/ESP-SB/"+name);
else var file = new java.io.File(sdcard+"/darkTornado/ESP-SB/easterEgg/"+name);
if(file.exists()) return;
if(checkInternet()){
var uri = new android.net.Uri.parse(url);
var dm = new android.app.DownloadManager.Request(uri);
dm.setTitle("초능력자 대전 추가 파일 다운로드");
dm.setDescription("추가 파일 다운로드 중...");
if(hide==1) dm.setDestinationInExternalPublicDir("darkTornado/ESP-SB", name);
else dm.setDestinationInExternalPublicDir("darkTornado/ESP-SB/easterEgg", name);
dm.setNotificationVisibility(hide);
ctx.getSystemService(android.content.Context.DOWNLOAD_SERVICE).enqueue(dm);
}
else{
ESP.toast("인터넷에 연결되어있지 않습니다.");
}
}
catch(e){
ESP.toast("다운로드 실패. 오류 : "+e);
}
}
}));
},
isLetter : function(){
if(getCarriedItem()==339){
try{
if(Player.getItemCustomName(Player.getSelectedSlotId())=="드레이스의 편지") return true;
else return false;
}
catch(e){
return false;
clientMessage(e+", "+e.lineNumber);
}
}
},
spawnWhiteLady : function(x, y, z){
var wl = Level.spawnMob(x, y, z, 15, "mob/whiteLady.png");
Entity.setRenderType(wl, whiteRender.renderType);
Entity.setHealth(wl, 100);
Entity.setMaxHealth(wl, 100);
Entity.setNameTag(wl, "White Lady");
},
checkFiles : function(){
var files = [];
var names = ["ESP.mp3", "We Must Fight.mp3", "Dark Battle.mp3", "playerManager.txt", "easterEgg/Putting to Death.mp3", "easterEgg/R.mp3", "easterEgg/Under this World.mp3", "easterEgg/The End.mp3", "easterEgg/Time Stop.mp3", "easterEgg/ESI.mp3", "easterEgg/Lost.mp3", "easterEgg/In the Forest.mp3", "espData.txt", "espData_2.txt", "espData_3.txt", "espData_4.txt", "espData_5.txt", "espData_6.txt", "espData_7.txt", "espData_8.txt", "espData_9.txt", "etcData.txt", "sb2Data.txt", "sb2Data_2.txt", "mapData.txt", "easterEgg/Force of Fire.mp3", "easterEgg/Sparkling Water.mp3", "easterEgg/The Forest.mp3", "easterEgg/Power of Earth.mp3", "easterEgg/Flying.mp3", "easterEgg/Sad Story From Under World.mp3", "clientMode.txt", "streetLightData.txt"];
for(var n in names){
files[n] = new java.io.File(sdcard+"/darkTornado/ESP-SB/"+names[n]);
if(!files[n].exists()){
ESP.showDownload();
break;
}
}
},
showDownload : function(){
ctx.runOnUiThread(new java.lang.Runnable({
run : function(){
try{
var dialog = new AlertDialog.Builder(ctx, holoDark);
dialog.setTitle("추가 파일 다운로드");
dialog.setMessage("스크립트의 용량 감소를 위해 스크립트의 일부가 추가 파일로 분리되어 있고, 배경음악 등으로 사용할 음악 파일들의 다운로드가 필요합니다. 지금 다운로드 하시겠습니까?\n다운로드 시, 데이터 요금이 부과될 수 있으니, 와이파이를 통한 다운로드를 권장합니다.\n총 파일 용량 약 54MB.");
dialog.setNegativeButton("아니요", null);
dialog.setPositiveButton("네", new DialogInterface.OnClickListener({
onClick: function(v){
ESP.toast("추가 파일 다운로드를 시작합니다.");
new Thread({
run : function(){
ESP.downloadMusics();
ESP.downloadFiles();
}
}).start();
}
}));
dialog.show();
}
catch(e){
ESP.toast(e+", "+e.lineNumber);
}
}
}));
},
downloadMusics : function(){
var names = ["ESP", "We Must Fight", "Dark Battle", "Putting to Death", "R", "Under this World", "The End", "Time Stop", "ESI", "Lost", "In the Forest", "Force of Fire", "Sparkling Water", "The Forest", "Power of Earth", "Flying", "Sad Story From Under World"];
var hides = [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
for(var n=0;n<names.length;n++)
ESP.download("https://raw.githubusercontent.com/DarkTornado/ESP-SB/master/"+names[n].replace(/ /g, "%20")+".mp3", names[n]+".mp3", hides[n]);
},
downloadFiles : function(){
var names = ["playerManager", "espData", "espData_2", "espData_3", "espData_4", "espData_5", "espData_6", "espData_7", "espData_8", "espData_9", "etcData", "sb2Data", "sb2Data_2", "mapData", "clientMode", "streetLightData"];
for(var n=0;n<names.length;n++)
ESP.download("https://raw.githubusercontent.com/DarkTornado/ESP-SB/master/"+names[n]+".txt", names[n]+".txt", 1);
},
isBook : function(){
if(getCarriedItem()==403){
try{
if(Player.getItemCustomName(Player.getSelectedSlotId())=="Dark Tornado jr.'s Book") return true;
else return false;
}
catch(e){
return false;
clientMessage(e+", "+e.lineNumber);
}
}
},
callFunc : function(func, para){
ScriptManager.callScriptMethod(func, para);
},
makeBind : function(x, y, z, b, bd){
setTile(x+1, y, z+1, b, bd);
setTile(x+1, y, z, b, bd);
setTile(x+1, y, z-1, b, bd);
setTile(x, y, z+1, b, bd);
setTile(x, y, z, b, bd)
setTile(x, y, z-1, b, bd);
setTile(x-1, y, z+1, b, bd);
setTile(x-1, y, z, b, bd);
setTile(x-1, y, z-1, b, bd);
setTile(x+2, y+2, z+1, b, bd);
setTile(x+2, y+2, z, b, bd);
setTile(x+2, y+2, z-1, b, bd);
setTile(x-2, y+2, z+1, b, bd);
setTile(x-2, y+2, z, b, bd);
setTile(x-2, y+2, z-1, b, bd);
setTile(x+1, y+2, z+2, b, bd);
setTile(x, y+2, z+2, b, bd);
setTile(x-1, y+2, z+2, b, bd);
setTile(x+1, y+2, z-2, b, bd);
setTile(x, y+2, z-2, b, bd);
setTile(x-1, y+2, z-2, b, bd);
},
makeSwampTree : function(x, y, z){
for(var xx=x-1;xx<x+2;xx++)
for(var yy=y+4;yy<y+8;yy++)
for(var zz=z-1;zz<z+2;zz++)
setTile(xx, yy, zz, 18)
for(var yy=y+1;yy<y+7;yy++)
setTile(x, yy, z, 17);
for(var zz=z-2;zz<z+4;zz++){
setTile(x-3, y+4, zz, 18);
setTile(x-3, y+5, zz, 18);
setTile(x-2, y+4, zz, 18);
setTile(x-2, y+5, zz, 18);
}
setTile(x-2, y+5, z-3, 18);
setTile(x-2, y+6, z-1, 18);
setTile(x-2, y+6, z, 18);
setTile(x-2, y+6, z+1, 18);
setTile(x-2, y+6, z+2, 18);
setTile(x-2, y+7, z-1, 18);
setTile(x-2, y+7, z, 18);
setTile(x-2, y+7, z+1, 18);
setTile(x-1, y+4, z-3, 18);
setTile(x-1, y+4, z-2, 18);
setTile(x-1, y+4, z+2, 18);
setTile(x-1, y+4, z+3, 18);
setTile(x-1, y+5, z-3, 18);
setTile(x-1, y+5, z-2, 18);
setTile(x-1, y+5, z+2, 18);
setTile(x-1, y+5, z+3, 18);
setTile(x-1, y+6, z-2, 18);
setTile(x-1, y+6, z+2, 18);
setTile(x-1, y+7, z-2, 18);
setTile(x-1, y+7, z+2, 18);
setTile(x, y+4, z-3, 18);
setTile(x, y+4, z-2, 18);
setTile(x, y+4, z+2, 18);
setTile(x, y+4, z+3, 18);
setTile(x, y+5, z-3, 18);
setTile(x, y+5, z-2, 18);
setTile(x, y+5, z+2, 18);
setTile(x, y+5, z+3, 18);
setTile(x, y+6, z-2, 18);
setTile(x, y+6, z+2, 18);
setTile(x, y+7, z-2, 18);
setTile(x, y+7, z+2, 18);
setTile(x+1, y+4, z-3, 18);
setTile(x+1, y+4, z-2, 18);
setTile(x+1, y+4, z+2, 18);
setTile(x+1, y+4, z+3, 18);
setTile(x+1, y+5, z-3, 18);
setTile(x+1, y+5, z-2, 18);
setTile(x+1, y+5, z+2, 18);
setTile(x+1, y+5, z+3, 18);
setTile(x+1, y+6, z-2, 18);
setTile(x+1, y+6, z+2, 18);
setTile(x+1, y+7, z-2, 18);
setTile(x+1, y+7, z+2, 18);
setTile(x+2, y+4, z-3, 18);
setTile(x+2, y+4, z-2, 18);
setTile(x+2, y+4, z-1, 18);
setTile(x+2, y+4, z, 18);
setTile(x+2, y+4, z+1, 18);
setTile(x+2, y+4, z+2, 18);
setTile(x+2, y+4, z+3, 18);
setTile(x+2, y+5, z-3, 18);
setTile(x+2, y+5, z-2, 18);
setTile(x+2, y+5, z-1, 18);
setTile(x+2, y+5, z, 18);
setTile(x+2, y+5, z+1, 18);
setTile(x+2, y+5, z+2, 18);
setTile(x+2, y+5, z+3, 18);
setTile(x+2, y+6, z-2, 18);
setTile(x+2, y+6, z-1, 18);
setTile(x+2, y+6, z, 18);
setTile(x+2, y+6, z+1, 18);
setTile(x+2, y+6, z+2, 18);
setTile(x+2, y+7, z-1, 18);
setTile(x+2, y+7, z, 18);
setTile(x+2, y+7, z+1, 18);
setTile(x+3, y+4, z-2, 18);
setTile(x+3, y+4, z-1, 18);
setTile(x+3, y+4, z, 18);
setTile(x+3, y+4, z+1, 18);
setTile(x+3, y+4, z+2, 18);
setTile(x+3, y+4, z+3, 18);
setTile(x+3, y+5, z-3, 18);
setTile(x+3, y+5, z-2, 18);
setTile(x+3, y+5, z-1, 18);
setTile(x+3, y+5, z, 18);
setTile(x+3, y+5, z+1, 18);
setTile(x+3, y+5, z+2, 18);
setTile(x-4, y+1, z-1, 106, 8);
setTile(x-4, y+1, z, 106, 8);
setTile(x-4, y+1, z+1, 106, 8);
setTile(x-4, y+1, z+2, 106, 8);
setTile(x-4, y+1, z+3, 106, 8);
setTile(x-4, y+2, z-1, 106, 8);
setTile(x-4, y+2, z, 106, 8);
setTile(x-4, y+2, z+1, 106, 8);
setTile(x-4, y+2, z+2, 106, 8);
setTile(x-4, y+2, z+3, 106, 8);
setTile(x-4, y+3, z-1, 106, 8);
setTile(x-4, y+3, z, 106, 8);
setTile(x-4, y+3, z+1, 106, 8);
setTile(x-4, y+3, z+2, 106, 8);
setTile(x-4, y+3, z+3, 106, 8);
setTile(x-4, y+4, z-1, 106, 8);
setTile(x-4, y+4, z, 106, 8);
setTile(x-4, y+4, z+1, 106, 8);
setTile(x-4, y+4, z+2, 106, 8);
setTile(x-4, y+4, z+3, 106, 8);
setTile(x-4, y+5, z-1, 106, 8);
setTile(x-4, y+5, z+2, 106, 8);
setTile(x-3, y+1, z+4, 106, 4);
setTile(x-3, y+2, z+4, 106, 4);
setTile(x-3, y+3, z+4, 106, 4);
setTile(x-3, y+4, z+4, 106, 4);
setTile(x-3, y+6, z, 106, 8);
setTile(x-3, y+6, z+1, 106, 8);
setTile(x-3, y+6, z+2, 106, 8);
setTile(x-3, y+7, z+1, 106, 8);
setTile(x-2, y+6, z-2, 106, 8);
setTile(x-2, y+7, z-2, 106, 8);
setTile(x-1, y+6, z-3, 106, 1);
setTile(x, y+6, z-3, 106, 1);
setTile(x, y+6, z+3, 106, 4);
setTile(x, y+7, z+3, 106, 4);
setTile(x+3, y+6, z-1, 106, 2);
setTile(x+3, y+6, z, 106, 2);
setTile(x+3, y+7, z-1, 106, 2);
setTile(x+2, y+7, z+2, 106, 4);
for(var yy=y+1;yy<y+5;yy++){
setTile(x+4, yy, z-1, 106, 2);
setTile(x+3, yy, z+4, 106, 4);
}
},
createTiaga : function(x, y, z){
if(espCache4==""){
var cache = ESP.read("espData_3");
if(cache!=""){
eval(cache+"");
espCache4 = cache+"";
}
else{
ESP.toast("추가 파일이 없습니다.");
}
}
else{
eval(espCache4);
}
},
creaeteSwamp : function(x, y, z){
if(espCache7==""){
var cache = ESP.read("espData_6");
if(cache!=""){
eval(cache+"");
espCache7 = cache+"";
}
else{
ESP.toast("추가 파일이 없습니다.");
}
}
else{
eval(espCache7);
}
},
creaeteBuilding : function(x, y, z){
if(espCache8==""){
var cache = ESP.read("espData_7");
if(cache!=""){
eval(cache+"");
espCache8 = cache+"";
}
else{
ESP.toast("추가 파일이 없습니다.");
}
}
else{
eval(espCache8);
}
},
createHermitHideout : function(x, y, z){
if(espCache9==""){
var cache = ESP.read("espData_8");
if(cache!=""){
eval(cache+"");
espCache9 = cache+"";
}
else{
ESP.toast("추가 파일이 없습니다.");
}
}
else{
eval(espCache9);
}
},
removeSusanoo : function(x, y, z){
for(var xx=x-1;xx<x+2;xx++)
for(var yy=y+1;yy<y+8;yy++)
for(var zz=z-1;zz<z+2;zz++)
setTile(xx, yy, zz, 0);
setTile(x, y+8, z, 0);
setTile(x, y+6, z+2, 0);
setTile(x, y+6, z+3, 0);
setTile(x, y+5, z+3, 0);
setTile(x, y+4, z+3, 0);
setTile(x, y+3, z+3, 0);
setTile(x, y+6, z-2, 0);
setTile(x, y+6, z-3, 0);
setTile(x, y+6, z-3, 0);
setTile(x, y+5, z-3, 0);
setTile(x, y+4, z-3, 0);
setTile(x, y+3, z-3, 0);
setTile(x+2, y+6, z, 0);
setTile(x+3, y+6, z, 0);
setTile(x+3, y+5, z, 0);
setTile(x+3, y+4, z, 0);
setTile(x+3, y+3, z, 0);
setTile(x-2, y+6, z, 0);
setTile(x-3, y+6, z, 0);
setTile(x-3, y+5, z, 0);
setTile(x-3, y+4, z, 0);
setTile(x-3, y+3, z, 0);
},
createJungleTree : function(x, y, z){
if(espCache10==""){
var cache = ESP.read("espData_9");
if(cache!=""){
eval(cache+"");
espCache10 = cache+"";
}
else{
ESP.toast("추가 파일이 없습니다.");
}
}
else{
eval(espCache10);
}
},


};


const Cool = {
isFinished : function(t){
if(t==0||t==null||t==undefined){
return true;
}
else{
return false;
}
},
isFalse : function(t){
if(t==false||t==null||t==undefined){
return true;
}
else{
return false;
}
}
};


function dip2px(ctx, dips){
return Math.ceil(dips*ctx.getResources().getDisplayMetrics().density);
}


function dtm(msg){
clientMessage("<§0Dark Tornado§f> "+msg);
}


function hcm(msg){
clientMessage("<§bHidden Command§f> "+msg);
}


function addDarkRender(renderer){
var sin, cos;
var model = renderer.getModel();
var head = model.getPart("head");
var body = model.getPart("body");
var rArm = model.getPart("rightArm");
var lArm = model.getPart("leftArm");
var rLeg = model.getPart("rightLeg");
var lLeg = model.getPart("leftLeg");
head.clear();
body.clear();
rLeg.clear();
lLeg.clear();
rArm.clear();
lArm.clear();
head.setTextureOffset(0, 0);
head.addBox(-4, -8, -4, 8, 8, 8);
body.setTextureOffset(16, 16);
body.addBox(-4, 0, -2, 8, 12, 4);
rLeg.setTextureOffset(0, 16);
rLeg.addBox(-2, 0, -2, 4, 12, 4);
lLeg.setTextureOffset(0, 16);
lLeg.addBox(-2, 0, -2, 4, 12, 4);
lArm.setTextureOffset(40, 16);
lArm.addBox(-1, -2, -1.5, 4, 12, 4); 
rArm.setTextureOffset(40, 16);
rArm.addBox(-3, -2, -1.5, 4, 12, 4); 

head.setTextureOffset(40, 20);
head.addBox(-1, -12, -2, 2, 2, 2);
for(var n=0;n<360;n++){
sin = Math.sin(n*Math.PI/27);
cos = Math.cos(n*Math.PI/27);
head.addBox(-1+3*sin, -11, -2+3*cos, 2, 2, 2);
head.addBox(-1+5*sin, -10, -2+5*cos, 2, 2, 2);
head.addBox(-1+7*sin, -9, -2+7*cos, 2, 2, 2);
head.addBox(-1+9*sin, -8, -2+9*cos, 2, 2, 2);
head.addBox(-1+11*sin, -7, -2+11*cos, 2, 2, 2);
head.addBox(-1+13*sin, -6, -2+13*cos, 2, 2, 2);
}
}


function addWhiteRender(renderer){
var model = renderer.getModel();
var head = model.getPart("head");
var body = model.getPart("body");
var rArm = model.getPart("rightArm");
var lArm = model.getPart("leftArm");
var rLeg = model.getPart("rightLeg");
var lLeg = model.getPart("leftLeg");
head.clear();
body.clear();
rLeg.clear();
lLeg.clear();
rArm.clear();
lArm.clear();
head.setTextureOffset(0, 0);
head.addBox(-4, -8, -4, 8, 8, 8);
head.setTextureOffset(20, 72);
for(var n=-4;n<4;n++){
head.addBox(n, -6, 4, 1, 6, 1);
head.addBox(n, -1, 4, 1, 6, 1);
}
head.addBox(-0.5, 4, 4, 1, 6, 1);
head.addBox(1, 4, 4, 1, 6, 1);
head.addBox(-2, 4, 4, 1, 6, 1);
head.addBox(3, 4, 4, 1, 6, 1);
head.addBox(-4, 4, 4, 1, 6, 1);
head.addBox(-4, -6, -5, 1, 6, 1);
head.addBox(3, -6, -5, 1, 6, 1);
head.addBox(-4, -1, -5, 1, 6, 1);
head.addBox(3, -1, -5, 1, 6, 1);
head.addBox(-5, -6, -4, 1, 6, 1);
head.addBox(4, -6, -4, 1, 6, 1);
head.addBox(-5, -1, -4, 1, 3, 1);
head.addBox(4, -1, -4, 1, 3, 1);
head.addBox(-5, -6, -3, 1, 6, 1);
head.addBox(4, -6, -3, 1, 6, 1);
head.addBox(-5, -6, -2, 1, 6, 1);
head.addBox(4, -6, -2, 1, 6, 1);
head.addBox(-5, -6, -1, 1, 6, 1);
head.addBox(4, -6, -1, 1, 6, 1);
head.addBox(-5, -1, -1, 1, 2, 1);
head.addBox(4, -1, -1, 1, 2, 1);
head.addBox(-5, -6, 0, 1, 6, 1);
head.addBox(4, -6, 0, 1, 6, 1);
head.addBox(-5, -1, 0, 1, 3, 1);
head.addBox(4, -1, 0, 1, 3, 1);
head.addBox(-5, -6, 1, 1, 6, 1);
head.addBox(4, -6, 1, 1, 6, 1);
head.addBox(-5, -1, 1, 1, 6, 1);
head.addBox(4, -1, 1, 1, 6, 1);
head.addBox(-5, -6, 2, 1, 6, 1);
head.addBox(4, -6, 2, 1, 6, 1);
head.addBox(-5, -1, 2, 1, 6, 1);
head.addBox(4, -1, 2, 1, 6, 1);
head.addBox(-5, 4, 2, 1, 3, 1);
head.addBox(4, 4, 2, 1, 3, 1);
head.addBox(-5, -6, 3, 1, 6, 1);
head.addBox(4, -6, 3, 1, 6, 1);
head.addBox(-5, -1, 3, 1, 6, 1);
head.addBox(4, -1, 3, 1, 3, 1);
head.addBox(-5, -1, 3, 1, 5, 1);
head.addBox(4, -1, 3, 1, 5, 1);
head.setTextureOffset(18, 72);
head.addBox(-3, -6, -5, 6, 2, 1);
var sin, cos;
body.setTextureOffset(16, 16);
body.addBox(-4, 0, -2, 8, 7, 4);
body.setTextureOffset(16, 50);
body.addBox(-3.5, 7, -2, 7, 3, 4);
body.setTextureOffset(16, 40);
body.addBox(1, 2, -2.01, 2, 2, 1);
body.addBox(-3, 2, -2.01, 2, 2, 1);
for(var n=0;n<360;n++){
sin = Math.sin(n*Math.PI/27);
cos = Math.cos(n*Math.PI/27);
body.addBox(-0.5+3*sin, 8, -0.5+3*cos, 1, 2, 1);
body.addBox(-0.5+4*sin, 9.5, -0.5+4*cos, 1, 2, 1);
body.addBox(-0.5+5*sin, 11, -0.5+5*cos, 1, 2, 1);
body.addBox(-0.5+6*sin, 12.5, -0.5+6*cos, 1, 2, 1);
}
rLeg.setTextureOffset(0, 16);
rLeg.addBox(-1.5, -2, -1.5, 3, 12, 3);
lLeg.setTextureOffset(0, 16);
lLeg.addBox(-1.5, -2, -1.5, 3, 12, 3);
rArm.setTextureOffset(41, 17);
rArm.addBox(-2.5, -2, -1.5, 3, 12, 3); 
lArm.setTextureOffset(41, 17);
lArm.addBox(-1.5, -2, -1.5, 3, 12, 3);
}


function checkInternet(){
try{
var cm = ctx.getSystemService(android.content.Context.CONNECTIVITY_SERVICE);
var mobile = cm.getNetworkInfo(cm.TYPE_MOBILE);
var wifi = cm.getNetworkInfo(cm.TYPE_WIFI);
if(mobile.isConnected()||wifi.isConnected()){
return true;
}
else{
return false;
}
}
catch(e){
try{
if(wifi.isConnected()){
return true;
}
}
catch(err){
print(err);
}
}
}


//Teleportation
function teleport(e, x, y, z){
if(ESP.isPlayer(e)){
var ttt = Level.spawnMob(x, y, z, 81);
Entity.rideAnimal(e, ttt);
if(!mcpev3) Entity.remove(ttt);
else tttt.push({tp : ttt, tt : 3});
ModPE.showTipMessage("");
preventDefault();
}
else{
Entity.setPosition(e, x, y, z);
}

}


//Remote Killing
function killPlayer(name){
for each(var e in Entity.getAll()){
if(Player.getName(e)==name){
Entity.setHealth(e, 0);
ESP.sbm(Player.getName(e)+" was killed");
}
}
preventDefault();
}


//Remote Healing
function healPlayer(name){
for each(var e in Entity.getAll()){
if(Player.getName(e)==name){
Entity.setHealth(e, 20);
ESP.sbm(Player.getName(e)+" was healed");
}
}
preventDefault();
}


//checking night
function nightCheck(){
var nc1, nc2, nc3;
nc1 = Level.getTime();
try{
var vers = ModPE.getMinecraftVersion().toString().split(".");
if(Number(vers[1])>=12||vers[0]=="1") nc2 = nc1/24000;
else nc2 = nc1/19200;
}
catch(e){
nc2 = nc1/19200;
}
nc3 = nc2-Math.floor(nc2);
if(nc3<0.5)  return false;
else if(nc3>=0.5) return true;
}


function getIndex(arr, val){
if(arr[0]==null){
return -1;
}
else{
var cache = arr.length;
for(var n=0;n<cache;n++){
if(arr[n]==val) return n;
}
return -1;
}
}


function assaulterHyperPlus(s, r, n){
var px, py, pz;
for each(var e in Entity.getAll()){
px = Math.abs(Entity.getX(s)-Entity.getX(e));
py = Math.abs((Entity.getY(s)-1)-Entity.getY(e));
pz = Math.abs(Entity.getZ(s)-Entity.getZ(e));
if(px<=r&&py<=r&&pz<=r&&s!=e&&Entity.getEntityTypeId(e)<64)
Entity.setHealth(e, Entity.getHealth(e)-n);
}
}


function vampireHyperPlus(s, ec, r, n){
var px, py, pz;
for each(var e in Entity.getAll()){
px = Math.abs(Entity.getX(s)-Entity.getX(e));
py = Math.abs((Entity.getY(s)-1)-Entity.getY(e));
pz = Math.abs(Entity.getZ(s)-Entity.getZ(e));
if(px<=r&&py<=r&&pz<=r&&!(s==e||ec==e)&&Entity.getEntityTypeId(e)<64)
Entity.setHealth(e, Entity.getHealth(e)-n);
}
}


function arroundMobHealthDown(s, r, n){
var px, py, pz;
for each(var e in Entity.getAll()){
px = Math.abs(Entity.getX(s)-Entity.getX(e));
py = Math.abs((Entity.getY(s)+1)-Entity.getY(e));
pz = Math.abs(Entity.getZ(s)-Entity.getZ(e));
if(px<=r&&py<=r&&pz<=r&&s!=e&&Entity.getEntityTypeId(e)<64){
Entity.setHealth(e, Entity.getHealth(e)-n);
}
}
}


function arroundMobFireTicks(s, r, n){
var px, py, pz;
for each(var e in Entity.getAll()){
px = Math.abs(Entity.getX(s)-Entity.getX(e));
py = Math.abs((Entity.getY(s)+1)-Entity.getY(e));
pz = Math.abs(Entity.getZ(s)-Entity.getZ(e));
if(px<=r&&py<=r&&pz<=r&&s!=e&&Entity.getEntityTypeId(e)<64){
Entity.setFireTicks(e, n);
}
}
}


function arroundMobBindPlus(s, r){
var px, py, pz;
for each(var e in Entity.getAll()){
px = Math.abs(Entity.getX(s)-Entity.getX(e));
py = Math.abs((Entity.getY(s)+1)-Entity.getY(e));
pz = Math.abs(Entity.getZ(s)-Entity.getZ(e));
if(px<=r&&py<=r&&pz<=r&&s!=e&&Entity.getEntityTypeId(e)<64){
if(ESP.isPlayer(e)) setTile(Entity.getX(e), Entity.getY(e)-1, Entity.getZ(e), 30);
else setTile(Entity.getX(e), Entity.getY(e), Entity.getZ(e), 30);
Entity.setHealth(e, Entity.getHealth(e)-5);
}
}
}


function skillCool(user, n){
if(user==ad){
if(n==1){
if(getIndex(air, ad)!=-1||getIndex(tp, ad)!=-1){
adt1 = 75;
}
else{
adt1 = 150;
}
}
if(n==2){
adt2 = 300;
}
if(n==3){
adt3 = 300;
}
if(n==4){
if(getIndex(titan, ad)!=-1){
adt4 = 2700;
}
else{
adt4 = 1800;
}
}
}
}


function selectUser(arr, type, text){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var player = null;
var layout = new LinearLayout(ctx);
layout.setOrientation(1);
var radios = new RadioGroup(ctx);
radios.setOrientation(1);
var radio = [];
for(var n=0;n<arr.length;n++){
radio[n] = new RadioButton(ctx);
radio[n].setText(Player.getName(arr[n]));
radio[n].setId(n);
radios.addView(radio[n]);
}
radios.setOnCheckedChangeListener(new RadioGroup.OnCheckedChangeListener({
onCheckedChanged: function (group, checkedId){
player = arr[checkedId];
}
}));
layout.addView(radios);
var pad = dip2px(ctx, 5);
layout.setPadding(pad, pad, pad, pad);
var dialog = makeDialog("Select User("+text+")", layout, "취소", null, "확인", function(){
if(type==1){
ESP.send(player);
ESP.toast(text+" was sent.");
}
else if(type==2){
ESP.kill(player);
ESP.toast(text+" was killed.");
}
else if(type==3){
ESP.heal(player);
ESP.toast(text+" was healed.");
}
else if(type==4){
teleport(player, Entity.getX(ad), Entity.getY(ad)+1, Entity.getZ(ad));
ESP.toast(text+" was called.");
}
});
dialog.show();
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
}));
}


//town protection
function townCheck(x, z){
if(town&&((!mp&&mp3&&x>=110&&x<=255&&z<=92&&z>=0)||(mp4&&x>=10&&x<=110&&z<=52&&z>=0))){
return true;
}
else{
return false;
}

}


function autoRecover(x, y, z, r, b, bd){
for(var xx=x-r;xx<x+r+1;xx++)
for(var zz=z-r;zz<z+r+1;zz++)
setTile(xx, y, zz, b, bd);
}


function setTiles(x1, x2, y1, y2, z1, z2, b, bd){
if(y1==y2){
for(var xx=x1;xx<x2+1;xx++){
for(var zz=z1;zz<z2+1;zz++){
setTile(xx, y1, zz, b, bd);
}}
}
else{
for(var xx=x1;xx<x2+1;xx++){
for(var yy=y1;yy<y2+1;yy++){
for(var zz=z1;zz<z2+1;zz++){
setTile(xx, yy, zz, b, bd);
}}}
}
}


//passive+
function defenserHit(esp, n){
if(n>1){
ESP.setHealth(esp, Entity.getHealth(esp)+2, true);
}
else{
ESP.setHealth(esp, Entity.getHealth(esp)+1, true);
}

}

function hawkEyeHit(n){
ESP.setHealth(hawk[n], Entity.getHealth(hawk[n])+1, true);
}

function lightGemstoneHit(n){
if(nightCheck()==false){
ESP.setHealth(gem[n], Entity.getHealth(gem[n])+1, true);
}

}


/*auto update
function autoUpdate(){
var day = new Date();
var y = day.getFullYear();
var m = day.getMonth()+1;
var d = day.getDate();
if(y>=2015&&m>=11&&d>=1){
return 3;
}
else if(y>=2015&&m>=10&&d>=1){
return 2;
}
else if(y>=2015&&m>=9&&d>=1){
return 1;
}
else{
return 0;
}

}
*/

ESP.makeDir();
ESP.checkFiles();


function newLevel(){
//script version & map check
version = "8.0.0 beta 2";
espn = 100;
ESP.mapCheck("§bThe Battle70&Boss+");

//read data
locate = ESP.read("em");
emcolor = ESP.read("em2");

//message
if(auto){
if(!mpr) ESP.showDialog("초능력자 대전 "+version, true);
else ESP.toast("초능력자 대전 "+version+" by Dark Tornado\n             자동수복 활성화");
}
else{
ESP.toast("초능력자 대전 "+version+" by Dark Tornado\n             자동수복 비활성화");
}

//Removing Mob +α
if(auto){
anti3 = 2700;
anti4 = 900;
}

//finding admin
adt = 46;

//Item+
ModPE.setItem(511, "book_writable", 0, "Dark Tornado's Book");

//adding button
if(mp3){
ESP.addEMButton();
ESP.callFunc("rembmonsc", [version]);
}
else if(mpr){
rebootMapDialog();
}

//MCPE version check
try{
Player.setCanFly(true);
mcpev = true;
exp.onoff = true;
try{
var mcpev2 = ModPE.getMinecraftVersion().toString().split(".");
if(Number(mcpev2[1])>=11||vers[0]=="1"){
mcpev3 = true;
if(mp3) ESP.toast("MCPE 0.11.1 이상에서는 순간이동을 할 때, 눈덩이가 보일 수 있습니다.");
}
else{
mcpev3 = false;
}
if(Number(mcpev2[1])>=12||vers[0]=="1"){
mcpev4 = true;
exp.onoff = false;
if(mp3) ESP.toast("MCPE 0.12.1 이상에서는 패시브 스킬들 중 체력과 관련된 부분이 정상적으로 작동하지 않습니다.");
}
if(Number(mcpev2[1])>=15||vers[0]=="1"){
getPlayers = true;
ESP.toast("MCPE 0.15.x에서는 이벤트 리스너로 서버원을 인식하는 기능이 자동으로 활성화됩니다.");
}
}
catch(e){
if(mp3) ESP.toast("MCPE 0.9.0~0.9.5에서는 일부 기능이 작동하지 않습니다.");
}
}
catch(e){
if(mp3) ESP.toast("이 스크립트는 더 이상 (공식적으로는) MCPE 0.8.1 이하를 지원하지 않습니다.");
mcpev = false;
}
if(!mp&&mp3&&!mpk){
town = true;
}
espOnoff = true;

//passive on
passOnoff = true;

//else
if(mp3&&ESP.random(20)==0){
hhhhh = 150;
ESP.toast("They are Coming...");
}

if(getPlayers) leftPls = [];


}


//select&ability
function useItem(x, y, z, i, b, s, it, bd){
//admin's
if(i==347){
if(admin2==0){
Entity.setPosition(Player.getEntity(), x ,y+3, z);
}
if(admin2==1){
pe = Player.getEntity();
Entity.setVelX(pe, x-Player.getX());
Entity.setVelY(pe, y-Player.getY());
Entity.setVelZ(pe, z-Player.getZ());
}
if(admin2==2){
pe = Player.getEntity();
Entity.setVelX(pe, x-Player.getX());
Entity.setVelY(pe, 0.7);
Entity.setVelZ(pe, z-Player.getZ());
}
if(admin2==3){
Entity.setVelY(Player.getEntity(), 1);
}
if(admin2==4){
teleport(Player.getEntity(), x ,y+3, z);
}

}
if(i==345&&!multi){
if(admin==0){
for(var xx=x-2;xx<x+3;xx++){
for(var zz=z-2;zz<z+3;zz++){
setTile(xx,y,zz,2);
for(var yy=y-2;yy<y;yy++)
setTile(xx,yy,zz,3);}}
}
if(admin==1){
if(b==2){
for(var xx=x-2;xx<x+3;xx++)
for(var yy=y+1;yy<y+5;yy++)
for(var zz=z-2;zz<z+3;zz++)
if(getTile(xx, yy, zz)!=7){
setTile(xx, yy, zz, 0);
}
}
if(b!=2){
for(var xx=x-2;xx<x+3;xx++)
for(var yy=y;yy<y+5;yy++)
for(var zz=z-2;zz<z+3;zz++)
if(getTile(xx, yy, zz)!=7){
setTile(xx, yy, zz, 0);
}
}
}
if(admin==2){
if(b==2){
for(var xx=x-2;xx<x+3;xx++)
for(var yy=y+1;yy<y+5;yy++)
for(var zz=z-2;zz<z+3;zz++)
if(getTile(xx, yy, zz)!=7){
setTile(xx, yy, zz, 0);
}
for(var xx=x-2;xx<x+3;xx++)
for(var zz=z-2;zz<z+3;zz++)
setTile(xx,y,zz,2);
for(var xx=x-2;xx<x+3;xx++)
for(var yy=y-2;yy<y;yy++)
for(var zz=z-2;zz<z+3;zz++)
setTile(xx,yy,zz,3);
}
if(b!=2){
for(var xx=x-2;xx<x+3;xx++)
for(var yy=y;yy<y+5;yy++)
for(var zz=z-2;zz<z+3;zz++)
if(getTile(xx, yy, zz)!=7){
setTile(xx, yy, zz, 0);
}
for(var xx=x-2;xx<x+3;xx++)
for(var zz=z-2;zz<z+3;zz++)
setTile(xx,y-1,zz,2);
for(var xx=x-2;xx<x+3;xx++)
for(var yy=y-3;yy<y-1;yy++)
for(var zz=z-2;zz<z+3;zz++)
setTile(xx,yy,zz,3);
}
}
if(admin==3){
px = Player.getX();
py = Player.getY();
pz = Player.getZ();
yaw = Math.floor(getYaw());
pitch = Math.floor(getPitch());
sin = -Math.sin(yaw/180*Math.PI);
cos = Math.cos(yaw/180*Math.PI);
tan = -Math.sin(pitch/180*Math.PI);
pcos = Math.cos(pitch/180*Math.PI);
for(gun=4;gun<50;gun++)
explode(px+gun*sin*pcos, py+0.8+gun*tan, pz+gun*cos*pcos, 2);
}
if(admin==4){
for(var xx=x-8;xx<x+9;xx++)
for(var yy=y+1;yy<y+11;yy++)
for(var zz=z-8;zz<z+9;zz++)
if(getTile(xx, yy, zz)!=7){
setTile(xx, yy, zz, 0);
}
for(var xx=x-8;xx<x+9;xx++)
for(var zz=z-8;zz<z+9;zz++)
if(getTile(xx, yy, zz)!=98){
setTile(xx,y,zz,2);
}
for(var xx=x-8;xx<x+9;xx++)
for(var yy=y-5;yy<y;yy++)
for(var zz=z-8;zz<z+9;zz++)
setTile(xx,yy,zz,3);
}
if(admin==5){
Player.setHealth(Entity.getHealth(Player.getEntity())+2);
preventDefault();
}
if(admin==7){
if(tym==false){
Level.setTime(10000);
setNightMode(12000);
preventDefault();
tym = true;
}
else if(tym){
ad1 = true;
ad1a = 225;
Level.setTime(14000);
preventDefault();
tym = false;
}
}

}
if(b==44&&bd==2){
Entity.setPosition(Player.getEntity(),18,13,19);
ESP.sbm("Warped to Hideout");
}
if(b==101){
if(!mp) Entity.setPosition(Player.getEntity(),127,53,23);
if(mp) Entity.setPosition(Player.getEntity(),6,53.5,23);
ESP.sbm("Returned to Admin's House");
}
if(b==47){
if(!multi) Level.dropItem(x, y+0.6, z, 0.6, 340, 1, 0);
else if(multi) addItemInventory(340, 1, 0);
}

//Dark Tornado jr.
if(dtj==ESP.getUser()&&!townCheck(x, z)){
if(i==302&&dt1a==0){
if(!dtl){
explode(Math.floor(x)+0.5, y+1, Math.floor(z)+0.5, 3);
for(var xx=x-3;xx<x+4;xx++)
for(var yy=y-5;yy<y+1;yy++)
for(var zz=z-3;zz<z+4;zz++)
if(getTile(xx, yy, zz)==0){
setTile(xx, yy, zz, 51);
}
}
else if(dtl){
explode(x, y+2, z, 4);
for(var xx=x-4;xx<x+5;xx++)
for(var yy=y-7;yy<y+1;yy++)
for(var zz=z-4;zz<z+5;zz++)
if(getTile(xx, yy, zz)==0){
setTile(xx, yy, zz, 51);
}
}
dt1 = true;
dt1a = 150;
skillCool(ESP.getUser(), 1);
}
if(i==303&&dt2a==0){
px = Player.getX();
py = Player.getY();
pz = Player.getZ();
yaw = Math.floor(getYaw());
pitch = Math.floor(getPitch());
sin = -Math.sin(yaw/180*Math.PI);
cos = Math.cos(yaw/180*Math.PI);
tan = -Math.sin(pitch/180*Math.PI);
pcos = Math.cos(pitch/180*Math.PI);
if(!dtl){
for(var gun=4;gun<35;gun++)
setTile(px+gun*sin*pcos, py+gun*tan+0.8, pz+gun*cos*pcos, 79);
}
else if(dtl){
for(var gun=4;gun<50;gun++)
setTile(px+gun*sin*pcos, py+gun*tan+0.8, pz+gun*cos*pcos, 79);
}
dt2 = true;
dt2a = 300;
skillCool(ESP.getUser(), 2);
}
if(i==305&&dt4a==0){
ESP.sbm("Elemental Assault", true);
if(!dtl){
Player.setHealth(Entity.getHealth(Player.getEntity())+20);
}
else if(dtl){
Player.setHealth(Entity.getHealth(Player.getEntity())+30);
}
dtx = Player.getX();
dty = Player.getY()-2;
dtz = Player.getZ();
setTile(dtx+14, dty+8, dtz, 8);
setTile(dtx-14, dty+8, dtz, 8);
setTile(dtx, dty+8, dtz+14, 8);
setTile(dtx, dty+8, dtz-14, 8);
for(var xx=dtx-13;xx<dtx+14;xx++){
setTile(xx, dty+1, dtz+13, 30);
setTile(xx, dty+1, dtz-13, 30);
}
for(var zz=dtz-13;zz<dtz+14;zz++){
setTile(dtx+13, dty+1, zz, 30);
setTile(dtx-13, dty+1, zz, 30);
}
for(var xx=dtx-12;xx<dtx+13;xx++){
for(var zz=dtz-12;zz<dtz+13;zz++){
setTile(xx, dty, zz, 87);
setTile(xx, dty+1, zz, 51);}}
for(var xx=dtx-10;xx<dtx+11;xx++){
for(var zz=dtz-10;zz<dtz+11;zz++){
setTile(xx, dty, zz, 2);
setTile(xx, dty+1, zz, 0);}}
setTile(dtx+10, dty+1, dtz+10, 18);
setTile(dtx+10, dty+1, dtz-10, 18);
setTile(dtx-10, dty+1, dtz+10, 18);
setTile(dtx-10, dty+1, dtz-10, 18);
setTile(dtx+10, dty+10, dtz, 79);
setTile(dtx, dty+10, dtz+10, 79);
setTile(dtx-10, dty+10, dtz, 79);
setTile(dtx, dty+10, dtz-10, 79);
setTile(dtx+7, dty+1, dtz+7, 49);
setTile(dtx+7, dty+1, dtz-7, 49);
setTile(dtx-7, dty+1, dtz+7, 49);
setTile(dtx-7, dty+1, dtz-7, 49);
setTile(dtx+7, dty+7, dtz, 155);
setTile(dtx, dty+7, dtz+7, 155);
setTile(dtx-7, dty+7, dtz, 155);
setTile(dtx, dty+7, dtz-7, 155);
setTile(dtx+4, dty+1, dtz+4, 46);
setTile(dtx+4, dty+1, dtz-4, 46);
setTile(dtx-4, dty+1, dtz+4, 46);
setTile(dtx-4, dty+1, dtz-4, 46);
for(var xx=dtx-2;xx<dtx+3;xx++){
for(var zz=dtz-2;zz<dtz+3;zz++){
setTile(xx, dty+1, zz, 17);
setTile(xx, dty+2, zz, 18);}}
for(var xx=dtx-1;xx<dtx+2;xx++){
for(var yy=dty+1;yy<dty+3;yy++)
for(var zz=dtz-1;zz<dtz+2;zz++){
setTile(xx, yy, zz, 0);
setTile(xx, dty+5, zz, 20);}}
for(var xx=dtx-3;xx<dtx+4;xx++)
for(var zz=dtz-3;zz<dtz+4;zz++)
Level.spawnMob(xx, dty+48, zz, 80);
dt4 = true;
dt4a = 1800;
skillCool(ESP.getUser(), 4);
}

}
//fire expert
if(fe==ESP.getUser()&&!townCheck(x, z)){
if(i==302&&fe1a==0){
fexa = Math.abs(x-Player.getX());
feza = Math.abs(z-Player.getZ());
if(fexa>feza){
for(var zz=z-2;zz<z+3;zz++){
setTile(x, y+1, zz, 51);
setTile(x, y+2, zz, 87);
setTile(x, y+3, zz, 51);
}
}
else if(fexa<feza){
for(var xx=x-2;xx<x+3;xx++){
setTile(xx, y+1, z, 51);
setTile(xx, y+2, z, 87);
setTile(xx, y+3, z, 51);
}
}
fe1 = true;
fe1a = 150;
skillCool(ESP.getUser(), 1);
}
if(i==303&&fe2a==0){
px = Player.getX();
pz = Player.getZ();
yaw = Math.floor(getYaw());
sin = -Math.sin(yaw/180*Math.PI);
cos = Math.cos(yaw/180*Math.PI);
for(var gun=3;gun<30;gun++){
setTile(px+gun*sin, y, pz+gun*cos, 0);
setTile(px+gun*sin, y-1, pz+gun*cos, 51);
}
fe2 = true;
fe2a = 300;
skillCool(ESP.getUser(), 2);
}
if(i==305){
if(fe4a==0&&fe4b==false){
ESP.heal(fe);
ESP.sbm("Heated Area", true);
fex = Player.getX();
fey = Player.getY()-2;
fez = Player.getZ();
for(var xx=fex-9;xx<fex+10;xx++){
for(var zz=fez-9;zz<fez+10;zz++){
setTile(xx, fey, zz, 87);
setTile(xx, fey+1, zz, 51);
}}
for(var fff=2;fff<11;fff++){
setTile(fex+fff, fey, fez+fff, 11);
setTile(fex+fff, fey, fez-fff, 11);
setTile(fex-fff, fey, fez+fff, 11);
setTile(fex-fff, fey, fez-fff, 11);
}
for(var xx=fex-1;xx<fex+2;xx++)
for(var zz=fez-1;zz<fez+2;zz++)
setTile(xx, fey, zz, 89);
for(var xx=fex-10;xx<fex+11;xx++){
for(var zz=fez-10;zz<fez+11;zz++){
setTile(fex+10, fey, zz, 11);
setTile(fex-10, fey, zz, 11);
setTile(xx, fey, fez+10, 11);
setTile(xx, fey, fez-10, 11);
setTile(fex+11, fey, zz, 11);
setTile(fex-11, fey, zz, 11);
setTile(xx, fey, fez+11, 11);
setTile(xx, fey, fez-11, 11);
}}
fe4b = true;
fe4 = true;
fe4a = 1800;
skillCool(ESP.getUser(), 4);
}
else if(fe4b){
for(var xx=fex-11;xx<fex+12;xx++){
for(var zz=fez-11;zz<fez+12;zz++){
setTile(xx, fey, zz, 2);
setTile(xx, fey+1, zz, 0);
}}
fe4b = false;
}
}

}
//magma controller
if(magma==ESP.getUser()&&!townCheck(x, z)){
if(i==302&&mg1==0){
px = Player.getX();
pz = Player.getZ();
yaw = Math.floor(getYaw());
sin = -Math.sin(yaw/180*Math.PI);
cos = Math.cos(yaw/180*Math.PI);
for(var gun=3;gun<20;gun++)
setTile(px+gun*sin, y, pz+gun*cos, 11);
mg1 = 150;
}
if(i==303&&mg2==0){
for(var xx=x-1;xx<x+2;xx++)
for(var zz=z-1;zz<z+2;zz++)
setTile(xx, y, zz, 11);
mg2 = 300
}
if(i==304&&mg3==0){
px = Player.getX();
py = y;
pz = Player.getZ();
yaw = Math.floor(getYaw());
sin = -Math.sin(yaw/180*Math.PI);
cos = Math.cos(yaw/180*Math.PI);
for(var gun=2;gun<12;gun++)
setTile(px+2*gun*sin, y+2, pz+2*gun*cos, 11);
mg3 = 300;
}
if(item()==305&&mg4==0){
ESP.sbm("Lava Zone", true);
ESP.heal(magma);
mgx = Player.getX();
mgy = Player.getY()-2;
mgz = Player.getZ();
setTile(mgx+6, mgy+2, mgz+6, 11);
setTile(mgx+6, mgy+2, mgz, 11);
setTile(mgx+6, mgy+2, mgz-6, 11);
setTile(mgx, mgy+2, mgz+6, 11);
setTile(mgx, mgy+2, mgz-6, 11);
setTile(mgx-6, mgy+2, mgz+6, 11);
setTile(mgx-6, mgy+2, mgz, 11);
setTile(mgx-6, mgy+2, mgz-6, 11);
setTile(mgx+2, mgy+2, mgz+2, 11);
setTile(mgx+2, mgy+2, mgz, 11);
setTile(mgx+2, mgy+2, mgz-2, 11);
setTile(mgx, mgy+2, mgz+2, 11);
setTile(mgx, mgy+2, mgz-2, 11);
setTile(mgx-2, mgy+2, mgz+2, 11);
setTile(mgx-2, mgy+2, mgz, 11);
setTile(mgx-2, mgy+2, mgz-2, 11);
setTile(mgx+4, mgy+4, mgz+4, 11);
setTile(mgx+4, mgy+4, mgz-4, 11);
setTile(mgx-4, mgy+4, mgz+4, 11);
setTile(mgx-4, mgy+4, mgz-4, 11);
mg4 = 1800;
}

}
//kaian pon kallopon
if(kaian==ESP.getUser()){
if(i==302&&kp1==0){
px = Player.getX();
pz = Player.getZ();
yaw = Math.floor(getYaw());
sin = -Math.sin(yaw/180*Math.PI);
cos = Math.cos(yaw/180*Math.PI);
for(var n=3;n<20;n++)
setTile(px+n*sin, y+1, pz+n*cos, 51);
kp1 = 150;
}
if(i==303&&kp2==0){
px = Player.getX();
py = y;
pz = Player.getZ();
yaw = Math.floor(getYaw());
sin = -Math.sin(yaw/180*Math.PI);
cos = Math.cos(yaw/180*Math.PI);
new Thread({
run : function(){
Level.spawnMob(px+6*sin, py+1, pz+6*cos, 93);
explode(px+6*sin, py+1, pz+6*cos, 1.5, true);
Thread.sleep(800);
Level.spawnMob(px+11*sin, py+1, pz+11*cos, 93);
explode(px+11*sin, py+1, pz+11*cos, 1.5, true);
Thread.sleep(800);
Level.spawnMob(px+16*sin, py+1, pz+16*cos, 93);
explode(px+16*sin, py+1, pz+16*cos, 1.5, true);
}
}).start();
kp2 = 300;
}
if(i==304&&kp3==0){
kp3x = Player.getX();
kp3y = Player.getY()-2;
kp3z = Player.getZ();
ESP.antiLack(5);
explode(kp3x+6, kp3y+1, kp3z+6, 2.5);
explode(kp3x+6, kp3y+1, kp3z-6, 2.5);
explode(kp3x+6, kp3y+1, kp3z, 2.5);
explode(kp3x-6, kp3y+1, kp3z+6, 2.5);
explode(kp3x-6, kp3y+1, kp3z-6, 2.5);
explode(kp3x-6, kp3y+1, kp3z, 2.5);
explode(kp3x, kp3y+1, kp3z+6, 2.5);
explode(kp3x, kp3y+1, kp3z-6, 2.5);
kp3 = 300;
}
if(i==305&&kp4==0){
ESP.sbm("The Extinction", true);
ESP.heal(kaian);
kpx = Player.getX();
kpy = Player.getY()-1;
kpz = Player.getZ();
for(var n=0;n=3;n++){
Level.spawnMob(kpx+7, kpy, kpz+7, 93);
Level.spawnMob(kpx+7, kpy, kpz-7, 93);
Level.spawnMob(kpx+7, kpy, kpz, 93);
Level.spawnMob(kpx-7, kpy, kpz+7, 93);
Level.spawnMob(kpx-7, kpy, kpz-7, 93);
Level.spawnMob(kpx-7, kpy, kpz, 93);
Level.spawnMob(kpx, kpy, kpz+7, 93);
Level.spawnMob(kpx, kpy, kpz-7, 93);
}
kp4 = 1800;
}

}


//select
if(multi==false){
//on
if(b==49){
espch = [x, y, z];
if(ESP.checkSkill(1)=="Fire"&&ESP.checkSkill(2)=="User"){
fire[0] = ESP.getUser();
ESP.sbm("Fire User on");
setTile(x, y, z, 246);
preventDefault();
}
if(ESP.checkSkill(1)=="Water"&&ESP.checkSkill(2)=="Controller"){
water[0] = ESP.getUser();
ESP.sbm("Water Controller on");
setTile(x, y, z, 246);
preventDefault();
}
if(ESP.checkSkill(1)=="Nature"&&ESP.checkSkill(2)=="Guardian"){
tree[0] = ESP.getUser();
ESP.sbm("Nature Guardian on");
setTile(x, y, z, 246);
preventDefault();
}
if(ESP.checkSkill(1)=="I am"&&ESP.checkSkill(2)=="Creeper"){
creeper[0] = ESP.getUser();
ESP.sbm("I am Creeper on");
setTile(x, y, z, 246);
preventDefault();
}
if(ESP.checkSkill(1)=="Soil"&&ESP.checkSkill(2)=="Master"){
soil[0] = ESP.getUser();
ESP.sbm("Soil Master on");
setTile(x, y, z, 246);
preventDefault();
}
if(ESP.checkSkill(1)=="The"&&ESP.checkSkill(2)=="Summoner"){
summon[0] = ESP.getUser();
ESP.sbm("The Summoner on");
setTile(x, y, z, 246);
preventDefault();
}
if(ESP.checkSkill(1)=="The"&&ESP.checkSkill(2)=="Luminous"){
light[0] = ESP.getUser();
ESP.sbm("The Luminous on");
setTile(x, y, z, 246);
preventDefault();
}
if(ESP.checkSkill(1)=="The"&&ESP.checkSkill(2)=="Darkness"){
dark[0] = ESP.getUser();
ESP.sbm("The Darkness on");
setTile(x, y, z, 246);
preventDefault();
}
if(ESP.checkSkill(1)=="The"&&ESP.checkSkill(2)=="Freezer"){
ice[0] = ESP.getUser();
ESP.sbm("The Freezer on");
setTile(x, y, z, 246);
preventDefault();
}
if(ESP.checkSkill(1)=="Desert"&&ESP.checkSkill(2)=="Maker"){
sand[0] = ESP.getUser();
ESP.sbm("Desert Maker on");
setTile(x, y, z, 246);
preventDefault();
}
if(ESP.checkSkill(1)=="The"&&ESP.checkSkill(2)=="Vampire"){
blood[0] = ESP.getUser();
ESP.sbm("The Vampire on");
setTile(x, y, z, 246);
if(mp3&&nightCheck()&&ESP.random(5)==0){
hhhhh = 150;
ESP.toast("They are coming...");
}
preventDefault();
}
if(ESP.checkSkill(1)=="Air"&&ESP.checkSkill(2)=="Bander"){
air[0] = ESP.getUser();
ESP.sbm("Air Bander on");
setTile(x, y, z, 246);
preventDefault();
}
if(ESP.checkSkill(1)=="I am"&&ESP.checkSkill(2)=="Elsa"){
elsa[0] = ESP.getUser();
ESP.sbm("I am Elsa on");
setTile(x, y, z, 246);
preventDefault();
}
if(ESP.checkSkill(1)=="Mass"&&ESP.checkSkill(2)=="Titan"){
titan[0] = ESP.getUser();
ESP.sbm("Mass Titan on");
setTile(x, y, z, 246);
preventDefault();
}
if(ESP.checkSkill(1)=="The"&&ESP.checkSkill(2)=="Binder"){
bind[0] = ESP.getUser();
ESP.sbm("The Binder on");
setTile(x, y, z, 246);
preventDefault();
}
if(ESP.checkSkill(1)=="Thunder"&&ESP.checkSkill(2)=="Breaker"){
thunder[0] = ESP.getUser();
ESP.sbm("Thunder Breaker on");
setTile(x, y, z, 246);
preventDefault();
}
if(ESP.checkSkill(1)=="The"&&ESP.checkSkill(2)=="Mechanic"){
meca[0] = ESP.getUser();
ESP.sbm("The Mechanic on");
setTile(x, y, z, 246);
preventDefault();
}
if(ESP.checkSkill(1)=="TNT"&&ESP.checkSkill(2)=="Expert"){
tnt[0] = ESP.getUser();
ESP.sbm("TNT Expert on");
setTile(x, y, z, 246);
preventDefault();
}
if(ESP.checkSkill(1)=="Trap"&&ESP.checkSkill(2)=="Creater"){
trap[0] = ESP.getUser();
ESP.sbm("Trap Creater on");
setTile(x, y, z, 246);
preventDefault();
}
if(ESP.checkSkill(1)=="The"&&ESP.checkSkill(2)=="Healer"){
heal[0] = ESP.getUser();
ESP.sbm("The Healer on");
setTile(x, y, z, 246);
preventDefault();
}
if(ESP.checkSkill(1)=="Nether"&&ESP.checkSkill(2)=="Man"){
nether[0] = ESP.getUser();
ESP.sbm("Nether Man on");
setTile(x, y, z, 246);
preventDefault();
}
if(ESP.checkSkill(1)=="Cloud"&&ESP.checkSkill(2)=="Manager"){
cloud[0] = ESP.getUser();
ESP.sbm("Cloud Manager on");
setTile(x, y, z, 246);
preventDefault();
}
if(ESP.checkSkill(1)=="The"&&ESP.checkSkill(2)=="Assassin"){
assassin[0] = ESP.getUser();
ESP.sbm("The Assassin on");
setTile(x, y, z, 246);
if(mp3&&nightCheck()&&ESP.random(3)==0){
Level.setTime(14000);
la.t = 201;
ESP.toast("They are coming...");
}
preventDefault();
}
if(ESP.checkSkill(1)=="Arrow"&&ESP.checkSkill(2)=="Shooter"){
arrow[0] = ESP.getUser();
ESP.sbm("Arrow Shooter on");
setTile(x, y, z, 246);
preventDefault();
}
if(ESP.checkSkill(1)=="The"&&ESP.checkSkill(2)=="Mage"){
mage[0] = ESP.getUser();
ESP.sbm("The Mage on");
setTile(x, y, z, 246);
preventDefault();
}
if(ESP.checkSkill(1)=="The"&&ESP.checkSkill(2)=="Defenser"){
defense[0] = ESP.getUser();
ESP.sbm("The Defenser on");
setTile(x, y, z, 246);
preventDefault();
}
if(ESP.checkSkill(1)=="Poison"&&ESP.checkSkill(2)=="Maven"){
poison[0] = ESP.getUser();
ESP.sbm("Poison Maven on");
setTile(x, y, z, 246);
preventDefault();
}
if(ESP.checkSkill(1)=="Ground"&&ESP.checkSkill(2)=="Melter"){
melt[0] = ESP.getUser();
ESP.sbm("Ground Melter on");
setTile(x, y, z, 246);
preventDefault();
}
if(ESP.checkSkill(1)=="Hyper"&&ESP.checkSkill(2)=="Freezer"){
hfreeze[0] = ESP.getUser();
ESP.sbm("Hyper Freezer on");
setTile(x, y, z, 246);
preventDefault();
}
if(ESP.checkSkill(1)=="The"&&ESP.checkSkill(2)=="Builder"){
builder[0] = ESP.getUser();
ESP.sbm("The Builder on");
setTile(x, y, z, 246);
preventDefault();
}
if(ESP.checkSkill(1)=="The"&&ESP.checkSkill(2)=="Soldier"){
soldier[0] = ESP.getUser();
ESP.sbm("The Soldier on");
setTile(x, y, z, 246);
preventDefault();
}
if(ESP.checkSkill(1)=="The"&&ESP.checkSkill(2)=="Assaulter"){
assault[0] = ESP.getUser();
ESP.sbm("The Assaulter on");
setTile(x, y, z, 246);
preventDefault();
}
if(ESP.checkSkill(1)=="The"&&ESP.checkSkill(2)=="Burster"){
burst[0] = ESP.getUser();
ESP.sbm("The Burster on");
setTile(x, y, z, 246);
preventDefault();
}
if(ESP.checkSkill(1)=="The"&&ESP.checkSkill(2)=="Warrior"){
warrior[0] = ESP.getUser();
ESP.sbm("The Warrior on");
setTile(x, y, z, 246);
preventDefault();
}
if(ESP.checkSkill(1)=="Ore"&&ESP.checkSkill(2)=="Collecter"){
ore[0] = ESP.getUser();
ESP.sbm("Ore Collecter on");
setTile(x, y, z, 246);
preventDefault();
}
if(ESP.checkSkill(1)=="The"&&ESP.checkSkill(2)=="Rich"){
rich[0] = ESP.getUser();
ESP.sbm("The Rich on");
setTile(x, y, z, 246);
preventDefault();
}
if(ESP.checkSkill(1)=="The"&&ESP.checkSkill(2)=="Teleporter"){
tp[0] = ESP.getUser();
ESP.sbm("The Teleporter on");
setTile(x, y, z, 246);
preventDefault();
}
if(ESP.checkSkill(1)=="Space"&&ESP.checkSkill(2)=="Warpper"){
space[0] = ESP.getUser();
ESP.sbm("Space Warpper on");
setTile(x, y, z, 246);
preventDefault();
}
if(ESP.checkSkill(1)=="Surround"&&ESP.checkSkill(2)=="Attacker"){
sattack[0] = ESP.getUser();
ESP.sbm("Surround Attacker on");
setTile(x, y, z, 246);
preventDefault();
}
if(ESP.checkSkill(1)=="Force"&&ESP.checkSkill(2)=="Shifter"){
force[0] = ESP.getUser();
ESP.sbm("Force Shifter on");
setTile(x, y, z, 246);
preventDefault();
}
if(ESP.checkSkill(1)=="I am"&&ESP.checkSkill(2)=="Reinforce"){
rein[0] = ESP.getUser();
ESP.sbm("I am Reinforce on");
setTile(x, y, z, 246);
preventDefault();
}
if(ESP.checkSkill(1)=="Magnetism"&&ESP.checkSkill(2)=="Distorter"){
magnet[0] = ESP.getUser();
ESP.sbm("Magnetism Distorter on");
setTile(x, y, z, 246);
preventDefault();
}
if(ESP.checkSkill(1)=="I am"&&ESP.checkSkill(2)=="Steve"){
steve[0] = ESP.getUser();
ESP.sbm("I am Steve on");
setTile(x, y, z, 246);
preventDefault();
}
if(ESP.checkSkill(1)=="I am"&&ESP.checkSkill(2)=="Herobrine"){
hero[0] = ESP.getUser();
ESP.sbm("I am Herobrine on");
setTile(x, y, z, 246);
preventDefault();
}
if(ESP.checkSkill(1)=="The"&&ESP.checkSkill(2)=="Hermit"){
hermit[0] = ESP.getUser();
ESP.sbm("The Hermit on");
setTile(x, y, z, 246);
preventDefault();
}
if(ESP.checkSkill(1)=="Clay"&&ESP.checkSkill(2)=="Gatherer"){
clay[0] = ESP.getUser();
ESP.sbm("Clay Gatherer on");
setTile(x, y, z, 246);
preventDefault();
}
if(ESP.checkSkill(1)=="I am"&&ESP.checkSkill(2)=="Kirito"){
kirito[0] = ESP.getUser();
ESP.sbm("I am Kirito on");
setTile(x, y, z, 246);
preventDefault();
}
if(ESP.checkSkill(1)=="Jungle"&&ESP.checkSkill(2)=="Former"){
jungle[0] = ESP.getUser();
ESP.sbm("Jungle Former on");
setTile(x, y, z, 246);
preventDefault();
}
if(ESP.checkSkill(1)=="I am"&&ESP.checkSkill(2)=="Kanade"){
kanade[0] = ESP.getUser();
ESP.sbm("I am Kanade on");
setTile(x, y, z, 246);
preventDefault();
}
if(ESP.checkSkill(1)=="Time"&&ESP.checkSkill(2)=="Traveler"){
time[0] = ESP.getUser();
ESP.sbm("Time Traveler on");
setTile(x, y, z, 246);
preventDefault();
}
if(ESP.checkSkill(1)=="The"&&ESP.checkSkill(2)=="Sniper"){
snipe[0] = ESP.getUser();
ESP.sbm("The Sniper on");
setTile(x, y, z, 246);
preventDefault();
}
if(ESP.checkSkill(1)=="Zombie"&&ESP.checkSkill(2)=="Employer"){
zombie[0] = ESP.getUser();
ESP.sbm("Zombie Employer on");
setTile(x, y, z, 246);
preventDefault();
}
if(ESP.checkSkill(1)=="The"&&ESP.checkSkill(2)=="Necromancer"){
necro[0] = ESP.getUser();
ESP.sbm("The Necromancer on");
setTile(x, y, z, 246);
preventDefault();
}
if(ESP.checkSkill(1)=="I am"&&ESP.checkSkill(2)=="Asuna"){
asuna[0] = ESP.getUser();
ESP.sbm("I am Asuna on");
setTile(x, y, z, 246);
preventDefault();
}
if(ESP.checkSkill(1)=="Holy"&&ESP.checkSkill(2)=="Knight"){
holy[0] = ESP.getUser();
ESP.sbm("Holy Knight on");
setTile(x, y, z, 246);
preventDefault();
}
if(ESP.checkSkill(1)=="Solar"&&ESP.checkSkill(2)=="Paladin"){
solar[0] = ESP.getUser();
ESP.sbm("Solar Paladin on");
setTile(x, y, z, 246);
preventDefault();
}
if(ESP.checkSkill(1)=="Lunar"&&ESP.checkSkill(2)=="Wizard"){
lunar[0] = ESP.getUser();
ESP.sbm("Lunar Wizard on");
setTile(x, y, z, 246);
preventDefault();
}
if(ESP.checkSkill(1)=="Hyper"&&ESP.checkSkill(2)=="Assaulter"){
has[0] = ESP.getUser();
ESP.sbm("Hyper Assaulter on");
setTile(x, y, z, 246);
preventDefault();
}
if(ESP.checkSkill(1)=="Random"&&ESP.checkSkill(2)=="Ability"){
random[0] = ESP.getUser();
ESP.sbm("Random Ability on");
setTile(x, y, z, 246);
preventDefault();
}
if(ESP.checkSkill(1)=="Reinforce"&&ESP.checkSkill(2)=="Zwei"){
zwei[0] = ESP.getUser();
ESP.sbm("Reinforce Zwei on");
setTile(x, y, z, 246);
preventDefault();
}
if(ESP.checkSkill(1)=="The"&&ESP.checkSkill(2)=="Decorater"){
deco[0] = ESP.getUser();
ESP.sbm("The Decorater on");
setTile(x, y, z, 246);
preventDefault();
}
if(ESP.checkSkill(1)=="Hyper"&&ESP.checkSkill(2)=="Summoner"){
hsum[0] = ESP.getUser();
ESP.sbm("Hyper Summoner on");
setTile(x, y, z, 246);
preventDefault();
}
if(ESP.checkSkill(1)=="Climate"&&ESP.checkSkill(2)=="Changer"){
climate[0] = ESP.getUser();
ESP.sbm("Climate Changer on");
setTile(x, y, z, 246);
preventDefault();
}
if(ESP.checkSkill(1)=="Remote"&&ESP.checkSkill(2)=="Raider"){
raid[0] = ESP.getUser();
ESP.sbm("Remote Raider on");
setTile(x, y, z, 246);
preventDefault();
}
if(ESP.checkSkill(1)=="Wind"&&ESP.checkSkill(2)=="Operater"){
wind[0] = ESP.getUser();
ESP.sbm("Wind Operater on");
setTile(x, y, z, 246);
preventDefault();
}
if(ESP.checkSkill(1)=="Energy"&&ESP.checkSkill(2)=="Transfer"){
energy[0] = ESP.getUser();
ESP.sbm("Energy Transfer on");
setTile(x, y, z, 246);
preventDefault();
}
if(ESP.checkSkill(1)=="The"&&ESP.checkSkill(2)=="Genocider"){
geno[0] = ESP.getUser();
ESP.sbm("The Genocider on");
setTile(x, y, z, 246);
preventDefault();
}
if(ESP.checkSkill(1)=="Server"&&ESP.checkSkill(2)=="Dominator"){
server[0] = ESP.getUser();
ESP.sbm("Server Dominator on");
setTile(x, y, z, 246);
preventDefault();
}
if(ESP.checkSkill(1)=="The"&&ESP.checkSkill(2)=="Outsider"){
out[0] = ESP.getUser();
ESP.sbm("The Outsider on");
setTile(x, y, z, 246);
preventDefault();
}
if(ESP.checkSkill(1)=="I am"&&ESP.checkSkill(2)=="Railgun"){
rgun[0] = ESP.getUser();
ESP.sbm("I am Railgun on");
setTile(x, y, z, 246);
preventDefault();
}
if(ESP.checkSkill(1)=="Copying"&&ESP.checkSkill(2)=="Eye"){
copy[0] = ESP.getUser();
ESP.sbm("Copying Eye on");
setTile(x, y, z, 246);
preventDefault();
}
if(ESP.checkSkill(1)=="Dragon"&&ESP.checkSkill(2)=="Trainer"){
dragon[0] = ESP.getUser();
ESP.sbm("Dragon Trainer on");
setTile(x, y, z, 246);
preventDefault();
}
if(ESP.checkSkill(1)=="Hawk"&&ESP.checkSkill(2)=="Eye"){
hawk[0] = ESP.getUser();
ESP.sbm("Hawk Eye on");
setTile(x, y, z, 246);
preventDefault();
}
if(ESP.checkSkill(1)=="The"&&ESP.checkSkill(2)=="Solidifier"){
solid[0] = ESP.getUser();
ESP.sbm("The Solidifier on");
setTile(x, y, z, 246);
preventDefault();
}
if(ESP.checkSkill(1)=="Gravity"&&ESP.checkSkill(2)=="Twister"){
gravity[0] = ESP.getUser();
ESP.sbm("Gravity Twister on");
setTile(x, y, z, 246);
preventDefault();
}
if(ESP.checkSkill(1)=="Hyper"&&ESP.checkSkill(2)=="Assassin"){
hass[0] = ESP.getUser();
ESP.sbm("Hyper Assassin on");
setTile(x, y, z, 246);
preventDefault();
}
if(ESP.checkSkill(1)=="Silent"&&ESP.checkSkill(2)=="Killer"){
sikill[0] = ESP.getUser();
ESP.sbm("Silent Killer on");
setTile(x, y, z, 246);
preventDefault();
}
if(ESP.checkSkill(1)=="Black"&&ESP.checkSkill(2)=="Slayer"){
black[0] = ESP.getUser();
ESP.sbm("Black Slayer on");
setTile(x, y, z, 246);
preventDefault();
}
if(ESP.checkSkill(1)=="The"&&ESP.checkSkill(2)=="Slasher"){
slash[0] = ESP.getUser();
ESP.sbm("The Slasher on");
setTile(x, y, z, 246);
preventDefault();
}
if(ESP.checkSkill(1)=="Night"&&ESP.checkSkill(2)=="Worker"){
night[0] = ESP.getUser();
ESP.sbm("Night Worker on");
setTile(x, y, z, 246);
preventDefault();
}
if(ESP.checkSkill(1)=="Light"&&ESP.checkSkill(2)=="Gemstone"){
gem[0] = ESP.getUser();
ESP.sbm("Light Gemstone on");
setTile(x, y, z, 246);
preventDefault();
}
if(ESP.checkSkill(1)=="The"&&ESP.checkSkill(2)=="Dracula"){
dra[0] = ESP.getUser();
ESP.sbm("The Dracula on");
setTile(x, y, z, 246);
if(mp3){
if(nightCheck()&&ESP.random(2)==0){
hhhhh = 150;
ESP.toast("They are coming...");
}
else if(!nightCheck()&&ESP.random(10)==0){
hhhhh = 150;
ESP.toast("They are coming...");
}
}
preventDefault();
}
if(ESP.checkSkill(1)=="Mushroom"&&ESP.checkSkill(2)=="Grower"){
if(mcpev){
mush[0] = ESP.getUser();
ESP.sbm("Mushroom Grower on");
setTile(x, y, z, 246);
}
else{
ESP.toast("0.8.1 이하에서는 사용할 수 없습니다");
}
preventDefault();
}
if(ESP.checkSkill(1)=="Ender"&&ESP.checkSkill(2)=="Girl"){
if(mcpev){
ender[0] = ESP.getUser();
ESP.sbm("Ender Girl on");
setTile(x, y, z, 246);
}
else{
ESP.toast("0.8.1 이하에서는 사용할 수 없습니다");
}
preventDefault();
}
if(ESP.checkSkill(1)=="Taiga"&&ESP.checkSkill(2)=="Appearer"){
if(mcpev){
taiga[0] = ESP.getUser();
ESP.sbm("Taiga Appearer on");
setTile(x, y, z, 246);
}
else{
ESP.toast("0.8.1 이하에서는 사용할 수 없습니다");
}
preventDefault();
}
if(ESP.checkSkill(1)=="The"&&ESP.checkSkill(2)=="Ruiner"){
ruin[0] = ESP.getUser();
ESP.sbm("The Ruiner on");
setTile(x, y, z, 246);
preventDefault();
}
if(ESP.checkSkill(1)=="Swamp"&&ESP.checkSkill(2)=="Generater"){
if(mcpev){
swamp[0] = ESP.getUser();
ESP.sbm("Swamp Generater on");
setTile(x, y, z, 246);
}
else{
ESP.toast("0.8.1 이하에서는 사용할 수 없습니다");
}
preventDefault();
}
if(ESP.checkSkill(1)=="Arch"&&ESP.checkSkill(2)=="Summoner"){
if(mcpev){
asum[0] = ESP.getUser();
ESP.sbm("Arch Summoner on");
setTile(x, y, z, 246);
}
else{
ESP.toast("0.8.1 이하에서는 사용할 수 없습니다");
}
preventDefault();
}
if(ESP.checkSkill(1)=="Arch"&&ESP.checkSkill(2)=="Mage"){
amage[0] = ESP.getUser();
ESP.sbm("Arch Mage on");
setTile(x, y, z, 246);
preventDefault();
}
if(ESP.checkSkill(1)=="Puella"&&ESP.checkSkill(2)=="Magica"){
puella[0] = ESP.getUser();
ESP.sbm("Puella Magica on");
setTile(x, y, z, 246);
preventDefault();
}
if(ESP.checkSkill(1)=="Hyper"&&ESP.checkSkill(2)=="Builder"){
hbuild[0] = ESP.getUser();
ESP.sbm("Hyper Builder on");
setTile(x, y, z, 246);
preventDefault();
}
if(ESP.checkSkill(1)=="Scalar"&&ESP.checkSkill(2)=="Increaser"){
scalar[0] = ESP.getUser();
ESP.sbm("Scalar Increaser on");
setTile(x, y, z, 246);
preventDefault();
}
if(ESP.checkSkill(1)=="Vector"&&ESP.checkSkill(2)=="Reflacter"){
vector[0] = ESP.getUser();
ESP.sbm("Vector Reflacter on");
setTile(x, y, z, 246);
preventDefault();
}
if(ESP.checkSkill(1)=="Tensor"&&ESP.checkSkill(2)=="Veerer"){
tensor[0] = ESP.getUser();
ESP.sbm("Tensor Veerer on");
setTile(x, y, z, 246);
preventDefault();
}
if(ESP.checkSkill(1)=="Arch"&&ESP.checkSkill(2)=="Mechanic"){
ameca[0] = ESP.getUser();
ESP.sbm("Arch Mechanic on");
setTile(x, y, z, 246);
preventDefault();
}
if(ESP.checkSkill(1)=="The"&&ESP.checkSkill(2)=="Sealer"){
seal[0] = ESP.getUser();
ESP.sbm("The Sealer on");
setTile(x, y, z, 246);
preventDefault();
}
if(ESP.checkSkill(1)=="The"&&ESP.checkSkill(2)=="Archangel"){
angel[0] = ESP.getUser();
ESP.sbm("The Archangel on");
setTile(x, y, z, 246);
preventDefault();
}
if(ESP.checkSkill(1)=="White"&&ESP.checkSkill(2)=="Eye"){
white[0] = ESP.getUser();
ESP.sbm("White Eye on");
setTile(x, y, z, 246);
preventDefault();
}
if(ESP.checkSkill(1)=="Mental"&&ESP.checkSkill(2)=="Out"){
mental[0] = ESP.getUser();
ESP.sbm("Mental Out on");
setTile(x, y, z, 246);
preventDefault();
}
if(ESP.checkSkill(1)=="World"&&ESP.checkSkill(2)=="Editor"){
world[0] = ESP.getUser();
ESP.sbm("World Editor on");
setTile(x, y, z, 246);
preventDefault();
}

if(ESP.checkSkill(1)=="Dark"&&ESP.checkSkill(2)=="Tornado jr."){
dtj = ESP.getUser();
ESP.sbm("Dark Tornado jr. on");
setTile(x, y, z, 246);
preventDefault();
}
if(ESP.checkSkill(1)=="Fire"&&ESP.checkSkill(2)=="Expert"){
fe = ESP.getUser();
ESP.sbm("Fire Expert on");
setTile(x, y, z, 246);
preventDefault();
}
if(ESP.checkSkill(1)=="Hidden"&&ESP.checkSkill(2)=="Ability"){
h.rrr = ESP.getUser();
ESP.sbm("Hidden Ability on");
setTile(x, y, z, 246);
preventDefault();
}
if(ESP.checkSkill(1)=="Kaian"&&ESP.checkSkill(2)=="Pon Kalropon"){
kaian = ESP.getUser();
ESP.sbm("Kaian Pon Kalropon on");
setTile(x, y, z, 246);
preventDefault();
}

if(ESP.checkSkill(1)=="I am"&&ESP.checkSkill(2)=="Ace"){
l.fire = ESP.getUser();
ESP.sbm("I am Ace on");
setTile(x, y, z, 246);
preventDefault();
}
if(ESP.checkSkill(1)=="I am"&&ESP.checkSkill(2)=="Aokizi"){
l.ice = ESP.getUser();
ESP.sbm("I am Aokizi on");
setTile(x, y, z, 246);
preventDefault();
}
if(ESP.checkSkill(1)=="The"&&ESP.checkSkill(2)=="D"){
l.d = ESP.getUser();
ESP.sbm("The D on");
setTile(x, y, z, 246);
preventDefault();
}
if(ESP.checkSkill(1)=="I am"&&ESP.checkSkill(2)=="Alex"){
l.alex = ESP.getUser();
ESP.sbm("I am Alex on");
setTile(x, y, z, 246);
preventDefault();
}
if(ESP.checkSkill(1)=="The"&&ESP.checkSkill(2)=="T"){
l.t = ESP.getUser();
ESP.sbm("The T on");
setTile(x, y, z, 246);
preventDefault();
}

//-----
if(ESP.checkSkill(1)=="토르"){
t2hor = ESP.getUser();
}
if(ESP.checkSkill(1)=="포세이돈"){
w2ater = ESP.getUser();
}
if(ESP.checkSkill(1)=="카이지"){
k2ill = ESP.getUser();
}
if(ESP.checkSkill(1)=="미사카 미코토"){
m2isaka = ESP.getUser();
}
if(ESP.checkSkill(1)=="엘사"){
e2lsa = ESP.getUser();
}
if(ESP.checkSkill(1)=="푸서"){
p2ush = ESP.getUser();
}
if(ESP.checkSkill(1)=="에이스"){
f2ire = ESP.getUser();
}
if(ESP.checkSkill(1)=="패스터"){
f2aster = ESP.getUser();
}
if(ESP.checkSkill(1)=="록 리"){
k2ick = ESP.getUser();
}
if(ESP.checkSkill(1)=="목둔"){
t2ree = ESP.getUser();
}
if(ESP.checkSkill(1)=="아카이누"){
l2ava = ESP.getUser();
}
if(ESP.checkSkill(1)=="슬로워"){
b2ind = ESP.getUser();
}
if(ESP.checkSkill(1)=="가아라"){
s2and = ESP.getUser();
}
//---
if(ESP.checkSkill(1)=="I am"){
var uEsps = ["Flowey", "Toriel", "Napstablock", "Sans", "Papyrus", "Kid", "Undyne", "Temmie", "Alphys", "Mettaton", "Muffet", "Asgore", "Frisk", "Chara", "Gaster"];
for(var n=0;n<15;n++){
if(ESP.checkSkill(2)==uEsps[n]){
u[n].p = ESP.getUser();
ESP.sbm("I am "+uEsps[n]+" on");
setTile(x, y, z, 246);
preventDefault();
break;
}
}
}

}

if(b==255&&Level.getSignText(x, y+1, z, 1)=="Hidden"&&Level.getSignText(x, y+1, z, 2)=="Ability"){
setTile(x, y, z, 49);
ESP.toast("Hidden Ability 각성블록 활성화");
}

//off
if(b==246){
espch = [x, y, z];
for(var n=0;n<100;n++){
if(ra.n[n].search("I am")==-1) var cache = ra.n[n].split(" ");
else var cache = ["I am", ra.n[n].substring(5, ra.n[n].length)];
if(ESP.checkSkill(1)==cache[0]&&ESP.checkSkill(2)==cache[1]){
SB.espOff(n);
SB.removeUserData(n, -1);
ESP.sbm(ra.n[n]+" off");
setTile(x, y, z, 49);
preventDefault();
break;
}
}

if(ESP.checkSkill(1)=="Dark"&&ESP.checkSkill(2)=="Tornado jr."){
dtj = null;
ESP.sbm("Dark Tornado jr. off");
setTile(x, y, z, 49);
preventDefault();
}
if(ESP.checkSkill(1)=="Fire"&&ESP.checkSkill(2)=="Expert"){
fe = null;
ESP.sbm("Fire Expert off");
setTile(x, y, z, 49);
preventDefault();
}
if(ESP.checkSkill(1)=="Hidden"&&ESP.checkSkill(2)=="Ability"){
h.rrr = null;
ESP.sbm("Hidden Ability off");
setTile(x, y, z, 49);
preventDefault();
}
if(ESP.checkSkill(1)=="Kaian"&&ESP.checkSkill(2)=="Pon Kalropon"){
kaian = null;
ESP.sbm("Kaian Pon Kalropon off");
setTile(x, y, z, 49);
preventDefault();
}

if(ESP.checkSkill(1)=="I am"&&ESP.checkSkill(2)=="Ace"){
l.fire = null;
ESP.sbm("I am Ace off");
setTile(x, y, z, 49);
preventDefault();
}
if(ESP.checkSkill(1)=="I am"&&ESP.checkSkill(2)=="Aokizi"){
l.ice = null;
ESP.sbm("I am Aokizi off");
setTile(x, y, z, 49);
preventDefault();
}
if(ESP.checkSkill(1)=="The"&&ESP.checkSkill(2)=="D"){
l.d = null;
ESP.sbm("The D off");
setTile(x, y, z, 49);
preventDefault();
}
if(ESP.checkSkill(1)=="I am"&&ESP.checkSkill(2)=="Alex"){
l.alex = null;
ESP.sbm("I am Alex off");
setTile(x, y, z, 49);
preventDefault();
}
if(ESP.checkSkill(1)=="The"&&ESP.checkSkill(2)=="T"){
l.t = null;
ESP.sbm("The T off");
setTile(x, y, z, 49);
preventDefault();
}

//-----
if(ESP.checkSkill(1)=="토르"){
t2hor = null;
}
if(ESP.checkSkill(1)=="포세이돈"){
w2ater = null;
}
if(ESP.checkSkill(1)=="카이지"){
k2ill = null;
}
if(ESP.checkSkill(1)=="미사카 미코토"){
m2isaka = null;
}
if(ESP.checkSkill(1)=="엘사"){
e2lsa = null;
}
if(ESP.checkSkill(1)=="푸서"){
p2ush = null;
}
if(ESP.checkSkill(1)=="에이스"){
f2ire = null;
}
if(ESP.checkSkill(1)=="패스터"){
f2aster = null;
}
if(ESP.checkSkill(1)=="록 리"){
k2ick = null;
}
if(ESP.checkSkill(1)=="목둔"){
t2ree = null;
}
if(ESP.checkSkill(1)=="아카이누"){
l2ava = null;
}
if(ESP.checkSkill(1)=="슬로워"){
b2ind = null;
}
if(ESP.checkSkill(1)=="가아라"){
s2and = null;
}
//---
if(ESP.checkSkill(1)=="I am"){
var uEsps = ["Flowey", "Toriel", "Napstablock", "Sans", "Papyrus", "Kid", "Undyne", "Temmie", "Alphys", "Mettaton", "Muffet", "Asgore", "Frisk", "Chara", "Gaster"];
for(var n=0;n<15;n++){
if(ESP.checkSkill(2)==uEsps[n]){
u[n].p = null;
ESP.sbm("I am "+uEsps[n]+" off");
setTile(x, y, z, 49);
preventDefault();
break;
}
}
}

}

}

//reset
if(b==103&&Level.getSignText(x, y+1, z, 1)=="Reset"){
ESP.reset();
preventDefault();
ESP.sbm("Every ability was reseted.", true);
}
//support
if(b==91){
Level.dropItem(x, y+1.1, z, 0, 302, 1, 0);
Level.dropItem(x, y+1.1, z, 0, 303, 1, 0);
Level.dropItem(x, y+1.1, z, 0, 304, 1, 0);
Level.dropItem(x, y+1.1, z, 0, 305, 1, 0);
Level.dropItem(x, y+1.1, z, 0, 267, 1, 0);
Level.dropItem(x, y+1.1, z, 0, 354, 30, 0);
Level.dropItem(x, y+1.1, z, 0, 320, 30, 0);
if(mcpev4){
Level.dropItem(x, y+1.1, z, 0, 373, 30, 28);
Level.dropItem(x, y+1.1, z, 0, 373, 15, 30);
}
Level.dropItem(x, y+1.1, z, 0, 306, 1, 0);
Level.dropItem(x, y+1.1, z, 0, 307, 1, 0);
Level.dropItem(x, y+1.1, z, 0, 308, 1, 0);
Level.dropItem(x, y+1.1, z, 0, 309, 1, 0);
preventDefault();
}

//Skills
if(!((b==49||b==246||b==22)&&((getTile(x, y+1, z)==63)||(getTile(x, y+1, z)==68)))&&!townCheck(x, z)&&espOnoff){
if(fire[0]!=null){
for(var n=0;n<fire.length;n++){
if(fire[n]==ESP.getUser()){
if(i==302&&Cool.isFinished(f1a[n])){
for(var xx=x-1;xx<x+2;xx++)
for(var zz=z-1;zz<z+2;zz++)
setTile(xx, y+1, zz, 51);
setTile(x, y+1, z+2, 51);
setTile(x, y+1, z-2, 51);
setTile(x-2, y+1, z, 51);
setTile(x+2, y+1, z, 51);
f1[n] = true;
f1a[n] = 150;
skillCool(ESP.getUser(), 1);
}
if(i==303&&Cool.isFinished(f2a[n])){
for(var xx=x-1;xx<x+2;xx++){
for(var zz=z-1;zz<z+2;zz++){
for(var yy=y-1;yy<y+1;yy++)
setTile(xx, yy, zz, 0);
setTile(xx, y-2, zz, 51);
setTile(xx, y-3, zz, 87);
}}
f2x[n] = x;
f2y[n] = y;
f2z[n] = z;
f2[n] = true;
f2a[n] = 300;
skillCool(ESP.getUser(), 2);
}
if(i==304&&Cool.isFinished(f3a[n])){
px = Player.getX();
pz = Player.getZ();
yaw = Math.floor(getYaw());
sin = -Math.sin(yaw/180*Math.PI);
cos = Math.cos(yaw/180*Math.PI);
for(var f3b=3;f3b<30;f3b++){
setTile(px+f3b*sin, y+1, pz+f3b*cos, 51);
setTile(px+f3b*sin+1, y+1, pz+f3b*cos+1, 51);
}
f3[n] = true;
f3a[n] = 300;
skillCool(ESP.getUser(), 3);
}
if(i==305){
if(Cool.isFalse(f4d[n])&&Cool.isFinished(f4a[n])){
ESP.sbm("Burning Area", true);
ESP.heal(fire[n]);
fx[n] = Player.getX();
fy[n] = Player.getY()-2;
fz[n] = Player.getZ();
for(var xx=fx[n]-10;xx<fx[n]+11;xx++){
for(var zz=fz[n]-10;zz<fz[n]+11;zz++){
setTile(xx,fy[n],zz,87);}}
for(var xx=fx[n]-1;xx<fx[n]+2;xx++)
for(var zz=fz[n]-1;zz<fz[n]+2;zz++)
setTile(xx, fy[n], zz, 89);
for(var xx=fx[n]-10;xx<fx[n]+11;xx++){
for(var zz=fz[n]-10;zz<fz[n]+11;zz++){
setTile(xx,fy[n]+1,zz,51);}}
setTile(fx[n]+12, fy[n], fz[n]+12, 11);
setTile(fx[n]+12, fy[n], fz[n]-12, 11);
setTile(fx[n]-12, fy[n], fz[n]+12, 11);
setTile(fx[n]-12, fy[n], fz[n]-12, 11);
setTile(fx[n]+12, fy[n], fz[n], 11);
setTile(fx[n], fy[n], fz[n]+12, 11);
setTile(fx[n]-12, fy[n], fz[n], 11);
setTile(fx[n], fy[n], fz[n]-12, 11);
for(var xx=fx[n]-11;xx<fx[n]+12;xx++){
setTile(xx, fy[n]+2, fz[n]+11, 87);
setTile(xx, fy[n]+2, fz[n]-11, 87);
setTile(xx, fy[n]+3, fz[n]+11, 51);
setTile(xx, fy[n]+3, fz[n]-11, 51);
}
for(var zz=fz[n]-10;zz<fz[n]+11;zz++){
setTile(fx[n]+11, fy[n]+2, zz, 87);
setTile(fx[n]-11, fy[n]+2, zz, 87);
setTile(fx[n]+11, fy[n]+3, zz, 51);
setTile(fx[n]-11, fy[n]+3, zz, 51);
}
arroundMobHealthDown(fire[n], 15, 4);
f4b[n] = 600;
f4c[n] = true;
f4[n] = true;
f4a[n] = 1800;
skillCool(ESP.getUser(), 4);
f4d[n] = true;
}
else if(f4d[n]){
f4b[n] = 1;
}
}
break;
}}}
if(water[0]!=null){
for(var n=0;n<water.length;n++){
if(water[n]==ESP.getUser()){
if(i==302&&Cool.isFinished(w1a[n])){
setTile(x, y+1, z, 8);
w1b[n] = 75;
w1c[n] = true;
wx[n] = x;
wy[n] = y;
wz[n] = z;
w1[n] = true;
w1a[n] = 150;
skillCool(ESP.getUser(), 1);
}
if(i==303&&Cool.isFinished(w2a[n])){
for(var xx=x-2;xx<x+3;xx++)
for(var zz=z-2;zz<z+3;zz++)
setTile(xx, y, zz, 0);
setTile(x+2, y, z+2, 8);
setTile(x-2, y, z+2, 8);
setTile(x+2, y, z-2, 8);
setTile(x-2, y, z-2, 8);
w2x[n] = x;
w2y[n] = y;
w2z[n] = z;
w2[n] = true;
w2a[n] = 300;
skillCool(ESP.getUser(), 2);
}
if(i==304&&Cool.isFinished(w3a[n])){
wxb[n] = Player.getX();
wyb[n] = Player.getY()-2;
wzb[n] = Player.getZ();
for(var xx=wxb[n]-2;xx<wxb[n]+3;xx++)
for(var zz=wzb[n]-2;zz<wzb[n]+3;zz++)
setTile(xx, wyb[n]+1, zz, 79);
for(var xx=wxb[n]-1;xx<wxb[n]+2;xx++)
for(var zz=wzb[n]-1;zz<wzb[n]+2;zz++)
setTile(xx, wyb[n]+1, zz, 0);
setTile(wxb[n]+3, wyb[n]+1, wzb[n], 8);
setTile(wxb[n]-3, wyb[n]+1, wzb[n], 8);
setTile(wxb[n], wyb[n]+1, wzb[n]+3, 8);
setTile(wxb[n], wyb[n]+1, wzb[n]-3, 8);
w3b[n] = 225;
w3c[n] = true;
w3[n] = true;
w3a[n] = 300;
skillCool(ESP.getUser(), 3);
}
if(i==305&&Cool.isFinished(w4a)){
ESP.sbm("Wide Flood", true);
ESP.heal(water[n]);
arroundMobHealthDown(water[n], 20, 7);
for(var xx=x-11;xx<x+12;xx++){
for(var zz=z-11;zz<z+12;zz++){
setTile(xx,y,zz,0);}}
setTile(x+9, y+10, z+9, 8);
setTile(x+9, y+10, z-9, 8);
setTile(x-9, y+10, z+9, 8);
setTile(x-9, y+10, z-9, 8);
setTile(x+9, y+10, z, 8);
setTile(x-9, y+10, z, 8);
setTile(x, y+10, z+9, 8);
setTile(x, y+10, z-9, 8);
setTile(x+1, y, z, 79);
setTile(x-1, y, z, 79);
setTile(x, y, z+1, 79);
setTile(x, y, z-1, 79);
w4b[n] = 600;
w4c[n] = true;
wxa[n] = x;
wya[n] = y;
wza[n] = z;
w4[n] = true;
w4a[n] = 1800;
skillCool(ESP.getUser(), 4);
}
break;
}}}
if(tree[0]!=null){
for(var n=0;n<tree.length;n++){
if(tree[n]==ESP.getUser()){
if(i==302&&Cool.isFinished(t1a[n])){
for(var yy=y+1;yy<y+7;yy++)
setTile(x, yy, z, 17);
setTile(x, y+7, z, 18);
for(var yy=y+6;yy<y+8;yy++){
setTile(x+1, yy, z, 18);
setTile(x, yy, z-1, 18);
setTile(x, yy, z+1, 18);
setTile(x-1, yy, z, 18);
}
for(var yy=y+4;yy<y+6;yy++){
setTile(x+1, yy, z+1, 18);
setTile(x+1, yy, z-1, 18);
setTile(x+1, yy, z, 18);
setTile(x-1, yy, z+1, 18);
setTile(x-1, yy, z-1, 18);
setTile(x-1, yy, z, 18);
setTile(x, yy, z+1, 18);
setTile(x, yy, z-1, 18);
setTile(x+2, yy, z+1, 18);
setTile(x+2, yy, z-1, 18);
setTile(x+2, yy, z, 18)
setTile(x-2, yy, z+1, 18);
setTile(x-2, yy, z-1, 18);
setTile(x-2, yy, z, 18);
setTile(x+1, yy, z+2, 18);
setTile(x-1, yy, z+2, 18);
setTile(x, yy, z+2, 18);
setTile(x+1, yy, z-2, 18);
setTile(x-1, yy, z-2, 18);
setTile(x, yy, z-2, 18);
}
t1[n] = true;
t1a[n] = 150;
skillCool(ESP.getUser(), 1);
}
if(i==303&&Cool.isFinished(t2a[n])){
for(var yy=y+1;yy<y+4;yy++){
setTile(x+2, yy, z+2, 17);
setTile(x+1, yy, z+2, 17);
setTile(x, yy, z+2, 17);
setTile(x-1, yy, z+2, 17);
setTile(x-2, yy, z+2, 17);
setTile(x+2, yy, z-2, 17);
setTile(x+1, yy, z-2, 17);
setTile(x, yy, z-2, 17);
setTile(x-1, yy, z-2, 17);
setTile(x-2, yy, z-2, 17);
setTile(x-2, yy, z+1, 17);
setTile(x-2, yy, z, 17);
setTile(x-2, yy, z-1, 17);
setTile(x+2, yy, z+1, 17);
setTile(x+2, yy, z, 17);
setTile(x+2, yy, z-1, 17);
}
for(var xx=x-1;xx<x+2;xx++)
for(var zz=z-1;zz<z+2;zz++)
setTile(xx, y+4, zz, 17);
setTile(x, y, z, 87);
setTile(x, y+1, z, 51);
t2[n] = true;
t2a[n] = 300;
skillCool(ESP.getUser(), 2);
}
if(i==304&&Cool.isFinished(t3a[n])){
t3[n] = true;
t3a[n] = 300;
skillCool(ESP.getUser(), 3);
}
if(i==305&&Cool.isFinished(t4a[n])){
if(Cool.isFalse(t4b[n])){
ESP.sbm("Lava Leaf...", true);
for(var xx=x-12;xx<x+13;xx++){
for(var zz=z-12;zz<z+13;zz++){
setTile(xx,y,zz,18);}}
tx[n] = x;
ty[n] = y;
tz[n] = z;
t4b[n] = true;
}
else if(t4b[n]){
ESP.sbm("Lava Leaf", true);
ESP.heal(tree[n]);
t4b[n] = false;
for(var xx=tx[n]-13;xx<tx[n]+14;xx++){
for(var zz=tz[n]-13;zz<tz[n]+14;zz++){
setTile(xx,ty[n]+2,zz,18);}}
for(var xx=tx[n]-12;xx<tx[n]+13;xx++){
for(var zz=tz[n]-12;zz<tz[n]+13;zz++){
setTile(xx,ty[n]+2,zz,0);}}
for(var xx=tx[n]-11;xx<tx[n]+12;xx++){
for(var zz=tz[n]-11;zz<tz[n]+12;zz++){
setTile(xx,ty[n]-1,zz,11);}}
for(var yy=ty[n]+1;yy<ty[n]+7;yy++)
setTile(tx[n], yy, tz[n], 17);
setTile(tx[n], ty[n]+7, tz[n], 18);
for(var yy=ty[n]+4;yy<ty[n]+8;yy++){
setTile(tx[n]+1, yy, tz[n], 18);
setTile(tx[n], yy, tz[n]-1, 18);
setTile(tx[n], yy, tz[n]+1, 18);
setTile(tx[n]-1, yy, tz[n], 18);
}
for(var yy=ty[n]+4;yy<ty[n]+6;yy++){
setTile(tx[n]+1, yy, tz[n]+1, 18);
setTile(tx[n]+1, yy, tz[n]-1, 18);
setTile(tx[n]-1, yy, tz[n]+1, 18);
setTile(tx[n]-1, yy, tz[n]-1, 18);
}
setTile(tx[n]+2, ty[n]+5, tz[n]+1, 18);
setTile(tx[n]+2, ty[n]+5, tz[n]-1, 18);
setTile(tx[n]+2, ty[n]+5, tz[n], 18);
setTile(tx[n]-2, ty[n]+5, tz[n]+1, 18);
setTile(tx[n]-2, ty[n]+5, tz[n]-1, 18);
setTile(tx[n]-2, ty[n]+5, tz[n], 18);
setTile(tx[n]+1, ty[n]+5, tz[n]+2, 18);
setTile(tx[n]-1, ty[n]+5, tz[n]+2, 18);
setTile(tx[n], ty[n]+5, tz[n]+2, 18);
setTile(tx[n]+1, ty[n]+5, tz[n]-2, 18);
setTile(tx[n]-1, ty[n]+5, tz[n]-2, 18);
setTile(tx[n], ty[n]+5, tz[n]-2, 18);
setTile(tx[n]+2, ty[n]+4, tz[n]+1, 18);
setTile(tx[n]+2, ty[n]+4, tz[n]-1, 18);
setTile(tx[n]+2, ty[n]+4, tz[n], 18);
setTile(tx[n]-2, ty[n]+4, tz[n]+1, 18);
setTile(tx[n]-2, ty[n]+4, tz[n]+1, 18);
setTile(tx[n]-2, ty[n]+4, tz[n], 18);
setTile(tx[n]+1, ty[n]+4, tz[n]+2, 18);
setTile(tx[n]-1, ty[n]+4, tz[n]+2, 18);
setTile(tx[n], ty[n]+4, tz[n]+2, 18);
setTile(tx[n]+1, ty[n]+4, tz[n]-2, 18);
setTile(tx[n]-1, ty[n]+4, tz[n]-2, 18);
setTile(tx[n], ty[n]+4, tz[n]-2, 18);
t4[n] = true;
t4a[n] = 1800;
skillCool(ESP.getUser(), 4);
}
}
break;
}}}
if(creeper[0]!=null){
for(var n=0;n<creeper.length;n++){
if(creeper[n]==ESP.getUser()){
if(i==302&&Cool.isFinished(c1a[n])){
ESP.antiLack(5);
explode(x, y, z, 3);
if(Cool.isFinished(c1d[n])){
c1b[n] = 270;
c1c[n] = true;
c1d[n] = 1;
cx[n] = x;
cy[n] = y;
cz[n] = z;
}
else if(c1d[n]==1){
c1e[n] = 270;
c1f[n] = true;
c1d[n] = 0;
cx1[n] = x;
cy1[n] = y;
cz1[n] = z;
}
c1[n] = true;
c1a[n] = 150;
skillCool(ESP.getUser(), 1);
}
if(i==303&&Cool.isFinished(c2a[n])){
Level.spawnMob(x+0.5, y+12, z+0.5, 65);
setTile(x, y+1, z, 46);
setTile(x, y+2, z, 46);
c2x[n] = x;
c2y[n] = y;
c2z[n] = z;
ESP.antiLack(90);
c2[n] = true;
c2a[n] = 300;
skillCool(ESP.getUser(), 2);
}
if(i==304&&Cool.isFinished(c3a[n])){
ESP.antiLack(5);
cx3[n] = Player.getX();
cy3[n] = Player.getY()-2;
cz3[n] = Player.getZ();
explode(cx3[n]+7, cy3[n], cz3[n]+7, 3);
explode(cx3[n]+7, cy3[n], cz3[n]-7, 3);
explode(cx3[n]+7, cy3[n], cz3[n], 3);
explode(cx3[n]-7, cy3[n], cz3[n]+7, 3);
explode(cx3[n]-7, cy3[n], cz3[n]-7, 3);
explode(cx3[n]-7, cy3[n], cz3[n], 3);
explode(cx3[n], cy3[n], cz3[n]+7, 3);
explode(cx3[n], cy3[n], cz3[n]-7, 3);
c3[n] = true;
c3a[n] = 300;
skillCool(ESP.getUser(), 3);
}
if(i==305&&Cool.isFinished(c4a[n])){
ESP.sbm("Meteor", true);
ESP.heal(creeper[n]);
ESP.antiLack(90);
explode(x+8.5,y+1.5,z+8.5, 3.5);
explode(x+8.5,y+1.5,z-7.5, 3.5);
explode(x-7.5,y+1.5,z+8.5, 3.5);
explode(x-7.5,y+1.5,z-7.5, 3.5);
Level.spawnMob(x, y+5, z, 65);
Level.spawnMob(x+4, y+7, z, 65);
Level.spawnMob(x, y+15, z-7, 65);
Level.spawnMob(x-7, y+5, z-4, 65);
Level.spawnMob(x+6, y+17, z+3, 65);
Level.spawnMob(x-4, y+10, z-10, 65);
Level.spawnMob(x-5, y+7, z, 65);
Level.spawnMob(x, y+14, z+8, 65);
Level.spawnMob(x-9, y+9, z, 65);
Level.spawnMob(x-3, y+18, z+9, 65);
Level.spawnMob(x-2, y+13, z-6, 65);
Level.spawnMob(x+7, y+10, z-5, 65);
Level.spawnMob(x-5, y+8, z+5, 65);
Level.spawnMob(x-2, y+10, z+4, 65);
Level.spawnMob(x+2, y+7, z-4, 65);
Level.spawnMob(x+9, y+3, z+6, 65);
Level.spawnMob(x+9, y+15, z-3, 65);
Level.spawnMob(x-2, y+6, z-2, 65);
Level.spawnMob(x+3, y+6, z+5, 65);
cx2[n] = x;
cy2[n] = y;
cz2[n] = z;
c4[n] = true;
c4a[n] = 1800;
skillCool(ESP.getUser(), 4);
}
break;
}}}
if(soil[0]!=null){
for(var n=0;n<soil.length;n++){
if(soil[n]==ESP.getUser()){
if(i==302&&Cool.isFinished(s1a[n])){
setTile(x+1, y, z+1, 13);
setTile(x+1, y, z, 13);
setTile(x+1, y, z-1, 13);
setTile(x, y, z+1, 13);
setTile(x, y, z, 13);
setTile(x, y, z-1, 13);
setTile(x-1, y, z+1, 13);
setTile(x-1, y, z, 13);
setTile(x-1, y, z-1, 13);
for(var yy=y-2;yy<y;yy++){
setTile(x+1, yy, z+1, 0);
setTile(x+1, yy, z, 0);
setTile(x+1, yy, z-1, 0);
setTile(x, yy, z+1, 0);
setTile(x, yy, z, 0);
setTile(x, yy, z-1, 0);
setTile(x-1, yy, z+1, 0);
setTile(x-1, yy, z, 0);
setTile(x-1, yy, z-1, 0);
}
for(var yy=y+7;yy<y+9;yy++){
setTile(x+1, yy, z-1, 13);
setTile(x+1, yy, z, 13);
setTile(x+1, yy, z+1, 13);
setTile(x, yy, z-1, 13);
setTile(x, yy, z, 13);
setTile(x, yy, z+1, 13);
setTile(x-1, yy, z-1, 13);
setTile(x-1, yy, z, 13);
setTile(x-1, yy, z+1, 13);
}
s1[n] = true;
s1a[n] = 150;
skillCool(ESP.getUser(), 1);
}
if(i==303&&Cool.isFinished(s2a[n])){
for(var xx=x-1;xx<x+2;xx++)
for(var yy=y-3;yy<y+1;yy++)
for(var zz=z-1;zz<z+2;zz++)
setTile(xx, yy, zz, 0);
setTile(x, y-3, z, 11);
s2x[n] = x;
s2y[n] = y;
s2z[n] = z;
s2[n] = true;
s2a[n] = 300;
skillCool(ESP.getUser(), 2);
}
if(i==304&&Cool.isFinished(s3a[n])){
for(var xx=x-1;xx<x+2;xx++){
for(var zz=z-1;zz<z+2;zz++){
setTile(xx, y+4, zz, 24);
setTile(xx, y, zz, 0);
}}
setTile(x-1, y+1, z+2, 24);
setTile(x, y+1, z+2, 24);
setTile(x+1, y+1, z+2, 24);
setTile(x-1, y+2, z+2, 24);
setTile(x, y+2, z+2, 24);
setTile(x+1, y+2, z+2, 24);
setTile(x, y+3, z+2, 24);
setTile(x+1, y+3, z+2, 24);
setTile(x-1, y+3, z+2, 24);
setTile(x+2, y+1, z+1, 24);
setTile(x+2, y+1, z, 24);
setTile(x+2, y+1, z-1, 24);
setTile(x+2, y+2, z+1, 24);
setTile(x+2, y+2, z, 24);
setTile(x+2, y+2, z-1, 24);
setTile(x+2, y+3, z+1, 24);
setTile(x+2, y+3, z, 24);
setTile(x+2, y+3, z-1, 24);
setTile(x-2, y+1, z+1, 24);
setTile(x-2, y+1, z, 24);
setTile(x-2, y+1, z-1, 24);
setTile(x-2, y+2, z+1, 24);
setTile(x-2, y+2, z, 24);
setTile(x-2, y+2, z-1, 24);
setTile(x-2, y+3, z+1, 24);
setTile(x-2, y+3, z, 24);
setTile(x-2, y+3, z-1, 24);
setTile(x-1, y+1, z-2, 24);
setTile(x, y+1, z-2, 24);
setTile(x+1, y+1, z-2, 24);
setTile(x-1, y+2, z-2, 24);
setTile(x, y+2, z-2, 24);
setTile(x+1, y+2, z-2, 24);
setTile(x, y+3, z-2, 24);
setTile(x+1, y+3, z-2, 24);
setTile(x-1, y+3, z-2, 24);
setTile(x, y, z, 11);
s3[n] = true;
s3a[n] = 300;
skillCool(ESP.getUser(), 3);
}
if(i==305&&Cool.isFinished(s4a[n])){
ESP.sbm("Sink Hole", true);
ESP.heal(soil[n]);
sx[n] = Player.getX();
sy[n] = Player.getY()-2;
sz[n] = Player.getZ();
for(var xx=sx[n]-9;xx<sx[n]+10;xx++)
for(var yy=sy[n]-4;yy<sy[n]+1;yy++)
for(var zz=sz[n]-9;zz<sz[n]+10;zz++)
setTile(xx,yy,zz,0);
for(var xx=sx[n]-9;xx<sx[n]+10;xx++)
for(var zz=sz[n]-9;zz<sz[n]+10;zz++)
setTile(xx,sy[n]-5,zz,13);
setTile(sx[n]+7, sy[n]-4, sz[n]+7, 10);
setTile(sx[n]+7, sy[n]-4, sz[n]-7, 10);
setTile(sx[n]-7, sy[n]-4, sz[n]+7, 10);
setTile(sx[n]-7, sy[n]-4, sz[n]-7, 10);
setTile(sx[n]+7, sy[n]-4, sz[n], 10);
setTile(sx[n]-7, sy[n]-4, sz[n], 10);
setTile(sx[n], sy[n]-4, sz[n]+7, 10);
setTile(sx[n], sy[n]-4, sz[n]-7, 10);
for(var xx=sx[n];xx<sx[n]+10;xx++)
setTile(xx, sy[n], sz[n], 1);
s4[n] = true;
s4a[n] = 1800;
skillCool(ESP.getUser(), 4);
}
break;
}}}
if(summon[0]!=null){
for(var n=0;n<summon.length;n++){
if(summon[n]==ESP.getUser()){
if(i==302&&Cool.isFinished(ss1a[n])){
for(var m=0;m<4;m++)
Level.spawnMob(x+3, y+2, z, 32);
Level.spawnMob(x, y+2, z, 36);
Level.spawnMob(x, y+2, z, 36);
ss1[n] = true;
ss1a[n] = 150;
skillCool(ESP.getUser(), 1);
}
if(i==303&&Cool.isFinished(ss2a[n])){
for(var m=0;m<5;m++)
Level.spawnMob(x, y+2, z, 33);
ss2[n] = true;
ss2a[n] = 300;
skillCool(ESP.getUser(), 2);
}
if(i==304&&Cool.isFinished(ss3a[n])){
Level.spawnMob(x, y+2, z, 34);
Level.spawnMob(x+2, y+2, z, 34);
Level.spawnMob(x-2, y+2, z, 34);
Level.spawnMob(x, y+2, z+2, 34);
Level.spawnMob(x, y+2, z-2, 34);
var uuu, ooo;
for(var m=0;m<3;m++){
uuu = Level.spawnMob(x,y+3,z,35);
ooo = Level.spawnMob(x,y+3,z,34);
rideAnimal(ooo, uuu);
}
ss3[n] = true;
ss3a[n] = 300;
skillCool(ESP.getUser(), 3);
}
if(i==305&&Cool.isFinished(ss4a[n])){
ESP.sbm("Master Summon", true);
ESP.heal(summon[n]);
for(var nn=0;nn<12;nn++)
Level.spawnMob(x, y+3, z, 32);
var uuu, ooo;
for(var nn=0;nn<7;nn++){
Level.spawnMob(x, y+4, z, 33);
uuu = Level.spawnMob(x,y+3,z,35);
ooo = Level.spawnMob(x,y+3,z,34);
rideAnimal(ooo, uuu);
}
uuu = Level.spawnMob(x,y+3,z,12);
ooo = Level.spawnMob(x,y+3,z,36);
rideAnimal(ooo, uuu);
uuu = Level.spawnMob(x,y+3,z,12);
ooo = Level.spawnMob(x,y+3,z,36);
rideAnimal(ooo, uuu);
uuu = Level.spawnMob(x,y+3,z,12);
ooo = Level.spawnMob(x,y+3,z,36);
rideAnimal(ooo, uuu);
ss4[n] = true;
ss4a[n] = 1800;
skillCool(ESP.getUser(), 4);
}
break;
}}}
if(light[0]!=null){
for(var n=0;n<light.length;n++){
if(light[n]==ESP.getUser()){
if(i==302&&Cool.isFinished(l1a[n])){
setTile(x+1, y+1, z+1, 155);
setTile(x+1, y+1, z-1, 155);
setTile(x, y+1, z, 155);
setTile(x-1, y+1, z+1, 155);
setTile(x-1, y+1, z-1, 155);
setTile(x+1, y+2, z+1, 89);
setTile(x+1, y+2, z-1, 89);
setTile(x, y+2, z, 89);
setTile(x-1, y+2, z+1, 89);
setTile(x-1, y+2, z-1, 89);
setTile(x+1, y+1, z, 51);
setTile(x-1, y+1, z, 51);
setTile(x, y+1, z+1, 51);
setTile(x, y+1, z-1, 51);
l1[n] = true;
l1a[n] = 150;
skillCool(ESP.getUser(), 1);
}
if(i==303&&Cool.isFinished(l2a[n])){
ESP.makeBind(x, y, z, 155);
setTile(x, y+1, z, 51);
setTile(x, y+2, z, 30);
ESP.antiLack(90);
Level.spawnMob(x+0.5, y+10, z+0.5, 65);
l2[n] = true;
l2a[n] = 300;
skillCool(ESP.getUser(), 2);
}
if(i==304&&Cool.isFinished(l3a[n])){
ESP.makeBind(x, y, z, 155);
setTile(x+2, y+3, z, 8);
setTile(x-2, y+3, z, 8);
setTile(x, y+3, z+2, 8);
setTile(x, y+3, z-2, 8);
setTile(x, y+5, z, 89);
l3b[n] = 195;
l3c[n] = true;
lx[n] = x;
ly[n] = y;
lz[n] = z;
l3[n] = true;
l3a[n] = 300;
skillCool(ESP.getUser(), 3);
}
if(i==305&&Cool.isFinished(l4a[n])){
ESP.sbm("Holy Arrow Strike", true);
lxa[n] = Player.getX();
lya[n] = Player.getY()-2;
lza[n] = Player.getZ();
ESP.heal(light[n]);
setTile(lxa[n]+4, lya[n]+1, lza[n]+4, 30);
setTile(lxa[n]+4, lya[n]+1, lza[n]+2, 30);
setTile(lxa[n]+4, lya[n]+1, lza[n], 30);
setTile(lxa[n]+4, lya[n]+1, lza[n]-2, 30);
setTile(lxa[n]+4, lya[n]+1, lza[n]-4, 30);
setTile(lxa[n]+2, lya[n]+1, lza[n]+4, 30);
setTile(lxa[n]+2, lya[n]+1, lza[n]+2, 30);
setTile(lxa[n]+2, lya[n]+1, lza[n], 30);
setTile(lxa[n]+2, lya[n]+1, lza[n]-2, 30);
setTile(lxa[n]+2, lya[n]+1, lza[n]-4, 30);
setTile(lxa[n], lya[n]+1, lza[n]+4, 30);
setTile(lxa[n], lya[n]+1, lza[n]+2, 30);
setTile(lxa[n], lya[n]+1, lza[n]-2, 30);
setTile(lxa[n], lya[n]+1, lza[n]-4, 30);
setTile(lxa[n]-4, lya[n]+1, lza[n]+4, 30);
setTile(lxa[n]-4, lya[n]+1, lza[n]+2, 30);
setTile(lxa[n]-4, lya[n]+1, lza[n], 30);
setTile(lxa[n]-4, lya[n]+1, lza[n]-2, 30);
setTile(lxa[n]-4, lya[n]+1, lza[n]-4, 30);
setTile(lxa[n]-2, lya[n]+1, lza[n]+4, 30);
setTile(lxa[n]-2, lya[n]+1, lza[n]+2, 30);
setTile(lxa[n]-2, lya[n]+1, lza[n], 30);
setTile(lxa[n]-2, lya[n]+1, lza[n]-2, 30);
setTile(lxa[n]-2, lya[n]+1, lza[n]-4, 30);
setTile(lxa[n]+7, lya[n]+1, lza[n]+7, 30);
setTile(lxa[n]+7, lya[n]+1, lza[n]-7, 30);
setTile(lxa[n]-7, lya[n]+1, lza[n]+7, 30);
setTile(lxa[n]-7, lya[n]+1, lza[n]-7, 30);
setTile(lxa[n]+8, lya[n]+1, lza[n], 30);
setTile(lxa[n], lya[n]+1, lza[n]+8, 30);
setTile(lxa[n]-8, lya[n]+1, lza[n], 30);
setTile(lxa[n], lya[n]+1, lza[n]-8, 30);
setTile(lxa[n], lya[n]+5, lza[n], 89);
var cache2 = [];
for(var m=-4;m<5;m++){
for(var o=-4;o<5;o++){
var cache = Level.spawnMob(lxa[n]+3*m+0.5, lya[n]+32, lza[n]+2*o+0.5, 80);
Entity.setVelY(cache, -1);
cache2.push(cache);
}}
setTile(lxa[n]+9, lya[n]+10, lza[n]+9, 155);
setTile(lxa[n]+9, lya[n]+10, lza[n], 155);
setTile(lxa[n]+9, lya[n]+10, lza[n]-9, 155);
setTile(lxa[n], lya[n]+10, lza[n]+9, 155);
setTile(lxa[n], lya[n]+10, lza[n]-9, 155);
setTile(lxa[n]-9, lya[n]+10, lza[n]+9, 155);
setTile(lxa[n]-9, lya[n]+10, lza[n], 155);
setTile(lxa[n]-9, lya[n]+10, lza[n]-9, 155);
setTile(lxa[n]+9, lya[n]+9, lza[n]+9, 89);
setTile(lxa[n]+9, lya[n]+9, lza[n], 89);
setTile(lxa[n]+9, lya[n]+9, lza[n]-9, 89);
setTile(lxa[n], lya[n]+9, lza[n]+9, 89);
setTile(lxa[n], lya[n]+9, lza[n]-9, 89);
setTile(lxa[n]-9, lya[n]+9, lza[n]+9, 89);
setTile(lxa[n]-9, lya[n]+9, lza[n], 89);
setTile(lxa[n]-9, lya[n]+9, lza[n]-9, 89);
l4[n] = true;
l4a[n] = 1800;
skillCool(ESP.getUser(), 4);
new Thread({
run : function(){
Thread.sleep(15000);
for(var m=0;m<cache2.length;m++)
Entity.remove(cache2[m]);
}
}).start();
}
break;
}}}
if(dark[0]!=null){
for(var n=0;n<dark.length;n++){
if(dark[n]==ESP.getUser()){
if(i==302&&Cool.isFinished(d1a[n])){
setTile(x+1, y+1, z+1, 49);
setTile(x+1, y+1, z-1, 49);
setTile(x, y+1, z, 49);
setTile(x-1, y+1, z+1, 49);
setTile(x-1, y+1, z-1, 49);
setTile(x, y+2, z, 10);
d1b[n] = 90;
d1c[n] = true;
dxb[n] = x;
dyb[n] = y;
dzb[n] = z;
d1[n] = true;
d1a[n] = 150;
skillCool(ESP.getUser(), 1);
}
if(i==303&&Cool.isFinished(d2a[n])){
for(var yy=y+1;yy<y+7;yy++)
setTile(x, yy, z, 49);
setTile(x, y+7, z, 35, 15);
for(var yy=y+6;yy<y+8;yy++){
setTile(x+1, yy, z, 35, 15);
setTile(x, yy, z-1, 35, 15);
setTile(x, yy, z+1, 35, 15);
setTile(x-1, yy, z, 35, 15);
}
for(var yy=y+4;yy<y+6;yy++){
for(var nn=-1;nn<2;nn++){
setTile(x+1, yy, z+nn, 35, 15);
setTile(x-1, yy, z+nn, 35, 15);
setTile(x+2, yy, z+nn, 35, 15);
setTile(x-2, yy, z+nn, 35, 15);
setTile(x+nn, yy, z+2, 35, 15);
setTile(x+nn, yy, z-2, 35, 15);
setTile(x+nn, yy, z+1, 35, 15);
setTile(x+nn, yy, z-1, 35, 15);
}
}
d2[n] = true;
d2a[n] = 300;
skillCool(ESP.getUser(), 2);
}
if(i==304&&Cool.isFinished(d3a[n])){
ESP.makeBind(x, y, z, 49);
setTile(x, y+1, z, 10);
d3b[n] = 120;
d3c[n] = true;
dxa[n] = x;
dya[n] = y;
dza[n] = z;
d3[n] = true;
d3a[n] = 300;
skillCool(ESP.getUser(), 3);
}
if(i==305&&Cool.isFinished(d4a[n])){
ESP.sbm("Diabolic Emission", true);
ESP.heal(dark[n]);
if(getTile(x, y+8, z)==0){
setTile(x, y+8, z, 49);
}
dx[n] = x;
dy[n] = y+8;
dz[n] = z;
d4[n] = true;
d4a[n] = 1800;
skillCool(ESP.getUser(), 4);
}
break;
}}}
if(ice[0]!=null){
for(var n=0;n<ice.length;n++){
if(ice[n]==ESP.getUser()){
if(i==302&&Cool.isFinished(i1a[n])){
for(var xx=x-1;xx<x+2;xx++)
for(var yy=y-3;yy<y+1;yy++)
for(var zz=z-1;zz<z+2;zz++)
setTile(xx, yy, zz, 0);
i1b[n] = 45;
i1c[n] = true;
ix[n] = x;
iy[n] = y;
iz[n] = z;
i1[n] = true;
i1a[n] = 150;
skillCool(ESP.getUser(), 1);
}
if(i==303&&Cool.isFinished(i2a[n])){
ixb[n] = x-Player.getX();
izb[n] = z-Player.getZ();
setTile(x+ixb[n]+2, y+1, z+izb[n], 79);
setTile(x+ixb[n]-2, y+1, z+izb[n], 79);
setTile(x+ixb[n], y+1, z+izb[n]+2, 79);
setTile(x+ixb[n], y+1, z+izb[n]-2, 79);
setTile(x+ixb[n]+1, y+1, z+izb[n]+1, 30);
setTile(x+ixb[n]+1, y+1, z+izb[n]-1, 30);
setTile(x+ixb[n]-1, y+1, z+izb[n]+1, 30);
setTile(x+ixb[n]-1, y+1, z+izb[n]-1, 30);
setTile(x+ixb[n]+2, y+1, z+izb[n]+2, 80);
setTile(x+ixb[n]+2, y+1, z+izb[n]-2, 80);
setTile(x+ixb[n]-2, y+1, z+izb[n]+2, 80);
setTile(x+ixb[n]-2, y+1, z+izb[n]-2, 80);
setTile(x+ixb[n]+2, y+1, z+izb[n]+1, 85);
setTile(x+ixb[n]+2, y+1, z+izb[n]-1, 85);
setTile(x+ixb[n]-2, y+1, z+izb[n]+1, 85);
setTile(x+ixb[n]-2, y+1, z+izb[n]-1, 85);
setTile(x+ixb[n]+1, y+1, z+izb[n]+2, 85);
setTile(x+ixb[n]-1, y+1, z+izb[n]+2, 85);
setTile(x+ixb[n]+1, y+1, z+izb[n]-2, 85);
setTile(x+ixb[n]-1, y+1, z+izb[n]-2, 85);
setTile(x+ixb[n]+2, y+2, z+izb[n]+2, 86);
setTile(x+ixb[n]+2, y+2, z+izb[n]-2, 86);
setTile(x+ixb[n]-2, y+2, z+izb[n]+2, 86);
setTile(x+ixb[n]-2, y+2, z+izb[n]-2, 86);
setTile(x+ixb[n], y+1, z+izb[n], 30);
i2[n] = true;
i2a[n] = 300;
skillCool(ESP.getUser(), 2);
}
if(i==304&&Cool.isFinished(i3a[n])){
for(var xx=x-2;xx<x+3;xx++){
for(var yy=y+1;yy<y+6;yy++){
for(var zz=z-2;zz<z+3;zz++){
setTile(xx,yy,zz,79);}}}
i3b[n] = true;
i3c[n] = 75;
ixa[n] = Math.floor(x)+0.5;
iya[n] = Math.floor(y)+0.5;
iza[n] = Math.floor(z)+0.5;
i3[n] = true;
i3a[n] = 300;
skillCool(ESP.getUser(), 3);
}
if(i==305&&Cool.isFinished(i4a[n])){
ESP.sbm("Igloo", true);
ESP.heal(ice[n]);
arroundMobHealthDown(ice[n], 20, 7);
for(var xx=x-6;xx<x+7;xx++)
for(var zz=z-6;zz<z+7;zz++)
setTile(xx,y,zz,79);
for(var xx=x-4;xx<x+5;xx++){
setTile(xx,y+1,z+4,79);
setTile(xx,y+1,z-4,79);
}
for(var zz=z-3;zz<z+4;zz++){
setTile(x+4,y+1,zz,79);
setTile(x-4,y+1,zz,79);
}
setTile(x+4,y+2,z+4,79);
setTile(x+3,y+2,z+4,79);
setTile(x+2,y+2,z+4,20);
setTile(x+1,y+2,z+4,79);
setTile(x,y+2,z+4,0);
setTile(x,y+1,z+4,0);
setTile(x-1,y+2,z+4,79);
setTile(x-2,y+2,z+4,20);
setTile(x-3,y+2,z+4,79);
setTile(x-4,y+2,z+4,79);
setTile(x+4,y+2,z-4,79);
setTile(x+3,y+2,z-4,79);
setTile(x+2,y+2,z-4,20);
setTile(x+1,y+2,z-4,20);
setTile(x,y+2,z-4,79);
setTile(x-1,y+2,z-4,20);
setTile(x-2,y+2,z-4,20);
setTile(x-3,y+2,z-4,79);
setTile(x-4,y+2,z-4,79);
setTile(x+4,y+2,z+3,79);
setTile(x+4,y+2,z+2,20);
setTile(x+4,y+2,z+1,20);
setTile(x+4,y+2,z,79);
setTile(x+4,y+2,z-1,20);
setTile(x+4,y+2,z-2,20);
setTile(x+4,y+2,z-3,79);
setTile(x-4,y+2,z+3,79);
setTile(x-4,y+2,z+2,20);
setTile(x-4,y+2,z+1,20);
setTile(x-4,y+2,z,79);
setTile(x-4,y+2,z-1,20);
setTile(x-4,y+2,z-2,20);
setTile(x-4,y+2,z-3,79);
for(var xx=x-4;xx<x+5;xx++){
setTile(xx,y+3,z+4,79);
setTile(xx,y+3,z-4,79);
}
for(var zz=z-3;zz<z+4;zz++){
setTile(x+4,y+3,zz,79);
setTile(x-4,y+3,zz,79);
}
for(var xx=x-4;xx<x+5;xx++){
for(var zz=z-4;zz<z+5;zz++){
setTile(xx,y+4,zz,79);}}
setTile(x+4,y+5,z+4,79);
setTile(x+3,y+5,z+4,79);
setTile(x+2,y+5,z+4,79);
setTile(x+1,y+5,z+4,79);
setTile(x,y+5,z+4,79);
setTile(x-1,y+5,z+4,79);
setTile(x-2,y+5,z+4,79);
setTile(x-3,y+5,z+4,79);
setTile(x-4,y+5,z+4,79);
setTile(x+4,y+5,z-4,79);
setTile(x+3,y+5,z-4,79);
setTile(x+2,y+5,z-4,79);
setTile(x+1,y+5,z-4,79);
setTile(x,y+5,z-4,79);
setTile(x-1,y+5,z-4,79);
setTile(x-2,y+5,z-4,79);
setTile(x-3,y+5,z-4,79);
setTile(x-4,y+5,z-4,79);
setTile(x+4,y+5,z+3,79);
setTile(x+4,y+5,z+2,79);
setTile(x+4,y+5,z+1,79);
setTile(x+4,y+5,z,79);
setTile(x+4,y+5,z-1,79);
setTile(x+4,y+5,z-2,79);
setTile(x+4,y+5,z-3,79);
setTile(x-4,y+5,z+3,79);
setTile(x-4,y+5,z+2,79);
setTile(x-4,y+5,z+1,79);
setTile(x-4,y+5,z,79);
setTile(x-4,y+5,z-1,79);
setTile(x-4,y+5,z-2,79);
setTile(x-4,y+5,z-3,79);
setTile(x+3,y+1,z-3,58);
setTile(x+2,y+1,z-3,61);
setTile(x+1,y+1,z-3,245);
setTile(x,y+1,z-3,54);
setTile(x-3,y+1,z-3,85);
setTile(x-3,y+2,z-3,158);
setTile(x-2,y+1,z-3,53);
i4[n] = true;
i4a[n] = 1800;
skillCool(ESP.getUser(), 4);
ixc[n] = x;
iyc[n] = y;
izc[n] = z;
}
break;
}}}
if(sand[0]!=null){
for(var n=0;n<sand.length;n++){
if(sand[n]==ESP.getUser()){
if(i==303&&Cool.isFinished(m2a[n])){
for(var xx=x-1;xx<x+2;xx++){
for(var yy=y-2;yy<y+1;yy++){
for(var zz=z-1;zz<z+2;zz++){
setTile(xx,yy,zz,0);}}}
setTile(x, y-3, z, 12);
setTile(x, y-2, z, 81);
setTile(x+1, y-3, z+1, 81);
setTile(x+1, y-3, z-1, 81);
setTile(x-1, y-3, z+1, 81);
setTile(x-1, y-3, z-1, 81);
m2[n] = true;
m2a[n] = 300;
skillCool(ESP.getUser(), 2);
}
if(i==304&&Cool.isFinished(m3a[n])){
for(var xx=x-2;xx<x+3;xx++){
for(var zz=z-2;zz<z+3;zz++){
for(var yy=y+4;yy<y+8;yy++)
setTile(xx, yy, zz, 12);
setTile(xx, y, zz, 0);
}}
m3x[n] = x;
m3y[n] = y;
m3z[n] = z;
m3[n] = true;
m3a[n] = 300;
skillCool(ESP.getUser(), 3);
}
if(i==305&&Cool.isFinished(m4a[n])){
ESP.sbm("Desert Summon", true);
ESP.heal(sand[n]);
arroundMobFireTicks(sand[n], 12, 30);
ESP.antiLack(15);
for(var xx=x-13;xx<x+14;xx++)
for(var zz=z-13;zz<z+14;zz++)
setTile(xx,y+2,zz,24);
for(var xx=x-12;xx<x+13;xx++){
for(var zz=z-12;zz<z+13;zz++){
setTile(xx,y-1,zz,24);
setTile(xx,y+2,zz,0);}}
for(var xx=x-12;xx<x+13;xx++)
for(var zz=z-12;zz<z+13;zz++)
setTile(xx,y,zz,12);
for(var yy=y+1;yy<y+4;yy++){
setTile(x+3, yy, z-3, 81);
setTile(x+7, yy, z, 81);
setTile(x+2, yy, z+4, 81);
setTile(x+5, yy, z+5, 81);
setTile(x, yy, z-7, 81);
setTile(x-5, yy, z+5, 81);
setTile(x-3, yy, z-4, 81);
setTile(x-5, yy, z, 81);
setTile(x-11, yy, z+1, 81);
setTile(x+4, yy, z-1, 81);
setTile(x-6, yy, z, 81);
setTile(x+4, yy, z+5, 81);
setTile(x-2, yy, z+5, 81);
setTile(x, yy, z+6, 81);
setTile(x-6, yy, z+4, 81);
setTile(x-4, yy, z, 81);
setTile(x-5, yy, z-2, 81);
setTile(x+2, yy, z+12, 81);
setTile(x+8, yy, z-7, 81);
setTile(x+7, yy, z, 81);
setTile(x+5, yy, z+2, 81);
setTile(x+12, yy, z+6, 81);
setTile(x, yy, z-4, 81);
setTile(x-4, yy, z+5, 81);
setTile(x-2, yy, z-5, 81);
setTile(x-8, yy, z, 81);
setTile(x-6, yy, z-11, 81);
setTile(x+7, yy, z-8, 81);
setTile(x-7, yy, z, 81);
setTile(x+5, yy, z+7, 81);
setTile(x-3, yy, z+9, 81);
setTile(x, yy, z, 81);
setTile(x-1, yy, z+5, 81);
setTile(x-3, yy, z, 81);
setTile(x-12, yy, z-1, 81);
setTile(x, yy, z+2, 81);
setTile(x-6, yy, z+12, 81);
setTile(x-9, yy, z+12, 81);
setTile(x+10, yy, z+11, 81);
setTile(x-11, yy, z-12, 81);
setTile(x+11, yy, z+11, 81);
setTile(x-12, yy, z-9, 81);
setTile(x-9, yy, z+10, 81);
setTile(x-6, yy, z+8, 81);
setTile(x-9, yy, z+8, 81);
setTile(x+10, yy, z+4, 81);
setTile(x-11, yy, z-6, 81);
setTile(x+8, yy, z+1, 81);
setTile(x-9, yy, z-9, 81);
setTile(x-7, yy, z+8, 81);
setTile(x-6, yy, z+5, 81);
setTile(x-2, yy, z+5, 81);
setTile(x+4, yy, z+4, 81);
setTile(x-5, yy, z-6, 81);
setTile(x+7, yy, z+1, 81);
setTile(x-5, yy, z-8, 81);
setTile(x-4, yy, z+3, 81);
setTile(x-5, yy, z+2, 81);
setTile(x-7, yy, z+4, 81);
setTile(x+1, yy, z+9, 81);
setTile(x-8, yy, z-7, 81);
setTile(x+9, yy, z+7, 81);
setTile(x-8, yy, z-7, 81);
setTile(x-7, yy, z+6, 81);
setTile(x-6, yy, z-9, 81);
setTile(x-9, yy, z-11, 81);
setTile(x-11, yy, z-11, 81);
setTile(x-11, yy, z-7, 81);
setTile(x-5, yy, z-11, 81);
setTile(x-7, yy, z-9, 81);
setTile(x-9, yy, z-10, 81);
setTile(x+6, yy, z-2, 81);
setTile(x+9, yy, z-12, 81);
setTile(x+10, yy, z-9, 81);
setTile(x-11, yy, z-12, 81);
setTile(x+11, yy, z-11, 81);
setTile(x+12, yy, z-9, 81);
setTile(x+9, yy, z-7, 81);
setTile(x+6, yy, z-2, 81);
setTile(x+9, yy, z-3, 81);
setTile(x+10, yy, z-6, 81);
setTile(x-11, yy, z-1, 81);
setTile(x+1, yy, z-4, 81);
setTile(x+12, yy, z-5, 81);
setTile(x+9, yy, z-7, 81);
setTile(x+1, yy, z-2, 81);
setTile(x+7, yy, z-12, 81);
setTile(x+8, yy, z-9, 81);
setTile(x-4, yy, z-12, 81);
setTile(x+7, yy, z-11, 81);
setTile(x+9, yy, z-9, 81);
setTile(x+5, yy, z-7, 81);
setTile(x+3, yy, z-6, 81);
setTile(x, yy, z-9, 81);
setTile(x-1, yy, z-7, 81);
setTile(x+1, yy, z-8, 81);
setTile(x-3, yy, z-12, 81);
setTile(x-2, yy, z+10, 81);
setTile(x+2, yy, z-8, 81);
}
m4x[n] = x;
m4y[n] = y;
m4z[n] = z;
m4[n] = true;
m4a[n] = 1800;
skillCool(ESP.getUser(), 4);
}
break;
}}}
if(blood[0]!=null){
for(var n=0;n<blood.length;n++){
if(blood[n]==ESP.getUser()){
if(i==304&&Cool.isFinished(b3a[n])){
teleport(ESP.getUser(), x+(x-Player.getX()), y+3, z+(z-Player.getZ()));
b3[n] = true;
b3a[n] = 300;
skillCool(ESP.getUser(), 3);
}
if(i==305&&Cool.isFinished(b4a[n])&&Cool.isFinished(b4b[n])){
ESP.sbm("Nightmare", true);
Player.setHealth(Entity.getHealth(ESP.getUser())+15);
Level.setTime(14000);
try{
Entity.addEffect(blood[n], MobEffect.nightVision, 900, 0, true, false);
}
catch(e){
//null
}
b4b[n] = 1;
}
break;
}}}
if(air[0]!=null){
for(var n=0;n<air.length;n++){
if(air[n]==ESP.getUser()){
if(i==302&&Cool.isFinished(a1a[n])){
player = ESP.getUser();
Entity.setVelX(player, 3*x-3*Player.getX());
Entity.setVelZ(player, 3*z-3*Player.getZ());
a1[n] = true;
a1a[n] = 75;
skillCool(ESP.getUser(), 1);
}
if(i==303){
if(Cool.isFinished(a2a[n])&&Cool.isFalse(a2b[n])){
a2x[n] = x;
a2y[n] = y;
a2z[n] = z;
for(var xx=x-1;xx<x+2;xx++){
for(var yy=y+1;yy<y+4;yy++){
for(var zz=z-1;zz<z+2;zz++){
setTile(xx, yy, zz, 0);
setTile(xx, yy, z+2, 20);
setTile(xx, yy, z-2, 20);
setTile(x+2 ,yy, zz, 20);
setTile(x-2 ,yy, zz, 20);
setTile(xx, y+4, zz, 20);
}}}
a2[n] = true;
a2a[n] = 300;
skillCool(ESP.getUser(), 2);
a2b[n] = true;
}
else if(a2b[n]){
for(var xx=a2x[n]-1;xx<a2x[n]+2;xx++){
for(var yy=a2y[n]+1;yy<a2y[n]+4;yy++){
for(var zz=a2z[n]-1;zz<a2z[n]+2;zz++){
setTile(xx, yy, a2z[n]+2, 0);
setTile(xx, yy, a2z[n]-2, 0);
setTile(a2x[n]+2 ,yy, zz, 0);
setTile(a2x[n]-2 ,yy, zz, 0);
setTile(xx, a2y[n]+4, zz, 0);
}}}
a2b[n] = false;
}
}
break;
}}}
if(thunder[0]!=null){
for(var n=0;n<thunder.length;n++){
if(thunder[n]==ESP.getUser()){
if(i==302&&Cool.isFinished(th1a[n])){
px = Player.getX();
pz = Player.getZ();
yaw = Math.floor(getYaw());
sin = -Math.sin(yaw/180*Math.PI);
cos = Math.cos(yaw/180*Math.PI);
ESP.antiLack(5);
for(var m=3;m<20;m++)
setTile(px+m*sin, y+2, pz+m*cos,89);
th1c[n] = y;
th1[n] = true;
th1a[n] = 150;
skillCool(ESP.getUser(), 1);
}
if(i==303&&Cool.isFinished(th2a[n])){
ESP.antiLack(5);
setTile(x+5, y+4, z+5, 89);
setTile(x+5, y+4, z, 89);
setTile(x+5, y+4, z-5, 89);
setTile(x, y+4, z+5, 89);
setTile(x, y+4, z-5, 89);
setTile(x-5, y+4, z+5, 89);
setTile(x-5, y+4, z, 89);
setTile(x-5, y+4, z-5, 89);
thxa[n] = x;
thya[n] = y;
thza[n] = z;
th2[n] = true;
th2a[n] = 300;
skillCool(ESP.getUser(), 2);
}
if(i==304&&Cool.isFinished(th3a[n])){
if(Cool.isFalse(th3b[n])){
setTile(x, y, z, 89);
thxb[n] = x;
thyb[n] = y;
thzb[n] = z;
th3b[n] = true;
}
else if(th3b[n]){
ESP.antiLack(5);
for(var yy=thyb[n]+1;yy<thyb[n]+7;yy++)
setTile(thxb[n], yy, thzb[n], 89);
th3b[n] = false;
th3[n] = true;
th3a[n] = 300;
skillCool(ESP.getUser(), 3);
}
}
if(i==305&&Cool.isFinished(th4a[n])){
ESP.sbm("Thunder Fall", true);
ESP.antiLack(20);
ESP.heal(thunder[n]);
thx[n] = Player.getX();
thy[n] = Player.getY()-2;
thz[n] = Player.getZ();
setTile(thx[n], thy[n]+10, thz[n], 41);
setTile(thx[n]+9, thy[n]+9, thz[n]+9, 41);
setTile(thx[n]+9, thy[n]+9, thz[n]-9, 41);
setTile(thx[n]-9, thy[n]+9, thz[n]+9, 41);
setTile(thx[n]-9, thy[n]+9, thz[n]-9, 41);
for(var xx=thx[n]-14;xx<thx[n]+15;xx++){
for(var zz=thz[n]-14;zz<thz[n]+15;zz++){
setTile(thx[n]+14, thy[n]+2, zz, 89);
setTile(thx[n]-14, thy[n]+2, zz, 89);
setTile(xx, thy[n]+2, thz[n]+14, 89);
setTile(xx, thy[n]+2, thz[n]-14, 89);
}}
for(var xx=thx[n]-2;xx<thx[n]+3;xx++)
for(var zz=thz[n]-2;zz<thz[n]+3;zz++)
setTile(xx, thy[n]+2, zz, 89);
for(var xx=thx[n]-1;xx<thx[n]+2;xx++)
for(var zz=thz[n]-1;zz<thz[n]+2;zz++)
setTile(xx, thy[n]+2, zz, 0);
var p2x, p2y, p2z;
for each(var e in Entity.getAll()){
p2x = Math.abs(Player.getX()-Entity.getX(e));
p2y = Math.abs(Player.getY()-Entity.getY(e));
p2z = Math.abs(Player.getZ()-Entity.getZ(e));
if(p2x<=20&&p2y<=20&&p2z<=20&&thunder[n]!=e&&Entity.getEntityTypeId(e)<64){
try{
Entity.addEffect(e, MobEffect.movementSlowdown, 75, 9, true, false);
Entity.setHealth(e, Entity.getHealth(e)-4);
}
catch(e){
//null
}
}
}
th4[n] = true;
th4a[n] = 1800;
skillCool(ESP.getUser(), 4);
}
break;
}}}
if(elsa[0]!=null){
for(var n=0;n<elsa.length;n++){
if(elsa[n]==ESP.getUser()){
if(i==302&&Cool.isFinished(e1a[n])){
px = Player.getX();
pz = Player.getZ();
yaw = Math.floor(getYaw());
sin = -Math.sin(yaw/180*Math.PI);
cos = Math.cos(yaw/180*Math.PI);
ESP.antiLack(5);
explode(px+6*sin, y+2.5, pz+6*cos, 1);
explode(px+11*sin, y+2.5, pz+11*cos, 1);
explode(px+16*sin, y+2.5, pz+16*cos, 1);
explode(px+19*sin, y+2.5, pz+19*cos, 1);
for(var e1b=3;e1b<21;e1b++)
setTile(px+e1b*sin, y, pz+e1b*cos, 79);
setTile(px+20*sin, y+1, pz+20*cos, 79);
setTile(px+20*sin, y+2, pz+20*cos, 79);
e1[n] = true;
e1a[n] = 150;
skillCool(ESP.getUser(), 1);
}
if(i==303&&Cool.isFinished(e2a[n])){
ESP.antiLack(5);
explode(x+5, y+3, z, 1.7);
explode(x-4, y+3, z, 1.7);
explode(x, y+3, z+5, 1.7);
explode(x, y+3, z-4, 1.7);
for(var xx=x-7;xx<x+8;xx++){
for(var zz=z-7;zz<z+8;zz++){
setTile(xx,y,zz,79);}}
e2[n] = true;
e2a[n] = 300;
skillCool(ESP.getUser(), 2);
}
if(i==304&&Cool.isFinished(e3a[n])){
for(var yy=y+1;yy<y+4;yy++){
setTile(x+2,yy,z+1,79);
setTile(x+2,yy,z,79);
setTile(x+2,yy,z-1,79);
setTile(x-2,yy,z+1,79);
setTile(x-2,yy,z,79);
setTile(x-2,yy,z-1,79);
setTile(x+1,yy,z+2,79);
setTile(x,yy,z+2,79);
setTile(x-1,yy,z+2,79);
setTile(x+1,yy,z-2,79);
setTile(x,yy,z-2,79);
setTile(x-1,yy,z-2,79);
}
setTile(x+2,y+4,z+1,79);
setTile(x+2,y+4,z,79);
setTile(x+2,y+4,z-1,79);
setTile(x-2,y+4,z+1,79);
setTile(x-2,y+4,z,79);
setTile(x-2,y+4,z-1,79);
setTile(x+1,y+4,z+2,79);
setTile(x,y+4,z+2,79);
setTile(x-1,y+4,z+2,79);
setTile(x+1,y+4,z-2,79);
setTile(x,y+4,z-2,79);
setTile(x-1,y+4,z-2,79);
setTile(x+3,y+1,z,79);
setTile(x-3,y+1,z,79);
setTile(x,y+1,z+3,79);
setTile(x,y+1,z-3,79);
setTile(x+3,y+2,z,79);
setTile(x-3,y+2,z,79);
setTile(x,y+2,z+3,79);
setTile(x,y+2,z-3,79);
setTile(x+1,y+5,z-1,79);
setTile(x+1,y+5,z,79);
setTile(x+1,y+5,z+1,79);
setTile(x,y+5,z-1,79);
setTile(x,y+5,z,79);
setTile(x,y+5,z+1,79);
setTile(x-1,y+5,z-1,79);
setTile(x-1,y+5,z,79);
setTile(x-1,y+5,z+1,79);
setTile(x+1,y+6,z-1,79);
setTile(x+1,y+6,z,79);
setTile(x+1,y+6,z+1,79);
setTile(x,y+6,z-1,79);
setTile(x,y+6,z,79);
setTile(x,y+6,z+1,79);
setTile(x-1,y+6,z-1,79);
setTile(x-1,y+6,z,79);
setTile(x-1,y+6,z+1,79);
setTile(x+1,y+7,z-1,79);
setTile(x+1,y+7,z,79);
setTile(x+1,y+7,z+1,79);
setTile(x,y+7,z-1,79);
setTile(x,y+7,z,79);
setTile(x,y+7,z+1,79);
setTile(x-1,y+7,z-1,79);
setTile(x-1,y+7,z,79);
setTile(x-1,y+7,z+1,79);
setTile(x+1,y+8,z-1,79);
setTile(x+1,y+8,z,79);
setTile(x+1,y+8,z+1,79);
setTile(x,y+8,z-1,79);
setTile(x,y+8,z,79);
setTile(x,y+8,z+1,79);
setTile(x-1,y+8,z-1,79);
setTile(x-1,y+8,z,79);
setTile(x-1,y+8,z+1,79);
setTile(x+2,y+5,z,79);
setTile(x-2,y+5,z,79);
setTile(x,y+5,z+2,79);
setTile(x,y+5,z-2,79);
setTile(x+2,y+6,z,79);
setTile(x-2,y+6,z,79);
setTile(x,y+6,z+2,79);
setTile(x,y+6,z-2,79);
setTile(x+1,y+9,z,79);
setTile(x-1,y+9,z,79);
setTile(x,y+9,z+1,79);
setTile(x,y+9,z-1,79);
setTile(x+1,y+10,z,79);
setTile(x-1,y+10,z,79);
setTile(x,y+10,z+1,79);
setTile(x,y+10,z-1,79);
setTile(x+1,y+11,z,79);
setTile(x-1,y+11,z,79);
setTile(x,y+11,z+1,79);
setTile(x,y+11,z-1,79);
setTile(x+1,y+12,z,79);
setTile(x-1,y+12,z,79);
setTile(x,y+12,z+1,79);
setTile(x,y+12,z-1,79);
for(var yy=y+9;yy<y+17;yy++)
setTile(x,yy,z,79);
setTile(x,y+1,z,30);
e3b[n] = true;
e3c[n] = 75;
ex[n] = Math.floor(x)+0.5;
ey[n] = Math.floor(y)+0.5;
ez[n] = Math.floor(z)+0.5;
e3[n] = true;
e3a[n] = 300;
skillCool(ESP.getUser(), 3);
}
if(i==305&&Cool.isFinished(e4a[n])){
ESP.sbm("Ice Palace", true);
ESP.heal(elsa[n]);
arroundMobHealthDown(elsa[n], 20, 7);
setTile(x,y+28,z,79);
setTile(x,y+29,z,79);
setTile(x,y+30,z,79);
setTile(x,y+31,z,79);
setTile(x,y+32,z,79);
autoRecover(x, y, z, 8, 79);
setTiles(x-5, x+5, y+1, y+15, z-5, z+5, 79);
setTiles(x-4, x+4, y+1, y+14, z-4, z+4, 0);
for(var yy=y+2;yy<y+14;yy++){
for(var xx=x-3;xx<x+4;xx++){
setTile(xx, yy, z+5, 20);
setTile(xx, yy, z-5, 20);
}
for(var zz=z-3;zz<z+4;zz++){
setTile(x+5, yy, zz, 20);
setTile(x-5, yy, zz, 20);
}
}
setTile(x+5,y+15,z+5,0);
setTile(x+5,y+15,z-5,0);
setTile(x-5,y+15,z+5,0);
setTile(x-5,y+15,z-5,0);
setTile(x+5,y+14,z+5,0);
setTile(x+5,y+14,z-5,0);
setTile(x+5,y+14,z+5,0);
setTile(x+5,y+14,z-5,0);
for(var xx=x-4;xx<x+5;xx++){
for(var zz=z-4;zz<z+5;zz++){
setTile(xx,y+16,zz,79);
setTile(xx,y+17,zz,79);
setTile(xx,y+18,zz,79);}}
for(var xx=x-3;xx<x+4;xx++){
for(var zz=z-3;zz<z+4;zz++){
setTile(xx,y+19,zz,79);
setTile(xx,y+20,zz,79);
setTile(xx,y+21,zz,79);}}
for(var xx=x-2;xx<x+3;xx++){
for(var zz=z-2;zz<z+3;zz++){
setTile(xx,y+22,zz,79);
setTile(xx,y+23,zz,79);
setTile(xx,y+24,zz,79);}}
for(var xx=x-1;xx<x+2;xx++){
for(var zz=z-1;zz<z+2;zz++){
setTile(xx,y+25,zz,79);
setTile(xx,y+26,zz,79);
setTile(xx,y+27,zz,79);}}
setTile(x+5,y+1,z,0);
setTile(x+5,y+2,z,0);
setTile(x+5,y+1,z+1,79);
setTile(x+5,y+2,z+1,79);
setTile(x+5,y+3,z+1,79);
setTile(x+5,y+1,z-1,79);
setTile(x+5,y+2,z-1,79);
setTile(x+5,y+3,z-1,79);
setTile(x+5,y+3,z,79);
setTile(x+1,y+1,z+4,79);
setTile(x+1,y+1,z+3,79);
setTile(x,y+2,z+4,79);
setTile(x,y+2,z+3,79);
setTile(x-1,y+3,z+4,79);
setTile(x-1,y+3,z+3,79);
setTile(x-2,y+4,z+4,79);
setTile(x-2,y+4,z+3,79);
setTile(x-3,y+5,z+4,79);
setTile(x-3,y+5,z+3,79);
setTile(x-4,y+5,z+4,79);
setTile(x-4,y+5,z+3,79);
setTile(x-4,y+6,z+2,79);
setTile(x-3,y+6,z+2,79);
setTile(x-4,y+7,z+1,79);
setTile(x-3,y+7,z+1,79);
setTile(x-4,y+8,z,79);
setTile(x-3,y+8,z,79);
setTile(x-4,y+9,z-1,79);
setTile(x-3,y+9,z-1,79);
setTile(x-4,y+10,z-2,79);
setTile(x-3,y+10,z-2,79);
setTile(x-4,y+11,z-3,79);
setTile(x-3,y+11,z-3,79);
setTile(x-4,y+11,z-4,79);
setTile(x-3,y+11,z-4,79);
setTile(x-2,y+11,z-3,79);
setTile(x-1,y+11,z-3,79);
setTile(x-2,y+11,z-4,79);
setTile(x-1,y+11,z-4,79);
setTile(x+1,y+11,z-3,79);
setTile(x,y+11,z-3,79);
setTile(x+1,y+11,z-4,79);
setTile(x,y+11,z-4,79);
setTile(x+2,y+11,z-3,79);
setTile(x+3,y+11,z-3,79);
setTile(x+2,y+11,z-4,79);
setTile(x+3,y+11,z-4,79);
setTile(x+4,y+11,z-3,79);
setTile(x+4,y+11,z-4,79);
setTile(x-2,y+11,z-2,79);
setTile(x-1,y+11,z-2,79);
setTile(x-2,y+11,z-1,79);
setTile(x-1,y+11,z-1,79);
setTile(x+1,y+11,z-2,79);
setTile(x,y+11,z-2,79);
setTile(x+1,y+11,z-1,79);
setTile(x,y+11,z-1,79);
setTile(x+2,y+11,z-2,79);
setTile(x+3,y+11,z-2,79);
setTile(x+2,y+11,z-1,79);
setTile(x+3,y+11,z-1,79);
setTile(x+4,y+11,z-2,79);
setTile(x+4,y+11,z-1,79);
setTile(x+5,y+13,z-3,0);
setTile(x+5,y+12,z-3,0);
setTile(x+5,y+11,z-3,8);
setTile(x+6,y,z-3,0);
setTile(x+7,y,z-3,0);
ex4[n] = x;
ey4[n] = y;
ez4[n] = z;
e4[n] = true;
e4a[n] = 1800;
skillCool(ESP.getUser(), 4);
}
break;
}}}
if(titan[0]!=null){
for(var n=0;n<titan.length;n++){
if(titan[n]==ESP.getUser()){
if(i==302&&Cool.isFinished(tt1a[n])){
autoRecover(x, y+1, z, 3, 92);
Level.dropItem(x+3, y+2, z, 0, 320, 1, 0);
Level.dropItem(x-3, y+2, z, 0, 320, 1, 0);
Level.dropItem(x, y+2, z, 0, 320, 2, 0);
Level.dropItem(x, y+2, z+3, 0, 320, 1, 0);
Level.dropItem(x, y+2, z-3, 0, 320, 1, 0);
tt1[n] = true;
tt1a[n] = 150;
skillCool(ESP.getUser(), 1);
}
if(i==303&&Cool.isFinished(tt2a[n])){
if(Cool.isFinished(tt2b[n])){
setTile(x, y+1, z, 92);
ttxa[n] = x;
ttya[n] = y+2;
ttza[n] = z;
tt2b[n] = 1;
}
else if(tt2b==1){
ESP.antiLack(5);
explode(ttxa[n], ttya[n], ttza[n], 3);
tt2b[n] = 0;
tt2[n] = true;
tt2a[n] = 300;
skillCool(ESP.getUser(), 2);
}
}
if(i==304&&Cool.isFinished(tt3a[n])){
setTiles(x-3, x+3, y, y+7, z-3, z+3, 35, 6);
setTiles(x-2, x+2, y+1, y+6, z-2, z+2, 0);
setTile(x+2, y+1, z+2, 92);
setTile(x+2, y+1, z-2, 92);
setTile(x-2, y+1, z+2, 92);
setTile(x-2, y+1, z-2, 92);
setTile(x, y+6, z, 10);
ttxb[n] = x;
ttyb[n] = y;
ttzb[n] = z;
tt3[n] = true;
tt3a[n] = 300;
skillCool(ESP.getUser(), 3);
}
if(i==305&&Cool.isFinished(tt4a[n])){
ESP.sbm("I am Titan", true);
ESP.heal(titan[n]);
setTile(x+1, y+1, z, 5, 2);
setTile(x+1, y+2, z, 5, 2);
setTile(x+1, y+3, z, 5, 2);
setTile(x-1, y+1, z, 5, 2);
setTile(x-1, y+2, z, 5, 2);
setTile(x-1, y+3, z, 5, 2);
setTiles(x-1, x+1, y+4, y+8, z, z, 5, 2);
setTile(x, y+9, z, 5, 2);
setTile(x+2, y+7, z, 5, 2);
setTile(x+3, y+7, z, 5, 2);
setTile(x+3, y+6, z, 5, 2);
setTile(x+3, y+5, z, 5, 2);
setTile(x+3, y+4, z, 5, 2);
setTile(x-2, y+7, z, 5, 2);
setTile(x-3, y+7, z, 5, 2);
setTile(x-3, y+6, z, 5, 2);
setTile(x-3, y+5, z, 5, 2);
setTile(x-3, y+4, z, 5, 2);
ttx[n] = x;
tty[n] = y;
ttz[n] = z;
tt4[n] = true;
tt4a[n] = 2250;
tt4d[n] = ESP.getUser();
}
}}}
if(bind[0]!=null){
for(var n=0;n<bind.length;n++){
if(bind[n]==ESP.getUser()){
if(i==302&&Cool.isFinished(bb1a[n])){
setTile(x, y+1, z, 30);
setTile(x+1, y+1, z, 30);
setTile(x-1, y+1, z, 30);
setTile(x, y+1, z+1, 30);
setTile(x, y+1, z-1, 30);
bb1[n] = true;
bb1a[n] = 150;
skillCool(ESP.getUser(), 1);
}
if(i==303&&Cool.isFinished(bb2a[n])){
px = Player.getX();
pz = Player.getZ();
yaw = Math.floor(getYaw());
sin = -Math.sin(yaw/180*Math.PI);
cos = Math.cos(yaw/180*Math.PI);
for(var bb2b=3;bb2b<30;bb2b++)
setTile(px+bb2b*sin, y+1, pz+bb2b*cos, 30);
bb2[n] = true;
bb2a[n] = 300;
skillCool(ESP.getUser(), 2);
}
if(i==304&&Cool.isFinished(bb3a[n])){
for(var xx=x-1;xx<x+2;xx++)
for(var zz=z-1;zz<z+2;zz++)
setTile(xx, y+1, zz, 30);
setTile(x, y+3, z, 46);
ESP.antiLack(60);
explode(x+0.5, y+3.9, z+0.5, 0.4);
bb3[n] = true;
bb3a[n] = 300;
skillCool(ESP.getUser(), 3);
}
break;
}}}
if(meca[0]!=null){
for(var n=0;n<meca.length;n++){
if(meca[n]==ESP.getUser()){
if(i==302&&Cool.isFinished(mm1a[n])){
mmx1[n] = Player.getX();
mmy1[n] = Player.getY()-2;
mmz1[n] = Player.getZ();
px = Player.getX();
pz = Player.getZ();
yaw = Math.floor(getYaw());
sin = -Math.sin(yaw/180*Math.PI);
cos = Math.cos(yaw/180*Math.PI);
setTile(px+2*sin, y+1, pz+2*cos, 247);
setTile(px+2*sin, y+2, pz+2*cos, 247);
setTile(px+3*sin, y+2, pz+3*cos, 247);
setTile(px+4*sin, y+2, pz+4*cos, 247);
mm1[n] = true;
mm1a[n] = 150;
skillCool(ESP.getUser(), 1);
}
if(i==303&&Cool.isFinished(mm2a[n])){
mmx2a[n] = Player.getX();
mmy2a[n] = Player.getY()-2;
mmz2a[n] = Player.getZ();
for(var xx=mmx2a[n]-6;xx<mmx2a[n]+7;xx++)
setTile(xx, mmy2a[n], mmz2a[n], 247);
for(var zz=mmz2a[n]-6;zz<mmz2a[n]+7;zz++)
setTile(mmx2a[n], mmy2a[n], zz, 247);
setTile(mmx2a[n], mmy2a[n], mmz2a[n]+7, 46);
setTile(mmx2a[n]+7, mmy2a[n], mmz2a[n], 46);
setTile(mmx2a[n]-7, mmy2a[n], mmz2a[n], 46);
setTile(mmx2a[n], mmy2a[n], mmz2a[n]-7, 46);
mm2[n] = true;
mm2a[n] = 300;
skillCool(ESP.getUser(), 2);
}
if(i==304&&Cool.isFinished(mm3a[n])){
if(Cool.isFalse(mm3b[n])){
mmx[n] = x;
mmy[n] = y; 
mmz[n] = z;
setTile(x+1, y+9, z, 247);
setTile(x-1, y+9, z, 247);
setTile(x, y+9, z+1, 247);
setTile(x, y+9, z-1, 247);
mm3b[n] = true;
}
else if(mm3b[n]){
mmx2[n] = x;
mmy2[n] = y;
mmz2[n] = z;
setTile(x, y+1, z, 247)
setTile(x+1, y+1, z, 247);
setTile(x-1, y+1, z, 247);
setTile(x, y+1, z+1, 247);
setTile(x, y+1, z-1, 247);
setTile(x, y+2, z, 46);
mm3[n] = true;
mm3a[n] = 300;
skillCool(ESP.getUser(), 3);
mm3b[n] = false;
}
}
if(i==305&&Cool.isFinished(mm4a[n])){
ESP.sbm("Round Machine", true);
ESP.heal(meca[n]);
mmx4[n] = Player.getX();
mmy4[n] = Player.getY()-2;
mmz4[n] = Player.getZ();
for(var xx=mmx4[n]-1;xx<mmx4[n]+2;xx++)
setTile(xx, mmy4[n], mmz4[n], 247);
for(var zz=mmz4[n]-1;zz<mmz4[n]+2;zz++)
setTile(mmx4[n], mmy4[n], zz, 247);
mm4[n] = true;
mm4a[n] = 1800;
skillCool(ESP.getUser(), 4);
}
break;
}}}
if(tnt[0]!=null){
for(var n=0;n<tnt.length;n++){
if(tnt[n]==ESP.getUser()){
if(i==302&&Cool.isFinished(tn1a[n])){
ESP.antiLack(60);
setTile(x, y+1, z, 46);
explode(x, y+2, z, 0.5);
tn1x[n] = x;
tn1y[n] = y;
tn1z[n] = z;
tn1[n] = true;
tn1a[n] = 150;
skillCool(ESP.getUser(), 1);
}
if(i==303&&Cool.isFinished(tn2a[n])){
ESP.antiLack(90);
tnx[n] = x;
tny[n] = y;
tnz[n] = z;
for(var yy=y+1;yy<y+4;yy++)
setTile(x,yy,z,46);
tn2[n] = true;
tn2a[n] = 300;
skillCool(ESP.getUser(), 2);
}
if(i==304&&Cool.isFinished(tn3a[n])){
tnx3[n] = x;
tny3[n] = y;
tnz3[n] = z;
Level.spawnMob(x+5.5, y+0.9, z+5.5, 65);
Level.spawnMob(x+5.5, y+0.9, z+0.5, 65);
Level.spawnMob(x+5.5, y+0.9, z-4.5, 65);
Level.spawnMob(x+0.5, y+0.9, z+5.5, 65);
Level.spawnMob(x+0.5, y+0.9, z-4.5, 65);
Level.spawnMob(x-4.5, y+0.9, z+5.5, 65);
Level.spawnMob(x-4.5, y+0.9, z+0.5, 65);
Level.spawnMob(x-4.5, y+0.9, z-4.5, 65);
tn3[n] = true;
tn3a[n] = 300;
skillCool(ESP.getUser(), 3);
ESP.antiLack(90);
}
if(i==305&&Cool.isFinished(tn4a[n])){
ESP.sbm("Underground Burst", true);
ESP.heal(tnt[n]);
for(var xx=x-6;xx<x+7;xx++)
setTile(xx, y-2, z, 46);
for(var zz=z-6;zz<z+7;zz++)
setTile(x, y-2, zz, 46);
for(var xx=x-2;xx<x+3;xx++)
for(var zz=z-2;zz<z+3;zz++)
setTile(xx,y-2,zz,0);
setTile(x, y, z, 46);
tnx2[n] = x;
tny2[n] = y;
tnz2[n] = z;
tn4[n] = true;
tn4a[n] = 1800;
skillCool(ESP.getUser(), 4);
}
break;
}}}
if(trap[0]!=null){
for(var n=0;n<trap.length;n++){
if(trap[n]==ESP.getUser()){
if(i==302&&Cool.isFinished(tr1a[n])){
if(Cool.isFinished(tr1b[n])){
setTile(x, y+1, z, 38);
trx1[n] = x;
try1[n] = y;
trz1[n] = z;
tr1b[n] = true;
}
else if(tr1b[n]){
ESP.antiLack(5);
explode(trx1[n], try1[n]+1, trz1[n], 2.5);
tr1[n] = true;
tr1a[n] = 150;
skillCool(ESP.getUser(), 1);
tr1b[n] = false;
}
}
if(i==303&&Cool.isFinished(tr2a[n])){
if(Cool.isFinished(tr2b[n])){
setTile(x, y+1, z, 38);
trx2[n] = x;
try2[n] = y;
trz2[n] = z;
tr2b[n] = true;
}
else if(tr2b[n]){
for(var xx=trx2[n]-1;xx<trx2[n]+2;xx++){
for(var zz=trz2[n]-1;zz<trz2[n]+2;zz++){
setTile(xx, try2[n], zz, 0);
setTile(xx, try2[n]-1, zz, 51);
}}
tr2b[n] = false;
tr2[n] = true;
tr2a[n] = 300;
skillCool(ESP.getUser(), 2);
}
}
if(i==304&&Cool.isFinished(tr3a[n])){
if(Cool.isFinished(tr3b[n])){
setTile(x, y+1, z, 38);
trx3[n] = x;
try3[n] = y;
trz3[n] = z;
tr3b[n] = true;
}
else if(tr3b[n]){
setTile(trx3[n], try3[n]+1, trz3[n], 10);
setTile(trx3[n]+2, try3[n]+1, trz3[n], 51);
setTile(trx3[n]-2, try3[n]+1, trz3[n], 51);
setTile(trx3[n], try3[n]+1, trz3[n]+2, 51);
setTile(trx3[n], try3[n]+1, trz3[n]-2, 51);
tr3b[n] = false;
tr3[n] = true;
tr3a[n] = 300;
skillCool(ESP.getUser(), 3);
}
}
if(i==305&&Cool.isFinished(tr4a[n])){
if(Cool.isFinished(tr4b[n])){
ESP.heal(trap[n]);
setTile(x, y+1, z, 38);
trx4[n] = x;
try4[n] = y;
trz4[n] = z;
tr4b[n] = true;
}
else if(tr4b[n]){
ESP.sbm("Trap of Hell", true);
for(var xx=trx4[n]-4;xx<trx4[n]+5;xx++)
for(var yy=try4[n];yy<try4[n]+5;yy++)
for(var zz=trz4[n]-4;zz<trz4[n]+5;zz++)
setTile(xx,yy,zz,7);
for(var xx=trx4[n]-3;xx<trx4[n]+4;xx++)
for(var yy=try4[n]+1;yy<try4[n]+4;yy++)
for(var zz=trz4[n]-3;zz<trz4[n]+4;zz++)
setTile(xx,yy,zz,0);
setTile(trx4[n], try4[n], trz4[n], 11);
setTile(trx4[n]+2, try4[n]+2, trz4[n], 46);
setTile(trx4[n]-2, try4[n]+2, trz4[n], 46);
setTile(trx4[n], try4[n]+2, trz4[n]+2, 46);
setTile(trx4[n], try4[n]+2, trz4[n]-2, 46);
tr4b[n] = false;
tr4[n] = true;
tr4a[n] = 1800;
skillCool(ESP.getUser(), 4);
}
}
break;
}}}
if(heal[0]!=null){
for(var n=0;n<heal.length;n++){
if(heal[n]==ESP.getUser()){
if(i==302&&Cool.isFinished(h1a[n])){
Entity.setHealth(ESP.getUser(), Entity.getHealth(Player.getEntity())+6);
h1[n] = true;
h1a[n] = 150;
skillCool(ESP.getUser(), 1);
}
if(i==304&&Cool.isFinished(h3a[n])){
for(var xx=x-1;xx<x+2;xx++)
for(var zz=z-1;zz<z+2;zz++)
setTile(xx,y+1,zz,30);
h3[n] = true;
h3a[n] = 300;
skillCool(ESP.getUser(), 3);
}
if(i==305&&Cool.isFinished(h4a[n])){
ESP.sbm("Immortality", true);
Entity.setNameTag(heal[n], "§e"+Player.getName(heal[n]));
arroundMobHealthDown(heal[n], 20, 7);
if(Entity.getHealth(heal[n])<50)
Entity.setHealth(heal[n], 50);
h4b[n] = Entity.getHealth(heal[n]);
h4[n] = true;
h4a[n] = 1800;
skillCool(ESP.getUser(), 4);
}
break;
}}}
if(nether[0]!=null){
for(var n=0;n<nether.length;n++){
if(nether[n]==ESP.getUser()){
if(i==302&&Cool.isFinished(n1a[n])){
for(var xx=x-1;xx<x+2;xx++)
for(var zz=z-1;zz<z+2;zz++)
setTile(xx, y, zz, 87);
setTile(x+2, y, z, 87);
setTile(x-2, y, z, 87);
setTile(x, y, z+2, 87);
setTile(x, y, z-2, 87);
setTile(x+1, y+1, z, 51);
setTile(x-1, y+1, z, 51);
setTile(x, y+1, z+1, 51);
setTile(x, y+1, z-1, 51);
n1[n] = true;
n1a[n] = 150;
skillCool(ESP.getUser(), 1);
}
if(i==303&&Cool.isFinished(n2a[n])){
setTile(x, y+1, z, 10);
n2x[n] = x;
n2y[n] = y;
n2z[n] = z;
n2[n] = true;
n2a[n] = 300;
skillCool(ESP.getUser(), 2);
}
if(i==304&&Cool.isFinished(n3a[n])){
ESP.makeBind(x, y, z, 87);
Level.spawnMob(x, y+3, z, 36);
n3[n] = true;
n3a[n] = 300;
skillCool(ESP.getUser(), 3);
}
if(i==305&&Cool.isFinished(n4a[n])){
ESP.sbm("Nether Summon", true);
ESP.heal(nether[n]);
arroundMobHealthDown(nether[n], 20, 7);
nx[n] = Player.getX();
ny[n] = Player.getY()-2;
nz[n] = Player.getZ();
autoRecover(nx[n], ny[n], nz[n], 12, 87);
autoRecover(nx[n], ny[n]+7, nz[n], 12, 87);
setTile(nx[n]-3, ny[n]+6, nz[n], 89);
setTile(nx[n]-4, ny[n]+6, nz[n], 89);
setTile(nx[n]-5, ny[n]+6, nz[n], 89);
setTile(nx[n]-3, ny[n]+5, nz[n], 89);
setTile(nx[n]-3, ny[n]+5, nz[n]+1, 89);
setTiles(nx[n]-12, nx[n]-4, ny[n], ny[n], nz[n]-12, nz[n]-5, 11);
setTile(nx[n]-12, ny[n], nz[n]-4, 11);
setTile(nx[n]-11, ny[n], nz[n]-4, 11);
setTile(nx[n]-10, ny[n], nz[n]-4, 11);
setTile(nx[n]-9, ny[n], nz[n]-4, 11);
setTile(nx[n]-12, ny[n], nz[n]-3, 11);
setTile(nx[n]-11, ny[n], nz[n]-3, 11);
setTiles(nx[n], nx[n]+12, ny[n]+1, ny[n]+1, nz[n]+1, nz[n]+12, 87);
setTile(nx[n], ny[n]+1, nz[n]+1, 0);
setTile(nx[n], ny[n]+1, nz[n]+1, 0);
setTile(nx[n], ny[n]+1, nz[n]+1, 0);
setTiles(nx[n]+5, nx[n]+12, ny[n]+2, ny[n]+2, nz[n]+4, nz[n]+12, 87);
setTile(nx[n], ny[n]+4, nz[n], 89);
setTile(nx[n]+5, ny[n]+4, nz[n]+9, 89);
setTile(nx[n]+9, ny[n]+4, nz[n]-7, 89);
setTile(nx[n]-7, ny[n]+4, nz[n]+8, 89);
setTile(nx[n]-11, ny[n]+4, nz[n]-4, 89);
setTile(nx[n]+2, ny[n], nz[n]+2, 13);
setTile(nx[n]+3, ny[n], nz[n]+1, 13);
setTile(nx[n]+2, ny[n], nz[n]+1, 13);
setTile(nx[n]+2, ny[n]+2, nz[n]+5, 51);
setTile(nx[n]-6, ny[n]+1, nz[n]+9, 51);
setTile(nx[n]+7, ny[n]+1, nz[n], 51);
setTile(nx[n]-9, ny[n]+1, nz[n]-1, 51);
setTile(nx[n]+11, ny[n]+1, nz[n]-8, 51);
setTile(nx[n]-6, ny[n]+1, nz[n]+3, 51);
Level.spawnMob(nx[n]+9, ny[n]+3, nz[n]+9, 36);
Level.spawnMob(nx[n]+9, ny[n]+3, nz[n]-9, 36);
Level.spawnMob(nx[n]-9, ny[n]+3, nz[n]+9, 36);
Level.spawnMob(nx[n]-9, ny[n]+3, nz[n]-9, 36);
Level.spawnMob(nx[n]+9, ny[n]+3, nz[n], 36);
Level.spawnMob(nx[n]-9, ny[n]+3, nz[n], 36);
Level.spawnMob(nx[n], ny[n]+3, nz[n]+9, 36);
Level.spawnMob(nx[n], ny[n]+3, nz[n]-9, 36);
n4[n] = true;
n4a[n] = 1800;
skillCool(ESP.getUser(), 4);
}
break;
}}}
if(cloud[0]!=null){
for(var n=0;n<cloud.length;n++){
if(cloud[n]==ESP.getUser()){
if(i==302&&Cool.isFinished(cc1a[n])){
explode(Math.floor(x)+0.5, y+3, Math.floor(z)+0.5, 1.5);
setTiles(x-1, x+1, y+1, y+3, z-1, z+1, 35);
ccx1[n] = x;
ccy1[n] = y;
ccz1[n] = z;
cc1[n] = true;
cc1a[n] = 150;
skillCool(ESP.getUser(), 1);
}
if(i==303&&Cool.isFinished(cc2a[n])){
if(Cool.isFalse(cc2b[n])){
for(var xx=x-1;xx<x+2;xx++)
for(var yy=y+5;yy<y+7;yy++)
for(var zz=z-1;zz<z+2;zz++)
setTile(xx, yy, zz, 35);
cc2b[n] = true;
ccx2[n] = x;
ccy2[n] = y;
ccz2[n] = z;
}
else if(cc2b[n]){
for(var yy=ccy2[n]+1;yy<ccy2[n]+5;yy++)
setTile(ccx2[n], yy, ccz2[n], 89);
cc2b[n] = false;
cc2[n] = true;
cc2a[n] = 300;
skillCool(ESP.getUser(), 2);
}
}
if(i==304){
if(Cool.isFinished(cc3a[n])&&Cool.isFalse(cc3b[n])){
cc3[n] = true;
cc3a[n] = 300;
skillCool(ESP.getUser(), 3);
cc3b[n] = true;
}
else if(cc3b[n]){
mmxc[n] = Entity.getX(cloud[n]);
mmyc[n] = Entity.getY(cloud[n])-2;
mmzc[n] = Entity.getZ(cloud[n]);
cc3b[n] = false;
cc3c[n] = true;
for(var xx=mmxc[n]-2;xx<mmxc[n]+3;xx++)
for(var yy=mmyc[n]-1;yy<mmyc[n]+1;yy++)
for(var zz=mmzc[n]-2;zz<mmzc[n]+3;zz++)
if(getTile(xx, yy, zz)==35){
setTile(xx, yy, zz, 0);
}
}
}
if(i==305&&Cool.isFinished(cc4a[n])){
ESP.heal(cloud[n]);
ESP.sbm("Large Mist", true);
ccx[n] = Player.getX();
ccy[n] = Player.getY()-2;
ccz[n] = Player.getZ();
setTiles(ccx[n]-12, ccx[n]+12, ccy[n]+1, ccy[n]+3, ccz[n]-12, ccz[n]+12, 35);
for(var xx=ccx[n]-1;xx<ccx[n]+2;xx++)
for(var yy=ccy[n]+1;yy<ccy[n]+4;yy++)
for(var zz=ccz[n]-1;zz<ccz[n]+2;zz++)
setTile(xx, yy, zz, 9);
cc4[n] = true;
cc4a[n] = 1800;
skillCool(ESP.getUser(), 4);
}
break;
}}}
if(assassin[0]!=null){
for(var n=0;n<assassin.length;n++){
if(assassin[n]==ESP.getUser()){
if(i==302&&Cool.isFinished(as1a[n])){
pe = Player.getEntity();
if(ad==pe){
Entity.setVelX(pe, 1.5*x-1.5*Entity.getX(pe));
Entity.setVelY(pe, 0.7);
Entity.setVelZ(pe, 1.5*z-1.5*Entity.getZ(pe));
}
else{
px = Player.getX();
pz = Player.getZ();
yaw = Math.floor(getYaw());
sin = -Math.sin(yaw/180*Math.PI);
cos = Math.cos(yaw/180*Math.PI);
teleport(pe, px+15*sin, y+3, pz+15*cos);
}
as1[n] = true;
as1a[n] = 150;
skillCool(ESP.getUser(), 1);
}
if(i==303&&Cool.isFinished(as2a[n])){
teleport(ESP.getUser(), x+2*(x-Player.getX()), y+3, z+2*(z-Player.getZ()));
ESP.antiLack(5);
explode(x, y, z, 3);
as2[n] = true;
as2a[n] = 300;
skillCool(ESP.getUser(), 2);
}
if(i==304&&Cool.isFinished(as3a[n])){
px = Player.getX();
pz = Player.getZ();
yaw = Math.floor(getYaw());
sin = -Math.sin(yaw/180*Math.PI);
cos = Math.cos(yaw/180*Math.PI);
ESP.antiLack(5);
explode(px-5*sin, y, pz-5*cos, 3);
as3[n] = true;
as3a[n] = 300;
skillCool(ESP.getUser(), 3);
}
break;
}}}
if(arrow[0]!=null){
for(var n=0;n<arrow.length;n++){
if(arrow[n]==ESP.getUser()){
if(i==302&&Cool.isFinished(ar1a[n])){
var arr = Level.spawnMob(x+0.5, y+5, z+0.5, 80);
Entity.setFireTicks(arr, 30);
ar1x[n] = x;
ar1y[n] = y;
ar1z[n] = z;
ar1[n] = true;
ar1a[n] = 150;
skillCool(ESP.getUser(), 1);
}
if(i==303&&Cool.isFinished(ar2a[n])){
Level.spawnMob(x, y+5, z, 80);
arx2[n] = x;
ary2[n] = y;
arz2[n] = z;
ar2[n] = true;
ar2a[n] = 300;
skillCool(ESP.getUser(), 2);
}
if(i==304&&Cool.isFinished(ar3a[n])){
px = Player.getX();
pz = Player.getZ();
yaw = Math.floor(getYaw());
sin = -Math.sin(yaw/180*Math.PI);
cos = Math.cos(yaw/180*Math.PI);
arr = Level.spawnMob(px+2*sin, y+3, pz+2*cos, 34);
Entity.setVelX(arr, 2*sin);
Entity.setVelZ(arr, 2*cos);
ar3[n] = true;
ar3a[n] = 300;
skillCool(ESP.getUser(), 3);
}
if(i==305&&Cool.isFinished(ar4a[n])){
ESP.heal(arrow[n]);
ESP.sbm("Arrow Rain Burst", true);
arx[n] = Player.getX();
ary[n] = Player.getY()-2;
arz[n] = Player.getZ();
var cache2 = [];
for(var m=-5;m<6;m++){
for(var o=-5;o<6;o++){
var cache = Level.spawnMob(arx[n]+3*m+0.5, ary[n]+56, arz[n]+2*o+0.5, 80);
Entity.setVelY(cache, -2);
cache2.push(cache);
}}
for(var xx=arx[n]-1;xx<arx[n]+2;xx++){
for(var zz=arz[n]-1;zz<arz[n]+2;zz++){
setTile(xx, ary[n]+1, zz, 0);
setTile(xx, ary[n]+4, zz, 20);
}}
var arr = Level.spawnMob(arx[n]+6.5, ary[n]+25, arz[n]+6.5, 80);
Entity.setFireTicks(arr, 60);
arr = Level.spawnMob(arx[n]+6.5, ary[n]+25, arz[n], 80);
Entity.setFireTicks(arr, 60);
arr = Level.spawnMob(arx[n]+6.5, ary[n]+25, arz[n]-5.5, 80);
Entity.setFireTicks(arr, 60);
arr = Level.spawnMob(arx[n], ary[n]+25, arz[n]+6.5, 80);
Entity.setFireTicks(arr, 60);
arr = Level.spawnMob(arx[n], ary[n]+25, arz[n]-5.5, 80);
Entity.setFireTicks(arr, 60);
arr = Level.spawnMob(arx[n]-5.5, ary[n]+25, arz[n]+6.5, 80);
Entity.setFireTicks(arr, 60);
arr = Level.spawnMob(arx[n]-5.5, ary[n]+25, arz[n], 80);
Entity.setFireTicks(arr, 60);
arr = Level.spawnMob(arx[n]-5.5, ary[n]+25, arz[n]-5.5, 80);
Entity.setFireTicks(arr, 60);
setTile(arx[n]+6, ary[n]+1, arz[n]+6, 46);
setTile(arx[n]+6, ary[n]+1, arz[n], 46);
setTile(arx[n]+6, ary[n]+1, arz[n]-6, 46);
setTile(arx[n], ary[n]+1, arz[n]+6, 46);
setTile(arx[n], ary[n]+1, arz[n]-6, 46);
setTile(arx[n]-6, ary[n]+1, arz[n]+6, 46);
setTile(arx[n]-6, ary[n]+1, arz[n], 46);
setTile(arx[n]-6, ary[n]+1, arz[n]-6, 46);
ar4[n] = true;
ar4a[n] = 1800;
skillCool(ESP.getUser(), 4);
new Thread({
run : function(){
Thread.sleep(15000);
for(var m=0;m<cache2.length;m++)
Entity.remove(cache2[m]);
}
}).start();
}
break;
}}}
if(mage[0]!=null){
for(var n=0;n<mage.length;n++){
if(mage[n]==ESP.getUser()){
if(i==302&&Cool.isFinished(ma1a[n])){
px = Player.getX();
pz = Player.getZ();
yaw = Math.floor(getYaw());
sin = -Math.sin(yaw/180*Math.PI);
cos = Math.cos(yaw/180*Math.PI);
for(var m1b=3;m1b<20;m1b++)
setTile(px+m1b*sin, y+1, pz+m1b*cos, 51);
ma1[n] = true;
ma1a[n] = 150;
skillCool(ESP.getUser(), 1);
}
if(i==303&&Cool.isFinished(ma2a[n])){
max2[n] = Player.getX();
may2[n] = Player.getY()-2;
maz2[n] = Player.getZ();
setTile(max2[n]+2, may2[n]+1, maz2[n]+2, 8);
setTile(max2[n]+2, may2[n]+1, maz2[n]-2, 8);
setTile(max2[n]-2, may2[n]+1, maz2[n]+2, 8);
setTile(max2[n]-2, may2[n]+1, maz2[n]-2, 8);
ma2[n] = true;
ma2a[n] = 300;
skillCool(ESP.getUser(), 2);
}
if(i==304&&Cool.isFinished(ma3a[n])){
max3 = Math.abs(x-Player.getX());
maz3 = Math.abs(z-Player.getZ());
if(max3>maz3){
for(var yy=y+1;yy<y+4;yy++)
for(var zz=z-2;zz<z+3;zz++)
setTile(x, yy, zz, 17);
}
else if(max3<maz3){
for(var xx=x-2;xx<x+3;xx++)
for(var yy=y+1;yy<y+4;yy++)
setTile(xx, yy, z, 17);
}
ma3[n] = true;
ma3a[n] = 300;
skillCool(ESP.getUser(), 3);
}
if(i==305&&Cool.isFinished(ma4a[n])){
ESP.heal(mage[n]);
ESP.sbm("Surround Explosion", true);
max[n] = Player.getX();
may[n] = Player.getY()-2;
maz[n] = Player.getZ();
explode(max[n]+5, may[n], maz[n]+5, 3);
ma4[n] = true;
ma4a[n] = 1800;
skillCool(ESP.getUser(), 4);
}
break;
}}}
if(defense[0]!=null){
for(var n=0;n<defense.length;n++){
if(defense[n]==ESP.getUser()){
if(i==302&&Cool.isFinished(de1a[n])){
dexa = Math.abs(x-Player.getX());
deza = Math.abs(z-Player.getZ());
if(dexa>deza){
for(var yy=y+1;yy<y+3;yy++)
for(var zz=z-1;zz<z+2;zz++)
setTile(x, yy, zz, 3);
}
else if(dexa<deza){
for(var xx=x-1;xx<x+2;xx++)
for(var yy=y+1;yy<y+3;yy++)
setTile(xx, yy, z, 3);
}
de1[n] = true;
de1a[n] = 150;
skillCool(ESP.getUser(), 1);
}
if(i==303&&Cool.isFinished(de2a[n])){
dexa = Math.abs(x-Player.getX());
deza = Math.abs(z-Player.getZ());
if(dexa>deza){
for(var yy=y+1;yy<y+4;yy++)
for(var zz=z-2;zz<z+3;zz++)
setTile(x, yy, zz, 30);
}
else if(dexa<deza){
for(var xx=x-2;xx<x+3;xx++)
for(var yy=y+1;yy<y+4;yy++)
setTile(xx, yy, z, 30);
}
de2[n] = true;
de2a[n] = 300;
skillCool(ESP.getUser(), 2);
}
if(i==304){
if(Cool.isFinished(de3a[n])&&Cool.isFalse(de3b[n])){
dexa = Math.abs(x-Player.getX());
deza = Math.abs(z-Player.getZ());
if(dexa>deza){
for(var yy=y+1;yy<y+4;yy++)
for(var zz=z-2;zz<z+3;zz++)
setTile(x, yy, zz, 20);
}
else if(dexa<deza){
for(var xx=x-2;xx<x+3;xx++)
for(var yy=y+1;yy<y+4;yy++)
setTile(xx, yy, z, 20);
}
dex3[n] = x;
dey3[n] = y;
dez3[n] = z;
de3b[n] = true;
de3[n] = true;
de3a[n] = 300;
skillCool(ESP.getUser(), 3);
}
else if(de3b[n]){
ESP.antiLack(5);
explode(dex3[n], dey3[n]+1, dez3[n], 3);
de3b[n] = false;
}
}
if(i==305){
if(Cool.isFinished(de4a[n])&&Cool.isFalse(de4b[n])){
ESP.heal(defense[n]);
ESP.sbm("Hyper Protection Attack", true);
dex[n] = Player.getX();
dey[n] = Player.getY()-2;
dez[n] = Player.getZ();
for(var xx=dex[n]-2;xx<dex[n]+3;xx++)
for(var yy=dey[n];yy<dey[n]+4;yy++)
for(var zz=dez[n]-2;zz<dez[n]+3;zz++)
setTile(xx, yy, zz, 7);
for(var xx=dex[n]-1;xx<dex[n]+2;xx++)
for(var yy=dey[n]+1;yy<dey[n]+4;yy++)
for(var zz=dez[n]-1;zz<dez[n]+2;zz++)
setTile(xx, yy, zz, 0);
de4b[n] = true;
de4[n] = true;
de4a[n] = 1800;
skillCool(ESP.getUser(), 4);
}
else if(de4b[n]){
for(var xx=dex[n]-2;xx<dex[n]+3;xx++){
for(var yy=dey[n]+1;yy<dey[n]+4;yy++)
for(var zz=dez[n]-2;zz<dez[n]+3;zz++){
setTile(xx, yy, zz, 0);
setTile(xx, dey[n], zz, 2);}}
de4b[n] = false;
}
}
break;
}}}
if(poison[0]!=null){
for(var n=0;n<poison.length;n++){
if(poison[n]==ESP.getUser()){
if(i==303&&Cool.isFinished(p2a[n])){
for(var xx=x-1;xx<x+2;xx++)
for(var yy=y+1;yy<y+5;yy++)
for(var zz=z-1;zz<z+2;zz++)
setTile(xx, yy, zz, 20);
setTile(x, y+2, z, 35, 13);
setTile(x, y+3, z, 35, 13);
setTile(x, y+4, z, 0);
p2xa[n] = x;
p2ya[n] = y;
p2za[n] = z;
p2[n] = true;
p2a[n] = 300;
skillCool(ESP.getUser(), 2);
}
if(i==305&&Cool.isFinished(p4a[n])){
ESP.heal(poison[n]);
ESP.sbm("Poison Mist Eruption", true);
p4x[n] = Player.getX();
p4y[n] = Player.getY()-2;
p4z[n] = Player.getZ();
for(var yy=p4y[n]+1;yy<p4y[n]+4;yy++){
for(var xx=p4x[n]-9;xx<p4x[n]+10;xx++)
for(var zz=p4z[n]-9;zz<p4z[n]+10;zz++)
setTile(xx, yy, zz, 35, 13);
for(var xx=p4x[n]-1;xx<p4x[n]+2;xx++)
for(var zz=p4z[n]-1;zz<p4z[n]+2;zz++)
setTile(xx, yy, zz, 0);
}
p4[n] = true;
p4a[n] = 1800;
skillCool(ESP.getUser(), 4);
}
break;
}}}
if(melt[0]!=null){
for(var n=0;n<melt.length;n++){
if(melt[n]==ESP.getUser()){
if(i==302&&Cool.isFinished(me1a[n])){
setTile(x, y+1, z, 11);
setTile(x+1, y+1, z+1, 11);
setTile(x+1, y+1, z-1, 11);
setTile(x-1, y+1, z+1, 11);
setTile(x-1, y+1, z-1, 11);
me1x[n] = x;
me1y[n] = y;
me1z[n] = z;
me1[n] = true;
me1a[n] = 150;
skillCool(ESP.getUser(), 1);
}
if(i==303&&Cool.isFinished(me2a[n])){
mexa[n] = Math.abs(x-Player.getX());
meza[n] = Math.abs(z-Player.getZ());
if(mexa[n]>meza[n]){
setTile(x, y+1, z+1, 11);
setTile(x, y+1, z-1, 11);
setTile(x, y+3, z+1, 11);
setTile(x, y+3, z-1, 11);
}
else if(mexa[n]<meza[n]){
setTile(x+1, y+1, z, 11);
setTile(x-1, y+1, z, 11);
setTile(x+1, y+3, z, 11);
setTile(x-1, y+3, z, 11);
}
setTile(x, y+2, z, 11);
me2x[n] = x;
me2y[n] = y;
me2z[n] = z;
me2[n] = true;
me2a[n] = 300;
skillCool(ESP.getUser(), 2);
}
if(i==304&&Cool.isFinished(me3a[n])){
px = Player.getX();
pz = Player.getZ();
yaw = Math.floor(getYaw());
sin = -Math.sin(yaw/180*Math.PI);
cos = Math.cos(yaw/180*Math.PI);
for(var gun=3;gun<30;gun++)
setTile(px+gun*sin, y, pz+gun*cos, 11);
me3[n] = true;
me3a[n] = 300;
skillCool(ESP.getUser(), 3);
}
if(i==305&&Cool.isFinished(me4a[n])){
ESP.heal(melt[n]);
ESP.sbm("Lava Curtain", true);
mex[n] = Player.getX();
mey[n] = Player.getY()-2;
mez[n] = Player.getZ();
for(var xx=mex[n]-5;xx<mex[n]+6;xx++)
for(var zz=mez[n]-5;zz<mez[n]+6;zz++)
setTile(xx, mey[n]+4, zz, 49);
for(var xx=mex[n]-4;xx<mex[n]+5;xx++)
for(var zz=mez[n]-4;zz<mez[n]+5;zz++)
setTile(xx, mey[n]+4, zz, 10)
for(var xx=mex[n]-3;xx<mex[n]+4;xx++)
for(var zz=mez[n]-3;zz<mez[n]+4;zz++)
setTile(xx, mey[n]+4, zz, 49);
for(var xx=mex[n]-5;xx<mex[n]+6;xx++)
for(var zz=mez[n]-5;zz<mez[n]+6;zz++)
setTile(xx, mey[n], zz, 11);
for(var xx=mex[n]-3;xx<mex[n]+4;xx++)
for(var zz=mez[n]-3;zz<mez[n]+4;zz++)
setTile(xx, mey[n], zz, 2);
me4[n] = true;
me4a[n] = 1800;
skillCool(ESP.getUser(), 4);
}
break;
}}}
if(hfreeze[0]!=null){
for(var n=0;n<hfreeze.length;n++){
if(hfreeze[n]==ESP.getUser()){
if(i==302&&Cool.isFinished(hf1a[n])){
setTile(x, y+1, z, 79);
setTile(x, y+2, z, 79);
hf1x[n] = x;
hf1y[n] = y;
hf1z[n] = z;
hf1[n] = true;
hf1a[n] = 150;
skillCool(ESP.getUser(), 1);
}
if(i==303&&Cool.isFinished(hf2a[n])){
ESP.makeBind(x, y, z, 79);
hf2x[n] = x;
hf2y[n] = y;
hf2z[n] = z;
hf2[n] = true;
hf2a[n] = 300;
skillCool(ESP.getUser(), 2);
}
if(i==304){
if(Cool.isFinished(hf3a[n])&&Cool.isFalse(hf3b[n])){
hf3x[n] = Entity.getX(hfreeze[n]);
hf3y[n] = Entity.getY(hfreeze[n])-2;
hf3z[n] = Entity.getZ(hfreeze[n]);
for(var xx=hf3x[n]-1;xx<hf3x[n]+2;xx++)
for(var zz=hf3z[n]-1;zz<hf3z[n]+2;zz++)
if(getTile(xx, hf3y[n], zz)!=7){
setTile(xx, hf3y[n], zz, 79);
}
hf3b[n] = true;
hf3[n] = true;
hf3a[n] = 300;
skillCool(ESP.getUser(), 3);
}
else if(hf3b[n]){
hf3b[n] = false;
hf3c[n] = -1;
}
}
if(i==305&&Cool.isFinished(hf4a[n])){
ESP.heal(hfreeze[n]);
ESP.sbm("Blizzard", true);
hfx[n] = Player.getX();
hfy[n] = Player.getY()-2;
hfz[n] = Player.getZ();
for(var yy=hfy[n]+9;yy<hfy[n]+11;yy++){
setTile(hfx[n]+5, yy, hfz[n]+5, 79);
setTile(hfx[n]+7, yy, hfz[n], 79);
setTile(hfx[n]+5, yy, hfz[n]-5, 79);
setTile(hfx[n], yy, hfz[n]+7, 79);
setTile(hfx[n], yy, hfz[n]-7, 79);
setTile(hfx[n]-5, yy, hfz[n]+5, 79);
setTile(hfx[n]-7, yy, hfz[n], 79);
setTile(hfx[n]-5, yy, hfz[n]-5, 79);
}
hf4[n] = true;
hf4a[n] = 1800;
skillCool(ESP.getUser(), 4);
}
break;
}}}
if(builder[0]!=null){
for(var n=0;n<builder.length;n++){
if(builder[n]==ESP.getUser()){
if(i==302&&Cool.isFinished(bu1a[n])){
bu1x = Math.abs(Player.getX()-x);
bu1z = Math.abs(Player.getZ()-z);
if(bu1x>bu1z){
for(var zz=z-2;zz<z+3;zz++)
setTile(x, y+1, zz, 85);
}
else if(bu1x<bu1z){
for(var xx=x-2;xx<x+3;xx++)
setTile(xx, y+1, z, 85);
}
bu1[n] = true;
bu1a[n] = 150;
skillCool(ESP.getUser(), 1);
}
if(i==303){
if(Cool.isFinished(bu2a[n])&&Cool.isFalse(bu2b[n])){
for(var yy=y+1;yy<y+4;yy++){
setTile(x+1, yy, z+2, 5);
setTile(x, yy, z+2, 5);
setTile(x-1, yy, z+2, 5);
setTile(x+1, yy, z-2, 5);
setTile(x, yy, z-2, 5);
setTile(x-1, yy, z-2, 5);
setTile(x+2, yy, z+1, 5);
setTile(x+2, yy, z, 5);
setTile(x+2, yy, z-1, 5);
setTile(x-2, yy, z+1, 5);
setTile(x-2, yy, z, 5);
setTile(x-2, yy, z-1, 5);
}
for(var xx=x-1;xx<x+2;xx++)
for(var zz=z-1;zz<z+2;zz++)
setTile(xx, y+4, zz, 5);
setTile(x+2, y+2, z, 102);
setTile(x-2, y+2, z, 102);
setTile(x, y+2, z+2, 102);
setTile(x, y+2, z-2, 64, 8);
setTile(x, y+1, z-2, 64, 3);
setTile(x, y+1, z, 50);
bu2x[n] = x;
bu2y[n] = y;
bu2z[n] = z;
bu2b[n] = true;
bu2[n] = true;
bu2a[n] = 300;
skillCool(ESP.getUser(), 2);
}
else if(bu2b[n]){
for(var xx=bu2x[n]-1;xx<bu2x[n]+2;xx++)
for(var zz=bu2z[n]-1;zz<bu2z[n]+2;zz++)
setTile(xx, bu2y[n]+1, zz, 51);
bu2b[n] = false;
}
}
if(i==304){
if(Cool.isFinished(bu3a[n])&&Cool.isFalse(bu3b[n])){
for(var yy=y+1;yy<y+4;yy++){
setTile(x+1, yy, z+2, 4);
setTile(x, yy, z+2, 4);
setTile(x-1, yy, z+2, 4);
setTile(x+1, yy, z-2, 4);
setTile(x, yy, z-2, 4);
setTile(x-1, yy, z-2, 4);
setTile(x+2, yy, z+1, 4);
setTile(x+2, yy, z, 4);
setTile(x+2, yy, z-1, 4);
setTile(x-2, yy, z+1, 4);
setTile(x-2, yy, z, 4);
setTile(x-2, yy, z-1, 4);
}
for(var xx=x-1;xx<x+2;xx++)
for(var zz=z-1;zz<z+2;zz++)
setTile(xx, y+4, zz, 4);
setTile(x+2, y+2, z, 102);
setTile(x-2, y+2, z, 102);
setTile(x, y+2, z+2, 102);
setTile(x, y+2, z-2, 64, 8);
setTile(x, y+1, z-2, 64, 3);
setTile(x, y+1, z, 50);
bu3x[n] = x;
bu3y[n] = y;
bu3z[n] = z;
bu3b[n] = true;
bu3[n] = true;
bu3a[n] = 300;
skillCool(ESP.getUser(), 3);
}
else if(bu3b[n]){
ESP.antiLack(5);
explode(bu3x[n], bu3y[n]+3, bu3z[n], 3.5);
bu3b[n] = false;
}
}
if(i==305){
if(Cool.isFinished(bu4a[n])&&Cool.isFalse(bu4b[n])){
ESP.heal(builder[n]);
ESP.sbm("Building", true);
arroundMobHealthDown(builder[n], 20, 7);
for(var xx=x-3;xx<x+4;xx++){
for(var yy=y+1;yy<y+14;yy++){
for(var zz=z-3;zz<z+4;zz++){
setTile(xx, yy, z+4, 5);
setTile(xx, yy, z-4, 5);
setTile(x+4, yy, zz, 5);
setTile(x-4, yy, zz, 5);
setTile(x+4, yy, z+4, 17);
setTile(x+4, yy, z-4, 17);
setTile(x-4, yy, z+4, 17);
setTile(x-4, yy, z-4, 17);
setTile(xx, y+1, zz, 5);
setTile(xx, y+5, zz, 5);
setTile(xx, y+9, zz, 5);
setTile(xx, y+13, zz, 5);
setTile(xx, y+5, z+4, 17, 4);
setTile(xx, y+5, z-4, 17, 4);
setTile(x+4, y+5, zz, 17, 8);
setTile(x-4, y+5, zz, 17, 8);
setTile(xx, y+9, z+4, 17, 4);
setTile(xx, y+9, z-4, 17, 4);
setTile(x+4, y+9, zz, 17, 8);
setTile(x-4, y+9, zz, 17, 8);
setTile(xx, y+13, z+4, 17, 4);
setTile(xx, y+13, z-4, 17, 4);
setTile(x+4, y+13, zz, 17, 8);
setTile(x-4, y+13, zz, 17, 8);
}}}
for(var xx=x-4;xx<x+5;xx++){
for(var zz=z-4;zz<z+5;zz++){
setTile(xx, y+14, z+4, 85);
setTile(xx, y+14, z-4, 85);
setTile(x+4, y+14, zz, 85);
setTile(x-4, y+14, zz, 85);
}}
setTile(x+4, y+13, z+4, 17, 4);
setTile(x+4, y+13, z-4, 17, 4);
setTile(x-4, y+13, z+4, 17, 4);
setTile(x-4, y+13, z-4, 17, 4);
setTile(x+4, y+15, z+4, 50);
setTile(x+4, y+15, z-4, 50);
setTile(x-4, y+15, z+4, 50);
setTile(x-4, y+15, z-4, 50);
setTile(x-4, y+2, z-3, 64, 2);
setTile(x-4, y+3, z-3, 64, 9);
setTile(x-4, y+2, z-2, 64, 2);
setTile(x-4, y+3, z-2, 64, 8);
setTile(x-5, y+1, z-4, 53, 2);
setTile(x-5, y+1, z-3, 53, 0);
setTile(x-5, y+1, z-2, 53, 0);
setTile(x-5, y+1, z-1, 53, 3);
setTile(x-5, y+3, z-4, 50, 2);
setTile(x-5, y+3, z-1, 50, 2);
setTile(x-4, y+3, z+1, 102);
setTile(x-4, y+3, z+2, 102);
setTile(x+4, y+3, z-1, 102);
setTile(x+4, y+3, z-2, 102);
setTile(x+4, y+3, z+1, 102);
setTile(x+4, y+3, z+2, 102);
setTile(x-1, y+3, z-4, 102);
setTile(x-2, y+3, z-4, 102);
setTile(x+1, y+3, z-4, 102);
setTile(x+2, y+3, z-4, 102);
setTile(x-1, y+3, z+4, 102);
setTile(x-2, y+3, z+4, 102);
setTile(x+1, y+3, z+4, 102);
setTile(x+2, y+3, z+4, 102);
setTile(x-4, y+7, z-1, 102);
setTile(x-4, y+7, z-2, 102);
setTile(x-4, y+7, z+1, 102);
setTile(x-4, y+7, z+2, 102);
setTile(x+4, y+7, z-1, 102);
setTile(x+4, y+7, z-2, 102);
setTile(x+4, y+7, z+1, 102);
setTile(x+4, y+7, z+2, 102);
setTile(x-1, y+7, z-4, 102);
setTile(x-2, y+7, z-4, 102);
setTile(x+1, y+7, z-4, 102);
setTile(x+2, y+7, z-4, 102);
setTile(x-1, y+7, z+4, 102);
setTile(x-2, y+7, z+4, 102);
setTile(x+1, y+7, z+4, 102);
setTile(x+2, y+7, z+4, 102);
setTile(x-4, y+11, z-1, 102);
setTile(x-4, y+11, z-2, 102);
setTile(x-4, y+11, z+1, 102);
setTile(x-4, y+11, z+2, 102);
setTile(x+4, y+11, z-1, 102);
setTile(x+4, y+11, z-2, 102);
setTile(x+4, y+11, z+1, 102);
setTile(x+4, y+11, z+2, 102);
setTile(x-1, y+11, z-4, 102);
setTile(x-2, y+11, z-4, 102);
setTile(x+1, y+11, z-4, 102);
setTile(x+2, y+11, z-4, 102);
setTile(x-1, y+11, z+4, 102);
setTile(x-2, y+11, z+4, 102);
setTile(x+1, y+11, z+4, 102);
setTile(x+2, y+11, z+4, 102);
setTile(x+2, y+2, z+2, 50);
setTile(x+2, y+2, z-2, 50);
setTile(x-2, y+2, z+2, 50);
setTile(x-2, y+2, z-2, 50);
setTile(x+2, y+6, z+2, 50);
setTile(x+2, y+6, z-2, 50);
setTile(x-2, y+6, z+2, 50);
setTile(x-2, y+6, z-2, 50);
setTile(x+2, y+10, z+2, 50);
setTile(x+2, y+10, z-2, 50);
setTile(x-2, y+10, z+2, 50);
setTile(x-2, y+10, z-2, 50);
for(var yy=y+2;yy<y+14;yy++)
setTile(x+3, yy, z+3, 65, 4);
bux[n] = x;
buy[n] = y;
buz[n] = z;
bu4b[n] = true;
bu4[n] = true;
bu4a[n] = 1800;
skillCool(ESP.getUser(), 4);
}
else if(bu4a[n]<1725&&bu4b[n]){
ESP.antiLack(5);
for(var xx=bux[n]-5;xx<bux[n]+5;xx++)
for(var yy=buy[n]+1;yy<buy[n]+15;yy++)
for(var zz=buz[n]-4;zz<buz[n]+5;zz++)
setTile(xx, yy, zz, 0);
bu4b[n] = false;
}
}
break;
}}}
if(soldier[0]!=null){
for(var n=0;n<soldier.length;n++){
if(soldier[n]==ESP.getUser()){
if(i==302&&Cool.isFinished(so1a[n])){
px = Player.getX();
py = y;
pz = Player.getZ();
yaw = Math.floor(getYaw());
sin = -Math.sin(yaw/180*Math.PI);
cos = Math.cos(yaw/180*Math.PI);
setTile(px+3*sin, y+2, pz+3*cos, 173);
so1[n] = true;
so1a[n] = 150;
skillCool(ESP.getUser(), 1);
}
if(i==303){
if(Cool.isFinished(so2a[n])&&Cool.isFalse(so2b[n])){
setTile(x, y, z, 46);
so2x[n] = x;
so2y[n] = y;
so2z[n] = z;
so2b[n] = true;
}
else if(so2b[n]){
ESP.antiLack(76);
explode(so2x[n]+0.5, so2y[n]+0.5, so2z[n]+0.5, 0.5);
so2b[n] = false;
so2[n] = true;
so2a[n] = 300;
skillCool(ESP.getUser(), 2);
}
}
if(i==304&&Cool.isFinished(so3a[n])){
px = Player.getX();
pz = Player.getZ();
yaw = Math.floor(getYaw());
sin = -Math.sin(yaw/180*Math.PI);
cos = Math.cos(yaw/180*Math.PI);
ESP.antiLack(5);
for(var gun=2;gun<12;gun++)
explode(px+2*gun*sin, y+2, pz+2*gun*cos, 1.7);
so3[n] = true;
so3a[n] = 300;
skillCool(ESP.getUser(), 3);
}
if(i==305){
if(Cool.isFinished(so4a[n])&&Cool.isFinished(so4b[n])){
ESP.heal(soldier[n]);
ESP.sbm("Bunker", true);
sox[n] = Player.getX();
soy[n] = Player.getY()-2;
soz[n] = Player.getZ();
for(var xx=sox[n]-3;xx<sox[n]+4;xx++){
for(var yy=soy[n];yy<soy[n]+4;yy++){
for(var zz=soz[n]-3;zz<soz[n]+4;zz++){
setTile(xx, yy, soz[n]+3, 49);
setTile(xx, yy, soz[n]-3, 49);
setTile(sox[n]+3, yy, zz, 49);
setTile(sox[n]-3, yy, zz, 49);
setTile(xx, soy[n], zz, 49);
setTile(xx, soy[n]+4, zz, 49);
}}}
setTile(sox[n], soy[n], soz[n], 89);
for(var gg=-1;gg<2;gg++){
setTile(sox[n]+gg, soy[n]+2, soz[n]+3, 20);
setTile(sox[n]+gg, soy[n]+2, soz[n]-3, 20);
setTile(sox[n]+3, soy[n]+2, soz[n]+gg, 20);
setTile(sox[n]-3, soy[n]+2, soz[n]+gg, 20);
}
so4b[n] = 1;
so4[n] = true;
so4a[n] = 1800;
skillCool(ESP.getUser(), 4);
}
else if(so4b[n]==1){
ESP.antiLack(5);
explode(sox[n]+7, soy[n]+1, soz[n], 3);
explode(sox[n]-7, soy[n]+1, soz[n], 3);
explode(sox[n], soy[n]+1, soz[n]+7, 3);
explode(sox[n], soy[n]+1, soz[n]-7, 3);
for(var gg=-1;gg<2;gg++){
setTile(sox[n]+gg, soy[n]+2, soz[n]+3, 20);
setTile(sox[n]+gg, soy[n]+2, soz[n]-3, 20);
setTile(sox[n]+3, soy[n]+2, soz[n]+gg, 20);
setTile(sox[n]-3, soy[n]+2, soz[n]+gg, 20);
}
so4b[n] = 2;
so4c[n] = true;
}
else if(so4b[n]==2){
for(var xx=sox[n]-3;xx<sox[n]+4;xx++){
for(var zz=soz[n]-3;zz<soz[n]+4;zz++){
for(var yy=soy[n]+1;yy<soy[n]+5;yy++)
setTile(xx, yy, zz, 0);
setTile(xx, soy[n], zz, 2);
}}
so4b[n] = 0;
}
}
break;
}}}
if(assault[0]!=null){
for(var n=0;n<assault.length;n++){
if(assault[n]==ESP.getUser()){
if(i==303&&Cool.isFinished(asu2a[n])){
px = Player.getX();
pz = Player.getZ();
yaw = Math.floor(getYaw());
sin = -Math.sin(yaw/180*Math.PI);
cos = Math.cos(yaw/180*Math.PI);
snow = Level.spawnMob(px+7*sin, y+9, pz+7*cos, 81);
Entity.setFireTicks(snow, 30);
asu2x[n] = px+7*sin;
asu2y[n] = y;
asu2z[n] = pz+7*cos;
asu2[n] = true;
asu2a[n] = 300;
skillCool(ESP.getUser(), 2);
}
if(i==304&&Cool.isFinished(asu3a[n])){
setTile(x+1, y+1, z, 30);
setTile(x-1, y+1, z, 30);
setTile(x, y+1, z+1, 30);
setTile(x, y+1, z-1, 30);
asu3[n] = true;
asu3a[n] = 300;
skillCool(ESP.getUser(), 3);
}
break;
}}}
if(burst[0]!=null){
for(var n=0;n<burst.length;n++){
if(burst[n]==ESP.getUser()){
if(i==302&&Cool.isFinished(bus1a[n])){
if(Cool.isFalse(bus1b[n])){
setTile(x, y+1, z, 37);
bus1x[n] = x;
bus1y[n] = y;
bus1z[n] = z;
if(b==2)
bus1c[n] = true;
else
bus1c[n] = false;
bus1b[n] = true;
}
else if(bus1b[n]){
ESP.antiLack(5);
explode(bus1x[n], bus1y[n]+2, bus1z[n], 2.5);
if(bus1c[n]){
for(var xx=bus1x[n]-4;xx<bus1x[n]+5;xx++){
for(var zz=bus1z[n]-4;zz<bus1z[n]+5;zz++){
setTile(xx, bus1y[n], zz, 2);
setTile(xx, bus1y[n]-1, zz, 3);
}}
bus1c[n] = false;
}
bus1b[n] = false;
bus1[n] = true;
bus1a[n] = 150;
skillCool(ESP.getUser(), 1);
}
}
if(i==304&&Cool.isFinished(bus3a[n])){
px = Player.getX();
pz = Player.getZ();
yaw = Math.floor(getYaw());
sin = -Math.sin(yaw/180*Math.PI);
cos = Math.cos(yaw/180*Math.PI);
for(var gun=3;gun<25;gun++)
explode(px+gun*sin, y+2, pz+gun*cos, 1.4);
bus3[n] = true;
bus3a[n] = 300;
skillCool(ESP.getUser(), 3);
}
if(i==305&&Cool.isFinished(bus4a[n])){
ESP.sbm("C3+", true);
busx[n] = Player.getX();
busy[n] = Player.getY()-2;
busz[n] = Player.getZ();
ESP.antiLack(5);
Player.setHealth(50);
explode(busx[n], busy[n]+12, busz[n], 7);
explode(busx[n]+8, busy[n]+3, busz[n]+2, 5);
explode(busx[n]+8, busy[n]+3, busz[n]-2, 5);
explode(busx[n]-8, busy[n]+3, busz[n]+2, 5);
explode(busx[n]-8, busy[n]+3, busz[n]-2, 5);
explode(busx[n]+2, busy[n]+3, busz[n]+8, 5);
explode(busx[n]-2, busy[n]+3, busz[n]+8, 5);
explode(busx[n]+2, busy[n]+3, busz[n]-8, 5);
explode(busx[n]-2, busy[n]+3, busz[n]-8, 5);
ESP.heal(burst[n]);
bus4[n] = true;
bus4a[n] = 1800;
skillCool(ESP.getUser(), 4);
}
break;
}}}
if(warrior[0]!=null){
for(var n=0;n<warrior.length;n++){
if(warrior[n]==ESP.getUser()){
if(i==302&&Cool.isFinished(wa1a[n])){
waxa[n] = x-Player.getX();
waza[n] = z-Player.getZ();
ESP.antiLack(18);
explode(x, y, z, 2);
wa1x[n] = x;
wa1y[n] = y;
wa1z[n] = z;
wa1[n] = true;
wa1a[n] = 150;
skillCool(ESP.getUser(), 1);
}
if(i==303&&Cool.isFinished(wa2a[n])){
px = Player.getX();
py = Math.floor(Player.getY())+1;
pz = Player.getZ();
yaw = Math.floor(getYaw());
sin = -Math.sin(yaw/180*Math.PI);
cos = Math.cos(yaw/180*Math.PI);
setTile(px, py, pz, 17);
setTile(px-sin, py+1, pz-cos, 17);
setTile(px-sin, py+3, pz-cos, 41);
setTile(px-2*sin, py+2, pz-2*cos, 41);
setTile(px-3*sin, py+1, pz-3*cos, 41);
for(var ss=3;ss<8;ss++)
setTile(px-ss*sin, py+ss, pz-ss*cos, 42);
wa2[n] = true;
wa2a[n] = 300;
skillCool(ESP.getUser(), 2);
}
if(i==304&&Cool.isFinished(wa3a[n])){
px = Player.getX();
py = Player.getY();
pz = Player.getZ();
yaw = Math.floor(getYaw());
sin = -Math.sin(yaw/180*Math.PI);
cos = Math.cos(yaw/180*Math.PI);
setTile(px+3*sin, py, pz+3*cos, 17);
setTile(px+4*sin, py, pz+4*cos, 17);
setTile(px+5*sin, py-1, pz+5*cos, 41);
setTile(px+5*sin, py, pz+5*cos, 41);
setTile(px+5*sin, py+1, pz+5*cos, 41);
for(var ss=6;ss<11;ss++)
setTile(px+ss*sin, py, pz+ss*cos, 42);
wa3[n] = true;
wa3a[n] = 300;
skillCool(ESP.getUser(), 3);
}
if(i==305&&Cool.isFinished(wa4a[n])){
ESP.heal(warrior[n]);
ESP.sbm("Weapon Charge", true);
wax[n] = Player.getX();
way[n] = Player.getY()-2;
waz[n] = Player.getZ();
for(var yy=way[n]+3;yy<way[n]+8;yy++){
setTile(wax[n]+7, yy, waz[n]+7, 42);
setTile(wax[n]+7, yy, waz[n], 42);
setTile(wax[n]+7, yy, waz[n]-7, 42);
setTile(wax[n], yy, waz[n]+7, 42);
setTile(wax[n], yy, waz[n]-7, 42);
setTile(wax[n]-7, yy, waz[n]+7, 42);
setTile(wax[n]-7, yy, waz[n], 42);
setTile(wax[n]-7, yy, waz[n]-7, 42);
}
for(var yy=way[n]+9;yy<way[n]+11;yy++){
setTile(wax[n]+7, yy, waz[n]+7, 17);
setTile(wax[n]+7, yy, waz[n], 17);
setTile(wax[n]+7, yy, waz[n]-7, 17);
setTile(wax[n], yy, waz[n]+7, 17);
setTile(wax[n], yy, waz[n]-7, 17);
setTile(wax[n]-7, yy, waz[n]+7, 17);
setTile(wax[n]-7, yy, waz[n], 17);
setTile(wax[n]-7, yy, waz[n]-7, 17);
}
for(var ss=-1;ss<2;ss++){
setTile(wax[n]+7+ss, way[n]+8, waz[n]+7, 41);
setTile(wax[n]+7+ss, way[n]+8, waz[n], 41);
setTile(wax[n]+7+ss, way[n]+8, waz[n]-7, 41);
setTile(wax[n]+ss, way[n]+8, waz[n]+7, 41);
setTile(wax[n]+ss, way[n]+8, waz[n]-7, 41);
setTile(wax[n]-7+ss, way[n]+8, waz[n]+7, 41);
setTile(wax[n]-7+ss, way[n]+8, waz[n], 41);
setTile(wax[n]-7+ss, way[n]+8, waz[n]-7, 41);
}
wa4[n] = true;
wa4a[n] = 1800;
skillCool(ESP.getUser(), 4);
}
break;
}}}
if(ore[0]!=null){
for(var n=0;n<ore.length;n++){
if(ore[n]==ESP.getUser()){
if(i==302&&Cool.isFinished(o1a[n])){
setTile(x, y+1, z, 173);
setTile(x+1, y+1, z, 173);
setTile(x-1, y+1, z, 173);
setTile(x, y+1, z+1, 173);
setTile(x, y+1, z-1, 173);
setTile(x, y+2, z, 51);
o1[n] = true;
o1a[n] = 150;
skillCool(ESP.getUser(), 1);
}
if(i==303&&Cool.isFinished(o2a[n])){
px = Player.getX();
py = y;
pz = Player.getZ();
yaw = Math.floor(getYaw());
sin = -Math.sin(yaw/180*Math.PI);
cos = Math.cos(yaw/180*Math.PI);
setTile(px+3*sin, y+2, pz+3*cos, 15);
o2[n] = true;
o2a[n] = 300;
skillCool(ESP.getUser(), 2);
}
if(i==304&&Cool.isFinished(o3a[n])){
o3x[n] = Player.getX();
o3y[n] = Player.getY()-2;
o3z[n] = Player.getZ();
setTile(o3x[n]+5, o3y[n]+1, o3z[n]+5, 73);
setTile(o3x[n]+5, o3y[n]+1, o3z[n], 73);
setTile(o3x[n]+5, o3y[n]+1, o3z[n]-5, 73);
setTile(o3x[n], o3y[n]+1, o3z[n]+5, 73);
setTile(o3x[n], o3y[n]+1, o3z[n]-5, 73);
setTile(o3x[n]-5, o3y[n]+1, o3z[n]+5, 73);
setTile(o3x[n]-5, o3y[n]+1, o3z[n], 73);
setTile(o3x[n]-5, o3y[n]+1, o3z[n]-5, 73);
o3[n] = true;
o3a[n] = 300;
skillCool(ESP.getUser(), 3);
}
if(i==305){
if(Cool.isFinished(o4a[n])&&Cool.isFinished(o4b[n])){
ESP.heal(ore[n]);
ESP.sbm("Abandoned Mine", true);
ox[n] = Player.getX();
oy[n] = Player.getY()-2;
oz[n] = Player.getZ();
for(var xx=ox[n]-8;xx<ox[n]+9;xx++){
for(var zz=oz[n]-8;zz<oz[n]+9;zz++){
for(var yy=oy[n];yy<oy[n]+5;yy++)
setTile(xx, yy, zz, 1);
for(var yy=oy[n]+1;yy<oy[n]+3;yy++){
for(var xxx=ox[n]-1;xxx<ox[n]+2;xxx++){
for(var zzz=oz[n]-1;zzz<oz[n]+2;zzz++){
setTile(xxx, yy, zz, 0);
setTile(xx, yy, zzz, 0);
setTile(xxx, oy[n]+3, zzz, 0);
setTile(xxx, oy[n]+4, zzz, 0);
}}
}
}}
setTile(ox[n]-8, oy[n]+1, oz[n]-1, 85);
setTile(ox[n]-8, oy[n]+1, oz[n], 66, 1);
setTile(ox[n]-8, oy[n]+1, oz[n]+1, 85);
setTile(ox[n]-8, oy[n]+2, oz[n]-1, 85);
setTile(ox[n]-8, oy[n]+2, oz[n], 30);
setTile(ox[n]-8, oy[n]+2, oz[n]+1, 85);
setTile(ox[n]-7, oy[n]+1, oz[n], 66, 1);
setTile(ox[n]-6, oy[n], oz[n]-1, 5);
setTile(ox[n]-6, oy[n]+1, oz[n], 66, 1);
setTile(ox[n]-6, oy[n]+2, oz[n]+2, 15);
setTile(ox[n]-5, oy[n], oz[n]-1, 5);
setTile(ox[n]-5, oy[n], oz[n], 5);
setTile(ox[n]-5, oy[n]+1, oz[n], 66, 1);
setTile(ox[n]-5, oy[n]+2, oz[n]-1, 50, 3);
setTile(ox[n]-5, oy[n]+2, oz[n]+2, 15);
setTile(ox[n]-4, oy[n]+1, oz[n], 66, 1);
setTile(ox[n]-4, oy[n]+2, oz[n]-2, 14);
setTile(ox[n]-3, oy[n]+2, oz[n]+1, 30);
setTile(ox[n]-2, oy[n]+1, oz[n]-5, 14);
setTile(ox[n]-2, oy[n]+1, oz[n]-1, 85);
setTile(ox[n]-2, oy[n]+1, oz[n], 66, 1);
setTile(ox[n]-2, oy[n]+1, oz[n]+1, 85);
setTile(ox[n]-2, oy[n]+2, oz[n]-5, 14);
setTile(ox[n]-2, oy[n]+2, oz[n]-1, 85);
setTile(ox[n]-2, oy[n]+2, oz[n]+1, 85);
setTile(ox[n]-1, oy[n], oz[n]-5, 5);
setTile(ox[n]-1, oy[n]+1, oz[n]-7, 85);
setTile(ox[n]-1, oy[n]+1, oz[n]-3, 85);
setTile(ox[n]-1, oy[n]+1, oz[n], 66, 1);
setTile(ox[n]-1, oy[n]+1, oz[n]+2, 85);
setTile(ox[n]-1, oy[n]+1, oz[n]+5, 85);
setTile(ox[n]-1, oy[n]+2, oz[n]-7, 85);
setTile(ox[n]-1, oy[n]+2, oz[n]-3, 85);
setTile(ox[n]-1, oy[n]+2, oz[n]+2, 85);
setTile(ox[n]-1, oy[n]+2, oz[n]+4, 30);
setTile(ox[n]-1, oy[n]+2, oz[n]+5, 85);
setTile(ox[n], oy[n], oz[n]-5, 14);
setTile(ox[n], oy[n], oz[n]-4, 5);
setTile(ox[n], oy[n], oz[n]-3, 5);
setTile(ox[n], oy[n]+1, oz[n]+3, 30);
setTile(ox[n], oy[n]+1, oz[n]+5, 66);
setTile(ox[n], oy[n]+2, oz[n]+6, 56);
setTile(ox[n]+1, oy[n], oz[n]-1, 16);
setTile(ox[n]+1, oy[n]+1, oz[n]-7, 85);
setTile(ox[n]+1, oy[n]+1, oz[n]-3, 85);
setTile(ox[n]+1, oy[n]+1, oz[n]+2, 85);
setTile(ox[n]+1, oy[n]+1, oz[n]+4, 30);
setTile(ox[n]+1, oy[n]+1, oz[n]+5, 85);
setTile(ox[n]+1, oy[n]+2, oz[n]-7, 85);
setTile(ox[n]+1, oy[n]+2, oz[n]-6, 30);
setTile(ox[n]+1, oy[n]+2, oz[n]-3, 85);
setTile(ox[n]+1, oy[n]+2, oz[n]-2, 50, 2);
setTile(ox[n]+1, oy[n]+2, oz[n]+2, 85);
setTile(ox[n]+1, oy[n]+2, oz[n]+5, 85);
setTile(ox[n]+2, oy[n]+1, oz[n]-1, 85);
setTile(ox[n]+2, oy[n]+1, oz[n]+1, 85);
setTile(ox[n]+2, oy[n]+2, oz[n]-4, 21);
setTile(ox[n]+2, oy[n]+2, oz[n]-1, 85);
setTile(ox[n]+2, oy[n]+2, oz[n]+1, 85);
setTile(ox[n]+3, oy[n], oz[n]+1, 5);
setTile(ox[n]+4, oy[n], oz[n]+1, 5);
setTile(ox[n]+4, oy[n]+1, oz[n]+1, 30);
setTile(ox[n]+4, oy[n]+2, oz[n]+1, 50, 4);
setTile(ox[n]+5, oy[n]+1, oz[n]-1, 85);
setTile(ox[n]+5, oy[n]+1, oz[n], 66, 1);
setTile(ox[n]+5, oy[n]+1, oz[n]+1, 85);
setTile(ox[n]+5, oy[n]+2, oz[n]-1, 85);
setTile(ox[n]+5, oy[n]+2, oz[n]+1, 85);
setTile(ox[n]+6, oy[n]+1, oz[n], 66, 1);
setTile(ox[n]+6, oy[n]+2, oz[n], 30);
setTile(ox[n]+6, oy[n]+2, oz[n]+2, 16);
setTile(ox[n]+7, oy[n]+1, oz[n]-2, 15);
setTile(ox[n]+7, oy[n]+2, oz[n]+2, 16);
o4b[n] = 1;
o4[n] = true;
o4a[n] = 1800;
skillCool(ESP.getUser(), 4);
}
else if(o4b==1){
ESP.antiLack(5);
explode(ox[n]+6, oy[n]+2, oz[n]+6, 4);
explode(ox[n]+6, oy[n]+2, oz[n], 4);
explode(ox[n]+6, oy[n]+2, oz[n]-6, 4);
explode(ox[n], oy[n]+2, oz[n]+6, 4);
explode(ox[n], oy[n]+2, oz[n]-6, 4);
explode(ox[n]-6, oy[n]+2, oz[n]+6, 4);
explode(ox[n]-6, oy[n]+2, oz[n], 4);
explode(ox[n]-6, oy[n]+2, oz[n]-6, 4);
o4b[n] = 2;
o4c[n] = 45;
o4b[n] = false;
}
}
break;
}}}
if(rich[0]!=null){
for(var n=0;n<rich.length;n++){
if(rich[n]==ESP.getUser()){
if(i==302&&Cool.isFinished(r1a[n])){
setTile(x, y+1, z, 41);
r1x[n] = x;
r1y[n] = y;
r1z[n] = z;
r1[n] = true;
r1a[n] = 150;
skillCool(ESP.getUser(), 1);
}
if(i==303&&Cool.isFinished(r2a[n])){
px = Player.getX();
py = y;
pz = Player.getZ();
yaw = Math.floor(getYaw());
sin = -Math.sin(yaw/180*Math.PI);
cos = Math.cos(yaw/180*Math.PI);
for(var gun=3;gun<25;gun++)
setTile(px+gun*sin, y+2, pz+gun*cos, 41);
for(var gun=2;gun<13;gun++)
setTile(px+2*gun*sin, y+2, pz+2*gun*cos, 42);
r2[n] = true;
r2a[n] = 300;
skillCool(ESP.getUser(), 2);
}
if(i==304&&Cool.isFinished(r3a[n])){
r3x = Math.abs(x-Player.getX());
r3z = Math.abs(z-Player.getZ());
if(r3x>r3z){
for(var yy=y+1;yy<y+5;yy++)
for(var zz=z-2;zz<z+3;zz++)
setTile(x, yy, zz, 22);
}
else if(r3x<r3z){
for(var xx=x-2;xx<x+3;xx++)
for(var yy=y+1;yy<y+5;yy++)
setTile(xx, yy, z, 22);
}
r3[n] = true;
r3a[n] = 300;
skillCool(ESP.getUser(), 3);
}
if(i==305&&Cool.isFinished(r4a[n])){
ESP.heal(rich[n]);
ESP.sbm("Diamond House", true);
arroundMobHealthDown(rich[n], 20, 7);
for(var xx=x-5;xx<x+6;xx++){
for(var yy=y+1;yy<y+7;yy++){
for(var zz=z-5;zz<z+6;zz++){
setTile(xx, yy, z+4, 57);
setTile(xx, yy, z-4, 57);
setTile(x+4, yy, zz, 57);
setTile(x-4, yy, zz, 57);
setTile(xx, y+1, zz, 57);
setTile(xx, y+5, zz, 57);
}}}
setTile(x-4, y+3, z-2, 102);
setTile(x-4, y+3, z+2, 102);
setTile(x+4, y+3, z-1, 102);
setTile(x+4, y+3, z-2, 102);
setTile(x+4, y+3, z+1, 102);
setTile(x+4, y+3, z+2, 102);
setTile(x-1, y+3, z-4, 102);
setTile(x-2, y+3, z-4, 102);
setTile(x+1, y+3, z-4, 102);
setTile(x+2, y+3, z-4, 102);
setTile(x-1, y+3, z+4, 102);
setTile(x-2, y+3, z+4, 102);
setTile(x+1, y+3, z+4, 102);
setTile(x+2, y+3, z+4, 102);
setTile(x-4, y+2, z, 0);
setTile(x-4, y+3, z, 0);
setTile(x+2, y+2, z+2, 50);
setTile(x+2, y+2, z-2, 50);
setTile(x-2, y+2, z+2, 50);
setTile(x-2, y+2, z-2, 50);
rx[n] = x;
ry[n] = y;
rz[n] = z;
r4[n] = true;
r4a[n] = 1800;
skillCool(ESP.getUser(), 4);
}
break;
}}}
if(tp[0]!=null){
for(var n=0;n<tp.length;n++){
if(tp[n]==ESP.getUser()){
if(i==302&&Cool.isFinished(tp1a[n])){
teleport(ESP.getUser(), x, y+3, z);
tp1[n] = true;
tp1a[n] = 75;
skillCool(ESP.getUser(), 1);
}
if(i==304&&Cool.isFinished(tp3a[n])){
teleport(ESP.getUser(), x, y+7, z);
tp3[n] = true;
tp3a[n] = 300;
skillCool(ESP.getUser(), 3);
}
if(i==305){
if(Cool.isFinished(tp4a[n])){
ESP.heal(tp[n]);
ESP.sbm("Hyper Sending", true);
for(var xx=x-2;xx<x+3;xx++){
for(var zz=z-2;zz<z+3;zz++){
for(var yy=y-1;yy<y+1;yy++)
setTile(xx, yy, zz, 0);
setTile(xx, y-3, zz, 87);
setTile(xx, y-2, zz, 51);
}}
tpx[n] = x;
tpy[n] = y;
tpz[n] = z;
tp4[n] = true;
tp4a[n] = 1800;
skillCool(ESP.getUser(), 4);
}
else if(tp4a[n]>1350){
teleport(ESP.getUser(), x, y+3, z);
}
}
break;
}}}
if(space[0]!=null){
for(var n=0;n<space.length;n++){
if(space[n]==ESP.getUser()){
if(i==302&&Cool.isFinished(sp1a[n])){
sp1x = x-Player.getX();
sp1z = z-Player.getZ();
teleport(space[n], x+sp1x, y+3, z+sp1z);
sp1[n] = true;
sp1a[n] = 150;
skillCool(ESP.getUser(), 1);
}
if(i==303&&Cool.isFinished(sp2a[n])){
spxa[n] = Math.abs(x-Player.getX());
spza[n] = Math.abs(z-Player.getZ());
if(spxa[n]>spza[n]){
for(var zz=z-2;zz<z+3;zz++)
setTile(x, y+2, zz, 95);
}
else if(spxa[n]<spza[n]){
for(var xx=x-2;xx<x+3;xx++)
setTile(xx, y+2, z, 95);
}
sp2x[n] = x;
sp2y[n] = y;
sp2z[n] = z;
sp2[n] = true;
sp2a[n] = 300;
skillCool(ESP.getUser(), 2);
}
if(i==305&&Cool.isFinished(sp4a[n])){
if(Cool.isFalse(sp4b[n])){
ESP.heal(space[n]);
setTile(x, y, z, 49);
spx[n] = x;
spy[n] = y;
spz[n] = z;
sp4b[n] = true;
}
else if(sp4b[n]){
ESP.sbm("Black Hole", true);
for(var xx=spx[n]-6;xx<spx[n]+7;xx++)
for(var zz=spz[n]-6;zz<spz[n]+7;zz++)
setTile(xx, spy[n], zz, 0);
setTile(spx[n]+6, spy[n], spz[n]+6, 8);
setTile(spx[n]+6, spy[n], spz[n]-6, 8);
setTile(spx[n]-6, spy[n], spz[n]+6, 8);
setTile(spx[n]-6, spy[n], spz[n]-6, 8);
setTile(spx[n]+6, spy[n], spz[n]+2, 8);
setTile(spx[n]+6, spy[n], spz[n]-2, 8);
setTile(spx[n]-6, spy[n], spz[n]+2, 8);
setTile(spx[n]-6, spy[n], spz[n]-2, 8);
setTile(spx[n]+2, spy[n], spz[n]+6, 8);
setTile(spx[n]-2, spy[n], spz[n]+6, 8);
setTile(spx[n]+2, spy[n], spz[n]-6, 8);
setTile(spx[n]-2, spy[n], spz[n]-6, 8);
sp4b[n] = false;
sp4[n] = true;
sp4a[n] = 1800;
skillCool(ESP.getUser(), 4);
}
}
break;
}}}
if(sattack[0]!=null){
for(var n=0;n<sattack.length;n++){
if(sattack[n]==ESP.getUser()){
if(i==302&&Cool.isFinished(sa1a[n])){
sa1x[n] = Player.getX();
sa1y[n] = Player.getY()-2;
sa1z[n] = Player.getZ();
for(var xx=sa1x[n]-3;xx<sa1x[n]+4;xx++)
for(var zz=sa1z[n]-3;zz<sa1z[n]+4;zz++)
setTile(xx, sa1y[n]+1, zz, 51);
for(var xx=sa1x[n]-1;xx<sa1x[n]+2;xx++)
for(var zz=sa1z[n]-1;zz<sa1z[n]+2;zz++)
setTile(xx, sa1y[n]+1, zz, 0);
sa1[n] = true;
sa1a[n] = 150;
skillCool(ESP.getUser(), 1);
}
if(i==303&&Cool.isFinished(sa2a[n])){
sa2x[n] = Math.floor(Player.getX())+0.5;
sa2y[n] = Player.getY()-2;
sa2z[n] = Math.floor(Player.getZ())+0.5;
for(var xx=sa2x[n]-5;xx<sa2x[n]+6;xx++)
for(var yy=sa2y[n]-2;yy<sa2y[n]+1;yy++)
for(var zz=sa2z[n]-5;zz<sa2z[n]+6;zz++)
setTile(xx, yy, zz, 0);
for(var xx=sa2x[n]-1;xx<sa2x[n]+2;xx++)
for(var zz=sa2z[n]-1;zz<sa2z[n]+2;zz++)
setTile(xx, sa2y[n], zz, 49);
Level.spawnMob(sa2x[n]+3, sa2y[n]+7, sa2z[n]+3, 65);
Level.spawnMob(sa2x[n]+3, sa2y[n]+7, sa2z[n]-3, 65);
Level.spawnMob(sa2x[n]-3, sa2y[n]+7, sa2z[n]+3, 65);
Level.spawnMob(sa2x[n]-3, sa2y[n]+7, sa2z[n]-3, 65);
ESP.antiLack(90);
sa2[n] = true;
sa2a[n] = 300;
skillCool(ESP.getUser(), 2);
}
if(i==304&&Cool.isFinished(sa3a[n])){
sa3x[n] = Player.getX();
sa3y[n] = Player.getY()-2;
sa3z[n] = Player.getZ();
ESP.antiLack(5);
explode(sa3x[n]+6, sa3y[n]+1, sa3z[n]+2, 2);
explode(sa3x[n]+6, sa3y[n]+1, sa3z[n]-2, 2);
explode(sa3x[n]-6, sa3y[n]+1, sa3z[n]+2, 2);
explode(sa3x[n]-6, sa3y[n]+1, sa3z[n]-2, 2);
explode(sa3x[n]+2, sa3y[n]+1, sa3z[n]+6, 2);
explode(sa3x[n]-2, sa3y[n]+1, sa3z[n]+6, 2);
explode(sa3x[n]+2, sa3y[n]+1, sa3z[n]-6, 2);
explode(sa3x[n]-2, sa3y[n]+1, sa3z[n]-6, 2);
sa3[n] = true;
sa3a[n] = 300;
skillCool(ESP.getUser(), 3);
}
if(i==305){
if(Cool.isFinished(sa4a[n])&&Cool.isFalse(sa4b[n])){
ESP.sbm("Melting Field", true);
sax[n] = Player.getX();
say[n] = Player.getY()-2;
saz[n] = Player.getZ();
for(var xx=sax[n]-10;xx<sax[n]+11;xx++)
for(var zz=saz[n]-10;zz<saz[n]+11;zz++)
setTile(xx, say[n], zz, 11);
for(var xx=sax[n]-1;xx<sax[n]+2;xx++)
for(var zz=saz[n]-1;zz<saz[n]+2;zz++)
setTile(xx, say[n], zz, 2);
sa4b[n] = true;
sa4[n] = true;
sa4a[n] = 1800;
skillCool(ESP.getUser(), 4);
}
else if(sa4b[n]){
for(var xx=sax[n]-10;xx<sax[n]+11;xx++)
for(var zz=saz[n]-10;zz<saz[n]+11;zz++)
setTile(xx, say[n], zz, 2);
sa4b[n] = false;
}
}
break;
}}}
if(force[0]!=null){
for(var n=0;n<force.length;n++){
if(force[n]==ESP.getUser()){
if(i==302&&Cool.isFinished(fo1a[n])){
px = Player.getX();
py = y;
pz = Player.getZ();
yaw = Math.floor(getYaw());
sin = -Math.sin(yaw/180*Math.PI);
cos = Math.cos(yaw/180*Math.PI);
setTile(px+3*sin, y+2, pz+3*cos, 89);
setTile(px+4*sin, y+2, pz+4*cos, 89);
fo1[n] = true;
fo1a[n] = 150;
skillCool(ESP.getUser(), 1);
}
if(i==303&&Cool.isFinished(fo2a[n])){
foxa[n] = x-Player.getX();
foza[n] = z-Player.getZ();
ESP.antiLack(5);
explode(x, y, z, 2.5);
fo2x[n] = x;
fo2y[n] = y;
fo2z[n] = z;
fo2[n] = true;
fo2a[n] = 300;
skillCool(ESP.getUser(), 2);
}
if(i==304&&Cool.isFinished(fo3a[n])){
px = Player.getX();
pz = Player.getZ();
yaw = Math.floor(getYaw());
sin = -Math.sin(yaw/180*Math.PI);
cos = Math.cos(yaw/180*Math.PI);
for(var yy=y-2;yy<y+1;yy++)
for(var gun=3;gun<23;gun++){
setTile(px+gun*sin, yy, pz+gun*cos, 0);
setTile(px+gun*sin+1, yy, pz+gun*cos, 0);
setTile(px+gun*sin, yy, pz+gun*cos+1, 0);
}
fo3[n] = true;
fo3a[n] = 300;
skillCool(ESP.getUser(), 3);
}
if(i==305&&Cool.isFinished(fo4a[n])){
ESP.heal(force[n]);
ESP.sbm("Force Releasing", true);
fox[n] = Player.getX();
foy[n] = Player.getY()-2;
foz[n] = Player.getZ();
ESP.antiLack(5);
for(var fo4b=2;fo4b<9;fo4b++){
explode(fox[n]+2*fo4b, foy[n]+1, foz[n]+2*fo4b, 2);
explode(fox[n]+2*fo4b, foy[n]+1, foz[n], 2);
explode(fox[n]+2*fo4b, foy[n]+1, foz[n]-2*fo4b, 2);
explode(fox[n], foy[n]+1, foz[n]+2*fo4b, 2);
explode(fox[n], foy[n]+1, foz[n]-2*fo4b, 2);
explode(fox[n]-2*fo4b, foy[n]+1, foz[n]+2*fo4b, 2);
explode(fox[n]-2*fo4b, foy[n]+1, foz[n], 2);
explode(fox[n]-2*fo4b, foy[n]+1, foz[n]-2*fo4b, 2);
}
fo4[n] = true;
fo4a[n] = 1800;
skillCool(ESP.getUser(), 4);
}
break;
}}}
if(rein[0]!=null){
for(var n=0;n<rein.length;n++){
if(rein[n]==ESP.getUser()){
if(i==302&&Cool.isFinished(re1a[n])){
for(var xx=x-1;xx<x+2;xx++)
for(var yy=y+3;yy<y+7;yy++)
for(var zz=z-1;zz<z+2;zz++)
setTile(xx, yy, zz, 79);
for(var yy=y+4;yy<y+6;yy++){
setTile(x+2, yy, z, 79);
setTile(x-2, yy, z, 79);
setTile(x, yy, z+2, 79);
setTile(x, yy, z-2, 79);
}
re1x[n] = x;
re1y[n] = y;
re1z[n] = z;
re1[n] = true;
re1a[n] = 150;
skillCool(ESP.getUser(), 1);
}
if(i==303&&Cool.isFinished(re2a[n])){
px = Player.getX();
py = y;
pz = Player.getZ();
yaw = Math.floor(getYaw());
sin = -Math.sin(yaw/180*Math.PI);
cos = Math.cos(yaw/180*Math.PI);
re2x[n] = Math.abs(sin);
re2z[n] = Math.abs(cos);
setTile(px+3*sin, y+1, pz+3*cos, 173);
if(re2x[n]>re2z[n]){
setTile(px+3*sin, y+3, pz+3*cos+1, 173);
setTile(px+3*sin, y+3, pz+3*cos-1, 173);
}
else if(re2x[n]<re2z[n]){
setTile(px+3*sin+1, y+3, pz+3*cos, 173);
setTile(px+3*sin-1, y+3, pz+3*cos, 173);
}
re2[n] = true;
re2a[n] = 300;
skillCool(ESP.getUser(), 2);
}
if(i==304&&Cool.isFinished(re3a[n])){
re3x[n] = Player.getX();
re3y[n] = Player.getY()-2;
re3z[n] = Player.getZ();
setTile(re3x[n]+2, re3y[n]+2, re3z[n], 35, 14);
setTile(re3x[n]-2, re3y[n]+2, re3z[n], 35, 14);
setTile(re3x[n], re3y[n]+2, re3z[n]+2, 35, 14);
setTile(re3x[n], re3y[n]+2, re3z[n]-2, 35, 14);
re3[n] = true;
re3a[n] = 300;
skillCool(ESP.getUser(), 3);
}
if(i==305&&Cool.isFinished(re4a[n])){
ESP.sbm("Mysteltainn", true);
ESP.heal(rein[n]);
rex[n] = Player.getX();
rey[n] = Player.getY()-2;
rez[n] = Player.getZ();
for(var yy=rey[n]+6;yy<rey[n]+9;yy++){
setTile(rex[n]+7, yy, rez[n]+7, 173);
setTile(rex[n]+7, yy, rez[n], 173);
setTile(rex[n]+7, yy, rez[n]-7, 173);
setTile(rex[n], yy, rez[n]+7, 173);
setTile(rex[n], yy, rez[n]-7, 173);
setTile(rex[n]-7, yy, rez[n]+7, 173);
setTile(rex[n]-7, yy, rez[n], 173);
setTile(rex[n]-7, yy, rez[n]-7, 173);
}
re4[n] = true;
re4a[n] = 1800;
skillCool(ESP.getUser(), 4);
}
break;
}}}
if(magnet[0]!=null){
for(var n=0;n<magnet.length;n++){
if(magnet[n]==ESP.getUser()){
if(i==303&&Cool.isFinished(mag2a[n])){
px = Player.getX();
pz = Player.getZ();
yaw = Math.floor(getYaw());
sin = -Math.sin(yaw/180*Math.PI);
cos = Math.cos(yaw/180*Math.PI);
mag2x = Math.abs(sin);
mag2z = Math.abs(cos);
setTile(px-3*sin, y+2, pz-2*cos, 15);
if(mag2x>mag2z){
setTile(px-3*sin, y+1, pz-2*cos+1, 15);
setTile(px-3*sin, y+1, pz-2*cos-1, 15);
}
else if(mag2x<mag2z){
setTile(px-3*sin+1, y+1, pz-2*cos, 15);
setTile(px-3*sin-1, y+1, pz-2*cos, 15);
}
mag2[n] = true;
mag2a[n] = 300;
skillCool(ESP.getUser(), 2);
}
if(i==304&&Cool.isFinished(mag3a[n])){
mag3x[n] = Player.getX();
mag3y[n] = Player.getY()-2;
mag3z[n] = Player.getZ();
setTile(mag3x[n]+4, mag3y[n], mag3z[n]+4, 15);
setTile(mag3x[n]+4, mag3y[n], mag3z[n], 15);
setTile(mag3x[n]+4, mag3y[n], mag3z[n]-4, 15);
setTile(mag3x[n], mag3y[n], mag3z[n]+4, 15);
setTile(mag3x[n], mag3y[n], mag3z[n]-4, 15);
setTile(mag3x[n]-4, mag3y[n], mag3z[n]+4, 15);
setTile(mag3x[n]-4, mag3y[n], mag3z[n], 15);
setTile(mag3x[n]-4, mag3y[n], mag3z[n]-4, 15);
mag3[n] = true;
mag3a[n] = 300;
skillCool(ESP.getUser(), 3);
}
if(i==305&&Cool.isFinished(mag4a[n])){
ESP.heal(magnet[n]);
ESP.sbm("Magnetic Field", true);
magx[n] = Player.getX();
magy[n] = Player.getY()-2;
magz[n] = Player.getZ();
var tt = Level.spawnMob(magx[n]+2, magy[n]+3, magz[n], 65);
var cc = Level.spawnMob(magx[n]+2, magy[n]+3, magz[n], 84);
Entity.rideAnimal(tt, cc);
Entity.setVelX(cc, 1);
Entity.setVelY(cc, 0.5);
tt = Level.spawnMob(magx[n]-2, magy[n]+3, magz[n], 65);
cc = Level.spawnMob(magx[n]-2, magy[n]+3, magz[n], 84);
Entity.rideAnimal(tt, cc);
Entity.setVelX(cc, -1);
Entity.setVelY(cc, 0.5);
tt = Level.spawnMob(magx[n], magy[n]+3, magz[n]+2, 65);
cc = Level.spawnMob(magx[n], magy[n]+3, magz[n]+2, 84);
Entity.rideAnimal(tt, cc);
Entity.setVelZ(cc, 1);
Entity.setVelY(cc, 0.5);
tt = Level.spawnMob(magx[n], magy[n]+3, magz[n]-2, 65);
cc = Level.spawnMob(magx[n], magy[n]+3, magz[n]-2, 84);
Entity.rideAnimal(tt, cc);
Entity.setVelZ(cc, -1);
Entity.setVelY(cc, 0.5);
tt = Level.spawnMob(magx[n]+2, magy[n]+3, magz[n]+2, 65);
cc = Level.spawnMob(magx[n]+2, magy[n]+3, magz[n]+2, 84);
Entity.rideAnimal(tt, cc);
Entity.setVelX(cc, 1);
Entity.setVelZ(cc, 1);
Entity.setVelY(cc, 0.5);
tt = Level.spawnMob(magx[n]+2, magy[n]+3, magz[n]-2, 65);
cc = Level.spawnMob(magx[n]+2, magy[n]+3, magz[n]-2, 84);
Entity.rideAnimal(tt, cc);
Entity.setVelX(cc, 1);
Entity.setVelZ(cc, -1);
Entity.setVelY(cc, 0.5);
tt = Level.spawnMob(magx[n]-2, magy[n]+3, magz[n]+2, 65);
cc = Level.spawnMob(magx[n]-2, magy[n]+3, magz[n]+2, 84);
Entity.rideAnimal(tt, cc);
Entity.setVelX(cc, -1);
Entity.setVelZ(cc, 1);
Entity.setVelY(cc, 0.5);
tt = Level.spawnMob(magx[n]-2, magy[n]+3, magz[n]-2, 65);
cc = Level.spawnMob(magx[n]-2, magy[n]+3, magz[n]-2, 84);
Entity.rideAnimal(tt, cc);
Entity.setVelX(cc, -1);
Entity.setVelZ(cc, -1);
Entity.setVelY(cc, 0.5);
for(var mag4b=-2;mag4b<3;mag4b++){
setTile(magx[n]+mag4b, magy[n]+1, magz[n]+3, 15);
setTile(magx[n]+mag4b, magy[n]+1, magz[n]-3, 15);
setTile(magx[n]+3, magy[n]+1, magz[n]+mag4b, 15);
setTile(magx[n]-3, magy[n]+1, magz[n]+mag4b, 15);
}
ESP.antiLack(90);
mag4[n] = true;
mag4a[n] = 1800;
skillCool(ESP.getUser(), 4);
}
break;
}}}
if(steve[0]!=null){
for(var n=0;n<steve.length;n++){
if(steve[n]==ESP.getUser()){
if(i==302&&Cool.isFinished(st1a[n])){
if(b!=7){
Level.destroyBlock(x, y, z, true);
}
for(var xx=x-1;xx<x+2;xx++)
for(var yy=y-1;yy<y+2;yy++)
for(var zz=z-1;zz<z+2;zz++)
if(getTile(xx, yy, zz)!=7){
setTile(xx, yy, zz, 0);
}
st1[n] = true;
st1a[n] = 150;
skillCool(ESP.getUser(), 1);
}
if(i==303){
if(Cool.isFinished(st2a[n])&&Cool.isFalse(st2b[n])){
stxa = Math.abs(x-Player.getX());
stza = Math.abs(z-Player.getZ());
if(stxa>stza){
setTile(x, y+3, z-4, 57);
setTile(x, y+2, z-3, 57);
setTile(x, y+2, z-2, 57);
setTile(x, y+1, z-1, 57);
setTile(x, y+1, z+1, 57);
setTile(x, y+2, z+2, 57);
setTile(x, y+2, z+3, 57);
setTile(x, y+3, z+4, 57);
}
else if(stxa<stza){
setTile(x-4, y+3, z, 57);
setTile(x-3, y+2, z, 57);
setTile(x-2, y+2, z, 57);
setTile(x-1, y+1, z, 57);
setTile(x+1, y+1, z, 57);
setTile(x+2, y+2, z, 57);
setTile(x+3, y+2, z, 57);
setTile(x+4, y+3, z, 57);
}
setTile(x, y+1, z, 57);
for(var yy=y+2;yy<y+8;yy++)
setTile(x, yy, z, 17);
st2x[n] = x;
st2y[n] = y;
st2z[n] = z;
st2b[n]= true;
st2[n] = true;
st2a[n] = 300;
skillCool(ESP.getUser(), 2);
}
else if(st2b[n]){
ESP.antiLack(5);
explode(st2x[n]+2, st2y[n]+1, st2z[n]+2, 2.5);
explode(st2x[n]+2, st2y[n]+1, st2z[n]-2, 2.5);
explode(st2x[n]-2, st2y[n]+1, st2z[n]+2, 2.5);
explode(st2x[n]-2, st2y[n]+1, st2z[n]-2, 2.5);
st2c[n] = false;
st2b[n] = false;
}
}
if(i==304&&Cool.isFinished(st4a[n])){
stxa = Math.abs(x-Player.getX());
stza = Math.abs(z-Player.getZ());
if(stxa>stza){
for(var yy=y+1;yy<y+5;yy++)
for(var zz=z-2;zz<z+3;zz++)
setTile(x, yy, zz, 5);
}
else if(stxa<stza){
for(var xx=x-2;xx<x+3;xx++)
for(var yy=y+1;yy<y+5;yy++)
setTile(xx, yy, z, 5);
}
st3[n] = true;
st3a[n] = 300;
skillCool(ESP.getUser(), 3);
}
if(i==305&&Cool.isFinished(st4a[n])){
ESP.heal(steve[n]);
ESP.sbm("Good bye World", true);
setTile(x, y+1, z, 46);
stx[n] = x;
sty[n] = y;
stz[n] = z;
st4[n] = true;
st4a[n] = 1800;
skillCool(ESP.getUser(), 4);
}
break;
}}}
if(hero[0]!=null){
for(var n=0;n<hero.length;n++){
if(hero[n]==ESP.getUser()){
if(i==302&&Cool.isFinished(he1a[n])){
if(Cool.isFalse(he1b[n])){
setTile(x, y, z, 248);
he1x[n] = x;
he1y[n] = y;
he1z[n] = z;
he1b[n] = true;
he1c[n] = 11;
he1d[n] = b;
}
else if(he1b[n]){
teleport(hero[n], he1x[n], he1y[n]+3, he1z[n]);
he1b[n] = false;
he1[n] = true;
he1a[n] = 150;
skillCool(ESP.getUser(), 1);
}
}
if(i==303){
if(Cool.isFinished(he2a[n])&&Cool.isFalse(he2b[n])){
hexa = Math.abs(x-Player.getX());
heza = Math.abs(z-Player.getZ());
if(hexa>heza){
for(var yy=y+1;yy<y+6;yy++)
setTile(x, yy, z+1, 89);
setTile(x, y+1, z, 89);
setTile(x, y+1, z-1, 89);
setTile(x, y+3, z, 89);
setTile(x, y+3, z-1, 89);
setTile(x, y+5, z, 89);
setTile(x, y+5, z-1, 89);
}
else if(hexa<heza){
for(var yy=y+1;yy<y+6;yy++)
setTile(x+1, yy, z, 89);
setTile(x, y+1, z, 89);
setTile(x-1, y+1, z, 89);
setTile(x, y+3, z, 89);
setTile(x-1, y+3, z, 89);
setTile(x, y+5, z, 89);
setTile(x-1, y+5, z, 89);
}
he2x[n] = x;
he2y[n] = y;
he2z[n] = z;
he2b[n] = true;
he2[n] = true;
he2a[n] = 300;
skillCool(ESP.getUser(), 2);
}
else if(he2b[n]){
ESP.antiLack(5);
explode(he2x[n]+0.5, he2y[n]+2, he2z[n]+0.5, 3);
he2b[n] = false;
}
}
if(i==304&&Cool.isFinished(he3a[n])){
setTile(x+1, y+1, z, 46);
setTile(x-1, y+1, z, 46);
setTile(x, y+1, z+1, 46);
setTile(x, y+1, z-1, 46);
ESP.antiLack(90);
explode(x+0.5, y+2, z+0.5, 2);
he3x[n] = x;
he3y[n] = y;
he3z[n] = z;
he3[n] = true;
he3a[n] = 300;
skillCool(ESP.getUser(), 3);
}
if(i==305&&Cool.isFinished(he4a[n])){
ESP.heal(hero[n]);
ESP.sbm("Herobrine's Return", true);
hex[n] = Player.getX();
hey[n] = Player.getY()-2;
hez[n] = Player.getZ();
Level.setTime(14000);
ESP.antiLack(90);
explode(hex[n]+6, hey[n]+1, hez[n]+6, 3);
explode(hex[n]+6, hey[n]+1, hez[n]-6, 3);
explode(hex[n]-6, hey[n]+1, hez[n]+6, 3);
explode(hex[n]-6, hey[n]+1, hez[n]-6, 3);
Level.spawnMob(hex[n]+6, hey[n]+9, hez[n], 65);
Level.spawnMob(hex[n]-6, hey[n]+9, hez[n], 65);
Level.spawnMob(hex[n], hey[n]+9, hez[n]+6, 65);
Level.spawnMob(hex[n], hey[n]+9, hez[n]-6, 65);
Level.spawnMob(hex[n]+9, hey[n]+3, hez[n], 35);
Level.spawnMob(hex[n]-9, hey[n]+3, hez[n], 35);
Level.spawnMob(hex[n], hey[n]+3, hez[n]+9, 35);
Level.spawnMob(hex[n], hey[n]+3, hez[n]-9, 35);
setTile(hex[n]+8, hey[n]+2, hez[n]+8, 10);
setTile(hex[n]+8, hey[n]+2, hez[n]-8, 10);
setTile(hex[n]-8, hey[n]+2, hez[n]+8, 10);
setTile(hex[n]-8, hey[n]+2, hez[n]-8, 10);
setTile(hex[n]+4, hey[n]+9, hez[n]+4, 89);
setTile(hex[n]+4, hey[n]+9, hez[n]-4, 89);
setTile(hex[n]-4, hey[n]+9, hez[n]+4, 89);
setTile(hex[n]-4, hey[n]+9, hez[n]-4, 89);
he4[n] = true;
he4a[n] = 1800;
skillCool(ESP.getUser(), 4);
}
break;
}}}
if(hermit[0]!=null){
for(var n=0;n<hermit.length;n++){
if(hermit[n]==ESP.getUser()){
if(i==302&&Cool.isFinished(her1a[n])){
px = Player.getX();
py = y;
pz = Player.getZ();
yaw = Math.floor(getYaw());
sin = -Math.sin(yaw/180*Math.PI);
cos = Math.cos(yaw/180*Math.PI);
for(var gun=3;gun<20;gun++)
setTile(px+gun*sin, y+2, pz+gun*cos, 18);
her1[n] = true;
her1a[n] = 150;
skillCool(ESP.getUser(), 1);
}
if(i==303){
if(Cool.isFinished(her2a[n])&&Cool.isFalse(her2b[n])){
ESP.createHermitHideout(x, y, z);
her2x[n] = x;
her2y[n] = y;
her2z[n] = z;
her2b[n] = true;
her2[n] = true;
her2a[n] = 300;
skillCool(ESP.getUser(), 2);
}
else if(her2b[n]){
teleport(ESP.getUser(), her2x[n]+1.5, her2y[n]+11.5, her2z[n]+2.5);
her2b[n] = false;
}
}
if(i==304&&Cool.isFinished(her3a[n])){
her3[n] = true;
her3a[n] = 300;
skillCool(ESP.getUser(), 3);
}
if(i==305&&Cool.isFinished(her4a[n])){
ESP.heal(hermit[n]);
ESP.sbm("The Forest", true);
arroundMobHealthDown(hermit[n], 20, 7);
ESP.antiLack(5);
makeForest(x, y, z);
teleport(ESP.getUser(), x+2, y+13, z-5);
herx[n] = x;
hery[n] = y;
herz[n] = z;
her4[n] = true;
her4a[n] = 1800;
skillCool(ESP.getUser(), 4);
}
break;
}}}
if(clay[0]!=null){
for(var n=0;n<clay.length;n++){
if(clay[n]==ESP.getUser()){
if(i==302&&Cool.isFinished(cl1a[n])){
clxa = Math.abs(x-Player.getX());
clza = Math.abs(z-Player.getZ());
if(clxa>clza){
for(var yy=y+1;yy<y+4;yy++)
for(var zz=z-2;zz<z+3;zz++)
setTile(x, yy, zz, 82);
}
else if(clxa<clza){
for(var xx=x-2;xx<x+3;xx++)
for(var yy=y+1;yy<y+4;yy++)
setTile(xx, yy, z, 82);
}
cl1[n] = true;
cl1a[n] = 150;
skillCool(ESP.getUser(), 1);
}
if(i==303&&Cool.isFinished(cl2a[n])){
for(var xx=x-2;xx<x+3;xx++)
for(var yy=y+1;yy<y+5;yy++)
for(var zz=z-2;zz<z+3;zz++)
setTile(xx, yy, zz, 82);
cl2x[n] = x;
cl2y[n] = y;
cl2z[n] = z;
cl2[n] = true;
cl2a[n] = 300;
skillCool(ESP.getUser(), 2);
}
if(i==304&&Cool.isFinished(cl3a[n])){
for(var yy=y+1;yy<y+4;yy++){
setTile(x+1, yy, z+2, 82);
setTile(x, yy, z+2, 82);
setTile(x-1, yy, z+2, 82);
setTile(x+1, yy, z-2, 82);
setTile(x, yy, z-2, 82);
setTile(x-1, yy, z-2, 82);
setTile(x+2, yy, z+1, 82);
setTile(x+2, yy, z, 82);
setTile(x+2, yy, z-1, 82);
setTile(x-2, yy, z+1, 82);
setTile(x-2, yy, z, 82);
setTile(x-2, yy, z-1, 82);
}
for(var xx=x-1;xx<x+2;xx++)
for(var zz=z-1;zz<z+2;zz++)
setTile(xx, y+4, zz, 82);
setTile(x+2, y+2, z, 102);
setTile(x-2, y+2, z, 102);
setTile(x, y+2, z+2, 102);
setTile(x, y+2, z-2, 0);
setTile(x, y+1, z-2, 0);
Level.spawnMob(x+0.5, y+3, z+0.5, 65);
ESP.antiLack(90);
cl3x[n] = x;
cl3y[n] = y;
cl3z[n] = z;
cl3[n] = true;
cl3a[n] = 300;
skillCool(ESP.getUser(), 3);
}
if(i==305&&Cool.isFinished(cl4a[n])){
ESP.heal(clay[n]);
ESP.sbm("Clay Pulling", true);
clx[n] = Player.getX();
cly[n] = Player.getY()-2;
clz[n] = Player.getZ();
setTile(clx[n]+6, cly[n]+1, clz[n]+6, 82);
setTile(clx[n]+6, cly[n]+1, clz[n], 82);
setTile(clx[n]+6, cly[n]+1, clz[n]-6, 82);
setTile(clx[n], cly[n]+1, clz[n]+6, 82);
setTile(clx[n], cly[n]+1, clz[n]-6, 82);
setTile(clx[n]-6, cly[n]+1, clz[n]+6, 82);
setTile(clx[n]-6, cly[n]+1, clz[n], 82);
setTile(clx[n]-6, cly[n]+1, clz[n]-6, 82);
cl4[n] = true;
cl4a[n] = 1800;
skillCool(ESP.getUser(), 4);
}
break;
}}}
if(kirito[0]!=null){
for(var n=0;n<kirito.length;n++){
if(kirito[n]==ESP.getUser()){
if(i==302&&Cool.isFinished(k1a[n])){
px = Player.getX();
pz = Player.getZ();
yaw = Math.floor(getYaw());
sin = -Math.sin(yaw/180*Math.PI);
cos = Math.cos(yaw/180*Math.PI);
teleport(ESP.getUser(), px+8*sin, y+3, pz+8*cos);
ESP.antiLack(5);
explode(px+3*sin, y+1, pz+3*cos, 2.5);
k1[n] = true;
k1a[n] = 150;
skillCool(ESP.getUser(), 1);
}
if(i==303&&Cool.isFinished(k2a[n])){
setTile(x-(Player.getX()-x), y+2, z-(Player.getZ()-z), 57);
k2x[n] = x-(Player.getX()-x);
k2y[n] = y;
k2z[n] = z-(Player.getZ()-z);
k2[n] = true;
k2a[n] = 300;
skillCool(ESP.getUser(), 2);
}
if(i==304&&Cool.isFinished(k3a[n])){
px = Player.getX();
py = y;
pz = Player.getZ();
yaw = Math.floor(getYaw());
sin = -Math.sin(yaw/180*Math.PI);
cos = Math.cos(yaw/180*Math.PI);
for(var gun=3;gun<6;gun++){
setTile(px+gun*sin, y+2, pz+gun*cos, 87);
setTile(px+gun*sin, y+3, pz+gun*cos, 51);
}
k3[n] = true;
k3a[n] = 300;
skillCool(ESP.getUser(), 3);
}
break;
}}}
if(jungle[0]!=null){
for(var n=0;n<jungle.length;n++){
if(jungle[n]==ESP.getUser()){
if(i==302&&Cool.isFinished(j1a[n])){
for(var yy=y+1;yy<y+7;yy++)
setTile(x, yy, z, 17, 3);
setTile(x, y+7, z, 18, 3);
for(var yy=y+6;yy<y+8;yy++){
setTile(x+1, yy, z, 18, 3);
setTile(x, yy, z-1, 18, 3);
setTile(x, yy, z+1, 18, 3);
setTile(x-1, yy, z, 18, 3);
}
for(var yy=y+4;yy<y+6;yy++){
setTile(x+1, yy, z+1, 18, 3);
setTile(x+1, yy, z-1, 18, 3);
setTile(x+1, yy, z, 18, 3);
setTile(x-1, yy, z+1, 18, 3);
setTile(x-1, yy, z-1, 18, 3);
setTile(x-1, yy, z, 18, 3);
setTile(x, yy, z+1, 18, 3);
setTile(x, yy, z-1, 18, 3);
setTile(x+2, yy, z+1, 18, 3);
setTile(x+2, yy, z-1, 18, 3);
setTile(x+2, yy, z, 18, 3)
setTile(x-2, yy, z+1, 18, 3);
setTile(x-2, yy, z-1, 18, 3);
setTile(x-2, yy, z, 18, 3);
setTile(x+1, yy, z+2, 18, 3);
setTile(x-1, yy, z+2, 18, 3);
setTile(x, yy, z+2, 18, 3);
setTile(x+1, yy, z-2, 18, 3);
setTile(x-1, yy, z-2, 18, 3);
setTile(x, yy, z-2, 18, 3);
}
j1[n] = true;
j1a[n] = 150;
skillCool(ESP.getUser(), 1);
}
if(i==303&&Cool.isFinished(j2a[n])){
ESP.createJungleTree(x, y, z);
j2[n] = true;
j2a[n] = 300;
skillCool(ESP.getUser(), 2);
}
if(i==304&&Cool.isFinished(j3a[n])){
for(var xx=x-2;xx<x+3;xx++)
for(var yy=y+1;yy<y+5;yy++)
for(var zz=z-2;zz<z+3;zz++)
setTile(xx, yy, zz, 48);
for(var xx=x-1;xx<x+2;xx++)
for(var yy=y+1;yy<y+4;yy++)
for(var zz=z-1;zz<z+2;zz++)
setTile(xx, yy, zz, 0);
Level.spawnMob(x, y+2.5, z, 32);
j3x[n] = x;
j3y[n] = y;
j3z[n] = z;
j3[n] = true;
j3a[n] = 300;
skillCool(ESP.getUser(), 3);
}
if(i==305&&Cool.isFinished(j4a[n])){
if(Cool.isFalse(j4b[n])){
ESP.heal(jungle[n]);
setTile(x, y, z, 18, 3);
j4b[n] = true;
jx[n] = x;
jy[n] = y;
jz[n] = z;
}
else if(j4b[n]){
ESP.sbm("Under Jungle Water", true);
for(var xx=jx[n]-11;xx<jx[n]+12;xx++)
for(var yy=jy[n]-6;yy<jy[n]+1;yy++)
for(var zz=jz[n]-11;zz<jz[n]+12;zz++)
setTile(xx, yy, zz, 0);
j4b[n] = false;
j4[n] = true;
j4a[n] = 1800;
skillCool(ESP.getUser(), 4);
}
}
break;
}}}
if(kanade[0]!=null){
for(var n=0;n<kanade.length;n++){
if(kanade[n]==ESP.getUser()){
if(i==302&&Cool.isFinished(ka1a[n])){
teleport(ESP.getUser(), x+(x-Player.getX()), y+3, z+(z-Player.getZ()))
ka1[n] = true;
ka1a[n] = 150;
skillCool(ESP.getUser(), 1);
}
if(i==304){
if(Cool.isFinished(ka3a[n])&&Cool.isFalse(ka3b[n])){
ka3x[n] = Player.getX();
ka3y[n] = Player.getY()-2;
ka3z[n] = Player.getZ();
for(var xx=ka3x[n]-1;xx<ka3x[n]+2;xx++){
for(var yy=ka3y[n]+1;yy<ka3y[n]+4;yy++){
for(var zz=ka3z[n]-1;zz<ka3z[n]+2;zz++){
setTile(xx, yy, ka3z[n]+2, 20);
setTile(xx, yy, ka3z[n]-2, 20);
setTile(ka3x[n]+2 ,yy, zz, 20);
setTile(ka3x[n]-2 ,yy, zz, 20);
setTile(xx, ka3y[n]+4, zz, 20);
}}}
ka3b[n] = true;
ka3[n] = true;
ka3a[n] = 300;
skillCool(ESP.getUser(), 3);
}
else if(ka3b[n]){
for(var xx=ka3x[n]-1;xx<ka3x[n]+2;xx++){
for(var yy=ka3y[n]+1;yy<ka3y[n]+4;yy++){
for(var zz=ka3z[n]-1;zz<ka3z[n]+2;zz++){
setTile(xx, yy, ka3z[n]+2, 0);
setTile(xx, yy, ka3z[n]-2, 0);
setTile(ka3x[n]+2 ,yy, zz, 0);
setTile(ka3x[n]-2 ,yy, zz, 0);
setTile(xx, ka3y[n]+4, zz, 0);
}}}
ka3b[n] =false;
}
}
if(i==305&&Cool.isFinished(ka4a[n])){
ESP.heal(kanade[n]);
ESP.sbm("Guard Skill : Howling", true);
kax[n] = Player.getX();
kay[n] = Player.getY()-2;
kaz[n] = Player.getZ();
ESP.antiLack(5);
explode(kax[n]+2, kay[n]+1, kaz[n]+2, 1.5);
explode(kax[n]+3, kay[n]+1, kaz[n], 1.5);
explode(kax[n]+2, kay[n]+1, kaz[n]-2, 1.5);
explode(kax[n], kay[n]+1, kaz[n]+3, 1.5);
explode(kax[n], kay[n]+1, kaz[n]-3, 1.5);
explode(kax[n]-2, kay[n]+1, kaz[n]+2, 1.5);
explode(kax[n]-3, kay[n]+1, kaz[n], 1.5);
explode(kax[n]-2, kay[n]+1, kaz[n]-2, 1.5);
ka4[n] = true;
ka4a[n] = 1800;
skillCool(ESP.getUser(), 4);
}
break;
}}}
if(time[0]!=null){
for(var n=0;n<time.length;n++){
if(time[n]==ESP.getUser()){
if(i==302&&Cool.isFinished(ti1a[n])){
teleport(time[n], x+(x-Player.getX()), y+3, z+(z-Player.getZ()));
ti1[n] = true;
ti1a[n] = 150;
skillCool(ESP.getUser(), 1);
}
if(i==305&&Cool.isFinished(ti4a[n])){
ESP.sbm("Time Stop", true);
ESP.heal(time[n]);
if(mcpev3){
for each(var e in Entity.getAll()){
if(Entity.getEntityTypeId(e)<64&&time[n]!=e){
try{
Entity.addEffect(e, MobEffect.movementSlowdown, 450, 19, true, false);
}
catch(e){
//null
}
}
}
}
else{
ESP.timeStop(true, n);
}
ti4[n] = true;
ti4a[n] = 1800;
skillCool(ESP.getUser(), 4);
}
break;
}}}
if(snipe[0]!=null){
for(var n=0;n<snipe.length;n++){
if(snipe[n]==ESP.getUser()){
if(i==302&&Cool.isFinished(sn1a[n])){
ESP.antiLack(150);
var pos = ESP.getSniperPoint(n);
explode(pos[0], pos[1], pos[2], 2.5);
pos = ESP.getSniperPoint(n);
snx[n] = pos[0];
sny[n] = pos[1];
snz[n] = pos[2];
sn4c[n] = getTile(snx[n], sny[n], snz[n]);
sn4d[n] = Level.getData(snx[n], sny[n], snz[n]);
setTile(snx[n], sny[n], snz[n], 35, 14);
sn1[n] = true;
sn1a[n] = 150;
skillCool(ESP.getUser(), 1);
}
if(i==303&&Cool.isFinished(sn2a[n])){
for(var xx=snx[n]-1;xx<snx[n]+2;xx++)
for(var zz=snz[n]-1;zz<snz[n]+2;zz++)
setTile(xx, sny[n]+1, zz, 51);
var pos = ESP.getSniperPoint(n);
snx[n] = pos[0];
sny[n] = pos[1];
snz[n] = pos[2];
sn4c[n] = getTile(snx[n], sny[n], snz[n]);
sn4d[n] = Level.getData(snx[n], sny[n], snz[n]);
setTile(snx[n], sny[n], snz[n], 35, 14);
sn2[n] = true;
sn2a[n] = 300;
skillCool(ESP.getUser(), 2);
}
if(i==304&&Cool.isFinished(sn3a[n])){
var pos = ESP.getSniperPoint(n);
teleport(snipe[n], pos[0], pos[1]+3, pos[2]);
sn3[n] = true;
sn3a[n] = 300;
skillCool(ESP.getUser(), 3);
}
if(i==305){
if(Cool.isFinished(sn4a[n])&&Cool.isFinished(sn4b[n])){
ESP.heal(snipe[n]);
ESP.sbm("Hyper Snipe", true);
for(var xx=x-2;xx<x+3;xx++)
for(var zz=z-2;zz<z+3;zz++)
setTile(xx, y+15, zz, 20);
teleport(snipe[n], x, y+18, z);
sn4x[n] = x;
sn4y[n] = y;
sn4z[n] = z;
sn4b[n] = true;
sn4[n] = true;
sn4a[n] = 1800;
skillCool(ESP.getUser(), 4);
}
else if(sn4b[n]){
var pos = ESP.getSniperPoint(n);
explode(pos[0], pos[1], pos[2], 3);
pos = ESP.getSniperPoint(n);
snx[n] = pos[0];
sny[n] = pos[1];
snz[n] = pos[2];
sn4c[n] = getTile(snx[n], sny[n], snz[n]);
sn4d[n] = Level.getData(snx[n], sny[n], snz[n]);
setTile(snx[n], sny[n], snz[n], 35, 14);
}
}
break;
}}}
if(zombie[0]!=null){
for(var n=0;n<zombie.length;n++){
if(zombie[n]==ESP.getUser()){
if(i==302&&Cool.isFinished(z1a[n])){
for(var m=0;m<5;m++)
Level.spawnMob(x, y+3, z, 32);
z1[n] = true;
z1a[n] = 150;
skillCool(ESP.getUser(), 1);
}
if(i==303&&Cool.isFinished(z2a[n])){
z2b[n] = Level.spawnMob(x, y+3, z, 32);
Entity.setHealth(z2b[n], 50);
z2[n] = true;
z2a[n] = 300;
skillCool(ESP.getUser(), 2);
}
if(i==304&&Cool.isFinished(z3a[n])){
z3b[n] = Level.spawnMob(x, y+3, z, 32);
Entity.setHealth(z3b[n], 50);
z3[n] = true;
z3a[n] = 300;
skillCool(ESP.getUser(), 3);
}
if(i==305&&Cool.isFinished(z4a[n])){
ESP.heal(zombie[n]);
ESP.sbm("Zombie Army", true);
for(var nn=0;nn<20;nn++){
var z4b = Level.spawnMob(x+(x-Player.getX()), y+3, z+(z-Player.getZ()), 32);
Entity.setHealth(z4b, 25);
}
z4b = Level.spawnMob(x+(x-Player.getX()), y+3, z+(z-Player.getZ()), 36);
Entity.setHealth(z4b, 50);
z4[n] = true;
z4a[n] = 1800;
skillCool(ESP.getUser(), 4);
}
break;
}}}
if(necro[0]!=null){
for(var n=0;n<necro.length;n++){
if(necro[n]==ESP.getUser()){
if(i==302&&Cool.isFinished(ne1a[n])){
Level.spawnMob(x, y+3, z, 32);
Level.spawnMob(x, y+3, z, 32);
Level.spawnMob(x, y+3, z, 32);
Level.spawnMob(x, y+3, z, 34);
Level.spawnMob(x, y+3, z, 34);
ne1[n] = true;
ne1a[n] = 150;
skillCool(ESP.getUser(), 1);
}
if(i==303&&Cool.isFinished(ne2a[n])){
var uuu, ooo;
for(var nn=0;nn<3;nn++){
uuu = Level.spawnMob(x, y+3, z, 35);
ooo = Level.spawnMob(x, y+3, z, 65);
Entity.rideAnimal(ooo, uuu);
}
ne2[n] = true;
ne2a[n] = 300;
skillCool(ESP.getUser(), 2);
}
if(i==304&&Cool.isFinished(ne3a[n])){
for(var nn=0;nn<7;nn++)
Level.spawnMob(x, y+3, z, 36);
ne3[n] = true;
ne3a[n] = 300;
skillCool(ESP.getUser(), 3);
}
if(i==305&&Cool.isFinished(ne4a[n])){
ESP.heal(necro[n]);
ESP.sbm("Zombie Pigman ESP", true);
ne4b[n] = Level.spawnMob(x+(x-Player.getX()), y+3, z+(z-Player.getX()), 36);
Entity.setHealth(ne4b[n], 100);
ne4c[n] = Level.spawnMob(x, y+3, z, 35);
Entity.setHealth(ne4c[n], 50);
Entity.rideAnimal(ne4b[n], ne4c[n]);
ne4[n] = true;
ne4a[n] = 1800;
skillCool(ESP.getUser(), 4);
}
break;
}}}
if(asuna[0]!=null){
for(var n=0;n<asuna.length;n++){
if(asuna[n]==ESP.getUser()){
if(i==303&&Cool.isFinished(asn2a[n])){
px = Player.getX();
pz = Player.getZ();
yaw = Math.floor(getYaw());
sin = -Math.sin(yaw/180*Math.PI);
cos = Math.cos(yaw/180*Math.PI);
teleport(asuna[n], px+11*sin, y+3, pz+11*cos);
ESP.antiLack(5);
explode(px+4*sin, y+1, pz+4*cos, 3);
asn2[n] = true;
asn2a[n] = 300;
skillCool(ESP.getUser(), 2);
}
if(i==305&&Cool.isFinished(asn4a[n])){
ESP.heal(asuna[n]);
ESP.sbm("Flashing Penetrator", true);
var p2x, p2y, p2z;
var nn = 15+Math.random()*3;
for each(var e in Entity.getAll()){
p2x = Math.abs(x-Entity.getX(e));
p2y = Math.abs(y-Entity.getY(e));
p2z = Math.abs(z-Entity.getZ(e));
if(p2x<=25&&p2y<=25&&p2z<=25&&e!=asuna[n]&&Entity.getEntityTypeId(e)<64)
Entity.setHealth(e, Entity.getHealth(e)-nn);
}
teleport(asuna[n], x+(x-Player.getX()), y+3, z+(z-Player.getZ()))
asn4[n] = true;
asn4a[n] = 1800;
skillCool(ESP.getUser(), 4);
}
break;
}}}
if(holy[0]!=null){
for(var n=0;n<holy.length;n++){
if(holy[n]==ESP.getUser()){
if(i==302&&Cool.isFinished(ho1a[n])){
px = Player.getX();
py = y;
pz = Player.getZ();
yaw = Math.floor(getYaw());
sin = -Math.sin(yaw/180*Math.PI);
cos = Math.cos(yaw/180*Math.PI);
for(var gun=2;gun<7;gun++)
setTile(px+gun*sin, y+1, pz+gun*cos, 155);
teleport(holy[n], px+7*sin, y+3, pz+7*cos)
ho1[n] = true;
ho1a[n] = 150;
skillCool(ESP.getUser(), 1);
}
if(i==303&&Cool.isFinished(ho2a[n])){
px = Player.getX();
py = Player.getY();
pz = Player.getZ();
yaw = Math.floor(getYaw());
sin = -Math.sin(yaw/180*Math.PI);
cos = Math.cos(yaw/180*Math.PI);
for(var yy=py+1;yy<py+6;yy++)
setTile(px, yy, pz, 155);
ho2[n] = true;
ho2a[n] = 300;
skillCool(ESP.getUser(), 2);
}
if(i==304&&Cool.isFinished(ho3a[n])){
px = Player.getX();
py = y;
pz = Player.getZ();
yaw = Math.floor(getYaw());
sin = -Math.sin(yaw/180*Math.PI);
cos = Math.cos(yaw/180*Math.PI);
for(var gun=3;gun<25;gun++)
setTile(px+gun*sin, y+2, pz+gun*cos, 155);
ho3[n] = true;
ho3a[n] = 300;
skillCool(ESP.getUser(), 3);
}
if(i==305&&Cool.isFinished(ho4a[n])){
ESP.heal(holy[n]);
ESP.sbm("Holy Sword", true);
px = Player.getX();
py = Math.floor(Player.getY())+1;
pz = Player.getZ();
yaw = Math.floor(getYaw());
sin = -Math.sin(yaw/180*Math.PI);
cos = Math.cos(yaw/180*Math.PI);
setTile(px, py, pz, 17, 2);
setTile(px-sin, py+1, pz-cos, 17, 2);
setTile(px-sin, py+3, pz-cos, 41);
setTile(px-2*sin, py+2, pz-2*cos, 41);
setTile(px-3*sin, py+1, pz-3*cos, 41);
for(var ss=3;ss<8;ss++)
setTile(px-ss*sin, py+ss, pz-ss*cos, 155);
hox[n] = [Player.getX(), px+18*sin, px+36*sin];
hoy[n] = Player.getY()-2;
hoz[n] = [Player.getZ(), pz+18*cos, pz+36*cos];
ho4[n] = true;
ho4a[n] = 1800;
skillCool(ESP.getUser(), 4);
}
break;
}}}
if(solar[0]!=null){
for(var n=0;n<solar.length;n++){
if(solar[n]==ESP.getUser()){
if(i==302&&Cool.isFinished(sol1a[n])){
for(var xx=x-1;xx<x+2;xx++){
for(var zz=z-1;zz<z+2;zz++){
setTile(xx, y+1, z+2, 51);
setTile(xx, y+1, z-2, 51);
setTile(x+2, y+1, zz, 51);
setTile(x-2, y+1, zz, 51);
}}
sol1[n] = true;
sol1a[n] = 150;
skillCool(ESP.getUser(), 1);
}
if(i==303&&Cool.isFinished(sol3a[n])){
px = Player.getX();
py = y;
pz = Player.getZ();
yaw = Math.floor(getYaw());
sin = -Math.sin(yaw/180*Math.PI);
cos = Math.cos(yaw/180*Math.PI);
for(var gun=3;gun<25;gun++)
setTile(px+gun*sin, y+2, pz+gun*cos, 41);
sol2[n] = true;
sol2a[n] = 300;
skillCool(ESP.getUser(), 2);
}
if(i==304&&Cool.isFinished(sol3a[n])){
arroundMobFireTicks(solar[n], 20, 10);
sol3[n] = true;
sol3a[n] = 300;
skillCool(ESP.getUser(), 3);
}
if(i==305&&Cool.isFinished(sol4a[n])){
ESP.sbm("Sword of Sun", true);
ESP.heal(solar[n]);
Level.setTime(400);
for(var yy=y+3;yy<y+8;yy++)
setTile(x, yy, z, 41);
setTile(x+1, y+8, z, 42);
setTile(x, y+8, z, 42);
setTile(x-1, y+8, z, 42);
setTile(x, y+9, z, 17);
setTile(x, y+10, z, 17);
solx[n] = x;
soly[n] = y;
solz[n] = z;
sol4[n] = true;
sol4a[n] = 1800;
skillCool(ESP.getUser(), 4);
}
break;
}}}
if(lunar[0]!=null){
for(var n=0;n<lunar.length;n++){
if(lunar[n]==ESP.getUser()){
if(i==302&&Cool.isFinished(lu1a[n])){
teleport(lunar[n], x+(x-Player.getX()), y+3, z+(z-Player.getZ()));
lu1[n] = true;
lu1a[n] = 150;
skillCool(ESP.getUser(), 1);
}
if(i==303&&Cool.isFinished(lu2a[n])){
px = Player.getX();
py = y;
pz = Player.getZ();
yaw = Math.floor(getYaw());
sin = -Math.sin(yaw/180*Math.PI);
cos = Math.cos(yaw/180*Math.PI);
for(var gun=3;gun<25;gun++)
setTile(px+gun*sin, y+2, pz+gun*cos, 155);
lu2[n] = true;
lu2a[n] = 300;
skillCool(ESP.getUser(), 2);
}
if(i==304&&Cool.isFinished(lu3a[n])){
luxa = Math.abs(x-Player.getX());
luza = Math.abs(z-Player.getZ());
if(luxa>luza){
for(var yy=y+1;yy<y+5;yy++)
for(var zz=z-2;zz<z+3;zz++)
setTile(x, yy, zz, 155);
}
else if(luxa<luza){
for(var xx=x-2;xx<x+3;xx++)
for(var yy=y+1;yy<y+5;yy++)
setTile(xx, yy, z, 155);
}
lu3[n] = true;
lu3a[n] = 300;
skillCool(ESP.getUser(), 3);
}
if(i==305&&Cool.isFinished(lu4a[n])){
ESP.sbm("Staff of Moon", true);
ESP.heal(lunar[n]);
Level.setTime(14000);
for(var yy=y+3;yy<y+9;yy++)
setTile(x, yy, z, 17);
setTile(x, y+9, z, 155, 1);
setTile(x, y+10, z, 155, 1);
setTile(x+1, y+10, z, 155, 1);
setTile(x-1, y+10, z, 155, 1);
setTile(x, y+10, z+1, 155, 1);
setTile(x, y+10, z-1, 155, 1);
setTile(x, y+11, z, 155, 1);
lux[n] = x;
luy[n] = y;
luz[n] = z;
lu4[n] = true;
lu4a[n] = 1800;
skillCool(ESP.getUser(), 4);
}
break;
}}}
if(has[0]!=null){
for(var n=0;n<has.length;n++){
if(has[n]==ESP.getUser()){
if(i==302&&Cool.isFinished(ha1a[n])){
arroundMobHealthDown(has, 10, 5);
ha1[n] = true;
ha1a[n] = 150;
skillCool(ESP.getUser(), 1);
}
if(i==303&&Cool.isFinished(ha2a[n])){
px = Player.getX();
pz = Player.getZ();
yaw = Math.floor(getYaw());
sin = -Math.sin(yaw/180*Math.PI);
cos = Math.cos(yaw/180*Math.PI);
ESP.antiLack(5);
explode(px+9*sin, y+1, pz+9*cos, 3);
ha2x[n] = px+9*sin;
ha2y[n] = y;
ha2z[n] = pz+9*cos;
for(var xx=ha2x[n]-5;xx<ha2x[n]+6;xx++)
for(var yy=y-5;yy<y+1;yy++)
for(var zz=ha2z[n]-5;zz<ha2z[n]+6;zz++)
if(getTile(xx, yy, zz)==0){
setTile(xx, yy, zz, 51);
}
ha2[n] = true;
ha2a[n] = 300;
skillCool(ESP.getUser(), 2);
}
if(i==305&&Cool.isFinished(ha4a[n])){
ESP.heal(has[n]);
ESP.sbm("Arround Assault", true);
arroundMobHealthDown(has[n], 10, 3);
ha4[n] = true;
ha4a[n] = 1800;
skillCool(ESP.getUser(), 4);
}
break;
}}}
if(random[0]!=null){
for(var n=0;n<random.length;n++){
if(random[n]==ESP.getUser()){
if(i==302&&Cool.isFinished(ra1a[n])){
ra1b[n] = ESP.random(2);
if(ra1b[n]==0){
ESP.antiLack(5);
explode(x, y+0.7, z, 2.5);
}
else if(ra1b[n]==1){
for(var xx=x-1;xx<x+2;xx++)
for(var zz=z-1;zz<z+2;zz++)
setTile(xx, y+1, zz, 51);
}
ra1[n] = true;
ra1a[n] = 150;
skillCool(ESP.getUser(), 1);
}
if(i==303&&Cool.isFinished(ra2a[n])){
ra2b[n] = ESP.random(3);
if(ra2b[n]==0){
for(var xx=x-1;xx<x+2;xx++)
for(var zz=z-1;zz<z+2;zz++)
setTile(xx, y+1, zz, 30);
}
else if(ra2b[n]==1){
teleport(random[n], x+(x-Player.getX()), y+3, z+(z-Player.getZ()));
}
else if(ra2b[n]==2){
raxa = Math.abs(x-Player.getX());
raza = Math.abs(z-Player.getZ());
if(raxa>raza){
for(var yy=y+1;yy<y+5;yy++)
for(var zz=z-2;zz<z+3;zz++)
setTile(x, yy, zz, 1);
}
else if(raxa<raza){
for(var xx=x-2;xx<x+3;xx++)
for(var yy=y+1;yy<y+5;yy++)
setTile(xx, yy, z, 1);
}
}
ra2[n] = true;
ra2a[n] = 300;
skillCool(ESP.getUser(), 2);
}
if(i==305&&Cool.isFinished(ra4a[n])){
ESP.heal(random[n]);
ESP.sbm("Random Attack", true);
ra4b[n] = ESP.random(4);
if(ra4b[n]==0){
arroundMobFireTicks(random, 50, 30);
}
else if(ra4b[n]==1){
rax[n] = Player.getX();
ray[n] = Player.getY()-2;
raz[n] = Player.getZ();
for(var xx=rax[n]-12;xx<rax[n]+13;xx++){
for(var zz=raz[n]-12;zz<raz[n]+13;zz++){
setTile(xx, ray[n], zz, 51);
setTile(xx, ray[n]-1, zz, 51);
}}
setTile(rax[n], ray[n], raz[n], 2);
}
else if(ra4b[n]==2){
for(var nn=0;nn<20;nn++)
Level.spawnMob(x+(x-Player.getX()), y+3, z+(z-Player.getZ()), 33);
}
else if(ra4b[n]==3){
rax[n] = x;
ray[n] = y;
raz[n] = z;
ESP.antiLack(90);
explode(x+7, y+1, z+7, 3);
explode(x+7, y+1, z-7, 3);
explode(x-7, y+1, z+7, 3);
explode(x-7, y+1, z-7, 3);
Level.spawnMob(x, y+5, z, 65);
Level.spawnMob(x, y+10, z+3, 65);
Level.spawnMob(x+4, y+7, z, 65);
Level.spawnMob(x, y+15, z-7, 65);
Level.spawnMob(x-9, y+5, z, 65);
Level.spawnMob(x+6, y+17, z+3, 65);
Level.spawnMob(x-10, y+15, z-7, 65);
Level.spawnMob(x-5, y+15, z+5, 65);
Level.spawnMob(x+3, y+10, z-9, 65);
Level.spawnMob(x-5, y+7, z, 65);
Level.spawnMob(x, y+14, z+8, 65);
Level.spawnMob(x-8, y+9, z, 65);
Level.spawnMob(x+1, y+18, z+6, 65);
Level.spawnMob(x-2, y+13, z-6, 65);
}
ra4[n] = true;
ra4a[n] = 1800;
skillCool(ESP.getUser(), 4);
}
break;
}}}
if(zwei[0]!=null){
for(var n=0;n<zwei.length;n++){
if(zwei[n]==ESP.getUser()){
if(i==302&&Cool.isFinished(zw1a[n])){
px = Player.getX();
py = y;
pz = Player.getZ();
yaw = Math.floor(getYaw());
sin = -Math.sin(yaw/180*Math.PI);
cos = Math.cos(yaw/180*Math.PI);
for(var gun=3;gun<20;gun++)
setTile(px+gun*sin, y+2, pz+gun*cos, 79);
zw1[n] = true;
zw1a[n] = 150;
skillCool(ESP.getUser(), 1);
}
if(i==303&&Cool.isFinished(zw2a[n])){
explode(x+0.5, y+3, z+0.5, 2);
for(var xx=x-1;xx<x+2;xx++){
for(var yy=y+1;yy<y+4;yy++){
for(var zz=z-1;zz<z+2;zz++){
setTile(xx, yy, z+2, 79);
setTile(xx, yy, z-2, 79);
setTile(x+2, yy, zz, 79);
setTile(x-2, yy, zz, 79);
setTile(xx, y+4, zz, 79);
}}}
zw2x[n] = x;
zw2y[n] = y;
zw2z[n] = z;
zw2[n] = true;
zw2a[n] = 300;
skillCool(ESP.getUser(), 2);
}
if(i==304&&Cool.isFinished(zw3a[n])){
zw3[n] = true;
zw3a[n] = 300;
skillCool(ESP.getUser(), 3);
}
if(i==305&&Cool.isFinished(zw4a[n])){
ESP.heal(zwei[n]);
ESP.sbm("Frigid Dagger", true);
ESP.zweiHyperPlus(zwei[n], 35, n);
zw4[n] = true;
zw4a[n] = 1800;
skillCool(ESP.getUser(), 4);
}
break;
}}}
if(deco[0]!=null){
for(var n=0;n<deco.length;n++){
if(deco[n]==ESP.getUser()){
if(i==302&&Cool.isFinished(dec1a[n])){
setTile(x, y+1, z, 17);
setTile(x+1, y+1, z+1, 17);
setTile(x+1, y+1, z-1, 17);
setTile(x-1, y+1, z+1, 17);
setTile(x-1, y+1, z-1, 17);
setTile(x, y+2, z, 18);
setTile(x+1, y+2, z+1, 18);
setTile(x+1, y+2, z-1, 18);
setTile(x-1, y+2, z+1, 18);
setTile(x-1, y+2, z-1, 18);
dec1[n] = true;
dec1a[n] = 150;
skillCool(ESP.getUser(), 1);
}
if(i==303&&Cool.isFinished(dec2a[n])){
decxa = Math.abs(x-Player.getX());
decza = Math.abs(z-Player.getZ());
if(decxa>decza){
for(var yy=y+1;yy<y+5;yy++)
for(var zz=z-2;zz<z+3;zz++)
setTile(x, yy, zz, 35, ESP.random(16));
}
else if(decxa<decza){
for(var xx=x-2;xx<x+3;xx++)
for(var yy=y+1;yy<y+5;yy++)
setTile(xx, yy, z, 35, ESP.random(16));
}
dec2[n] = true;
dec2a[n] = 300;
skillCool(ESP.getUser(), 2);
}
if(i==304&&Cool.isFinished(dec3a[n])){
dec3x[n] = Player.getX();
dec3y[n] = Player.getY()-2;
dec3z[n] = Player.getZ();
setTile(dec3x[n]+1, dec3y[n]+1, dec3z[n]+5, 89);
setTile(dec3x[n], dec3y[n]+1, dec3z[n]+5, 89);
setTile(dec3x[n]-1, dec3y[n]+1, dec3z[n]+5, 89);
setTile(dec3x[n]+1, dec3y[n]+1, dec3z[n]-5, 89);
setTile(dec3x[n], dec3y[n]+1, dec3z[n]-5, 89);
setTile(dec3x[n]-1, dec3y[n]+1, dec3z[n]-5, 89);
setTile(dec3x[n]+5, dec3y[n]+1, dec3z[n]+1, 89);
setTile(dec3x[n]+5, dec3y[n]+1, dec3z[n], 89);
setTile(dec3x[n]+5, dec3y[n]+1, dec3z[n]-1, 89);
setTile(dec3x[n]-5, dec3y[n]+1, dec3z[n]+1, 89);
setTile(dec3x[n]-5, dec3y[n]+1, dec3z[n], 89);
setTile(dec3x[n]-5, dec3y[n]+1, dec3z[n]-1, 89);
setTile(dec3x[n]+5, dec3y[n]+2, dec3z[n], 89);
setTile(dec3x[n]-5, dec3y[n]+2, dec3z[n], 89);
setTile(dec3x[n], dec3y[n]+2, dec3z[n]+5, 89);
setTile(dec3x[n], dec3y[n]+2, dec3z[n]-5, 89);
dec3[n] = true;
dec3a[n] = 300;
skillCool(ESP.getUser(), 3);
}
if(i==305&&Cool.isFinished(dec4a[n])){
ESP.heal(deco[n]);
ESP.sbm("Dark Death Decoration", true);
setTile(x-6, y+1, z, 46);
setTile(x-4, y+1, z-4, 46);
setTile(x-4, y+1, z-2, 46);
setTile(x-4, y+1, z+2, 46);
setTile(x-4, y+1, z+4, 46);
setTile(x-3, y+1, z-3, 46);
setTile(x-3, y+1, z+3, 46);
setTile(x-2, y+1, z-4, 46);
setTile(x-2, y+1, z-2, 46);
setTile(x-2, y+1, z+2, 46);
setTile(x-2, y+1, z+4, 46);
setTile(x-2, y+2, z-2, 46);
setTile(x-2, y+2, z+2, 46);
setTile(x-1, y+1, z-1, 46);
setTile(x-1, y+1, z+1, 46);
setTile(x, y+1, z-6, 46);
setTile(x, y+1, z, 46);
setTile(x, y+1, z+6, 46);
setTile(x, y+2, z, 46);
setTile(x, y+3, z, 46);
setTile(x+1, y+1, z-1, 46);
setTile(x+1, y+1, z+1, 46);
setTile(x+2, y+1, z-4, 46);
setTile(x+2, y+1, z-2, 46);
setTile(x+2, y+1, z+2, 46);
setTile(x+2, y+1, z+4, 46);
setTile(x+2, y+2, z-2, 46);
setTile(x+2, y+2, z+2, 46);
setTile(x+3, y+1, z-3, 46);
setTile(x+3, y+1, z+3, 46);
setTile(x+4, y+1, z-4, 46);
setTile(x+4, y+1, z-2, 46);
setTile(x+4, y+1, z+2, 46);
setTile(x+4, y+1, z+4, 46);
setTile(x+6, y+1, z, 46);
Level.spawnMob(x+0.5, y+12, z+0.5, 65);
for(var xx=x-8;xx<x+9;xx++){
for(var yy=y;yy<y+6;yy++){
for(var zz=z-8;zz<z+9;zz++){
setTile(xx, yy, z+9, 49);
setTile(xx, yy, z-9, 49);
setTile(x+9, yy, zz, 49);
setTile(x-9, yy, zz, 49);
}}}
teleport(deco[n], x-3*(x-Player.getX()), y+3, z-3*(z-Player.getZ()));
decx[n] = x;
decy[n] = y;
decz[n] = z;
dec4[n] = true;
dec4a[n] = 1800;
skillCool(ESP.getUser(), 4);
}
break;
}}}
if(hsum[0]!=null){
for(var n=0;n<hsum.length;n++){
if(hsum[n]==ESP.getUser()){
if(i==302&&Cool.isFinished(hs1a[n])){
for(var nn=0;nn<5;nn++)
Level.spawnMob(x, y+3, z, 35);
hs1[n] = true;
hs1a[n] = 150;
skillCool(ESP.getUser(), 1);
}
if(i==303&&Cool.isFinished(hs2a[n])){
for(var nn=0;nn<5;nn++){
Level.spawnMob(x, y+3, z, 32);
Level.spawnMob(x, y+3, z, 34);
}
hs2[n] = true;
hs2a[n] = 300;
skillCool(ESP.getUser(), 2);
}
if(i==304&&Cool.isFinished(hs3a[n])){
for(var nn=0;nn<10;nn++)
Level.spawnMob(x, y+3, z, 36);
hs3[n] = true;
hs3a[n] = 300;
skillCool(ESP.getUser(), 3);
}
if(i==305&&Cool.isFinished(hs4a[n])){
ESP.heal(hsum[n]);
ESP.sbm("Bursters", true);
for(var nn=0;nn<10;nn++)
Level.spawnMob(x, y+3, z, 33);
var uuu, ooo;
for(var nn=0;nn<5;nn++){
uuu = Level.spawnMob(x, y+3, z, 35);
ooo = Level.spawnMob(x, y+3, z, 65);
Entity.rideAnimal(ooo, uuu);
}
hs4[n] = true;
hs4a[n] = 1800;
skillCool(ESP.getUser(), 4);
}
break;
}}}
if(climate[0]!=null){
for(var n=0;n<climate.length;n++){
if(climate[n]==ESP.getUser()){
if(i==302&&Cool.isFinished(cli1a[n])){
for(var yy=y+1;yy<y+4;yy++)
setTile(x, yy, z, 17);
setTile(x, y+4, z, 18);
for(var yy=y+2;yy<y+4;yy++){
setTile(x+1, yy, z, 18);
setTile(x-1, yy, z, 18);
setTile(x, yy, z+1, 18);
setTile(x, yy, z-1, 18);
}
setTile(x+3, y+1, z, 31, 1);
setTile(x-1, y+1, z+2, 31, 1);
setTile(x-2, y+1, z, 31, 1);
setTile(x, y+1, z-3, 31, 1);
setTile(x+1, y+1, z+1, 31, 2);
setTile(x+2, y+1, z-2, 31, 2);
setTile(x+2, y+1, z, 38);
cli1[n] = true;
cli1a[n] = 150;
skillCool(ESP.getUser(), 1);
}
if(i==303&&Cool.isFinished(cli2a[n])){
for(var xx=x-4;xx<x+5;xx++)
for(var zz=z-4;zz<z+5;zz++)
setTile(xx, y, zz, 12);
for(var yy=y+1;yy<y+3;yy++){
setTile(x, yy, z, 81);
setTile(x+2, yy, z, 81);
setTile(x-2, yy, z, 81);
setTile(x, yy, z+2, 81);
setTile(x, yy, z-2, 81);
}
var p2x, p2y, p2z;
for each(var e in Entity.getAll()){
p2x = Math.abs(x-Entity.getX(e));
p2y = Math.abs(y-Entity.getY(e));
p2z = Math.abs(z-Entity.getZ(e));
if(p2x<=4&&p2y<=4&&p2z<=4&&climate[n]!=e&&Entity.getEntityTypeId(e)<64)
Entity.setFireTicks(e, 10);
}
cli2[n] = true;
cli2a[n] = 300;
skillCool(ESP.getUser(), 2);
}
if(i==304&&Cool.isFinished(cli3a[n])){
for(var xx=x-4;xx<x+5;xx++)
for(var zz=z-4;zz<z+5;zz++)
setTile(xx, y, zz, 87);
setTile(x-3, y, z+3, 11);
setTile(x-3, y, z+2, 11);
setTile(x-3, y, z+1, 11);
setTile(x+3, y+1, z+4, 87);
setTile(x-1, y+1, z-2, 87);
setTile(x, y+3, z, 89);
var p2x, p2y, p2z;
for each(var e in Entity.getAll()){
p2x = Math.abs(x-Entity.getX(e));
p2y = Math.abs(y-Entity.getY(e));
p2z = Math.abs(z-Entity.getZ(e));
if(p2x<=4&&p2y<=4&&p2z<=4&&climate[n]!=e&&Entity.getEntityTypeId(e)<64){
Entity.setFireTicks(e, 5);
Entity.setHealth(e, Entity.getHealth(e)-3);
}
}
cli3[n] = true;
cli3a[n] = 300;
skillCool(ESP.getUser(), 3);
}
if(i==305&&Cool.isFinished(cli4a[n])){
ESP.heal(climate[n]);
ESP.sbm("Eternal Coffin", true);
clix[n] = Player.getX();
cliy[n] = Player.getY()-2;
cliz[n] = Player.getZ();
for(var xx=clix[n]-12;xx<clix[n]+13;xx++){
for(var yy=cliy[n]+3;yy>=cliy[n]-2;yy--){
for(var zz=cliz[n]-12;zz<cliz[n]+13;zz++){
if(getTile(xx, yy, zz)==10||getTile(xx, yy+1, zz)==11) setTile(xx, yy, zz, 49);
else if(getTile(xx, yy, zz)==8||getTile(xx, yy+1, zz)==9) setTile(xx, yy, zz, 79);
else if(getTile(xx, yy, zz)!=0&&getTile(xx, yy+1, zz)==0) setTile(xx, yy+1, zz, 78);
}}}
arroundMobHealthDown(climate[n], 15, 15);
cli4[n] = true;
cli4a[n] = 1800;
skillCool(ESP.getUser(), 4);
}
break;
}}}
if(raid[0]!=null){
for(var n=0;n<raid.length;n++){
if(raid[n]==ESP.getUser()){
if(i==302&&Cool.isFinished(rr1a[n])){
px = Player.getX();
pz = Player.getZ();
yaw = Math.floor(getYaw());
sin = -Math.sin(yaw/180*Math.PI);
cos = Math.cos(yaw/180*Math.PI);
ESP.antiLack(5);
explode(px+10*sin, y+1, pz+10*cos, 3);
rr1[n] = true;
rr1a[n] = 150;
skillCool(ESP.getUser(), 1);
}
if(i==303&&Cool.isFinished(rr2a[n])){
Entity.setHealth(rr0[n], Entity.getHealth(rr0[n])-5);
rr2[n] = true;
rr2a[n] = 300;
skillCool(ESP.getUser(), 2);
}
if(i==304&&Cool.isFinished(rr3a[n])){
Entity.setFireTicks(rr0[n], 10);
if(ESP.isPlayer(rr0[n])) setTile(Entity.getX(rr0[n]), Entity.getY(rr0[n])-1, Entity.getZ(rr0[n]), 30);
else setTile(Entity.getX(rr0[n]), Entity.getY(rr0[n]), Entity.getZ(rr0[n]), 30);
rr3[n] = true;
rr3a[n] = 300;
skillCool(ESP.getUser(), 3);
}
if(i==305&&Cool.isFinished(rr4a[n])){
ESP.heal(raid[n]);
ESP.sbm("Summon Target", true);
explode(Entity.getX(rr0[n]), Entity.getY(rr0[n])+0.4, Entity.getZ(rr0[n]), 1);
px = Player.getX();
pz = Player.getZ();
yaw = Math.floor(getYaw());
sin = -Math.sin(yaw/180*Math.PI);
cos = Math.cos(yaw/180*Math.PI);
teleport(rr0[n], px+3*sin, y+3, pz+3*cos);
rr4[n] = true;
rr4a[n] = 1800;
skillCool(ESP.getUser(), 4);
}
break;
}}}
if(wind[0]!=null){
for(var n=0;n<wind.length;n++){
if(wind[n]==ESP.getUser()){
if(i==302&&Cool.isFinished(wi1a[n])){
px = Player.getX();
py = y;
pz = Player.getZ();
yaw = Math.floor(getYaw());
sin = -Math.sin(yaw/180*Math.PI);
cos = Math.cos(yaw/180*Math.PI);
ESP.antiLack(5);
explode(px+5*sin, y+1, pz+5*cos, 2);
wi1[n] = true;
wi1a[n] = 150;
skillCool(ESP.getUser(), 1);
}
if(i==303&&Cool.isFinished(wi2a[n])){
wixa = Math.abs(x-Player.getX());
wiza = Math.abs(z-Player.getZ());
if(wixa>wiza){
for(var yy=y+1;yy<y+5;yy++)
for(var zz=z-2;zz<z+3;zz++)
setTile(x, yy, zz, 20);
}
else if(wixa<wiza){
for(var xx=x-2;xx<x+3;xx++)
for(var yy=y+1;yy<y+5;yy++)
setTile(xx, yy, z, 20);
}
wi2[n] = true;
wi2a[n] = 300;
skillCool(ESP.getUser(), 2);
}
if(i==305&&Cool.isFinished(wi4a[n])){
ESP.heal(wind[n]);
ESP.sbm("Sonic Wave", true);
wix[n] = Player.getX();
wiy[n] = Player.getY()-2;
wiz[n] = Player.getZ();
wi4b[n] = [];
var p2x, p2y, p2z;
for each(var e in Entity.getAll()){
p2x = Math.abs(wix[n]-Entity.getX(e));
p2y = Math.abs((wiy[n]+1)-Entity.getY(e));
p2z = Math.abs(wiz[n]-Entity.getZ(e));
if(p2x<=25&&p2y<=25&&p2z<=25&&wind[n]!=e&&Entity.getEntityTypeId(e)<64){
Entity.setHealth(e, Entity.getHealth(e)-2);
wi4b[n].push(e);
}
}
ESP.antiLack(5);
explode(wix[n]+5, wiy[n]+1, wiz[n]+5, 2);
explode(wix[n]+5, wiy[n]+1, wiz[n]-5, 2);
explode(wix[n]-5, wiy[n]+1, wiz[n]+5, 2);
explode(wix[n]-5, wiy[n]+1, wiz[n]-5, 2);
wi4[n] = true;
wi4a[n] = 1800;
skillCool(ESP.getUser(), 4);
}
break;
}}}
if(energy[0]!=null){
for(var n=0;n<energy.length;n++){
if(energy[n]==ESP.getUser()){
if(i==302&&Cool.isFinished(en1a[n])){
ESP.antiLack(5);
explode(x, y+1, z, 3);
en1x[n] = x;
en1y[n] = y;
en1z[n] = z;
en1[n] = true;
en1a[n] = 150;
skillCool(ESP.getUser(), 1);
}
if(i==303&&Cool.isFinished(en2a[n])){
arroundMobFireTicks(energy[n], 15, 10);
en2[n] = true;
en2a[n] = 300;
skillCool(ESP.getUser(), 2);
}
if(i==304&&Cool.isFinished(en3a[n])){
en3x[n] = Player.getX();
en3y[n] = Player.getY()-2;
en3z[n] = Player.getZ();
for(var yy=en3y[n]+1;yy<en3y[n]+6;yy++){
setTile(en3x[n]+6, yy, en3z[n]+6, 89);
setTile(en3x[n]+6, yy, en3z[n], 89);
setTile(en3x[n]+6, yy, en3z[n]-6, 89);
setTile(en3x[n], yy, en3z[n]+6, 89);
setTile(en3x[n], yy, en3z[n]-6, 89);
setTile(en3x[n]-6, yy, en3z[n]+6, 89);
setTile(en3x[n]-6, yy, en3z[n], 89);
setTile(en3x[n]-6, yy, en3z[n]-6, 89);
}
en3[n] = true;
en3a[n] = 300;
skillCool(ESP.getUser(), 3);
}
if(i==305&&Cool.isFinished(en4a[n])){
ESP.heal(energy[n]);
ESP.sbm("Remote Energy Generation", true);
en4b[n] = [];
ESP.energyHyperPlus(energy[n], 40, n);
en4[n] = true;
en4a[n] = 1800;
skillCool(ESP.getUser(), 4);
}
break;
}}}
if(geno[0]!=null){
for(var n=0;n<geno.length;n++){
if(geno[n]==ESP.getUser()){
if(i==302&&Cool.isFinished(g2a[n])){
for(var xx=x-1;xx<x+2;xx++){
for(var yy=y+1;yy<y+4;yy++){
for(var zz=z-1;zz<z+2;zz++){
setTile(xx, yy, z+2, 5, 1);
setTile(xx, yy, z-2, 5, 1);
setTile(x+2, yy, zz, 5, 1);
setTile(x-2, yy, zz, 5, 1);
setTile(xx, y+4, zz, 5, 1);
}}}
Level.spawnMob(x+0.5, y+2.3, z+0.5, 65);
ESP.antiLack(90);
g2x[n] = x;
g2y[n] = y;
g2z[n] = z;
g2[n] = true;
g2a[n] = 300;
skillCool(ESP.getUser(), 2);
}
if(i==304&&Cool.isFinished(g3a[n])){
g3x[n] = Player.getX();
g3y[n] = Player.getY()-2;
g3z[n] = Player.getZ();
for each(var e in Entity.getAll()){
p2x = Math.abs(Player.getX()-Entity.getX(e));
p2y = Math.abs(Player.getY()-Entity.getY(e));
p2z = Math.abs(Player.getZ()-Entity.getZ(e));
if(p2x<=15&&p2y<=15&&p2z<=15&&geno[n]!=e&&Entity.getEntityTypeId(e)<64){
Entity.setHealth(e, Entity.getHealth(e)-5);
Entity.setFireTicks(e, 5);
}
}
g3[n] = true;
g3a[n] = 300;
skillCool(ESP.getUser(), 3);
}
if(i==305&&Cool.isFinished(g4a[n])){
ESP.heal(geno[n]);
ESP.sbm("The Genocide", true);
g4b[n] = [];
for each(var e in Entity.getAll()){
gx = Math.abs(Player.getX()-Entity.getX(e));
gy = Math.abs(Player.getY()-Entity.getY(e));
gz = Math.abs(Player.getZ()-Entity.getZ(e));
if(gx<=35&&gy<=35&&gz<=35&&geno[n]!=e&&Entity.getEntityTypeId(e)<64){
Entity.setHealth(e, Entity.getHealth(e)-5);
setTile(Entity.getX(e), Entity.getY(e)+2, Entity.getZ(e), 46);
explode(Entity.getX(e), Entity.getY(e)+2.8, Entity.getZ(e), 1);
if(ESP.isPlayer(e)) g4b[n].push([Entity.getX(e), Entity.getY(e)-2, Entity.getZ(e)]);
else g4b[n].push([Entity.getX(e), Entity.getY(e)-1, Entity.getZ(e)]);
}
}
ESP.antiLack(60);
g4[n] = true;
g4a[n] = 1800;
skillCool(ESP.getUser(), 4);
}
break;
}}}
if(server[0]!=null){
for(var n=0;n<server.length;n++){
if(server[n]==ESP.getUser()){
if(i==302&&Cool.isFinished(se1a[n])){
for each(var e in Entity.getAll()){
if(ESP.isPlayer(e)&&server[n]!=e)
se1b.push(e);
}
var se3c = se1b[ESP.random(se1b.length)];
teleport(server[n], Entity.getX(se3c), Entity.getY(se3c)+1, Entity.getZ(se3c));
se1b = [];
se1[n] = true;
se1a[n] = 150;
skillCool(ESP.getUser(), 1);
}
if(i==303&&Cool.isFinished(se2a[n])){
for each(var e in Entity.getAll()){
if(ESP.isPlayer(e)&&server[n]!=e)
se2b.push(e);
}
teleport(se2b[ESP.random(se2b.length)], Entity.getX(server[n]), Entity.getY(server[n])+1, Entity.getZ(server[n]));
se2b = [];
se2[n] = true;
se2a[n] = 300;
skillCool(ESP.getUser(), 2);
}
if(i==304&&Cool.isFinished(se3a[n])){
arroundMobHealthDown(server[n], 15, 8);
se3[n] = true;
se3a[n] = 300;
skillCool(ESP.getUser(), 3);
}
break;
}}}
if(out[0]!=null){
for(var n=0;n<out.length;n++){
if(out[n]==ESP.getUser()){
if(i==302&&Cool.isFinished(ou1a[n])){
px = Player.getX();
py = Player.getY();
pz = Player.getZ();
yaw = Math.floor(getYaw());
sin = -Math.sin(yaw/180*Math.PI);
cos = Math.cos(yaw/180*Math.PI);
teleport(out[n], px+10*sin, y+3, pz+10*cos);
ESP.antiLack(5);
explode(px+0.5, py, px+0.5, 2);
ou1[n] = true;
ou1a[n] = 150;
skillCool(ESP.getUser(), 1);
}
if(i==303&&Cool.isFinished(ou2a[n])){
arroundMobHealthDown(out[n], 15, 7);
ESP.antiLack(5);
explode(x, y+1, z, 2);
ou2[n] = true;
ou2a[n] = 300;
skillCool(ESP.getUser(), 2);
}
if(i==304&&Cool.isFinished(ou3a[n])){
var p2x, p2y, p2z;
for each(var e in Entity.getAll()){
p2x = Math.abs(x-Entity.getX(e));
p2y = Math.abs(y-Entity.getY(e));
p2z = Math.abs(z-Entity.getZ(e));
if(p2x<=20&&p2y<=20&&p2z<=20&&out[n]!=e&&Entity.getEntityTypeId(e)<64){
teleport(e, Entity.getX(e), Entity.getY(e)+9, Entity.getZ(e));
Entity.setHealth(e, Entity.getHealth(e)-3);
}
}
ou3[n] = true;
ou3a[n] = 300;
skillCool(ESP.getUser(), 3);
}
if(i==305&&Cool.isFinished(ou4a[n])){
ESP.heal(out[n]);
ESP.sbm("TNT Sending", true);
oux[n] = Player.getX();
ouy[n] = Player.getY()-2;
ouz[n] = Player.getZ();
var p2x, p2y, p2z;
for each(var e in Entity.getAll()){
p2x = Math.abs(oux-Entity.getX(e));
p2y = Math.abs(ouy-Entity.getY(e));
p2z = Math.abs(ouz-Entity.getZ(e));
if(p2x<=25&&p2y<=25&&p2z<=25&&out[n]!=e&&Entity.getEntityTypeId(e)<64){
if(ESP.isPlayer(e)) setTile(Entity.getX(e), Entity.getY(e)-1, Entity.getZ(e), 30);
else setTile(Entity.getX(e), Entity.getY(e), Entity.getZ(e), 30);
Level.spawnMob(Entity.getX(e), Entity.getY(e)+14, Entity.getZ(e), 65);
Entity.setHealth(e, Entity.getHealth(e)-5);
}
}
ESP.antiLack(90);
ou4[n] = true;
ou4a[n] = 1800;
skillCool(ESP.getUser(), 4);
}
break;
}}}
if(rgun[0]!=null){
for(var n=0;n<rgun.length;n++){
if(rgun[n]==ESP.getUser()){
if(i==302&&Cool.isFinished(rg1a[n])){
px = Player.getX();
py = y;
pz = Player.getZ();
yaw = Math.floor(getYaw());
sin = -Math.sin(yaw/180*Math.PI);
cos = Math.cos(yaw/180*Math.PI);
setTile(px+3*sin, y+2, pz+3*cos, 89);
setTile(px+4*sin, y+2, pz+4*cos, 89);
rg1[n] = true;
rg1a[n] = 150;
skillCool(ESP.getUser(), 1);
}
if(i==303&&Cool.isFinished(rg2a[n])){
px = Player.getX();
py = y+2;
pz = Player.getZ();
yaw = Math.floor(getYaw());
sin = -Math.sin(yaw/180*Math.PI);
cos = Math.cos(yaw/180*Math.PI);
for(var yy=py+1;yy<py+9;yy++)
setTile(px, yy, pz, 15);
rg2[n] = true;
rg2a[n] = 300;
skillCool(ESP.getUser(), 2);
}
if(i==304&&Cool.isFinished(rg3a[n])){
rg3x[n] = Player.getX();
rg3y[n] = Player.getY()-2;
rg3z[n] = Player.getZ();
setTile(rg3x[n]+2, rg3y[n]+1, rg3z[n]+2, 89);
setTile(rg3x[n]+2, rg3y[n]+1, rg3z[n], 89);
setTile(rg3x[n]+2, rg3y[n]+1, rg3z[n]-2, 89);
setTile(rg3x[n], rg3y[n]+1, rg3z[n]+2, 89);
setTile(rg3x[n], rg3y[n]+1, rg3z[n]-2, 89);
setTile(rg3x[n]-2, rg3y[n]+1, rg3z[n]+2, 89);
setTile(rg3x[n]-2, rg3y[n]+1, rg3z[n], 89);
setTile(rg3x[n]-2, rg3y[n]+1, rg3z[n]-2, 89);
rg3[n] = true;
rg3a[n] = 300;
skillCool(ESP.getUser(), 3);
}
if(i==305&&Cool.isFinished(rg4a[n])){
ESP.heal(rgun[n]);
ESP.sbm("Only my Railgun", true);
px = Player.getX();
py = y;
pz = Player.getZ();
yaw = Math.floor(getYaw());
sin = -Math.sin(yaw/180*Math.PI);
cos = Math.cos(yaw/180*Math.PI);
for(var gun=3;gun<60;gun++)
setTile(px+gun*sin, y+2, pz+gun*cos, 89);
rgx[n] = [px-5*sin, px+10*sin, px+30*sin, px+50*sin];
rgy[n] = y;
rgz[n] = [pz-5*cos, pz+10*cos, pz+30*cos, pz+50*cos];
rg4[n] = true;
rg4a[n] = 1800;
skillCool(ESP.getUser(), 4);
}
break;
}}}
if(copy[0]!=null){
for(var n=0;n<copy.length;n++){
if(copy[n]==ESP.getUser()){
if(i==302&&Cool.isFinished(co1a[n])){
for(var xx=x-1;xx<x+2;xx++)
for(var zz=z-1;zz<z+2;zz++)
setTile(xx, y+1, zz, 51);
var p2x, p2y, p2z;
for each(var e in Entity.getAll()){
p2x = Math.abs(x-Entity.getX(e));
p2y = Math.abs(y-Entity.getY(e));
p2z = Math.abs(z-Entity.getZ(e));
if(p2x<=3&&p2y<=3&&p2z<=3&copy[n]!=e&&Entity.getEntityTypeId(e)<64)
Entity.setFireTicks(e, 5);
}
co1[n] = true;
co1a[n] = 150;
skillCool(ESP.getUser(), 1);
}
if(i==303&&Cool.isFinished(co2a[n])){
co2[n] = true;
co2a[n] = 300;
skillCool(ESP.getUser(), 2);
}
if(i==305&&Cool.isFinished(co4a[n])){
ESP.heal(copy[n]);
ESP.sbm("Susanoo", true);
cox[n] = Player.getX();
coy[n] = Player.getY()-2;
coz[n] = Player.getZ();
yaw = Math.floor(getYaw());
sin = -Math.sin(yaw/180*Math.PI);
cos = Math.cos(yaw/180*Math.PI);
for(var xx=cox[n]-1;xx<cox[n]+2;xx++)
for(var yy=coy[n]+1;yy<coy[n]+7;yy++)
for(var zz=coz[n]-1;zz<coz[n]+2;zz++)
setTile(xx, yy, zz, 87);
for(var xx=cox[n]-1;xx<cox[n]+2;xx++)
for(var zz=coz[n]-1;zz<coz[n]+2;zz++)
setTile(xx, coy[n]+7, zz, 51);
setTile(cox[n], coy[n]+1, coz[n], 89);
setTile(cox[n], coy[n]+2, coz[n], 89);
if(Math.abs(sin)>Math.abs(cos)){
setTile(cox[n], coy[n]+7, coz[n]+1, 87);
setTile(cox[n], coy[n]+7, coz[n]-1, 87);
setTile(cox[n], coy[n]+6, coz[n]+2, 87);
setTile(cox[n], coy[n]+6, coz[n]+3, 87);
setTile(cox[n], coy[n]+5, coz[n]+3, 87);
setTile(cox[n], coy[n]+4, coz[n]+3, 87);
setTile(cox[n], coy[n]+3, coz[n]+3, 87);
setTile(cox[n], coy[n]+6, coz[n]-2, 87);
setTile(cox[n], coy[n]+6, coz[n]-3, 87);
setTile(cox[n], coy[n]+6, coz[n]-3, 87);
setTile(cox[n], coy[n]+5, coz[n]-3, 87);
setTile(cox[n], coy[n]+4, coz[n]-3, 87);
setTile(cox[n], coy[n]+3, coz[n]-3, 87);
setTile(cox[n], coy[n]+7, coz[n]+2, 51);
setTile(cox[n], coy[n]+7, coz[n]+3, 51);
setTile(cox[n], coy[n]+7, coz[n]-2, 51);
setTile(cox[n], coy[n]+7, coz[n]-3, 51);
}
if(Math.abs(sin)<Math.abs(cos)){
setTile(cox[n]+1, coy[n]+7, coz[n], 87);
setTile(cox[n]-1, coy[n]+7, coz[n], 87);
setTile(cox[n]+2, coy[n]+6, coz[n], 87);
setTile(cox[n]+3, coy[n]+6, coz[n], 87);
setTile(cox[n]+3, coy[n]+5, coz[n], 87);
setTile(cox[n]+3, coy[n]+4, coz[n], 87);
setTile(cox[n]+3, coy[n]+3, coz[n], 87);
setTile(cox[n]-2, coy[n]+6, coz[n], 87);
setTile(cox[n]-3, coy[n]+6, coz[n], 87);
setTile(cox[n]-3, coy[n]+5, coz[n], 87);
setTile(cox[n]-3, coy[n]+4, coz[n], 87);
setTile(cox[n]-3, coy[n]+3, coz[n], 87);
setTile(cox[n]+2, coy[n]+7, coz[n], 51);
setTile(cox[n]+3, coy[n]+7, coz[n], 51);
setTile(cox[n]-2, coy[n]+7, coz[n], 51);
setTile(cox[n]-3, coy[n]+7, coz[n], 51);
}
setTile(cox[n], coy[n]+7, coz[n], 87);
setTile(cox[n], coy[n]+8, coz[n], 87);
setTile(cox[n], coy[n]+9, coz[n], 51);
co4[n] = true;
co4a[n] = 1800;
skillCool(ESP.getUser(), 4);
}
break;
}}}
if(dragon[0]!=null){
for(var n=0;n<dragon.length;n++){
if(dragon[n]==ESP.getUser()){
if(i==302&&Cool.isFinished(dr1a[n])){
px = Player.getX();
pz = Player.getZ();
yaw = Math.floor(getYaw());
sin = -Math.sin(yaw/180*Math.PI);
cos = Math.cos(yaw/180*Math.PI);
for(var gun=3;gun<20;gun++)
setTile(px+gun*sin, y+1, pz+gun*cos, 51);
dr1[n] = true;
dr1a[n] = 150;
skillCool(ESP.getUser(), 1);
}
if(i==303&&Cool.isFinished(dr2a[n])){
px = Player.getX();
py = y;
pz = Player.getZ();
yaw = Math.floor(getYaw());
sin = -Math.sin(yaw/180*Math.PI);
cos = Math.cos(yaw/180*Math.PI);
for(var gun=3;gun<25;gun++)
setTile(px+gun*sin, y+1, pz+gun*cos, 79);
dr2[n] = true;
dr2a[n] = 300;
skillCool(ESP.getUser(), 2);
}
if(i==304&&Cool.isFinished(dr3a[n])){
px = Player.getX();
pz = Player.getZ();
yaw = Math.floor(getYaw());
sin = -Math.sin(yaw/180*Math.PI);
cos = Math.cos(yaw/180*Math.PI);
for(var gun=2;gun<13;gun++)
explode(px+2*gun*sin, y+1, pz+2*gun*cos, 1.6);
for(var gun=1;gun<28;gun++)
for(var yy=y-2;yy<y+1;yy++)
for(var nn=-3;nn<4;nn++)
if(getTile(px+gun*sin+nn, yy, pz+gun*cos+nn)==0){
setTile(px+gun*sin+nn, yy, pz+gun*cos+nn, 51);
}
dr3[n] = true;
dr3a[n] = 300;
skillCool(ESP.getUser(), 3);
}
if(i==305&&Cool.isFinished(dr4a[n])){
ESP.heal(dragon[n]);
ESP.sbm("Dark Fog", true);
drx[n] = Player.getX();
dry[n] = Player.getY()-2;
drz[n] = Player.getZ();
for(var xx=drx[n]-2;xx<drx[n]+3;xx++)
for(var zz=drz[n]-2;zz<drz[n]+3;zz++)
setTile(xx, dry[n]+9, zz, 35, 10);
dr4[n] = true;
dr4a[n] = 1800;
skillCool(ESP.getUser(), 4);
}
break;
}}}
if(hawk[0]!=null){
for(var n=0;n<hawk.length;n++){
if(hawk[n]==ESP.getUser()){
if(i==302&&Cool.isFinished(hw1a[n])){
for(var xx=x-1;xx<x+2;xx++)
for(var zz=z-1;zz<z+2;zz++)
setTile(xx, y, zz, 9);
var p2x, p2y, p2z;
for each(var e in Entity.getAll()){
p2x = Math.abs(x-Entity.getX(e));
p2y = Math.abs(y-Entity.getY(e));
p2z = Math.abs(z-Entity.getZ(e));
if(p2x<=5&&p2y<=5&&p2z<=5&&hawk[n]!=e&&Entity.getEntityTypeId(e)<64)
Entity.setHealth(e, Entity.getHealth(e)-5);
}
hw1x[n] = x;
hw1y[n] = y;
hw1z[n] = z;
hw1[n] = true;
hw1a[n] = 150;
skillCool(ESP.getUser(), 1);
}
if(i==303&&Cool.isFinished(hw2a[n])){
hw2[n] = true;
hw2a[n] = 300;
skillCool(ESP.getUser(), 2);
}
if(i==304&&Cool.isFinished(hw3a[n])){
if(getIndex(co3b, hawk[n])!=-1&&co3a[getIndex(co3b, hawk[n])]>150){
teleport(hawk[n], co3x[n], co3y[n]+1, co3z[n]);
co3b[n] = null;
}
else{
teleport(hawk[n], x+(x-Player.getX()), y+3, z+(z-Player.getZ()));
}
hw3[n] = true;
hw3a[n] = 300;
skillCool(ESP.getUser(), 3);
}
if(i==305&&Cool.isFinished(hw4a[n])){
ESP.heal(hawk[n]);
ESP.sbm("Darot", true);
hwx[n] = Player.getX();
hwy[n] = Player.getY()-2;
hwz[n] = Player.getZ();
yaw = Math.floor(getYaw());
sin = -Math.sin(yaw/180*Math.PI);
cos = Math.cos(yaw/180*Math.PI);
for(var xx=hwx[n]-1;xx<hwx[n]+2;xx++)
for(var yy=hwy[n]+1;yy<hwy[n]+7;yy++)
for(var zz=hwz[n]-1;zz<hwz[n]+2;zz++)
setTile(xx, yy, zz, 22);
setTile(hwx[n], hwy[n]+1, hwz[n], 89);
setTile(hwx[n], hwy[n]+2, hwz[n], 89);
if(Math.abs(sin)>Math.abs(cos)){
setTile(hwx[n], hwy[n]+7, hwz[n]+1, 22);
setTile(hwx[n], hwy[n]+7, hwz[n]-1, 22);
setTile(hwx[n], hwy[n]+6, hwz[n]+2, 22);
setTile(hwx[n], hwy[n]+6, hwz[n]+3, 22);
setTile(hwx[n], hwy[n]+5, hwz[n]+3, 22);
setTile(hwx[n], hwy[n]+4, hwz[n]+3, 22);
setTile(hwx[n], hwy[n]+3, hwz[n]+3, 22);
setTile(hwx[n], hwy[n]+6, hwz[n]-2, 22);
setTile(hwx[n], hwy[n]+6, hwz[n]-3, 22);
setTile(hwx[n], hwy[n]+6, hwz[n]-3, 22);
setTile(hwx[n], hwy[n]+5, hwz[n]-3, 22);
setTile(hwx[n], hwy[n]+4, hwz[n]-3, 22);
setTile(hwx[n], hwy[n]+3, hwz[n]-3, 22);
setTile(hwx[n], hwy[n]+7, hwz[n]+3, 8);
setTile(hwx[n], hwy[n]+7, hwz[n]-3, 8);
}
if(Math.abs(sin)<Math.abs(cos)){
setTile(hwx[n]+1, hwy[n]+7, hwz[n], 22);
setTile(hwx[n]-1, hwy[n]+7, hwz[n], 22);
setTile(hwx[n]+2, hwy[n]+6, hwz[n], 22);
setTile(hwx[n]+3, hwy[n]+6, hwz[n], 22);
setTile(hwx[n]+3, hwy[n]+5, hwz[n], 22);
setTile(hwx[n]+3, hwy[n]+4, hwz[n], 22);
setTile(hwx[n]+3, hwy[n]+3, hwz[n], 22);
setTile(hwx[n]-2, hwy[n]+6, hwz[n], 22);
setTile(hwx[n]-3, hwy[n]+6, hwz[n], 22);
setTile(hwx[n]-3, hwy[n]+5, hwz[n], 22);
setTile(hwx[n]-3, hwy[n]+4, hwz[n], 22);
setTile(hwx[n]-3, hwy[n]+3, hwz[n], 22);
setTile(hwx[n]+3, hwy[n]+7, hwz[n], 8);
setTile(hwx[n]-3, hwy[n]+7, hwz[n], 8);
}
setTile(hwx[n], hwy[n]+7, hwz[n], 22);
setTile(hwx[n], hwy[n]+8, hwz[n], 89);
hw4[n] = true;
hw4a[n] = 1800;
skillCool(ESP.getUser(), 4);
}
break;
}}}
if(solid[0]!=null){
for(var n=0;n<solid.length;n++){
if(solid[n]==ESP.getUser()){
if(i==302&&Cool.isFinished(sd1a[n])){
sdxa = Math.abs(x-Player.getX());
sdza = Math.abs(z-Player.getZ());
if(sdxa>sdza){
for(var yy=y+1;yy<y+5;yy++)
for(var zz=z-2;zz<z+3;zz++)
setTile(x, yy, zz, 1);
}
else if(sdxa<sdza){
for(var xx=x-2;xx<x+3;xx++)
for(var yy=y+1;yy<y+5;yy++)
setTile(xx, yy, z, 1);
}
sd1[n] = true;
sd1a[n] = 150;
skillCool(ESP.getUser(), 1);
}
if(i==303&&Cool.isFinished(sd2a[n])){
for(var xx=x-4;xx<x+5;xx++){
for(var yy=y-1;yy<y+5;yy++){
for(var zz=z-4;zz<z+5;zz++){
if(getTile(xx, yy, zz)==8||getTile(xx, yy, zz)==9) setTile(xx, yy, zz, 79);
else if(getTile(xx, yy, zz)==10||getTile(xx, yy, zz)==11) setTile(xx, yy, zz, 49);

}}}
var p2x, p2y, p2z;
for each(var e in Entity.getAll()){
p2x = Math.abs(x-Entity.getX(e));
p2y = Math.abs(y-Entity.getY(e));
p2z = Math.abs(z-Entity.getZ(e));
if(p2x<=6&&p2y<=6&&p2z<=6&&solid[n]!=e&&Entity.getEntityTypeId(e)<64)
Entity.setHealth(e, Entity.getHealth(e)-5);
}
sd2[n] = true;
sd2a[n] = 300;
skillCool(ESP.getUser(), 2);
}
if(i==304&&Cool.isFinished(sd3a[n])){
for(var xx=x-4;xx<x+5;xx++)
for(var yy=y-1;yy<y+5;yy++)
for(var zz=z-4;zz<z+5;zz++)
if(getTile(xx, yy, zz)!=0&&getTile(xx, yy, zz)!=7){
setTile(xx, yy, zz, 1);
}
var p2x, p2y, p2z;
for each(var e in Entity.getAll()){
p2x = Math.abs(x-Entity.getX(e));
p2y = Math.abs(y-Entity.getY(e));
p2z = Math.abs(z-Entity.getZ(e));
if(p2x<=6&&p2y<=6&&p2z<=6&&solid[n]!=e&&Entity.getEntityTypeId(e)<64)
Entity.setHealth(e, Entity.getHealth(e)-5);
}
sd3[n] = true;
sd3a[n] = 300;
skillCool(ESP.getUser(), 3);
}
if(i==305&&Cool.isFinished(sd4a[n])){
ESP.heal(solid[n]);
ESP.sbm("Remote Solidify", true);
var p2x, p2y, p2z;
for each(var e in Entity.getAll()){
p2x = Math.abs(Player.getX()-Entity.getX(e));
p2y = Math.abs(Player.getY()-Entity.getY(e));
p2z = Math.abs(Player.getZ()-Entity.getZ(e));
if(p2x<=25&&p2y<=25&&p2z<=25&&solid[n]!=e&&Entity.getEntityTypeId(e)<64){
sd4x[n] = Entity.getX(e);
if(ESP.isPlayer(e)){
sd4y[n] = Entity.getY(e)-2;
}
else{
sd4y[n] = Entity.getY(e)-1;
}
sd4z[n] = Entity.getZ(e);
sdx[n] = [];
sdy[n] = [];
sdz[n] = [];
for(var xx=sd4x[n]-1;xx<sd4x[n]+2;xx++)
for(var yy=sd4y[n]+1;yy<sd4y[n]+4;yy++)
for(var zz=sd4z[n]-1;zz<sd4z[n]+2;zz++)
setTile(xx, yy, zz, 1);
sdx[n].push(sd4x[n]);
sdy[n].push(sd4y[n]);
sdz[n].push(sd4z[n]);
}
}
sd4[n] = true;
sd4a[n] = 1800;
skillCool(ESP.getUser(), 4);
}
break;
}}}
if(gravity[0]!=null){
for(var n=0;n<gravity.length;n++){
if(gravity[n]==ESP.getUser()){
if(i==302&&Cool.isFinished(gr1a[n])){
if(b==7||b==95){
ESP.antiLack(5);
explode(x, y+1, z, 3);
}
else{
setTile(x, y, z, 0);
setTile(x, y+1, z, b);
}
gr1x[n] = x;
gr1y[n] = y;
gr1z[n] = z;
gr1b[n] = b;
gr1c[n] = bd;
gr1[n] = true;
gr1a[n] = 150;
skillCool(ESP.getUser(), 1);
}
if(i==304&&Cool.isFinished(gr3a[n])){
var p2x, p2y, p2z;
for each(var e in Entity.getAll()){
p2x = Math.abs(Player.getX()-Entity.getX(e));
p2y = Math.abs(Player.getY()-Entity.getY(e));
p2z = Math.abs(Player.getZ()-Entity.getZ(e));
if(p2x<=15&&p2y<=15&&p2z<=15&&gravity[n]!=e&&Entity.getEntityTypeId(e)<64){
teleport(e, Entity.getX(e), Entity.getY(e)+9, Entity.getZ(e));
explode(Entity.getX(e), Entity.getY(e)+0.5, Entity.getZ(e), 1);
}
}
gr3[n] = true;
gr3a[n] = 300;
skillCool(ESP.getUser(), 3);
}
if(i==305&&Cool.isFinished(gr4a[n])){
ESP.heal(gravity[n]);
ESP.sbm("Gratity Warp", true);
grx[n] = Player.getX();
gry[n] = Player.getY()-2;
grz[n] = Player.getZ();
setTile(grx[n]+7, gry[n]+1, grz[n]+7, 2);
setTile(grx[n]+7, gry[n]+1, grz[n], 2);
setTile(grx[n]+7, gry[n]+1, grz[n]-7, 2);
setTile(grx[n], gry[n]+1, grz[n]+7, 2);
setTile(grx[n], gry[n]+1, grz[n]-7, 2);
setTile(grx[n]-7, gry[n]+1, grz[n]+7, 2);
setTile(grx[n]-7, gry[n]+1, grz[n], 2);
setTile(grx[n]-7, gry[n]+1, grz[n]-7, 2);
gr4[n] = true;
gr4a[n] = 1800;
skillCool(ESP.getUser(), 4);
}
break;
}}}
if(hass[0]!=null){
for(var n=0;n<has.length;n++){
if(hass[n]==ESP.getUser()){
if(i==302&&Cool.isFinished(hass1a[n])){
teleport(ESP.getUser(), x+2*(x-Player.getX()), y+3, z+2*(z-Player.getZ()));
ESP.antiLack(5);
explode(x, y+1.5, z, 2.5);
hass1[n] = true;
hass1a[n] = 150;
skillCool(ESP.getUser(), 1);
}
if(i==303&&Cool.isFinished(hass2a[n])){
if(Cool.isFalse(hass2b[n])){
hass2x[n] = x;
hass2y[n] = y;
hass2z[n] = z;
if(b==2) setTile(x, y, z, 3);
hass2b[n] = true;
}
else if(hass2b[n]){
arroundMobHealthDown(hass[n], 10, 5);
teleport(ESP.getUser(), hass2x[n], hass2y[n]+3, hass2z[n]);
hass2b[n] = false;
hass2[n] = true;
hass2a[n] = 300;
}
skillCool(ESP.getUser(), 2);
}
if(i==304&&Cool.isFinished(hass3a[n])){
explode(Entity.getX(hass3b[n]), Entity.getY(hass3b[n])+0.5, Entity.getZ(hass3b[n]), 1);
hass3[n] = true;
hass3a[n] = 300;
skillCool(ESP.getUser(), 3);
}
if(i==305&&Cool.isFinished(hass4a[n])){
ESP.heal(hass[n]);
ESP.sbm("Hyper Assassination", true);
var p2x, p2y, p2z;
hass4b[n] = [];
for each(var e in Entity.getAll()){
p2x = Math.abs(Player.getX()-Entity.getX(e));
p2y = Math.abs(Player.getY()-Entity.getY(e));
p2z = Math.abs(Player.getZ()-Entity.getZ(e));
if(p2x<=25&&p2y<=25&&p2z<=25&&hass!=e&&Entity.getEntityTypeId(e)<64){
Entity.setHealth(e, Entity.getHealth(e)-10);
hass4b[n].push(e);
}
}
hass4[n] = true;
hass4a[n] = 1800;
skillCool(ESP.getUser(), 4);
}
break;
}}}
if(sikill[0]!=null){
for(var n=0;n<sikill.length;n++){
if(sikill[n]==ESP.getUser()){
if(i==302&&Cool.isFinished(sk1a[n])){
teleport(ESP.getUser(), x+(x-Player.getX()), y+3, z+(z-Player.getZ()));
sk1[n] = true;
sk1a[n] = 150;
skillCool(ESP.getUser(), 1);
}
if(i==304&&Cool.isFinished(sk3a[n])){
px = Player.getX();
pz = Player.getZ();
yaw = Math.floor(getYaw()+90);
sin = -Math.sin(yaw/180*Math.PI);
cos = Math.cos(yaw/180*Math.PI);
ESP.antiLack(5);
explode(px+5*sin, y+1, pz+5*cos, 3);
explode(px-5*sin, y+1, pz-5*cos, 3);
sk3[n] = true;
sk3a[n] = 300;
skillCool(ESP.getUser(), 3);
}
if(i==305&&Cool.isFinished(sk4a[n])){
ESP.heal(sikill[n]);
ESP.sbm("Surround Assault", true);
arroundMobHealthDown(sikill[n], 30, 15);
sk4[n] = true;
sk4a[n] = 1800;
skillCool(ESP.getUser(), 4);
}
break;
}}}
if(black[0]!=null){
for(var n=0;n<black.length;n++){
if(black[n]==ESP.getUser()){
if(i==302&&Cool.isFinished(bl1a[n])){
px = Player.getX();
py = y+2;
pz = Player.getZ();
yaw = Math.floor(getYaw());
sin = -Math.sin(yaw/180*Math.PI);
cos = Math.cos(yaw/180*Math.PI);
for(var yy=py+1;yy<py+7;yy++)
setTile(px, yy, pz, 49);
setTile(px, py+7, pz, 49);
bl1[n] = true;
bl1a[n] = 150;
skillCool(ESP.getUser(), 1);
}
if(i==303&&Cool.isFinished(bl2a[n])){
px = Player.getX();
py = y;
pz = Player.getZ();
yaw = Math.floor(getYaw());
sin = -Math.sin(yaw/180*Math.PI);
cos = Math.cos(yaw/180*Math.PI);
for(var gun=3;gun<25;gun++)
setTile(px+gun*sin, y+2, pz+gun*cos, 49);
bl2[n] = true;
bl2a[n] = 300;
skillCool(ESP.getUser(), 2);
}
if(i==304&&Cool.isFinished(bl3a[n])){
px = Player.getX();
py = y;
pz = Player.getZ();
yaw = Math.floor(getYaw()+90);
sin = -Math.sin(yaw/180*Math.PI);
cos = Math.cos(yaw/180*Math.PI);
for(var gun=3;gun<12;gun++){
setTile(px+gun*sin, y+2, pz+gun*cos, 49);
setTile(px-gun*sin, y+2, pz-gun*cos, 49);
}
bl3[n] = true;
bl3a[n] = 300;
skillCool(ESP.getUser(), 3);
}
if(i==305&&Cool.isFinished(bl4a[n])){
ESP.heal(black[n]);
ESP.sbm("Darkness Releasing", true);
blx[n] = Player.getX();
bly[n] = Player.getY()-2;
blz[n] = Player.getZ();
for(var bl4b=3;bl4b<17;bl4b++){
setTile(blx[n]+bl4b, bly[n]+2, blz[n]+bl4b, 49);
setTile(blx[n]+bl4b, bly[n]+2, blz[n], 49);
setTile(blx[n]+bl4b, bly[n]+2, blz[n]-bl4b, 49);
setTile(blx[n], bly[n]+2, blz[n]+bl4b, 49);
setTile(blx[n], bly[n]+2, blz[n]-bl4b, 49);
setTile(blx[n]-bl4b, bly[n]+2, blz[n]+bl4b, 49);
setTile(blx[n]-bl4b, bly[n]+2, blz[n], 49);
setTile(blx[n]-bl4b, bly[n]+2, blz[n]-bl4b, 49);
}
bl4[n] = true;
bl4a[n] = 1800;
skillCool(ESP.getUser(), 4);
}
break;
}}}
if(slash[0]!=null){
for(var n=0;n<slash.length;n++){
if(slash[n]==ESP.getUser()){
if(i==302&&Cool.isFinished(sl1a[n])){
ESP.antiLack(5);
explode(x+(x-Player.getX()), y+1, z+(z-Player.getZ()), 3);
sl1[n] = true;
sl1a[n] = 150;
skillCool(ESP.getUser(), 1);
}
if(i==305&&Cool.isFinished(sl4a[n])){
ESP.heal(slash[n]);
ESP.sbm("Surround Slash", true);
slx[n] = Player.getX();
sly[n] = Player.getY()-2;
slz[n] = Player.getZ();
ESP.antiLack(5);
explode(slx[n]+8, sly[n]+1, slz[n], 3);
explode(slx[n]-8, sly[n]+1, slz[n], 3);
explode(slx[n], sly[n]+1, slz[n]+8, 3);
explode(slx[n], sly[n]+1, slz[n]-8, 3);
sl4[n] = true;
sl4a[n] = 1800;
skillCool(ESP.getUser(), 4);
}
break;
}}}
if(night[0]!=null){
for(var n=0;n<night.length;n++){
if(night[n]==ESP.getUser()){
if(i==302&&Cool.isFinished(ni1a[n])){
teleport(ESP.getUser(), x+(x-Player.getX()), y+3, z+(z-Player.getZ()));
var p2x, p2y, p2z;
for each(var e in Entity.getAll()){
p2x = Math.abs(x-Entity.getX(e));
p2y = Math.abs((y+1)-Entity.getY(e));
p2z = Math.abs(z-Entity.getZ(e));
if(p2x<=5&&p2y<=5&&p2z<=5&&ESP.getUser()!=e&&Entity.getEntityTypeId(e)<64)
Entity.setHealth(e, Entity.getHealth(e)-6);
}
ni1[n] = true;
ni1a[n] = 150;
skillCool(ESP.getUser(), 1);
}
if(i==303&&Cool.isFinished(ni2a[n])){
px = Player.getX();
py = y;
pz = Player.getZ();
yaw = Math.floor(getYaw());
sin = -Math.sin(yaw/180*Math.PI);
cos = Math.cos(yaw/180*Math.PI);
teleport(ESP.getUser(), px+8*sin, y+3, pz+3*cos);
setTile(px, y+1, pz, 49);
ni2[n] = true;
ni2a[n] = 300;
skillCool(ESP.getUser(), 2);
}
if(i==305&&Cool.isFinished(ni4a[n])){
ESP.heal(night[n]);
ESP.sbm("The Night", true);
Level.setTime(14000);
ni4[n] = true;
ni4a[n] = 1800;
skillCool(ESP.getUser(), 4);
}
break;
}}}
if(gem[0]!=null){
for(var n=0;n<gem.length;n++){
if(gem[n]==ESP.getUser()){
if(i==302&&Cool.isFinished(ge1a[n])){
Entity.setHealth(gem[n], Entity.getHealth(gem[n])+6);
ge1[n] = true;
ge1a[n] = 150;
skillCool(ESP.getUser(), 1);
}
if(i==303&&Cool.isFinished(ge2a[n])){
px = Player.getX();
pz = Player.getZ();
yaw = Math.floor(getYaw()+90);
sin = -Math.sin(yaw/180*Math.PI);
cos = Math.cos(yaw/180*Math.PI);
for(var gun=3;gun<12;gun++){
setTile(px+gun*sin, y+2, pz+gun*cos, 155);
setTile(px-gun*sin, y+2, pz-gun*cos, 155);
}
new Thread({
run : function(){
Thread.sleep(150);
ESP.antiLack(5);
for(var gun=3;gun<12;gun++){
setTile(px+gun*sin, y+2, pz+gun*cos, 0);
explode(px+gun*sin, y+2, pz+gun*cos, 1.4);
setTile(px-gun*sin, y+2, pz-gun*cos, 0);
explode(px-gun*sin, y+2, pz-gun*cos, 1.5);
}
}
}).start();
ge2[n] = true;
ge2a[n] = 300;
skillCool(ESP.getUser(), 2);
}
if(i==304&&Cool.isFinished(ge3a[n])){
setTile(x+1, y, z+1, 155);
setTile(x+1, y, z, 155);
setTile(x+1, y, z-1, 155);
setTile(x, y, z+1, 155);
setTile(x, y, z, 155)
setTile(x, y, z-1, 155);
setTile(x-1, y, z+1, 155);
setTile(x-1, y, z, 155);
setTile(x-1, y, z-1, 155);
setTile(x+2, y+2, z+1, 155);
setTile(x+2, y+2, z, 155);
setTile(x+2, y+2, z-1, 155);
setTile(x-2, y+2, z+1, 155);
setTile(x-2, y+2, z, 155);
setTile(x-2, y+2, z-1, 155);
setTile(x+1, y+2, z+2, 155);
setTile(x, y+2, z+2, 155);
setTile(x-1, y+2, z+2, 155);
setTile(x+1, y+2, z-2, 155);
setTile(x, y+2, z-2, 155);
setTile(x-1, y+2, z-2, 155);
setTile(x, y+1, z, 51);
setTile(x, y+2, z, 30);
ge3[n] = true;
ge3a[n] = 300;
skillCool(ESP.getUser(), 3);
}
if(i==305&&Cool.isFinished(ge4a[n])){
ESP.setHealth(gem[n], Entity.getHealth(gem[n])+20);
ESP.sbm("The Day", true);
Level.setTime(700);
arroundMobHealthDown(gem[n], 30, 17);
ge4[n] = true;
ge4a[n] = 1800;
skillCool(ESP.getUser(), 4);
}
break;
}}}
if(dra[0]!=null){
for(var n=0;n<dra.length;n++){
if(dra[n]==ESP.getUser()){
if(i==303&&Cool.isFinished(dc2a[n])){
arroundMobHealthDown(dra[n], 10, 7);
Entity.setHealth(dra[n], Entity.getHealth(dra[n])+7);
dc2[n] = true;
dc2a[n] = 300;
skillCool(ESP.getUser(), 2);
}
if(i==304&&Cool.isFinished(dc3a[n])){
teleport(ESP.getUser(), x+(x-Player.getX()), y+3, z+(z-Player.getZ()));
Entity.setHealth(dra[n], Entity.getHealth(dra[n])+1);
dc3[n] = true;
dc3a[n] = 300;
skillCool(ESP.getUser(), 3);
}
if(i==305&&Cool.isFinished(dc4a[n])){
if(Cool.isFalse(dc4b[n])){
ESP.sbm("Hyper Nightmare", true);
Entity.setHealth(dra[n], Entity.getHealth(dra[n])+15);
Level.setTime(14000);
dc4b[n] = true;
}
else if(dc4b[n]){
arroundMobHealthDown(dra[n], 30, 15);
Entity.setHealth(dra[n], Entity.getHealth(dra[n])+5);
Level.setTime(700);
dc4b[n] = false;
dc4[n] = true;
dc4a[n] = 1800;
skillCool(ESP.getUser(), 4);
}
}
break;
}}}
if(mush[0]!=null){
for(var n=0;n<mush.length;n++){
if(mush[n]==ESP.getUser()){
if(i==302&&Cool.isFinished(mu1a[n])){
setTile(x+1, y+1, z, 39);
setTile(x-1, y+1, z, 39);
setTile(x, y+1, z+1, 40);
setTile(x, y+1, z-1, 40);
var p2x, p2y, p2z;
for each(var e in Entity.getAll()){
p2x = Math.abs(x-Entity.getX(e));
p2y = Math.abs((y+1)-Entity.getY(e));
p2z = Math.abs(z-Entity.getZ(e));
if(p2x<=3&&p2y<=3&&p2z<=3&&mush[n]!=e&&Entity.getEntityTypeId(e)<64)
Entity.setHealth(e, Entity.getHealth(e)-3);
}
mu1[n] = true;
mu1a[n] = 150;
skillCool(ESP.getUser(), 1);
}
if(i==303&&Cool.isFinished(mu2a[n])){
for(var yy=y+1;yy<y+6;yy++)
setTile(x, yy, z, 99, 10);
for(var xx=x-2;xx<x+3;xx++)
for(var zz=z-2;zz<z+3;zz++)
setTile(xx, y+6, zz, 99, 5);
setTile(x-3, y+6, z-2, 99, 1);
setTile(x-3, y+6, z-1, 99, 4);
setTile(x-3, y+6, z, 99, 4);
setTile(x-3, y+6, z+1, 99, 4);
setTile(x-3, y+6, z+2, 99, 7);
setTile(x-2, y+6, z-3, 99, 1);
setTile(x-2, y+6, z+3, 99, 7);
setTile(x-1, y+6, z-3, 99, 2);
setTile(x-1, y+6, z+3, 99, 8);
setTile(x, y+6, z-3, 99, 2);
setTile(x, y+6, z+3, 99, 8);
setTile(x+1, y+6, z-3, 99, 2);
setTile(x+1, y+6, z+3, 99, 8);
setTile(x+2, y+6, z-3, 99, 3);
setTile(x+2, y+6, z+3, 99, 9);
setTile(x+3, y+6, z-2, 99, 3);
setTile(x+3, y+6, z-1, 99, 6);
setTile(x+3, y+6, z, 99, 6);
setTile(x+3, y+6, z+1, 99, 6);
setTile(x+3, y+6, z+2, 99, 9);
mu2[n] = true;
mu2a[n] = 300;
skillCool(ESP.getUser(), 2);
}
if(i==304&&Cool.isFinished(mu3a[n])){
for(var yy=y+1;yy<y+6;yy++)
setTile(x, yy, z, 100, 10);
setTile(x-2, y+3, z-1, 100, 1);
setTile(x-2, y+3, z, 100, 4);
setTile(x-2, y+3, z+1, 100, 7);
setTile(x-2, y+4, z-1, 100, 1);
setTile(x-2, y+4, z, 100, 4);
setTile(x-2, y+4, z+1, 100, 7);
setTile(x-2, y+5, z-1, 100, 1);
setTile(x-2, y+5, z, 100, 4);
setTile(x-2, y+5, z+1, 100, 7);
setTile(x-1, y+3, z-2, 100, 1);
setTile(x-1, y+3, z+2, 100, 7);
setTile(x-1, y+4, z-2, 100, 1);
setTile(x-1, y+4, z+2, 100, 7);
setTile(x-1, y+5, z-2, 100, 1);
setTile(x-1, y+5, z+2, 100, 7);
setTile(x-1, y+6, z-1, 100, 1);
setTile(x-1, y+6, z, 100, 4);
setTile(x-1, y+6, z+1, 100, 7);
setTile(x, y+3, z-2, 100, 2);
setTile(x, y+3, z+2, 100, 8);
setTile(x, y+4, z-2, 100, 2);
setTile(x, y+4, z+2, 100, 8);
setTile(x, y+5, z-2, 100, 2);
setTile(x, y+5, z+2, 100, 8);
setTile(x, y+6, z-1, 100, 2);
setTile(x, y+6, z, 100, 5);
setTile(x, y+6, z+1, 100, 8);
setTile(x+1, y+3, z-2, 100, 3);
setTile(x+1, y+3, z+2, 100, 9);
setTile(x+1, y+4, z-2, 100, 3);
setTile(x+1, y+4, z+2, 100, 9);
setTile(x+1, y+5, z-2, 100, 3);
setTile(x+1, y+5, z+2, 100, 9);
setTile(x+1, y+6, z-1, 100, 3);
setTile(x+1, y+6, z, 100, 6);
setTile(x+1, y+6, z+1, 100, 9);
setTile(x+2, y+3, z-1, 100, 3);
setTile(x+2, y+3, z, 100, 6);
setTile(x+2, y+3, z+1, 100, 9);
setTile(x+2, y+4, z-1, 100, 3);
setTile(x+2, y+4, z, 100, 6);
setTile(x+2, y+4, z+1, 100, 9);
setTile(x+2, y+5, z-1, 100, 3);
setTile(x+2, y+5, z, 100, 6);
setTile(x+2, y+5, z+1, 100, 9);
mu3[n] = true;
mu3a[n] = 300;
skillCool(ESP.getUser(), 3);
}
if(i==305&&Cool.isFinished(mu4a[n])){
ESP.heal(mush[n]);
ESP.sbm("Mushroom Island", true);
for(var xx=x-9;xx<x+10;xx++)
for(var zz=z-9;zz<z+10;zz++)
setTile(xx, y, zz, 110);
setTile(x-7, y+1, z-6, 39);
setTile(x-7, y+2, z-1, 100, 1);
setTile(x-7, y+2, z, 100, 4);
setTile(x-7, y+2, z+1, 100, 7);
setTile(x-7, y+3, z-1, 100, 1);
setTile(x-7, y+3, z, 100, 4);
setTile(x-7, y+3, z+1, 100, 7);
setTile(x-7, y+4, z-1, 100, 1);
setTile(x-7, y+4, z, 100, 4);
setTile(x-7, y+4, z+1, 100, 7);
setTile(x-6, y, z+4, 9);
setTile(x-6, y+1, z+6, 40);
setTile(x-6, y+2, z-2, 100, 1);
setTile(x-6, y+2, z+2, 100, 7);
setTile(x-6, y+3, z-2, 100, 1);
setTile(x-6, y+3, z+2, 100, 7);
setTile(x-6, y+4, z-2, 100, 1);
setTile(x-6, y+4, z+2, 100, 7);
setTile(x-6, y+5, z-1, 100, 1);
setTile(x-6, y+5, z, 100, 4);
setTile(x-6, y+5, z+1, 100, 7);
setTile(x-5, y, z, 3);
for(var zz=z+3;zz<z+7;zz++)
setTile(x-5, y, zz, 9);
setTile(x-5, y+1, z-7, 40);
setTile(x-5, y+1, z-6, 39);
setTile(x-5, y+1, z-4, 39);
setTile(x-5, y+1, z, 100, 10);
setTile(x-5, y+1, z+1, 40);
setTile(x-5, y+2, z-2, 100, 2);
setTile(x-5, y+2, z, 100, 10);
setTile(x-5, y+2, z+2, 100, 8);
setTile(x-5, y+3, z-2, 100, 2);
setTile(x-5, y+3, z, 100, 10);
setTile(x-5, y+3, z+2, 100, 8);
setTile(x-5, y+4, z-2, 100, 2);
setTile(x-5, y+4, z, 100, 10);
setTile(x-5, y+4, z+2, 100, 8);
setTile(x-5, y+5, z-1, 100, 2);
setTile(x-5, y+5, z, 100, 5);
setTile(x-5, y+5, z+1, 100, 8);
for(var zz=z+2;zz<z+7;zz++)
setTile(x-4, y, zz, 9);
setTile(x-4, y+2, z-2, 100, 3);
setTile(x-4, y+2, z+2, 100, 9);
setTile(x-4, y+3, z-2, 100, 3);
setTile(x-4, y+3, z+2, 100, 9);
setTile(x-4, y+4, z-2, 100, 3);
setTile(x-4, y+4, z+2, 100, 9);
setTile(x-4, y+5, z-1, 100, 3);
setTile(x-4, y+5, z, 100, 6);
setTile(x-4, y+5, z+1, 100, 9);
setTile(x-3, y, z+4, 9);
setTile(x-3, y, z+5, 9);
setTile(x-3, y+1, z-4, 39);
setTile(x-3, y+2, z-1, 100, 3);
setTile(x-3, y+2, z, 100, 6);
setTile(x-3, y+2, z+1, 100, 9);
setTile(x-3, y+3, z-1, 100, 3);
setTile(x-3, y+3, z, 100, 6);
setTile(x-3, y+3, z+1, 100, 9);
setTile(x-3, y+4, z-1, 100, 3);
setTile(x-3, y+4, z, 100, 6);
setTile(x-3, y+4, z+1, 100, 9);
setTile(x-2, y+1, z+5, 40);
setTile(x-2, y+1, z+7, 40);
setTile(x-1, y+1, z+2, 40);
setTile(x-1, y+1, z+4, 40);
setTile(x-1, y+5, z-7, 99, 1);
setTile(x-1, y+5, z-6, 99, 4);
setTile(x-1, y+5, z-5, 99, 4);
setTile(x-1, y+5, z-4, 99, 4);
setTile(x-1, y+5, z-3, 99, 7);
setTile(x-1, y+7, z-1, 99, 1);
setTile(x-1, y+7, z, 99, 4);
setTile(x-1, y+7, z+1, 99, 4);
setTile(x-1, y+7, z+2, 99, 4);
setTile(x-1, y+7, z+3, 99, 7);
setTile(x, y+1, z-6, 39);
setTile(x, y+5, z-8, 99, 1);
for(var zz=z-7;zz<z-2;zz++)
setTile(x, y+5, zz, 99, 5);
setTile(x, y+5, z-2, 99, 7);
setTile(x, y+7, z-2, 99, 1);
setTile(x, y+7, z-1, 99, 5);
setTile(x, y+7, z, 99, 5);
setTile(x, y+7, z+1, 99, 5);
setTile(x, y+7, z+2, 99, 5);
setTile(x, y+7, z+3, 99, 5);
setTile(x, y+7, z+4, 99, 7);
setTile(x+1, y+1, z-4, 40);
setTile(x+1, y+5, z-8, 99, 2);
for(var zz=z-7;zz<z-2;zz++)
setTile(x+1, y+5, zz, 99, 5);
setTile(x+1, y+5, z-2, 99, 8);
setTile(x+1, y+7, z-2, 99, 2);
setTile(x+1, y+7, z-1, 99, 5);
setTile(x+1, y+7, z, 99, 5);
setTile(x+1, y+7, z+1, 99, 5);
setTile(x+1, y+7, z+2, 99, 5);
setTile(x+1, y+7, z+3, 99, 5);
setTile(x+1, y+7, z+4, 99, 8);
setTile(x+2, y, z-5, 3);
setTile(x+2, y, z+1, 3);
setTile(x+2, y+1, z-5, 99, 10);
setTile(x+2, y+1, z-4, 40);
setTile(x+2, y+1, z+1, 99, 10);
setTile(x+2, y+1, z+3, 40);
setTile(x+2, y+2, z-5, 99, 10);
setTile(x+2, y+2, z+1, 99, 10);
setTile(x+2, y+3, z-5, 99, 10);
setTile(x+2, y+3, z+1, 99, 10);
setTile(x+2, y+4, z-5, 99, 10);
setTile(x+2, y+4, z+1, 99, 10);
setTile(x+2, y+5, z-8, 99, 2);
setTile(x+2, y+5, z-7, 99, 5);
setTile(x+2, y+5, z-6, 99, 5);
setTile(x+2, y+5, z-5, 99, 5);
setTile(x+2, y+5, z-4, 99, 5);
setTile(x+2, y+5, z-3, 99, 5);
setTile(x+2, y+5, z-2, 99, 8);
setTile(x+2, y+5, z+1, 99, 10);
setTile(x+2, y+6, z+1, 99, 10);
setTile(x+2, y+7, z-2, 99, 2);
setTile(x+2, y+7, z-1, 99, 5);
setTile(x+2, y+7, z, 99, 5);
setTile(x+2, y+7, z+1, 99, 5);
setTile(x+2, y+7, z+2, 99, 5);
setTile(x+2, y+7, z+3, 99, 5);
setTile(x+2, y+7, z+4, 99, 8);
setTile(x+3, y+1, z-4, 40);
setTile(x+3, y+1, z-3, 40);
setTile(x+3, y+5, z-8, 99, 2);
setTile(x+3, y+5, z-7, 99, 5);
setTile(x+3, y+5, z-6, 99, 5);
setTile(x+3, y+5, z-5, 99, 5);
setTile(x+3, y+5, z-4, 99, 5);
setTile(x+3, y+5, z-3, 99, 5);
setTile(x+3, y+5, z-2, 99, 8);
setTile(x+3, y+7, z-2, 99, 2);
setTile(x+3, y+7, z-1, 99, 5);
setTile(x+3, y+7, z, 99, 5);
setTile(x+3, y+7, z+1, 99, 5);
setTile(x+3, y+7, z+2, 99, 5);
setTile(x+3, y+7, z+3, 99, 5);
setTile(x+3, y+7, z+4, 99, 8);
setTile(x+4, y+1, z+6, 39);
setTile(x+4, y+5, z-8, 99, 3);
setTile(x+4, y+5, z-7, 99, 5);
setTile(x+4, y+5, z-6, 99, 5);
setTile(x+4, y+5, z-5, 99, 5);
setTile(x+4, y+5, z-4, 99, 5);
setTile(x+4, y+5, z-3, 99, 5);
setTile(x+4, y+5, z-2, 99, 9);
setTile(x+4, y+7, z-2, 99, 3);
setTile(x+4, y+7, z-1, 99, 5);
setTile(x+4, y+7, z, 99, 5);
setTile(x+4, y+7, z+1, 99, 5);
setTile(x+4, y+7, z+2, 99, 5);
setTile(x+4, y+7, z+3, 99, 5);
setTile(x+4, y+7, z+4, 99, 9);
setTile(x+5, y+1, z-5, 39);
setTile(x+5, y+1, z+3, 39);
setTile(x+5, y+5, z-7, 99, 3);
setTile(x+5, y+5, z-6, 99, 6);
setTile(x+5, y+5, z-5, 99, 6);
setTile(x+5, y+5, z-4, 99, 6);
setTile(x+5, y+5, z-3, 99, 9);
setTile(x+5, y+7, z-1, 99, 3);
setTile(x+5, y+7, z, 99, 6);
setTile(x+5, y+7, z+1, 99, 6);
setTile(x+5, y+7, z+2, 99, 6);
setTile(x+5, y+7, z+3, 99, 9);
setTile(x+6, y+1, z-2, 39);
setTile(x+7, y+1, z+3, 40);
arroundMobHealthDown(mush[n], 10, 10);
Level.spawnMob(x+6, y+3, z+6, 16);
Level.spawnMob(x+6, y+3, z-6, 16);
Level.spawnMob(x-6, y+3, z+6, 16);
Level.spawnMob(x-6, y+3, z-6, 16);
Level.spawnMob(x, y+3, z, 16);
mux[n] = x;
muy[n] = y;
muz[n] = z;
mu4[n] = true;
mu4a[n] = 1800;
skillCool(ESP.getUser(), 4);
}
break;
}}}
if(ender[0]!=null){
for(var n=0;n<ender.length;n++){
if(ender[n]==ESP.getUser()){
if(i==302&&Cool.isFinished(end1a[n])){
endxa = Math.abs(x-Player.getX());
endza = Math.abs(z-Player.getZ());
if(endxa>endza){
for(var yy=y+1;yy<y+4;yy++)
for(var zz=z-2;zz<z+3;zz++)
setTile(x, yy, zz, 121);
}
else if(endxa<endza){
for(var xx=x-2;xx<x+3;xx++)
for(var yy=y+1;yy<y+4;yy++)
setTile(xx, yy, z, 121);
}
end1[n] = true;
end1a[n] = 150;
skillCool(ESP.getUser(), 1);
}
if(i==303&&Cool.isFinished(end2a[n])){
for(var xx=x-1;xx<x+2;xx++){
for(var yy=y+1;yy<y+4;yy++){
for(var zz=z-1;zz<z+2;zz++){
setTile(xx, yy, z+2, 98);
setTile(xx, yy, z-2, 98);
setTile(x+2, yy, zz, 98);
setTile(x-2, yy, zz, 98);
setTile(xx, y+4, zz, 98);
}}}
Level.spawnMob(x+0.5, y+12, z+0.5, 65);
end2[n] = true;
end2a[n] = 300;
skillCool(ESP.getUser(), 2);
}
if(i==304&&Cool.isFinished(end3a[n])){
for(var n=0;n<5;n++)
Level.spawnMob(x, y+1, z, 38);
end3[n] = true;
end3a[n] = 300;
skillCool(ESP.getUser(), 3);
}
if(i==305&&Cool.isFinished(end4a[n])){
ESP.heal(ender[n]);
ESP.sbm("Ender Summon", true);
for(var xx=x-9;xx<x+10;xx++)
for(var zz=z-9;zz<z+10;zz++)
setTile(xx, y, zz, 121);
setTile(x-9, y+1, z+4, 121);
setTile(x-9, y+1, z+5, 121);
setTile(x-9, y+1, z+6, 121);
setTile(x-9, y+1, z+7, 121);
setTile(x-9, y+1, z+8, 121);
setTile(x-9, y+1, z+9, 121);
setTile(x-9, y+2, z+8, 121);
setTile(x-9, y+2, z+9, 121);
setTile(x-8, y+1, z+4, 121);
setTile(x-8, y+1, z+5, 121);
setTile(x-8, y+1, z+6, 121);
setTile(x-8, y+1, z+7, 121);
setTile(x-8, y+1, z+8, 121);
setTile(x-8, y+1, z+9, 121);
setTile(x-8, y+2, z+8, 121);
setTile(x-8, y+2, z+9, 121);
setTile(x-7, y+1, z+5, 121);
setTile(x-7, y+1, z+6, 121);
setTile(x-7, y+1, z+7, 121);
setTile(x-7, y+1, z+8, 121);
setTile(x-7, y+1, z+9, 121);
setTile(x-7, y+2, z+9, 121);
setTile(x-6, y+1, z+5, 121);
setTile(x-6, y+1, z+6, 121);
setTile(x-6, y+1, z+7, 121);
setTile(x-6, y+1, z+8, 121);
setTile(x-6, y+1, z+9, 121);
setTile(x-5, y+1, z+6, 121);
setTile(x-5, y+1, z+7, 121);
setTile(x-5, y+1, z+8, 121);
setTile(x-5, y+1, z+9, 121);
setTile(x-4, y+1, z+7, 121);
setTile(x-4, y+1, z+8, 121);
setTile(x-4, y+1, z+9, 121);
setTile(x-3, y+1, z+8, 121);
setTile(x-3, y+1, z+9, 121);
setTile(x-2, y+1, z+9, 121);
setTile(x-1, y+1, z+9, 121);
for(var xx=x+2;xx<x+5;xx++)
for(var yy=y+1;yy<y+8;yy++)
for(var zz=z-5;zz<z-2;zz++)
setTile(xx, yy, zz, 49);
setTile(x+3, y+7, z-4, 87);
setTile(x+3, y+8, z-4, 51);
setTile(x+3, y+9, z-4, 102);
arroundMobHealthDown(ender[n], 10, 10);
Level.spawnMob(x+6, y+3, z+6, 38);
Level.spawnMob(x+6, y+3, z-6, 38);
Level.spawnMob(x-6, y+3, z+6, 38);
Level.spawnMob(x-6, y+3, z-6, 38);
Level.spawnMob(x, y+3, z, 38);
endx[n] = x;
endy[n] = y;
endz[n] = z;
end4[n] = true;
end4a[n] = 1800;
skillCool(ESP.getUser(), 4);
}
break;
}}}
if(taiga[0]!=null){
for(var n=0;n<taiga.length;n++){
if(taiga[n]==ESP.getUser()){
if(i==302&&Cool.isFinished(ta1a[n])){
for(var yy=y+1;yy<y+7;yy++)
setTile(x, yy, z, 17, 1);
setTile(x-2, y+3, z-1, 18, 1);
setTile(x-2, y+3, z, 18, 1);
setTile(x-2, y+3, z+1, 18, 1);
setTile(x-2, y+5, z-1, 18, 1);
setTile(x-2, y+5, z, 18, 1);
setTile(x-2, y+5, z+1, 18, 1);
setTile(x-1, y+3, z-2, 18, 1);
setTile(x-1, y+3, z-1, 18, 1);
setTile(x-1, y+3, z, 18, 1);
setTile(x-1, y+3, z+1, 18, 1);
setTile(x-1, y+3, z+2, 18, 1);
setTile(x-1, y+4, z, 18, 1);
setTile(x-1, y+5, z-2, 18, 1);
setTile(x-1, y+5, z-1, 18, 1);
setTile(x-1, y+5, z, 18, 1);
setTile(x-1, y+5, z+1, 18, 1);
setTile(x-1, y+5, z+2, 18, 1);
setTile(x-1, y+6, z, 18, 1);
setTile(x-1, y+8, z, 18, 1);
setTile(x, y+3, z-2, 18, 1);
setTile(x, y+3, z-1, 18, 1);
setTile(x, y+3, z+1, 18, 1);
setTile(x, y+3, z+2, 18, 1);
setTile(x, y+4, z-1, 18, 1);
setTile(x, y+4, z+1, 18, 1);
setTile(x, y+5, z-2, 18, 1);
setTile(x, y+5, z-1, 18, 1);
setTile(x, y+5, z+1, 18, 1);
setTile(x, y+5, z+2, 18, 1);
setTile(x, y+6, z-1, 18, 1);
setTile(x, y+6, z+1, 18, 1);
setTile(x, y+7, z, 18, 1);
setTile(x, y+8, z-1, 18, 1);
setTile(x, y+8, z, 18, 1);
setTile(x, y+8, z+1, 18, 1);
setTile(x+1, y+3, z-2, 18, 1);
setTile(x+1, y+3, z-1, 18, 1);
setTile(x+1, y+3, z, 18, 1);
setTile(x+1, y+3, z+1, 18, 1);
setTile(x+1, y+3, z+2, 18, 1);
setTile(x+1, y+4, z, 18, 1);
setTile(x+1, y+5, z-2, 18, 1);
setTile(x+1, y+5, z-1, 18, 1);
setTile(x+1, y+5, z, 18, 1);
setTile(x+1, y+5, z+1, 18, 1);
setTile(x+1, y+5, z+2, 18, 1);
setTile(x+1, y+6, z, 18, 1);
setTile(x+1, y+8, z, 18, 1);
setTile(x+2, y+3, z-1, 18, 1);
setTile(x+2, y+3, z, 18, 1);
setTile(x+2, y+3, z+1, 18, 1);
setTile(x+2, y+5, z-1, 18, 1);
setTile(x+2, y+5, z, 18, 1);
setTile(x+2, y+5, z+1, 18, 1);
ta1[n] = true;
ta1a[n] = 150;
skillCool(ESP.getUser(), 1);
}
if(i==303&&Cool.isFinished(ta2a[n])){
for(var xx=x-1;xx<x+1;xx++)
for(var yy=y+1;yy<y+17;yy++)
for(var zz=z;zz<z+2;zz++)
setTile(xx, yy, zz, 17, 1);
setTile(x-4, y+5, z, 18, 1);
setTile(x-4, y+5, z+1, 18, 1);
setTile(x-4, y+6, z, 18, 1);
setTile(x-4, y+6, z+1, 18, 1);
setTile(x-4, y+9, z, 18, 1);
setTile(x-4, y+9, z+1, 18, 1);
setTile(x-3, y+5, z-2, 18, 1);
setTile(x-3, y+5, z-1, 18, 1);
setTile(x-3, y+5, z, 18, 1);
setTile(x-3, y+5, z+1, 18, 1);
setTile(x-3, y+5, z+2, 18, 1);
setTile(x-3, y+5, z+3, 18, 1);
setTile(x-3, y+6, z-2, 18, 1);
setTile(x-3, y+6, z-1, 18, 1);
setTile(x-3, y+6, z, 18, 1);
setTile(x-3, y+6, z+1, 18, 1);
setTile(x-3, y+6, z+2, 18, 1);
setTile(x-3, y+6, z+3, 18, 1);
setTile(x-3, y+7, z, 18, 1);
setTile(x-3, y+7, z+1, 18, 1);
setTile(x-3, y+8, z, 18, 1);
setTile(x-3, y+8, z+1, 18, 1);
setTile(x-3, y+9, z-2, 18, 1);
setTile(x-3, y+9, z-1, 18, 1);
setTile(x-3, y+9, z, 18, 1);
setTile(x-3, y+9, z+1, 18, 1);
setTile(x-3, y+9, z+2, 18, 1);
setTile(x-3, y+9, z+3, 18, 1);
setTile(x-3, y+10, z, 18, 1);
setTile(x-3, y+10, z+1, 18, 1);
setTile(x-3, y+13, z, 18, 1);
setTile(x-3, y+13, z+1, 18, 1);
setTile(x-2, y+5, z-2, 18, 1);
setTile(x-2, y+5, z-1, 18, 1);
setTile(x-2, y+5, z, 18, 1);
setTile(x-2, y+5, z+1, 18, 1);
setTile(x-2, y+5, z+2, 18, 1);
setTile(x-2, y+5, z+3, 18, 1);
setTile(x-2, y+6, z-2, 18, 1);
setTile(x-2, y+6, z-1, 18, 1);
setTile(x-2, y+6, z, 18, 1);
setTile(x-2, y+6, z+1, 18, 1);
setTile(x-2, y+6, z+2, 18, 1);
setTile(x-2, y+6, z+3, 18, 1);
setTile(x-2, y+7, z-1, 18, 1);
setTile(x-2, y+7, z, 18, 1);
setTile(x-2, y+7, z+1, 18, 1);
setTile(x-2, y+7, z+2, 18, 1);
setTile(x-2, y+8, z-1, 18, 1);
setTile(x-2, y+8, z, 18, 1);
setTile(x-2, y+8, z+1, 18, 1);
setTile(x-2, y+8, z+2, 18, 1);
setTile(x-2, y+9, z-2, 18, 5);
setTile(x-2, y+9, z-1, 18, 1);
setTile(x-2, y+9, z, 18, 1);
setTile(x-2, y+9, z+1, 18, 1);
setTile(x-2, y+9, z+2, 18, 1);
setTile(x-2, y+9, z+3, 18, 1);
setTile(x-2, y+10, z-1, 18, 1);
setTile(x-2, y+10, z, 18, 1);
setTile(x-2, y+10, z+1, 18, 1);
setTile(x-2, y+10, z+2, 18, 1);
setTile(x-2, y+11, z, 18, 1);
setTile(x-2, y+11, z+1, 18, 1);
setTile(x-2, y+12, z, 18, 1);
setTile(x-2, y+12, z+1, 18, 1);
setTile(x-2, y+13, z-1, 18, 1);
setTile(x-2, y+13, z, 18, 1);
setTile(x-2, y+13, z+1, 18, 1);
setTile(x-2, y+13, z+2, 18, 1);
setTile(x-2, y+14, z, 18, 1);
setTile(x-2, y+14, z+1, 18, 1);
setTile(x-2, y+17, z, 18, 1);
setTile(x-2, y+17, z+1, 18, 1);
for(var zz=z-3;zz<z+5;zz++){
setTile(x-1, y+5, zz, 18, 1);
setTile(x-1, y+6, zz, 18, 1);
}
setTile(x-1, y+7, z-2, 18, 1);
setTile(x-1, y+7, z-1, 18, 1);
setTile(x-1, y+7, z+2, 18, 1);
setTile(x-1, y+7, z+3, 18, 1);
setTile(x-1, y+8, z-2, 18, 1);
setTile(x-1, y+8, z-1, 18, 1);
setTile(x-1, y+8, z+2, 18, 1);
setTile(x-1, y+8, z+3, 18, 1);
setTile(x-1, y+9, z-3, 18, 1);
setTile(x-1, y+9, z-2, 18, 1);
setTile(x-1, y+9, z-1, 18, 1);
setTile(x-1, y+9, z+2, 18, 1);
setTile(x-1, y+9, z+3, 18, 1);
setTile(x-1, y+9, z+4, 18, 1);
setTile(x-1, y+10, z-2, 18, 5);
setTile(x-1, y+10, z-1, 18, 1);
setTile(x-1, y+10, z+2, 18, 1);
setTile(x-1, y+10, z+3, 18, 1);
setTile(x-1, y+11, z-1, 18, 1);
setTile(x-1, y+11, z+2, 18, 1);
setTile(x-1, y+12, z-1, 18, 1);
setTile(x-1, y+12, z+2, 18, 1);
setTile(x-1, y+13, z-2, 18, 1);
setTile(x-1, y+13, z-1, 18, 1);
setTile(x-1, y+13, z+2, 18, 1);
setTile(x-1, y+13, z+3, 18, 1);
setTile(x-1, y+14, z-1, 18, 1);
setTile(x-1, y+14, z+2, 18, 1);
setTile(x-1, y+17, z-1, 18, 1);
setTile(x-1, y+17, z, 17, 1);
setTile(x-1, y+17, z+1, 18, 1);
setTile(x-1, y+17, z+2, 18, 1);
setTile(x-1, y+18, z, 18, 1);
setTile(x-1, y+18, z+1, 18, 1);
setTile(x, y+5, z-3, 18, 1);
setTile(x, y+5, z-2, 18, 1);
setTile(x, y+5, z-1, 18, 1);
setTile(x, y+5, z+2, 18, 1);
setTile(x, y+5, z+3, 18, 1);
setTile(x, y+5, z+4, 18, 1);
setTile(x, y+6, z-3, 18, 1);
setTile(x, y+6, z-2, 18, 1);
setTile(x, y+6, z-1, 18, 1);
setTile(x, y+6, z+2, 18, 1);
setTile(x, y+6, z+3, 18, 1);
setTile(x, y+6, z+4, 18, 1);
setTile(x, y+7, z-2, 18, 1);
setTile(x, y+7, z-1, 18, 1);
setTile(x, y+7, z+2, 18, 1);
setTile(x, y+7, z+3, 18, 1);
setTile(x, y+8, z-2, 18, 1);
setTile(x, y+8, z-1, 18, 1);
setTile(x, y+8, z+2, 18, 1);
setTile(x, y+8, z+3, 18, 1);
setTile(x, y+9, z-3, 18, 1);
setTile(x, y+9, z-2, 18, 1);
setTile(x, y+9, z-1, 18, 1);
setTile(x, y+9, z+2, 18, 1);
setTile(x, y+9, z+3, 18, 1);
setTile(x, y+9, z+4, 18, 1);
setTile(x, y+10, z-2, 18, 1);
setTile(x, y+10, z-1, 18, 1);
setTile(x, y+10, z+2, 18, 1);
setTile(x, y+10, z+3, 18, 5);
setTile(x, y+11, z-1, 18, 1);
setTile(x, y+11, z+2, 18, 1);
setTile(x, y+12, z-1, 18, 1);
setTile(x, y+12, z+2, 18, 1);
setTile(x, y+13, z-2, 18, 1);
setTile(x, y+13, z-1, 18, 1);
setTile(x, y+13, z+2, 18, 1);
setTile(x, y+13, z+3, 18, 1);
setTile(x, y+14, z-1, 18, 1);
setTile(x, y+14, z+2, 18, 1);
setTile(x, y+17, z-1, 18, 1);
setTile(x, y+17, z, 18, 1);
setTile(x, y+17, z+1, 18, 1);
setTile(x, y+17, z+2, 18, 1);
setTile(x, y+18, z, 18, 1);
setTile(x, y+18, z+1, 18, 1);
setTile(x+1, y+5, z-2, 18, 1);
setTile(x+1, y+5, z-1, 18, 1);
setTile(x+1, y+5, z, 18, 1);
setTile(x+1, y+5, z+1, 18, 1);
setTile(x+1, y+5, z+2, 18, 1);
setTile(x+1, y+5, z+3, 18, 1);
setTile(x+1, y+6, z-2, 18, 1);
setTile(x+1, y+6, z-1, 18, 1);
setTile(x+1, y+6, z, 18, 1);
setTile(x+1, y+6, z+1, 18, 1);
setTile(x+1, y+6, z+2, 18, 1);
setTile(x+1, y+6, z+3, 18, 1);
setTile(x+1, y+7, z-1, 18, 1);
setTile(x+1, y+7, z, 18, 1);
setTile(x+1, y+7, z+1, 18, 1);
setTile(x+1, y+7, z+2, 18, 1);
setTile(x+1, y+8, z-1, 18, 1);
setTile(x+1, y+8, z, 18, 1);
setTile(x+1, y+8, z+1, 18, 1);
setTile(x+1, y+8, z+2, 18, 1);
setTile(x+1, y+9, z-2, 18, 1);
setTile(x+1, y+9, z-1, 18, 1);
setTile(x+1, y+9, z, 18, 1);
setTile(x+1, y+9, z+1, 18, 1);
setTile(x+1, y+9, z+2, 18, 1);
setTile(x+1, y+9, z+3, 18, 1);
setTile(x+1, y+10, z-1, 18, 1);
setTile(x+1, y+10, z, 18, 1);
setTile(x+1, y+10, z+1, 18, 1);
setTile(x+1, y+10, z+2, 18, 1);
setTile(x+1, y+11, z, 18, 1);
setTile(x+1, y+11, z+1, 18, 1);
setTile(x+1, y+12, z, 18, 1);
setTile(x+1, y+12, z+1, 18, 1);
setTile(x+1, y+13, z-1, 18, 1);
setTile(x+1, y+13, z, 18, 1);
setTile(x+1, y+13, z+1, 18, 1);
setTile(x+1, y+13, z+2, 18, 1);
setTile(x+1, y+14, z, 18, 1);
setTile(x+1, y+14, z+1, 18, 1);
setTile(x+1, y+17, z, 18, 1);
setTile(x+1, y+17, z+1, 18, 1);
setTile(x+2, y+5, z-2, 18, 1);
setTile(x+2, y+5, z-1, 18, 1);
setTile(x+2, y+5, z, 18, 1);
setTile(x+2, y+5, z+1, 18, 1);
setTile(x+2, y+5, z+2, 18, 1);
setTile(x+2, y+5, z+3, 18, 1);
setTile(x+2, y+6, z-2, 18, 1);
setTile(x+2, y+6, z-1, 18, 1);
setTile(x+2, y+6, z, 18, 1);
setTile(x+2, y+6, z+1, 18, 1);
setTile(x+2, y+6, z+2, 18, 1);
setTile(x+2, y+6, z+3, 18, 1);
setTile(x+2, y+7, z, 18, 1);
setTile(x+2, y+7, z+1, 18, 1);
setTile(x+2, y+8, z, 18, 1);
setTile(x+2, y+8, z+1, 18, 1);
setTile(x+2, y+9, z-2, 18, 1);
setTile(x+2, y+9, z-1, 18, 1);
setTile(x+2, y+9, z, 18, 1);
setTile(x+2, y+9, z+1, 18, 1);
setTile(x+2, y+9, z+2, 18, 1);
setTile(x+2, y+9, z+3, 18, 1);
setTile(x+2, y+10, z, 18, 1);
setTile(x+2, y+10, z+1, 18, 1);
setTile(x+2, y+13, z, 18, 1);
setTile(x+2, y+13, z+1, 18, 1);
setTile(x+3, y+5, z, 18, 1);
setTile(x+3, y+5, z+1, 18, 1);
setTile(x+3, y+6, z, 18, 1);
setTile(x+3, y+6, z+1, 18, 1);
setTile(x+3, y+9, z, 18, 1);
setTile(x+3, y+9, z+1, 18, 1);
var p2x, p2y, p2z;
for each(var e in Entity.getAll()){
p2x = Math.abs(x-Entity.getX(e));
p2y = Math.abs((y+1)-Entity.getY(e));
p2z = Math.abs(z-Entity.getZ(e));
if(p2x<=6&&p2y<=6&&p2z<=6&&taiga[n]!=e&&Entity.getEntityTypeId(e)<64)
Entity.setHealth(e, Entity.getHealth(e)-4);
}
ta2[n] = true;
ta2a[n] = 300;
skillCool(ESP.getUser(), 2);
}
if(i==304&&Cool.isFinished(ta3a[n])){
for(var xx=x-1;xx<x+2;xx++)
for(var zz=z-1;zz<z+2;zz++)
setTile(xx, y, zz, 243);
setTile(x-2, y, z-1, 243);
setTile(x-2, y, z, 243);
setTile(x-2, y, z+1, 243);
setTile(x-1, y, z-2, 243);
setTile(x-1, y, z+2, 243);
setTile(x, y, z-2, 243);
setTile(x, y, z+2, 243);
setTile(x+1, y, z-2, 243);
setTile(x+1, y, z+2, 243);
setTile(x+2, y, z-1, 243);
setTile(x+2, y, z, 243);
setTile(x+2, y, z+1, 243);
setTile(x-2, y+1, z-1, 39);
setTile(x-1, y+1, z+1, 175, 2);
setTile(x-1, y+2, z+1, 175, 8);
setTile(x, y+1, z-2, 175, 3);
setTile(x, y+1, z+2, 39);
setTile(x, y+2, z-2, 175, 8);
setTile(x+1, y+1, z-1, 39);
setTile(x+1, y+1, z+1, 175, 3);
setTile(x+1, y+2, z+1, 175, 8);
ta3[n] = true;
ta3a[n] = 300;
skillCool(ESP.getUser(), 3);
}
if(i==305&&Cool.isFinished(ta4a[n])){
ESP.heal(taiga[n]);
ESP.sbm("Mega Taiga", true);
for(var xx=x-9;xx<x+10;xx++)
for(var zz=z-9;zz<z+10;zz++)
setTile(xx, y, zz, 243);
ESP.createTiaga(x, y, z);
arroundMobHealthDown(taiga[n], 10, 10);
Level.spawnMob(x+4, y+3, z+6, 14);
Level.dropItem(x, y+1.1, z, 0.5, 352, 10, 0);
tax[n] = x;
tay[n] = y;
taz[n] = z;
ta4[n] = true;
ta4a[n] = 1800;
skillCool(ESP.getUser(), 4);
}
break;
}}}
if(ruin[0]!=null){
for(var n=0;n<ruin.length;n++){
if(ruin[n]==ESP.getUser()){
if(i==302&&Cool.isFinished(ru1a[n])){
ESP.antiLack(5);
explode(x, y+1, z, 3);
ru1[n] = true;
ru1a[n] = 150;
skillCool(ESP.getUser(), 1);
}
if(i==303&&Cool.isFinished(ru2a[n])){
px = Player.getX();
py = y;
pz = Player.getZ();
yaw = Math.floor(getYaw());
sin = -Math.sin(yaw/180*Math.PI);
cos = Math.cos(yaw/180*Math.PI);
ESP.antiLack(5);
for(var gun=3;gun<25;gun++)
explode(px+gun*sin, y+2, pz+gun*cos, 1.8);
ru2[n] = true;
ru2a[n] = 300;
skillCool(ESP.getUser(), 2);
}
if(i==304&&Cool.isFinished(ru3a[n])){
ru3x[n] = Player.getX();
ru3y[n] = Player.getY()-2;
ru3z[n] = Player.getZ();
ESP.antiLack(5);
explode(ru3x[n]+5, ru3y[n]+1, ru3z[n]+5, 2.5);
explode(ru3x[n]+5, ru3y[n]+1, ru3z[n], 2.5);
explode(ru3x[n]+5, ru3y[n]+1, ru3z[n]-5, 2.5);
explode(ru3x[n], ru3y[n]+1, ru3z[n]+5, 2.5);
explode(ru3x[n], ru3y[n]+1, ru3z[n]-5, 2.5);
explode(ru3x[n]-5, ru3y[n]+1, ru3z[n]+5, 2.5);
explode(ru3x[n]-5, ru3y[n]+1, ru3z[n], 2.5);
explode(ru3x[n]-5, ru3y[n]+1, ru3z[n]-5, 2.5);
ru3[n] = true;
ru3a[n] = 300;
skillCool(ESP.getUser(), 3);
}
if(i==305&&Cool.isFinished(ru4a[n])){
ESP.heal(ruin[n]);
ESP.sbm("The Ruining", true);
rux[n] = Player.getX();
ruy[n] = Player.getY()-2;
ruz[n] = Player.getZ();
for(var yy=ruy[n]+1;yy<ruy[n]+3;yy++){
setTile(rux[n]+9, yy, ruz[n]+9, 46);
setTile(rux[n]+9, yy, ruz[n], 46);
setTile(rux[n]+9, yy, ruz[n]-9, 46);
setTile(rux[n], yy, ruz[n]+9, 46);
setTile(rux[n], yy, ruz[n]-9, 46);
setTile(rux[n]-9, yy, ruz[n]+9, 46);
setTile(rux[n]-9, yy, ruz[n], 46);
setTile(rux[n]-9, yy, ruz[n]-9, 46);
}
ESP.antiLack(90);
explode(rux[n]+9, ruy[n]+2.7, ruz[n]+9, 0.7);
explode(rux[n]+9, ruy[n]+2.7, ruz[n], 0.7);
explode(rux[n]+9, ruy[n]+2.7, ruz[n]-9, 0.7);
explode(rux[n], ruy[n]+2.7, ruz[n]+9, 0.7);
explode(rux[n], ruy[n]+2.7, ruz[n]-9, 0.7);
explode(rux[n]-9, ruy[n]+2.7, ruz[n]+9, 0.7);
explode(rux[n]-9, ruy[n]+2.7, ruz[n], 0.7);
explode(rux[n]-9, ruy[n]+2.7, ruz[n]-9, 0.7);
ru4[n] = true;
ru4a[n] = 1800;
skillCool(ESP.getUser(), 4);
}
break;
}}}
if(swamp[0]!=null){
for(var n=0;n<swamp.length;n++){
if(swamp[n]==ESP.getUser()){
if(i==302&&Cool.isFinished(sw1a[n])){
for(var xx=x-1;xx<x+2;xx++)
for(var zz=z-1;zz<z+2;zz++)
setTile(xx, y, zz, 9);
setTile(x, y+1, z, 111);
var p2x, p2y, p2z;
for each(var e in Entity.getAll()){
p2x = Math.abs(x-Entity.getX(e));
p2y = Math.abs((y+1)-Entity.getY(e));
p2z = Math.abs(z-Entity.getZ(e));
if(p2x<=3&&p2y<=3&&p2z<=3&&swamp[n]!=e&&Entity.getEntityTypeId(e)<64)
Entity.setHealth(e, Entity.getHealth(e)-4);
}
sw1[n] = true;
sw1a[n] = 150;
skillCool(ESP.getUser(), 1);
}
if(i==303&&Cool.isFinished(sw2a[n])){
ESP.makeSwampTree(x, y, z);
sw2[n] = true;
sw2a[n] = 300;
skillCool(ESP.getUser(), 2);
}
if(i==304&&Cool.isFinished(sw3a[n])){
for(var nn=0;nn<6;nn++)
Level.spawnMob(x, y+2, z, 37);
sw3[n] = true;
sw3a[n] = 300;
skillCool(ESP.getUser(), 3);
}
if(i==305&&Cool.isFinished(sw4a[n])){
if(Cool.isFalse(sw4b[n])){
swx[n] = x;
swy[n] = y;
swz[n] = z;
if(b==2)
setTile(x, y, z, 3);
sw4b[n] = true;
}
else if(sw4b[n]){
ESP.heal(swamp[n]);
ESP.sbm("Dead Swamp", true);
teleport(ESP.getUser(), swx[n], swy[n]+3, swz[n]);
for(var xx=x-9;xx<x+10;xx++)
for(var zz=z-9;zz<z+10;zz++)
setTile(xx, y, zz, 11);
ESP.creaeteSwamp(x, y, z);
arroundMobHealthDown(swamp, 10, 5);
ESP.makeSwampTree(x, y, z);
Level.spawnMob(x+6, y+3, z+6, 37);
Level.spawnMob(x+6, y+3, z-6, 37);
Level.spawnMob(x-6, y+3, z+6, 37);
Level.spawnMob(x-6, y+3, z-6, 37);
swx[n] = x;
swy[n] = y;
swz[n] = z;
sw4b[n] = false;
sw4[n] = true;
sw4a[n] = 1800;
skillCool(ESP.getUser(), 4);
}
}
break;
}}}
if(asum[0]!=null){
for(var n=0;n<asum.length;n++){
if(asum[n]==ESP.getUser()){
if(i==302&&Cool.isFinished(asum1a[n])){
for(var nn=0;nn<4;nn++)
Level.spawnMob(x, y+3, z, 32);
Level.spawnMob(x, y+3, z, 34);
Level.spawnMob(x, y+3, z, 34);
Level.spawnMob(x, y+3, z, 34);
asum1[n] = true;
asum1a[n] = 150;
skillCool(ESP.getUser(), 1);
}
if(i==303&&Cool.isFinished(asum2a[n])){
for(var m=0;m<4;m++)
Level.spawnMob(x, y+3, z, 36);
Level.spawnMob(x, y+3, z, 38);
Level.spawnMob(x, y+3, z, 38);
Level.spawnMob(x, y+3, z, 38);
asum2[n] = true;
asum2a[n] = 300;
skillCool(ESP.getUser(), 2);
}
if(i==304&&Cool.isFinished(asum3a[n])){
for(var nn=0;nn<5;nn++){
Level.spawnMob(x, y+3, z, 37);
Level.spawnMob(x, y+3, z, 39);
}
asum3[n] = true;
asum3a[n] = 300;
skillCool(ESP.getUser(), 3);
}
if(i==305&&Cool.isFinished(asum4a[n])){
ESP.heal(asum[n]);
ESP.sbm("Hyper Summon", true);
for(var m=0;m<4;m++)
Level.spawnMob(x, y+3, z, 32);
for(var m=0;m<3;m++){
Level.spawnMob(x, y+3, z, 34);
Level.spawnMob(x, y+3, z, 33);
Level.spawnMob(x, y+3, z, 35);
Level.spawnMob(x, y+3, z, 37);
}
for(var m=0;m<2;m++){
Level.spawnMob(x, y+3, z, 36);
Level.spawnMob(x, y+3, z, 39);
Level.spawnMob(x, y+3, z, 38);
}
asum4[n] = true;
asum4a[n] = 1800;
skillCool(ESP.getUser(), 4);
}
break;
}}}
if(amage[0]!=null){
for(var n=0;n<amage.length;n++){
if(amage[n]==ESP.getUser()){
if(i==302&&Cool.isFinished(am1a[n])){
teleport(ESP.getUser(), x+(x-Player.getX()), y+3, z+(z-Player.getZ()));
am1[n] = true;
am1a[n] = 150;
skillCool(ESP.getUser(), 1);
}
if(i==303&&Cool.isFinished(am2a[n])){
px = Player.getX();
py = y;
pz = Player.getZ();
yaw = Math.floor(getYaw());
sin = -Math.sin(yaw/180*Math.PI);
cos = Math.cos(yaw/180*Math.PI);
ESP.antiLack(5);
for(var gun=3;gun<25;gun++){
setTile(px+gun*sin, y+1, pz+gun*cos, 51);
setTile(px+gun*sin, y+2, pz+gun*cos, 79);
}
am2[n] = true;
am2a[n] = 300;
skillCool(ESP.getUser(), 2);
}
if(i==304&&Cool.isFinished(am3a[n])){
am3x[n] = Player.getX();
am3y[n] = Player.getY()-2;
am3z[n] = Player.getZ();
setTile(am3x[n]+5, am3y[n]+2, am3z[n]+5, 46);
setTile(am3x[n]+5, am3y[n]+2, am3z[n]-5, 46);
setTile(am3x[n]-5, am3y[n]+2, am3z[n]+5, 46);
setTile(am3x[n]-5, am3y[n]+2, am3z[n]-5, 46);
ESP.antiLack(90);
explode(am3x[n]+5, am3y[n]+2.8, am3z[n]+5, 0.7);
explode(am3x[n]+5, am3y[n]+2.8, am3z[n]-5, 0.7);
explode(am3x[n]-5, am3y[n]+2.8, am3z[n]+5, 0.7);
explode(am3x[n]-5, am3y[n]+2.8, am3z[n]-5, 0.7);
am3[n] = true;
am3a[n] = 300;
skillCool(ESP.getUser(), 3);
}
if(i==305&&Cool.isFinished(am4a[n])){
if(Cool.isFalse(am4b[n])){
if(b==2)
setTile(x, y, z, 3);
am4x[n] = x;
am4y[n] = y;
am4z[n] = z;
am4b[n] = true;
}
else if(am4b[n]){
ESP.heal(amage[n]);
ESP.sbm("Ground Down", true);
amx[n] = Player.getX();
amy[n] = Player.getY()-2;
amz[n] = Player.getZ();
for(var xx=amx[n]-12;xx<amx[n]+13;xx++)
for(var zz=amz[n]-12;zz<amz[n]+13;zz++)
setTile(xx, amy, zz, 0);
arroundMobHealthDown(amage[n], 15, 10);
teleport(ESP.getUser(), am4x[n], am4y[n]+3, am4z[n]);
am4b[n] = false;
am4[n] = true;
am4a[n] = 1800;
skillCool(ESP.getUser(), 4);
}
}
break;
}}}
if(puella[0]!=null){
for(var n=0;n<puella.length;n++){
if(puella[n]==ESP.getUser()){
if(i==302&&Cool.isFinished(pm1a[n])){
teleport(ESP.getUser(), x+(x-Player.getX()), y+3, z+(z-Player.getZ()));
pm1[n] = true;
pm1a[n] = 150;
skillCool(ESP.getUser(), 1);
}
if(i==303&&Cool.isFinished(pm2a[n])){
Entity.setHealth(puella[n], Entity.getHealth(puella[n])+7);
pm2[n] = true;
pm2a[n] = 300;
skillCool(ESP.getUser(), 2);
}
if(i==304&&Cool.isFinished(pm3a[n])){
pm3[n] = true;
pm3a[n] = 300;
skillCool(ESP.getUser(), 3);
}
if(i==305&&Cool.isFinished(pm4a[n])){
ESP.sbm("Magical Heart", true);
ESP.heal(puella[n]);
pm4x[n] = Player.getX();
pm4y[n] = Player.getY()-2;
pm4z[n] = Player.getZ();
arroundMobHealthDown(puella[n], 30, 15);
setTile(pm4x[n]-4, pm4y[n], pm4z[n], 35, 6);
setTile(pm4x[n]-3, pm4y[n], pm4z[n]-1, 35, 6);
setTile(pm4x[n]-3, pm4y[n], pm4z[n], 35, 6);
setTile(pm4x[n]-3, pm4y[n], pm4z[n]+1, 35, 6);
setTile(pm4x[n]-2, pm4y[n], pm4z[n]-2, 35, 6);
setTile(pm4x[n]-2, pm4y[n], pm4z[n]-1, 35, 6);
setTile(pm4x[n]-2, pm4y[n], pm4z[n], 35, 6);
setTile(pm4x[n]-2, pm4y[n], pm4z[n]+1, 35, 6);
setTile(pm4x[n]-2, pm4y[n], pm4z[n]+2, 35, 6);
for(var zz=pm4z[n]-4;zz<pm4z[n]+5;zz++){
setTile(pm4x[n], pm4y[n], zz, 35, 6);
setTile(pm4x[n]+1, pm4y[n], zz, 35, 6);
}
for(var zz=pm4z[n]-3;zz<pm4z[n]+4;zz++)
setTile(pm4x[n]-1, pm4y[n], zz, 35, 6);
setTile(pm4x[n]+2, pm4y[n], pm4z[n]-3, 35, 6);
setTile(pm4x[n]+2, pm4y[n], pm4z[n]-2, 35, 6);
setTile(pm4x[n]+2, pm4y[n], pm4z[n]-1, 35, 6);
setTile(pm4x[n]+2, pm4y[n], pm4z[n]+1, 35, 6);
setTile(pm4x[n]+2, pm4y[n], pm4z[n]+2, 35, 6);
setTile(pm4x[n]+2, pm4y[n], pm4z[n]+3, 35, 6);
setTile(pm4x[n]+3, pm4y[n], pm4z[n]-2, 35, 6);
setTile(pm4x[n]+3, pm4y[n], pm4z[n]+2, 35, 6);
pm4[n] = true;
pm4a[n] = 1800;
skillCool(ESP.getUser(), 4);
}
break;
}}}
if(hbuild[0]!=null){
for(var n=0;n<hbuild.length;n++){
if(hbuild[n]==ESP.getUser()){
if(i==302&&Cool.isFinished(hb1a[n])){
setTile(x, y+1, z, 85);
setTile(x, y+2, z, 85);
setTile(x, y+3, z, 85);
setTile(x, y+4, z, 85);
setTile(x, y+5, z, 85);
hbxa = Math.abs(x-Player.getX());
hbza = Math.abs(z-Player.getZ());
if(hbxa>hbza){
setTile(x, y+5, z+1, 85);
setTile(x, y+5, z-1, 85);
setTile(x, y+4, z+1, 89);
setTile(x, y+4, z-1, 89);
}
else if(hbxa<hbza){
setTile(x+1, y+5, z, 85);
setTile(x-1, y+5, z, 85);
setTile(x+1, y+4, z, 89);
setTile(x-1, y+4, z, 89);
}
hb1[n] = true;
hb1a[n] = 150;
skillCool(ESP.getUser(), 1);
}
if(i==303&&Cool.isFinished(hb2a[n])){
for(var xx=x-2;xx<x+4;xx++)
for(var zz=z-3;zz<z+3;zz++)
setTile(xx, y+4, zz, 1);
setTile(x-2, y+1, z-2, 1);
setTile(x-2, y+1, z-1, 1);
setTile(x-2, y+1, z, 1);
setTile(x-2, y+1, z+1, 1);
setTile(x-2, y+2, z-2, 1);
setTile(x-2, y+2, z-1, 102);
setTile(x-2, y+2, z, 102);
setTile(x-2, y+2, z+1, 1);
setTile(x-2, y+3, z-2, 1);
setTile(x-2, y+3, z-1, 1);
setTile(x-2, y+3, z, 1);
setTile(x-2, y+3, z+1, 1);
setTile(x-2, y+5, z-3, 1);
setTile(x-2, y+5, z-2, 1);
setTile(x-2, y+5, z-1, 1);
setTile(x-2, y+5, z, 1);
setTile(x-2, y+5, z+1, 1);
setTile(x-2, y+5, z+2, 1);
setTile(x-1, y+1, z-3, 1);
setTile(x-1, y+1, z+2, 1);
setTile(x-1, y+2, z-3, 1);
setTile(x-1, y+2, z+2, 1);
setTile(x-1, y+3, z-3, 1);
setTile(x-1, y+3, z+2, 1);
setTile(x-1, y+5, z-3, 1);
setTile(x-1, y+5, z+2, 1);
setTile(x, y+1, z-3, 1);
setTile(x, y+2, z-3, 102);
setTile(x, y+3, z-3, 1);
setTile(x, y+3, z+2, 1);
setTile(x, y+4, z+2, 89);
setTile(x, y+5, z-3, 1);
setTile(x, y+5, z+2, 1);
setTile(x+1, y+1, z-3, 1);
setTile(x, y+1, z+2, 64, 1);
setTile(x, y+2, z+2, 64, 9);
setTile(x+1, y+1, z+2, 64, 1);
setTile(x+1, y+2, z+2, 64, 8);
setTile(x+1, y+2, z-3, 102);
setTile(x+1, y+3, z-3, 1);
setTile(x+1, y+3, z+2, 1);
setTile(x+1, y+4, z+2, 89);
setTile(x+1, y+5, z-3, 1);
setTile(x+1, y+5, z+2, 1);
setTile(x+2, y+1, z-3, 1);
setTile(x+2, y+1, z+2, 1);
setTile(x+2, y+2, z-3, 1);
setTile(x+2, y+2, z+2, 1);
setTile(x+2, y+3, z-3, 1);
setTile(x+2, y+3, z+2, 1);
setTile(x+2, y+5, z-3, 1);
setTile(x+2, y+5, z+2, 1);
setTile(x+3, y+1, z-2, 1);
setTile(x+3, y+1, z-1, 1);
setTile(x+3, y+1, z, 1);
setTile(x+3, y+1, z+1, 1);
setTile(x+3, y+2, z-2, 1);
setTile(x+3, y+2, z-1, 102);
setTile(x+3, y+2, z, 102);
setTile(x+3, y+2, z+1, 1);
setTile(x+3, y+3, z-2, 1);
setTile(x+3, y+3, z-1, 1);
setTile(x+3, y+3, z, 1);
setTile(x+3, y+3, z+1, 1);
setTile(x+3, y+5, z-3, 1);
setTile(x+3, y+5, z-2, 1);
setTile(x+3, y+5, z-1, 1);
setTile(x+3, y+5, z, 1);
setTile(x+3, y+5, z+1, 1);
setTile(x+3, y+5, z+2, 1);
var p2x, p2y, p2z;
for each(var e in Entity.getAll()){
p2x = Math.abs(x-Entity.getX(e));
p2y = Math.abs((y+1)-Entity.getY(e));
p2z = Math.abs(z-Entity.getZ(e));
if(p2x<=5&&p2y<=5&&p2z<=5&&hbuild[n]!=e&&Entity.getEntityTypeId(e)<64)
Entity.setHealth(e, Entity.getHealth(e)-4);
}
hb2[n] = true;
hb2a[n] = 300;
skillCool(ESP.getUser(), 2);
}
if(i==304&&Cool.isFinished(hb3a[n])){
px = Player.getX();
py = y;
pz = Player.getZ();
yaw = Math.floor(getYaw());
sin = -Math.sin(yaw/180*Math.PI);
cos = Math.cos(yaw/180*Math.PI);
ESP.antiLack(5);
for(var gun=3;gun<20;gun++)
explode(px+gun*sin, y+3.7, pz+gun*cos, 1.7);
for(var gun=3;gun<25;gun++)
setTile(px+gun*sin, y, pz+gun*cos, 173);
if(Math.abs(sin)>Math.abs(cos)){
for(var gun=3;gun<25;gun++){
setTile(px+gun*sin, y, pz+gun*cos+1, 173);
setTile(px+gun*sin, y, pz+gun*cos-1, 173);
}
}
if(Math.abs(sin)<Math.abs(cos)){
for(var gun=3;gun<25;gun++){
setTile(px+gun*sin+1, y, pz+gun*cos, 173);
setTile(px+gun*sin-1, y, pz+gun*cos, 173);
}
}
setTile(px+4*sin, y+1, pz+4*cos, 171);
setTile(px+5*sin, y+1, pz+5*cos, 171);
setTile(px+7*sin, y+1, pz+7*cos, 171);
setTile(px+8*sin, y+1, pz+8*cos, 171);
setTile(px+10*sin, y+1, pz+10*cos, 171);
setTile(px+11*sin, y+1, pz+11*cos, 171);
setTile(px+13*sin, y+1, pz+13*cos, 171);
setTile(px+14*sin, y+1, pz+14*cos, 171);
setTile(px+16*sin, y+1, pz+16*cos, 171);
setTile(px+17*sin, y+1, pz+17*cos, 171);
setTile(px+19*sin, y+1, pz+19*cos, 171);
setTile(px+20*sin, y+1, pz+20*cos, 171);
setTile(px+22*sin, y+1, pz+22*cos, 171);
setTile(px+23*sin, y+1, pz+23*cos, 171);
hb3[n] = true;
hb3a[n] = 300;
skillCool(ESP.getUser(), 3);
}
if(i==305&&Cool.isFinished(hb4a[n])){
ESP.sbm("The Structure", true);
ESP.heal(hbuild[n]);
arroundMobHealthDown(hbuild[n], 30, 15);
ESP.creaeteBuilding(x, y, z);
hbx[n] = x;
hby[n] = y;
hbz[n] = z;
hb4[n] = true;
hb4a[n] = 1800;
skillCool(ESP.getUser(), 4);
}
break;
}}}
if(scalar[0]!=null){
for(var n=0;n<scalar.length;n++){
if(scalar[n]==ESP.getUser()){
if(i==302&&Cool.isFinished(sc1a[n])){
ESP.antiLack(5);
explode(x, y+1.5, z, 3);
sc1x[n] = x;
sc1y[n] = y;
sc1z[n] = z;
sc1[n] = true;
sc1a[n] = 150;
skillCool(ESP.getUser(), 1);
}
if(i==303&&Cool.isFinished(sc2a[n])){
var p2x, p2y, p2z;
for each(var e in Entity.getAll()){
p2x = Math.abs(Player.getX()-Entity.getX(e));
p2y = Math.abs(Player.getY()-Entity.getY(e));
p2z = Math.abs(Player.getZ()-Entity.getZ(e));
if(p2x<=9&&p2y<=9&&p2z<=9&&scalar[n]!=e&&Entity.getEntityTypeId(e)<64){
Entity.setHealth(e, Entity.getHealth(e)-2);
Entity.setFireTicks(e, 10);
if(ESP.isPlayer(e)) setTile(Entity.getX(e), Entity.getY(e)-2, Entity.getZ(e), 79);
else setTile(Entity.getX(e), Entity.getY(e)-1, Entity.getZ(e), 79);
}
}
sc2[n] = true;
sc2a[n] = 300;
skillCool(ESP.getUser(), 2);
}
if(i==304&&Cool.isFinished(sc3a[n])){
sc3[n] = true;
sc3a[n] = 300;
skillCool(ESP.getUser(), 3);
}
if(i==305&&Cool.isFinished(sc4a[n])){
ESP.heal(scalar[n]);
ESP.sbm("Heat Explosion", true);
scx[n] = [];
scy[n] = [];
scz[n] = [];
var p2x, p2y, p2z;
for each(var e in Entity.getAll()){
p2x = Math.abs(x-Entity.getX(e));
p2y = Math.abs((y+1)-Entity.getY(e));
p2z = Math.abs(z-Entity.getZ(e));
if(p2x<=25&&p2y<=25&&p2z<=25&&scalar[n]!=e&&Entity.getEntityTypeId(e)<64){
Entity.setHealth(e, Entity.getHealth(e)-2);
Entity.setFireTicks(e, 20);
setTile(Entity.getX(e), Entity.getY(e), Entity.getZ(e), 79);
scx[n].push(Entity.getX(e));
scy[n].push(Entity.getY(e));
scz[n].push(Entity.getZ(e));
}
}
sc4[n] = true;
sc4a[n] = 1800;
skillCool(ESP.getUser(), 4);
}
break;
}}}
if(vector[0]!=null){
for(var n=0;n<vector.length;n++){
if(vector[n]==ESP.getUser()){
if(i==302&&Cool.isFinished(v1a[n])){
ESP.antiLack(5);
explode(x, y+1.2, z, 2.5);
vxa[n] = x-Player.getX();
vza[n] = z-Player.getZ();
v1x[n] = x;
v1y[n] = y;
v1z[n] = z;
v1[n] = true;
v1a[n] = 150;
skillCool(ESP.getUser(), 1);
}
if(i==303&&Cool.isFinished(v2a[n])){
var p2x, p2y, p2z;
for each(var e in Entity.getAll()){
p2x = Math.abs(Player.getX()-Entity.getX(e));
p2y = Math.abs(Player.getY()-Entity.getY(e));
p2z = Math.abs(Player.getZ()-Entity.getZ(e));
if(p2x<=10&&p2y<=10&&p2z<=10&&vector[n]!=e&&Entity.getEntityTypeId(e)<64){
teleport(e, Entity.getX(e), Entity.getY(e)+9, Entity.getZ(e));
Entity.setHealth(e, Entity.getHealth(e)-4);
}
}
v2[n] = true;
v2a[n] = 300;
skillCool(ESP.getUser(), 2);
}
if(i==304&&Cool.isFinished(v3a[n])){
v3x[n] = Math.floor(Player.getX());
v3y[n] = y;
v3z[n] = Math.floor(Player.getZ());
yaw = Math.floor(getYaw());
vsin[n] = -Math.sin(yaw/180*Math.PI);
vcos[n] = Math.cos(yaw/180*Math.PI);
if(getTile(v3x[n]+3*vsin[n], v3y[n], v3z[n]+3*vcos[n])!=7){
setTile(v3x[n]+3*vsin[n], v3y[n]+1, v3z[n]+3*vcos[n], getTile(v3x[n]+3*vsin[n], v3y[n], v3z[n]+3*vcos[n]), Level.getData(v3x[n]+3*vsin[n], v3y[n], v3z[n]+3*vcos[n]));
setTile(v3x[n]+3*vsin[n], v3y[n], v3z[n]+3*vcos[n], 0);
}
v3b[n] = 4;
v3[n] = true;
v3a[n] = 300;
skillCool(ESP.getUser(), 3);
}
if(i==305&&Cool.isFinished(v4a[n])){
ESP.heal(vector[n]);
ESP.sbm("Shock", true);
vx[n] = Player.getX();
vy[n] = Player.getY()-2;
vz[n] = Player.getZ();
for(var nn=-1;nn<2;nn++){
setTile(vx[n]-2, vy[n]+2, vz[n]+nn, 20);
setTile(vx[n]+2, vy[n]+2, vz[n]+nn, 20);
setTile(vx[n]+nn, vy[n]+2, vz[n]+2, 20);
setTile(vx[n]+nn, vy[n]+2, vz[n]-2, 20);
}
v4b[n] = [];
var p2x, p2y, p2z;
for each(var e in Entity.getAll()){
p2x = Math.abs(Player.getX()-Entity.getX(e));
p2y = Math.abs(Player.getY()-Entity.getY(e));
p2z = Math.abs(Player.getZ()-Entity.getZ(e));
if(p2x<=30&&p2y<=30&&p2z<=30&&vector[n]!=e&&Entity.getEntityTypeId(e)<64){
Entity.setHealth(e, Entity.getHealth(e)-10);
v4b[n].push(e);
}
}
v4[n] = true;
v4a[n] = 1800;
skillCool(ESP.getUser(), 4);
}
break;
}}}
if(tensor[0]!=null){
for(var n=0;n<tensor.length;n++){
if(tensor[n]==ESP.getUser()){
if(i==302){
if(Cool.isFinished(te1a[n])){
teleport(ESP.getUser(), x, y+3, z);
te1[n] = true;
te1a[n] = 150;
skillCool(ESP.getUser(), 1);
}
else if(te1a[n]>105){
teleport(ESP.getUser(), x, y+3, z);
}
}
if(i==303&&Cool.isFinished(te2a[n])){
te2x[n] = Player.getX();
te2y[n] = Player.getY()-2;
te2z[n] = Player.getZ();
arroundMobHealthDown(ESP.getUser(), 10, 5);
ESP.antiLack(5);
explode(te2x[n]+5, te2y[n]+1.2, te2z[n]+5, 2.5);
te2[n] = true;
te2a[n] = 300;
skillCool(ESP.getUser(), 2);
}
if(i==305&&Cool.isFinished(te4a[n])){
ESP.heal(tensor[n]);
ESP.sbm("Tensor Distortion", true);
tex[n] = [];
tey[n] = [];
tez[n] = [];
te4b[n] = [];
var p2x, p2y, p2z;
for each(var e in Entity.getAll()){
p2x = Math.abs(Player.getX()-Entity.getX(e));
p2y = Math.abs(Player.getY()-Entity.getY(e));
p2z = Math.abs(Player.getZ()-Entity.getZ(e));
if(p2x<=30&&p2y<=30&&p2z<=30&&tensor[n]!=e&&Entity.getEntityTypeId(e)<64){
Entity.setHealth(e, Entity.getHealth(e)-5);
tex[n].push(Entity.getX(e));
tey[n].push(Entity.getY(e)+12);
tez[n].push(Entity.getZ(e));
teleport(e, Entity.getX(e), Entity.getY(e)+9, Entity.getZ(e));
setTile(Entity.getX(e), Entity.getY(e)+12, Entity.getZ(e), 30);
te4b[n].push(e);
}
}
te4[n] = true;
te4a[n] = 1800;
skillCool(ESP.getUser(), 4);
}
break;
}}}
if(ameca[0]!=null){
for(var n=0;n<ameca.length;n++){
if(ameca[n]==ESP.getUser()){
if(i==302&&Cool.isFinished(ame1a[n])){
px = Player.getX();
py = y;
pz = Player.getZ();
yaw = Math.floor(getYaw());
sin = -Math.sin(yaw/180*Math.PI);
cos = Math.cos(yaw/180*Math.PI);
setTile(px+2*sin, y+2, pz+2*cos, 247);
setTile(px+3*sin, y+2, pz+3*cos, 247);
setTile(px+4*sin, y+2, pz+4*cos, 247);
ame1[n] = true;
ame1a[n] = 150;
skillCool(ESP.getUser(), 1);
}
if(i==303&&Cool.isFinished(ame2a[n])){
ame2x[n] = Player.getX();
ame2y[n] = Player.getY()-2;
ame2z[n] = Player.getZ();
setTile(ame2x[n]+7, ame2y[n]+3, ame2z[n]+7, 46);
setTile(ame2x[n]+7, ame2y[n]+3, ame2z[n]-7, 46);
setTile(ame2x[n]-7, ame2y[n]+3, ame2z[n]+7, 46);
setTile(ame2x[n]-7, ame2y[n]+3, ame2z[n]-7, 46);
ESP.antiLack(90);
explode(ame2x[n]+7, ame2y[n]+3, ame2z[n]+7, 0.7);
explode(ame2x[n]+7, ame2y[n]+3, ame2z[n]-7, 0.7);
explode(ame2x[n]-7, ame2y[n]+3, ame2z[n]+7, 0.7);
explode(ame2x[n]-7, ame2y[n]+3, ame2z[n]-7, 0.7);
setTile(ame2x[n]+7, ame2y[n]+4, ame2z[n]+7, 247);
setTile(ame2x[n]+7, ame2y[n]+4, ame2z[n]-7, 247);
setTile(ame2x[n]-7, ame2y[n]+4, ame2z[n]+7, 247);
setTile(ame2x[n]-7, ame2y[n]+4, ame2z[n]-7, 247);
ame2[n] = true;
ame2a[n] = 300;
skillCool(ESP.getUser(), 2);
}
if(i==304&&Cool.isFinished(ame3a[n])){
ame3[n] = true;
ame3a[n] = 300;
skillCool(ESP.getUser(), 3);
}
if(i==305&&Cool.isFinished(ame4a[n])){
ESP.heal(ameca[n]);
ESP.sbm("Remote Burst Attack", true);
amex[n] = [];
amey[n] = [];
amez[n] = [];
var p2x, p2y, p2z;
for each(var e in Entity.getAll()){
p2x = Math.abs(x-Entity.getX(e));
p2y = Math.abs((y+1)-Entity.getY(e));
p2z = Math.abs(z-Entity.getZ(e));
if(p2x<=25&&p2y<=25&&p2z<=25&&ameca[n]!=e&&Entity.getEntityTypeId(e)<64){
Entity.setHealth(e, Entity.getHealth(e)-4);
setTile(Entity.getX(e), Entity.getY(e)+2, Entity.getZ(e), 247);
amex[n].push(Entity.getX(e));
amey[n].push(Entity.getY(e));
amez[n].push(Entity.getZ(e));
}
}
ame4[n] = true;
ame4a[n] = 1800;
skillCool(ESP.getUser(), 4);
}
break;
}}}
if(seal[0]!=null){
for(var n=0;n<seal.length;n++){
if(seal[n]==ESP.getUser()){
if(i==302&&Cool.isFinished(sea1a[n])){
setTile(x+2, y+2, z-1, 20);
setTile(x+2, y+2, z, 20);
setTile(x+2, y+2, z+1, 20);
setTile(x-2, y+2, z-1, 20);
setTile(x-2, y+2, z, 20);
setTile(x-2, y+2, z+1, 20);
setTile(x+1, y+2, z+2, 20);
setTile(x, y+2, z+2, 20);
setTile(x-1, y+2, z+2, 20);
setTile(x+1, y+2, z-2, 20);
setTile(x, y+2, z-2, 20);
setTile(x-1, y+2, z-2, 20);
sea1[n] = true;
sea1a[n] = 150;
skillCool(ESP.getUser(), 1);
}
if(i==303&&Cool.isFinished(sea2a[n])){
for(var xx=x-1;xx<x+2;xx++){
for(var yy=y+1;yy<y+4;yy++){
for(var zz=z-1;zz<z+2;zz++){
setTile(xx, yy, z+2, 3);
setTile(xx, yy, z-2, 3);
setTile(x+2, yy, zz, 3);
setTile(x-2, yy, zz, 3);
setTile(xx, y+4, zz, 3);
}}}
setTile(x, y+3, z, 89);
sea2[n] = true;
sea2a= 300;
skillCool(ESP.getUser(), 2);
}
if(i==304){
if(Cool.isFinished(sea3a[n])&&Cool.isFalse(sea3b[n])){
for(var xx=x-1;xx<x+2;xx++){
for(var yy=y+1;yy<y+4;yy++){
for(var zz=z-1;zz<z+2;zz++){
setTile(xx, yy, z+2, 1);
setTile(xx, yy, z-2, 1);
setTile(x+2, yy, zz, 1);
setTile(x-2, yy, zz, 1);
setTile(xx, y+4, zz, 1);
}}}
setTile(x, y+3, z, 89);
sea3x[n] = x;
sea3y[n] = y;
sea3z[n] = z;
sea3b[n] = true;
sea3[n] = true;
sea3a[n] = 300;
skillCool(ESP.getUser(), 3);
}
else if(sea3b[n]){
explode(sea3x[n]+0.5, sea3y[n]+2.5, sea3z[n]+0.5, 3);
sea3b[n] = false;
}
}
break;
}}}
if(angel[0]!=null){
for(var n=0;n<angel.length;n++){
if(angel[n]==ESP.getUser()){
if(i==302&&Cool.isFinished(an1a[n])){
px = Player.getX();
py = y;
pz = Player.getZ();
yaw = Math.floor(getYaw());
sin = -Math.sin(yaw/180*Math.PI);
cos = Math.cos(yaw/180*Math.PI);
for(var gun=3;gun<20;gun++)
setTile(px+gun*sin, y+2, pz+gun*cos, 155);
an1[n] = true;
an1a[n] = 150;
skillCool(ESP.getUser(), 1);
}
if(i==303&&Cool.isFinished(an2a[n])){
an2[n] = true;
an2a[n] = 300;
skillCool(ESP.getUser(), 2);
}
if(i==304&&Cool.isFinished(an3a[n])){
px = Player.getX();
py = y;
pz = Player.getZ();
yaw = Math.floor(getYaw()+90);
sin = -Math.sin(yaw/180*Math.PI);
cos = Math.cos(yaw/180*Math.PI);
for(var gun=3;gun<15;gun++){
setTile(px+gun*sin, y+2, pz+gun*cos, 155);
setTile(px-gun*sin, y+2, pz-gun*cos, 155);
}
an3[n] = true;
an3a[n] = 300;
skillCool(ESP.getUser(), 3);
}
if(i==305&&Cool.isFinished(an4a[n])){
ESP.heal(angel[n]);
ESP.sbm("Genesis", true);
anx[n] = Player.getX();
any[n] = Player.getY()-2;
anz[n] = Player.getZ();
for(var yy=any[n]+9;yy<any[n]+11;yy++){
setTile(anx[n]+7, yy, anz[n]+7, 155);
setTile(anx[n]+7, yy, anz[n], 155);
setTile(anx[n]+7, yy, anz[n]-7, 155);
setTile(anx[n], yy, anz[n]+7, 155);
setTile(anx[n], yy, anz[n]-7, 155);
setTile(anx[n]-7, yy, anz[n]+7, 155);
setTile(anx[n]-7, yy, anz[n], 155);
setTile(anx[n]-7, yy, anz[n]-7, 155);
}
for(var xx=anx[n]-2;xx<anx[n]+3;xx++)
for(var zz=anz[n]-2;zz<anz[n]+3;zz++)
setTile(xx, any[n]+1, zz, 30);
for(var xx=anx[n]-1;xx<anx[n]+2;xx++)
for(var zz=anz[n]-1;zz<anz[n]+2;zz++)
setTile(xx, any[n]+1, zz, 0)
arroundMobHealthDown(ESP.getUser(), 25, 7);
an4[n] = true;
an4a[n] = 1800;
skillCool(ESP.getUser(), 4);
}
break;
}}}
if(white[0]!=null){
for(var n=0;n<white.length;n++){
if(white[n]==ESP.getUser()){
if(i==302&&Cool.isFinished(wh1a[n])){
teleport(ESP.getUser(), x+(x-Player.getX()), y+3, z+(z-Player.getZ()));
wh1[n] = true;
wh1a[n] = 150;
skillCool(ESP.getUser(), 1);
}
if(i==303&&Cool.isFinished(wh2a[n])){
wh2[n] = true;
wh2a[n] = 300;
skillCool(ESP.getUser(), 2);
}
if(i==305&&Cool.isFinished(wh4a[n])){
ESP.sbm("Human Energy", true);
ESP.heal(white[n]);
whx[n] = Player.getX();
why[n] = Player.getY()-2;
whz[n] = Player.getZ();
yaw = Math.floor(getYaw());
sin = -Math.sin(yaw/180*Math.PI);
cos = Math.cos(yaw/180*Math.PI);
if(Math.abs(sin)>Math.abs(cos)){
}
for(var xx=whx[n]-1;xx<whx[n]+2;xx++)
for(var yy=why[n]+1;yy<why[n]+7;yy++)
for(var zz=whz[n]-1;zz<whz[n]+2;zz++)
setTile(xx, yy, zz, 155);
setTile(whx[n], why[n]+1, whz[n], 89);
setTile(whx[n], why[n]+2, whz[n], 89);
if(Math.abs(sin)>Math.abs(cos)){
setTile(whx[n], why[n]+7, whz[n]+1, 155);
setTile(whx[n], why[n]+7, whz[n]-1, 155);
setTile(whx[n], why[n]+6, whz[n]+2, 155);
setTile(whx[n], why[n]+6, whz[n]+3, 155);
setTile(whx[n], why[n]+5, whz[n]+3, 155);
setTile(whx[n], why[n]+4, whz[n]+3, 155);
setTile(whx[n], why[n]+3, whz[n]+3, 155);
setTile(whx[n], why[n]+6, whz[n]-2, 155);
setTile(whx[n], why[n]+6, whz[n]-3, 155);
setTile(whx[n], why[n]+6, whz[n]-3, 155);
setTile(whx[n], why[n]+5, whz[n]-3, 155);
setTile(whx[n], why[n]+4, whz[n]-3, 155);
setTile(whx[n], why[n]+3, whz[n]-3, 155);
}
if(Math.abs(sin)<Math.abs(cos)){
setTile(whx[n]+1, why[n]+7, whz[n], 155);
setTile(whx[n]-1, why[n]+7, whz[n], 155);
setTile(whx[n]+2, why[n]+6, whz[n], 155);
setTile(whx[n]+3, why[n]+6, whz[n], 155);
setTile(whx[n]+3, why[n]+5, whz[n], 155);
setTile(whx[n]+3, why[n]+4, whz[n], 155);
setTile(whx[n]+3, why[n]+3, whz[n], 155);
setTile(whx[n]-2, why[n]+6, whz[n], 155);
setTile(whx[n]-3, why[n]+6, whz[n], 155);
setTile(whx[n]-3, why[n]+5, whz[n], 155);
setTile(whx[n]-3, why[n]+4, whz[n], 155);
setTile(whx[n]-3, why[n]+3, whz[n], 155);
}
setTile(whx[n], why[n]+7, whz[n], 155);
setTile(whx[n], why[n]+8, whz[n], 89);
wh4[n] = true;
wh4a[n] = 1800;
skillCool(ESP.getUser(), 4);
}
break;
}}}
if(world[0]!=null){
for(var n=0;n<world.length;n++){
if(world[n]==ESP.getUser()){
if(i==302&&Cool.isFinished(wo1a[n])){
teleport(ESP.getUser(), x+(x-Player.getX()), y+3, z+(z-Player.getZ()));
wo1[n] = true;
wo1a[n] = 150;
skillCool(ESP.getUser(), 1);
}
if(i==303){
if(Cool.isFinished(wo2a[n])){
ESP.setBlock(x, y, z, s);
wo2[n] = true;
wo2a[n] = 300;
skillCool(ESP.getUser(), 2);
}
if(wo2a[n]>150){
ESP.setBlock(x, y, z, s);
}
}
if(i==304){
if(Cool.isFinished(wo3a[n])&&Cool.isFalse(wo3b[n])){
var wo3c = ESP.random(5);
for(var xx=x-2;xx<x+3;xx++)
for(var yy=y+1;yy<y+4;yy++)
for(var zz=z-2;zz<z+3;zz++)
setTile(xx, yy, zz, wo3c+1);
for(var xx=x-1;xx<x+2;xx++)
for(var yy=y+1;yy<y+4;yy++)
for(var zz=z-1;zz<z+2;zz++)
setTile(xx, yy, zz, 0);
wo3x[n] = x;
wo3y[n] = y;
wo3z[n] = z;
wo3b[n] = true;
wo3[n] = true;
wo3a[n] = 300;
skillCool(ESP.getUser(), 3);
}
else if(wo3b[n]){
setTile(wo3x[n], wo3y[n]+2, wo3z[n], 46);
ESP.antiLack(60);
explode(wo3x[n]+0.5, wo3y[n]+2.9, wo3z[n]+0.5, 0.5);
wo3b[n] = false;
}
}
if(i==305&Cool.isFinished(wo4a[n])){
if(Cool.isFinished(wo4b[n])){
wox[n] = [];
woy[n] = [];
woz[n] = [];
wox[n][1] = x;
woy[n][1] = y;
woz[n][1] = z;
setTile(x, y, z, 89);
wo4b[n] = 1;
}
else if(wo4b[n]==1){
wox[n][2] = x;
woy[n][2] = y;
woz[n][2] = z;
if(ESP.getDisBetwPoints(x, y, z, n)<=50){
setTile(x, y, z, 89);
wo4b[n] = 2;
}
else{
wo4c = [16, b, bd];
wo4d = [x, y, z];
setTile(x, y, z, 248);
}
}
else if(wo4b[n]==2){
wox[n][0] = Player.getX();
woy[n][0] = Player.getY()-2;
woz[n][0] = Player.getZ();
setTile(wox[n][0]+1, woy[n][0]+1, woz[n][0]+2, 1);
setTile(wox[n][0], woy[n][0]+1, woz[n][0]+2, 3);
setTile(wox[n][0]-1, woy[n][0]+1, woz[n][0]+2, 12);
setTile(wox[n][0]+1, woy[n][0]+1, woz[n][0]-2, 45);
setTile(wox[n][0], woy[n][0]+1, woz[n][0]-2, 98, 2);
setTile(wox[n][0]-1, woy[n][0]+1, woz[n][0]-2, 5);
setTile(wox[n][0]+2, woy[n][0]+1, woz[n][0]+1, 35);
setTile(wox[n][0]+2, woy[n][0]+1, woz[n][0], 35, 5);
setTile(wox[n][0]+2, woy[n][0]+1, woz[n][0]-1, 17);
setTile(wox[n][0]-2, woy[n][0]+1, woz[n][0]+1, 18);
setTile(wox[n][0]-2, woy[n][0]+1, woz[n][0], 57);
setTile(wox[n][0]-2, woy[n][0]+1, woz[n][0]-1, 16);
wo4b[n] = 3;
}
else if(wo4b[n]==3&&b!=7){
ESP.heal(world[n]);
ESP.sbm("World Edit : /set", true);
setTile(wox[n][0]+1, woy[n][0]+1, woz[n][0]+2, 0);
setTile(wox[n][0], woy[n][0]+1, woz[n][0]+2, 0);
setTile(wox[n][0]-1, woy[n][0]+1, woz[n][0]+2, 0);
setTile(wox[n][0]+1, woy[n][0]+1, woz[n][0]-2, 0);
setTile(wox[n][0], woy[n][0]+1, woz[n][0]-2, 0);
setTile(wox[n][0]-1, woy[n][0]+1, woz[n][0]-2, 0);
setTile(wox[n][0]+2, woy[n][0]+1, woz[n][0]+1, 0);
setTile(wox[n][0]+2, woy[n][0]+1, woz[n][0], 0);
setTile(wox[n][0]+2, woy[n][0]+1, woz[n][0]-1, 0);
setTile(wox[n][0]-2, woy[n][0]+1, woz[n][0]+1, 0);
setTile(wox[n][0]-2, woy[n][0]+1, woz[n][0], 0);
setTile(wox[n][0]-2, woy[n][0]+1, woz[n][0]-1, 0);
wox[n][3] = Math.min(wox[n][1], wox[n][2]);
woy[n][3] = Math.min(woy[n][1], woy[n][2]);
woz[n][3] = Math.min(woz[n][1], woz[n][2]);
wox[n][4] = Math.max(wox[n][1], wox[n][2]);
woy[n][4] = Math.max(woy[n][1], woy[n][2]);
woz[n][4] = Math.max(woz[n][1], woz[n][2]);
for(var xx=wox[n][3];xx<wox[n][4]+1;xx++)
for(var yy=woy[n][3];yy<woy[n][4]+1;yy++)
for(var zz=woz[n][3];zz<woz[n][4]+1;zz++)
if(getTile(xx, yy, zz)!=7){
setTile(xx, yy, zz, b, bd);
}
wo4b[n] = 0;
wo4[n] = true;
wo4a[n] = 1800;
skillCool(ESP.getUser(), 4);
}
}
break;
}}}


//Hidden Ability
if(h.rrr==ESP.getUser()){
if(i==302&&h.r1==0){
px = Player.getX();
pz = Player.getZ();
yaw = Math.floor(getYaw());
sin = -Math.sin(yaw/180*Math.PI);
cos = Math.cos(yaw/180*Math.PI);
for(var rrr1b=6;rrr1b<14;rrr1b++)
explode(px+rrr1b*sin, y+2, pz+rrr1b*cos, 1);
for(var rrr1b=2;rrr1b<20;rrr1b++){
setTile(px+rrr1b*sin, y, pz+rrr1b*cos, 87);
setTile(px+rrr1b*sin+1, y, pz+rrr1b*cos+1, 87);
setTile(px+rrr1b*sin, y+1, pz+rrr1b*cos, 51);
setTile(px+rrr1b*sin+1, y+1, pz+rrr1b*cos+1, 51);
}
setTile(x+2, y+1, z+2, 51);
setTile(x+2, y+1, z+1, 51);
setTile(x+2, y+1, z, 51);
setTile(x+2, y+1, z-1, 51);
setTile(x+2, y+1, z-2, 51);
setTile(x-2, y+1, z+2, 51);
setTile(x-2, y+1, z+1, 51);
setTile(x-2, y+1, z, 51);
setTile(x-2, y+1, z-1, 51);
setTile(x-2, y+1, z-2, 51);
setTile(x+1, y+1, z+2, 51);
setTile(x, y+1, z+2, 51);
setTile(x-1, y+1, z+2, 51);
setTile(x+1, y+1, z-2, 51);
setTile(x, y+1, z-2, 51);
setTile(x-1, y+1, z-2, 51);
h.r1 = 150;
skillCool(ESP.getUser(), 1);
}
if(i==303&&h.r2==0){
for(var xx=x-1;xx<x+2;xx++){
for(var yy=y-5;yy<y+1;yy++)
for(var zz=z-1;zz<z+2;zz++){
setTile(xx, yy, zz, 0);
setTile(xx, y-6, zz, 30);
}}
Level.spawnMob(x+0.5, y+9, z+0.5, 65);
h.r2 = 300;
skillCool(ESP.getUser(), 2);
}
if(i==304&&h.r3==0){
for(var xx=x-2;xx<x+3;xx++)
for(var zz=z-2;zz<z+3;zz++)
Level.spawnMob(xx+0.5,y+12,0.5+zz, 80);
for(var xx=x-3;xx<x+4;xx++)
for(var zz=z-3;zz<z+4;zz++)
Level.spawnMob(xx+0.5,y+18,0.5+zz, 80);
for(var xx=x-4;xx<x+5;xx++)
for(var zz=z-4;zz<z+5;zz++)
Level.spawnMob(xx+0.5,y+27,0.5+zz, 80);
h.r3 = 300;
skillCool(ESP.getUser(), 3);
}
if(i==305&&h.r4==0){
ESP.heal(h.rrr);
ESP.sbm("Bombs", true);
for(var xx=x-2;xx<x+3;xx++)
for(var zz=z-2;zz<z+3;zz++)
setTile(xx, y+1, zz, 46);
px=Math.floor(x);
pz=Math.floor(z);
ESP.antiLack(90);
setTile(px, y+9, pz, 46);
explode(px+0.5, y+9, pz+0.5, 0.5);
h.rx = x;
h.ry = y;
h.rz = z;
h.r4 = 1800;
skillCool(ESP.getUser(), 4);
}

}

}


//Portal
if(b==22){
if(mp==false){
if(Level.getSignText(x, y+1, z, 1)=="Go to"&&Level.getSignText(x, y+1, z, 2)=="Elsa"){
teleport(Player.getEntity(), 248, 51, 16);
preventDefault();
}
if(Level.getSignText(x, y+1, z, 1)=="Return to"&&Level.getSignText(x, y+1, z, 2)=="Village"){
teleport(Player.getEntity(), 152, 51, 26);
preventDefault();
}
}
if(Level.getSignText(x, y+1, z, 1)=="Move to"&&Level.getSignText(x, y+1, z, 2)=="Upside"){
teleport(Player.getEntity(), 175, 86, 73);
preventDefault();
}
if(Level.getSignText(x, y+1, z, 1)=="Return"){
ESP.send(Player.getEntity());
preventDefault();
}
if(Level.getSignText(x, y+1, z, 1)=="Battle"&&Level.getSignText(x, y+1, z, 2)=="Field 5"){
teleport(Player.getEntity(), 253, 22, 144);
preventDefault();
}

}

//hidden portal
if(mp3&&!mp){
if(x==115&&y==50&&z==45){
teleport(Player.getEntity(), 98, 51, 136);
}
if(x==110&&y==51&&z==15){
teleport(Player.getEntity(), 111, 66.5, 13);
}
if(x==165&&y==52&&z==35){
teleport(Player.getEntity(), 173, 75, 35);
}

}

//Hidden Gate
if(b==98&&((x==254&&y==19&&z==157)||(x==248&&y==16&&z==157))){
if(getTile(250, 19, 157)==98){
for(var xx=248;xx<253;xx++)
setTile(xx, 19, 157, 0);
setTile(253, 19, 157, 44, 5);
}
else{
for(var xx=248;xx<254;xx++)
setTile(xx, 19, 157, 98);
}
}



//passive
if(passOnoff){
var pe = ESP.getUser();
if(getIndex(titan, pe)!=-1&&(b==92||b==126)&&Entity.getHealth(titan[n])<=25){
ESP.setHealth(titan[n], Entity.getHealth(titan[n])+1);
}
if(getIndex(bind, pe)!=-1&&b==30){
Level.destroyBlock(x, y, z, true);
}
if(getIndex(ore, pe)!=-1&&(b==1||b==4||b==24)){
Level.destroyBlock(x, y, z, true);
}
var n = getIndex(time, pe);
if(ESP.getUser()==time[n]&&ti0a[n]){
teleport(time[n], x, y+3, z);
}

}


//0.4.3
//select
if(b==246&&Level.getSignText(x, y+1, z, 1)=="Fire"&&Level.getSignText(x, y+1, z, 2)=="Master"){
ofire = 1;
ESP.sbm("fire");
Level.dropItem(x+0.5, y+1.1, z+0.5, 0.5, 268, 1, 0);
Level.dropItem(x+0.5, y+1.1, z+0.5, 0.5, 269, 1, 0);
Level.dropItem(x+0.5, y+1.1, z+0.5, 0.5, 270, 1, 0);
Level.dropItem(x+0.5, y+1.1, z+0.5, 0.5, 271, 1, 0);
preventDefault();
}
if(b==22&&Level.getSignText(x, y+1, z, 1)=="Water"&&Level.getSignText(x, y+1, z, 2)=="Controller"){
owater = 1;
ESP.sbm("water");
Level.dropItem(x+0.5, y+1.1, z+0.5, 0.5, 272, 1, 0);
Level.dropItem(x+0.5, y+1.1, z+0.5, 0.5, 273, 1, 0);
Level.dropItem(x+0.5, y+1.1, z+0.5, 0.5, 274, 1, 0);
Level.dropItem(x+0.5, y+1.1, z+0.5, 0.5, 275, 1, 0);
preventDefault();
}
if(b==17&&bd==1&&Level.getSignText(x, y+1, z, 1)=="Nature"&&Level.getSignText(x, y+1, z, 2)=="Guardian"){
otree = 1;
ESP.sbm("tree");
Level.dropItem(x+0.5, y+1.1, z+0.5, 0.5, 280, 1, 0);
Level.dropItem(x+0.5, y+1.1, z+0.5, 0.5, 281, 1, 0);
Level.dropItem(x+0.5, y+1.1, z+0.5, 0.5, 288, 1, 0);
Level.dropItem(x+0.5, y+1.1, z+0.5, 0.5, 289, 1, 0);
preventDefault();
}
if(b==46&&Level.getSignText(x, y+1, z, 1)=="I am"&&Level.getSignText(x, y+1, z, 2)=="Creeper"){
ocreeper = 1;
ESP.sbm("creeper");
Level.dropItem(x+0.5, y+1.1, z+0.5, 0.5, 298, 1, 0);
Level.dropItem(x+0.5, y+1.1, z+0.5, 0.5, 299, 1, 0);
Level.dropItem(x+0.5, y+1.1, z+0.5, 0.5, 300, 1, 0);
Level.dropItem(x+0.5, y+1.1, z+0.5, 0.5, 301, 1, 0);
preventDefault();
}
if(b==42&&Level.getSignText(x, y+1, z, 1)=="Earth"&&Level.getSignText(x, y+1, z, 2)=="Bander"){
osoil = 1;
ESP.sbm("soil");
Level.dropItem(x+0.5, y+1.1, z+0.5, 0.5, 290, 1, 0);
Level.dropItem(x+0.5, y+1.1, z+0.5, 0.5, 291, 1, 0);
Level.dropItem(x+0.5, y+1.1, z+0.5, 0.5, 292, 1, 0);
Level.dropItem(x+0.5, y+1.1, z+0.5, 0.5, 294, 1, 0);
preventDefault();
}
if(b==14&&Level.getSignText(x, y+1, z, 1)=="The"&&Level.getSignText(x, y+1, z, 2)=="Summoner"){
osummon = 1;
Level.dropItem(x+0.5, y+1.1, z+0.5, 0.5, 314, 1, 0);
Level.dropItem(x+0.5, y+1.1, z+0.5, 0.5, 315, 1, 0);
Level.dropItem(x+0.5, y+1.1, z+0.5, 0.5, 316, 1, 0);
Level.dropItem(x+0.5, y+1.1, z+0.5, 0.5, 317, 1, 0);
preventDefault();
ESP.sbm("summon");
}
if(b==155&&bd==1&&Level.getSignText(x, y+1, z, 1)=="The"&&Level.getSignText(x, y+1, z, 2)=="Luminous"){
olight = 1;
ESP.sbm("light");
Level.dropItem(x+0.5, y+1.1, z+0.5, 0.5, 331, 1, 0);
Level.dropItem(x+0.5, y+1.1, z+0.5, 0.5, 332, 1, 0);
Level.dropItem(x+0.5, y+1.1, z+0.5, 0.5, 334, 1, 0);
Level.dropItem(x+0.5, y+1.1, z+0.5, 0.5, 336, 1, 0);
preventDefault();
}
if(b==173&&Level.getSignText(x, y+1, z, 1)=="The"&&Level.getSignText(x, y+1, z, 2)=="Darkness"){
odark = 1;
ESP.sbm("dark");
Level.dropItem(x+0.5, y+1.1, z+0.5, 0.5, 363, 1, 0);
Level.dropItem(x+0.5, y+1.1, z+0.5, 0.5, 364, 1, 0);
Level.dropItem(x+0.5, y+1.1, z+0.5, 0.5, 365, 1, 0);
Level.dropItem(x+0.5, y+1.1, z+0.5, 0.5, 366, 1, 0);
preventDefault();
}
if(b==56&&Level.getSignText(x, y+1, z, 1)=="The"&&Level.getSignText(x, y+1, z, 2)=="Freezer"){
oice = 1;
ESP.sbm("ice");
Level.dropItem(x+0.5, y+1.1, z+0.5, 0.5, 318, 1, 0);
Level.dropItem(x+0.5, y+1.1, z+0.5, 0.5, 296, 1, 0);
Level.dropItem(x+0.5, y+1.1, z+0.5, 0.5, 339, 1, 0);
Level.dropItem(x+0.5, y+1.1, z+0.5, 0.5, 348, 1, 0);
preventDefault();
}
if(!townCheck(x, z)){
//fire
if(ofire==1){
if(i==268&&of1==0){
for(var xx=x-1;xx<x+2;xx++)
for(var zz=z-1;zz<z+2;zz++)
setTile(xx, y+1, zz, 51);
setTile(x, y+1, z+2, 51);
setTile(x, y+1, z-2, 51);
setTile(x-2, y+1, z, 51);
setTile(x+2, y+1, z, 51);
of1 = 150;
}
if(i==269&&of2==0){
for(var xx=x-1;xx<x+2;xx++)
for(var yy=y-2;yy<y+1;yy++)
for(var zz=z-1;zz<z+2;zz++)
setTile(xx, yy, zz, 51);
of2x = x;
of2y = y;
of2z = z;
of2 = 300;
}
if(i==270&&of3==0){
for(var xx=x-2;xx<x+3;xx++){
setTile(xx, y, z+2, 87);
setTile(xx, y, z-2, 87);
setTile(xx, y+1, z+2, 51);
setTile(xx, y+1, z-2, 51);
}
for(var zz=z-1;zz<z+2;zz++){
setTile(x-2, y, zz, 87);
setTile(x+2, y, zz, 87);
setTile(x-2, y+1, zz, 51);
setTile(x+2, y+1, zz, 51);
}
of3 = 300;
}
if(i==271&&of4==0){
Player.setHealth(30);
setTile(x+4, y, z+4, 87);
setTile(x+4, y, z+2, 87);
setTile(x+4, y, z, 87);
setTile(x+4, y, z-2, 87);
setTile(x+4, y, z-4, 87);
setTile(x+2, y, z+4, 87);
setTile(x+2, y, z+2, 87);
setTile(x+2, y, z, 87);
setTile(x+2, y, z-2, 87);
setTile(x+2, y, z-4, 87);
setTile(x, y, z+4, 87);
setTile(x, y, z+2, 87);
setTile(x, y, z, 89);
setTile(x, y, z-2, 87);
setTile(x, y, z-4, 87);
setTile(x-4, y, z+4, 87);
setTile(x-4, y, z+2, 87);
setTile(x-4, y, z, 87);
setTile(x-4, y, z-2, 87);
setTile(x-4, y, z-4, 87);
setTile(x-2, y, z+4, 87);
setTile(x-2, y, z+2, 87);
setTile(x-2, y, z, 87);
setTile(x-2, y, z-2, 87);
setTile(x-2, y, z-4, 87);
setTile(x+4, y+1, z+4, 51);
setTile(x+4, y+1, z+2, 51);
setTile(x+4, y+1, z, 51);
setTile(x+4, y+1, z-2, 51);
setTile(x+4, y+1, z-4, 51);
setTile(x+2, y+1, z+4, 51);
setTile(x+2, y+1, z+2, 51);
setTile(x+2, y+1, z, 51);
setTile(x+2, y+1, z-2, 51);
setTile(x+2, y+1, z-4, 51);
setTile(x, y+1, z+4, 51);
setTile(x, y+1, z+2, 51);
setTile(x, y+1, z-2, 51);
setTile(x, y+1, z-4, 51);
setTile(x-4, y+1, z+4, 51);
setTile(x-4, y+1, z+2, 51);
setTile(x-4, y+1, z, 51);
setTile(x-4, y+1, z-2, 51);
setTile(x-4, y+1, z-4, 51);
setTile(x-2, y+1, z+4, 51);
setTile(x-2, y+1, z+2, 51);
setTile(x-2, y+1, z, 51);
setTile(x-2, y+1, z-2, 51);
setTile(x-2, y+1, z-4, 51);
setTile(x+6, y+1, z+4, 51);
setTile(x+6, y+1, z, 51);
setTile(x+6, y+1, z-4, 51);
setTile(x-6, y+1, z+4, 51);
setTile(x-6, y+1, z, 51);
setTile(x-6, y+1, z-4, 51);
setTile(x+4, y+1, z+6, 51);
setTile(x, y+1, z+6, 51);
setTile(x-4, y+1, z+6, 51);
setTile(x+4, y+1, z-6, 51);
setTile(x, y+1, z-6, 51);
setTile(x-4, y+1, z-6, 51);
setTile(x+7, y, z+7, 11);
setTile(x+7, y, z-7, 11);
setTile(x-7, y, z+7, 11);
setTile(x-7, y, z-7, 11);
setTile(x+8, y, z, 11);
setTile(x, y, z+8, 11);
setTile(x-8, y, z, 11);
setTile(x, y, z-8, 11);
ofx = x;
ofy = y;
ofz = z;
of4 = 1800;
}
}
//water
if(owater==1){
if(i==272&&ow1==0){
setTile(x, y+1, z, 8);
ow1x = x;
ow1y = y;
ow1z = z;
ow1 = 150;
}
if(i==273&&ow2==0){
for(var xx=x-2;xx<x+3;xx++)
for(var zz=z-2;zz<z+3;zz++)
setTile(xx, y, zz, 0);
setTile(x+2, y, z+2, 8);
setTile(x+2, y, z-2, 8);
setTile(x-2, y, z+2, 8);
setTile(x-2, y, z-2, 8);
ow2x = x;
ow2y = y;
ow2z = z;
ow2 = 300;
}
if(i==274&&ow3==0){
for(var xx=x-2;xx<x+3;xx++){
setTile(xx, y+1, z+2, 79);
setTile(xx, y+1, z-2, 79);
}
for(var zz=z-1;zz<z+2;zz++){
setTile(x-2, y+1, zz, 51);
setTile(x+2, y+1, zz, 51);
}
setTile(x+3, y+1, z, 8);
setTile(x-3, y+1, z, 8);
setTile(x, y+1, z+3, 8);
setTile(x, y+1, z-3, 8);
ow3x = x;
ow3y = y;
ow3z = z;
ow3 = 300;
}
if(i==275&&ow4==0){
Player.setHealth(30);
setTile(x+9, y+10, z+9, 8);
setTile(x+9, y+10, z-9, 8);
setTile(x-9, y+10, z+9, 8);
setTile(x-9, y+10, z-9, 8);
setTile(x+9, y+10, z, 8);
setTile(x-9, y+10, z, 8);
setTile(x, y+10, z+9, 8);
setTile(x, y+10, z-9, 8);
setTile(x+1, y+1, z, 79);
setTile(x-1, y+1, z, 79);
setTile(x, y+1, z+1, 79);
setTile(x, y+1, z-1, 79);
owx = x;
owy = y;
owz = z;
ow4 = 1800;
}
}
//otree
if(otree==1){
if(i==280&&ot1==0){
setTile(x+1, y+1, z+1, 17);
setTile(x+1, y+1, z-1, 17);
setTile(x, y+1, z, 17);
setTile(x-1, y+1, z+1, 17);
setTile(x-1, y+1, z-1, 17);
setTile(x+1, y+2, z+1, 18);
setTile(x+1, y+2, z-1, 18);
setTile(x, y+2, z, 18);
setTile(x-1, y+2, z+1, 18);
setTile(x-1, y+2, z-1, 18);
setTile(x, y+3, z, 51);
ot1 = 150;
}
if(i==281&&ot2==0){
for(var yy=y+1;yy<y+4;yy++){
setTile(x+2, yy, z+2, 17);
setTile(x+1, yy, z+2, 17);
setTile(x, yy, z+2, 17);
setTile(x-1, yy, z+2, 17);
setTile(x-2, yy, z+2, 17);
setTile(x+2, yy, z-2, 17);
setTile(x+1, yy, z-2, 17);
setTile(x, yy, z-2, 17);
setTile(x-1, yy, z-2, 17);
setTile(x-2, yy, z-2, 17);
setTile(x-2, yy, z+1, 17);
setTile(x-2, yy, z, 17);
setTile(x-2, yy, z-1, 17);
setTile(x+2, yy, z+1, 17);
setTile(x+2, yy, z, 17);
setTile(x+2, yy, z-1, 17);
}
for(var xx=x-1;xx<x+2;xx++)
for(var zz=z-1;zz<z+2;zz++)
setTile(xx, y+4, zz, 17);
setTile(x, y+1, z, 51);
ot2 = 300;
}
if(i==288&&ot3==0){
for(var yy=y+1;yy<y+7;yy++)
setTile(x, yy, z, 17);
setTile(x, y+7, z, 18);
for(var yy=y+6;yy<y+8;yy++){
setTile(x+1, yy, z, 18);
setTile(x, yy, z-1, 18);
setTile(x, yy, z+1, 18);
setTile(x-1, yy, z, 18);
}
for(var yy=y+4;yy<y+6;yy++){
setTile(x+1, yy, z+1, 18);
setTile(x+1, yy, z-1, 18);
setTile(x+1, yy, z, 18);
setTile(x-1, yy, z+1, 18);
setTile(x-1, yy, z-1, 18);
setTile(x-1, yy, z, 18);
setTile(x, yy, z+1, 18);
setTile(x, yy, z-1, 18);
setTile(x+2, yy, z+1, 18);
setTile(x+2, yy, z-1, 18);
setTile(x+2, yy, z, 18)
setTile(x-2, yy, z+1, 18);
setTile(x-2, yy, z-1, 18);
setTile(x-2, yy, z, 18);
setTile(x+1, yy, z+2, 18);
setTile(x-1, yy, z+2, 18);
setTile(x, yy, z+2, 18);
setTile(x+1, yy, z-2, 18);
setTile(x-1, yy, z-2, 18);
setTile(x, yy, z-2, 18);
}
ot3 = 300;
}
if(i==289&&ot4==0){
Player.setHealth(30);
for(var xx=x-2;xx<x+3;xx++)
for(var yy=y+1;yy<y+4;yy++)
for(var zz=z-2;zz<z+3;zz++)
setTile(xx, yy, zz, 17, 2);
autoRecover(x, y+4, z, 1, 17, 2);
Level.spawnMob(x, y+18, z, 65);
Level.spawnMob(x, y+35, z, 65);
ot4 = 1800;
}
}
//ocreeper
if(ocreeper==1){
if(i==298&&oc1==0){
ESP.antiLack(5);
explode(x,y,z, 4);
oc1 = 225;
}
if(i==299&&oc2==0){
Level.spawnMob(x, y+12, z, 65);
setTile(x, y+1, z, 46);
setTile(x, y+2, z, 46);
oc2 = 375;
}
if(i==300&&oc3==0){
ESP.antiLack(5);
explode(x+5,y,z+5, 3);
explode(x+5,y,z-5, 3);
explode(x+5,y,z, 3);
explode(x-5, y,z+5, 3);
explode(x-5,y,z-5, 3);
explode(x-5,y,z, 3);
explode(x,y,z+5, 3);
explode(x,y,z-5, 3);
oc3 = 375;
}
if(i==301&&oc4==0){
Player.setHealth(30);
ESP.antiLack(90);
explode(x+9,y,z+9, 5);
explode(x+9,y,z-9, 5);
explode(x-9,y,z+9, 5);
explode(x-9,y,z-9, 5);
Level.spawnMob(x, y+5, z, 65);
Level.spawnMob(x, y+10, z+3, 65);
Level.spawnMob(x+4, y+7, z, 65);
Level.spawnMob(x, y+15, z-7, 65);
Level.spawnMob(x-9, y+5, z, 65);
Level.spawnMob(x+6, y+17, z+3, 65);
Level.spawnMob(x-10, y+15, z-7, 65);
Level.spawnMob(x-5, y+15, z+5, 65);
Level.spawnMob(x, y+10, z-8, 65);
Level.spawnMob(x-5, y+7, z, 65);
Level.spawnMob(x, y+14, z+8, 65);
Level.spawnMob(x-10, y+9, z, 65);
Level.spawnMob(x+1, y+18, z+13, 65);
Level.spawnMob(x-2, y+13, z-6, 65);
ocx = x;
ocy = y;
ocz = z;
oc4 = 1800;
}
}
//osoil
if(osoil==1){
if(i==290&&os1==0){
for(var xx=x-1;xx<x+2;xx++){
for(var zz=z-1;zz<z+2;zz++){
setTile(xx, y, zz, 13);
setTile(xx, y-1, zz, 0);
setTile(xx, y-2, zz, 0);
setTile(xx, y+7, zz, 13);
setTile(xx, y+8, zz, 13);
}}
os1 = 150;
}
if(i==291&&os2==0){
for(var xx=x-1;xx<x+2;xx++)
for(var yy=y-3;yy<y+1;yy++)
for(var zz=z-1;zz<z+2;zz++)
setTile(xx, yy, zz, 0);
os2 = 300;
}
if(i==292&&os3==0){
setTile(x-1, y+1, z+2, 24);
setTile(x, y+1, z+2, 24);
setTile(x+1, y+1, z+2, 24);
setTile(x-1, y+2, z+2, 24);
setTile(x, y+2, z+2, 24);
setTile(x+1, y+2, z+2, 24);
setTile(x, y+3, z+2, 24);
setTile(x+1, y+3, z+2, 24);
setTile(x-1, y+3, z+2, 24);
setTile(x+2, y+1, z+1, 24);
setTile(x+2, y+1, z, 24);
setTile(x+2, y+1, z-1, 24);
setTile(x+2, y+2, z+1, 24);
setTile(x+2, y+2, z, 24);
setTile(x+2, y+2, z-1, 24);
setTile(x+2, y+3, z+1, 24);
setTile(x+2, y+3, z, 24);
setTile(x+2, y+3, z-1, 24);
setTile(x-2, y+1, z+1, 24);
setTile(x-2, y+1, z, 24);
setTile(x-2, y+1, z-1, 24);
setTile(x-2, y+2, z+1, 24);
setTile(x-2, y+2, z, 24);
setTile(x-2, y+2, z-1, 24);
setTile(x-2, y+3, z+1, 24);
setTile(x-2, y+3, z, 24);
setTile(x-2, y+3, z-1, 24);
setTile(x-1, y+1, z-2, 24);
setTile(x, y+1, z-2, 24);
setTile(x+1, y+1, z-2, 24);
setTile(x-1, y+2, z-2, 24);
setTile(x, y+2, z-2, 24);
setTile(x+1, y+2, z-2, 24);
setTile(x, y+3, z-2, 24);
setTile(x+1, y+3, z-2, 24);
setTile(x-1, y+3, z-2, 24);
setTile(x, y-3, z, 89);
setTile(x, y+4, z+1, 24);
setTile(x, y+4, z, 24);
setTile(x, y+4, z-1, 24);
setTile(x+1, y+4, z+1, 24);
setTile(x+1, y+4, z, 24);
setTile(x+1, y+4, z-1, 24);
setTile(x-1, y+4, z+1, 24);
setTile(x-1, y+4, z, 24);
setTile(x-1, y+4, z-1, 24);
setTile(x, y, z+1, 0);
setTile(x, y, z, 0);
setTile(x, y, z-1, 0);
setTile(x+1, y, z+1, 0);
setTile(x+1, y, z, 0);
setTile(x+1, y, z-1, 0);
setTile(x-1, y, z+1, 0);
setTile(x-1, y, z, 0);
setTile(x-1, y, z-1, 0);
setTile(x, y-1, z+1, 0);
setTile(x, y-1, z, 0);
setTile(x, y-1, z-1, 0);
setTile(x+1, y-1, z+1, 0);
setTile(x+1, y-1, z, 0);
setTile(x+1, y-1, z-1, 0);
setTile(x-1, y-1, z+1, 0);
setTile(x-1, y-1, z, 0);
setTile(x-1, y-1, z-1, 0);
setTile(x, y-2, z+1, 0);
setTile(x, y-2, z, 0);
setTile(x, y-2, z-1, 0);
setTile(x+1, y-2, z+1, 0);
setTile(x+1, y-2, z, 0);
setTile(x+1, y-2, z-1, 0);
setTile(x-1, y-2, z+1, 0);
setTile(x-1, y-2, z, 0);
setTile(x-1, y-2, z-1, 0);
setTile(x, y-1, z-2, 0);
setTile(x, y-1, z-3, 0);
setTile(x, y-1, z-4, 0);
setTile(x, y-1, z-5, 0);
setTile(x, y-1, z-6, 0);
setTile(x, y-1, z-7, 0);
setTile(x, y-2, z-2, 0);
setTile(x, y-2, z-3, 0);
setTile(x, y-2, z-4, 0);
setTile(x, y-2, z-5, 0);
setTile(x, y-2, z-6, 0);
setTile(x, y-2, z-7, 0);
setTile(x, y-1, z-7, 0);
setTile(x, y, z-7, 0);
setTile(x, y+1, z-7, 0);
setTile(x, y+2, z-7, 0);
setTile(x, y+3, z-7, 0);
setTile(x, y+4, z-7, 0);
setTile(x, y+5, z-7, 0);
setTile(x, y+5, z, 10);
os3x = x;
os3y = y;
os3z = z;
os3 = 300;
}
if(i==294&&os4==0){
Player.setHealth(30);
setTile(x+1, y+1, z, 1);
setTile(x-1, y+1, z, 1);
setTile(x, y+1, z+1, 1);
setTile(x, y+1, z-1, 1);
setTile(x+4, y+1, z+4, 10);
setTile(x+4, y+1, z+2, 10);
setTile(x+4, y+1, z, 10);
setTile(x+4, y+1, z-2, 10);
setTile(x+4, y+1, z-4, 10);
setTile(x+2, y+1, z+4, 10);
setTile(x+2, y+1, z+2, 10);
setTile(x+2, y+1, z, 10);
setTile(x+2, y+1, z-2, 10);
setTile(x+2, y+1, z-4, 10);
setTile(x, y+1, z+4, 10);
setTile(x, y+1, z+2, 10);
setTile(x, y+1, z-2, 10);
setTile(x, y+1, z-4, 10);
setTile(x-4, y+1, z+4, 10);
setTile(x-4, y+1, z+2, 10);
setTile(x-4, y+1, z, 10);
setTile(x-4, y+1, z-2, 10);
setTile(x-4, y+1, z-4, 10);
setTile(x-2, y+1, z+4, 10);
setTile(x-2, y+1, z+2, 10);
setTile(x-2, y+1, z, 10);
setTile(x-2, y+1, z-2, 10);
setTile(x-2, y+1, z-4, 10);
setTile(x+6, y+1, z+4, 10);
setTile(x+6, y+1, z, 10);
setTile(x+6, y+1, z-4, 10);
setTile(x-6, y+1, z+4, 10);
setTile(x-6, y+1, z, 10);
setTile(x-6, y+1, z-4, 10);
setTile(x+4, y+1, z+6, 10);
setTile(x, y+1, z+6, 10);
setTile(x-4, y+1, z+6, 10);
setTile(x+4, y+1, z-6, 10);
setTile(x, y+1, z-6, 10);
setTile(x-4, y+1, z-6, 10);
setTile(x+7, y, z+7, 10);
setTile(x+7, y, z-7, 10);
setTile(x-7, y, z+7, 10);
setTile(x-7, y, z-7, 10);
setTile(x+8, y, z, 10);
setTile(x, y, z+8, 10);
setTile(x-8, y, z, 10);
setTile(x, y, z-8, 10);
osx = x;
osy = y;
osz = z;
os4 = 1800;
}
}
//osummon
if(osummon==1){
if(i==314&&oss1==0){
Level.spawnMob(x+3, y+2, z, 32);
Level.spawnMob(x-3, y+2, z, 32);
Level.spawnMob(x, y+2, z, 36);
oss1 = 150;
}
if(i==315&&oss2==0){
Level.spawnMob(x, y+2, z, 33);
Level.spawnMob(x, y+2, z, 33);
oss2 = 300;
}
if(i==316&&oss3==0){
Level.spawnMob(x, y+2, z, 34);
Level.spawnMob(x+2, y+2, z, 34);
Level.spawnMob(x-2, y+2, z, 34);
Level.spawnMob(x, y+2, z+2, 34);
Level.spawnMob(x, y+2, z-2, 34);
oss3 = 300;
}
if(i==317&&oss4==0){
Player.setHealth(30);
for(var n=0;n<17;n++)
Level.spawnMob(x, y+3, z, 32);
for(var n=0;n<7;n++)
Level.spawnMob(x, y+4, z, 33);
oss4 = 1800;
}
}
//olight
if(olight==1){
if(i==331&&ol1==0){
setTile(x+1, y+1, z+1, 155);
setTile(x+1, y+1, z-1, 155);
setTile(x, y+1, z, 155);
setTile(x-1, y+1, z+1, 155);
setTile(x-1, y+1, z-1, 155);
setTile(x+1, y+2, z+1, 89);
setTile(x+1, y+2, z-1, 89);
setTile(x, y+2, z, 89);
setTile(x-1, y+2, z+1, 89);
setTile(x-1, y+2, z-1, 89);
setTile(x+1, y+1, z, 51);
setTile(x-1, y+1, z, 51);
setTile(x, y+1, z+1, 51);
setTile(x, y+1, z-1, 51);
ol1 = 150;
}
if(i==332&&ol2==0){
setTile(x+1, y, z+1, 155);
setTile(x+1, y, z, 155);
setTile(x+1, y, z-1, 155);
setTile(x, y, z+1, 155);
setTile(x, y, z, 11);
setTile(x, y, z-1, 155);
setTile(x-1, y, z+1, 155);
setTile(x-1, y, z, 155);
setTile(x-1, y, z-1, 155);
setTile(x+2, y+2, z+1, 155);
setTile(x+2, y+2, z, 155);
setTile(x+2, y+2, z-1, 155);
setTile(x-2, y+2, z+1, 155);
setTile(x-2, y+2, z, 155);
setTile(x-2, y+2, z-1, 155);
setTile(x+1, y+2, z+2, 155);
setTile(x, y+2, z+2, 155);
setTile(x-1, y+2, z+2, 155);
setTile(x+1, y+2, z-2, 155);
setTile(x, y+2, z-2, 155);
setTile(x-1, y+2, z-2, 155);
ol2 = 300;
}
if(i==334&&ol3==0){
setTile(x+1, y, z+1, 155);
setTile(x+1, y, z, 155);
setTile(x+1, y, z-1, 155);
setTile(x, y, z+1, 155);
setTile(x, y, z, 155);
setTile(x, y, z-1, 155);
setTile(x-1, y, z+1, 155);
setTile(x-1, y, z, 155);
setTile(x-1, y, z-1, 155);
setTile(x+2, y+2, z+1, 155);
setTile(x+2, y+2, z, 155);
setTile(x+2, y+2, z-1, 155);
setTile(x-2, y+2, z+1, 155);
setTile(x-2, y+2, z, 155);
setTile(x-2, y+2, z-1, 155);
setTile(x+1, y+2, z+2, 155);
setTile(x, y+2, z+2, 155);
setTile(x-1, y+2, z+2, 155);
setTile(x+1, y+2, z-2, 155);
setTile(x, y+2, z-2, 155);
setTile(x-1, y+2, z-2, 155);
setTile(x+2, y+3, z, 8);
setTile(x-2, y+3, z, 8);
setTile(x, y+3, z+2, 8);
setTile(x, y+3, z-2, 8);
setTile(x, y+5, z, 89);
ol3x = x;
ol3y = y;
ol3z = z;
ol3 = 300;
}
if(i==336&&ol4==0){
Player.setHealth(30);
if(nightCheck()){
Level.setTime(700);
}
setTile(x+4, y+1, z+4, 30);
setTile(x+4, y+1, z+2, 30);
setTile(x+4, y+1, z, 30);
setTile(x+4, y+1, z-2, 30);
setTile(x+4, y+1, z-4, 30);
setTile(x+2, y+1, z+4, 30);
setTile(x+2, y+1, z+2, 30);
setTile(x+2, y+1, z, 30);
setTile(x+2, y+1, z-2, 30);
setTile(x+2, y+1, z-4, 30);
setTile(x, y+1, z+4, 30);
setTile(x, y+1, z+2, 30);
setTile(x, y+1, z-2, 30);
setTile(x, y+1, z-4, 30);
setTile(x-4, y+1, z+4, 30);
setTile(x-4, y+1, z+2, 30);
setTile(x-4, y+1, z, 30);
setTile(x-4, y+1, z-2, 30);
setTile(x-4, y+1, z-4, 30);
setTile(x-2, y+1, z+4, 30);
setTile(x-2, y+1, z+2, 30);
setTile(x-2, y+1, z, 30);
setTile(x-2, y+1, z-2, 30);
setTile(x-2, y+1, z-4, 30);
setTile(x+7, y+1, z+7, 30);
setTile(x+7, y+1, z-7, 30);
setTile(x-7, y+1, z+7, 30);
setTile(x-7, y+1, z-7, 30);
setTile(x+8, y+1, z, 30);
setTile(x, y+1, z+8, 30);
setTile(x-8, y+1, z, 30);
setTile(x, y+1, z-8, 30);
Level.spawnMob(x+3, y+8, z-3, 65);
Level.spawnMob(x+3, y+8, z, 65);
Level.spawnMob(x+3, y+8, z-3, 65);
Level.spawnMob(x, y+5, z+3, 65);
Level.spawnMob(x, y+5, z-3, 65);
Level.spawnMob(x-3, y+5, z+3, 65);
Level.spawnMob(x-3, y+8, z, 65);
Level.spawnMob(x-3, y+8, z-3, 65);
Level.spawnMob(x+6,y+30,z+6,80);
Level.spawnMob(x+6,y+30,z-6,80);
Level.spawnMob(x-6,y+30,z+6,80);
Level.spawnMob(x-6,y+3,z-6,80);
olx = x;
oly = y;
olz = z;
ol4 = 1800;
}
}
//odark
if(odark==1){
if(i==263&&od1==0){
setTile(x+1, y+1, z+1, 49);
setTile(x+1, y+1, z-1, 49);
setTile(x, y+1, z, 49);
setTile(x-1, y+1, z+1, 49);
setTile(x-1, y+1, z-1, 49);
setTile(x, y+2, z, 10);
od1x = x;
od1y = y;
od1z = z;
od1 = 150;
}
if(i==264&&od2==0){
for(var yy=y+1;yy<y+7;yy++)
setTile(x, yy, z, 49);
setTile(x, y+7, z, 35, 15);
for(var yy=y+6;yy<y+8;yy++){
setTile(x+1, yy, z, 35, 15);
setTile(x, yy, z-1, 35, 15);
setTile(x, yy, z+1, 35, 15);
setTile(x-1, yy, z, 35, 15);
}
for(var yy=y+4;yy<y+6;yy++){
setTile(x+1, yy, z+1, 35, 15);
setTile(x+1, yy, z-1, 35, 15);
setTile(x+1, yy, z, 35, 15);
setTile(x-1, yy, z+1, 35, 15);
setTile(x-1, yy, z-1, 35, 15);
setTile(x-1, yy, z, 35, 15);
setTile(x, yy, z+1, 35, 15);
setTile(x, yy, z-1, 35, 15);
setTile(x+2, yy, z+1, 35, 15);
setTile(x+2, yy, z-1, 35, 15);
setTile(x+2, yy, z, 35, 15)
setTile(x-2, yy, z+1, 35, 15);
setTile(x-2, yy, z-1, 35, 15);
setTile(x-2, yy, z, 35, 15);
setTile(x+1, yy, z+2, 35, 15);
setTile(x-1, yy, z+2, 35, 15);
setTile(x, yy, z+2, 35, 15);
setTile(x+1, yy, z-2, 35, 15);
setTile(x-1, yy, z-2, 35, 15);
setTile(x, yy, z-2, 35, 15);
}
od2 = 300;
}
if(i==265&&od3==0){
for(var xx=x-1;xx<x+2;xx++)
for(var zz=z-1;zz<z+2;zz++)
setTile(xx, y, zz, 49);
setTile(x+2, y+2, z+1, 49);
setTile(x+2, y+2, z, 49);
setTile(x+2, y+2, z-1, 49);
setTile(x-2, y+2, z+1, 49);
setTile(x-2, y+2, z, 49);
setTile(x-2, y+2, z-1, 49);
setTile(x+1, y+2, z+2, 49);
setTile(x, y+2, z+2, 49);
setTile(x-1, y+2, z+2, 49);
setTile(x+1, y+2, z-2, 49);
setTile(x, y+2, z-2, 49);
setTile(x-1, y+2, z-2, 49);
setTile(x, y+1, z, 10);
od3x = x;
od3y = y;
od3z = z;
od3 = 300;
}
if(i==266&&od4==0){
Player.setHealth(30);
Level.setTime(14000);
setTile(x+9, y+8, z+9, 10);
setTile(x+9, y+8, z, 10);
setTile(x+9, y+8, z-9, 10);
setTile(x, y+8, z+9, 10);
setTile(x, y+8, z-9, 10);
setTile(x-9, y+8, z+9, 10);
setTile(x-9, y+8, z, 10);
setTile(x-9, y+8, z-9, 10);
Level.spawnMob(x+11, y+2, z+11, 35);
Level.spawnMob(x+11, y+2, z, 35);
Level.spawnMob(x+11, y+2, z-11, 35);
Level.spawnMob(x, y+2, z+11, 35);
Level.spawnMob(x, y+2, z-11, 35);
Level.spawnMob(x-11, y+2, z+11, 35);
Level.spawnMob(x-11, y+2, z, 35);
Level.spawnMob(x-11, y+2, z-11, 35);
odx = x;
ody = y;
odz = z;
od4 = 1800;
}

}

//oice
if(oice==1){
if(i==318&&oi1==0){
for(var xx=x-1;xx<x+2;xx++)
for(var yy=y-2;yy<y+1;yy++)
for(var zz=z-1;zz<z+2;zz++)
setTile(xx, yy, zz, 0);
oi1x = x;
oi1y = y;
oi1z = z;
oi1= 150;
}
if(i==296&&oi2==0){
setTile(x+2, y+1, z, 79);
setTile(x-2, y+1, z, 79);
setTile(x, y+1, z+2, 79);
setTile(x, y+1, z-2, 79);
setTile(x+1, y+1, z+1, 30);
setTile(x+1, y+1, z-1, 30);
setTile(x-1, y+1, z+1, 30);
setTile(x-1, y+1, z-1, 30);
oi2 = 300;
}
if(i==339&&oi3==0){
setTile(x+2, y+1, z+2, 80);
setTile(x+2, y+1, z-2, 80);
setTile(x-2, y+1, z+2, 80);
setTile(x-2, y+1, z-2, 80);
setTile(x+2, y+1, z+1, 85);
setTile(x+2, y+1, z, 85);
setTile(x+2, y+1, z-1, 85);
setTile(x-2, y+1, z+1, 85);
setTile(x-2, y+1, z, 85);
setTile(x-2, y+1, z-1, 85);
setTile(x+1, y+1, z+2, 85);
setTile(x, y+1, z+2, 85);
setTile(x-1, y+1, z+2, 85);
setTile(x+1, y+1, z-2, 85);
setTile(x, y+1, z-2, 85);
setTile(x-1, y+1, z-2, 85);
setTile(x+2, y+2, z+2, 86);
setTile(x+2, y+2, z-2, 86);
setTile(x-2, y+2, z+2, 86);
setTile(x-2, y+2, z-2, 86);
setTile(x, y+1, z, 30);
oi3 = 300;
}
if(i==348&&oi4==0){
Player.setHealth(30);
for(var xx=x-6;xx<x+7;xx++){
for(var zz=z-6;zz<z+7;zz++){
setTile(xx,y,zz,79);}}
for(var xx=x-4;xx<x+5;xx++){
setTile(xx,y+1,z+4,79);
setTile(xx,y+1,z-4,79);
}
for(var zz=z-3;zz<z+4;zz++){
setTile(x+4,y+1,zz,79);
setTile(x-4,y+1,zz,79);
}
setTile(x+4,y+2,z+4,79);
setTile(x+3,y+2,z+4,79);
setTile(x+2,y+2,z+4,102);
setTile(x+1,y+2,z+4,79);
setTile(x,y+2,z+4,0);
setTile(x,y+1,z+4,0);
setTile(x-1,y+2,z+4,79);
setTile(x-2,y+2,z+4,102);
setTile(x-3,y+2,z+4,79);
setTile(x-4,y+2,z+4,79);
setTile(x+4,y+2,z-4,79);
setTile(x+3,y+2,z-4,79);
setTile(x+2,y+2,z-4,102);
setTile(x+1,y+2,z-4,102);
setTile(x,y+2,z-4,79);
setTile(x-1,y+2,z-4,102);
setTile(x-2,y+2,z-4,102);
setTile(x-3,y+2,z-4,79);
setTile(x-4,y+2,z-4,79);
setTile(x+4,y+2,z+3,79);
setTile(x+4,y+2,z+2,102);
setTile(x+4,y+2,z+1,102);
setTile(x+4,y+2,z,79);
setTile(x+4,y+2,z-1,102);
setTile(x+4,y+2,z-2,102);
setTile(x+4,y+2,z-3,79);
setTile(x-4,y+2,z+3,79);
setTile(x-4,y+2,z+2,102);
setTile(x-4,y+2,z+1,102);
setTile(x-4,y+2,z,79);
setTile(x-4,y+2,z-1,102);
setTile(x-4,y+2,z-2,102);
setTile(x-4,y+2,z-3,79);
for(var xx=x-4;xx<x+5;xx++){
setTile(xx,y+3,z+4,79);
setTile(xx,y+3,z-4,79);
}
for(var zz=z-3;zz<z+4;zz++){
setTile(x+4,y+3,zz,79);
setTile(x-4,y+3,zz,79);
}
for(var xx=x-4;xx<x+5;xx++){
for(var zz=z-4;zz<z+5;zz++){
setTile(xx,y+4,zz,79);}}
setTile(x+4,y+5,z+4,79);
setTile(x+3,y+5,z+4,79);
setTile(x+2,y+5,z+4,79);
setTile(x+1,y+5,z+4,79);
setTile(x,y+5,z+4,79);
setTile(x-1,y+5,z+4,79);
setTile(x-2,y+5,z+4,79);
setTile(x-3,y+5,z+4,79);
setTile(x-4,y+5,z+4,79);
setTile(x+4,y+5,z-4,79);
setTile(x+3,y+5,z-4,79);
setTile(x+2,y+5,z-4,79);
setTile(x+1,y+5,z-4,79);
setTile(x,y+5,z-4,79);
setTile(x-1,y+5,z-4,79);
setTile(x-2,y+5,z-4,79);
setTile(x-3,y+5,z-4,79);
setTile(x-4,y+5,z-4,79);
setTile(x+4,y+5,z+3,79);
setTile(x+4,y+5,z+2,79);
setTile(x+4,y+5,z+1,79);
setTile(x+4,y+5,z,79);
setTile(x+4,y+5,z-1,79);
setTile(x+4,y+5,z-2,79);
setTile(x+4,y+5,z-3,79);
setTile(x-4,y+5,z+3,79);
setTile(x-4,y+5,z+2,79);
setTile(x-4,y+5,z+1,79);
setTile(x-4,y+5,z,79);
setTile(x-4,y+5,z-1,79);
setTile(x-4,y+5,z-2,79);
setTile(x-4,y+5,z-3,79);
setTile(x+3,y+1,z-3,58);
setTile(x+2,y+1,z-3,61);
setTile(x+1,y+1,z-3,245);
setTile(x,y+1,z-3,54);
setTile(x-3,y+1,z-3,85);
setTile(x-3,y+2,z-3,158);
setTile(x-2,y+1,z-3,53);
oix = x;
oiy = y;
oiz = z;
oi4 = 1800;
}
}


}


//Town ESP Alert
if(townCheck(x, z)){
if(i==302||i==303||i==304||i==305){
ESP.toast(Player.getName(ESP.getUser())+"(이)가 마을 내에서 능력 사용을 시도하였습니다.");
}
}


//A.I.S.
if(ad==ESP.getUser()&&aiOn){
if(aiType=="fire"){
if(aift==-1){
ESP.toast("Fire user was summoned.");
if(mcpev4) aifire = Level.spawnMob(x,y+3,z,35,"mob/steve.png");
else aifire = Level.spawnMob(x,y+3,z,35,"mob/char.png");
Entity.setRenderType(aifire, 3);
Entity.setHealth(aifire, 150);
Entity.setNameTag(aifire, "Fire User");
aifd = false;
aifd2 = true;
aift = 60;
}
else if(aift!=-1){
ESP.toast("There is already Fire User.");
}
preventDefault();
}
if(aiType=="water"){
if(aiwt==-1){
ESP.toast("Water Concroller was summoned.");
if(mcpev4) aiwater = Level.spawnMob(x,y+3,z,35,"mob/steve.png");
else aiwater = Level.spawnMob(x,y+3,z,35,"mob/char.png");
Entity.setRenderType(aiwater, 3);
Entity.setHealth(aiwater, 150);
Entity.setNameTag(aiwater, "Water Controller");
aiwd = false;
aiwd2 = true;
aiwt = 60;
}
else if(aiwt!=-1){
ESP.toast("There is already Water Concroller.");
}
preventDefault();
}
if(aiType=="tree"){
if(aitt==-1){
ESP.toast("Nature Guardian was summoned.");
if(mcpev4) aitree = Level.spawnMob(x,y+3,z,35,"mob/steve.png");
else aitree = Level.spawnMob(x,y+3,z,35,"mob/char.png");
Entity.setRenderType(aitree, 3);
Entity.setHealth(aitree, 150);
Entity.setNameTag(aitree, "Nature Guardian");
aitd = false;
aitd2 = true;
aitt = 60;
}
else if(aitt!=-1){
ESP.toast("There is already Nature Guardian.");
}
preventDefault();
}
if(aiType=="creeper"){
if(aict==-1){
ESP.toast("I am Creeper was summoned.");
if(mcpev4) aicreeper = Level.spawnMob(x,y+3,z,35,"mob/steve.png");
else aicreeper = Level.spawnMob(x,y+3,z,35,"mob/char.png");
Entity.setRenderType(aicreeper, 3);
Entity.setHealth(aicreeper, 150);
Entity.setNameTag(aicreeper, "I am Creeper");
aicd = false;
aicd2 = true;
aict = 60;
}
else if(aict!=-1){
ESP.toast("There is already I am Creeper.");
}
preventDefault();
}
if(aiType=="soil"){
if(aist==-1){
ESP.toast("Soil Master was summoned.");
if(mcpev4) aisoil = Level.spawnMob(x,y+3,z,35,"mob/steve.png");
else aisoil = Level.spawnMob(x,y+3,z,35,"mob/char.png");
Entity.setRenderType(aisoil, 3);
Entity.setHealth(aisoil, 150);
Entity.setNameTag(aisoil, "Soil Master");
aisd = false;
aisd2 = true;
aist = 60;
}
else if(aist!=-1){
ESP.toast("There is already Soil Master.");
}
preventDefault();
}
if(aiType=="summon"){
if(aisst==-1){
ESP.toast("The Summoner was summoned.");
if(mcpev4) aisummon = Level.spawnMob(x,y+3,z,35,"mob/steve.png");
else aisummon = Level.spawnMob(x,y+3,z,35,"mob/char.png");
Entity.setRenderType(aisummon, 3);
Entity.setHealth(aisummon, 150);
Entity.setNameTag(aisummon, "The Summoner");
aissd = false;
aissd2 = true;
aisst = 60;
}
else if(aisst!=-1){
ESP.toast("There is already The Summoner.");
}
preventDefault();
}
aiOn = false;

}


//---Sealed ESP---
if(!townCheck(x, z)){
if(se.tf){
if(se.demon==ESP.getUser()){
if(i==302&&se.d1==0){
px = Player.getX();
py = y;
pz = Player.getZ();
yaw = Math.floor(getYaw());
sin = -Math.sin(yaw/180*Math.PI);
cos = Math.cos(yaw/180*Math.PI);
for(var gun=3;gun<20;gun++)
setTile(px+gun*sin, y+2, pz+gun*cos, 49);
se.d1 = 150;
skillCool(ESP.getUser(), 1);
}
if(i==303&&se.d2==0){
px = Player.getX();
py = y;
pz = Player.getZ();
yaw = Math.floor(getYaw()+90);
sin = -Math.sin(yaw/180*Math.PI);
cos = Math.cos(yaw/180*Math.PI);
for(var gun=3;gun<14;gun++){
setTile(px+gun*sin, y+2, pz+gun*cos, 49);
setTile(px-gun*sin, y+2, pz-gun*cos, 49);
}
se.d2 = 300;
skillCool(ESP.getUser(), 2);
}
if(i==304&&se.d3==0){
var p2x, p2y, p2z;
for each(var e in Entity.getAll()){
p2x = Math.abs(Player.getX()-Entity.getX(e));
p2y = Math.abs(Player.getY()-Entity.getY(e));
p2z = Math.abs(Player.getZ()-Entity.getZ(e));
if(p2x<=18&&p2y<=18&&p2z<=18&&se.demon!=e&&Entity.getEntityTypeId(e)<64){
Entity.setHealth(e, Entity.getHealth(e)-9);
teleport(e, Entity.getX(e), Entity.getY(e)+9, Entity.getZ(e));
}
}
se.d3 = 300;
skillCool(ESP.getUser(), 3);
}
if(i==305&&se.d4==0){
ESP.heal(se.demon);
ESP.sbm("Welcome to the Hell", true);
se.dx = Player.getX();
se.dy = Player.getY()-2;
se.dz = Player.getZ();
Level.setTime(14000);
for(var xx=se.dx-11;xx<se.dx+12;xx++)
for(var zz=se.dz-11;zz<se.dz+12;zz++)
setTile(xx, se.dy, zz, 11);
for(var xx=se.dx-1;xx<se.dx+2;xx++)
for(var zz=se.dz-1;zz<se.dz+2;zz++)
setTile(xx, se.dy, zz, 49);
arroundMobHealthDown(se.demon, 20, 6);
se.d4 = 1800;
skillCool(ESP.getUser(), 4);
}

}
if(se.burst==ESP.getUser()){
if(i==302&&se.b1==0){
ESP.antiLack(5);
explode(x+(x-Player.getX()), y+2, z+(z-Player.getZ()), 4);
se.b1 = 150;
skillCool(ESP.getUser(), 1);
}
if(i==303&&se.b2==0){
ESP.antiLack(5);
explode(x, y-9, z, 5);
explode(x, y+15, z, 15);
explode(x+5, y+10, z, 8);
explode(x-5, y+10, z, 8);
explode(x, y+10, z-5, 8);
explode(x, y+10, z+5, 8);
se.b2 = 300;
skillCool(ESP.getUser(), 2);
}
if(i==304&&se.b3==0){
ESP.antiLack(5);
px = Player.getX();
py = y;
pz = Player.getZ();
yaw = Math.floor(getYaw());
sin = -Math.sin(yaw/180*Math.PI);
cos = Math.cos(yaw/180*Math.PI);
for(var gun=3;gun<20;gun++)
explode(px+gun*sin, y+2, pz+gun*cos, 1.8);
se.b3 = 300;
skillCool(ESP.getUser(), 3);
}
if(i==305&&se.b4==0){
Player.setHealth(50);
ESP.sbm("C3", true);
ESP.antiLack(5);
explode(x, y-9, z, 5);
explode(x, y+15, z, 15);
explode(x+5, y+10, z, 8);
explode(x-5, y+10, z, 8);
explode(x, y+10, z-5, 8);
explode(x, y+10, z+5, 8);
se.bx = x;
se.by = y;
se.bz = z;
se.b4 = 1800;
skillCool(ESP.getUser(), 4);
}

}
if(se.geno==ESP.getUser()){
if(i==302&&se.g1==0){
ESP.antiLack(75);
setTile(x+(x-Player.getX()), y+2, z+(z-Player.getZ()), 46);
explode(x+(x-Player.getX()), y+2, z+(z-Player.getZ()), 2);
se.g1 = 150;
skillCool(ESP.getUser(), 1);
}
if(i==303&&se.g2==0){
ESP.antiLack(5);
explode(x, y-8, z, 4);
explode(x, y+14, z, 12);
explode(x+5, y+10, z, 6);
explode(x-5, y+10, z, 6);
explode(x, y+10, z-5, 6);
explode(x, y+10, z+5, 6);
se.g2 = 300;
skillCool(ESP.getUser(), 2);
}
if(i==304&&se.g3==0){
arroundMobHealthDown(se.geno, 20, 10);
se.g3 = 300;
skillCool(ESP.getUser(), 3);
}
if(i==305&&se.g4==0){
ESP.setHealth(se.geno, 50);
ESP.sbm("Hyper Genocide", true);
var p2x, p2y, p2z;
for each(var e in Entity.getAll()){
p2x = Math.abs(Entity.getX(s)-Entity.getX(e));
p2y = Math.abs((Entity.getY(s)+1)-Entity.getY(e));4
p2z = Math.abs(Entity.getZ(s)-Entity.getZ(e));
if(p2x<=50&&p2y<=50&&p2z<50&&se.geno!=e&&Entity.getEntityTypeId(e)<64){
Entity.setHealth(e, Entity.getHealth(e)-17);
Entity.setFireTicks(e, 20);
}
}
se.g4 = 1800;
skillCool(ESP.getUser(), 4);
}

}
if(se.lolita==ESP.getUser()){
if(i==302&&se.l1==0){
for(var n=0;n<7;n++)
Level.spawnMob(x, y+3, z, 37);
se.l1 = 150;
skillCool(ESP.getUser(), 1);
}
if(i==303&&se.l2==0){
for(var n=0;n<7;n++)
Level.spawnMob(x, y+3, z, 36);
se.l2 = 300;
skillCool(ESP.getUser(), 2);
}
if(i==304&&se.l3==0){
teleport(se.lolita, x+(x-Player.getX()), y+2, z+(z-Player.getZ()));
se.l3 = 300;
skillCool(ESP.getUser(), 3);
}
if(i==305&&se.l4==0){
ESP.heal(se.lolita);
ESP.sbm("Lolita is Love", true);
arroundMobHealthDown(se.lolita, 40, 15);
for(var n=0;n<15;n++)
Level.spawnMob(x, y+3, z, 37);
se.l4 = 1800;
skillCool(ESP.getUser(), 4);
}

}
if(se.avenge==ESP.getUser()){
if(i==302&&se.a1==0){
setTile(x, y+1, z, 46);
setTile(x, y+2, z, 46);
explode(x+0.5, y+3, z+0.5, 0.6);
se.a1 = 150;
skillCool(ESP.getUser(), 1);
}
if(i==304&&se.a3==0){
teleport(se.avenge, x+(x-Player.getX()), y+2, z+(z-Player.getZ()));
se.a3 = 300;
skillCool(ESP.getUser(), 3);
}
if(i==305&&se.a4==0){
ESP.heal(se.avenge);
ESP.sbm("The Avenage", true);
arroundMobHealthDown(se.avenge, 30, 15);
Entity.setHealth(se.a4a, 0);
se.a4 = 1800;
skillCool(ESP.getUser(), 4);
}

}
if(se.hide==ESP.getUser()){
if(i==302&&se.h1==0){
teleport(se.hide, x+(x-Player.getX()), y+2, z+(z-Player.getZ()));
se.h1 = 150;
skillCool(ESP.getUser(), 1);
}
if(i==304&&se.h3==0){
arroundMobHealthDown(se.hide, 20, 10);
se.h3 = 300;
skillCool(ESP.getUser(), 3);
}

}
if(se.gamble==ESP.getUser()){
if(i==302&&se.g1==0){
se.gr = ESP.random(2);
if(se.gr==0) Entity.setHealth(se.gamble, Entity.getHealth(se.gamble)+5);
if(se.gr==1) Entity.setHealth(se.gamble, Entity.getHealth(se.gamble)-5);
se.g1 = 150;
skillCool(ESP.getUser(), 1);
}
if(i==304&&se.g3==0){
se.gr = ESP.random(2);
if(se.gr==0) arroundMobHealthDown(se.gamble, 20, 10);
if(se.gr==1) Entity.setHealth(se.gamble, Entity.getHealth(se.gamble)-10);
se.g3 = 300;
skillCool(ESP.getUser(), 3);
}

}
if(se.reaper==ESP.getUser()){
if(i==302&&se.r1==0){
px = Player.getX();
py = y;
pz = Player.getZ();
yaw = Math.floor(getYaw());
sin = -Math.sin(yaw/180*Math.PI);
cos = Math.cos(yaw/180*Math.PI);
teleport(se.reaper, px+9*sin, y+2, pz+9*cos);
setTile(px+4*sin, y+2, pz+4*cos, 173);
se.r1 = 150;
skillCool(ESP.getUser(), 1);
}
if(i==304&&se.r3==0){
px = Player.getX();
py = y;
pz = Player.getZ();
yaw = Math.floor(getYaw());
sin = -Math.sin(yaw/180*Math.PI);
cos = Math.cos(yaw/180*Math.PI);
for(var gun=3;gun<25;gun++)
setTile(px+gun*sin, y+2, pz+gun*cos, 173);
arroundMobHealthDown(se.reaper, 20, 7);
se.r3 = 300;
skillCool(ESP.getUser(), 3);
}
if(i==305&&se.r4==0){
ESP.sbm("Darkness Pillar", true);
ESP.heal(se.reaper);
se.rx = Player.getX();
se.ry = Player.getY()-2;
se.rz = Player.getZ();
for(var yy=se.ry+1;yy<se.ry+11;yy++){
setTile(se.rx+7, yy, se.rz+7, 173);
setTile(se.rx+7, yy, se.rz, 173);
setTile(se.rx+7, yy, se.rz-7, 173);
setTile(se.rx, yy, se.rz+7, 173);
setTile(se.rx, yy, se.rz-7, 173);
setTile(se.rx-7, yy, se.rz+7, 173);
setTile(se.rx-7, yy, se.rz, 173);
setTile(se.rx-7, yy, se.rz-7, 173);
}
arroundMobHealthDown(se.reaper, 50, 15);
se.r4 = 1800;
skillCool(ESP.getUser(), 4);
}

}
if(se.ima==ESP.getUser()){
if(i==305&&se.i4==0){
ESP.sbm("Imagine Break", true);
ESP.heal(se.ima);
se.i4 = 1800;
skillCool(ESP.getUser(), 4);
}

}
if(se.over==ESP.getUser()){
if(i==302&&se.o1==0){
for each(var e in Entity.getAll()){
if(ESP.isPlayer(e)&&se.over!=e)
se.or.push(e);
}
se.or2 = se.or[ESP.random(se.or.length)];
teleport(se.over, Entity.getX(se.or2), Entity.getY(se.or2)+1, Entity.getZ(se.or2));
Entity.setHealth(se.or2, Entity.getHealth(se.or2)-4);
while(se.or[0]!=null){
se.or.shift();
}
se.o1 = 150;
skillCool(ESP.getUser(), 1);
}
if(i==303&&se.o2==0){
for each(var e in Entity.getAll()){
if(ESP.isPlayer(e)&&se.over!=e){
se.or.push(e);
}
}
se.or2 = se.or[ESP.random(se.or.length)];
teleport(se.or2, Entity.getX(se.over), Entity.getY(se.over)+1, Entity.getZ(se.over));
Entity.setHealth(se.or2, Entity.getHealth(se.or2)-4);
while(se.or[0]!=null){
se.or.shift();
}
se.o2 = 300;
skillCool(ESP.getUser(), 2);
}
if(i==304&&se.o3==0){
arroundMobHealthDown(se.over, 20, 10);
se.o3 = 300;
skillCool(ESP.getUser(), 3);
}
if(i==305&&se.o4==0){
ESP.sbm("The Domination", true);
ESP.heal(se.over);
arroundMobHealthDown(se.over, 50, 18);
se.o4 = 1800;
skillCool(ESP.getUser(), 4);
}

}
if(se.bls==ESP.getUser()){
if(i==302&&se.bl1==0){
teleport(se.bls, x+(x-Player.getX()), y+3, z+(z-Player.getZ()));
se.bl1 = 150;
skillCool(ESP.getUser(), 1);
}
if(i==303&&se.bl2==0){
px = Player.getX();
py = y;
pz = Player.getZ();
yaw = Math.floor(getYaw());
sin = -Math.sin(yaw/180*Math.PI);
cos = Math.cos(yaw/180*Math.PI);
for(var gun=3;gun<25;gun++)
explode(px+gun*sin, y+2, pz+gun*cos, 1.4);
se.bl2 = 300;
skillCool(ESP.getUser(), 2);
}
if(i==304&&se.bl3==0){
if(se.bl3a==false){
arroundMobHealthDown(se.bls, 20, 10);
se.blx = Player.getX();
se.bly = Player.getY()-2;
se.blz = Player.getZ();
for(var xx=se.blx-11;xx<se.blx+12;xx++)
for(var zz=se.blz-11;zz<se.blz+12;zz++)
setTile(xx, se.bly+1, zz, 51);
for(var xx=se.blx-1;xx<se.blx+2;xx++)
for(var zz=se.blz-1;zz<se.blz+2;zz++)
setTile(xx, se.bly+1, zz, 0);
se.bl3a = true;
se.bl3 = 300;
skillCool(ESP.getUser(), 3);
}
else if(se.bl3a==true){
for(var xx=se.bl3x-11;xx<se.bl3x+12;xx++)
for(var zz=se.bl3z-11;zz<se.bl3z+12;zz++)
setTile(xx, se.bl3y+1, zz, 0);
se.bl3a = false;
}
}
if(i==305&&se.bl4==0){
ESP.sbm("The Black", true);
ESP.heal(se.bls);
var p2x, p2y, p2z;
for each(var e in Entity.getAll()){
p2x = Math.abs(Player.getX()-Entity.getX(e));
p2y = Math.abs(Player.getY()-Entity.getY(e));
p2z = Math.abs(Player.getZ()-Entity.getZ(e));
if(p2x<=50&&p2y<=50&&p2z<=50&&se.bls!=e&&Entity.getEntityTypeId(e)<64){
Entity.setHealth(e, Entity.getHealth(e)-15);
Entity.setFireTicks(e, 30);
}
}
se.bl4 = 1800;
skillCool(ESP.getUser(), 4);
}

}
if(se.c==ESP.getUser()){
if(i==302&&se.c1==0){
ESP.antiLack(5);
explode(x, y+1.5, z, 3);
se.c1 = 150;
skillCool(ESP.getUser(), 1);
}
if(i==303&&se.c2==0){
Entity.setHealth(se.c, Entity.getHealth(se.c)+10);
ESP.antiLack(5);
explode(x, y-9, z, 5);
explode(x, y+15, z, 15);
explode(x+5, y+10, z, 8);
explode(x-5, y+10, z, 8);
explode(x, y+10, z-5, 8);
explode(x, y+10, z+5, 8);
se.c2 = 300;
skillCool(ESP.getUser(), 2);
}
if(i==304&&se.c3==0){
Entity.setHealth(se.c, Entity.getHealth(se.c)+20);
ESP.antiLack(5);
explode(x, y-9, z, 5);
explode(x, y+15, z, 15);
explode(x+5, y+10, z, 8);
explode(x-5, y+10, z, 8);
explode(x, y+10, z-5, 8);
explode(x, y+10, z+5, 8);
se.c3a = true;
se.c3 = 300;
skillCool(ESP.getUser(), 3);
}
if(i==305&&se.c4==0){
ESP.sbm("C4", true);
Entity.setHealth(se.c, Entity.getHealth(se.c)+40);
ESP.antiLack(5);
explode(x, y-12, z, 8);
explode(x, y+20, z, 20);
explode(x+8, y+13, z, 13);
explode(x-8, y+13, z, 13);
explode(x, y+13, z-8, 13);
explode(x, y+13, z+8, 13);
se.c4 = 1800;
skillCool(ESP.getUser(), 4);
}

}
if(se.doctor==ESP.getUser()){
if(i==302&&se.do1==0){
Entity.setHealth(se.doctor, Entity.getHealth(se.doctor)+10);
se.do1 = 150;
skillCool(ESP.getUser(), 1);
}
if(i==303&&se.do2==0){
Entity.setHealth(se.doctor, Entity.getHealth(se.doctor)+10);
arroundMobHealthDown(se.doctor, 15, -5);
se.do2 = 300;
skillCool(ESP.getUser(), 2);
}
if(i==304&&se.do3==0){
Entity.setHealth(se.doctor, Entity.getHealth(se.doctor)+5);
se.do3 = 300;
skillCool(ESP.getUser(), 3);
}
if(i==305&&se.do4==0){
ESP.sbm("Hyper Heal", true);
Entity.setHealth(se.doctor, Entity.getHealth(se.doctor)+30);
se.do4 = 1800;
skillCool(ESP.getUser(), 4);
}

}
if(se.htp==ESP.getUser()){
if(i==302){
if(se.ht1==0){
teleport(se.htp, x, y+3, z);
se.ht1 = 150;
skillCool(ESP.getUser(), 1);
}
else if(se.ht1>75){
teleport(se.htp, x, y+3, z);
}
}
if(i==303&&se.ht2==0){
teleport(se.htp, x+2*(x-Player.getX()), y+3, z+2*(z-Player.getZ()));
explode(x, y+2.5, z, 3);
se.ht2 = 300;
skillCool(ESP.getUser(), 2);
}
if(i==304&&se.ht3==0){
if(se.ht3a==false){
se.hx = x;
se.hy = y;
se.hz = z;
se.ht3a = true;
}
else if(se.ht3a==true){
arroundMobHealthDown(se.htp, 20, 10),
teleport(se.htp, se.hx, se.hy+3, se.hz);
se.ht3a = false;
se.ht3 = 300;
skillCool(ESP.getUser(), 3);
}
}
if(i==305){
if(se.ht4==0){
ESP.sbm("Hyper Teleporting", true);
ESP.heal(se.htp);
teleport(se.htp, x, y+3, z);
se.ht4 = 1800;
skillCool(ESP.getUser(), 4);
}
else if(se.ht4>1350){
teleport(se.htp, x, y+3, z);
}
}

}
if(se.evil==ESP.getUser()){
if(i==302){
teleport(se.evil, x+(x-Player.getX()), y+3, z+(z-Player.getZ()));
se.e1 = 150;
skillCool(ESP.getUser(), 1);
}
if(i==303&&se.e2==0){
px = Player.getX();
pz = Player.getZ();
yaw = Math.floor(getYaw());
sin = -Math.sin(yaw/180*Math.PI);
cos = Math.cos(yaw/180*Math.PI);
for(var gun=3;gun<25;gun++)
explode(px+gun*sin, y+2.5, pz+gun*cos, 1.9);
se.e2 = 300;
skillCool(ESP.getUser(), 2);
}
if(i==304&&se.e3==0){
se.exa = Math.abs(x-Player.getX());
se.exa = Math.abs(x-Player.getX());
if(se.exa>se.sza){
for(var yy=y+1;yy<y+6;yy++)
for(var zz=z-2;zz<z+3;zz++)
setTile(x, yy, zz, 173);
}
else if(se.exa<se.sza){
for(var xx=x-2;xx<x+3;xx++)
for(var yy=y+1;yy<y+6;yy++)
setTile(xx, yy, z, 173);
}
arroundMobHealthDown(se.evil, 15, 7);
se.e3 = 300;
skillCool(ESP.getUser(), 3);
}
if(i==305&&se.e4==0){
ESP.sbm("Van!shment Th!s World", true);
ESP.heal(se.evil);
if(nightCheck()==false)
Level.setTime(14000);
for(var xx=x-18;xx<x+19;xx++){
for(var yy=y-3;yy<y+9;yy++){
for(var zz=z-18;zz<z+19;zz++){
if(getTile(xx, yy, zz)==3){
setTile(xx, yy, zz, 41);
}
if(getTile(xx, yy, zz)==2){
setTile(xx, yy, zz, 3);
}
if(getTile(xx, yy, zz)==8||getTile(xx, yy, zz)==9){
setTile(xx, yy, zz, 22);
}
for(var yy=y+1;yy<y+7;yy++)
setTile(x, yy, z, 17);
setTile(x, y+7, z, 18);
for(var yy=y+6;yy<y+8;yy++){
setTile(x+1, yy, z, 18);
setTile(x, yy, z-1, 18);
setTile(x, yy, z+1, 18);
setTile(x-1, yy, z, 18);
}
for(var yy=y+4;yy<y+6;yy++){
setTile(x+1, yy, z+1, 18);
setTile(x+1, yy, z-1, 18);
setTile(x+1, yy, z, 18);
setTile(x-1, yy, z+1, 18);
setTile(x-1, yy, z-1, 18);
setTile(x-1, yy, z, 18);
setTile(x, yy, z+1, 18);
setTile(x, yy, z-1, 18);
setTile(x+2, yy, z+1, 18);
setTile(x+2, yy, z-1, 18);
setTile(x+2, yy, z, 18)
setTile(x-2, yy, z+1, 18);
setTile(x-2, yy, z-1, 18);
setTile(x-2, yy, z, 18);
setTile(x+1, yy, z+2, 18);
setTile(x-1, yy, z+2, 18);
setTile(x, yy, z+2, 18);
setTile(x+1, yy, z-2, 18);
setTile(x-1, yy, z-2, 18);
setTile(x, yy, z-2, 18);
}
setTile(x, y+8, z, 51);
}}}
for(var xx=x-18;xx<x+19;xx++){
setTile(xx, y+2, z-19, 95);
setTile(xx, y+2, z+19, 95);
}
for(var zz=z-18;zz<z+19;zz++){
setTile(x+19, y+2, zz, 95);
setTile(x-19, y+2, zz, 95);
}
se.ex = x;
se.ey = y;
se.ez = z;
se.e4 = 1800;
skillCool(ESP.getUser(), 4);
}

}

}
//---Hidden ESP---
if(he.elect==ESP.getUser()){
if(i==302&&he.e1==0){
px = Player.getX();
py = y;
pz = Player.getZ();
yaw = Math.floor(getYaw());
sin = -Math.sin(yaw/180*Math.PI);
cos = Math.cos(yaw/180*Math.PI);
for(var gun=2;gun<5;gun++)
setTile(px+gun*sin, y+2, pz+gun*cos, 89);
teleport(he.elect, px+8*sin, y+3, pz+8*cos);
he.e1 = 150;
skillCool(ESP.getUser(), 1);
}
if(i==303&&he.e2==0){
px = Player.getX();
py = y;
pz = Player.getZ();
yaw = Math.floor(getYaw());
sin = -Math.sin(yaw/180*Math.PI);
cos = Math.cos(yaw/180*Math.PI);
for(var gun=3;gun<25;gun++)
setTile(px+gun*sin, y+2, pz+gun*cos, 89);
he.e2 = 300;
skillCool(ESP.getUser(), 2);
}
if(i==304){
if(he.e3==0&&he.e3a==false){
for(var n=-1;n<2;n++){
setTile(x+n, y+2, z+2, 89);
setTile(x+n, y+2, z-2, 89);
setTile(x+2, y+2, z+n, 89);
setTile(x-2, y+2, z+n, 89);
}
he.e3x = x;
he.e3y = y;
he.e3z = z;
he.e3a = true;
he.e3 = 300;
skillCool(ESP.getUser(), 3);
}
else if(he.e3a==true){
for(var n=-1;n<2;n++){
setTile(he.e3x+n, he.e3y+2, he.e3z+2, 0);
setTile(he.e3x+n, he.e3y+2, he.e3z-2, 0)
setTile(he.e3x+2, he.e3y+2, he.e3z+n, 0);
setTile(he.e3x-2, he.e3y+2, he.e3z+n, 0);
}
setTile(he.e3x, he.e3y+2, he.e3z, 89);
he.e3a = true;
he.e3b = 6;
}
}
if(i==305&&he.e4==0){
ESP.sbm("Lightning Release", true);
ESP.heal(he.elect);
he.ex = Player.getX();
he.ey = Player.getY()-2;
he.ez = Player.getZ();
for(var n=3;n<17;n++){
setTile(he.ex+n, he.ey+2, he.ez+n, 89);
setTile(he.ex+n, he.ey+2, he.ez, 89);
setTile(he.ex+n, he.ey+2, he.ez-n, 89);
setTile(he.ex, he.ey+2, he.ez+n, 89);
setTile(he.ex, he.ey+2, he.ez-n, 89);
setTile(he.ex-n, he.ey+2, he.ez+n, 89);
setTile(he.ex-n, he.ey+2, he.ez, 89);
setTile(he.ex-n, he.ey+2, he.ez-n, 89);
}
he.e4 = 1800;
}

}
if(he.shade==ESP.getUser()){
if(i==302&&he.s1==0){
teleport(ESP.getUser(), x+2*(x-Player.getX()), y+3, z+2*(z-Player.getZ()));
ESP.antiLack(5);
explode(x, y+1, z, 3);
he.s1 = 150;
skillCool(ESP.getUser(), 1);
}
if(i==303&&he.s2==0){
he.s2a = ESP.getNearEntity(he.shade, 30);
if(he.s2a==-1){
ESP.toast("주변에 엔티티가 없습니다.");
}
else{
px = Entity.getX(he.s2a);
py = Entity.getY(he.s2a);
pz = Entity.getZ(he.s2a);
yaw = Math.floor(Entity.getYaw(he.s2a));
sin = -Math.sin(yaw/180*Math.PI);
cos = Math.cos(yaw/180*Math.PI);
teleport(he.shade, px-2*sin, py+1, pz-2*cos);
Entity.setHealth(he.s2a, Entity.getHealth(he.s2a)-10);
he.s2 = 300;
skillCool(ESP.getUser(), 2);
}
}
if(i==304&&he.s3==0){
arroundMobHealthDown(he.shade, 20, 10);
he.s3 = 300;
skillCool(ESP.getUser(), 3);
}
if(i==305&&he.s4==0){
ESP.sbm("Shadow Assault", true);
ESP.heal(he.shade);
teleport(ESP.getUser(), x+(x-Player.getX()), y+3, z+(z-Player.getZ()));
var p2x, p2y, p2z;
for each(var e in Entity.getAll()){
p2x = Math.abs(x-Entity.getX(e));
p2y = Math.abs((y+1)-Entity.getY(e));
p2z = Math.abs(z-Entity.getZ(e));
if(p2x<=30&&p2y<=30&&p2z<=30&&he.shade!=e&&Entity.getEntityTypeId(e)<64){
Entity.setHealth(e, Entity.getHealth(e)-10);
he.s4a.push(e);
}
}
he.s4 = 1800;
}

}
if(he.torn==ESP.getUser()){
if(i==302&&he.t1==0){
px = Player.getX();
pz = Player.getZ();
yaw = Math.floor(getYaw());
sin = -Math.sin(yaw/180*Math.PI);
cos = Math.cos(yaw/180*Math.PI);
ESP.antiLack(5);
for(var gun=3;gun<20;gun++)
explode(px+gun*sin, y+2, pz+gun*cos, 1.7);
he.t1 = 150;
skillCool(ESP.getUser(), 1);
}
if(i==303&&he.t2==0){
for(var xx=x-1;xx<x+2;xx++){
for(var yy=y+1;yy<y+4;yy++){
for(var zz=z-1;zz<z+2;zz++){
setTile(xx, yy, zz, 0);
setTile(xx, yy, z+2, 20);
setTile(xx, yy, z-2, 20);
setTile(x+2 ,yy, zz, 20);
setTile(x-2 ,yy, zz, 20);
setTile(xx, y+4, zz, 20);
}}}
he.t2 = 300;
skillCool(ESP.getUser(), 2);
}
if(i==304&&he.t3==0){
arroundMobHealthDown(he.torn, 7, 5);
teleport(he.torn, x+(x-Player.getX()), y+3, z+(z-Player.getZ()));
he.t3 = 300;
skillCool(ESP.getUser(), 3);
}
if(i==305&&he.t4==0){
ESP.sbm("The Tornado", true);
ESP.heal(he.torn);
arroundMobHealthDown(he.torn, 20, 5);
he.tx = Player.getX();
he.ty = Player.getY()-2;
he.tz = Player.getZ();
ESP.antiLack(5);
explode(he.tx+7, he.ty+1, he.tz, 3);
explode(he.tx-7, he.ty+1, he.tz, 3);
he.t4 = 1800;
skillCool(ESP.getUser(), 4);
}

}
if(he.buf==ESP.getUser()){
if(i==302){
if(he.b1==0){
teleport(he.buf, x, y+3, z);
he.b1 = 150;
skillCool(ESP.getUser(), 1);
}
else if(he.b1>115){
teleport(he.buf, x, y+3, z);
}
}
if(i==303&&he.b2==0){
he.b2 = 300;
skillCool(ESP.getUser(), 2);
}
if(i==305&&he.b4==0){
ESP.sbm("The Buf", true);
ESP.heal(he.buf);
he.b4a = Entity.getHealth(he.buf);
arroundMobHealthDown(he.buf, 20, 5);
he.b4 = 1800;
skillCool(ESP.getUser(), 4);
}

}
if(he.x==ESP.getUser()){
if(i==302&&he.x1==0){
arroundMobHealthDown(he.x, 7, 5);
teleport(he.x, x+(x-Player.getX()), y+3, z+(z-Player.getZ()));
he.x1 = 150;
skillCool(ESP.getUser(), 1);
}
if(i==303&&he.x2==0){
px = Player.getX();
pz = Player.getZ();
yaw = Math.floor(getYaw());
sin = -Math.sin(yaw/180*Math.PI);
cos = Math.cos(yaw/180*Math.PI);
ESP.antiLack(5);
for(var gun=3;gun<20;gun++)
explode(px+gun*sin, y+2, pz+gun*cos, 1.6);
he.x2 = 300;
skillCool(ESP.getUser(), 2);
}
if(i==304&&he.x3==0){
var p2x, p2y, p2z;
for each(var e in Entity.getAll()){
p2x = Math.abs(Player.getX()-Entity.getX(e));
p2y = Math.abs(Player.getY()-Entity.getY(e));
p2z = Math.abs(Player.getZ()-Entity.getZ(e));
if(p2x<=10&&p2y<=10&&p2z<=10&&he.x!=e&&Entity.getEntityTypeId(e)<64){
teleport(e, Entity.getX(e), Entity.getY(e)+9, Entity.getZ(e));
Entity.setFireTicks(e, 10);
}
}
he.x3 = 300;
skillCool(ESP.getUser(), 3);
}
if(i==305&&he.x4==0){
ESP.sbm("Secret Assault", true);
ESP.heal(he.x);
var p2x, p2y, p2z;
for each(var e in Entity.getAll()){
p2x = Math.abs(Player.getX()-Entity.getX(e));
p2y = Math.abs(Player.getY()-Entity.getY(e));
p2z = Math.abs(Player.getZ()-Entity.getZ(e));
if(p2x<=30&&p2y<=30&&p2z<=30&&he.x!=e&&Entity.getEntityTypeId(e)<64){
teleport(e, x+0.5, y+3, z+0.5);
Entity.setFireTicks(e, 10);
Entity.setHealth(e, Entity.getHealth(e)-5);
}
}
he.xx = x;
he.xy = y;
he.xz = z;
ESP.antiLack(90);
setTiles(x-2, x+2, y, y+4, z-2, z+2, 7);
setTiles(x-1, x+1, y+1, y+4, z-1, z+1, 0);
Level.spawnMob(x+0.5, y+9, z+0.5, 65);
setTile(x, y+1, z, 30);
he.x4 = 1800;
skillCool(ESP.getUser(), 4);
}

}
if(he.bind==ESP.getUser()){
if(i==302&&he.bi1==0){
px = Player.getX();
pz = Player.getZ();
yaw = Math.floor(getYaw());
sin = -Math.sin(yaw/180*Math.PI);
cos = Math.cos(yaw/180*Math.PI);
for(var gun=3;gun<20;gun++)
setTile(px+gun*sin, y+1, pz+gun*cos, 30);
he.bi1 = 150;
skillCool(ESP.getUser(), 1);
}
if(i==303&&he.bi2==0){
for(var xx=x-1;xx<x+2;xx++){
for(var zz=z-1;zz<z+2;zz++){
setTile(xx, y+1, zz, 51);
setTile(xx, y+2, zz, 30);
}}
he.bi2 = 300;
skillCool(ESP.getUser(), 2);
}
if(i==304&&he.bi3==0){
teleport(he.bind, x+(x-Player.getX()), y+3, z+(z-Player.getZ()));
he.bi3 = 300;
skillCool(ESP.getUser(), 3);
}
if(i==305&&he.bi4==0){
ESP.sbm("Movement Stop", true);
ESP.heal(he.bind);
var p2x, p2y, p2z;
for each(var e in Entity.getAll()){
p2x = Math.abs(Player.getX()-Entity.getX(e));
p2y = Math.abs(Player.getY()-Entity.getY(e));
p2z = Math.abs(Player.getZ()-Entity.getZ(e));
if(p2x<=40&&p2y<=40&&p2z<=40&&he.bind!=e&&Entity.getEntityTypeId(e)<64){
try{
Entity.addEffect(e, MobEffect.movementSlowdown, 450, 9, true, false);
}
catch(e){
//null
}
}
}
he.bi4 = 1800;
skillCool(ESP.getUser(), 4);
}

}
if(he.thor==ESP.getUser()){
if(i==302&&he.th1==0){
Level.spawnMob(x, y+1, z, 93);
he.th1 = 150;
skillCool(ESP.getUser(), 1);
}
if(i==303&&he.th2==0){
ESP.antiLack(15);
Level.spawnMob(x, y+1, z, 93);
explode(x, y+1, z, 2, true);
he.th2x = x;
he.th2y = y;
he.th2z = z;
he.th2 = 300;
skillCool(ESP.getUser(), 2);
}
if(i==304&&he.th3==0){
var p2x, p2y, p2z;
p2x = Player.getX();
p2y = Player.getY()-2;
p2z = Player.getZ();
Level.spawnMob(p2x+4, p2y+1, p2z+4, 93);
Level.spawnMob(p2x+4, p2y+1, p2z, 93);
Level.spawnMob(p2x+4, p2y+1, p2z-4, 93);
Level.spawnMob(p2x, p2y+1, p2z+4, 93);
Level.spawnMob(p2x, p2y+1, p2z-4, 93);
Level.spawnMob(p2x-4, p2y+1, p2z+4, 93);
Level.spawnMob(p2x-4, p2y+1, p2z, 93);
Level.spawnMob(p2x-4, p2y+1, p2z-4, 93);
he.th3 = 300;
skillCool(ESP.getUser(), 3);
}
if(i==305&&he.th4==0){
ESP.sbm("Lightning Fall", true);
ESP.heal(he.thor);
he.thx = Player.getX();
he.thy = Player.getY()-2;
he.thz = Player.getZ();
Level.spawnMob(he.thx+6, he.thy+1, he.thz+6, 93);
Level.spawnMob(he.thx+6, he.thy+1, he.thz, 93);
Level.spawnMob(he.thx+6, he.thy+1, he.thz-6, 93);
Level.spawnMob(he.thx, he.thy+1, he.thz+6, 93);
Level.spawnMob(he.thx, he.thy+1, he.thz-6, 93);
Level.spawnMob(he.thx-6, he.thy+1, he.thz+6, 93);
Level.spawnMob(he.thx-6, he.thy+1, he.thz, 93);
Level.spawnMob(he.thx-6, he.thy+1, he.thz-6, 93);
ESP.antiLack(15);
explode(he.thx+6, he.thy+1, he.thz+6, 2.5, true);
explode(he.thx+6, he.thy+1, he.thz, 2.5, true);
explode(he.thx+6, he.thy+1, he.thz-6, 2.5, true);
explode(he.thx, he.thy+1, he.thz+6, 2.5, true);
explode(he.thx, he.thy+1, he.thz-6, 2.5, true);
explode(he.thx-6, he.thy+1, he.thz+6, 2.5, true);
explode(he.thx-6, he.thy+1, he.thz, 2.5, true);
explode(he.thx-6, he.thy+1, he.thz-6, 2.5, true);
he.th4 = 1800;
skillCool(ESP.getUser(), 4);
}

}
if(he.joker==ESP.getUser()){
if(i==302&&he.j1==0){
explode(x, y+4, z, 2);
setTile(x, y+1, z, 10);
new Thread({
run : function(){
Thread.sleep(3750);
setTile(x, y+1, z, 0);
}
}).start();
he.j1 = 150;
skillCool(ESP.getUser(), 1);
}
if(i==303&&he.j2==0){
setTiles(x-2, x+2, y+1, y+4, z-2, z+2, 7);
setTiles(x-1, x+1, y+1, y+4, z-1, z+1, 0);
setTile(x, y+1, z, 50);
new Thread({
run : function(){
Thread.sleep(7500);
explode(x, y+4, z, 2);
setTiles(x-2, x+2, y+1, y+4, z-2, z+2, 0);
}
}).start();
he.j2 = 300;
skillCool(ESP.getUser(), 2);
}
if(i==304&&he.j3==0){
if(he.j3a&&he.j3b!=null){
explode(Entity.getX(he.j3b), Entity.getY(he.j3b), Entity.getZ(he.j3b), 1.5);
he.j3a = false;
}
he.j3 = 300;
skillCool(ESP.getUser(), 3);
}
if(i==305&&he.j4==0){
ESP.sbm("Nuclear Explosion", true);
ESP.heal(he.joker);
he.jx = Player.getX();
he.jy = Player.getY()-2;
he.jz = Player.getZ();
for(var xx=he.jx-13;xx<he.jx+14;xx++)
for(var zz=he.jz-13;zz<he.jz+14;zz++)
setTile(xx, he.jy+2, zz, 7);
for(var xx=he.jx-12;xx<he.jx+13;xx++){
for(var zz=he.jz-12;zz<he.jz+13;zz++){
setTile(xx, he.jy+1, zz, 30);
setTile(xx, he.jy+2, zz, 0);
}}
setTile(he.jx, he.jy+9, he.jz, 7);
yaw = Math.floor(getYaw());
sin = -Math.sin(yaw/180*Math.PI);
cos = Math.cos(yaw/180*Math.PI);
teleport(he.joker, he.jx+17*sin, y+3, he.jz+17*cos);
he.j4 = 1800;
skillCool(ESP.getUser(), 4);
}

}
if(he.chat==ESP.getUser()){
if(i==302&&he.c1==0){
ScriptManager.nativeSendChat("ChatChatChatChatChat");
he.c1 = 150;
skillCool(ESP.getUser(), 1);
}
if(i==303&&he.c2==0){
ScriptManager.nativeSendChat("ChatChatChatChatChatChatChatChatChatChatChat");
ScriptManager.nativeSendChat("ChatChatChatChatChatChatChatChatChatChatChat");
he.c2 = 300;
skillCool(ESP.getUser(), 2);
}
if(i==304&&he.c3==0){
ScriptManager.nativeSendChat("ChatChatChatChatChatChatChat");
ScriptManager.nativeSendChat("ChatChatChatChatChatChatChat");
ScriptManager.nativeSendChat("ChatChatChatChatChatChatChat");
he.c3 = 300;
skillCool(ESP.getUser(), 3);
}
if(i==305&&he.c4==0){
ESP.sbm("Hyper Chatting", true);
ESP.heal(he.chat);
new Thread({
run : function(){
Thread.sleep(1000);
var sendChat = ScriptManager.nativeSendChat;
for(var n=0;n<10;n++)
sendChat((n+1)+". Chat Chat Chat Chat Chat Chat Chat Chat ChatChatChat Chat Chat Chat");
}
}).start();
he.c4 = 1800;
skillCool(ESP.getUser(), 4);
}

}
if(he.dark==ESP.getUser()){
if(i==302){
if(he.d1==0){
px = Player.getX();
pz = Player.getZ();
yaw = Math.floor(getYaw());
sin = -Math.sin(yaw/180*Math.PI);
cos = Math.cos(yaw/180*Math.PI);
teleport(he.dark, px+11*sin, y+3, pz+11*cos);
he.d1 = 150;
skillCool(ESP.getUser(), 1);
}
else if(he.d1>75){
px = Player.getX();
pz = Player.getZ();
yaw = Math.floor(getYaw());
sin = -Math.sin(yaw/180*Math.PI);
cos = Math.cos(yaw/180*Math.PI);
teleport(he.dark, px+11*sin, y+3, pz+11*cos);
}
}
if(i==303){
if(he.d2==0&&he.d2a==false){
px = Player.getX();
pz = Player.getZ();
yaw = Math.floor(getYaw());
sin = -Math.sin(yaw/180*Math.PI);
cos = Math.cos(yaw/180*Math.PI);
ESP.antiLack(15);
for(var gun=3;gun<30;gun++)
explode(px+gun*sin, y+2, pz+gun*cos, 1.7);
he.d2a = true;
he.d2 = 300;
skillCool(ESP.getUser(), 2);
}
else if(he.d2a==true){
arroundMobHealthDown(he.dark, 15, 10);
he.d2a = false;
}
}
if(i==304&&he.d3==0){
he.d3 = 300;
skillCool(ESP.getUser(), 3);
}
if(i==305&&he.d4==0){
ESP.sbm("Dark Genesis", true);
ESP.heal(he.dark);
he.dx = Player.getX();
he.dy = Player.getY()-2;
he.dz = Player.getZ();
arroundMobHealthDown(he.dark, 30, 6);
for(var yy=he.dy+1;yy<he.dy+5;yy++){
setTile(he.dx+7, yy, he.dz+7, 173);
setTile(he.dx+7, yy, he.dz, 173);
setTile(he.dx+7, yy, he.dz-7, 173);
setTile(he.dx, yy, he.dz+7, 173);
setTile(he.dx, yy, he.dz-7, 173);
setTile(he.dx-7, yy, he.dz+7, 173);
setTile(he.dx-7, yy, he.dz, 173);
setTile(he.dx-7, yy, he.dz-7, 173);
}
he.d4 = 1800;
skillCool(ESP.getUser(), 4);
}

}


}



if(mp3){
if((x==111&&y==66&&z==10)||(x==1028&&y==18&&z==1038)||(x==2024&&y==52&&z==-1025)){
Entity.setPosition(ESP.getUser(), 1000.5, 51, 1500.5);
ESP.toast("Teleported to Time Zone");
}
if(x==154&&y==44&&z==11){
Entity.setPosition(ESP.getUser(), -1033, 10, 1003);
ESP.toast("Teleported to Nether Texeris.");
}
if(x==177&&y==70&&z==33){
Entity.setPosition(ESP.getUser(), -1024, 23, -1001);
ESP.toast("Teleported to Endersterly.");
}
if(b==242){
switch(Level.getSignText(x, y+1, z, 1)){
case "Past" : 
Entity.setPosition(ESP.getUser(), 1018, 20, 1039);
ESP.toast("Time Jumped to Past");
break;
case "Present" : 
Entity.setPosition(ESP.getUser(), 116, 52, 25);
ESP.toast("Time Jumped to Present");
break;
case "Future" : 
Entity.setPosition(ESP.getUser(), 2014, 53, -1023);
ESP.toast("Time Jumped to Future");
break;
}
}
if(x==2000&&y==70&&z==-1497){
Entity.setPosition(ESP.getUser(), 2014, 53, -1023);
ESP.toast("Teleported to Texeris.");
}

}

if(i==511&&dt.tf&&ad==ESP.getUser()){
dt.p = Level.spawnMob(x, y+3, z, 10, "mob/darkTornado.png");
Entity.setRenderType(dt.p, darkRender.renderType);
Entity.setNameTag(dt.p, "    §0Dark Tornado§f");
clientMessage("<server> §0Dark Tornado§f joined the Game.");
Entity.setVelY(dt.p, -0.7);
Entity.setCollisionSize(dt.p, 0.7, 1.8);
dt.l = true;
dt.tf = false;
dt.t = 195;
}

if(b==233||b==234)
spellStone(x, y, z, b);

if(i==373&&it==28){
var pn = Player.getName(Player.getEntity());
if(potionCool.indexOf(pn)==-1){
Entity.addEffect(Player.getEntity(), MobEffect.regeneration, 100, 0, true, false);
potionCool.push(pn);
new Thread({
run : function(){
Thread.sleep(10000);
potionCool.splice(potionCool.indexOf(pn), 1);
}
}).start();
}
}

if((b==63||b==68)&&Level.getSignText(x, y, z, 1)=="Zombie"&&Level.getSignText(x, y, z, 2)=="Employer"&&ESP.random(3)==0){
setTile(x, y-1, z, 1);
zombie = [];
ESP.toast("They are coming...");
Level.setTime(19200);
zs.t = -101;
}
if(i==0&&zs.n>0) Level.dropItem(x, y+1, z, 0, 277, 1, 0);

if(b==49&&Level.getSignText(x, y+1, z, 1)=="White"&&Level.getSignText(x, y+1, z, 2)=="Lady"){
setTile(x, y, z, 98, 3);
wl.m("Hello, "+Player.getName(ad)+"§f. Are you There?");
ESP.toast("They are coming...");
Level.setTime(19200);
hhhhh = 330;
if(spawnWhiteLady) ESP.spawnWhiteLady(x, y+2.5, z);
}
if(ESP.isLetter()){
Entity.setCarriedItem(Player.getEntity(), 0, 0, 0, 0);
Entity.setPosition(Player.getEntity(), 250, 42, 73);
ESP.toast("Would you like to know about White Lady?");
inTheWay = true;
bgmPlayer(true);
}
if((b==63||b==68)&&Level.getSignText(x, y, z, 1)=="§5드레이스가"&&Level.getSignText(x, y, z, 2)=="§5남긴 편지..."){
ESP.skillInfo("드레이스의 편지", "미안하오, 메리. 내가 출장을 간 사이에 이 주변이 쑥대밭이 됬소. 우리들의 왕자님이신 \"리버스\"님을 난 용서할 수 없소. 하지만 난 그 분을 이길 수가 없소. 강해져서 돌아오겠소. 그대의 동생이 따라간 \"Dark Tornado\"라는 자를 만나서 꼭 그에게 복수하리다. 그 때까지 기다려 주오, 나의 사랑 메리. 마지막까지 함께 있어주지 못해서 미안하오.\n\n  - 그대를 사랑했던 드레이스 공작");
spawnWhiteLady = true;
}
if(ESP.isBook()){
ESP.skillInfo("Dark Tornado jr.'s Book", "그들이 우리를 공격했다. 아래에서 올라온 검은 존재들...우리는 맞서 싸웠지만, 우리가 밀리고 있었다. 결국, 워네스가 총을 들었다. 하지만, 마을은 이미 어느 정도 파괴된 상태.\n우리는 흩어진다. 몇몇은 고향으로, 몇몇은 떠돌아 다니고, 몇몇은 사라지고, 몇몇은 새로운 세상으로 가고, 몇몇은 남는다.\n언젠가에는 다시 모일 것이다. 하지만 아직 그들이 남아있다. 우리들의 제자들 만으로는 저항할 수 없다.\n1년 뒤, 우리들은 이 곳으로 모인다.\n\n                    - Dark Tornado jr. 송수진\n\n추신 : White Tornado는 이것을 읽게 된다면, 가져가지 말고, 다시 이 자리에 놓기를 바란다.");
}

//Under Tale
if(underTaleActive){
var pe = Player.getEntity();
if(u[0].p==pe){
if(i==302&&u[0].c1==0){
setTile(x+1, y+1, z, 35);
setTile(x-1, y+1, z, 35);
setTile(x, y+1, z+1, 35);
setTile(x, y+1, z-1, 35);
u[0].c1 = 150;
}
if(i==303&&u[0].c2==0){
setTile(x+1, y+1, z, 35);
setTile(x-1, y+1, z, 35);
setTile(x, y+1, z+1, 35);
setTile(x, y+1, z-1, 35);
new Thread({
run : function(){
Thread.sleep(1000);
ESP.antiLack(15);
explode(x, y+2, z, 2);
}
}).start();
u[0].c2 = 300;
}
if(i==304&&u[0].c3==0){
var p2x, p2y, p2z;
p2x = Player.getX();
p2y = Player.getY()-2;
p2z = Player.getZ();
setTile(p2x+3, p2y+2, p2z+1, 35);
setTile(p2x+3, p2y+2, p2z-1, 35);
setTile(p2x-3, p2y+2, p2z+1, 35);
setTile(p2x-3, p2y+2, p2z-1, 35);
setTile(p2x+1, p2y+2, p2z+3, 35);
setTile(p2x+1, p2y+2, p2z-3, 35);
setTile(p2x-1, p2y+2, p2z+3, 35);
setTile(p2x-1, p2y+2, p2z-3, 35);
new Thread({
run : function(){
Thread.sleep(1000);
ESP.antiLack(15);
explode(p2x+4, p2y+2, p2z+1, 2);
explode(p2x+4, p2y+2, p2z-1, 2);
explode(p2x-4, p2y+2, p2z+1, 2);
explode(p2x-4, p2y+2, p2z-1, 2);
explode(p2x+1, p2y+2, p2z+4, 2);
explode(p2x+1, p2y+2, p2z-4, 2);
explode(p2x-1, p2y+2, p2z+4, 2);
explode(p2x-1, p2y+2, p2z-4, 2);
}
}).start();
u[0].c3 = 300;
}
if(i==305&&u[0].c4==0){
ESP.heal(u[0].p);
var p2x, p2y, p2z;
p2x = Player.getX();
p2y = Player.getY()-2;
p2z = Player.getZ();
setTile(p2x+3, p2y+1, p2z+1, 37);
setTile(p2x+3, p2y+1, p2z-1, 37);
setTile(p2x-3, p2y+1, p2z+1, 37);
setTile(p2x-3, p2y+1, p2z-1, 37);
setTile(p2x+1, p2y+1, p2z+3, 37);
setTile(p2x+1, p2y+1, p2z-3, 37);
setTile(p2x-1, p2y+1, p2z+3, 37);
setTile(p2x-1, p2y+1, p2z-3, 37);
arroundMobHealthDown(u[0].p, 30, 10);
u[0].c4 = 1800;
}
}
if(u[1].p==pe){
if(i==302&&u[1].c1==0){
setTile(x+1, y+1, z, 51);
setTile(x-1, y+1, z, 51);
setTile(x, y+1, z+1, 51);
setTile(x, y+1, z-1, 51);
u[1].c1 = 150;
}
if(i==303&&u[1].c2==0){
px = Player.getX();
pz = Player.getZ();
yaw = Math.floor(getYaw());
sin = -Math.sin(yaw/180*Math.PI);
cos = Math.cos(yaw/180*Math.PI);
for(var n=3;n<25;n++)
setTile(px+n*sin, y+1, pz+n*cos, 51);
u[1].c2 = 300;
}
if(i==304&&u[1].c3==0){
var p2x, p2y, p2z;
p2x = Player.getX();
p2y = Player.getY()-2;
p2z = Player.getZ();
setTile(p2x+3, p2y+1, p2z+1, 51);
setTile(p2x+3, p2y+1, p2z-1, 51);
setTile(p2x-3, p2y+1, p2z+1, 51);
setTile(p2x-3, p2y+1, p2z-1, 51);
setTile(p2x+1, p2y+1, p2z+3, 51);
setTile(p2x+1, p2y+1, p2z-3, 51);
setTile(p2x-1, p2y+1, p2z+3, 51);
setTile(p2x-1, p2y+1, p2z-3, 51);
u[1].c3 = 300;
}
if(i==305&&u[1].c4==0){
ESP.heal(u[1].p);
arroundMobFireTicks(u[1].p, 30, 30);
u[1].c4 = 1800;
}
}
if(u[2].p==pe){
if(i==302&&u[2].c1==0){
setTile(x, y+1, z, 30);
setTile(x+1, y+1, z, 30);
setTile(x-1, y+1, z, 30);
setTile(x, y+1, z+1, 30);
setTile(x, y+1, z-1, 30);
u[2].c1 = 150;
}
if(i==303&&u[2].c2==0){
var p2xa2, p2za2;
p2xa2 = Math.abs(x-Player.getX());
p2za2 = Math.abs(z-Player.getZ());
if(p2xa2>p2za2){
for(var yy=y+1;yy<y+3;yy++)
for(var zz=z-1;zz<z+2;zz++)
setTile(x, yy, zz, 3);
}
else if(p2xa2<p2za2){
for(var xx=x-1;xx<x+2;xx++)
for(var yy=y+1;yy<y+3;yy++)
setTile(xx, yy, z, 3);
}
u[2].c2 = 300;
}
if(i==304&&u[2].c3==0){
setTiles(x-2, x+2, y+1, y+5, z-2, z+2, 20);
setTiles(x-1, x+2, y+2, y+4, z-1, z+1, 9);
new Thread({
run : function(){
Thread.sleep(7500);
setTiles(x-2, x+2, y+1, y+5, z-2, z+2, 0);
}
}).start();
u[2].c3 = 300;
}
if(i==305&&u[2].c4==0){
ESP.heal(u[2].p);
arroundMobHealthDown(u[2].p, 20, 6);
var p2x, p2y, p2z;
p2x = Player.getX();
p2y = Player.getY()-2;
p2z = Player.getZ();
setTile(p2x+4, p2y+3, p2z+1, 8);
setTile(p2x+4, p2y+3, p2z-1, 8);
setTile(p2x-4, p2y+3, p2z+1, 8);
setTile(p2x-4, p2y+3, p2z-1, 8);
setTile(p2x+1, p2y+3, p2z+4, 8);
setTile(p2x+1, p2y+3, p2z-4, 8);
setTile(p2x-1, p2y+3, p2z+4, 8);
setTile(p2x-1, p2y+3, p2z-4, 8);
new Thread({
run : function(){
Thread.sleep(4500);
setTile(p2x+4, p2y+3, p2z+1, 0);
setTile(p2x+4, p2y+3, p2z-1, 0);
setTile(p2x-4, p2y+3, p2z+1, 0);
setTile(p2x-4, p2y+3, p2z-1, 0);
setTile(p2x+1, p2y+3, p2z+4, 0);
setTile(p2x+1, p2y+3, p2z-4, 0);
setTile(p2x-1, p2y+3, p2z+4, 0);
setTile(p2x-1, p2y+3, p2z-4, 0);
}
}).start();
u[2].c4 = 1800;
}
}
if(u[3].p==pe){
if(i==302&&u[3].c1==0){
teleport(u[3].p, x+(x-Player.getX()), y+3, z+(z-Player.getZ()));
u[3].c1 = 150;
}
if(i==303&&u[3].c2==0){
px = Player.getX();
pz = Player.getZ();
yaw = Math.floor(getYaw());
sin = -Math.sin(yaw/180*Math.PI);
cos = Math.cos(yaw/180*Math.PI);
for(var n=3;n<25;n++)
setTile(px+n*sin, y+2, pz+n*cos, 35);
new Thread({
run : function(){
Thread.sleep(500);
ESP.antiLack(15);
for(var n=3;n<25;n++)
explode(px+n*sin, y+2, pz+n*cos, 1.8);
}
}).start();
u[3].c2 = 300;
}
if(i==304&&u[3].c3==0){
for(var yy=y+1;yy<y+5;yy++){
setTile(x+2, yy, z+2, 35);
setTile(x+2, yy, z, 35);
setTile(x+2, yy, z-2, 35);
setTile(x, yy, z+2, 35);
setTile(x, yy, z, 35);
setTile(x, yy, z-2, 35);
setTile(x-2, yy, z+2, 35);
setTile(x-2, yy, z, 35);
setTile(x-2, yy, z-2, 35);
}
new Thread({
run : function(){
Thread.sleep(2000);
explode(x, y+3, z, 3);
}
}).start();
u[3].c3 = 300;
}
if(i==305&&u[3].c4==0){
ESP.heal(u[3].p);
var p2x, p2y, p2z;
for each(var e in Entity.getAll()){
p2x = Math.abs(Player.getX()-Entity.getX(e));
p2y = Math.abs(Player.getY()-Entity.getY(e));
p2z = Math.abs(Player.getZ()-Entity.getZ(e));
if(p2x<=35&&p2y<=35&&p2z<=35&&u[3].p!=e){
teleport(e, Entity.getX(e), Entity.getY(e)+17, Entity.getZ(e));
Entity.setHealth(e, Entity.getHealth(e)-6);
}
}
u[3].c4 = 1800;
}
}
if(u[4].p==pe){
if(i==302&&u[4].c1==0){
var bo = Level.dropItem(x, y, z, 1, 352, 1, 0);
new Thread({
run : function(){
Thread.sleep(1500);
explode(Entity.getX(bo), Entity.getY(bo)+0.5, Entity.getZ(bo), 2.5);
}
}).start();
u[4].c1 = 150;
}
if(i==303&&u[4].c2==0){
px = Player.getX();
py = Player.getY();
pz = Player.getZ();
yaw = Math.floor(getYaw());
sin = -Math.sin(yaw/180*Math.PI);
cos = Math.cos(yaw/180*Math.PI);
for(var yy=py+1;yy<py+6;yy++)
setTile(px, yy, pz, 35);
new Thread({
run : function(){
Thread.sleep(300);
for(var yy=py+1;yy<py+6;yy++)
setTile(px, yy, pz, 0);
for(var ss=1;ss<6;ss++)
setTile(px+ss*sin, py+ss, pz+ss*cos, 35);
Thread.sleep(300);
for(var ss=1;ss<6;ss++){
setTile(px+ss*sin, py+ss, pz+ss*cos, 0);
setTile(px+ss*sin, py-1, pz+ ss*cos, 35);
}
Thread.sleep(300);
for(var ss=1;ss<6;ss++)
setTile(px+ss*sin, py-1, pz+ ss*cos, 0);
ESP.antiLack(5);
explode(px+4*sin, py-1, pz+4*cos, 2);
explode(px+7*sin, py-1, pz+7*cos, 2);
}
}).start();
u[4].c2 = 300;
}
if(i==304&&u[4].c3==0){
for(var yy=y+1;yy<y+5;yy++){
setTile(x+2, yy, z+2, 35);
setTile(x+2, yy, z, 35);
setTile(x+2, yy, z-2, 35);
setTile(x, yy, z+2, 35);
setTile(x, yy, z, 35);
setTile(x, yy, z-2, 35);
setTile(x-2, yy, z+2, 35);
setTile(x-2, yy, z, 35);
setTile(x-2, yy, z-2, 35);
}
new Thread({
run : function(){
Thread.sleep(2000);
explode(x, y+3, z, 2.5);
}
}).start();
u[4].c3 = 300;
}
if(i==305&&u[4].c4==0){
ESP.heal(u[4].p);
p2x = Player.getX();
p2y = Player.getY()-2;
p2z = Player.getZ();
for(var p2w=3;p2w<17;p2w++){
setTile(p2x+p2w, p2y+2, p2z+p2w, 35);
setTile(p2x+p2w, p2y+2, p2z, 35);
setTile(p2x+p2w, p2y+2, p2z-p2w, 35);
setTile(p2x, p2y+2, p2z+p2w, 35);
setTile(p2x, p2y+2, p2z-p2w, 35);
setTile(p2x-p2w, p2y+2, p2z+p2w, 35);
setTile(p2x-p2w, p2y+2, p2z, 35);
setTile(p2x-p2w, p2y+2, p2z-p2w, 35);
}
new Thread({
run : function(){
Thread.sleep(1500);
for(var p2w=2;p2w<8;p2w++){
setTile(p2x+p2w, p2y+2, p2z+p2w, 0);
setTile(p2x+p2w, p2y+2, p2z, 0);
setTile(p2x+p2w, p2y+2, p2z-p2w, 0);
setTile(p2x, p2y+2, p2z+p2w, 0);
setTile(p2x, p2y+2, p2z-p2w, 0);
setTile(p2x-p2w, p2y+2, p2z+p2w, 0);
setTile(p2x-p2w, p2y+2, p2z, 0);
setTile(p2x-p2w, p2y+2, p2z-p2w, 0);
ESP.antiLack(15);
explode(p2x+2*p2w, p2y+2, p2z+2*p2w, 2);
explode(p2x+2*p2w, p2y+2, p2z, 2);
explode(p2x+2*p2w, p2y+2, p2z-2*p2w, 2);
explode(p2x, p2y+2, p2z+2*p2w, 2);
explode(p2x, p2y+2, p2z-2*p2w, 2);
explode(p2x-2*p2w, p2y+2, p2z+2*p2w, 2);
explode(p2x-2*p2w, p2y+2, p2z, 2);
explode(p2x-2*p2w, p2y+2, p2z-2*p2w, 2);
}
Thread.sleep(60000);
autoRecover(p2x, p2y-3, p2z, 19, 3);
Thread.sleep(1500);
autoRecover(p2x, p2y-2, p2z, 19, 3);
Thread.sleep(1500);
autoRecover(p2x, p2y-1, p2z, 19, 3);
Thread.sleep(1500);
autoRecover(p2x, p2y, p2z, 19, 2);
}
}).start();
u[4].c4 = 1800;
}
}
if(u[5].p==pe){
if(i==302&&u[5].c1==0){
Entity.addEffect(u[5].p, MobEffect.movementSpeed, 75, 1, true, false);
u[5].c1 = 150;
}
if(i==303&&u[5].c2==0){
Entity.addEffect(u[5].p, MobEffect.regeneration, 150, 1, true, false);
u[5].c2 = 300;
}
if(i==304&&u[5].c3==0){
Entity.addEffect(u[5].p, MobEffect.damageResistance, 150, 1, true, false);
u[5].c3 = 300;
}
if(i==305&&u[5].c4==0){
ESP.heal(u[5].p);
Entity.addEffect(u[5].p, MobEffect.invisibility, 450, 1, true, false);
arroundMobHealthDown(u[5].p, 10, 4);
u[5].c4 = 1800;
}
}
if(u[6].p==pe){
if(i==302&&u[6].c1==0){
px = Player.getX();
pz = Player.getZ();
yaw = Math.floor(getYaw());
sin = -Math.sin(yaw/180*Math.PI);
cos = Math.cos(yaw/180*Math.PI);
for(var n=3;n<19;n++)
setTile(px+n*sin, y+2, pz+n*cos, 17);
setTile(px+19*sin, y+2, pz+19*cos, 42);
setTile(px+18*sin, y+1, pz+18*cos, 42);
setTile(px+18*sin, y+3, pz+18*cos, 42);
setTile(px+17*sin, y+1, pz+17*cos, 42);
setTile(px+17*sin, y+3, pz+17*cos, 42);
new Thread({
run : function(){
Thread.sleep(500);
ESP.antiLack(15);
for(var n=3;n<20;n++)
setTile(px+n*sin, y+2, pz+n*cos, 0);
setTile(px+18*sin, y+1, pz+18*cos, 0);
setTile(px+18*sin, y+3, pz+18*cos, 0);
setTile(px+17*sin, y+1, pz+17*cos, 0);
setTile(px+17*sin, y+3, pz+17*cos, 0);
ESP.antiLack(15);
explode(px+16*sin, y+2, pz+16*cos, 2);
explode(px+11*sin, y+2, pz+11*cos, 2);
}
}).start();
u[6].c1 = 150;
}
if(i==303&&u[6].c2==0){
px = Player.getX();
py = Player.getY();
pz = Player.getZ();
yaw = Math.floor(getYaw());
sin = -Math.sin(yaw/180*Math.PI);
cos = Math.cos(yaw/180*Math.PI);
setTile(px+3*sin, py, pz+3*cos, 17);
setTile(px+4*sin, py, pz+4*cos, 17);
setTile(px+5*sin, py-1, pz+5*cos, 41);
setTile(px+5*sin, py, pz+5*cos, 41);
setTile(px+5*sin, py+1, pz+5*cos, 41);
for(var ss=6;ss<11;ss++)
setTile(px+ss*sin, py, pz+ss*cos, 42);
new Thread({
run : function(){
Thread.sleep(500);
setTile(px+3*sin, py, pz+3*cos, 0);
setTile(px+4*sin, py, pz+4*cos, 0);
setTile(px+5*sin, py-1, pz+5*cos, 0);
setTile(px+5*sin, py, pz+5*cos, 0);
setTile(px+5*sin, py+1, pz+5*cos, 0);
setTile(px+5*sin, py, pz+5*cos, 17);
setTile(px+6*sin, py, pz+6*cos, 17);
setTile(px+7*sin, py-1, pz+7*cos, 41);
setTile(px+7*sin, py, pz+7*cos, 41);
setTile(px+7*sin, py+1, pz+7*cos, 41);
for(var ss=10;ss<13;ss++)
setTile(px+ss*sin, py, pz+ss*cos, 42);
Thread.sleep(500);
setTile(px+7*sin, py-1, pz+7*cos, 0);
setTile(px+7*sin, py+1, pz+7*cos, 0);
for(var ss=5;ss<13;ss++)
setTile(px+ss*sin, py, pz+ss*cos, 0);
ESP.antiLack(5);
explode(px+12*sin, py, pz+12*cos, 2);
explode(px+9*sin, py, pz+9*cos, 2);
}
}).start();
u[6].c2 = 300;
}
if(i==304&&u[6].c3==0){
for(var yy=y+1;yy<y+7;yy++)
setTile(x, yy, z, 35);
setTile(x, y+1, z+1, 35);
setTile(x, y+1, z-1, 35);
new Thread({
run : function(){
Thread.sleep(1000);
for(var yy=y+1;yy<y+7;yy++)
setTile(x, yy, z, 0)
setTile(x, y+1, z+1, 0);
setTile(x, y+1, z-1, 0);
ESP.antiLack(15);
explode(x, y+2, z, 3);
}
}).start();
u[6].c3 = 300;
}
if(i==305&&u[6].c4==0){
ESP.heal(u[6].p);
var p2x, p2y, p2z;
p2x = Player.getX();
p2y = Player.getY()-2;
p2z = Player.getZ();
for(var yy=y+1;yy<y+9;yy++){
setTile(p2x+7, yy, p2z+7, 17);
setTile(p2x+7, yy, p2z, 17);
setTile(p2x+7, yy, p2z-7, 17);
setTile(p2x, yy, p2z+7, 17);
setTile(p2x, yy, p2z-7, 17);
setTile(p2x-7, yy, p2z+7, 17);
setTile(p2x-7, yy, p2z, 17);
setTile(p2x-7, yy, p2z-7, 17);
}
new Thread({
run : function(){
Thread.sleep(2000);
for(var yy=y+1;yy<y+9;yy++){
setTile(p2x+7, yy, p2z+7, 0);
setTile(p2x+7, yy, p2z, 0);
setTile(p2x+7, yy, p2z-7, 0);
setTile(p2x, yy, p2z+7, 0);
setTile(p2x, yy, p2z-7, 0);
setTile(p2x-7, yy, p2z+7, 0);
setTile(p2x-7, yy, p2z, 0);
setTile(p2x-7, yy, p2z-7, 0);
}
ESP.antiLack(15);
explode(p2x+7, p2y+1, p2z+7, 3);
explode(p2x+7, p2y+1, p2z, 3);
explode(p2x+7, p2y+1, p2z-7, 3);
explode(p2x, p2y+1, p2z+7, 3);
explode(p2x, p2y+1, p2z, 3);
explode(p2x, p2y+1, p2z-7, 3);
explode(p2x-7, p2y+1, p2z+7, 3);
explode(p2x-7, p2y+1, p2z, 3);
explode(p2x-7, p2y+1, p2z-7, 3);
Thread.sleep(60000);
autoRecover(p2x, p2y-3, p2z, 21, 3);
Thread.sleep(1500);
autoRecover(p2x, p2y-2, p2z, 21, 3);
Thread.sleep(1500);
autoRecover(p2x, p2y-1, p2z, 21, 3);
Thread.sleep(1500);
autoRecover(p2x, p2y, p2z, 21, 2);
}
}).start();
u[6].c4 = 1800;
}
}
if(u[7].p==pe){
if(i==302&&u[7].c1==0){
Server.sendChat("I am Temmie!!!!!!!");
Server.sendChat("I am Temmie!!!!!!!");
u[7].c1 = 150;
}
if(i==303&&u[7].c2==0){
Entity.addEffect(u[7].p, MobEffect.movementSpeed, 150, 1, true, false);
u[7].c2 = 300;
}
if(i==304&&u[7].c3==0){
Level.spawnMob(x, y+2, z, 32);
Level.spawnMob(x, y+2, z, 32);
Level.spawnMob(x, y+2, z, 32);
u[7].c3 = 300;
}
if(i==305&&u[7].c4==0){
ESP.heal(u[7].p);
for(var n=0;n<20;n++)
Level.spawnMob(x, y+2, z, 32);
u[7].c4 = 1800;
}
}
if(u[8].p==pe){
if(i==302&&u[8].c1==0){
Entity.addEffect(u[8].p, MobEffect.movementSpeed, 75, 1, true, false);
u[8].c1 = 150;
}
if(i==303&&u[8].c2==0){
Entity.addEffect(u[8].p, MobEffect.movementSpeed, 150, 2, true, false);
Entity.addEffect(u[8].p, MobEffect.jump, 150, 2, true, false);
u[8].c2 = 300;
}
if(i==304&&u[8].c3==0){
setTile(x, y+1, z, 247);
new Thread({
run : function(){
Thread.sleep(500);
setTile(x, y+1, z, 0);
ESP.antiLack(15);
explode(x, y+2, z, 3);
}
}).start();
u[8].c3 = 300;
}
if(i==305&&u[8].c4==0){
ESP.heal(u[8].p);
Level.spawnMob(x, y+2, z, 33);
Level.spawnMob(x, y+2, z, 33);
Level.spawnMob(x, y+2, z, 33);
var ooo, uuu;
for(var n=0;n<5;n++){
var ooo = Level.spawnMob(x, y+2, z, 34);
var uuu = Level.spawnMob(x, y+2, z, 35);
Entity.rideAnimal(ooo, uuu);
}
u[8].c4 = 1800;
}
}
if(u[9].p==pe){
if(i==302&&u[9].c1==0){
setTile(x+2, y+2, z+1, 247);
setTile(x+2, y+2, z, 247);
setTile(x+2, y+2, z-1, 247);
setTile(x-2, y+2, z+1, 247);
setTile(x-2, y+2, z, 247);
setTile(x-2, y+2, z-1, 247);
setTile(x+1, y+2, z+2, 247);
setTile(x, y+2, z+2, 247);
setTile(x-1, y+2, z+2, 247);
setTile(x+1, y+2, z-2, 247);
setTile(x, y+2, z-2, 247);
setTile(x-1, y+2, z-2, 247);
u[9].c1 = 150;
}
if(i==303&&u[9].c2==0){
setTile(x, y+1, z, 247);
new Thread({
run : function(){
Thread.sleep(500);
setTile(x, y+1, z, 0);
ESP.antiLack(15);
explode(x, y+2, z, 2.5);
}
}).start();
u[9].c2 = 300;
}
if(i==304&&u[9].c3==0){
var p2xa2, p2za2;
p2xa2 = Math.abs(x-Player.getX());
p2za2 = Math.abs(z-Player.getZ());
if(p2xa2>p2za2){
for(var yy=y+1;yy<y+4;yy++)
for(var zz=z-2;zz<z+3;zz++)
setTile(x, yy, zz, 247);
}
else if(p2xa2<p2za2){
for(var xx=x-2;xx<x+3;xx++)
for(var yy=y+1;yy<y+4;yy++)
setTile(xx, yy, z, 247);
}
u[9].c3 = 300;
}
if(i==305&&u[9].c4==0){
ESP.heal(u[9].p);
ESP.antiLack(90);
Level.spawnMob(x, y+5, z, 65);
Level.spawnMob(x, y+10, z+3, 65);
Level.spawnMob(x+4, y+7, z, 65);
Level.spawnMob(x, y+15, z-7, 65);
Level.spawnMob(x-9, y+5, z, 65);
Level.spawnMob(x+6, y+17, z+3, 65);
Level.spawnMob(x-8, y+15, z-7, 65);
Level.spawnMob(x-5, y+15, z+5, 65);
Level.spawnMob(x-5, y+7, z, 65);
Level.spawnMob(x, y+14, z+8, 65);
Level.spawnMob(x+1, y+18, z+13, 65);
Level.spawnMob(x-2, y+13, z-6, 65);
new Thread({
run : function(){
Thread.sleep(60000);
autoRecover(p2x, p2y-4, p2z, 15, 3);
Thread.sleep(1500);
autoRecover(p2x, p2y-3, p2z, 15, 3);
Thread.sleep(1500);
autoRecover(p2x, p2y-2, p2z, 15, 3);
Thread.sleep(1500);
autoRecover(p2x, p2y-1, p2z, 15, 3);
Thread.sleep(1500);
autoRecover(p2x, p2y, p2z, 15, 2);
}
}).start();
u[9].c4 = 1800;
}
}
if(u[10].p==pe){
if(i==302&&u[10].c1==0){
setTile(x, y+1, z, 30);
setTile(x+1, y+1, z, 30);
setTile(x-1, y+1, z, 30);
setTile(x, y+1, z+1, 30);
setTile(x, y+1, z-1, 30);
u[10].c1 = 150;
}
if(i==303&&u[10].c2==0){
px = Player.getX();
pz = Player.getZ();
yaw = Math.floor(getYaw());
sin = -Math.sin(yaw/180*Math.PI);
cos = Math.cos(yaw/180*Math.PI);
for(var n=3;n<20;n++)
setTile(px+n*sin, y+1, pz+n*cos, 30);
u[10].c2 = 300;
}
if(i==304&&u[10].c3==0){
Level.spawnMob(x, y+2, z, 35);
Level.spawnMob(x, y+2, z, 35);
Level.spawnMob(x, y+2, z, 35);
u[10].c3 = 300;
}
if(i==305&&u[10].c4==0){
ESP.heal(u[10].p);
var p2x, p2y, p2z;
for each(var e in Entity.getAll()){
p2x = Math.abs(Player.getX()-Entity.getX(e));
p2y = Math.abs(Player.getY()-Entity.getY(e));
p2z = Math.abs(Player.getZ()-Entity.getZ(e));
if(p2x<=20&&p2y<=20&&p2z<=20&&u[10].p!=e){
if(ESP.isPlayer(e)) setTile(Entity.getX(e), Entity.getY(e)-1, Entity.getZ(e), 30);
else setTile(Entity.getX(e), Entity.getY(e), Entity.getZ(e), 30);
}
}
for(var n=0;n<6;n++)
Level.spawnMob(x, y+2, z, 35);
Level.spawnMob(x, y+2, z, 40);
Level.spawnMob(x, y+2, z, 40);
Level.spawnMob(x, y+2, z, 40);
u[10].c4 = 1800;
}
}
if(u[11].p==pe){
if(i==302&&u[11].c1==0){
px = Player.getX();
py = Math.floor(Player.getY())+1;
pz = Player.getZ();
yaw = Math.floor(getYaw());
sin = -Math.sin(yaw/180*Math.PI);
cos = Math.cos(yaw/180*Math.PI);
setTile(px, py, pz, 17);
setTile(px-sin, py+1, pz-cos, 17);
setTile(px-sin, py+3, pz-cos, 41);
setTile(px-2*sin, py+2, pz-2*cos, 41);
setTile(px-3*sin, py+1, pz-3*cos, 41);
for(var ss=3;ss<8;ss++)
setTile(px-ss*sin, py+ss, pz-ss*cos, 42);
new Thread({
run : function(){
Thread.sleep(300);
setTile(px-sin, py+1, pz-cos, 0);
setTile(px-sin, py+3, pz-cos, 0);
setTile(px-2*sin, py+2, pz-2*cos, 0);
setTile(px-3*sin, py+1, pz-3*cos, 0);
for(var ss=3;ss<8;ss++)
setTile(px-ss*sin, py+ss, pz-ss*cos, 0);
setTile(px, py+1, pz, 17);
setTile(px+sin, py+2, pz+cos, 41);
setTile(px, py+2, pz, 41);
setTile(px-sin, py+2, pz-cos, 41);
for(var ss=3;ss<8;ss++)
setTile(px, py+ss, pz, 42);
Thread.sleep(300);
setTile(px, py+1, pz, 0);
setTile(px+sin, py+2, pz+cos, 0);
setTile(px, py+2, pz, 0);
setTile(px-sin, py+2, pz-cos, 0);
for(var ss=3;ss<8;ss++)
setTile(px, py+ss, pz, 0);
setTile(px+sin, py+1, pz+cos, 17);
setTile(px+sin, py+3, pz+cos, 41);
setTile(px+2*sin, py+2, pz+2*cos, 41);
setTile(px+3*sin, py+1, pz+3*cos, 41);
for(var ss=3;ss<8;ss++)
setTile(px+ss*sin, py+ss, pz+ss*cos, 42);
Thread.sleep(300);
setTile(px, py, pz, 0);
setTile(px+sin, py+1, pz+cos, 0);
setTile(px+sin, py+3, pz+cos, 0);
setTile(px+2*sin, py+2, pz+2*cos, 0);
setTile(px+3*sin, py+1, pz+3*cos, 0);
for(var ss=3;ss<8;ss++)
setTile(px+ss*sin, py+ss, pz+ss*cos, 0);
setTile(px+sin, py-1, pz+cos, 17);
setTile(px+2*sin, py-1, pz+2*cos, 17);
setTile(px+3*sin, py-1, pz+3*cos, 41);
setTile(px+3*sin, py, pz+3*cos, 41);
setTile(px+3*sin, py-2, pz+3*cos, 41);
for(var ss=4;ss<9;ss++)
setTile(px+ss*sin, py-1, pz+ss*cos, 42);
Thread.sleep(300);
setTile(px+sin, py-1, pz+cos, 0);
setTile(px+2*sin, py-1, pz+2*cos, 0);
setTile(px+3*sin, py-1, pz+3*cos, 0);
setTile(px+3*sin, py, pz+3*cos, 0);
setTile(px+3*sin, py-2, pz+3*cos, 0);
for(var ss=4;ss<9;ss++)
setTile(px+ss*sin, py-1, pz+ss*cos, 0);
ESP.antiLack(15);
explode(px+8*sin, py-1, pz+8*cos, 2);
explode(px+4*sin, py-1, pz+4*cos, 2);
}
}).start();
u[11].c1 = 150;
}
if(i==303&&u[11].c2==0){
px = Player.getX();
pz = Player.getZ();
yaw = Math.floor(getYaw());
sin = -Math.sin(yaw/180*Math.PI);
cos = Math.cos(yaw/180*Math.PI);
for(var n=3;n<25;n++)
setTile(px+n*sin, y+1, pz+n*cos, 51);
u[11].c2 = 300;
}
if(i==304&&u[11].c3==0){
arroundMobFireTicks(u[11].p, 10, 10);
u[11].c3 = 300;
}
if(i==305&&u[11].c4==0){
ESP.heal(u[11].p);
var p2x, p2y, p2z;
p2x = Player.getX();
p2y = Player.getY()-2;
p2z = Player.getZ();
autoRecover(p2x, p2y+1, p2z, 16, 51);
Entity.addEffect(u[11].p, MobEffect.fireResistance, 200, 0, true, false);
u[11].c4 = 1800;
}
}
if(u[12].p==pe){
if(i==302&&u[12].c1==0){
Entity.addEffect(u[12].p, MobEffect.regeneration, 75, 1, true, false);
u[12].c1 = 150;
}
if(i==303&&u[12].c2==0){
Entity.addEffect(u[12].p, MobEffect.movementSpeed, 150, 1, true, false);
u[12].c2 = 300;
}
if(i==304&&u[12].c3==0){
arroundMobHealthDown(u[12].p, 10, 6);
u[12].c3 = 300;
}
if(i==305&&u[12].c4==0){
if(u[12].s==false){
ESP.sbm("Save", true);
u[12].s = [[], Level.getTime()];
for each(var e in Entity.getAll()){
if(Player.isPlayer(e)||fe==e||magma==e) u[12].s[0].push([e, Entity.getX(e),  Entity.getY(e),  Entity.getZ(e),  Entity.getHealth(e)]);
}
}
else{
ESP.heal(u[12].p);
ESP.sbm("Load", true);
Level.setTime(u[12].s[1]);
var cache = u[12].s[0];
for(var n=0;n<cache.length;n++){
teleport(cache[n][0], cache[n][1], cache[n][2]+0.5, cache[n][3]);
Entity.setHealth(cache[n][0], cache[n][4]);
}
u[12].s = false;
u[12].c4 = 1800;
}
}
}
if(u[13].p==pe){
if(i==302&&u[13].c1==0){
Entity.addEffect(u[13].p, MobEffect.regeneration, 75, 1, true, false);
u[13].c1 = 150;
}
if(i==303&&u[13].c2==0){
Entity.addEffect(u[13].p, MobEffect.movementSpeed, 150, 1, true, false);
u[13].c2 = 300;
}
if(i==304&&u[13].c3==0){
var p2x, p2y, p2z;
p2x = Player.getX();
p2y = Player.getY()-2;
p2z = Player.getZ();
ESP.antiLack(15);
explode(p2x+7, p2y+1, p2z+7, 2);
explode(p2x+7, p2y+1, p2z, 2);
explode(p2x+7, p2y+1, p2z-7, 2);
explode(p2x, p2y+1, p2z+7, 2);
explode(p2x, p2y+1, p2z, 2);
explode(p2x, p2y+1, p2z-7, 2);
explode(p2x-7, p2y+1, p2z+7, 2);
explode(p2x-7, p2y+1, p2z, 2);
explode(p2x-7, p2y+1, p2z-7, 2);
new Thread({
run : function(){
Thread.sleep(10000);
autoRecover(p2x, p2y, p2z, 11, 2);
}
}).start();
u[13].c3 = 300;
}
if(i==305&&u[13].c4==0){
ESP.heal(u[13].p);
var p2x, p2y, p2z;
for each(var e in Entity.getAll()){
p2x = Math.abs(Player.getX()-Entity.getX(e));
p2y = Math.abs(Player.getY()-Entity.getY(e));
p2z = Math.abs(Player.getZ()-Entity.getZ(e));
if(p2x<=20&&p2y<=20&&p2z<=20&&u[13].p!=e){
if(ESP.isPlayer(e)) Entity.setHealth(e, 1);
else Entity.setHealth(e, 0);
}
}
u[13].c4 = 1800;
}
}
if(u[14].p==pe){
if(i==302&&u[14].c1==0){
if(u[14].s==false){
u[14].s = [x, y, z];
setTile(x, y, z, 89);
new Thread({
run : function(){
Thread.sleep(1000);
setTile(x, y, z, b, bd);
}
}).start();
}
else{
teleport(u[14].p, u[14].s[0], u[14].s[1]+3, u[14].s[2]);
u[14].s = false;
u[14].c1 = 150;
}
}
if(i==303&&u[14].c2==0){
Entity.addEffect(u[14].p, MobEffect.movementSpeed, 150, 2, true, false);
var p2x, p2y, p2z;
for each(var e in Entity.getAll()){
p2x = Math.abs(Player.getX()-Entity.getX(e));
p2y = Math.abs(Player.getY()-Entity.getY(e));
p2z = Math.abs(Player.getZ()-Entity.getZ(e));
if(p2x<=30&&p2y<=30&&p2z<=30&&u[14].p!=e&&Entity.getEntityTypeId(e)<64){
try{
Entity.addEffect(e, MobEffect.movementSlowdown, 75, 9, true, false);
}
catch(e){
//null
}
}
}
u[14].c2 = 300;
}
if(i==304&&u[14].c3==0){
px = Player.getX();
pz = Player.getZ();
yaw = Math.floor(getYaw());
sin = -Math.sin(yaw/180*Math.PI);
cos = Math.cos(yaw/180*Math.PI);
for(var n=3;n<25;n++)
setTile(px+n*sin, y+2, pz+n*cos, 35);
new Thread({
run : function(){
Thread.sleep(500);
ESP.antiLack(15);
for(var n=3;n<25;n++)
explode(px+n*sin, y+2, pz+n*cos, 1.8);
}
}).start();
u[14].c3 = 300;
}
if(i==305&&u[14].c4==0){
ESP.heal(u[14].p);
var p2x, p2y, p2z;
for each(var e in Entity.getAll()){
p2x = Math.abs(Player.getX()-Entity.getX(e));
p2y = Math.abs(Player.getY()-Entity.getY(e));
p2z = Math.abs(Player.getZ()-Entity.getZ(e));
if(p2x<=40&&p2y<=40&&p2z<=40&&u[14].p!=e){
try{
Entity.addEffect(e, MobEffect.blindness, 150, 0, true, false);
}
catch(e){
//null
}
teleport(e, Entity.getX(e), Entity.getY(e)+9, Entity.getZ(e));
Entity.setHealth(e, Entity.getHealth(e)-6);
Entity.setFireTicks(e, 5);
}
}
u[14].c4 = 1800;
}
}

}

//ESP - Last
if(l.fire==pe){
if(i==302&&l.fc[0]==0){
px = Player.getX();
pz = Player.getZ();
yaw = Math.floor(getYaw());
sin = -Math.sin(yaw/180*Math.PI);
cos = Math.cos(yaw/180*Math.PI);
for(var n=3;n<20;n++)
setTile(px+n*sin, y+1, pz+n*cos, 51);
l.fc[0] = 150;
}
if(i==303&&l.fc[1]==0){
arroundMobFireTicks(pe, 10, 10);
l.fc[1] = 300;
}
if(i==304&&l.fc[2]==0){
ESP.antiLack(15);
explode(x, y+1, z, 3);
for(var xx=x-3;xx<x+4;xx++)
for(var yy=y-4;yy<y+1;yy++)
for(var zz=z-3;zz<z+4;zz++)
if(getTile(xx, yy, zz)==0){
setTile(xx, yy, zz, 51);
}
new Thread({
run : function(){
Thread.sleep(1000);
autoRecover(x, y-3, z, 4, 3);
Thread.sleep(1500);
autoRecover(x, y-2, z, 4, 3);
Thread.sleep(1500);
autoRecover(x, y-1, z, 4, 3);
Thread.sleep(1500);
autoRecover(x, y, z, 4, 2);
}
}).start();
l.fc[2] = 300;
}
if(i==305&&l.fc[3]==0){
ESP.heal(pe);
ESP.sbm("Remote Burning", true);
var p2x, p2y, p2z;
for each(var e in Entity.getAll()){
p2x = Math.abs(Player.getX()-Entity.getX(e));
p2y = Math.abs(Player.getY()-Entity.getY(e));
p2z = Math.abs(Player.getZ()-Entity.getZ(e));
if(p2x<=25&&p2y<=25&&p2z<=25&&pe!=e&&Entity.getEntityTypeId(e)<64){
Entity.setHealth(e, Entity.getHealth(e)-10);
Entity.setFireTicks(e, 30);
}
}
l.fc[3] = 1800;
}

}
if(l.ice==pe){
if(i==302&&l.ic[0]==0){
ESP.makeBind(x, y, z, 79);
l.ic[0] = 150;
}
if(i==303&&l.ic[1]==0){
px = Player.getX();
pz = Player.getZ();
yaw = Math.floor(getYaw());
sin = -Math.sin(yaw/180*Math.PI);
cos = Math.cos(yaw/180*Math.PI);
for(var n=3;n<25;n++)
setTile(px+n*sin, y+2, pz+n*cos, 79);
new Thread({
run : function(){
Thread.sleep(250);
ESP.antiLack(5);
for(var n=3;n<25;n++){
setTile(px+n*sin, y+2, pz+n*cos, 0);
explode(px+n*sin, y+2, pz+n*cos, 1.5);
}
}
}).start();
l.ic[1] = 300;
}
if(i==304&&l.ic[2]==0){
var p2x, p2y, p2z;
var p2c = []
for each(var e in Entity.getAll()){
p2x = Math.abs(Player.getX()-Entity.getX(e));
p2y = Math.abs(Player.getY()-Entity.getY(e));
p2z = Math.abs(Player.getZ()-Entity.getZ(e));
if(p2x<=15&&p2y<=15&&p2z<=15&&pe!=e&&Entity.getEntityTypeId(e)<64){
setTile(Entity.getX(e), Entity.getY(e), Entity.getZ(e), 79);
p2c.push([Entity.getX(e), Entity.getY(e), Entity.getZ(e)]);
}
}
new Thread({
run : function(){
Thread.sleep(500);
ESP.antiLack(5);
for(var n in p2c){
setTile(p2c[n][0], p2c[n][1], p2c[n][2], 0);
explode(p2c[n][0], p2c[n][1]+1, p2c[n][2], 1.8);
}
}
}).start();
l.ic[2] = 300;
}
if(i==305&&l.ic[3]==0){
ESP.heal(pe);
ESP.sbm("Ice Age", true);
var p2x, p2y, p2z;
for each(var e in Entity.getAll()){
p2x = Math.abs(Player.getX()-Entity.getX(e));
p2y = Math.abs(Player.getY()-Entity.getY(e));
p2z = Math.abs(Player.getZ()-Entity.getZ(e));
if(p2x<=23&&p2y<=23&&p2z<=23&&pe!=e&&Entity.getEntityTypeId(e)<64){
Entity.setHealth(e, Entity.getHealth(e)-10);
setTile(Entity.getX(e), Entity.getY(e), Entity.getZ(e), 79);
try{
Entity.addEffect(e, MobEffect.movementSlowdown, 20, 9, true, false);
}
catch(e){
//null
}
}
}
p2x = Player.getX();
p2y = Player.getY()-2;
p2z = Player.getZ();
new Thread({
run : function(){
for(var xx=p2x-16;xx<p2x+17;xx++)
for(var yy=p2y-1;yy<p2y+2;yy++)
for(var zz=p2z-16;zz<p2z+17;zz++)
if(getTile(xx, yy, zz)!=0&&getTile(xx, yy, zz)!=7){
setTile(xx, yy, zz, 79);
}
}
}).start();
l.ic[3] = 1800;
}

}
if(l.d==pe){
if(i==302&&l.dc[0]==0){
teleport(pe, x+(x-Player.getX()), y+3, z+(z-Player.getZ()));
l.dc[0] = 150;
}
if(i==303&&l.dc[1]==0){
px = Player.getX();
pz = Player.getZ();
yaw = Math.floor(getYaw());
sin = -Math.sin(yaw/180*Math.PI);
cos = Math.cos(yaw/180*Math.PI);
for(var n=3;n<25;n++)
setTile(px+n*sin, y+2, pz+n*cos, 49);
new Thread({
run : function(){
Thread.sleep(250);
ESP.antiLack(5);
for(var n=3;n<25;n++){
setTile(px+n*sin, y+2, pz+n*cos, 0);
explode(px+n*sin, y+2, pz+n*cos, 1.5);
}
}
}).start();
l.dc[1] = 300;
}
if(i==304&&l.dc[2]==0){
var p2x, p2z;
p2x = Math.abs(x-Player.getX());
p2z = Math.abs(z-Player.getZ());
if(p2x>p2z) setTiles(x, x, y+1, y+3, z-2, z+2, 49);
else setTiles(x-2, x+2, y+1, y+3, z, z, 49);
l.dc[2] = 300;
}
if(i==305&&l.dc[3]==0){
ESP.heal(pe);
ESP.sbm("Black Circle", true);
p2x = Player.getX();
p2y = Player.getY()-2;
p2z = Player.getZ();
var wsin, wcos;
for(var n=0;n<360;n++){
wsin = Math.sin(n*Math.PI/36);
wcos = Math.cos(n*Math.PI/36);
setTile(p2x+0.5+15*wsin, p2y+2, p2z+0.5+15*wcos, 49);
}
arroundMobHealthDown(pe, 18, 10);
new Thread({
run : function(){
Thread.sleep(5000);
arroundMobHealthDown(pe, 23, 5);
Thread.sleep(5000);
for(var n=0;n<360;n++){
wsin = Math.sin(n*Math.PI/36);
wcos = Math.cos(n*Math.PI/36);
setTile(p2x+0.5+15*wsin, p2y+2, p2z+0.5+15*wcos, 0);
}
}
}).start();
l.dc[3] = 1800;
}

}
if(l.alex==pe){
if(i==302&&l.ac[0]==0){
if(b!=7){
Level.destroyBlock(x, y, z, true);
}
for(var xx=x-1;xx<x+2;xx++)
for(var yy=y-1;yy<y+2;yy++)
for(var zz=z-1;zz<z+2;zz++)
if(getTile(xx, yy, zz)!=7){
setTile(xx, yy, zz, 0);
}
l.ac[0] = 150;
}
if(i==303&&l.ac[1]==0){
var p2x, p2z;
p2x = Math.abs(x-Player.getX());
p2z = Math.abs(z-Player.getZ());
if(p2x>p2z){
setTile(x, y+3, z-4, 42);
setTile(x, y+2, z-3, 42);
setTile(x, y+2, z-2, 42);
setTile(x, y+1, z-1, 42);
setTile(x, y+1, z+1, 42);
setTile(x, y+2, z+2, 42);
setTile(x, y+2, z+3, 42);
setTile(x, y+3, z+4, 42);
}
else if(p2x<p2z){
setTile(x-4, y+3, z, 42);
setTile(x-3, y+2, z, 42);
setTile(x-2, y+2, z, 42);
setTile(x-1, y+1, z, 42);
setTile(x+1, y+1, z, 42);
setTile(x+2, y+2, z, 42);
setTile(x+3, y+2, z, 42);
setTile(x+4, y+3, z, 42);
}
setTile(x, y+1, z, 42);
for(var yy=y+2;yy<y+8;yy++)
setTile(x, yy, z, 17);
new Thread({
run : function(){
Thread.sleep(3000);
ESP.antiLack(5);
explode(x, y+3, z, 4);
}
}).start();
l.ac[1] = 300;
}
if(i==304&&l.ac[2]==0){
setTile(x, y+1, z, 46);
new Thread({
run : function(){
Thread.sleep(500);
ESP.antiLack(90);
explode(x, y+2, z, 1);
Thread.sleep(8000);
autoRecover(x, y, z, 5, 2);
Thread.sleep(1500);
autoRecover(x, y-3, z, 4, 3);
Thread.sleep(1500);
autoRecover(x, y-5, z, 5, 3);
Thread.sleep(1500);
autoRecover(x, y-1, z, 5, 3);
Thread.sleep(1500);
autoRecover(x, y, z, 5, 2);
}
}).start();
l.ac[2] = 300;
}
if(i==305&&l.ac[3]==0){
ESP.heal(pe);
ESP.sbm("The House");
setTile(x-3, y+1, z-2, 4);
setTile(x-3, y+1, z-1, 4);
setTile(x-3, y+1, z, 4);
setTile(x-3, y+1, z+1, 4);
setTile(x-3, y+1, z+2, 4);
setTile(x-3, y+2, z-2, 4);
setTile(x-3, y+2, z-1, 4);
setTile(x-3, y+2, z, 4);
setTile(x-3, y+2, z+1, 4);
setTile(x-3, y+2, z+2, 4);
setTile(x-3, y+3, z-2, 5);
setTile(x-3, y+3, z-1, 102);
setTile(x-3, y+3, z, 5);
setTile(x-3, y+3, z+1, 102);
setTile(x-3, y+3, z+2, 5);
setTile(x-3, y+4, z-2, 5);
setTile(x-3, y+4, z-1, 5);
setTile(x-3, y+4, z, 5);
setTile(x-3, y+4, z+1, 5);
setTile(x-3, y+4, z+2, 5);
setTile(x-3, y+5, z-3, 5);
setTile(x-3, y+5, z-2, 5);
setTile(x-3, y+5, z-1, 5);
setTile(x-3, y+5, z, 5);
setTile(x-3, y+5, z+1, 5);
setTile(x-3, y+5, z+2, 5);
setTile(x-3, y+5, z+3, 5);
setTile(x-2, y+1, z-3, 4);
setTile(x-2, y+1, z-2, 4);
setTile(x-2, y+1, z-1, 4);
setTile(x-2, y+1, z, 4);
setTile(x-2, y+1, z+1, 4);
setTile(x-2, y+1, z+2, 4);
setTile(x-2, y+1, z+3, 4);
setTile(x-2, y+2, z-3, 4);
setTile(x-2, y+2, z+3, 4);
setTile(x-2, y+3, z-3, 5);
setTile(x-2, y+3, z+3, 5);
setTile(x-2, y+4, z-3, 5);
setTile(x-2, y+4, z+3, 5);
setTile(x-2, y+5, z-3, 5);
setTile(x-2, y+5, z-2, 5);
setTile(x-2, y+5, z-1, 5);
setTile(x-2, y+5, z, 5);
setTile(x-2, y+5, z+1, 5);
setTile(x-2, y+5, z+2, 5);
setTile(x-2, y+5, z+3, 5);
setTile(x-1, y+1, z-3, 4);
setTile(x-1, y+1, z-2, 4);
setTile(x-1, y+1, z-1, 4);
setTile(x-1, y+1, z, 4);
setTile(x-1, y+1, z+1, 4);
setTile(x-1, y+1, z+2, 4);
setTile(x-1, y+1, z+3, 4);
setTile(x-1, y+1, z+4, 44, 3);
setTile(x-1, y+2, z-3, 4);
setTile(x-1, y+2, z+3, 4);
setTile(x-1, y+3, z-3, 102);
setTile(x-1, y+3, z+3, 5);
setTile(x-1, y+4, z-3, 5);
setTile(x-1, y+4, z+3, 5);
setTile(x-1, y+5, z-3, 5);
setTile(x-1, y+5, z-2, 5);
setTile(x-1, y+5, z-1, 5);
setTile(x-1, y+5, z, 5);
setTile(x-1, y+5, z+1, 5);
setTile(x-1, y+5, z+2, 5);
setTile(x-1, y+5, z+3, 5);
setTile(x, y+1, z-3, 4);
setTile(x, y+1, z-2, 4);
setTile(x, y+1, z-1, 4);
setTile(x, y+1, z, 4);
setTile(x, y+1, z+1, 4);
setTile(x, y+1, z+2, 4);
setTile(x, y+1, z+3, 4);
setTile(x, y+1, z+4, 44, 3);
setTile(x, y+2, z-3, 4);
setTile(x, y+2, z+3, 64, 1);
setTile(x, y+3, z-3, 5);
setTile(x, y+3, z+3, 64, 8);
setTile(x, y+4, z-3, 5);
setTile(x, y+4, z+3, 5);
setTile(x, y+5, z-3, 5);
setTile(x, y+5, z-2, 5);
setTile(x, y+5, z-1, 5);
setTile(x, y+5, z, 5);
setTile(x, y+5, z+1, 5);
setTile(x, y+5, z+2, 5);
setTile(x, y+5, z+3, 5);
setTile(x+1, y+1, z-3, 4);
setTile(x+1, y+1, z-2, 4);
setTile(x+1, y+1, z-1, 4);
setTile(x+1, y+1, z, 4);
setTile(x+1, y+1, z+1, 4);
setTile(x+1, y+1, z+2, 4);
setTile(x+1, y+1, z+3, 4);
setTile(x+1, y+1, z+4, 44, 3);
setTile(x+1, y+2, z-3, 4);
setTile(x+1, y+2, z+3, 4);
setTile(x+1, y+3, z-3, 102);
setTile(x+1, y+3, z+3, 5);
setTile(x+1, y+4, z-3, 5);
setTile(x+1, y+4, z+3, 5);
setTile(x+1, y+5, z-3, 5);
setTile(x+1, y+5, z-2, 5);
setTile(x+1, y+5, z-1, 5);
setTile(x+1, y+5, z, 5);
setTile(x+1, y+5, z+1, 5);
setTile(x+1, y+5, z+2, 5);
setTile(x+1, y+5, z+3, 5);
setTile(x+2, y+1, z-3, 4);
setTile(x+2, y+1, z-2, 4);
setTile(x+2, y+1, z-1, 4);
setTile(x+2, y+1, z, 4);
setTile(x+2, y+1, z+1, 4);
setTile(x+2, y+1, z+2, 4);
setTile(x+2, y+1, z+3, 4);
setTile(x+2, y+2, z-3, 4);
setTile(x+2, y+2, z+3, 4);
setTile(x+2, y+3, z-3, 5);
setTile(x+2, y+3, z+3, 5);
setTile(x+2, y+4, z-3, 5);
setTile(x+2, y+4, z+3, 5);
setTile(x+2, y+5, z-3, 5);
setTile(x+2, y+5, z-2, 5);
setTile(x+2, y+5, z-1, 5);
setTile(x+2, y+5, z, 5);
setTile(x+2, y+5, z+1, 5);
setTile(x+2, y+5, z+2, 5);
setTile(x+2, y+5, z+3, 5);
setTile(x+3, y+1, z-2, 4);
setTile(x+3, y+1, z-1, 4);
setTile(x+3, y+1, z, 4);
setTile(x+3, y+1, z+1, 4);
setTile(x+3, y+1, z+2, 4);
setTile(x+3, y+2, z-2, 4);
setTile(x+3, y+2, z-1, 4);
setTile(x+3, y+2, z, 4);
setTile(x+3, y+2, z+1, 4);
setTile(x+3, y+2, z+2, 4);
setTile(x+3, y+3, z-2, 5);
setTile(x+3, y+3, z-1, 102);
setTile(x+3, y+3, z, 5);
setTile(x+3, y+3, z+1, 102);
setTile(x+3, y+3, z+2, 5);
setTile(x+3, y+4, z-2, 5);
setTile(x+3, y+4, z-1, 5);
setTile(x+3, y+4, z, 5);
setTile(x+3, y+4, z+1, 5);
setTile(x+3, y+4, z+2, 5);
setTile(x+3, y+5, z-3, 5);
setTile(x+3, y+5, z-2, 5);
setTile(x+3, y+5, z-1, 5);
setTile(x+3, y+5, z, 5);
setTile(x+3, y+5, z+1, 5);
setTile(x+3, y+5, z+2, 5);
setTile(x+3, y+5, z+3, 5);
arroundMobHealthDown(pe, 20, 10);
l.ac[3] = 1800;
}

}
if(l.t==pe){
if(i==302&&l.tc[0]==0){
teleport(pe, x+(x-Player.getX()), y+3, z+(z-Player.getZ()));
l.tc[0] = 150;
}
if(i==303&&l.tc[1]==0){
var p2x, p2y, p2z;
for each(var e in Entity.getAll()){
p2x = Math.abs(Player.getX()-Entity.getX(e));
p2y = Math.abs(Player.getY()-Entity.getY(e));
p2z = Math.abs(Player.getZ()-Entity.getZ(e));
if(p2x<=15&&p2y<=15&&p2z<=15&&pe!=e&&Entity.getEntityTypeId(e)<64){
try{
Entity.addEffect(e, MobEffect.movementSlowdown, 150, 9, true, false);
}
catch(e){
//null
}
}
}
Entity.addEffect(pe, MobEffect.movementSpeed, 150, 1, true, false);
l.tc[1] = 300;
}
if(i==304&&l.tc[2]==0){
px = Player.getX();
pz = Player.getZ();
yaw = Math.floor(getYaw());
sin = -Math.sin(yaw/180*Math.PI);
cos = Math.cos(yaw/180*Math.PI);
ESP.antiLack(5);
for(var n=3;n<25;n++)
explode(px+n*sin, y+1, pz+n*cos, 1.5);
l.tc[2] = 300;
}
if(i==305&&l.tc[3]==0){
ESP.heal(pe);
ESP.sbm("Blind Throw");
var p2x, p2y, p2z;
for each(var e in Entity.getAll()){
p2x = Math.abs(Player.getX()-Entity.getX(e));
p2y = Math.abs(Player.getY()-Entity.getY(e));
p2z = Math.abs(Player.getZ()-Entity.getZ(e));
if(p2x<=25&&p2y<=25&&p2z<=25&&pe!=e&&Entity.getEntityTypeId(e)<64){
Entity.setHealth(e, Entity.getHealth(e)-6);
teleport(e, Entity.getX(e), Entity.getY(e)+11, Entity.getZ(e));
try{
Entity.addEffect(e, MobEffect.blindness, 300, 0, true, false);
}
catch(e){
//null
}
}
}
l.tc[3] = 1800;
}

}

if(getPlayers){
if(Player.isPlayer(Player.getEntity())) playerAddedHandler(Player.getEntity());
}


}


function attackHook(a, v){
//admin's+
if(getCarriedItem()==347){
ESP.sbm("내 체력 "+Entity.getHealth(a)+" / 니 체력 "+Entity.getHealth(v));
preventDefault();
}
if(getCarriedItem()==345){
if(admin==5){
Entity.setHealth(v, Entity.getHealth(v)+2);
preventDefault();
}
if(admin==6){
Entity.setHealth(v, 0);
preventDefault();
}
if(admin==8){
ESP.send(v);
preventDefault();
}

}

if(espOnoff){
if(sand[0]!=null){
for(var n=0;n<sand.length;n++){
if(sand[n]==ESP.getUser()){
if(item()==302&&Cool.isFinished(m1a[n])){
Entity.setFireTicks(v, 6);
preventDefault();
m1[n] = true;
m1a[n] = 150;
skillCool(ESP.getUser(), 1);
}
break;
}}}
if(blood[0]!=null){
for(var n=0;n<blood.length;n++){
if(blood[n]==ESP.getUser()){
if(item()==302&&Cool.isFinished(b1a[n])){
Entity.setHealth(v, Entity.getHealth(v)-6);
preventDefault();
b1[n] = true;
b1a[n] = 150;
skillCool(ESP.getUser(), 1);
}
if(item()==303&&Cool.isFinished(b2a[n])){
Entity.setHealth(v, Entity.getHealth(v)-5);
Entity.setHealth(a, Entity.getHealth(a)+5);
preventDefault();
b2[n] = true;
b2a[n] = 300;
skillCool(ESP.getUser(), 2);
}
if(item()==305&&Cool.isFinished(b4a[n])&&b4b[n]==1){
b4b[n] = 0;
Level.setTime(700);
if(Entity.getHealth(v)>20){
Entity.setHealth(v, Entity.getHealth(v)-20);
}
else if(Entity.getHealth(v)<=20){
Entity.setHealth(v, 1);
}
vampireHyperPlus(blood[n], v, 15, 5);
Entity.setHealth(a, Entity.getHealth(a)+5);
Entity.removeEffect(blood[n], MobEffect.nightVision);
preventDefault();
b4[n] = true;
b4a[n] = 1800;
skillCool(ESP.getUser(), 4);
}
break;
}}}
if(air[0]!=null){
for(var n=0;n<air.length;n++){
if(air[n]==ESP.getUser()){
if(item()==304&&Cool.isFinished(a3a[n])){
Entity.setVelX(v, 4*Entity.getX(v)-4*Player.getX());
Entity.setVelZ(v, 4*Entity.getZ(v)-4*Player.getZ());
preventDefault();
skillCool(ESP.getUser(), 3);
a3[n] = true;
a3a[n]  = 300;
}
if(item()==305&&Cool.isFinished(a4a[n])){
ESP.sbm("Hyper Throw", true);
ESP.heal(air[n]);
arroundMobHealthDown(a, 20, 5);
teleport(v, Entity.getX(v),  Entity.getY(v)+23,  Entity.getZ(v));
preventDefault();
a4[n] = true;
a4a[n] = 1800;
skillCool(ESP.getUser(), 4);
}
break;
}}}
if(titan[0]!=null){
for(var n=0;n<titan.length;n++){
if(titan[n]==ESP.getUser()){
if(item()==305&&Cool.isFinished(tt4a[n])){
tt4b[n] = v;
tt4c[n] = true;
}
break;
}}}
if(bind[0]!=null){
for(var n=0;n<bind.length;n++){
if(bind[n]==ESP.getUser()){
if(item()==305&&Cool.isFinished(bb4a[n])){
ESP.sbm("Shadow Web", true);
ESP.heal(bind[n]);
bb4b[n] = v;
arroundMobBindPlus(bind[n], 40);
preventDefault();
bb4c[n] = true;
bb4[n] = true;
bb4a[n] = 1800;
skillCool(ESP.getUser(), 4);
}
break;
}}}
if(heal[0]!=null){
for(var n=0;n<heal.length;n++){
if(heal[n]==ESP.getUser()){
if(item()==303&&Cool.isFinished(h2a[n])){
Entity.setHealth(a, Entity.getHealth(a)+6);
Entity.setHealth(v, Entity.getHealth(v)+5);
preventDefault();
h2[n] = true;
h2a[n] = 300;
skillCool(ESP.getUser(), 2);
}
break;
}}}
if(assassin[0]!=null){
for(var n=0;n<assassin.length;n++){
if(assassin[n]==ESP.getUser()){
if(item()==305&&Cool.isFinished(as4a[n])){
ESP.heal(assassin[n]);
Entity.setHealth(v, Math.floor(Math.random()*4));
ESP.sbm("Assassination", true);
preventDefault();
as4[n] = true;
as4a[n] = 1800;
skillCool(ESP.getUser(), 4);
}
break;
}}}
if(poison[0]!=null){
for(var n=0;n<poison.length;n++){
if(poison[n]==ESP.getUser()){
if(item()==302&&Cool.isFinished(p1a[n])){
Entity.setHealth(v, Entity.getHealth(v)-2);
preventDefault();
p1b[n] = v;
p1[n] = true;
p1a[n] = 150;
skillCool(ESP.getUser(), 1);
}
if(item()==304&&Cool.isFinished(p3a[n])){
Entity.setHealth(v, Entity.getHealth(v)-3);
preventDefault();
p3b[n] = v;
p3[n] = true;
p3a[n] = 300;
skillCool(ESP.getUser(), 3);
}
break;
}}}
if(burst[0]!=null){
for(var n=0;n<burst.length;n++){
if(burst[n]==ESP.getUser()){
if(item()==303&&Cool.isFinished(bus2a[n])){
ESP.antiLack(5);
explode(Entity.getX(v), Entity.getY(v), Entity.getZ(v), 1);
preventDefault();
bus2[n] = true;
bus2a[n] = 300;
skillCool(ESP.getUser(), 2);
}
break;
}}}
if(assault[0]!=null){
for(var n=0;n<assault.length;n++){
if(assault[n]==ESP.getUser()){
if(item()==302&&Cool.isFinished(asu1a[n])){
Entity.setHealth(v, Entity.getHealth(v)-5);
Entity.setFireTicks(v, 1);
asu1[n] = true;
asu1a[n] = 150;
skillCool(ESP.getUser(), 1);
}
if(item()==305&&Cool.isFinished(asu4a[n])){
ESP.heal(assault[n]);
ESP.sbm("Final Attack", true);
Entity.setHealth(v, Entity.getHealth(v)-(7+Math.floor(Math.random()*3)));
assaulterHyperPlus(assault[n], 20, 10);
preventDefault();
asu4[n] = true;
asu4a[n] = 1800;
skillCool(ESP.getUser(), 4);
}
break;
}}}
if(tp[0]!=null){
for(var n=0;n<tp.length;n++){
if(tp[n]==ESP.getUser()){
if(item()==303&&Cool.isFinished(tp2a[n])){
yaw = Math.floor(Entity.getYaw(v));
sin = -Math.sin(yaw/180*Math.PI);
cos = Math.cos(yaw/180*Math.PI);
teleport(tp[n], Entity.getX(v)-3*sin, Entity.getY(v)+2, Entity.getZ(v)-3*cos);
Entity.setHealth(v, Entity.getHealth(v)-2);
preventDefault();
tp2[n] = true;
tp2a[n] = 300;
skillCool(ESP.getUser(), 2);
}
if(item()==304&&Cool.isFinished(tp3a[n])){
teleport(v, Entity.getX(v), Entity.getY(v)+7, Entity.getZ(v));
Entity.setHealth(v, Entity.getHealth(v)-3);
preventDefault();
tp3[n] = true;
tp3a[n] = 300;
skillCool(ESP.getUser(), 3);
}
if(item()==305&&tp4a[n]>1350){
Entity.setHealth(v, Entity.getHealth(v)-2);
teleport(v, tpx[n], tpy[n], tpz[n]);
preventDefault();
}
break;
}}}
if(space[0]!=null){
for(var n=0;n<space.length;n++){
if(space[n]==ESP.getUser()){
if(item()==304&&Cool.isFinished(sp3a[n])){
sp3x[n] = Entity.getX(v);
sp3y[n] = Entity.getY(v)-5;
sp3z[n] = Entity.getZ(v);
setTiles(sp3x[n]-1, sp3x[n]+1, sp3y[n]-1, sp3y[n]+1, sp3z[n]-1, sp3z[n]+1, 0);
teleport(v, sp3x[n], sp3y[n], sp3z[n]);
sp3[n] = true;
sp3a[n] = 300;
skillCool(ESP.getUser(), 3);
}
break;
}}}
if(magnet[0]!=null){
for(var n=0;n<magnet.length;n++){
if(magnet[n]==ESP.getUser()){
if(item()==302&&Cool.isFinished(mag1a[n])){
mag1b = Level.spawnMob(Entity.getX(v), Entity.getY(v)+2, Entity.getZ(v), 84);
Entity.rideAnimal(v, mag1b);
Entity.setVelY(mag1b, 1);
preventDefault();
mag1[n] = true;
mag1a[n] = 150;
skillCool(ESP.getUser(), 1);
}
break;
}}}
if(hermit[0]!=null){
for(var n=0;n<hermit.length;n++){
if(hermit[n]==ESP.getUser()){
if(item()==303&&her2b[n]){
teleport(v, her2x[n]+1.5, her2y[n]+11.5, her2z[n]+2.5);
preventDefault();
her2b[n] = false;
}
break;
}}}
if(kirito[0]!=null){
for(var n=0;n<kirito.length;n++){
if(kirito[n]==ESP.getUser()){
if(item()==305&&Cool.isFinished(k4a[n])){
ESP.heal(kirito[n]);
ESP.sbm("Starburst Stream", true);
explode(Entity.getX(v), Entity.getY(v), Entity.getZ(v), 0.5);
ESP.kiritoHyperPlus(kirito[n], v, 30, 10);
preventDefault();
k4b[n] = v;
k4[n] = true;
k4a[n] = 1800;
skillCool(ESP.getUser(), 4);
}
break;
}}}
if(kanade[0]!=null){
for(var n=0;n<kanade.length;n++){
if(kanade[n]==ESP.getUser()){
if(item()==303&&Cool.isFinished(ka2a[n])){
Entity.setHealth(v, Entity.getHealth(v)-7);
preventDefault();
ka2[n] = true;
ka2a[n] = 300;
skillCool(ESP.getUser(), 2);
}
break;
}}}
if(time[0]!=null){
for(var n=0;n<time.length;n++){
if(time[n]==ESP.getUser()){
if(item()==303&&Cool.isFinished(ti2a[n])){
Entity.setHealth(v, Entity.getHealth(v)-10);
preventDefault();
ti2[n] = true;
ti2a[n] = 300;
skillCool(ESP.getUser(), 2);
}
if(item()==304&&Cool.isFinished(ti3a[n])){
ti3b[n] = v;
preventDefault();
ti3x[n] = Entity.getX(v);
if(!mcpev3){
if(ESP.isPlayer(v)) ti3y[n] = Math.floor(Entity.getY(v)-2)+1.5;
else ti3y[n] = Math.floor(Entity.getY(v))-0.25;
}
else{
ti3y[n] = Entity.getY(v);
}
ti3z[n] = Entity.getZ(v);
if(getTile(ti3x[n], ti3y[n]-0.75, ti3z[n])==0&&!ESP.isPlayer(v)){
setTile(ti3x[n], ti3y[n]-0.75, ti3z[n], 95);
}
if(getTile(ti3x[n], Entity.getY(v)-2, ti3z[n])==0&&ESP.isPlayer(v)){
setTile(ti3x[n], Entity.getY(v)-2, ti3z[n], 95);
}
ti3[n] = true;
ti3a[n] = 300;
skillCool(ESP.getUser(), 3);
}
break;
}}}
if(asuna[0]!=null){
for(var n=0;n<asuna.length;n++){
if(asuna[n]==ESP.getUser()){
if(item()==302&&Cool.isFinished(asn1a[n])){
Entity.setHealth(v, Entity.getHealth(v)-6);
preventDefault();
asn1[n] = true;
asn1a[n] = 150;
skillCool(ESP.getUser(), 1);
}
if(item()==304&&Cool.isFinished(asn3a[n])){
explode(Entity.getX(v), Entity.getY(v)+0.2, Entity.getZ(v), 0.5);
preventDefault();
asn3b[n] = v;
asn3[n] = true;
asn3a[n] = 300;
skillCool(ESP.getUser(), 3);
}
break;
}}}
if(has[0]!=null){
for(var n=0;n<has.length;n++){
if(has[n]==ESP.getUser()){
if(item()==304&&Cool.isFinished(ha3a[n])){
Entity.setHealth(v, Entity.getHealth(v)-6);
px = Math.floor(Entity.getX(v));
pz = Math.floor(Entity.getZ(v));
yaw = Math.floor(Entity.getYaw(v));
sin = -Math.sin(yaw/180*Math.PI);
cos = Math.cos(yaw/180*Math.PI);
teleport(a, px-3*sin, Entity.getY(v)+1, pz-3*cos);
preventDefault();
ha3[n] = true;
ha3a[n] = 300;
skillCool(ESP.getUser(), 3);
}
break;
}}}
if(random[0]!=null){
for(var n=0;n<random.length;n++){
if(random[n]==ESP.getUser()){
if(item()==304&&Cool.isFinished(ra3a[n])){
ra3b[n] = ESP.random(3);
if(ra3b[n]==0){
Entity.setFireTicks(v, 10);
}
else if(ra3b[n]==1){
Entity.setHealth(v, Entity.getHealth(v)-8);
}
else if(ra3b[n]==2){
teleport(v, Entity.getX(v), Entity.getY(v)+7, Entity.getZ(v));
}
preventDefault();
ra3[n] = true;
ra3a[n] = 300;
skillCool(ESP.getUser(), 3);
}
break;
}}}
if(geno[0]!=null){
for(var n=0;n<geno.length;n++){
if(geno[n]==ESP.getUser()){
if(item()==302&&Cool.isFinished(g1a[n])){
var g1b = Level.spawnMob(Entity.getX(v), Entity.getY(v)+2, Entity.getZ(v), 65);
Entity.rideAnimal(v, g1b);
preventDefault();
ESP.antiLack(90);
g1[n] = true;
g1a[n] = 150;
skillCool(ESP.getUser(), 1);
}
break;
}}}
if(server[0]!=null){
for(var n=0;n<server.length;n++){
if(server[n]==ESP.getUser()){
if(item()==305&&Cool.isFinished(se4a[n])){
ESP.heal(server[n]);
ESP.sbm("Ban", true);
se4c[n] = Entity.getHealth(v);
sex[n] = Entity.getX(v);
sey[n] = Entity.getY(v);
sez[n] = Entity.getZ(v);
se4b[n] = v;
if(mcpev) Entity.addEffect(v, MobEffect.damageResistance, 450, 4, true, false);
preventDefault();
se4[n] = true;
se4a[n] = 1800;
skillCool(ESP.getUser(), 4);
}
break;
}}}
if(wind[0]!=null){
for(var n=0;n<wind.length;n++){
if(wind[n]==ESP.getUser()){
if(item()==304&&Cool.isFinished(wi3a[n])){
teleport(v, Entity.getX(v), Entity.getY(v)+7, Entity.getZ(v));
Entity.setHealth(v, Entity.getHealth(v)-3);
preventDefault();
wi3[n] = true;
wi3a[n] = 300;
skillCool(ESP.getUser(), 3);
}
break;
}}}
if(copy[0]!=null){
for(var n=0;n<copy.length;n++){
if(copy[n]==ESP.getUser()){
if(item()==304&&Cool.isFinished(co3a[n])){
co3x[n] = Entity.getX(v);
co3y[n] = Entity.getY(v);
co3z[n] = Entity.getZ(v);
for(var xx=co3x[n]-2;xx<co3x[n]+3;xx++)
for(var yy=9;yy<16;yy++)
for(var zz=co3z[n]-2;zz<co3z[n]+3;zz++)
setTile(xx, yy, zz, 49);
for(var xx=co3x[n]-1;xx<co3x[n]+2;xx++)
for(var yy=10;yy<15;yy++)
for(var zz=co3z[n]-1;zz<co3z[n]+2;zz++)
setTile(xx, yy, zz, 0);
setTile(co3x[n], 11, co3z[n], 50);
Level.spawnMob(co3x[n], 13, co3z[n], 32);
Level.spawnMob(co3z[n], 13, co3z[n], 32);
Entity.setHealth(v, Entity.getHealth(v)-4);
co3b[n] = v;
teleport(v, co3z[n], 13, co3z[n]);
preventDefault();
co3[n] = true;
co3a[n] = 300;
skillCool(ESP.getUser(), 3);
}
break;
}}}
if(gravity[0]!=null){
for(var n=0;n<gravity.length;n++){
if(gravity[n]==ESP.getUser()){
if(item()==303&&Cool.isFinished(gr2a[n])){
teleport(v, Entity.getX(v), Entity.getY(v)+7, Entity.getZ(v));
Entity.setHealth(v, Entity.getHealth(v)-3);
preventDefault();
gr2[n] = true;
gr2a[n] = 300;
skillCool(ESP.getUser(), 2);
}
break;
}}}
if(hass[0]!=null){
for(var n=0;n<has.length;n++){
if(hass[n]==ESP.getUser()){
if(item()==304&&Cool.isFinished(hass3a[n])){
hass3b[n] = v;
preventDefault();
}
break;
}}}
if(sikill[0]!=null){
for(var n=0;n<sikill.length;n++){
if(sikill[n]==ESP.getUser()){
if(item()==303&&Cool.isFinished(sk2a[n])){
Entity.setHealth(v, Entity.getHealth(v)-6);
sk2b[n] = v;
preventDefault();
sk2[n] = true;
sk2a[n] = 300;
skillCool(ESP.getUser(), 2);
}
break;
}}}
if(slash[0]!=null){
for(var n=0;n<slash.length;n++){
if(slash[n]==ESP.getUser()){
if(item()==303&&Cool.isFinished(sl2a[n])){
Entity.setHealth(v, Entity.getHealth(v)-4);
new Thread({
run : function(){
Thread.sleep(1500);
Entity.setHealth(v, Entity.getHealth(v)-3);
Thread.sleep(1500);
Entity.setHealth(v, Entity.getHealth(v)-2);
}
}).start();
preventDefault();
sl2[n] = true;
sl2a[n] = 300;
skillCool(ESP.getUser(), 2);
}
if(item()==304&&Cool.isFinished(sl3a[n])){
explode(Entity.getX(v), Entity.getY(v)+0.3, Entity.getZ(v), 1);
preventDefault();
sl3[n] = true;
sl3a[n] = 300;
skillCool(ESP.getUser(), 3);
}
break;
}}}
if(night[0]!=null){
for(var n=0;n<night.length;n++){
if(night[n]==ESP.getUser()){
if(item()==304&&Cool.isFinished(ni3a[n])){
Entity.setHealth(v, Entity.getHealth(v)-5);
Entity.setHealth(a, Entity.getHealth(a)+2);
preventDefault();
ni3[n] = true;
ni3a[n] = 300;
skillCool(ESP.getUser(), 3);
}
if(ni4a[n]>1350){
Entity.setHealth(v, Entity.getHealth(v)-2);
}
break;
}}}
if(dra[0]!=null){
for(var n=0;n<dra.length;n++){
if(dra[n]==ESP.getUser()){
if(item()==302&&Cool.isFinished(dc1a[n])){
Entity.setHealth(v, Entity.getHealth(v)-7);
Entity.setHealth(a, Entity.getHealth(a)+7);
preventDefault();
dc1[n] = true;
dc1a[n] = 150;
skillCool(ESP.getUser(), 1);
}
if(item()==305&&Cool.isFinished(dc4a[n])&&dc4b[n]){
arroundMobHealthDown(dra[n], 15, 10);
Entity.setHealth(a, Entity.getHealth(a)+5);
Level.setTime(700);
dc4c[n] = v;
preventDefault();
dc4b[n] = false;
dc4[n] = true;
dc4a[n] = 1800;
skillCool(ESP.getUser(), 4);
}
break;
}}}
if(tensor[0]!=null){
for(var n=0;n<tensor.length;n++){
if(tensor[n]==ESP.getUser()){
if(item()==304&&Cool.isFinished(te3a[n])){
Entity.setHealth(v, Entity.getHealth(v)-5);
arroundMobHealthDown(a, 10, 5);
preventDefault();
te3[n] = true;
te3a[n] = 300;
skillCool(ESP.getUser(), 3);
}
break;
}}}
if(seal[0]!=null){
for(var n=0;n<seal.length;n++){
if(seal[n]==ESP.getUser()){
if(item()==305&&Cool.isFinished(sea4a[n])){
arroundMobHealthDown(ESP.getUser(), 20, 10);
sea4b[n] = v;
seax[n] = Entity.getX(v);
if(ESP.isPlayer(v)){
seay[n] = Math.floor(Entity.getY(v)-2)+1.5;
}
else{
seay[n] = Math.floor(Entity.getY(v))-0.25;
}
seaz[n] = Entity.getZ(v);
sea4[n] = true;
sea4a[n] = 1800;
skillCool(ESP.getUser(), 4);
}
break;
}}}
if(white[0]!=null){
for(var n=0;n<white.length;n++){
if(white[n]==ESP.getUser()){
if(item()==304&&Cool.isFinished(wh3a[n])){
Entity.setHealth(v, Entity.getHealth(v)-5);
preventDefault();
wh3b[n] = v;
wh3[n] = true;
wh3a[n] = 300;
skillCool(ESP.getUser(), 3);
}
break;
}}}
if(mental[0]!=null){
for(var n=0;n<mental.length;n++){
if(mental[n]==ESP.getUser()){
if(item()==302&&Cool.isFinished(mt1a[n])){
mt1b[n] = v;
mt1x[n] = Entity.getX(v);
if(ESP.isPlayer(v)){
mt1y[n] = Math.floor(Entity.getY(v)-2)+1.5;
}
else{
mt1y[n] = Math.floor(Entity.getY(v))-0.25;
}
mt1z[n] = Entity.getZ(v);
preventDefault();
mt1[n] = true;
mt1a[n] = 150;
skillCool(ESP.getUser(), 1);
}
if(item()==303&&Cool.isFinished(mt2a[n])){
teleport(v, Entity.getX(v), Entity.getY(v)+8, Entity.getZ(v));
preventDefault();
mt2[n] = true;
mt2a[n] = 300;
skillCool(ESP.getUser(), 2);
}
if(item()==304&&Cool.isFinished(mt3a[n])){
Entity.setHealth(v, Entity.getHealth(v)-10);
preventDefault();
mt3[n] = true;
mt3a[n] = 300;
skillCool(ESP.getUser(), 3);
}
if(item()==305&&Cool.isFinished(mt4a[n])){
ESP.heal(mental[n]);
ESP.sbm("Mental Out", true);
arroundMobHealthDown(a, 20, 10);
mt4b[n] = v;
mt4c[n] = true;
mtx[n] = Entity.getX(v);
mty[n] = Entity.getY(v);
mtz[n] = Entity.getZ(v);
preventDefault();
if(mcpev3) Entity.addEffect(v, MobEffect.confusion, 450, 4, true, false);
mt4[n] = true;
mt4a[n] = 1800;
skillCool(ESP.getUser(), 4);
}
break;
}}}

//Skill 3+
if(getCarriedItem()==304){
//dtj3
if(dtj==ESP.getUser()&&dt3a==0){
if(!dtl){
Entity.setHealth(v, Entity.getHealth(v)-5);
Entity.setHealth(a, Entity.getHealth(a)+5);
Entity.setFireTicks(v, 5);
}
else if(dtl){
Entity.setHealth(v, Entity.getHealth(v)-10);
Entity.setHealth(a, Entity.getHealth(a)+10);
Entity.setFireTicks(v, 10);
setTile(Entity.getX(v), Entity.getY(v), Entity.getZ(v), 30);
}
preventDefault();
dt3 = true;
dt3a  = 300;
}
//fe3
if(fe==ESP.getUser()&&fe3a==0){
Entity.setFireTicks(v, 10);
preventDefault();
fe3 = true;
fe3a = 300;
skillCool(ESP.getUser(), 3);
}

}

//summon+
if(getCarriedItem()==302&&(getIndex(summon, a)!=-1||getIndex(hsum, a)!=-1||getIndex(asum, a)!=-1)){
Entity.rideAnimal(a, v);
preventDefault();
}

//raid+
if(getIndex(raid, a)!=-1){
rr0[getIndex(raid, a)] = v;
}


}


//---H.E.---
if(a==he.buf){
if(item()==304&&he.b3==0){
Entity.setHealth(v, Entity.getHealth(v)-2);
he.b3a = v;
preventDefault();
he.b3 = 300;
skillCool(ESP.getUser(), 3);
}
if(he.b2>150){
Entity.setHealth(v, Entity.getHealth(v)-1);
}
if(he.b4>1350){
Entity.setHealth(v, Entity.getHealth(v)-1);
}

}
if(a==he.joker){
if(item()==304&&he.j3==0){
he.j3a = true;
he.j3b = v;
preventDefault();
}

}

//passive
if(passOnoff){
for(var n=0;n<water.length;n++){
if(a==water[n]&&(getTile(Entity.getX(v), Entity.getY(v)-1, Entity.getZ(v))==8||getTile(Entity.getX(v), Entity.getY(v)-1, Entity.getZ(v))==9||getTile(Entity.getX(v), Entity.getY(v), Entity.getZ(v))==8||getTile(Entity.getX(v), Entity.getY(v), Entity.getZ(v))==9)){
Entity.setHealth(v, Entity.getHealth(v)-1, true);
}
}
if(getIndex(creeper, a)!=-1||getIndex(burst, a)!=-1){
c0 = Math.floor(Math.random()*5);
if(c0==0){
explode(Entity.getX(v), Entity.getY(v), Entity.getZ(v), 0.4);
}
}
for(var n=0;n<summon.length;n++){
if(a==summon[n]){
if(getCarriedItem()==303){
Entity.rideAnimal(v, a);
}
}
}
for(var n=0;n<light.length;n++){
if(a==light[n]&&!nightCheck()){
Entity.setHealth(v, Entity.getHealth(v)-1, true);
}
}
for(var n=0;n<dark.length;n++){
if(a==dark[n]&&nightCheck()){
Entity.setHealth(v, Entity.getHealth(v)-1, true);
}
}
if(getIndex(hsum, a)!=-1||getIndex(asum, a)!=-1){
if(getCarriedItem()==303){
Entity.rideAnimal(v, a);
}
}
else if((getIndex(blood, a)!=-1||getIndex(dra, a)!=-1)&&[302, 303, 304, 305].indexOf(item())==-1){
if(nightCheck()||ESP.random(2)==0){
Entity.setHealth(v, Entity.getHealth(v)-1, true);
Entity.setHealth(a, Entity.getHealth(a)+1);
}
}
else if(getIndex(air, a)!=-1){
a0 = Math.floor(Math.random()*5);
if(a0==0){
explode(Entity.getX(v), Entity.getY(v), Entity.getZ(v), 0.4);
Entity.setVelX(v,Entity.getX(v)-Player.getX());
Entity.setVelZ(v,Entity.getZ(v)-Player.getZ());
}
}
else if(getIndex(thunder, a)!=-1){
th0 = Math.floor(Math.random()*5);
if(th0==0){
setTile(Entity.getX(v), Entity.getY(v), Entity.getZ(v), 89);
Level.destroyBlock(Entity.getX(v), Entity.getY(v), Entity.getZ(v), false);
explode(Entity.getX(v), Entity.getY(v), Entity.getZ(v), 0.4);
}
}
else if(getIndex(tnt, a)!=-1){
tn0 = Math.floor(Math.random()*10);
if(tn0==0){
var tn0a = Level.spawnMob(Entity.getX(v), Entity.getY(v), Entity.getZ(v), 65);
Entity.rideAnimal(v, tn0a);
}
}
else if(getIndex(trap, a)!=-1){
tr0 = Math.floor(Math.random()*5);
if(tr0==0){
if(ESP.isPlayer(v)){
setTile(Entity.getX(v), Entity.getY(v)-2, Entity.getZ(v), 0);
}
else{
setTile(Entity.getX(v), Entity.getY(v)-1, Entity.getZ(v), 0);
}
}
}
else if(getIndex(assassin, a)!=-1&&getCarriedItem()!=305){
Entity.setHealth(v, Entity.getHealth(v)-1, true);
}
else if(getIndex(arrow, a)!=-1){
ar0 = Math.floor(Math.random()*5);
if(ar0==0){
Level.spawnMob(Entity.getX(v), Entity.getY(v)+7, Entity.getZ(v), 80);
}
}
else if(getIndex(mage, v)!=-1||getIndex(amage, v)!=-1){
ma0 = Math.floor(Math.random()*2);
if(ma0==0){
preventDefault();
}
}
else if(getIndex(poison, v)!=-1){
Entity.setHealth(v, Entity.getHealth(v)-1, true);
}
else if(getIndex(assault, v)!=-1&&getCarriedItem()!=305){
Entity.setHealth(v, Entity.getHealth(v)-1, true);
}
else if(getIndex(warrior, v)!=-1){
Entity.setHealth(v, Entity.getHealth(v)-1, true);
}
else if(getIndex(force, v)!=-1|getIndex(vector, v)!=-1||getIndex(tensor, v)!=-1){
var rrrr = Math.floor(Math.random()*2);
if(rrrr==0){
Entity.setHealth(a, Entity.getHealth(a)-2);
preventDefault();
}
}
else if(getIndex(rein, a)!=-1||getIndex(kirito, a)!=-1){
Entity.setHealth(v, Entity.getHealth(v)-1, true);
}
else if(getIndex(kanade, a)!=-1&&getCarriedItem()!=303){
Entity.setHealth(v, Entity.getHealth(v)-1, true);
}
else if(getIndex(time, a)!=-1&&ti0a[getIndex(time, a)]){
Entity.setHealth(v, Entity.getHealth(v)-3);
}
else if(getIndex(zombie, a)!=-1&&item()==302&&Entity.getEntityTypeId(v)==32){
Entity.rideAnimal(a, v);
preventDefault();
}
else if(getIndex(necro, a)!=-1&&item()==302&&[32, 34, 36, 44].indexOf(Entity.getEntityTypeId(v))!=-1){
Entity.rideAnimal(a, v);
preventDefault();
}
else if(getIndex(holy, a)!=-1){
Entity.setHealth(v, Entity.getHealth(v)-1, true);
}
else if(getIndex(solar, a)!=-1&&!nightCheck()){
Entity.setHealth(v, Entity.getHealth(v)-1, true);
}
else if(getIndex(lunar, a)!=-1&&nightCheck()){
Entity.setHealth(v, Entity.getHealth(v)-1, true);
}
else if(getIndex(has, a)!=-1||getIndex(out, a)!=-1||getIndex(hass, a)!=-1||getIndex(white, a)!=-1){
Entity.setHealth(v, Entity.getHealth(v)-1, true);
}
if(nightCheck()){
if(getIndex(black, a)!=-1||getIndex(night, a)!=-1){
Entity.setHealth(v, Entity.getHealth(v)-1, true);
}
}

var arr = [builder, soldier, rich, tp, space, sattack, magnet, steve, hero, clay, snipe, asuna, random, zwei, deco, climate, raid, wind, energy, geno, server, rgun, dragon, solid, gravity, sikill, slash, mush, ruin, swamp, amage, puella, hbuild, scalar, ameca, seal, angel, mental, world];
for(var n=0;n<arr.length;n++){
if(arr[n][0]==null) continue;
if(getIndex(arr[n], a)!=-1){
if(ESP.random(2)==0) Entity.setHealth(v, Entity.getHealth(v)-1, true);
break;
}
}
if(a==dtj){
if(ESP.random(2)==0) Entity.setHealth(v, Entity.getHealth(v)-1, true);
}


if(a==fe){
Entity.setFireTicks(v, 3);
}

}

//---S.E.+---
if(se.tf){
if(a==se.avenage){
if(getCarriedItem()==303&&se.a2==0){
Entity.setHealth(v, Entity.getHealth(v)-10);
preventDefault();
se.a2 = 300;
skillCool(ESP.getUser(), 2);
}

}
if(a==se.hide){
if(getCarriedItem()==303&&se.h2==0){
Entity.setHealth(v, Entity.getHealth(v)-15);
preventDefault();
se.h2 = 300;
skillCool(ESP.getUser(), 2);
}
if(getCarriedItem()==305&&se.h4==0){
ESP.heal(se.hide);
ESP.sbm("The Assassination", true);
Entity.setHealth(v, 0);
preventDefault();
se.h4 = 1800;
skillCool(ESP.getUser(), 4);
}

}
if(a==se.gamble){
if(getCarriedItem()==303&&se.g2==0){
se.gr = ESP.random(2);
if(se.gr==0) Entity.setHealth(v, Entity.getHealth(v)-10);
if(se.gr==1) Entity.setHealth(v, Entity.getHealth(v)+5);
preventDefault();
se.g2 = 300;
skillCool(ESP.getUser(), 2);
}
if(getCarriedItem()==305&&se.g4==0){
se.gr = ESP.random(2);
ESP.sbm("Gamble of Death", true);
se.gr = ESP.random(3);
if(se.gr==0)
Entity.setHealth(a, 0);
if(se.gr==1){
Entity.setHealth(v, 0);
ESP.heal(se.gamble);
}
if(se.gr==2){
Entity.setHealth(a, 0);
Entity.setHealth(v, 0);
}
preventDefault();
se.g4 = 1800;
skillCool(ESP.getUser(), 4);
}

}
if(a==se.reaper){
if(getCarriedItem()==303&&se.r2==0){
for(var xx=Entity.getX(v)-1;xx<Entity.getX(v)+2;xx++)
for(var zz=Entity.getZ(v)-1;zz<Entity.getZ(v)+2;zz++)
setTile(xx, Entity.getY(v), zz, 173);
Level.spawnMob(Entity.getX(v), Entity.getY(v)+12, Entity.getZ(v), 65);
Entity.setHealth(v, Entity.getHealth(v)-5);
preventDefault();
se.r2 = 300;
skillCool(ESP.getUser(), 2);
}

}
if(a==se.ima){
if(getCarriedItem()==302&&se.i1==0){
Entity.setHealth(v, Entity.getHealth(v)-8);
preventDefault();
se.i1 = 150;
skillCool(ESP.getUser(), 1);
}
if(getCarriedItem()==303&&se.i2==0){
Entity.setHealth(v, Entity.getHealth(v)-6);
preventDefault();
se.i2a = v;
se.i2 = 300;
skillCool(ESP.getUser(), 2);
}
if(getCarriedItem()==304&&se.i3==0){
Entity.setHealth(v, Entity.getHealth(v)-15);
preventDefault();
se.i3 = 300;
skillCool(ESP.getUser(), 3);
}

}


if(v==se.avenage){
se.a4a = a;
}

}


if(v==dt.p&&dt.f==false){
fightDialog();
preventDefault();
}
if(ESP.random(2)==0&&dt.f){
Entity.setHealth(a, Entity.getHealth(a)-3);
preventDefault();
}

if(item()==277&&Entity.getEntityTypeId(v)==32&&zs.t>0){
Entity.setHealth(v, Entity.getHealth(v)-10);
}


if(getPlayers){
if(Player.isPlayer(a)) playerAddedHandler(a);
if(Player.isPlayer(v)) playerAddedHandler(v);
}


}


//cool time
function modTick(){
if(fire[0]!=null){
for(var n=0;n<fire.length;n++){
if(f1[n]){
f1a[n]--;   
}
if(f2[n]){
f2a[n]--;
}
if(f3[n]){
f3a[n]--;
}
if(f4[n]){
f4a[n]--;
}
if(f1a[n]==0){
f1[n] = false;
}
if(f2a[n]==0){
f2[n] = false;
}
if(f3a[n]==0){
f3[n] = false;
}
if(f4a[n]==0){
f4[n] = false;
}
}}
if(water[0]!=null){
for(var n=0;n<water.length;n++){
if(w1[n]){
w1a[n]--;
}
if(w2[n]){
w2a[n]--;
}
if(w3[n]){
w3a[n]--;
}
if(w4[n]){
w4a[n]--;
}
if(w1a[n]==0){
w1[n] = false;
}
if(w2a[n]==0){
w2[n] = false;
}
if(w3a[n]==0){
w3[n] = false;
}
if(w4a[n]==0){
w4[n] = false;
}
}}
if(tree[0]!=null){
for(var n=0;n<tree.length;n++){
if(t1[n]){
t1a[n]--;
}
if(t2[n]){
t2a[n]--;
}
if(t3[n]){
t3a[n]--;
}
if(t4[n]){
t4a[n]--;
}
if(t1a[n]==0){
t1[n] = false;
}
if(t2a[n]==0){
t2[n] = false;
}
if(t3a[n]==0){
t3[n] = false;
}
if(t4a[n]==0){
t4[n] = false;
}
}}
if(creeper[0]!=null){
for(var n=0;n<creeper.length;n++){
if(c1[n]){
c1a[n]--;
}
if(c2[n]){
c2a[n]--;
}
if(c3[n]){
c3a[n]--;
}
if(c4[n]){
c4a[n]--;
}
if(c1a[n]==0){
c1[n] = false;
}
if(c2a[n]==0){
c2[n] = false;
}
if(c3a[n]==0){
c3[n] = false;
}
if(c4a[n]==0){
c4[n] = false;
}
}}
if(soil[0]!=null){
for(var n=0;n<soil.length;n++){
if(s1[n]){
s1a[n]--;
}
if(s2[n]){
s2a[n]--;
}
if(s3[n]){
s3a[n]--;
}
if(s4[n]){
s4a[n]--;
}
if(s1a[n]==0){
s1[n] = false;
}
if(s2a[n]==0){
s2[n] = false;
}
if(s3a[n]==0){
s3[n] = false;
}
if(s4a[n]==0){
s4[n] = false;
}
}}
if(summon[0]!=null){
for(var n=0;n<summon.length;n++){
if(ss1[n]){
ss1a[n]--;
}
if(ss2[n]){
ss2a[n]--;
}
if(ss3[n]){
ss3a[n]--;
}
if(ss4[n]){
ss4a[n]--;
}
if(ss1a[n]==0){
ss1[n] = false;
}
if(ss2a[n]==0){
ss2[n] = false;
}
if(ss3a[n]==0){
ss3[n] = false;
}
if(ss4a[n]==0){
ss4[n] = false;
}
}}
if(light[0]!=null){
for(var n=0;n<light.length;n++){
if(l1[n]){
l1a[n]--;
}
if(l2[n]){
l2a[n]--;
}
if(l3[n]){
l3a[n]--;
}
if(l4[n]){
l4a[n]--;
}
if(l1a[n]==0){
l1[n] = false;
}
if(l2a[n]==0){
l2[n] = false;
}
if(l3a[n]==0){
l3[n] = false;
}
if(l4a[n]==0){
l4[n] = false;
}
}}
if(dark[0]!=null){
for(var n=0;n<dark.length;n++){
if(d1[n]){
d1a[n]--;
}
if(d2[n]){
d2a[n]--;
}
if(d3[n]){
d3a[n]--;
}
if(d4[n]){
d4a[n]--;
}
if(d1a[n]==0){
d1[n] = false;
}
if(d2a[n]==0){
d2[n] = false;
}
if(d3a[n]==0){
d3[n] = false;
}
if(d4a[n]==0){
d4[n] = false;
}
}}
if(ice[0]!=null){
for(var n=0;n<ice.length;n++){
if(i1[n]){
i1a[n]--;
}
if(i2[n]){
i2a[n]--;
}
if(i3[n]){
i3a[n]--;
}
if(i4[n]){
i4a[n]--;
}
if(i1a[n]==0){
i1[n] = false;
}
if(i2a[n]==0){
i2[n] = false;
}
if(i3a[n]==0){
i3[n] = false;
}
if(i4a[n]==0){
i4[n] = false;
}
}}
if(sand[0]!=null){
for(var n=0;n<sand.length;n++){
if(m1[n]){
m1a[n]--;
}
if(m2[n]){
m2a[n]--;
}
if(m3[n]){
m3a[n]--;
}
if(m4[n]){
m4a[n]--;
}
if(m1a[n]==0){
m1[n] = false;
}
if(m2a[n]==0){
m2[n] = false;
}
if(m3a[n]==0){
m3[n] = false;
}
if(m4a[n]==0){
m4[n] = false;
}
}}
if(blood[0]!=null){
for(var n=0;n<blood.length;n++){
if(b1[n]){
b1a[n]--;
}
if(b2[n]){
b2a[n]--;
}
if(b3[n]){
b3a[n]--;
}
if(b4[n]){
b4a[n]--;
}
if(b1a[n]==0){
b1[n] = false;
}
if(b2a[n]==0){
b2[n] = false;
}
if(b3a[n]==0){
b3[n] = false;
}
if(b4a[n]==0){
b4[n] = false;
}
}}
if(air[0]!=null){
for(var n=0;n<air.length;n++){
if(a1[n]){
a1a[n]--;
}
if(a2[n]){
a2a[n]--;
}
if(a3[n]){
a3a[n]--;
}
if(a4[n]){
a4a[n]--;
}
if(a1a[n]==0){
a1[n] = false;
}
if(a2a[n]==0){
a2[n] = false;
}
if(a3a[n]==0){
a3[n] = false;
}
if(a4a[n]==0){
a4[n] = false;
}
}}
if(thunder[0]!=null){
for(var n=0;n<thunder.length;n++){
if(th1[n]){
th1a[n]--;   
}
if(th2[n]){
th2a[n]--;
}
if(th3[n]){
th3a[n]--;
}
if(th4[n]){
th4a[n]--;
}
if(th1a[n]==0){
th1[n] = false;
}
if(th2a[n]==0){
th2[n] = false;
}
if(th3a[n]==0){
th3[n] = false;
}
if(th4a[n]==0){
th4[n] = false;
}
}}
if(elsa[0]!=null){
for(var n=0;n<elsa.length;n++){
if(e1[n]){
e1a[n]--;
}
if(e2[n]){
e2a[n]--;
}
if(e3[n]){
e3a[n]--;
}
if(e4[n]){
e4a[n]--;
}
if(e1a[n]==0){
e1[n] = false;
}
if(e2a[n]==0){
e2[n] = false;
}
if(e3a[n]==0){
e3[n] = false;
}
if(e4a[n]==0){
e4[n] = false;
}
}}
if(titan[0]!=null){
for(var n=0;n<titan.length;n++){
if(tt1[n]){
tt1a[n]--;
}
if(tt2[n]){
tt2a[n]--;
}
if(tt3[n]){
tt3a[n]--;
}
if(tt4[n]){
tt4a[n]--;
}
if(tt1a[n]==0){
tt1[n] = false;
}
if(tt2a[n]==0){
tt2[n] = false;
}
if(tt3a[n]==0){
tt3[n] = false;
}
if(tt4a[n]==0){
tt4[n] = false;
}
}}
if(bind[0]!=null){
for(var n=0;n<bind.length;n++){
if(bb1[n]){
bb1a[n]--;   
}
if(bb2[n]){
bb2a[n]--;
}
if(bb3[n]){
bb3a[n]--;
}
if(bb4[n]){
bb4a[n]--;
}
if(bb1a[n]==0){
bb1[n] = false;
}
if(bb2a[n]==0){
bb2[n] = false;
}
if(bb3a[n]==0){
bb3[n] = false;
}
if(bb4a[n]==0){
bb4[n] = false;
}
}}
if(meca[0]!=null){
for(var n=0;n<meca.length;n++){
if(mm1[n]){
mm1a[n]--;
}
if(mm2[n]){
mm2a[n]--;
}
if(mm3[n]){
mm3a[n]--;
}
if(mm4[n]){
mm4a[n]--;
}
if(mm1a[n]==0){
mm1[n] = false;
}
if(mm2a[n]==0){
mm2[n] = false;
}
if(mm3a[n]==0){
mm3[n] = false;
}
if(mm4a[n]==0){
mm4[n] = false;
}
}}
if(tnt[0]!=null){
for(var n=0;n<tnt.length;n++){
if(tn1[n]){
tn1a[n]--;
}
if(tn2[n]){
tn2a[n]--;
}
if(tn3[n]){
tn3a[n]--;
}
if(tn4[n]){
tn4a[n]--;
}
if(tn1a[n]==0){
tn1[n] = false;
}
if(tn2a[n]==0){
tn2[n] = false;
}
if(tn3a[n]==0){
tn3[n] = false;
}
if(tn4a[n]==0){
tn4[n] = false;
}
}}
if(trap[0]!=null){
for(var n=0;n<trap.length;n++){
if(tr1[n]){
tr1a[n]--;
}
if(tr2[n]){
tr2a[n]--;
}
if(tr3[n]){
tr3a[n]--;
}
if(tr4[n]){
tr4a[n]--;
}
if(tr1a[n]==0){
tr1[n] = false;
}
if(tr2a[n]==0){
tr2[n] = false;
}
if(tr3a[n]==0){
tr3[n] = false;
}
if(tr4a[n]==0){
tr4[n] = false;
}
}}
if(heal[0]!=null){
for(var n=0;n<heal.length;n++){
if(h1[n]){
h1a[n]--;
}
if(h2[n]){
h2a[n]--;
}
if(h3[n]){
h3a[n]--;
}
if(h4[n]){
h4a[n]--;
}
if(h1a[n]==0){
h1[n] = false;
}
if(h2a[n]==0){
h2[n] = false;
}
if(h3a[n]==0){
h3[n] = false;
}
if(h4a[n]==0){
h4[n] = false;
}
}}
if(nether[0]!=null){
for(var n=0;n<nether.length;n++){
if(n1[n]){
n1a[n]--;
}
if(n2[n]){
n2a[n]--;
}
if(n3[n]){
n3a[n]--;
}
if(n4[n]){
n4a[n]--;
}
if(n1a[n]==0){
n1[n] = false;
}
if(n2a[n]==0){
n2[n] = false;
}
if(n3a[n]==0){
n3[n] = false;
}
if(n4a[n]==0){
n4[n] = false;
}
}}
if(cloud[0]!=null){
for(var n=0;n<cloud.length;n++){
if(cc1[n]){
cc1a[n]--;
}
if(cc2[n]){
cc2a[n]--;
}
if(cc3[n]){
cc3a[n]--;
}
if(cc4[n]){
cc4a[n]--;
}
if(cc1a[n]==0){
cc1[n] = false;
}
if(cc2a[n]==0){
cc2[n] = false;
}
if(cc3a[n]==0){
cc3[n] = false;
}
if(cc4a[n]==0){
cc4[n] = false;
}
}}
if(assassin[0]!=null){
for(var n=0;n<assassin.length;n++){
if(as1[n]){
as1a[n]--;
}
if(as2[n]){
as2a[n]--;
}
if(as3[n]){
as3a[n]--;
}
if(as4[n]){
as4a[n]--;
}
if(as1a[n]==0){
as1[n] = false;
}
if(as2a[n]==0){
as2[n] = false;
}
if(as3a[n]==0){
as3[n] = false;
}
if(as4a[n]==0){
as4[n] = false;
}
}}
if(arrow[0]!=null){
for(var n=0;n<arrow.length;n++){
if(ar1[n]){
ar1a[n]--;
}
if(ar2[n]){
ar2a[n]--;
}
if(ar3[n]){
ar3a[n]--;
}
if(ar4[n]){
ar4a[n]--;
}
if(ar1a[n]==0){
ar1[n] = false;
}
if(ar2a[n]==0){
ar2[n] = false;
}
if(ar3a[n]==0){
ar3[n] = false;
}
if(ar4a[n]==0){
ar4[n] = false;
}
}}
if(mage[0]!=null){
for(var n=0;n<mage.length;n++){
if(ma1[n]){
ma1a[n]--;
}
if(ma2[n]){
ma2a[n]--;
}
if(ma3[n]){
ma3a[n]--;
}
if(ma4[n]){
ma4a[n]--;
}
if(ma1a[n]==0){
ma1[n] = false;
}
if(ma2a[n]==0){
ma2[n] = false;
}
if(ma3a[n]==0){
ma3[n] = false;
}
if(ma4a[n]==0){
ma4[n] = false;
}
}}
if(defense[0]!=null){
for(var n=0;n<defense.length;n++){
if(de1[n]){
de1a[n]--;
}
if(de2[n]){
de2a[n]--;
}
if(de3[n]){
de3a[n]--;
}
if(de4[n]){
de4a[n]--;
}
if(de1a[n]==0){
de1[n] = false;
}
if(de2a[n]==0){
de2[n] = false;
}
if(de3a[n]==0){
de3[n] = false;
}
if(de4a[n]==0){
de4[n] = false;
}
}}
if(poison[0]!=null){
for(var n=0;n<poison.length;n++){
if(p1[n]){
p1a[n]--;
}
if(p2[n]){
p2a[n]--;
}
if(p3[n]){
p3a[n]--;
}
if(p4[n]){
p4a[n]--;
}
if(p1a[n]==0){
p1[n] = false;
}
if(p2a[n]==0){
p2[n] = false;
}
if(p3a[n]==0){
p3[n] = false;
}
if(p4a[n]==0){
p4[n] = false;
}
}}
if(melt[0]!=null){
for(var n=0;n<melt.length;n++){
if(me1[n]){
me1a[n]--;
}
if(me2[n]){
me2a[n]--;
}
if(me3[n]){
me3a[n]--;
}
if(me4[n]){
me4a[n]--;
}
if(me1a[n]==0){
me1[n] = false;
}
if(me2a[n]==0){
me2[n] = false;
}
if(me3a[n]==0){
me3[n] = false;
}
if(me4a[n]==0){
me4[n] = false;
}
}}
if(hfreeze[0]!=null){
for(var n=0;n<hfreeze.length;n++){
if(hf1[n]){
hf1a[n]--;
}
if(hf2[n]){
hf2a[n]--;
}
if(hf3[n]){
hf3a[n]--;
}
if(hf4[n]){
hf4a[n]--;
}
if(hf1a[n]==0){
hf1[n] = false;
}
if(hf2a[n]==0){
hf2[n] = false;
}
if(hf3a[n]==0){
hf3[n] = false;
}
if(hf4a[n]==0){
hf4[n] = false;
}
}}
if(builder[0]!=null){
for(var n=0;n<builder.length;n++){
if(bu1[n]){
bu1a[n]--;
}
if(bu2[n]){
bu2a[n]--;
}
if(bu3[n]){
bu3a[n]--;
}
if(bu4[n]){
bu4a[n]--;
}
if(bu1a[n]==0){
bu1[n] = false;
}
if(bu2a[n]==0){
bu2[n] = false;
}
if(bu3a[n]==0){
bu3[n] = false;
}
if(bu4a[n]==0){
bu4[n] = false;
}
}}
if(soldier[0]!=null){
for(var n=0;n<soldier.length;n++){
if(so1[n]){
so1a[n]--;
}
if(so2[n]){
so2a[n]--;
}
if(so3[n]){
so3a[n]--;
}
if(so4[n]){
so4a[n]--;
}
if(so1a[n]==0){
so1[n] = false;
}
if(so2a[n]==0){
so2[n] = false;
}
if(so3a[n]==0){
so3[n] = false;
}
if(so4a[n]==0){
so4[n] = false;
}
}}
if(assault[0]!=null){
for(var n=0;n<assault.length;n++){
if(asu1[n]){
asu1a[n]--;
}
if(asu2[n]){
asu2a[n]--;
}
if(asu3[n]){
asu3a[n]--;
}
if(asu4[n]){
asu4a[n]--;
}
if(asu1a[n]==0){
asu1[n] = false;
}
if(asu2a[n]==0){
asu2[n] = false;
}
if(asu3a[n]==0){
asu3[n] = false;
}
if(asu4a[n]==0){
asu4[n] = false;
}
}}
if(burst[0]!=null){
for(var n=0;n<burst.length;n++){
if(bus1[n]){
bus1a[n]--;
}
if(bus2[n]){
bus2a[n]--;
}
if(bus3[n]){
bus3a[n]--;
}
if(bus4[n]){
bus4a[n]--;
}
if(bus1a[n]==0){
bus1[n] = false;
}
if(bus2a[n]==0){
bus2[n] = false;
}
if(bus3a[n]==0){
bus3[n] = false;
}
if(bus4a[n]==0){
bus4[n] = false;
}
}}
if(warrior[0]!=null){
for(var n=0;n<warrior.length;n++){
if(wa1[n]){
wa1a[n]--;
}
if(wa2[n]){
wa2a[n]--;
}
if(wa3[n]){
wa3a[n]--;
}
if(wa4[n]){
wa4a[n]--;
}
if(wa1a[n]==0){
wa1[n] = false;
}
if(wa2a[n]==0){
wa2[n] = false;
}
if(wa3a[n]==0){
wa3[n] = false;
}
if(wa4a[n]==0){
wa4[n] = false;
}
}}
if(ore[0]!=null){
for(var n=0;n<ore.length;n++){
if(o1[n]){
o1a[n]--;
}
if(o2[n]){
o2a[n]--;
}
if(o3[n]){
o3a[n]--;
}
if(o4[n]){
o4a[n]--;
}
if(o1a[n]==0){
o1[n] = false;
}
if(o2a[n]==0){
o2[n] = false;
}
if(o3a[n]==0){
o3[n] = false;
}
if(o4a[n]==0){
o4[n] = false;
}
}}
if(rich[0]!=null){
for(var n=0;n<rich.length;n++){
if(r1[n]){
r1a[n]--;
}
if(r2[n]){
r2a[n]--;
}
if(r3[n]){
r3a[n]--;
}
if(r4[n]){
r4a[n]--;
}
if(r1a[n]==0){
r1[n] = false;
}
if(r2a[n]==0){
r2[n] = false;
}
if(r3a[n]==0){
r3[n] = false;
}
if(r4a[n]==0){
r4[n] = false;
}
}}
if(tp[0]!=null){
for(var n=0;n<tp.length;n++){
if(tp1[n]){
tp1a[n]--;
}
if(tp2[n]){
tp2a[n]--;
}
if(tp3[n]){
tp3a[n]--;
}
if(tp4[n]){
tp4a[n]--;
}
if(tp1a[n]==0){
tp1[n] = false;
}
if(tp2a[n]==0){
tp2[n] = false;
}
if(tp3a[n]==0){
tp3[n] = false;
}
if(tp4a[n]==0){
tp4[n] = false;
}
}}
if(space[0]!=null){
for(var n=0;n<space.length;n++){
if(sp1[n]){
sp1a[n]--;
}
if(sp2[n]){
sp2a[n]--;
}
if(sp3[n]){
sp3a[n]--;
}
if(sp4[n]){
sp4a[n]--;
}
if(sp1a[n]==0){
sp1[n] = false;
}
if(sp2a[n]==0){
sp2[n] = false;
}
if(sp3a[n]==0){
sp3[n] = false;
}
if(sp4a[n]==0){
sp4[n] = false;
}
}}
if(sattack[0]!=null){
for(var n=0;n<sattack.length;n++){
if(sa1[n]){
sa1a[n]--;
}
if(sa2[n]){
sa2a[n]--;
}
if(sa3[n]){
sa3a[n]--;
}
if(sa4[n]){
sa4a[n]--;
}
if(sa1a[n]==0){
sa1[n] = false;
}
if(sa2a[n]==0){
sa2[n] = false;
}
if(sa3a[n]==0){
sa3[n] = false;
}
if(sa4a[n]==0){
sa4[n] = false;
}
}}
if(force[0]!=null){
for(var n=0;n<force.length;n++){
if(fo1[n]){
fo1a[n]--;
}
if(fo2[n]){
fo2a[n]--;
}
if(fo3[n]){
fo3a[n]--;
}
if(fo4[n]){
fo4a[n]--;
}
if(fo1a[n]==0){
fo1[n] = false;
}
if(fo2a[n]==0){
fo2[n] = false;
}
if(fo3a[n]==0){
fo3[n] = false;
}
if(fo4a[n]==0){
fo4[n] = false;
}
}}
if(rein[0]!=null){
for(var n=0;n<rein.length;n++){
if(re1[n]){
re1a[n]--;
}
if(re2[n]){
re2a[n]--;
}
if(re3[n]){
re3a[n]--;
}
if(re4[n]){
re4a[n]--;
}
if(re1a[n]==0){
re1[n] = false;
}
if(re2a[n]==0){
re2[n] = false;
}
if(re3a[n]==0){
re3[n] = false;
}
if(re4a[n]==0){
re4[n] = false;
}
}}
if(magnet[0]!=null){
for(var n=0;n<magnet.length;n++){
if(mag1[n]){
mag1a[n]--;
}
if(mag2[n]){
mag2a[n]--;
}
if(mag3[n]){
mag3a[n]--;
}
if(mag4[n]){
mag4a[n]--;
}
if(mag1a[n]==0){
mag1[n] = false;
}
if(mag2a[n]==0){
mag2[n] = false;
}
if(mag3a[n]==0){
mag3[n] = false;
}
if(mag4a[n]==0){
mag4[n] = false;
}
}}
if(steve[0]!=null){
for(var n=0;n<steve.length;n++){
if(st1[n]){
st1a[n]--;
}
if(st2[n]){
st2a[n]--;
}
if(st3[n]){
st3a[n]--;
}
if(st4[n]){
st4a[n]--;
}
if(st1a[n]==0){
st1[n] = false;
}
if(st2a[n]==0){
st2[n] = false;
}
if(st3a[n]==0){
st3[n] = false;
}
if(st4a[n]==0){
st4[n] = false;
}
}}
if(hero[0]!=null){
for(var n=0;n<hero.length;n++){
if(he1[n]){
he1a[n]--;
}
if(he2[n]){
he2a[n]--;
}
if(he3[n]){
he3a[n]--;
}
if(he4[n]){
he4a[n]--;
}
if(he1a[n]==0){
he1[n] = false;
}
if(he2a[n]==0){
he2[n] = false;
}
if(he3a[n]==0){
he3[n] = false;
}
if(he4a[n]==0){
he4[n] = false;
}
}}
if(hermit[0]!=null){
for(var n=0;n<hermit.length;n++){
if(her1[n]){
her1a[n]--;
}
if(her2[n]){
her2a[n]--;
}
if(her3[n]){
her3a[n]--;
}
if(her4[n]){
her4a[n]--;
}
if(her1a[n]==0){
her1[n] = false;
}
if(her2a[n]==0){
her2[n] = false;
}
if(her3a[n]==0){
her3[n] = false;
}
if(her4a[n]==0){
her4[n] = false;
}
}}
if(clay[0]!=null){
for(var n=0;n<clay.length;n++){
if(cl1[n]){
cl1a[n]--;
}
if(cl2[n]){
cl2a[n]--;
}
if(cl3[n]){
cl3a[n]--;
}
if(cl4[n]){
cl4a[n]--;
}
if(cl1a[n]==0){
cl1[n] = false;
}
if(cl2a[n]==0){
cl2[n] = false;
}
if(cl3a[n]==0){
cl3[n] = false;
}
if(cl4a[n]==0){
cl4[n] = false;
}
}}
if(kirito[0]!=null){
for(var n=0;n<kirito.length;n++){
if(k1[n]){
k1a[n]--;
}
if(k2[n]){
k2a[n]--;
}
if(k3[n]){
k3a[n]--;
}
if(k4[n]){
k4a[n]--;
}
if(k1a[n]==0){
k1[n] = false;
}
if(k2a[n]==0){
k2[n] = false;
}
if(k3a[n]==0){
k3[n] = false;
}
if(k4a[n]==0){
k4[n] = false;
}
}}
if(jungle[0]!=null){
for(var n=0;n<jungle.length;n++){
if(j1[n]){
j1a[n]--;
}
if(j2[n]){
j2a[n]--;
}
if(j3[n]){
j3a[n]--;
}
if(j4[n]){
j4a[n]--;
}
if(j1a[n]==0){
j1[n] = false;
}
if(j2a[n]==0){
j2[n] = false;
}
if(j3a[n]==0){
j3[n] = false;
}
if(j4a[n]==0){
j4[n] = false;
}
}}
if(kanade[0]!=null){
for(var n=0;n<kanade.length;n++){
if(ka1[n]){
ka1a[n]--;
}
if(ka2[n]){
ka2a[n]--;
}
if(ka3[n]){
ka3a[n]--;
}
if(ka4[n]){
ka4a[n]--;
}
if(ka1a[n]==0){
ka1[n] = false;
}
if(ka2a[n]==0){
ka2[n] = false;
}
if(ka3a[n]==0){
ka3[n] = false;
}
if(ka4a[n]==0){
ka4[n] = false;
}
}}
if(time[0]!=null){
for(var n=0;n<time.length;n++){
if(ti1[n]){
ti1a[n]--;
}
if(ti2[n]){
ti2a[n]--;
}
if(ti3[n]){
ti3a[n]--;
}
if(ti4[n]){
ti4a[n]--;
}
if(ti1a[n]==0){
ti1[n] = false;
}
if(ti2a[n]==0){
ti2[n] = false;
}
if(ti3a[n]==0){
ti3[n] = false;
}
if(ti4a[n]==0){
ti4[n] = false;
}
}}
if(snipe[0]!=null){
for(var n=0;n<snipe.length;n++){
if(sn1[n]){
sn1a[n]--;
}
if(sn2[n]){
sn2a[n]--;
}
if(sn3[n]){
sn3a[n]--;
}
if(sn4[n]){
sn4a[n]--;
}
if(sn1a[n]==0){
sn1[n] = false;
}
if(sn2a[n]==0){
sn2[n] = false;
}
if(sn3a[n]==0){
sn3[n] = false;
}
if(sn4a[n]==0){
sn4[n] = false;
}
}}
if(zombie[0]!=null){
for(var n=0;n<zombie.length;n++){
if(z1[n]){
z1a[n]--;
}
if(z2[n]){
z2a[n]--;
}
if(z3[n]){
z3a[n]--;
}
if(z4[n]){
z4a[n]--;
}
if(z1a[n]==0){
z1[n] = false;
}
if(z2a[n]==0){
z2[n] = false;
}
if(z3a[n]==0){
z3[n] = false;
}
if(z4a[n]==0){
z4[n] = false;
}
}}
if(necro[0]!=null){
for(var n=0;n<necro.length;n++){
if(ne1[n]){
ne1a[n]--;
}
if(ne2[n]){
ne2a[n]--;
}
if(ne3[n]){
ne3a[n]--;
}
if(ne4[n]){
ne4a[n]--;
}
if(ne1a[n]==0){
ne1[n] = false;
}
if(ne2a[n]==0){
ne2[n] = false;
}
if(ne3a[n]==0){
ne3[n] = false;
}
if(ne4a[n]==0){
ne4[n] = false;
}
}}
if(asuna[0]!=null){
for(var n=0;n<asuna.length;n++){
if(asn1[n]){
asn1a[n]--;
}
if(asn2[n]){
asn2a[n]--;
}
if(asn3[n]){
asn3a[n]--;
}
if(asn4[n]){
asn4a[n]--;
}
if(asn1a[n]==0){
asn1[n] = false;
}
if(asn2a[n]==0){
asn2[n] = false;
}
if(asn3a[n]==0){
asn3[n] = false;
}
if(asn4a[n]==0){
asn4[n] = false;
}
}}
if(holy[0]!=null){
for(var n=0;n<holy.length;n++){
if(ho1[n]){
ho1a[n]--;
}
if(ho2[n]){
ho2a[n]--;
}
if(ho3[n]){
ho3a[n]--;
}
if(ho4[n]){
ho4a[n]--;
}
if(ho1a[n]==0){
ho1[n] = false;
}
if(ho2a[n]==0){
ho2[n] = false;
}
if(ho3a[n]==0){
ho3[n] = false;
}
if(ho4a[n]==0){
ho4[n] = false;
}
}}
if(solar[0]!=null){
for(var n=0;n<solar.length;n++){
if(sol1[n]){
sol1a[n]--;
}
if(sol2[n]){
sol2a[n]--;
}
if(sol3[n]){
sol3a[n]--;
}
if(sol4[n]){
sol4a[n]--;
}
if(sol1a[n]==0){
sol1[n] = false;
}
if(sol2a[n]==0){
sol2[n] = false;
}
if(sol3a[n]==0){
sol3[n] = false;
}
if(sol4a[n]==0){
sol4[n] = false;
}
}}
if(lunar[0]!=null){
for(var n=0;n<lunar.length;n++){
if(lu1[n]){
lu1a[n]--;
}
if(lu2[n]){
lu2a[n]--;
}
if(lu3[n]){
lu3a[n]--;
}
if(lu4[n]){
lu4a[n]--;
}
if(lu1a[n]==0){
lu1[n] = false;
}
if(lu2a[n]==0){
lu2[n] = false;
}
if(lu3a[n]==0){
lu3[n] = false;
}
if(lu4a[n]==0){
lu4[n] = false;
}
}}
if(has[0]!=null){
for(var n=0;n<has.length;n++){
if(ha1[n]){
ha1a[n]--;
}
if(ha2[n]){
ha2a[n]--;
}
if(ha3[n]){
ha3a[n]--;
}
if(ha4[n]){
ha4a[n]--;
}
if(ha1a[n]==0){
ha1[n] = false;
}
if(ha2a[n]==0){
ha2[n] = false;
}
if(ha3a[n]==0){
ha3[n] = false;
}
if(ha4a[n]==0){
ha4[n] = false;
}
}}
if(random[0]!=null){
for(var n=0;n<random.length;n++){
if(ra1[n]){
ra1a[n]--;
}
if(ra2[n]){
ra2a[n]--;
}
if(ra3[n]){
ra3a[n]--;
}
if(ra4[n]){
ra4a[n]--;
}
if(ra1a[n]==0){
ra1[n] = false;
}
if(ra2a[n]==0){
ra2[n] = false;
}
if(ra3a[n]==0){
ra3[n] = false;
}
if(ra4a[n]==0){
ra4[n] = false;
}
}}
if(zwei[0]!=null){
for(var n=0;n<zwei.length;n++){
if(zw1[n]){
zw1a[n]--;
}
if(zw2[n]){
zw2a[n]--;
}
if(zw3[n]){
zw3a[n]--;
}
if(zw4[n]){
zw4a[n]--;
}
if(zw1a[n]==0){
zw1[n] = false;
}
if(zw2a[n]==0){
zw2[n] = false;
}
if(zw3a[n]==0){
zw3[n] = false;
}
if(zw4a[n]==0){
zw4[n] = false;
}
}}
if(deco[0]!=null){
for(var n=0;n<deco.length;n++){
if(dec1[n]){
dec1a[n]--;
}
if(dec2[n]){
dec2a[n]--;
}
if(dec3[n]){
dec3a[n]--;
}
if(dec4[n]){
dec4a[n]--;
}
if(dec1a[n]==0){
dec1[n] = false;
}
if(dec2a[n]==0){
dec2[n] = false;
}
if(dec3a[n]==0){
dec3[n] = false;
}
if(dec4a[n]==0){
dec4[n] = false;
}
}}
if(hsum[0]!=null){
for(var n=0;n<hsum.length;n++){
if(hs1[n]){
hs1a[n]--;
}
if(hs2[n]){
hs2a[n]--;
}
if(hs3[n]){
hs3a[n]--;
}
if(hs4[n]){
hs4a[n]--;
}
if(hs1a[n]==0){
hs1[n] = false;
}
if(hs2a[n]==0){
hs2[n] = false;
}
if(hs3a[n]==0){
hs3[n] = false;
}
if(hs4a[n]==0){
hs4[n] = false;
}
}}
if(climate[0]!=null){
for(var n=0;n<climate.length;n++){
if(cli1[n]){
cli1a[n]--;
}
if(cli2[n]){
cli2a[n]--;
}
if(cli3[n]){
cli3a[n]--;
}
if(cli4[n]){
cli4a[n]--;
}
if(cli1a[n]==0){
cli1[n] = false;
}
if(cli2a[n]==0){
cli2[n] = false;
}
if(cli3a[n]==0){
cli3[n] = false;
}
if(cli4a[n]==0){
cli4[n] = false;
}
}}
if(raid[0]!=null){
for(var n=0;n<raid.length;n++){
if(rr1[n]){
rr1a[n]--;
}
if(rr2[n]){
rr2a[n]--;
}
if(rr3[n]){
rr3a[n]--;
}
if(rr4[n]){
rr4a[n]--;
}
if(rr1a[n]==0){
rr1[n] = false;
}
if(rr2a[n]==0){
rr2[n] = false;
}
if(rr3a[n]==0){
rr3[n] = false;
}
if(rr4a[n]==0){
rr4[n] = false;
}
}}
if(wind[0]!=null){
for(var n=0;n<wind.length;n++){
if(wi1[n]){
wi1a[n]--;
}
if(wi2[n]){
wi2a[n]--;
}
if(wi3[n]){
wi3a[n]--;
}
if(wi4[n]){
wi4a[n]--;
}
if(wi1a[n]==0){
wi1[n] = false;
}
if(wi2a[n]==0){
wi2[n] = false;
}
if(wi3a[n]==0){
wi3[n] = false;
}
if(wi4a[n]==0){
wi4[n] = false;
}
}}
if(energy[0]!=null){
for(var n=0;n<energy.length;n++){
if(en1[n]){
en1a[n]--;
}
if(en2[n]){
en2a[n]--;
}
if(en3[n]){
en3a[n]--;
}
if(en4[n]){
en4a[n]--;
}
if(en1a[n]==0){
en1[n] = false;
}
if(en2a[n]==0){
en2[n] = false;
}
if(en3a[n]==0){
en3[n] = false;
}
if(en4a[n]==0){
en4[n] = false;
}
}}
if(geno[0]!=null){
for(var n=0;n<geno.length;n++){
if(g1[n]){
g1a[n]--;
}
if(g2[n]){
g2a[n]--;
}
if(g3[n]){
g3a[n]--;
}
if(g4[n]){
g4a[n]--;
}
if(g1a[n]==0){
g1[n] = false;
}
if(g2a[n]==0){
g2[n] = false;
}
if(g3a[n]==0){
g3[n] = false;
}
if(g4a[n]==0){
g4[n] = false;
}
}}
if(server[0]!=null){
for(var n=0;n<server.length;n++){
if(se1[n]){
se1a[n]--;
}
if(se2[n]){
se2a[n]--;
}
if(se3[n]){
se3a[n]--;
}
if(se4[n]){
se4a[n]--;
}
if(se1a[n]==0){
se1[n] = false;
}
if(se2a[n]==0){
se2[n] = false;
}
if(se3a[n]==0){
se3[n] = false;
}
if(se4a[n]==0){
se4[n] = false;
}
}}
if(out[0]!=null){
for(var n=0;n<out.length;n++){
if(ou1[n]){
ou1a[n]--;
}
if(ou2[n]){
ou2a[n]--;
}
if(ou3[n]){
ou3a[n]--;
}
if(ou4[n]){
ou4a[n]--;
}
if(ou1a[n]==0){
ou1[n] = false;
}
if(ou2a[n]==0){
ou2[n] = false;
}
if(ou3a[n]==0){
ou3[n] = false;
}
if(ou4a[n]==0){
ou4[n] = false;
}
}}
if(rgun[0]!=null){
for(var n=0;n<rgun.length;n++){
if(rg1[n]){
rg1a[n]--;
}
if(rg2[n]){
rg2a[n]--;
}
if(rg3[n]){
rg3a[n]--;
}
if(rg4[n]){
rg4a[n]--;
}
if(rg1a[n]==0){
rg1[n] = false;
}
if(rg2a[n]==0){
rg2[n] = false;
}
if(rg3a[n]==0){
rg3[n] = false;
}
if(rg4a[n]==0){
rg4[n] = false;
}
}}
if(copy[0]!=null){
for(var n=0;n<copy.length;n++){
if(co1[n]){
co1a[n]--;
}
if(co2[n]){
co2a[n]--;
}
if(co3[n]){
co3a[n]--;
}
if(co4[n]){
co4a[n]--;
}
if(co1a[n]==0){
co1[n] = false;
}
if(co2a[n]==0){
co2[n] = false;
}
if(co3a[n]==0){
co3[n] = false;
}
if(co4a[n]==0){
co4[n] = false;
}
}}
if(dragon[0]!=null){
for(var n=0;n<dragon.length;n++){
if(dr1[n]){
dr1a[n]--;
}
if(dr2[n]){
dr2a[n]--;
}
if(dr3[n]){
dr3a[n]--;
}
if(dr4[n]){
dr4a[n]--;
}
if(dr1a[n]==0){
dr1[n] = false;
}
if(dr2a[n]==0){
dr2[n] = false;
}
if(dr3a[n]==0){
dr3[n] = false;
}
if(dr4a[n]==0){
dr4[n] = false;
}
}}
if(hawk[0]!=null){
for(var n=0;n<hawk.length;n++){
if(hw1[n]){
hw1a[n]--;
}
if(hw2[n]){
hw2a[n]--;
}
if(hw3[n]){
hw3a[n]--;
}
if(hw4[n]){
hw4a[n]--;
}
if(hw1a[n]==0){
hw1[n] = false;
}
if(hw2a[n]==0){
hw2[n] = false;
}
if(hw3a[n]==0){
hw3[n] = false;
}
if(hw4a[n]==0){
hw4[n] = false;
}
}}
if(solid[0]!=null){
for(var n=0;n<solid.length;n++){
if(sd1[n]){
sd1a[n]--;
}
if(sd2[n]){
sd2a[n]--;
}
if(sd3[n]){
sd3a[n]--;
}
if(sd4[n]){
sd4a[n]--;
}
if(sd1a[n]==0){
sd1[n] = false;
}
if(sd2a[n]==0){
sd2[n] = false;
}
if(sd3a[n]==0){
sd3[n] = false;
}
if(sd4a[n]==0){
sd4[n] = false;
}
}}
if(gravity[0]!=null){
for(var n=0;n<gravity.length;n++){
if(gr1[n]){
gr1a[n]--;
}
if(gr2[n]){
gr2a[n]--;
}
if(gr3[n]){
gr3a[n]--;
}
if(gr4[n]){
gr4a[n]--;
}
if(gr1a[n]==0){
gr1[n] = false;
}
if(gr2a[n]==0){
gr2[n] = false;
}
if(gr3a[n]==0){
gr3[n] = false;
}
if(gr4a[n]==0){
gr4[n] = false;
}
}}
if(hass[0]!=null){
for(var n=0;n<has.length;n++){
if(hass1[n]){
hass1a[n]--;
}
if(hass2[n]){
hass2a[n]--;
}
if(hass3[n]){
hass3a[n]--;
}
if(hass4[n]){
hass4a[n]--;
}
if(hass1a[n]==0){
hass1[n] = false;
}
if(hass2a[n]==0){
hass2[n] = false;
}
if(hass3a[n]==0){
hass3[n] = false;
}
if(hass4a[n]==0){
hass4[n] = false;
}
}}
if(sikill[0]!=null){
for(var n=0;n<sikill.length;n++){
if(sk1[n]){
sk1a[n]--;
}
if(sk2[n]){
sk2a[n]--;
}
if(sk3[n]){
sk3a[n]--;
}
if(sk4[n]){
sk4a[n]--;
}
if(sk1a[n]==0){
sk1[n] = false;
}
if(sk2a[n]==0){
sk2[n] = false;
}
if(sk3a[n]==0){
sk3[n] = false;
}
if(sk4a[n]==0){
sk4[n] = false;
}
}}
if(black[0]!=null){
for(var n=0;n<black.length;n++){
if(bl1[n]){
bl1a[n]--;
}
if(bl2[n]){
bl2a[n]--;
}
if(bl3[n]){
bl3a[n]--;
}
if(bl4[n]){
bl4a[n]--;
}
if(bl1a[n]==0){
bl1[n] = false;
}
if(bl2a[n]==0){
bl2[n] = false;
}
if(bl3a[n]==0){
bl3[n] = false;
}
if(bl4a[n]==0){
bl4[n] = false;
}
}}
if(slash[0]!=null){
for(var n=0;n<slash.length;n++){
if(sl1[n]){
sl1a[n]--;
}
if(sl2[n]){
sl2a[n]--;
}
if(sl3[n]){
sl3a[n]--;
}
if(sl4[n]){
sl4a[n]--;
}
if(sl1a[n]==0){
sl1[n] = false;
}
if(sl2a[n]==0){
sl2[n] = false;
}
if(sl3a[n]==0){
sl3[n] = false;
}
if(sl4a[n]==0){
sl4[n] = false;
}
}}
if(night[0]!=null){
for(var n=0;n<night.length;n++){
if(ni1[n]){
ni1a[n]--;
}
if(ni2[n]){
ni2a[n]--;
}
if(ni3[n]){
ni3a[n]--;
}
if(ni4[n]){
ni4a[n]--;
}
if(ni1a[n]==0){
ni1[n] = false;
}
if(ni2a[n]==0){
ni2[n] = false;
}
if(ni3a[n]==0){
ni3[n] = false;
}
if(ni4a[n]==0){
ni4[n] = false;
}
}}
if(gem[0]!=null){
for(var n=0;n<gem.length;n++){
if(ge1[n]){
ge1a[n]--;
}
if(ge2[n]){
ge2a[n]--;
}
if(ge3[n]){
ge3a[n]--;
}
if(ge4[n]){
ge4a[n]--;
}
if(ge1a[n]==0){
ge1[n] = false;
}
if(ge2a[n]==0){
ge2[n] = false;
}
if(ge3a[n]==0){
ge3[n] = false;
}
if(ge4a[n]==0){
ge4[n] = false;
}
}}
if(dra[0]!=null){
for(var n=0;n<dra.length;n++){
if(dc1[n]){
dc1a[n]--;
}
if(dc2[n]){
dc2a[n]--;
}
if(dc3[n]){
dc3a[n]--;
}
if(dc4[n]){
dc4a[n]--;
}
if(dc1a[n]==0){
dc1[n] = false;
}
if(dc2a[n]==0){
dc2[n] = false;
}
if(dc3a[n]==0){
dc3[n] = false;
}
if(dc4a[n]==0){
dc4[n] = false;
}
}}
if(mush[0]!=null){
for(var n=0;n<mush.length;n++){
if(mu1[n]){
mu1a[n]--;
}
if(mu2[n]){
mu2a[n]--;
}
if(mu3[n]){
mu3a[n]--;
}
if(mu4[n]){
mu4a[n]--;
}
if(mu1a[n]==0){
mu1[n] = false;
}
if(mu2a[n]==0){
mu2[n] = false;
}
if(mu3a[n]==0){
mu3[n] = false;
}
if(mu4a[n]==0){
mu4[n] = false;
}
}}
if(ender[0]!=null){
for(var n=0;n<ender.length;n++){
if(end1[n]){
end1a[n]--;
}
if(end2[n]){
end2a[n]--;
}
if(end3[n]){
end3a[n]--;
}
if(end4[n]){
end4a[n]--;
}
if(end1a[n]==0){
end1[n] = false;
}
if(end2a[n]==0){
end2[n] = false;
}
if(end3a[n]==0){
end3[n] = false;
}
if(end4a[n]==0){
end4[n] = false;
}
}}
if(taiga[0]!=null){
for(var n=0;n<taiga.length;n++){
if(ta1[n]){
ta1a[n]--;
}
if(ta2[n]){
ta2a[n]--;
}
if(ta3[n]){
ta3a[n]--;
}
if(ta4[n]){
ta4a[n]--;
}
if(ta1a[n]==0){
ta1[n] = false;
}
if(ta2a[n]==0){
ta2[n] = false;
}
if(ta3a[n]==0){
ta3[n] = false;
}
if(ta4a[n]==0){
ta4[n] = false;
}
}}
if(ruin[0]!=null){
for(var n=0;n<ruin.length;n++){
if(ru1[n]){
ru1a[n]--;
}
if(ru2[n]){
ru2a[n]--;
}
if(ru3[n]){
ru3a[n]--;
}
if(ru4[n]){
ru4a[n]--;
}
if(ru1a[n]==0){
ru1[n] = false;
}
if(ru2a[n]==0){
ru2[n] = false;
}
if(ru3a[n]==0){
ru3[n] = false;
}
if(ru4a[n]==0){
ru4[n] = false;
}
}}
if(swamp[0]!=null){
for(var n=0;n<swamp.length;n++){
if(sw1[n]){
sw1a[n]--;
}
if(sw2[n]){
sw2a[n]--;
}
if(sw3[n]){
sw3a[n]--;
}
if(sw4[n]){
sw4a[n]--;
}
if(sw1a[n]==0){
sw1[n] = false;
}
if(sw2a[n]==0){
sw2[n] = false;
}
if(sw3a[n]==0){
sw3[n] = false;
}
if(sw4a[n]==0){
sw4[n] = false;
}
}}
if(asum[0]!=null){
for(var n=0;n<asum.length;n++){
if(asum1[n]){
asum1a[n]--;
}
if(asum2[n]){
asum2a[n]--;
}
if(asum3[n]){
asum3a[n]--;
}
if(asum4[n]){
asum4a[n]--;
}
if(asum1a[n]==0){
asum1[n] = false;
}
if(asum2a[n]==0){
asum2[n] = false;
}
if(asum3a[n]==0){
asum3[n] = false;
}
if(asum4a[n]==0){
asum4[n] = false;
}
}}
if(amage[0]!=null){
for(var n=0;n<amage.length;n++){
if(am1[n]){
am1a[n]--;
}
if(am2[n]){
am2a[n]--;
}
if(am3[n]){
am3a[n]--;
}
if(am4[n]){
am4a[n]--;
}
if(am1a[n]==0){
am1[n] = false;
}
if(am2a[n]==0){
am2[n] = false;
}
if(am3a[n]==0){
am3[n] = false;
}
if(am4a[n]==0){
am4[n] = false;
}
}}
if(puella[0]!=null){
for(var n=0;n<puella.length;n++){
if(pm1[n]){
pm1a[n]--;
}
if(pm2[n]){
pm2a[n]--;
}
if(pm3[n]){
pm3a[n]--;
}
if(pm4[n]){
pm4a[n]--;
}
if(pm1a[n]==0){
pm1[n] = false;
}
if(pm2a[n]==0){
pm2[n] = false;
}
if(pm3a[n]==0){
pm3[n] = false;
}
if(pm4a[n]==0){
pm4[n] = false;
}
}}
if(hbuild[0]!=null){
for(var n=0;n<hbuild.length;n++){
if(hb1[n]){
hb1a[n]--;
}
if(hb2[n]){
hb2a[n]--;
}
if(hb3[n]){
hb3a[n]--;
}
if(hb4[n]){
hb4a[n]--;
}
if(hb1a[n]==0){
hb1[n] = false;
}
if(hb2a[n]==0){
hb2[n] = false;
}
if(hb3a[n]==0){
hb3[n] = false;
}
if(hb4a[n]==0){
hb4[n] = false;
}
}}
if(scalar[0]!=null){
for(var n=0;n<scalar.length;n++){
if(sc1[n]){
sc1a[n]--;
}
if(sc2[n]){
sc2a[n]--;
}
if(sc3[n]){
sc3a[n]--;
}
if(sc4[n]){
sc4a[n]--;
}
if(sc1a[n]==0){
sc1[n] = false;
}
if(sc2a[n]==0){
sc2[n] = false;
}
if(sc3a[n]==0){
sc3[n] = false;
}
if(sc4a[n]==0){
sc4[n] = false;
}
}}
if(vector[0]!=null){
for(var n=0;n<vector.length;n++){
if(v1[n]){
v1a[n]--;
}
if(v2[n]){
v2a[n]--;
}
if(v3[n]){
v3a[n]--;
}
if(v4[n]){
v4a[n]--;
}
if(v1a[n]==0){
v1[n] = false;
}
if(v2a[n]==0){
v2[n] = false;
}
if(v3a[n]==0){
v3[n] = false;
}
if(v4a[n]==0){
v4[n] = false;
}
}}
if(tensor[0]!=null){
for(var n=0;n<tensor.length;n++){
if(te1[n]){
te1a[n]--;
}
if(te2[n]){
te2a[n]--;
}
if(te3[n]){
te3a[n]--;
}
if(te4[n]){
te4a[n]--;
}
if(te1a[n]==0){
te1[n] = false;
}
if(te2a[n]==0){
te2[n] = false;
}
if(te3a[n]==0){
te3[n] = false;
}
if(te4a[n]==0){
te4[n] = false;
}
}}
if(ameca[0]!=null){
for(var n=0;n<ameca.length;n++){
if(ame1[n]){
ame1a[n]--;
}
if(ame2[n]){
ame2a[n]--;
}
if(ame3[n]){
ame3a[n]--;
}
if(ame4[n]){
ame4a[n]--;
}
if(ame1a[n]==0){
ame1[n] = false;
}
if(ame2a[n]==0){
ame2[n] = false;
}
if(ame3a[n]==0){
ame3[n] = false;
}
if(ame4a[n]==0){
ame4[n] = false;
}
}}
if(seal[0]!=null){
for(var n=0;n<seal.length;n++){
if(sea1[n]){
sea1a[n]--;
}
if(sea2[n]){
sea2a[n]--;
}
if(sea3[n]){
sea3a[n]--;
}
if(sea4[n]){
sea4a[n]--;
}
if(sea1a[n]==0){
sea1[n] = false;
}
if(sea2a[n]==0){
sea2[n] = false;
}
if(sea3a[n]==0){
sea3[n] = false;
}
if(sea4a[n]==0){
sea4[n] = false;
}
}}
if(angel[0]!=null){
for(var n=0;n<angel.length;n++){
if(an1[n]){
an1a[n]--;
}
if(an2[n]){
an2a[n]--;
}
if(an3[n]){
an3a[n]--;
}
if(an4[n]){
an4a[n]--;
}
if(an1a[n]==0){
an1[n] = false;
}
if(an2a[n]==0){
an2[n] = false;
}
if(an3a[n]==0){
an3[n] = false;
}
if(an4a[n]==0){
an4[n] = false;
}
}}
if(white[0]!=null){
for(var n=0;n<white.length;n++){
if(wh1[n]){
wh1a[n]--;
}
if(wh2[n]){
wh2a[n]--;
}
if(wh3[n]){
wh3a[n]--;
}
if(wh4[n]){
wh4a[n]--;
}
if(wh1a[n]==0){
wh1[n] = false;
}
if(wh2a[n]==0){
wh2[n] = false;
}
if(wh3a[n]==0){
wh3[n] = false;
}
if(wh4a[n]==0){
wh4[n] = false;
}
}}
if(mental[0]!=null){
for(var n=0;n<mental.length;n++){
if(mt1[n]){
mt1a[n]--;
}
if(mt2[n]){
mt2a[n]--;
}
if(mt3[n]){
mt3a[n]--;
}
if(mt4[n]){
mt4a[n]--;
}
if(mt1a[n]==0){
mt1[n] = false;
}
if(mt2a[n]==0){
mt2[n] = false;
}
if(mt3a[n]==0){
mt3[n] = false;
}
if(mt4a[n]==0){
mt4[n] = false;
}
}}
if(world[0]!=null){
for(var n=0;n<world.length;n++){
if(wo1[n]){
wo1a[n]--;
}
if(wo2[n]){
wo2a[n]--;
}
if(wo3[n]){
wo3a[n]--;
}
if(wo4[n]){
wo4a[n]--;
}
if(wo1a[n]==0){
wo1[n] = false;
}
if(wo2a[n]==0){
wo2[n] = false;
}
if(wo3a[n]==0){
wo3[n] = false;
}
if(wo4a[n]==0){
wo4[n] = false;
}
}}


//----------------------
if(ice[0]!=null){
for(var n=0;n<ice.length;n++){
if(i1c[n]){
i1b[n]--;
}
if(i1b[n]==0&&i1c[n]){
for(var xx=ix[n]-1;xx<ix[n]+2;xx++)
for(var zz=iz[n]-1;zz<iz[n]+2;zz++)
setTile(xx, iy[n], zz, 79);
i1c[n] = false;
}
if(i3b[n]){
i3c[n]--;
}
if(i3c[n]==0&&i3b[n]){
ESP.antiLack(5);
explode(ixa[n], iya[n]+3, iza[n], 4.5);
i3b[n] = false;
}
if(i4a[n]==900){
if(auto) autoRecover(ixc[n], iyc[n], izc[n], 6, 2);
for(var xx=ixc[n]-6;xx<ixc[n]+7;xx++)
for(var yy=iyc[n]+1;yy<iyc[n]+6;yy++)
for(var zz=izc[n]-6;zz<izc[n]+7;zz++)
setTile(xx,yy,zz,0);
}
}}
if(water[0]!=null){
for(var n=0;n<water.length;n++){
if(w2a[n]==75&&auto){
for(var xx=w2x[n]-2;xx<w2x[n]+3;xx++)
for(var zz=w2z[n]-2;zz<w2z[n]+3;zz++)
setTile(xx, w2y[n], zz, 2);
}
if(w3a[n]==15){
for(var xx=wxb[n]-3;xx<wxb[n]+4;xx++)
for(var zz=wzb[n]-3;zz<wzb[n]+4;zz++)
setTile(xx, wyb[n]+1, zz, 0);
}
if(w1c[n]){
w1b[n]--;
}
if(w1b[n]==0&&w1c[n]){
setTile(wx[n], wy[n]+1, wz[n], 0);
w1c[n] = false;
}
if(w4c[n]){
w4b[n]--;
}
if(w4b[n]==300&&w4c[n]){
setTile(wxa[n]+9, wya[n]+10, wza[n]+9, 0);
setTile(wxa[n]+9, wya[n]+10, wza[n]-9, 0);
setTile(wxa[n]-9, wya[n]+10, wza[n]+9, 0);
setTile(wxa[n]-9, wya[n]+10, wza[n]-9, 0);
setTile(wxa[n]+9, wya[n]+10, wza[n], 0);
setTile(wxa[n]-9, wya[n]+10, wza[n], 0);
setTile(wxa[n], wya[n]+10, wza[n]+9, 0);
setTile(wxa[n], wya[n]+10, wza[n]-9, 0);
for(var xx=wxa[n]-11;xx<wxa[n]+12;xx++){
for(var zz=wza[n]-11;zz<wza[n]+12;zz++){
setTile(xx,wya[n],zz,9);}}
}
}}
if(tree[0]!=null){
for(var n=0;n<tree.length;n++){
if(t3a[n]>150){
t3x[n] = Entity.getX(tree[n]);
t3y[n] = Entity.getY(tree[n])-2;
t3z[n] = Entity.getZ(tree[n]);
for(var xx=t3x[n]-1;xx<t3x[n]+2;xx++)
for(var zz=t3z[n]-1;zz<t3z[n]+2;zz++)
if([0, 8, 9, 51].indexOf(getTile(xx, t3y[n], zz))!=-1){
setTile(xx, t3y[n], zz, 17);
}
}
if(t3a[n]==150){
t3b[n] = -1;
}
if(t3b[n]==-1){
t3x[n] = Entity.getX(tree[n]);
t3y[n] = Entity.getY(tree[n])-4;
t3z[n] = Entity.getZ(tree[n]);
if(getTile(t3x[n], t3y[n]-1, t3z[n])!=0){
for(var xx=t3x[n]-1;xx<t3x[n]+2;xx++)
for(var zz=t3z[n]-1;zz<t3z[n]+2;zz++)
if(getTile(xx, t3y[n]+2, zz)==0){
setTile(xx, t3y[n]+2, zz, 30);
t3b[n] = 16;
}
}
}
if(t3b[n]>0){
t3b[n]--;
}
if(t3b[n]==1){
for(var xx=t3x[n]-1;xx<t3x[n]+2;xx++)
for(var zz=t3z[n]-1;zz<t3z[n]+2;zz++)
if(getTile(xx, t3y[n]+2, zz)==30){
setTile(xx, t3y[n]+2, zz, 0);
}
}
}}
if(light[0]!=null){
for(var n=0;n<light.length;n++){
if(l4a[n]==1740){
for(var yy=lya[n]+8;yy<lya[n]+10;yy++){
setTile(lxa[n]+9, yy, lza[n]+9, 155);
setTile(lxa[n]+9, yy, lza[n], 155);
setTile(lxa[n]+9, yy, lza[n]-9, 155);
setTile(lxa[n], yy, lza[n]+9, 155);
setTile(lxa[n], yy, lza[n]-9, 155);
setTile(lxa[n]-9, yy, lza[n]+9, 155);
setTile(lxa[n]-9, yy, lza[n], 155);
setTile(lxa[n]-9, yy, lza[n]-9, 155);
}
setTile(lxa[n]+9, lya[n]+7, lza[n]+9, 89);
setTile(lxa[n]+9, lya[n]+7, lza[n], 89);
setTile(lxa[n]+9, lya[n]+7, lza[n]-9, 89);
setTile(lxa[n], lya[n]+7, lza[n]+9, 89);
setTile(lxa[n], lya[n]+7, lza[n]-9, 89);
setTile(lxa[n]-9, lya[n]+7, lza[n]+9, 89);
setTile(lxa[n]-9, lya[n]+7, lza[n], 89);
setTile(lxa[n]-9, lya[n]+7, lza[n]-9, 89);
}
if(l4a[n]==1735){
for(var yy=lya[n]+6;yy<lya[n]+8;yy++){
setTile(lxa[n]+9, yy, lza[n]+9, 155);
setTile(lxa[n]+9, yy, lza[n], 155);
setTile(lxa[n]+9, yy, lza[n]-9, 155);
setTile(lxa[n], yy, lza[n]+9, 155);
setTile(lxa[n], yy, lza[n]-9, 155);
setTile(lxa[n]-9, yy, lza[n]+9, 155);
setTile(lxa[n]-9, yy, lza[n], 155);
setTile(lxa[n]-9, yy, lza[n]-9, 155);
}
setTile(lxa[n]+9, lya[n]+5, lza[n]+9, 89);
setTile(lxa[n]+9, lya[n]+5, lza[n], 89);
setTile(lxa[n]+9, lya[n]+5, lza[n]-9, 89);
setTile(lxa[n], lya[n]+5, lza[n]+9, 89);
setTile(lxa[n], lya[n]+5, lza[n]-9, 89);
setTile(lxa[n]-9, lya[n]+5, lza[n]+9, 89);
setTile(lxa[n]-9, lya[n]+5, lza[n], 89);
setTile(lxa[n]-9, lya[n]+5, lza[n]-9, 89);
}
if(l4a[n]==1730){
for(var yy=lya[n]+4;yy<lya[n]+6;yy++){
setTile(lxa[n]+9, yy, lza[n]+9, 155);
setTile(lxa[n]+9, yy, lza[n], 155);
setTile(lxa[n]+9, yy, lza[n]-9, 155);
setTile(lxa[n], yy, lza[n]+9, 155);
setTile(lxa[n], yy, lza[n]-9, 155);
setTile(lxa[n]-9, yy, lza[n]+9, 155);
setTile(lxa[n]-9, yy, lza[n], 155);
setTile(lxa[n]-9, yy, lza[n]-9, 155);
}
setTile(lxa[n]+9, lya[n]+3, lza[n]+9, 89);
setTile(lxa[n]+9, lya[n]+3, lza[n], 89);
setTile(lxa[n]+9, lya[n]+3, lza[n]-9, 89);
setTile(lxa[n], lya[n]+3, lza[n]+9, 89);
setTile(lxa[n], lya[n]+3, lza[n]-9, 89);
setTile(lxa[n]-9, lya[n]+3, lza[n]+9, 89);
setTile(lxa[n]-9, lya[n]+3, lza[n], 89);
setTile(lxa[n]-9, lya[n]+3, lza[n]-9, 89);
}
if(l4a[n]==1725){
for(var yy=lya[n]+2;yy<lya[n]+4;yy++){
setTile(lxa[n]+9, yy, lza[n]+9, 155);
setTile(lxa[n]+9, yy, lza[n], 155);
setTile(lxa[n]+9, yy, lza[n]-9, 155);
setTile(lxa[n], yy, lza[n]+9, 155);
setTile(lxa[n], yy, lza[n]-9, 155);
setTile(lxa[n]-9, yy, lza[n]+9, 155);
setTile(lxa[n]-9, yy, lza[n], 155);
setTile(lxa[n]-9, yy, lza[n]-9, 155);
}
setTile(lxa[n]+9, lya[n]+1, lza[n]+9, 89);
setTile(lxa[n]+9, lya[n]+1, lza[n], 89);
setTile(lxa[n]+9, lya[n]+1, lza[n]-9, 89);
setTile(lxa[n], lya[n]+1, lza[n]+9, 89);
setTile(lxa[n], lya[n]+1, lza[n]-9, 89);
setTile(lxa[n]-9, lya[n]+1, lza[n]+9, 89);
setTile(lxa[n]-9, lya[n]+1, lza[n], 89);
setTile(lxa[n]-9, lya[n]+1, lza[n]-9, 89);
}
if(l4a[n]==1720){
ESP.antiLack(5);
for(var yy=lya[n]+1;yy<lya[n]+13;yy++){
setTile(lxa[n]+9, yy, lza[n]+9, 0);
setTile(lxa[n]+9, yy, lza[n], 0);
setTile(lxa[n]+9, yy, lza[n]-9, 0);
setTile(lxa[n], yy, lza[n]+9, 0);
setTile(lxa[n], yy, lza[n]-9, 0);
setTile(lxa[n]-9, yy, lza[n]+9, 0);
setTile(lxa[n]-9, yy, lza[n], 0);
setTile(lxa[n]-9, yy, lza[n]-9, 0);
}
explode(lxa[n]+9, lya[n], lza[n]+9, 3);
explode(lxa[n]+9, lya[n], lza[n], 3);
explode(lxa[n]+9, lya[n], lza[n]-9, 3);
explode(lxa[n], lya[n], lza[n]+9, 3);
explode(lxa[n], lya[n], lza[n]-9, 3);
explode(lxa[n]-9, lya[n], lza[n]+9, 3);
explode(lxa[n]-9, lya[n], lza[n], 3);
explode(lxa[n]-9, lya[n], lza[n]-9, 3);
explode(lxa[n]+9, lya[n]+2, lza[n]+9, 2);
explode(lxa[n]+9, lya[n]+2, lza[n], 2);
explode(lxa[n]+9, lya[n]+2, lza[n]-9, 2);
explode(lxa[n], lya[n]+2, lza[n]+9, 2);
explode(lxa[n], lya[n]+2, lza[n]-9, 2);
explode(lxa[n]-9, lya[n]+2, lza[n]+9, 2);
explode(lxa[n]-9, lya[n]+2, lza[n], 2);
explode(lxa[n]-9, lya[n]+2, lza[n]-9, 2);
}
if(l4a[n]==1705){
for(var xx=lxa[n]-10;xx<lxa[n]+11;xx++)
for(var zz=lza[n]-10;zz<lza[n]+11;zz++)
setTile(xx,lya[n]+1,zz,0);
}
if(l3c[n]){
l3b[n]--;
}
if(l3b[n]==45&&l3c[n]){
setTile(lx[n]+2, ly[n]+3, lz[n], 0);
setTile(lx[n]-2, ly[n]+3, lz[n], 0);
setTile(lx[n], ly[n]+3, lz[n]+2, 0);
setTile(lx[n], ly[n]+3, lz[n]-2, 0);
}
if(l3b[n]==0&&l3c[n]){
setTile(lx[n]+2, ly[n]+2, lz[n], 0);
setTile(lx[n]-2, ly[n]+2, lz[n], 0);
setTile(lx[n], ly[n]+2, lz[n]+2, 0);
setTile(lx[n], ly[n]+2, lz[n]-2, 0);
setTile(lx[n], ly[n]+5, lz[n], 0);
l3c[n] = false;
}
}}
if(fire[0]!=null){
for(var n=0;n<fire.length;n++){
if(f4c[n]){
f4b[n]--;
}
if(f4b[n]==0&&f4c[n]){
if(auto){
autoRecover(fx[n], fy[n], fz[n], 12, 2);
}
autoRecover(fx[n], fy[n]+1, fz[n], 12, 0);
for(var xx=fx[n]-11;xx<fx[n]+12;xx++){
setTile(xx, fy[n]+2, fz[n]+11, 0);
setTile(xx, fy[n]+2, fz[n]-11, 0);
}
for(var zz=fz[n]-10;zz<fz[n]+11;zz++){
setTile(fx[n]+11, fy[n]+2, zz, 0);
setTile(fx[n]-11, fy[n]+2, zz, 0);
}
f4d[n] = false;
f4c[n] = false;
}
}
}
if(dark[0]!=null){
for(var n=0;n<dark.length;n++){
if(d1c[n]){
d1b[n]--;
}
if(d1b[n]==0&&d1c[n]){
setTile(dxb[n], dyb[n]+2, dzb[n], 51);
d1c[n] = false;
}
if(d4a[n]==1795){
for(var xx=dx[n]-1;xx<dx[n]+2;xx++)
for(var yy=dy[n]-1;yy<dy[n]+2;yy++)
for(var zz=dz[n]-1;zz<dz[n]+2;zz++)
if(getTile(xx, yy, zz)==0){
setTile(xx,yy,zz,49);
}
}
if(d4a[n]==1790){
for(var xx=dx[n]-2;xx<dx[n]+3;xx++)
for(var yy=dy[n]-2;yy<dy[n]+3;yy++)
for(var zz=dz[n]-2;zz<dz[n]+3;zz++)
if(getTile(xx, yy, zz)==0){
setTile(xx,yy,zz,49);
}
}
if(d4a[n]==1785){
for(var xx=dx[n]-3;xx<dx[n]+4;xx++)
for(var yy=dy[n]-3;yy<dy[n]+4;yy++)
for(var zz=dz[n]-3;zz<dz[n]+4;zz++)
if(getTile(xx, yy, zz)==0){
setTile(xx,yy,zz,49);
}
}
if(d4a[n]==1780){
for(var xx=dx[n]-4;xx<dx[n]+5;xx++)
for(var yy=dy[n]-4;yy<dy[n]+5;yy++)
for(var zz=dz[n]-4;zz<dz[n]+5;zz++)
if(getTile(xx, yy, zz)==0){
setTile(xx,yy,zz,49);
}
}
if(d4a[n]==1775){
for(var xx=dx[n]-5;xx<dx[n]+6;xx++)
for(var yy=dy[n]-5;yy<dy[n]+6;yy++)
for(var zz=dz[n]-5;zz<dz[n]+6;zz++)
if(getTile(xx, yy, zz)==0){
setTile(xx,yy,zz,49);
}
}
if(d4a[n]==1770){
for(var xx=dx[n]-6;xx<dx[n]+7;xx++){
for(var zz=dz[n]-6;zz<dz[n]+7;zz++){
if(getTile(xx, dy[n]-6, zz)==0){
setTile(xx, dy[n]-6, zz, 49);
}
if(getTile(xx, dy[n]+6, zz)==0){
setTile(xx, dy[n]+6, zz, 49);
}
}}
for(var xx=dx[n]-6;xx<dx[n]+7;xx++){
for(var yy=dy[n]-6;yy<dy[n]+7;yy++){
if(getTile(xx, yy, dz[n]-6)==0){
setTile(xx, yy, dz[n]-6, 49);
}
if(getTile(xx, yy, dz[n]+6)==0){
setTile(xx, yy, dz[n]+6, 49);
}
}}
for(var yy=dy[n]-6;yy<dy[n]+7;yy++){
for(var zz=dz[n]-6;zz<dz[n]+7;zz++){
if(getTile(dx[n]-6, yy, zz)==0){
setTile(dx[n]-6, yy, zz, 49);
}
if(getTile(dx[n]+6, yy, zz)==0){
setTile(dx[n]+6, yy, zz, 49);
}
}}
}
if(d4a[n]==1765){
for(var xx=dx[n]-7;xx<dx[n]+8;xx++){
for(var zz=dz[n]-7;zz<dz[n]+8;zz++){
if(getTile(xx, dy[n]-7, zz)==0){
setTile(xx, dy[n]-7, zz, 49);
}
if(getTile(xx, dy[n]+7, zz)==0){
setTile(xx, dy[n]+7, zz, 49);
}
}}
for(var xx=dx[n]-7;xx<dx[n]+8;xx++){
for(var yy=dy[n]-7;yy<dy[n]+8;yy++){
if(getTile(xx, yy, dz[n]-7)==0){
setTile(xx, yy, dz[n]-7, 49);
}
if(getTile(xx, yy, dz[n]+7)==0){
setTile(xx, yy, dz[n]+7, 49);
}
}}
for(var yy=dy[n]-7;yy<dy[n]+8;yy++){
for(var zz=dz[n]-7;zz<dz[n]+8;zz++){
if(getTile(dx[n]-7, yy, zz)==0){
setTile(dx[n]-7, yy, zz, 49);
}
if(getTile(dx[n]+7, yy, zz)==0){
setTile(dx[n]+7, yy, zz, 49);
}
}}
}
if(d4a[n]==1760){
for(var xx=dx[n]-8;xx<dx[n]+9;xx++){
for(var zz=dz[n]-8;zz<dz[n]+9;zz++){
if(getTile(xx, dy[n]-8, zz)==0){
setTile(xx, dy[n]-8, zz, 49);
}
if(getTile(xx, dy[n]+8, zz)==0){
setTile(xx, dy[n]+8, zz, 49);
}
}}
for(var xx=dx[n]-8;xx<dx[n]+9;xx++){
for(var yy=dy[n]-8;yy<dy[n]+9;yy++){
if(getTile(xx, yy, dz[n]-8)==0){
setTile(xx, yy, dz[n]-8, 49);
}
if(getTile(xx, yy, dz[n]+8)==0){
setTile(xx, yy, dz[n]+8, 49);
}
}}
for(var yy=dy[n]-8;yy<dy[n]+9;yy++){
for(var zz=dz[n]-8;zz<dz[n]+9;zz++){
if(getTile(dx[n]-8, yy, zz)==0){
setTile(dx[n]-8, yy, zz, 49);
}
if(getTile(dx[n]+8, yy, zz)==0){
setTile(dx[n]+8, yy, zz, 49);
}
}}
}
if(d4a[n]==1750){
for(var xx=dx[n]-10;xx<dx[n]+11;xx++){
for(var zz=dz[n]-10;zz<dz[n]+11;zz++){
if(getTile(xx, dy[n]-10, zz)==0){
setTile(xx, dy[n]-10, zz, 49);
}
if(getTile(xx, dy[n]+10, zz)==0){
setTile(xx, dy[n]+10, zz, 49);
}
}}
for(var xx=dx[n]-10;xx<dx[n]+11;xx++){
for(var yy=dy[n]-10;yy<dy[n]+11;yy++){
if(getTile(xx, yy, dz[n]-10)==0){
setTile(xx, yy, dz[n]-10, 49);
}
if(getTile(xx, yy, dz[n]+10)==0){
setTile(xx, yy, dz[n]+10, 49);
}
}}
for(var yy=dy[n]-10;yy<dy[n]+11;yy++){
for(var zz=dz[n]-10;zz<dz[n]+11;zz++){
if(getTile(dx[n]-10, yy, zz)==0){
setTile(dx[n]-10, yy, zz, 49);
}
if(getTile(dx[n]+10, yy, zz)==0){
setTile(dx[n]+10, yy, zz, 49);
}
}}
}
if(d4a[n]==1740){
for(var xx=dx[n]-12;xx<dx[n]+13;xx++){
for(var zz=dz[n]-12;zz<dz[n]+13;zz++){
if(getTile(xx, dy[n]-12, zz)==0){
setTile(xx, dy[n]-12, zz, 49);
}
if(getTile(xx, dy[n]+12, zz)==0){
setTile(xx, dy[n]+12, zz, 49);
}
}}
for(var xx=dx[n]-12;xx<dx[n]+13;xx++){
for(var yy=dy[n]-12;yy<dy[n]+13;yy++){
if(getTile(xx, yy, dz[n]-12)==0){
setTile(xx, yy, dz[n]-12, 49);
}
if(getTile(xx, yy, dz[n]+12)==0){
setTile(xx, yy, dz[n]+12, 49);
}
}}
for(var yy=dy[n]-12;yy<dy[n]+13;yy++){
for(var zz=dz[n]-12;zz<dz[n]+13;zz++){
if(getTile(dx[n]-12, yy, zz)==0){
setTile(dx[n]-12, yy, zz, 49);
}
if(getTile(dx[n]+12, yy, zz)==0){
setTile(dx[n]+12, yy, zz, 49);
}
}}
}
if(d4a[n]==1710){
var p2x, p2y, p2z;
for each(var e in Entity.getAll()){
p2x = Math.abs(dx[n]-Entity.getX(e));
p2y = Math.abs((dy[n]+1)-Entity.getY(e));
p2z = Math.abs(dz[n]-Entity.getZ(e));
if(p2x<=30&&p2y<=30&&p2z<=30&&swamp!=e&&Entity.getEntityTypeId(e)<64){
Entity.setHealth(e, Entity.getHealth(e)-10);
}
}
}
if(d4a[n]==1590){
for(var xx=dx[n]-12;xx<dx[n]+13;xx++)
for(var yy=dy[n]+4;yy<dy[n]+13;yy++)
for(var zz=dz[n]-12;zz<dz[n]+13;zz++)
if(getTile(xx, yy, zz)==49){
setTile(xx,yy,zz,0);
}
}
if(d4a[n]==1585){
for(var xx=dx[n]-12;xx<dx[n]+13;xx++)
for(var yy=dy[n]-3;yy<dy[n]+4;yy++)
for(var zz=dz[n]-12;zz<dz[n]+13;zz++)
if(getTile(xx, yy, zz)==49){
setTile(xx,yy,zz,0);
}
}
if(d4a[n]==1580){
for(var xx=dx[n]-12;xx<dx[n]+13;xx++)
for(var yy=dy[n]-12;yy<dy[n]-3;yy++)
for(var zz=dz[n]-12;zz<dz[n]+13;zz++)
if(getTile(xx, yy, zz)==49){
setTile(xx,yy,zz,0);
}
}
if(d3c[n]){
d3b[n]--;
}
if(d3b[n]==75&&d3c[n]){
setTile(dxa[n]+2, dya[n]+2, dza[n], 0);
setTile(dxa[n]-2, dya[n]+2, dza[n], 0);
setTile(dxa[n], dya[n]+2, dza[n]+2, 0);
setTile(dxa[n], dya[n]+2, dza[n]-2, 0);
}
if(d3b[n]==0&&d3c[n]){
setTile(dxa[n], dya[n]+1, dza[n], 51);
d3c[n] = false;
}
}}
if(sand[0]!=null){
for(var n=0;n<sand.length;n++){
if(m3a[n]==255){
ESP.antiLack(5);
explode(m3x[n]+0.5, m3y[n]+1, m3z[n]+0.5, 1.5);
explode(m3x[n]+0.5, m3y[n]+2, m3z[n]+0.5, 1.5);
}
if(m3a[n]==91){
for(var xx=m3x[n]-2;xx<m3x[n]+3;xx++)
for(var yy=m3y[n]+1;yy<m3y[n]+5;yy++)
for(var zz=m3z[n]-2;zz<m3z[n]+3;zz++)
if(getTile(xx, yy, zz)==12){
setTile(xx, yy, zz, 0);
}
}
if(m4a[n]==930){
ESP.antiLack(5);
for(var xx=m4x[n]-12;xx<m4x[n]+13;xx++)
for(var yy=m4y[n]+1;yy<m4y[n]+4;yy++)
for(var zz=m4z[n]-12;zz<m4z[n]+13;zz++)
if(getTile(xx, yy, zz)==81){
setTile(xx, yy, zz, 0);
}
autoRecover(m4x[n], m4y[n]+2, m4z[n], 13, 0);
}
if(m4a[n]==915){
for(var xx=m4x[n]-12;xx<m4x[n]+13;xx++)
for(var yy=m4y[n]-3;yy<m4y[n];yy++)
for(var zz=m4z[n]-12;zz<m4z[n]+13;zz++)
setTile(xx,yy,zz,3);
}
if(m4a[n]==900){
autoRecover(m4x[n], m4y[n], m4z[n], 12, 2);
}
}}
if(elsa[0]!=null){
for(var n=0;n<elsa.length;n++){
if(e3b[n]){
e3c[n]--;
}
if(e3c[n]==0&&e3b[n]){
ESP.antiLack(5);
explode(ex[n],ey[n]+4,ez[n],3);
e3b[n] = false;
}
if(e4a[n]==900){
if(auto) autoRecover(ex4[n], ey4[n], ez4[n], 8, 2);
for(var xx=ex4[n]-5;xx<ex4[n]+6;xx++)
for(var yy=ey4[n]+1;yy<ey4[n]+19;yy++)
for(var zz=ez4[n]-5;zz<ez4[n]+6;zz++)
setTile(xx, yy, zz, 0);
for(var xx=ex4[n]-3;xx<ex4[n]+4;xx++)
for(var yy=ey4[n]+19;yy<ey4[n]+25;yy++)
for(var zz=ez4[n]-3;zz<ez4[n]+4;zz++)
setTile(xx, yy, zz, 0);
for(var xx=ex4[n]-1;xx<ex4[n]+2;xx++)
for(var yy=ey4[n]+25;yy<ey4[n]+28;yy++)
for(var zz=ez4[n]-1;zz<ez4[n]+2;zz++)
setTile(xx, yy, zz, 0);
for(var yy=ey4[n]+28;yy<ey4[n]+33;yy++)
setTile(ex4[n], yy, ez4[n], 0);
}
}}
if(titan[0]!=null){
for(var n=0;n<titan.length;n++){
if(tt4a[n]==2240){
for(var xx=ttx[n]-3;xx<ttx[n]+4;xx++)
for(var yy=tty[n]+1;yy<tty[n]+10;yy++)
setTile(xx,yy,ttz[n],0);
for(var yy=tty[n]+2;yy<tty[n]+5;yy++){
setTile(ttx[n]+1, yy, ttz[n], 5, 2);
setTile(ttx[n]-1, yy, ttz[n], 5, 2);
}
setTiles(ttx[n]-1, ttx[n]+1, tty[n]+5, tty[n]+9, ttz[n], ttz[n], 5, 2);
setTile(ttx[n], tty[n]+10, ttz[n], 5, 2);
setTile(ttx[n]+2, tty[n]+8, ttz[n], 5, 2);
setTile(ttx[n]-2, tty[n]+8, ttz[n], 5, 2);
for(var yy=tty[n]+5;yy<tty[n]+9;yy++){
setTile(ttx[n]+3, yy, ttz[n], 5, 2);
setTile(ttx[n]-3, yy, ttz[n], 5, 2);
}
}
if(tt4a[n]==2230){
for(var xx=ttx[n]-3;xx<ttx[n]+4;xx++){
for(var yy=tty[n]+1;yy<tty[n]+14;yy++){
setTile(xx,yy,ttz[n],0);}}
setTile(ttx[n]+1, tty[n]+5, ttz[n], 5, 2);
setTile(ttx[n]+1, tty[n]+3, ttz[n], 5, 2);
setTile(ttx[n]+1, tty[n]+4, ttz[n], 5, 2);
setTile(ttx[n]-1, tty[n]+5, ttz[n], 5, 2);
setTile(ttx[n]-1, tty[n]+3, ttz[n], 5, 2);
setTile(ttx[n]-1, tty[n]+4, ttz[n], 5, 2);
setTiles(ttx[n]-1, ttx[n]+1, tty[n]+6, tty[n]+10, ttz[n], ttz[n], 5, 2);
setTile(ttx[n], tty[n]+11, ttz[n], 5, 2);
setTile(ttx[n]+2, tty[n]+9, ttz[n], 5, 2);
setTile(ttx[n]+3, tty[n]+9, ttz[n], 5, 2);
setTile(ttx[n]+3, tty[n]+8, ttz[n], 5, 2);
setTile(ttx[n]+3, tty[n]+7, ttz[n], 5, 2);
setTile(ttx[n]+3, tty[n]+6, ttz[n], 5, 2);
setTile(ttx[n]-2, tty[n]+9, ttz[n], 5, 2);
setTile(ttx[n]-3, tty[n]+9, ttz[n], 5, 2);
setTile(ttx[n]-3, tty[n]+8, ttz[n], 5, 2);
setTile(ttx[n]-3, tty[n]+7, ttz[n], 5, 2);
setTile(ttx[n]-3, tty[n]+6, ttz[n], 5, 2);
}
if(tt4a[n]==2220){
for(var xx=ttx[n]-3;xx<ttx[n]+4;xx++){
for(var yy=tty[n]+1;yy<tty[n]+14;yy++){
setTile(xx,yy,ttz[n],0);}}
setTile(ttx[n]+1, tty[n]+2, ttz[n], 5, 2);
setTile(ttx[n]+1, tty[n]+3, ttz[n], 5, 2);
setTile(ttx[n]+1, tty[n]+4, ttz[n], 5, 2);
setTile(ttx[n]-1, tty[n]+2, ttz[n], 5, 2);
setTile(ttx[n]-1, tty[n]+3, ttz[n], 5, 2);
setTile(ttx[n]-1, tty[n]+4, ttz[n], 5, 2);
setTiles(ttx[n]-1, ttx[n]+1, tty[n]+5, tty[n]+9, ttz[n], ttz[n], 5, 2);
setTile(ttx[n], tty[n]+10, ttz[n], 5, 2);
setTile(ttx[n]+2, tty[n]+8, ttz[n], 5, 2);
setTile(ttx[n]+3, tty[n]+8, ttz[n], 5, 2);
setTile(ttx[n]+3, tty[n]+7, ttz[n], 5, 2);
setTile(ttx[n]+3, tty[n]+6, ttz[n], 5, 2);
setTile(ttx[n]+3, tty[n]+5, ttz[n], 5, 2);
setTile(ttx[n]-2, tty[n]+8, ttz[n], 5, 2);
setTile(ttx[n]-3, tty[n]+8, ttz[n], 5, 2);
setTile(ttx[n]-3, tty[n]+7, ttz[n], 5, 2);
setTile(ttx[n]-3, tty[n]+6, ttz[n], 5, 2);
setTile(ttx[n]-3, tty[n]+5, ttz[n], 5, 2);
}
if(tt4a[n]==2210){
for(var xx=ttx[n]-3;xx<ttx[n]+4;xx++){
for(var yy=tty[n]+1;yy<tty[n]+14;yy++){
setTile(xx,yy,ttz[n],0);}}
setTile(ttx[n]+1, tty[n]+1, ttz[n], 5, 2);
setTile(ttx[n]+1, tty[n]+2, ttz[n], 5, 2);
setTile(ttx[n]+1, tty[n]+3, ttz[n], 5, 2);
setTile(ttx[n]-1, tty[n]+1, ttz[n], 5, 2);
setTile(ttx[n]-1, tty[n]+2, ttz[n], 5, 2);
setTile(ttx[n]-1, tty[n]+3, ttz[n], 5, 2);
setTiles(ttx[n]-1, ttx[n]+1, tty[n]+4, tty[n]+8, ttz[n], ttz[n], 5, 2);
setTile(ttx[n], tty[n]+9, ttz[n], 5, 2);
setTile(ttx[n]+2, tty[n]+7, ttz[n], 5, 2);
setTile(ttx[n]+3, tty[n]+7, ttz[n], 5, 2);
setTile(ttx[n]+3, tty[n]+6, ttz[n], 5, 2);
setTile(ttx[n]+3, tty[n]+5, ttz[n], 5, 2);
setTile(ttx[n]+3, tty[n]+4, ttz[n], 5, 2);
setTile(ttx[n]-2, tty[n]+7, ttz[n], 5, 2);
setTile(ttx[n]-3, tty[n]+7, ttz[n], 5, 2);
setTile(ttx[n]-3, tty[n]+6, ttz[n], 5, 2);
setTile(ttx[n]-3, tty[n]+5, ttz[n], 5, 2);
setTile(ttx[n]-3, tty[n]+4, ttz[n], 5, 2);
ESP.antiLack(15);
explode(ttx[n]+8, tty[n]+2, ttz[n]+8, 4);
explode(ttx[n]+8, tty[n]+2, ttz[n], 4);
explode(ttx[n]+8, tty[n]+2, ttz[n]-8, 4);
explode(ttx[n], tty[n]+2, ttz[n]+8, 4);
explode(ttx[n], tty[n]+2, ttz[n]-8, 4);
explode(ttx[n]-8, tty[n]+2, ttz[n]+8, 4);
explode(ttx[n]-8, tty[n]+2, ttz[n], 4);
explode(ttx[n]-8, tty[n]+2, ttz[n]-8, 4);
}
if(tt4a[n]==2200){
for(var xx=ttx[n]-3;xx<ttx[n]+4;xx++)
for(var yy=tty[n]+1;yy<tty[n]+14;yy++)
setTile(xx,yy,ttz[n],0);
if(tt4c[n]){
Entity.setHealth(tt4b[n], Entity.getHealth(tt4b[n])-15);
tt4c[n] = false;
}
else{
Entity.setHealth(tt4d[n], Entity.getHealth(tt4d[n])-15);
}
}
if(tt3a[n]==150){
setTile(ttxb[n], ttyb[n]+6, ttzb[n], 0);
}
}}
if(thunder[0]!=null){
for(var n=0;n<thunder.length;n++){
if(th1a[n]==148){
for(var m=3;m<20;m++){
setTile(px+m*sin, th1c[n]+2, pz+m*cos, 0);
explode(px+m*sin, th1c[n]+2, pz+m*cos, 1.5);
}
}
if(th2a[n]==298){
setTile(thxa[n]+5, thya[n]+3, thza[n]+5, 89);
setTile(thxa[n]+5, thya[n]+3, thza[n], 89);
setTile(thxa[n]+5, thya[n]+3, thza[n]-5, 89);
setTile(thxa[n], thya[n]+3, thza[n]+5, 89);
setTile(thxa[n], thya[n]+3, thza[n]-5, 89);
setTile(thxa[n]-5, thya[n]+3, thza[n]+5, 89);
setTile(thxa[n]-5, thya[n]+3, thza[n], 89);
setTile(thxa[n]-5, thya[n]+3, thza[n]-5, 89);
}
if(th2a[n]==296){
setTile(thxa[n]+5, thya[n]+2, thza[n]+5, 89);
setTile(thxa[n]+5, thya[n]+2, thza[n], 89);
setTile(thxa[n]+5, thya[n]+2, thza[n]-5, 89);
setTile(thxa[n], thya[n]+2, thza[n]+5, 89);
setTile(thxa[n], thya[n]+2, thza[n]-5, 89);
setTile(thxa[n]-5, thya[n]+2, thza[n]+5, 89);
setTile(thxa[n]-5, thya[n]+2, thza[n], 89);
setTile(thxa[n]-5, thya[n]+2, thza[n]-5, 89);
}
if(th2a[n]==294){
setTile(thxa[n]+5, thya[n]+1, thza[n]+5, 89);
setTile(thxa[n]+5, thya[n]+1, thza[n], 89);
setTile(thxa[n]+5, thya[n]+1, thza[n]-5, 89);
setTile(thxa[n], thya[n]+1, thza[n]+5, 89);
setTile(thxa[n], thya[n]+1, thza[n]-5, 89);
setTile(thxa[n]-5, thya[n]+1, thza[n]+5, 89);
setTile(thxa[n]-5, thya[n]+1, thza[n], 89);
setTile(thxa[n]-5, thya[n]+1, thza[n]-5, 89);
}
if(th2a[n]==292){
ESP.antiLack(5);
setTile(thxa[n]+5, thya[n]+1, thza[n]+5, 0);
setTile(thxa[n]+5, thya[n]+1, thza[n], 0);
setTile(thxa[n]+5, thya[n]+1, thza[n]-5, 0);
setTile(thxa[n], thya[n]+1, thza[n]+5, 0);
setTile(thxa[n], thya[n]+1, thza[n]-5, 0);
setTile(thxa[n]-5, thya[n]+1, thza[n]+5, 0);
setTile(thxa[n]-5, thya[n]+1, thza[n], 0);
setTile(thxa[n]-5, thya[n]+1, thza[n]-5, 0);
explode(thxa[n]+5, thya[n]+3, thza[n]+5, 2);
explode(thxa[n]+5, thya[n]+3, thza[n], 2);
explode(thxa[n]+5, thya[n]+3, thza[n]-5, 2);
explode(thxa[n], thya[n]+3, thza[n]+5, 2);
explode(thxa[n], thya[n]+3, thza[n]-5, 2);
explode(thxa[n]-5, thya[n]+3, thza[n]+5, 2);
explode(thxa[n]-5, thya[n]+3, thza[n], 2);
explode(thxa[n]-5, thya[n]+3, thza[n]-5, 2);
}
if(th4a[n]==1790){
setTile(thx[n]+1, thy[n]+10, thz[n]+1, 89);
setTile(thx[n]+1, thy[n]+10, thz[n]-1, 89);
setTile(thx[n]-1, thy[n]+10, thz[n]+1, 89);
setTile(thx[n]-1, thy[n]+10, thz[n]-1, 89);
setTile(thx[n]+2, thy[n]+10, thz[n]+2, 89);
setTile(thx[n]+2, thy[n]+10, thz[n]-2, 89);
setTile(thx[n]-2, thy[n]+10, thz[n]+2, 89);
setTile(thx[n]-2, thy[n]+10, thz[n]-2, 89);
}
if(th4a[n]==1785){
setTile(thx[n]+3, thy[n]+10, thz[n]+3, 89);
setTile(thx[n]+3, thy[n]+10, thz[n]-3, 89);
setTile(thx[n]-3, thy[n]+10, thz[n]+3, 89);
setTile(thx[n]-3, thy[n]+10, thz[n]-3, 89);
setTile(thx[n]+4, thy[n]+9, thz[n]+4, 89);
setTile(thx[n]+4, thy[n]+9, thz[n]-4, 89);
setTile(thx[n]-4, thy[n]+9, thz[n]+4, 89);
setTile(thx[n]-4, thy[n]+9, thz[n]-4, 89);
setTile(thx[n]+9, thy[n]+9, thz[n]+8, 89);
setTile(thx[n]+9, thy[n]+9, thz[n]-8, 89);
setTile(thx[n]-9, thy[n]+9, thz[n]+8, 89);
setTile(thx[n]-9, thy[n]+9, thz[n]-8, 89);
setTile(thx[n]+8, thy[n]+9, thz[n]+9, 89);
setTile(thx[n]+8, thy[n]+9, thz[n]-9, 89);
setTile(thx[n]-8, thy[n]+9, thz[n]+9, 89);
setTile(thx[n]-8, thy[n]+9, thz[n]-9, 89);
}
if(th4a[n]==1780){
setTile(thx[n]+5, thy[n]+9, thz[n]+5, 89);
setTile(thx[n]+5, thy[n]+9, thz[n]-5, 89);
setTile(thx[n]-5, thy[n]+9, thz[n]+5, 89);
setTile(thx[n]-5, thy[n]+9, thz[n]-5, 89);
setTile(thx[n]+6, thy[n]+9, thz[n]+6, 89);
setTile(thx[n]+6, thy[n]+9, thz[n]-6, 89);
setTile(thx[n]-6, thy[n]+9, thz[n]+6, 89);
setTile(thx[n]-6, thy[n]+9, thz[n]-6, 89);
for(var zz=thz[n]+5;zz<thz[n]+8;zz++){
setTile(thx[n]+9, thy[n]+9, zz, 89);
setTile(thx[n]-9, thy[n]+9, zz, 89);
}
for(var zz=thz[n]-7;zz<thz[n]-4;zz++){
setTile(thx[n]+9, thy[n]+9, zz, 89);
setTile(thx[n]-9, thy[n]+9, zz, 89);
}
for(var xx=thx[n]+5;xx<thx[n]+8;xx++){
setTile(xx, thy[n]+9, thz[n]+9, 89);
setTile(xx, thy[n]+9, thz[n]-9, 89);
}
for(var xx=thx[n]-7;xx<thx[n]-4;xx++){
setTile(xx, thy[n]+9, thz[n]+9, 89);
setTile(xx, thy[n]+9, thz[n]-9, 89);
}
}
if(th4a[n]==1775){
setTile(thx[n]+7, thy[n]+9, thz[n]+7, 89);
setTile(thx[n]+7, thy[n]+9, thz[n]-7, 89);
setTile(thx[n]-7, thy[n]+9, thz[n]+7, 89);
setTile(thx[n]-7, thy[n]+9, thz[n]-7, 89);
setTile(thx[n]+8, thy[n]+9, thz[n]+8, 89);
setTile(thx[n]+8, thy[n]+9, thz[n]-8, 89);
setTile(thx[n]-8, thy[n]+9, thz[n]+8, 89);
setTile(thx[n]-8, thy[n]+9, thz[n]-8, 89);
for(var zz=thz[n]+2;zz<thz[n]+5;zz++){
setTile(thx[n]+9, thy[n]+9, zz, 89);
setTile(thx[n]-9, thy[n]+9, zz, 89);
}
for(var zz=thz[n]-4;zz<thz[n]-1;zz++){
setTile(thx[n]-9, thy[n]+9, zz, 89);
setTile(thx[n]+9, thy[n]+9, zz, 89);
}
for(var xx=thx[n]+2;xx<thx[n]+5;xx++){
setTile(xx, thy[n]+9, thz[n]+9, 89);
setTile(xx, thy[n]+9, thz[n]-9, 89);
}
for(var xx=thx[n]-4;xx<thx[n]-1;xx++){
setTile(xx, thy[n]+9, thz[n]+9, 89);
setTile(xx, thy[n]+9, thz[n]-9, 89);
}
}
if(th4a[n]==1770){
for(var zz=thz[n]-1;zz<thz[n]+2;zz++){
setTile(thx[n]+10, thy[n]+9, zz, 89);
setTile(thx[n]-10, thy[n]+9, zz, 89);
}
for(var xx=thx[n]-1;xx<thx[n]+2;xx++){
setTile(xx, thy[n]+9, thz[n]+10, 89);
setTile(xx, thy[n]+9, thz[n]-10, 89);
}
setTile(thx[n]+10, thy[n]+9, thz[n], 41);
setTile(thx[n]-10, thy[n]+9, thz[n], 41);
setTile(thx[n], thy[n]+9, thz[n]+10, 41);
setTile(thx[n], thy[n]+9, thz[n]-10, 41);
}
if(th4a[n]==1740){
for(var yy=thy[n]+7;yy<thy[n]+9;yy++){
setTile(thx[n]+9, yy, thz[n]+9, 89);
setTile(thx[n]+10, yy, thz[n], 89);
setTile(thx[n]+9, yy, thz[n]-9, 89);
setTile(thx[n], yy, thz[n]+10, 89);
setTile(thx[n], yy, thz[n]-10, 89);
setTile(thx[n]-9, yy, thz[n]+9, 89);
setTile(thx[n]-10, yy, thz[n], 89);
setTile(thx[n]-9, yy, thz[n]-9, 89);
}
}
if(th4a[n]==1735){
for(var yy=thy[n]+4;yy<thy[n]+7;yy++){
setTile(thx[n]+9, yy, thz[n]+9, 89);
setTile(thx[n]+10, yy, thz[n], 89);
setTile(thx[n]+9, yy, thz[n]-9, 89);
setTile(thx[n], yy, thz[n]+10, 89);
setTile(thx[n], yy, thz[n]-10, 89);
setTile(thx[n]-9, yy, thz[n]+9, 89);
setTile(thx[n]-10, yy, thz[n], 89);
setTile(thx[n]-9, yy, thz[n]-9, 89);
}
}
if(th4a[n]==1730){
for(var yy=thy[n]+1;yy<thy[n]+4;yy++){
setTile(thx[n]+9, yy, thz[n]+9, 89);
setTile(thx[n]+10, yy, thz[n], 89);
setTile(thx[n]+9, yy, thz[n]-9, 89);
setTile(thx[n], yy, thz[n]+10, 89);
setTile(thx[n], yy, thz[n]-10, 89);
setTile(thx[n]-9, yy, thz[n]+9, 89);
setTile(thx[n]-10, yy, thz[n], 89);
setTile(thx[n]-9, yy, thz[n]-9, 89);
}
}
if(th4a[n]==1725){
ESP.antiLack(5);
explode(thx[n]+9, thy[n]+1, thz[n]+9, 4);
explode(thx[n]+10, thy[n]+1, thz[n], 4);
explode(thx[n]+9, thy[n]+1, thz[n]-9, 4);
explode(thx[n], thy[n]+1, thz[n]+10, 4);
explode(thx[n], thy[n]+1, thz[n]-10, 4);
explode(thx[n]-9, thy[n]+1, thz[n]+9, 4);
explode(thx[n]-10, thy[n]+1, thz[n], 4);
explode(thx[n]-9, thy[n]+1, thz[n]-9, 4);
explode(thx[n]+9, thy[n]+3, thz[n]+9, 3);
explode(thx[n]+10, thy[n]+3, thz[n], 3);
explode(thx[n]+9, thy[n]+3, thz[n]-9, 3);
explode(thx[n], thy[n]+3, thz[n]+10, 3);
explode(thx[n], thy[n]+3, thz[n]-10, 3);
explode(thx[n]-9, thy[n]+3, thz[n]+9, 3);
explode(thx[n]-10, thy[n]+3, thz[n], 3);
explode(thx[n]-9, thy[n]+3, thz[n]-9, 3);
for(var xx=thx[n]-14;xx<thx[n]+15;xx++)
for(var zz=thz[n]-14;zz<thz[n]+15;zz++)
if(getTile(xx, thy[n]+2, zz)==89){
setTile(xx, thy[n]+2, zz, 0);
}
for(var xx=thx[n]-10;xx<thx[n]+11;xx++){
for(var yy=thy[n]+5;yy<thy[n]+9;yy++){
for(var zz=thz[n]-10;zz<thz[n]+11;zz++){
if(getTile(xx, yy, zz)==89){
setTile(xx,yy,zz,0);
}
}}}
}
if(th4a[n]==1720){
for(var xx=thx[n]-10;xx<thx[n]+11;xx++){
for(var yy=thy[n]+1;yy<thy[n]+5;yy++){
for(var zz=thz[n]-10;zz<thz[n]+11;zz++){
if(getTile(xx, yy, zz)==89){
setTile(xx,yy,zz,0);
}
}}}
}
if(th4a[n]==1690){
for(var xx=thx[n]-10;xx<thx[n]+11;xx++){
for(var yy=thy[n]+9;yy<thy[n]+12;yy++){
for(var zz=thz[n]-10;zz<thz[n]+11;zz++){
if(getTile(xx, yy, zz)==89){
setTile(xx,yy,zz,0);
}
}}}
}
if(th4a[n]==1675){
setTile(thx[n], thy[n]+10, thz[n], 0);
setTile(thx[n]+9, thy[n]+9, thz[n]+9, 0);
setTile(thx[n]+9, thy[n]+9, thz[n]-9, 0);
setTile(thx[n]-9, thy[n]+9, thz[n]+9, 0);
setTile(thx[n]-9, thy[n]+9, thz[n]-9, 0);
setTile(thx[n]+10, thy[n]+9, thz[n], 0);
setTile(thx[n]-10, thy[n]+9, thz[n], 0);
setTile(thx[n], thy[n]+9, thz[n]+10, 0);
setTile(thx[n], thy[n]+9, thz[n]-10, 0);
}
if(th3a[n]==298){
ESP.antiLack(5);
for(var yy=thyb[n]+2;yy<thyb[n]+7;yy++)
explode(thxb[n], yy, thzb[n], 1.5);
explode(thxb[n], thyb, thzb[n], 3);
}
}}
if(tnt[0]!=null){
for(var n=0;n<tnt.length;n++){
if(tn2a[n]==295){
explode(tnx[n], tny[n]+2.5, tnz[n], 1);
}
if(tn4a[n]==1785){
ESP.antiLack(90);
setTile(tnx2[n], tny2[n], tnz2[n], 2);
explode(tnx2[n]+5, tny2[n]-1, tnz2[n], 1.5);
explode(tnx2[n]-5, tny2[n]-1, tnz2[n], 1.5);
explode(tnx2[n], tny2[n]-1, tnz2[n]+5, 1.5);
explode(tnx2[n], tny2[n]-1, tnz2[n]-5, 1.5);
}
}}
if(trap[0]!=null){
for(var n=0;n<trap.length;n++){
if(tr3a[n]==150){
setTile(trx3[n], try3[n]+1, trz3[n], 0);
}
if(tr4a[n]==1350){
for(var xx=trx4[n]-4;xx<trx4[n]+5;xx++){
for(var zz=trz4[n]-4;zz<trz4[n]+5;zz++){
for(var yy=try4[n]+1;yy<try4[n]+5;yy++)
setTile(xx,yy,zz,0);
setTile(xx,try4[n],zz,2);}}
}
if(tr4a[n]==1770){
explode(trx4[n], try4[n]+2, trz4[n], 2.5);
}
if(tr4a[n]==1710){
explode(trx4[n], try4+1[n], trz4[n], 2.5);
}
if(tr4a[n]==1650){
Level.spawnMob(trx4[n]+2.5, try4[n]+2, trz4[n]+2.5, 65);
Level.spawnMob(trx4[n]+2.5, try4[n]+2, trz4[n]-2.5, 65);
Level.spawnMob(trx4[n]-2.5, try4[n]+2, trz4[n]+2.5, 65);
Level.spawnMob(trx4[n]-2.5, try4[n]+2, trz4[n]-2.5, 65);
}
}}
if(bind[0]!=null){
for(var n=0;n<bind.length;n++){
if(bb4a[n]==1500){
bb4c[n] = false;
}
if(bb4c[n]){
bbx[n] = Entity.getX(bb4b[n]);
if(ESP.isPlayer(bb4b[n])) bby[n] = Entity.getY(bb4b[n])-1;
else bby[n] = Entity.getY(bb4b[n]);
bbz[n] = Entity.getZ(bb4b[n]);
setTile(bbx[n], bby[n], bbz[n], 30);
}
}}
if(meca[0]!=null){
for(var n=0;n<meca.length;n++){
if(mm1a[n]==140){
for(var mm=5.5;mm<20;mm++)
explode(px+mm*sin, mmy1[n]+2, pz+mm*cos, 1.7);
}
if(mm1a[n]==100){
for(var xx=mmx1[n]-7;xx<mmx1[n]+8;xx++)
for(var yy=mmy1[n];yy<mmy1[n]+4;yy++)
for(var zz=mmz1[n]-7;zz<mmz1[n]+8;zz++)
if(getTile(xx, yy, zz)==247){
setTile(xx, yy, zz, 0);
}
setTile(xx, mmy1[n], zz, 2);
}
if(mm3a[n]==285){
setTile(mmx2[n], mmy2[n]+2, mmz2[n], 89);
}
if(mm3a[n]==280){
setTile(mmx2[n], mmy2[n]+2, mmz2[n], 0);
setTile(mmx[n], mmy[n]+9, mmz[n], 89);
}
if(mm3a[n]==275){
Level.spawnMob(mmx[n]+0.5, mmy[n]+9.4, mmz[n]+0.5, 65);
setTile(mmx[n], mmy[n]+9, mmz[n], 0);
}
if(mm3a[n]==200){
setTile(mmx2[n], mmy2[n]+1, mmz2[n], 0);
setTile(mmx2[n]+1, mmy2[n]+1, mmz2[n], 0);
setTile(mmx2[n]-1, mmy2[n]+1, mmz2[n], 0);
setTile(mmx2[n], mmy2[n]+1, mmz2[n]+1, 0);
setTile(mmx2[n], mmy2[n]+1, mmz2[n]-1, 0);
setTile(mmx[n]+1, mmy[n]+9, mmz[n], 0);
setTile(mmx[n]-1, mmy[n]+9, mmz[n], 0);
setTile(mmx[n], mmy[n]+9, mmz[n]+1, 0);
setTile(mmx[n], mmy[n]+9, mmz[n]-1, 0);
}
if(mm2a[n]==285){
ESP.antiLack(5);
setTile(mmx2a[n]+7, mmy2a[n], mmz2a[n], 0);
setTile(mmx2a[n], mmy2a[n], mmz2a[n]-7, 0);
setTile(mmx2a[n], mmy2a[n], mmz2a[n]+7, 0);
setTile(mmx2a[n]-7, mmy2a[n], mmz2a[n], 0);
explode(mmx2a[n]+7, mmy2a[n]+2, mmz2a[n], 3);
explode(mmx2a[n], mmy2a[n]+2, mmz2a[n]-7, 3);
explode(mmx2a[n], mmy2a[n]+2, mmz2a[n]+7, 3);
explode(mmx2a[n]-7, mmy2a[n]+2, mmz2a[n], 3);
for(var xx=mmx2a[n]-6;xx<mmx2a[n]+7;xx++)
setTile(xx, mmy2a[n], mmz2a[n], 247);
for(var zz=mmz2a[n]-6;zz<mmz2a[n]+7;zz++)
setTile(mmx2a[n], mmy2a[n], zz, 247);
}
if(mm4a[n]==1795){
for(var xx=mmx4[n]-3;xx<mmx4[n]+4;xx++)
setTile(xx, mmy4[n], mmz4[n], 247);
for(var zz=mmz4[n]-3;zz<mmz4[n]+4;zz++)
setTile(mmx4[n], mmy4[n], zz, 247);
}
if(mm4a[n]==1790){
for(var yy=mmy4[n];yy<mmy4[n]+3;yy++){
setTile(mmx4[n]+3, yy, mmz4[n], 247);
setTile(mmx4[n]-3, yy, mmz4[n], 247);
setTile(mmx4[n], yy, mmz4[n]+3, 247);
setTile(mmx4[n], yy, mmz4[n]-3, 247);
}
}
if(mm4a[n]==1785){
for(var yy=mmy4[n]+3;yy<mmy4[n]+5;yy++){
setTile(mmx4[n]+3, yy, mmz4[n], 247);
setTile(mmx4[n]-3, yy, mmz4[n], 247);
setTile(mmx4[n], yy, mmz4[n]+3, 247);
setTile(mmx4[n], yy, mmz4[n]-3, 247);
}
}
if(mm4a[n]==1780){
setTile(mmx4[n]+4, mmy4[n]+4, mmz4[n], 247);
setTile(mmx4[n]+5, mmy4[n]+4, mmz4[n], 247);
setTile(mmx4[n]-4, mmy4[n]+4, mmz4[n], 247);
setTile(mmx4[n]-5, mmy4[n]+4, mmz4[n], 247);
setTile(mmx4[n], mmy4[n]+4, mmz4[n]+4, 247);
setTile(mmx4[n], mmy4[n]+4, mmz4[n]+5, 247);
setTile(mmx4[n], mmy4[n]+4, mmz4[n]-4, 247);
setTile(mmx4[n], mmy4[n]+4, mmz4[n]-5, 247);
}
if(mm4a[n]==1775){
for(var xx=mmx4[n]-6;xx<mmx4[n]+7;xx++)
for(var zz=mmz4[n]-6;zz<mmz4[n]+7;zz++)
setTile(xx, mmy4[n]+5, zz, 247);
for(var xx=mmx4[n]-5;xx<mmx4[n]+6;xx++)
for(var zz=mmz4[n]-5;zz<mmz4[n]+6;zz++)
setTile(xx, mmy4[n]+5, zz, 0);
}
if(mm4a[n]==1770){
setTile(mmx4[n]+7, mmy4[n]+5, mmz4[n], 247);
setTile(mmx4[n]-7, mmy4[n]+5, mmz4[n], 247);
setTile(mmx4[n], mmy4[n]+5, mmz4[n]+7, 247);
setTile(mmx4[n], mmy4[n]+5, mmz4[n]-7, 247);
setTile(mmx4[n]+7, mmy4[n]+5, mmz4[n]+7, 247);
setTile(mmx4[n]-7, mmy4[n]+5, mmz4[n]-7, 247);
setTile(mmx4[n]-7, mmy4[n]+5, mmz4[n]+7, 247);
setTile(mmx4[n]+7, mmy4[n]+5, mmz4[n]-7, 247);
}
if(mm4a[n]==1765){
ESP.antiLack(5);
for(var yy=mmy4[n];yy<mmy4[n]+4;yy++){
explode(mmx4[n]+7, yy, mmz4[n], 2);
explode(mmx4[n]-7, yy, mmz4[n], 2);
explode(mmx4[n], yy, mmz4[n]+7, 2);
explode(mmx4[n], yy, mmz4[n]-7, 2);
explode(mmx4[n]+7, yy, mmz4[n]+7, 2);
explode(mmx4[n]-7, yy, mmz4[n]-7, 2);
explode(mmx4[n]-7, yy, mmz4[n]+7, 2);
explode(mmx4[n]+7, yy, mmz4[n]-7, 2);
setTile(mmx4[n]+7, mmy4[n]+5, mmz4[n], 247);
setTile(mmx4[n]-7, mmy4[n]+5, mmz4[n], 247);
setTile(mmx4[n], mmy4[n]+5, mmz4[n]+7, 247);
setTile(mmx4[n], mmy4[n]+5, mmz4[n]-7, 247);
setTile(mmx4[n]+7, mmy4[n]+5, mmz4[n]+7, 247);
setTile(mmx4[n]-7, mmy4[n]+5, mmz4[n]-7, 247);
setTile(mmx4[n]-7, mmy4[n]+5, mmz4[n]+7, 247);
setTile(mmx4[n]+7, mmy4[n]+5, mmz4[n]-7, 247);
for(var xx=mmx4[n]-6;xx<mmx4[n]+7;xx++)
for(var zz=mmz4[n]-6;zz<mmz4[n]+7;zz++)
setTile(xx, mmy4[n]+5, zz, 247);
for(var xx=mmx4[n]-5;xx<mmx4[n]+6;xx++)
for(var zz=mmz4[n]-5;zz<mmz4[n]+6;zz++)
setTile(xx, mmy4[n]+5, zz, 0);
}
}
if(mm4a[n]==1700){
for(var xx=mmx4[n]-7;xx<mmx4[n]+8;xx++)
for(var yy=mmy4[n];yy<mmy4[n]+7;yy++)
for(var zz=mmz4[n]-7;zz<mmz4[n]+8;zz++)
if(getTile(xx, yy, zz)==247){
setTile(xx, yy, zz, 0);
}
if(auto){
for(var xx=mmx4[n]-3;xx<mmx4[n]+4;xx++)
for(var zz=mmz4[n]-3;zz<mmz4[n]+4;zz++)
setTile(xx, mmy4[n], zz, 2);
}
else if(auto==false){
setTile(mmx4[n], mmy4[n], mmz4[n], 2);
}
}
}}
if(heal[0]!=null){
for(var n=0;n<heal.length;n++){
if(h4a[n]>1350){
Entity.setHealth(heal[n], h4b[n]);
}
if(h4a[n]==1350){
var cache = Player.getName(heal[n]);
Entity.setNameTag(heal[n], cache.substring(2, cache.length));
}
}}
if(nether[0]!=null){
for(var n=0;n<nether.length;n++){
if(n2a[n]==125){
setTile(n2x[n], n2y[n]+1, n2z[n], 0);
}
if(n4a[n]==900){
if(auto){
for(var xx=nx[n]-12;xx<nx[n]+13;xx++){
for(var zz=nz[n]-12;zz<nz[n]+13;zz++){
setTile(xx, ny[n], zz, 2);
for(var yy=ny[n]+1;yy<ny[n]+8;yy++){
setTile(xx, yy, zz, 0);}}}
}
}
}}
if(cloud[0]!=null){
for(var n=0;n<cloud.length;n++){
if(cc1a[n]==75){
for(var xx=ccx1[n]-1;xx<ccx1[n]+2;xx++)
for(var yy=ccy1[n]+1;yy<ccy1[n]+4;yy++)
for(var zz=ccz1[n]-1;zz<ccz1[n]+2;zz++)
if(getTile(xx, yy, zz)==35){
setTile(xx,yy,zz,0);
}
}
if(cc2a[n]==295){
ESP.antiLack(5);
explode(ccx2[n], ccy2[n]+1, ccz2[n], 3);
explode(ccx2[n], ccy2[n]+2, ccz2[n], 3);
}
if(cc2a[n]==280){
for(var xx=ccx[n]-1;xx<ccx[n]+2;xx++)
for(var yy=ccy[n]+5;yy<ccy[n]+7;yy++)
for(var zz=ccz[n]-1;zz<ccz[n]+2;zz++)
setTile(xx,yy,zz,0);
for(var yy=ccy[n]+1;yy<ccy[n]+5;yy++)
setTile(ccx[n], yy, ccz[n], 0);
}
if(cc4a[n]==1650){
ESP.antiLack(5);
explode(ccx[n]+8, ccy[n]+2, ccz[n]+8, 1);
explode(ccx[n]+8, ccy[n]+2, ccz[n], 1);
explode(ccx[n]+8, ccy[n]+2, ccz[n]-8, 1);
explode(ccx[n], ccy[n]+2, ccz[n]+8, 1);
explode(ccx[n], ccy[n]+2, ccz[n]-8, 1);
explode(ccx[n]-8, ccy[n]+2, ccz[n]+8, 1);
explode(ccx[n]-8, ccy[n]+2, ccz[n], 1);
explode(ccx[n]-8, ccy[n]+2, ccz[n]-8, 1);
explode(ccx[n]+8, ccy[n]+2, ccz[n]+8, 4);
explode(ccx[n]+8, ccy[n]+2, ccz[n], 4);
explode(ccx[n]+8, ccy[n]+2, ccz[n]-8, 4);
explode(ccx[n], ccy[n]+2, ccz[n]+8, 4);
explode(ccx[n], ccy[n]+2, ccz[n]-8, 4);
explode(ccx[n]-8, ccy[n]+2, ccz[n]+8, 4);
explode(ccx[n]-8, ccy[n]+2, ccz[n], 4);
explode(ccx[n]-8, ccy[n]+2, ccz[n]-8, 4);
}
if(cc4a[n]==1635){
ESP.antiLack(5);
explode(ccx[n], ccy[n]+2, ccz[n], 5);
}
if(cc4a[n]==1605){
for(var xx=ccx[n]-12;xx<ccx[n]+13;xx++){
for(var yy=ccy[n]+1;yy<ccy[n]+4;yy++)
for(var zz=ccz[n]-12;zz<ccz[n]+13;zz++){
setTile(xx, yy, zz, 0);
if(auto){
setTile(xx, ccy[n], zz, 2);
}
}}
if(auto){
for(var xx=ccx[n]-1;xx<ccx[n]+2;xx++)
for(var zz=ccz[n]-1;zz<ccz[n]+2;zz++)
setTile(xx, ccy[n]-1, zz, 3);
}
}
if(auto){
if(cc2a[n]==1) autoRecover(ccx2[n], ccy2[n], ccz2[n], 7, 2);
if(cc2a[n]==61) autoRecover(ccx2[n], ccy2[n]-1, ccz2[n], 7, 3);
if(cc2a[n]==61) autoRecover(ccx2[n], ccy2[n]-2, ccz2[n], 7, 3);
if(cc2a[n]==91) autoRecover(ccx2[n], ccy2[n]-3, ccz2[n], 7, 3);
if(cc2a[n]==121) autoRecover(ccx2[n], ccy2[n]-4, ccz2[n], 7, 3);
}
}}
if(arrow[0]!=null){
for(var n=0;n<arrow.length;n++){
if(ar1a[n]==135){
setTile(ar1x[n], ar1y[n]+1, ar1z[n], 51);
setTile(ar1x[n]+1, ar1y[n]+1, ar1z[n], 51);
setTile(ar1x[n]-1, ar1y[n]+1, ar1z[n], 51);
setTile(ar1x[n], ar1y[n]+1, ar1z[n]+1, 51);
setTile(ar1x[n], ar1y[n]+1, ar1z[n]-1, 51);
}
if(ar2a[n]==285){
ESP.antiLack(5);
explode(arx2[n], ary2[n]+1, arz2[n], 3);
}
if(ar4a[n]==1760){
ESP.antiLack(5);
setTile(arx[n]+6, ary[n]+1, arz[n]+6, 0);
setTile(arx[n]+6, ary[n]+1, arz[n], 0);
setTile(arx[n]+6, ary[n]+1, arz[n]-6, 0);
setTile(arx[n], ary[n]+1, arz[n]+6, 0);
setTile(arx[n], ary[n]+1, arz[n]-6, 0);
setTile(arx[n]-6, ary[n]+1, arz[n]+6, 0);
setTile(arx[n]-6, ary[n]+1, arz[n], 0);
setTile(arx[n]-6, ary[n]+1, arz[n]-6, 0);
explode(arx[n]+6, ary[n]+2, arz[n]+6, 3.5);
explode(arx[n]+6, ary[n]+2, arz[n], 3.5);
explode(arx[n]+6, ary[n]+2, arz[n]-6, 3.5);
explode(arx[n], ary[n]+2, arz[n]+6, 3.5);
explode(arx[n], ary[n]+2, arz[n]-6, 3.5);
explode(arx[n]-6, ary[n]+2, arz[n]+6, 3.5);
explode(arx[n]-6, ary[n]+2, arz[n], 3.5);
explode(arx[n]-6, ary[n]+2, arz[n]-6, 3.5);
}
if(ar4a[n]==1755){
autoRecover(arx[n], ary[n]+1, arz[n], 10, 0);
}
if(ar4a[n]==1650){
autoRecover(arx[n], ary[n]+4, arz[n], 1, 0);
}
}}
if(mage[0]!=null){
for(var n=0;n<mage.length;n++){
if(ma2a[n]==150){
setTile(max2[n]+2, may2[n]+1, maz2[n]+2, 0);
setTile(max2[n]+2, may2[n]+1, maz2[n]-2, 0);
setTile(max2[n]-2, may2[n]+1, maz2[n]+2, 0);
setTile(max2[n]-2, may2[n]+1, maz2[n]-2, 0);
}
if(ma4a[n]==1795){
explode(max[n]+6, may[n], maz[n], 3);
}
if(ma4a[n]==1790){
explode(max[n]+5, may[n], maz[n]-5, 3);
}
if(ma4a[n]==1785){
explode(max[n], may[n], maz[n]-6, 3);
}
if(ma4a[n]==1780){
explode(max[n]-5, may[n], maz[n]-5, 3);
}
if(ma4a[n]==1775){
explode(max[n]-6, may[n], maz[n], 3);
}
if(ma4a[n]==1770){
explode(max[n]-5, may[n], maz[n]+5, 3);
}
if(ma4a[n]==1765){
explode(max[n], may[n], maz[n]+6, 3);
}
if(ma4a[n]==1750){
ESP.antiLack(5);
explode(max[n]+6, may[n]+1, maz[n]+6, 3.5);
explode(max[n]+7, may[n]+1, maz[n], 3.5);
explode(max[n]+6, may[n]+1, maz[n]-6, 3.5);
explode(max[n], may[n]+1, maz[n]+7, 3.5);
explode(max[n], may[n]+1, maz[n]-7, 3.5);
explode(max[n]-6, may[n]+1, maz[n]+6, 3.5);
explode(max[n]-7, may[n]+1, maz[n], 3.5);
explode(max[n]-6, may[n]+1, maz[n]-6, 3.5);
}
}}
if(defense[0]!=null){
for(var n=0;n<defense.length;n++){
if(de3a[n]==1){
de3b[n] = false;
}
if(de4a[n]==1785){
ESP.antiLack(5);
explode(dex[n]+5, dey[n]+1, dez[n]+5, 3);
explode(dex[n]+5, dey[n]+1, dez[n], 3);
explode(dex[n]+5, dey[n]+1, dez[n]-5, 3);
explode(dex[n], dey[n]+1, dez[n]+5, 3);
explode(dex[n], dey[n]+1, dez[n]-5, 3);
explode(dex[n]-5, dey[n]+1, dez[n]+5, 3);
explode(dex[n]-5, dey[n]+1, dez[n], 3);
explode(dex[n]-5, dey[n]+1, dez[n]-5, 3);
}
if(de4a[n]==1350&&de4b[n]){
for(var xx=dex[n]-2;xx<dex[n]+3;xx++){
for(var zz=dez[n]-2;zz<dez[n]+3;zz++){
for(var yy=dey[n]+1;yy<dey[n]+4;yy++)
setTile(xx, yy, zz, 0);
setTile(xx, dey[n], zz, 2);}}
de4b[n] = false;
}
if(auto){
if(de3a[n]==1) autoRecover(dex3[n], dey3[n], dez3[n], 5, 2);
if(de3a[n]==31) autoRecover(dex3[n], dey3[n]-1, dez3[n], 5, 3);
if(de3a[n]==61) autoRecover(dex3[n], dey3[n]-2, dez3[n], 5, 3);
if(de3a[n]==91) autoRecover(dex3[n], dey3[n]-3, dez3[n], 5, 3);
if(de4a[n]==900) autoRecover(dex[n], dey[n], dez[n], 11, 2);
if(de4a[n]==930) autoRecover(dex[n], dey[n]-1, dez[n], 11, 3);
if(de4a[n]==960) autoRecover(dex[n], dey[n]-2, dez[n], 11, 3);
if(de4a[n]==990) autoRecover(dex[n], dey[n]-3, dez[n], 11, 3);
if(de4a[n]==1020) autoRecover(dex[n], dey[n]-4, dez[n], 11, 3);
}
}}
if(poison[0]!=null){
for(var n=0;n<poison.length;n++){
if(p1a[n]==255){
Entity.setHealth(p1b[n], Entity.getHealth(v)-2);
}
if(p2a[n]==270){
ESP.antiLack(5);
explode(p2xa[n], p2ya[n]+2, p2za[n], 3);
}
if(p3a[n]==285){
Entity.setHealth(p3b[n], Entity.getHealth(p3b[n])-2);
}
if(p3a[n]==270){
Entity.setHealth(p3b[n], Entity.getHealth(p3b[n])-2);
}
if(p3a[n]==255){
Entity.setHealth(p3b[n], Entity.getHealth(p3b[n])-2);
}
if(p3a[n]==240){
Entity.setHealth(p3b[n], Entity.getHealth(p3b[n])-2);
}
if(p4a[n]==1770){
ESP.antiLack(5);
explode(p4x[n]+5, p4y[n]+2, p4z[n]+5, 3);
explode(p4x[n]+5, p4y[n]+2, p4z[n], 3);
explode(p4x[n]+5, p4y[n]+2, p4z[n]-5, 3);
explode(p4x[n], p4y[n]+2, p4z[n]+5, 3);
explode(p4x[n], p4y[n]+2, p4z[n]-5, 3);
explode(p4x[n]-5, p4y[n]+2, p4z[n]+5, 3);
explode(p4x[n]-5, p4y[n]+2, p4z[n], 3);
explode(p4x[n]-5, p4y[n]+2, p4z[n]-5, 3);
if(auto){
for(var xx=p4x[n]-9;xx<p4x[n]+10;xx++){
for(var zz=p4z[n]-9;zz<p4z[n]+10;zz++){
setTile(xx, p4y[n]-1, zz, 3);
setTile(xx, p4y[n], zz, 2);}}
}
}
if(p4a[n]==1760){
ESP.antiLack(5);
explode(p4x[n]+5, p4y[n]+3, p4z[n]+5, 3);
explode(p4x[n]+5, p4y[n]+3, p4z[n], 3);
explode(p4x[n]+5, p4y[n]+3, p4z[n]-5, 3);
explode(p4x[n], p4y[n]+3, p4z[n]+5, 3);
explode(p4x[n], p4y[n]+3, p4z[n]-5, 3);
explode(p4x[n]-5, p4y[n]+3, p4z[n]+5, 3);
explode(p4x[n]-5, p4y[n]+3, p4z[n], 3);
explode(p4x[n]-5, p4y[n]+3, p4z[n]-5, 3);
if(auto){
for(var xx=p4x[n]-9;xx<p4x[n]+10;xx++){
for(var zz=p4z[n]-9;zz<p4z[n]+10;zz++){
setTile(xx, p4y[n]-1, zz, 3);
setTile(xx, p4y[n], zz, 2);}}
}
}
if(p4a[n]==1730){
for(var xx=p4x[n]-9;xx<p4x[n]+10;xx++)
for(var yy=p4y[n]+1;yy<p4y[n]+4;yy++)
for(var zz=p4z[n]-9;zz<p4z[n]+10;zz++)
setTile(xx, yy, zz, 0);
}
}}
if(melt[0]!=null){
for(var n=0;n<melt.length;n++){
if(me1a[n]==75){
for(var xx=me1x[n]-1;xx<me1x[n]+2;xx++)
for(var zz=me1z[n]-1;zz<me1z[n]+2;zz++)
if(getTile(xx, me1y[n]+1, zz)==11){
setTile(xx, me1y[n]+1, zz, 0);
}
}
if(me2a[n]==150){
if(mexa[n]>meza[n]){
setTile(me2x[n], me2y[n]+1, me2z[n]+1, 0);
setTile(me2x[n], me2y[n]+1, me2z[n]-1, 0);
setTile(me2x[n], me2y[n]+3, me2z[n]+1, 0);
setTile(me2x[n], me2y[n]+3, me2z[n]-1, 0);
}
else if(mexa[n]<meza[n]){
setTile(me2x[n]+1, me2y[n]+1, me2z[n], 0);
setTile(me2x[n]-1, me2y[n]+1, me2z[n], 0);
setTile(me2x[n]+1, me2y[n]+3, me2z[n], 0);
setTile(me2x[n]-1, me2y[n]+3, me2z[n], 0);
}
setTile(me2x[n], me2y[n]+2, me2z[n], 0);
}
if(me4a[n]==1350){
for(var xx=mex[n]-5;xx<mex[n]+6;xx++){
for(var zz=mez[n]-5;zz<mez[n]+6;zz++){
for(var yy=mey[n]+1;yy<mey[n]+5;yy++)
if(getTile(xx, yy, zz)!=0){
setTile(xx, yy, zz, 0);
}
setTile(xx, mey[n], zz, 2);
}}
}
}}
if(hfreeze[0]!=null){
for(var n=0;n<hfreeze.length;n++){
if(hf1a[n]==145){
ESP.antiLack(5);
setTile(hf1x[n], hf1y[n]+1, hf1z[n], 0);
setTile(hf1x[n], hf1y[n]+2, hf1z[n], 0);
explode(hf1x[n], hf1y[n]+1, hf1z[n], 2.5);
}
if(hf2a[n]==1){
for(var xx=hf2x[n]-1;xx<hf2x[n]+2;xx++){
for(var zz=hf2z[n]-1;zz<hf2z[n]+2;zz++){
setTile(xx, hf2y[n]+2, hf2z[n]+2, 0);
setTile(xx, hf2y[n]+2, hf2z[n]-2, 0);
setTile(hf2x[n]+2, hf2y[n]+2, zz, 0);
setTile(hf2x[n]-2, hf2y[n]+2, zz, 0);
setTile(xx, hf2y[n], zz, 2);
}}
}
if(hf3a[n]==150){
hf3b[n] = false;
hf3c[n] = -1;
}
if(hf3c[n]>0){
hf3c[n]--;
}
if(hf3b[n]){
hf3x[n] = Entity.getX(hfreeze[n]);
hf3y[n] = Entity.getY(hfreeze[n])-2;
hf3z[n] = Entity.getZ(hfreeze[n]);
for(var xx=hf3x[n]-1;xx<hf3x[n]+2;xx++)
for(var zz=hf3z[n]-1;zz<hf3z[n]+2;zz++)
if(getTile(xx, hf3y[n], zz)!=7){
setTile(xx, hf3y[n], zz, 79);
}
}
if(hf3c[n]==-1){
hf3x[n] = Entity.getX(hfreeze[n]);
hf3y[n] = Entity.getY(hfreeze[n])-5;
hf3z[n] = Entity.getZ(hfreeze[n]);
if(getTile(hf3x[n], hf3y[n], hf3z[n])!=0){
for(var xx=hf3x[n]-1;xx<hf3x[n]+2;xx++)
for(var zz=hf3z[n]-1;zz<hf3z[n]+2;zz++)
if(getTile(xx, hf3y[n]+2, zz)==0){
setTile(xx, hf3y[n]+2, zz, 30);
}
hf3c[n] = 16;
}
}
if(hf3c[n]==1){
for(var xx=hf3x[n]-1;xx<hf3x[n]+2;xx++)
for(var zz=hf3z[n]-1;zz<hf3z[n]+2;zz++)
if(getTile(xx, hf3y[n]+2, zz)==30){
setTile(xx, hf3y[n]+2, zz, 0);
}
}
if(hf4a[n]==1795){
for(var yy=hfy[n]+9;yy<hfy[n]+11;yy++){
setTile(hfx[n]+5, yy, hfz[n]+5, 0);
setTile(hfx[n]+7, yy, hfz[n], 0);
setTile(hfx[n]+5, yy, hfz[n]-5, 0);
setTile(hfx[n], yy, hfz[n]+7, 0);
setTile(hfx[n], yy, hfz[n]-7, 0);
setTile(hfx[n]-5, yy, hfz[n]+5, 0);
setTile(hfx[n]-7, yy, hfz[n], 0);
setTile(hfx[n]-5, yy, hfz[n]-5, 0);
}
for(var yy=hfy[n]+7;yy<hfy[n]+9;yy++){
setTile(hfx[n]+5, yy, hfz[n]+5, 79);
setTile(hfx[n]+7, yy, hfz[n], 79);
setTile(hfx[n]+5, yy, hfz[n]-5, 79);
setTile(hfx[n], yy, hfz[n]+7, 79);
setTile(hfx[n], yy, hfz[n]-7, 79);
setTile(hfx[n]-5, yy, hfz[n]+5, 79);
setTile(hfx[n]-7, yy, hfz[n], 79);
setTile(hfx[n]-5, yy, hfz[n]-5, 79);
}
}
if(hf4a[n]==1790){
for(var yy=hfy[n]+9;yy<hfy[n]+11;yy++){
setTile(hfx[n]+5, yy, hfz[n]+5, 0);
setTile(hfx[n]+7, yy, hfz[n], 0);
setTile(hfx[n]+5, yy, hfz[n]-5, 0);
setTile(hfx[n], yy, hfz[n]+7, 0);
setTile(hfx[n], yy, hfz[n]-7, 0);
setTile(hfx[n]-5, yy, hfz[n]+5, 0);
setTile(hfx[n]-7, yy, hfz[n], 0);
setTile(hfx[n]-5, yy, hfz[n]-5, 0);
}
for(var yy=hfy[n]+7;yy<hfy[n]+9;yy++){
setTile(hfx[n]+5, yy, hfz[n]+5, 79);
setTile(hfx[n]+7, yy, hfz[n], 79);
setTile(hfx[n]+5, yy, hfz[n]-5, 79);
setTile(hfx[n], yy, hfz[n]+7, 79);
setTile(hfx[n], yy, hfz[n]-7, 79);
setTile(hfx[n]-5, yy, hfz[n]+5, 79);
setTile(hfx[n]-7, yy, hfz[n], 79);
setTile(hfx[n]-5, yy, hfz[n]-5, 79);
}
}
if(hf4a[n]==1785){
for(var yy=hfy[n]+7;yy<hfy[n]+9;yy++){
setTile(hfx[n]+5, yy, hfz[n]+5, 0);
setTile(hfx[n]+7, yy, hfz[n], 0);
setTile(hfx[n]+5, yy, hfz[n]-5, 0);
setTile(hfx[n], yy, hfz[n]+7, 0);
setTile(hfx[n], yy, hfz[n]-7, 0);
setTile(hfx[n]-5, yy, hfz[n]+5, 0);
setTile(hfx[n]-7, yy, hfz[n], 0);
setTile(hfx[n]-5, yy, hfz[n]-5, 0);
}
for(var yy=hfy[n]+5;yy<hfy[n]+7;yy++){
setTile(hfx[n]+5, yy, hfz[n]+5, 79);
setTile(hfx[n]+7, yy, hfz[n], 79);
setTile(hfx[n]+5, yy, hfz[n]-5, 79);
setTile(hfx[n], yy, hfz[n]+7, 79);
setTile(hfx[n], yy, hfz[n]-7, 79);
setTile(hfx[n]-5, yy, hfz[n]+5, 79);
setTile(hfx[n]-7, yy, hfz[n], 79);
setTile(hfx[n]-5, yy, hfz[n]-5, 79);
}
}
if(hf4a[n]==1780){
for(var yy=hfy[n]+5;yy<hfy[n]+7;yy++){
setTile(hfx[n]+5, yy, hfz[n]+5, 0);
setTile(hfx[n]+7, yy, hfz[n], 0);
setTile(hfx[n]+5, yy, hfz[n]-5, 0);
setTile(hfx[n], yy, hfz[n]+7, 0);
setTile(hfx[n], yy, hfz[n]-7, 0);
setTile(hfx[n]-5, yy, hfz[n]+5, 0);
setTile(hfx[n]-7, yy, hfz[n], 0);
setTile(hfx[n]-5, yy, hfz[n]-5, 0);
}
for(var yy=hfy[n]+3;yy<hfy[n]+5;yy++){
setTile(hfx[n]+5, yy, hfz[n]+5, 79);
setTile(hfx[n]+7, yy, hfz[n], 79);
setTile(hfx[n]+5, yy, hfz[n]-5, 79);
setTile(hfx[n], yy, hfz[n]+7, 79);
setTile(hfx[n], yy, hfz[n]-7, 79);
setTile(hfx[n]-5, yy, hfz[n]+5, 79);
setTile(hfx[n]-7, yy, hfz[n], 79);
setTile(hfx[n]-5, yy, hfz[n]-5, 79);
}
}
if(hf4a[n]==1775){
for(var yy=hfy[n]+3;yy<hfy[n]+5;yy++){
setTile(hfx[n]+5, yy, hfz[n]+5, 0);
setTile(hfx[n]+7, yy, hfz[n], 0);
setTile(hfx[n]+5, yy, hfz[n]-5, 0);
setTile(hfx[n], yy, hfz[n]+7, 0);
setTile(hfx[n], yy, hfz[n]-7, 0);
setTile(hfx[n]-5, yy, hfz[n]+5, 0);
setTile(hfx[n]-7, yy, hfz[n], 0);
setTile(hfx[n]-5, yy, hfz[n]-5, 0);
}
for(var yy=hfy[n]+1;yy<hfy[n]+3;yy++){
setTile(hfx[n]+5, yy, hfz[n]+5, 79);
setTile(hfx[n]+7, yy, hfz[n], 79);
setTile(hfx[n]+5, yy, hfz[n]-5, 79);
setTile(hfx[n], yy, hfz[n]+7, 79);
setTile(hfx[n], yy, hfz[n]-7, 79);
setTile(hfx[n]-5, yy, hfz[n]+5, 79);
setTile(hfx[n]-7, yy, hfz[n], 79);
setTile(hfx[n]-5, yy, hfz[n]-5, 79);
}
}
if(hf4a[n]==1770){
for(var yy=hfy[n]+1;yy<hfy[n]+3;yy++){
setTile(hfx[n]+5, yy, hfz[n]+5, 0);
setTile(hfx[n]+7, yy, hfz[n], 0);
setTile(hfx[n]+5, yy, hfz[n]-5, 0);
setTile(hfx[n], yy, hfz[n]+7, 0);
setTile(hfx[n], yy, hfz[n]-7, 0);
setTile(hfx[n]-5, yy, hfz[n]+5, 0);
setTile(hfx[n]-7, yy, hfz[n], 0);
setTile(hfx[n]-5, yy, hfz[n]-5, 0);
}
ESP.antiLack(5);
explode(hfx[n]+5, hfy[n]+1, hfz[n]+5, 3);
explode(hfx[n]+7, hfy[n]+1, hfz[n], 3);
explode(hfx[n]+5, hfy[n]+1, hfz[n]-5, 3);
explode(hfx[n], hfy[n]+1, hfz[n]+7, 3);
explode(hfx[n], hfy[n]+1, hfz[n]-7, 3);
explode(hfx[n]-5, hfy[n]+1, hfz[n]+5, 3);
explode(hfx[n]-7, hfy[n]+1, hfz[n], 3);
explode(hfx[n]-5, hfy[n]+1, hfz[n]-5, 3);
explode(hfx[n]+5, hfy[n]+2, hfz[n]+5, 2);
explode(hfx[n]+7, hfy[n]+2, hfz[n], 2);
explode(hfx[n]+5, hfy[n]+2, hfz[n]-5, 2);
explode(hfx[n], hfy[n]+2, hfz[n]+7, 2);
explode(hfx[n], hfy[n]+2, hfz[n]-7, 2);
explode(hfx[n]-5, hfy[n]+2, hfz[n]+5, 2);
explode(hfx[n]-7, hfy[n]+2, hfz[n], 2);
explode(hfx[n]-5, hfy[n]+2, hfz[n]-5, 2);
}
}}
if(builder[0]!=null){
for(var n=0;n<builder.length;n++){
if(bu2a[n]==1){
bu2b[n] = false;
}
if(bu3a[n]==1){
bu3b[n] = false;
}
if(bu4a[n]==900&&bu4b[n]){
ESP.antiLack(5);
for(var xx=bux[n]-5;xx<bux[n]+5;xx++)
for(var yy=buy[n]+1;yy<buy[n]+15;yy++)
for(var zz=buz[n]-4;zz<buz[n]+5;zz++)
setTile(xx, yy, zz, 0);
bu4b[n] = false;
}
}}
if(soldier[0]!=null){
for(var n=0;n<soldier.length;n++){
if(so1a[n]==148){
setTile(px+3*sin, py+2, pz+3*cos, 0);
setTile(px+5*sin, py+2, pz+5*cos, 173);
}
if(so1a[n]==146){
setTile(px+5*sin, py+2, pz+5*cos, 0);
ESP.antiLack(5);
explode(px+6*sin, py+2, pz+6*cos, 1);
setTile(px+7*sin, py+2, pz+7*cos, 173);
}
if(so1a[n]==144){
setTile(px+7*sin, py+2, pz+7*cos, 0);
setTile(px+9*sin, py+2, pz+9*cos, 173);
}
if(so1a[n]==142){
setTile(px+9*sin, py+2, pz+9*cos, 0);
explode(px+8*sin, py+2, pz+8*cos, 1);
setTile(px+11*sin, py+2, pz+11*cos, 173);
}
if(so1a[n]==140){
setTile(px+11*sin, py+2, pz+11*cos, 0);
setTile(px+13*sin, py+2, pz+13*cos, 173);
}
if(so1a[n]==138){
setTile(px+13*sin, py+2, pz+13*cos, 0);
explode(px+14*sin, py+2, pz+14*cos, 1);
setTile(px+15*sin, py+2, pz+15*cos, 173);
}
if(so1a[n]==136){
setTile(px+15*sin, py+2, pz+15*cos, 0);
setTile(px+17*sin, py+2, pz+17*cos, 173);
}
if(so1a[n]==134){
setTile(px+17*sin, py+2, pz+17*cos, 0);
explode(px+18*sin, py+2, pz+18*cos, 1);
setTile(px+19*sin, py+2, pz+19*cos, 173);
}
if(so1a[n]==132){
setTile(px+19*sin, py+2, pz+19*cos, 0);
setTile(px+21*sin, py+2, pz+21*cos, 173);
}
if(so1a[n]==130){
setTile(px+21*sin, py+2, pz+21*cos, 0);
ESP.antiLack(5);
explode(px+21*sin, py+2, pz+21*cos, 2.5);
}
if(so4a[n]==900&&so4b[n]!=0){
for(var xx=sox[n]-3;xx<sox[n]+4;xx++){
for(var zz=soz[n]-3;zz<soz[n]+4;zz++){
for(var yy=soy[n]+1;yy<soy[n]+5;yy++)
setTile(xx, yy, zz, 0);
setTile(xx, soy[n], zz, 2);
}}
so4b[n] = 0;
}
if(so4c[n]){
if(so4a[n]==930){
if(auto) autoRecover(sox[n], soy[n], soz[n], 12, 2);
if(so4b[n]!=0){
autoRecover(sox[n], soy[n], soz[n], 3, 49);
setTile(xx, soy[n], zz, 49);
so4c[n] = false;
}
}
if(auto){
if(so4a[n]==960) autoRecover(sox[n], soy[n]-1, soz[n], 12, 3);
if(so4a[n]==960) autoRecover(sox[n], soy[n]-2, soz[n], 12, 3);
if(so4a[n]==960) autoRecover(sox[n], soy[n]-3, soz[n], 12, 3);
if(so4a[n]==960) autoRecover(sox[n], soy[n]-4, soz[n], 12, 3);
}
}
}}
if(assault[0]!=null){
for(var n=0;n<assault.length;n++){
if(asu2a[n]==275){
ESP.antiLack(5);
explode(asu2x[n], asu2y[n]+1.5, asu2z[n], 2.5);
for(var xx=asu2x[n]-4;xx<asu2x[n]+5;xx++)
for(var yy=asu2y[n]-4;yy<asu2y[n]+1;yy++)
for(var zz=asu2z[n]-4;zz<asu2z[n]+5;zz++)
if(getTile(xx, yy, zz)==0){
setTile(xx, yy, zz, 51);
}
}
}}
if(burst[0]!=null){
for(var n=0;n<burst.length;n++){
if(bus1a[n]==1){
bus1b[n] = false;
}
}}
if(warrior[0]!=null){
for(var n=0;n<warrior.length;n++){
if(wa1a[n]==145){
ESP.antiLack(5);
explode(wa1x[n]+waxa[n], wa1y[n], wa1z[n]+waza[n], 2);
}
if(wa1a[n]==140){
explode(wa1x[n]+2*waxa[n], wa1y[n], wa1z[n]+2*waza[n], 2);
}
if(wa2a[n]==295){
setTile(px-sin, py+1, pz-cos, 0);
setTile(px-sin, py+3, pz-cos, 0);
setTile(px-2*sin, py+2, pz-2*cos, 0);
setTile(px-3*sin, py+1, pz-3*cos, 0);
for(var ss=3;ss<8;ss++)
setTile(px-ss*sin, py+ss, pz-ss*cos, 0);
setTile(px, py+1, pz, 17);
setTile(px+sin, py+2, pz+cos, 41);
setTile(px, py+2, pz, 41);
setTile(px-sin, py+2, pz-cos, 41);
for(var ss=3;ss<8;ss++)
setTile(px, py+ss, pz, 42);
}
if(wa2a[n]==290){
setTile(px, py+1, pz, 0);
setTile(px+sin, py+2, pz+cos, 0);
setTile(px, py+2, pz, 0);
setTile(px-sin, py+2, pz-cos, 0);
for(var ss=3;ss<8;ss++)
setTile(px, py+ss, pz, 0);
setTile(px+sin, py+1, pz+cos, 17);
setTile(px+sin, py+3, pz+cos, 41);
setTile(px+2*sin, py+2, pz+2*cos, 41);
setTile(px+3*sin, py+1, pz+3*cos, 41);
for(var ss=3;ss<8;ss++)
setTile(px+ss*sin, py+ss, pz+ss*cos, 42);
}
if(wa2a[n]==285){
setTile(px, py, pz, 0);
setTile(px+sin, py+1, pz+cos, 0);
setTile(px+sin, py+3, pz+cos, 0);
setTile(px+2*sin, py+2, pz+2*cos, 0);
setTile(px+3*sin, py+1, pz+3*cos, 0);
for(var ss=3;ss<8;ss++)
setTile(px+ss*sin, py+ss, pz+ss*cos, 0);
setTile(px+sin, py-1, pz+cos, 17);
setTile(px+2*sin, py-1, pz+2*cos, 17);
setTile(px+3*sin, py-1, pz+3*cos, 41);
setTile(px+3*sin, py, pz+3*cos, 41);
setTile(px+3*sin, py-2, pz+3*cos, 41);
for(var ss=4;ss<9;ss++)
setTile(px+ss*sin, py-1, pz+ss*cos, 42);
}
if(wa2a[n]==280){
setTile(px+sin, py-1, pz+cos, 0);
setTile(px+2*sin, py-1, pz+2*cos, 0);
setTile(px+3*sin, py-1, pz+3*cos, 0);
setTile(px+3*sin, py, pz+3*cos, 0);
setTile(px+3*sin, py-2, pz+3*cos, 0);
for(var ss=4;ss<9;ss++)
setTile(px+ss*sin, py-1, pz+ss*cos, 0);
ESP.antiLack(5);
explode(px+8*sin, py-1, pz+8*cos, 2);
explode(px+4*sin, py-1, pz+4*cos, 2);
}
if(wa3a[n]==295){
setTile(px+3*sin, py, pz+3*cos, 0);
setTile(px+4*sin, py, pz+4*cos, 0);
setTile(px+5*sin, py-1, pz+5*cos, 0);
setTile(px+5*sin, py, pz+5*cos, 0);
setTile(px+5*sin, py+1, pz+5*cos, 0);
setTile(px+5*sin, py, pz+5*cos, 17);
setTile(px+6*sin, py, pz+6*cos, 17);
setTile(px+7*sin, py-1, pz+7*cos, 41);
setTile(px+7*sin, py, pz+7*cos, 41);
setTile(px+7*sin, py+1, pz+7*cos, 41);
for(var ss=10;ss<13;ss++)
setTile(px+ss*sin, py, pz+ss*cos, 42);
}
if(wa3a[n]==290){
setTile(px+7*sin, py-1, pz+7*cos, 0);
setTile(px+7*sin, py+1, pz+7*cos, 0);
for(var ss=5;ss<13;ss++)
setTile(px+ss*sin, py, pz+ss*cos, 0);
ESP.antiLack(5);
explode(px+12*sin, py, pz+12*cos, 2.5);
explode(px+9*sin, py, pz+9*cos, 2);
}
if(wa4a[n]==1790){
for(var yy=way[n]+9;yy<way[n]+11;yy++){
setTile(wax[n]+7, yy, waz[n]+7, 0);
setTile(wax[n]+7, yy, waz[n], 0);
setTile(wax[n]+7, yy, waz[n]-7, 0);
setTile(wax[n], yy, waz[n]+7, 0);
setTile(wax[n], yy, waz[n]-7, 0);
setTile(wax[n]-7, yy, waz[n]+7, 0);
setTile(wax[n]-7, yy, waz[n], 0);
setTile(wax[n]-7, yy, waz[n]-7, 0);
}
for(var ss=-1;ss<2;ss++){
setTile(wax[n]+7+ss, way[n]+8, waz[n]+7, 0);
setTile(wax[n]+7+ss, way[n]+8, waz[n], 0);
setTile(wax[n]+7+ss, way[n]+8, waz[n]-7, 0);
setTile(wax[n]+ss, way[n]+8, waz[n]+7, 0);
setTile(wax[n]+ss, way[n]+8, waz[n]-7, 0);
setTile(wax[n]-7+ss, way[n]+8, waz[n]+7, 0);
setTile(wax[n]-7+ss, way[n]+8, waz[n], 0);
setTile(wax[n]-7+ss, way[n]+8, waz[n]-7, 0);
}
for(var yy=way[n];yy<way[n]+4;yy++){
setTile(wax[n]+7, yy, waz[n]+7, 42);
setTile(wax[n]+7, yy, waz[n], 42);
setTile(wax[n]+7, yy, waz[n]-7, 42);
setTile(wax[n], yy, waz[n]+7, 42);
setTile(wax[n], yy, waz[n]-7, 42);
setTile(wax[n]-7, yy, waz[n]+7, 42);
setTile(wax[n]-7, yy, waz[n], 42);
setTile(wax[n]-7, yy, waz[n]-7, 42);
}
for(var yy=way[n]+6;yy<way[n]+8;yy++){
setTile(wax[n]+7, yy, waz[n]+7, 17);
setTile(wax[n]+7, yy, waz[n], 17);
setTile(wax[n]+7, yy, waz[n]-7, 17);
setTile(wax[n], yy, waz[n]+7, 17);
setTile(wax[n], yy, waz[n]-7, 17);
setTile(wax[n]-7, yy, waz[n]+7, 17);
setTile(wax[n]-7, yy, waz[n], 17);
setTile(wax[n]-7, yy, waz[n]-7, 17);
}
for(var ss=-1;ss<2;ss++){
setTile(wax[n]+7+ss, way[n]+5, waz[n]+7, 41);
setTile(wax[n]+7+ss, way[n]+5, waz[n], 41);
setTile(wax[n]+7+ss, way[n]+5, waz[n]-7, 41);
setTile(wax[n]+ss, way[n]+5, waz[n]+7, 41);
setTile(wax[n]+ss, way[n]+5, waz[n]-7, 41);
setTile(wax[n]-7+ss, way[n]+5, waz[n]+7, 41);
setTile(wax[n]-7+ss, way[n]+5, waz[n], 41);
setTile(wax[n]-7+ss, way[n]+5, waz[n]-7, 41);
}
}
if(wa4a[n]==1785){
for(var yy=way[n];yy<way[n]+7;yy++){
setTile(wax[n]+7, yy, waz[n]+7, 0);
setTile(wax[n]+7, yy, waz[n], 0);
setTile(wax[n]+7, yy, waz[n]-7, 0);
setTile(wax[n], yy, waz[n]+7, 0);
setTile(wax[n], yy, waz[n]-7, 0);
setTile(wax[n]-7, yy, waz[n]+7, 0);
setTile(wax[n]-7, yy, waz[n], 0);
setTile(wax[n]-7, yy, waz[n]-7, 0);
}
for(var yy=way[n]+7;yy<way[n]+9;yy++){
setTile(wax[n]+7, yy, waz[n]+7, 0);
setTile(wax[n]+7, yy, waz[n], 0);
setTile(wax[n]+7, yy, waz[n]-7, 0);
setTile(wax[n], yy, waz[n]+7, 0);
setTile(wax[n], yy, waz[n]-7, 0);
setTile(wax[n]-7, yy, waz[n]+7, 0);
setTile(wax[n]-7, yy, waz[n], 0);
setTile(wax[n]-7, yy, waz[n]-7, 0);
}
for(var ss=-1;ss<2;ss++){
setTile(wax[n]+7+ss, way[n]+5, waz[n]+7, 0);
setTile(wax[n]+7+ss, way[n]+5, waz[n], 0);
setTile(wax[n]+7+ss, way[n]+5, waz[n]-7, 0);
setTile(wax[n]+ss, way[n]+5, waz[n]+7, 0);
setTile(wax[n]+ss, way[n]+5, waz[n]-7, 0);
setTile(wax[n]-7+ss, way[n]+5, waz[n]+7, 0);
setTile(wax[n]-7+ss, way[n]+5, waz[n], 0);
setTile(wax[n]-7+ss, way[n]+5, waz[n]-7, 0);
}
ESP.antiLack(5);
explode(wax[n]+7, way[n]+1, waz[n]+7, 3);
explode(wax[n]+7, way[n]+1, waz[n], 3);
explode(wax[n]+7, way[n]+1, waz[n]-7, 3);
explode(wax[n], way[n]+1, waz[n]+7, 3);
explode(wax[n], way[n]+1, waz[n]-7, 3);
explode(wax[n]-7, way[n]+1, waz[n]+7, 3);
explode(wax[n]-7, way[n]+1, waz[n], 3);
explode(wax[n]-7, way[n]+1, waz[n]-7, 3);
explode(wax[n]+7, way[n]+3, waz[n]+7, 2);
explode(wax[n]+7, way[n]+3, waz[n], 2);
explode(wax[n]+7, way[n]+3, waz[n]-7, 2);
explode(wax[n], way[n]+3, waz[n]+7, 2);
explode(wax[n], way[n]+3, waz[n]-7, 2);
explode(wax[n]-7, way[n]+3, waz[n]+7, 2);
explode(wax[n]-7, way[n]+3, waz[n], 2);
explode(wax[n]-7, way[n]+3, waz[n]-7, 2);
}
}}
if(ore[0]!=null){
for(var n=0;n<ore.length;n++){
if(o2a[n]==295){
setTile(px+3*sin, py+2, pz+3*cos, 0);
setTile(px+5*sin, py+2, pz+5*cos, 15);
}
if(o2a[n]==290){
setTile(px+5*sin, py+2, pz+5*cos, 0);
setTile(px+7*sin, py+2, pz+7*cos, 15);
}
if(o2a[n]==285){
setTile(px+7*sin, py+2, pz+7*cos, 0);
ESP.antiLack(5);
explode(px+8*sin, py+2, pz+8*cos, 3);
}
if(o3a[n]==295){
setTile(o3x[n]+5, o3y[n]+1, o3z[n]+5, 0);
setTile(o3x[n]+5, o3y[n]+1, o3z[n], 0);
setTile(o3x[n]+5, o3y[n]+1, o3z[n]-5, 0);
setTile(o3x[n], o3y[n]+1, o3z[n]+5, 0);
setTile(o3x[n], o3y[n]+1, o3z[n]-5, 0);
setTile(o3x[n]-5, o3y[n]+1, o3z[n]+5, 0);
setTile(o3x[n]-5, o3y[n]+1, o3z[n], 0);
setTile(o3x[n]-5, o3y[n]+1, o3z[n]-5, 0);
setTile(o3x[n]+5, o3y[n]+2, o3z[n]+5, 74);
setTile(o3x[n]+5, o3y[n]+2, o3z[n], 74);
setTile(o3x[n]+5, o3y[n]+2, o3z[n]-5, 74);
setTile(o3x[n], o3y[n]+2, o3z[n]+5, 74);
setTile(o3x[n], o3y[n]+2, o3z[n]-5, 74);
setTile(o3x[n]-5, o3y[n]+2, o3z[n]+5, 74);
setTile(o3x[n]-5, o3y[n]+2, o3z[n], 74);
setTile(o3x[n]-5, o3y[n]+2, o3z[n]-5, 74);
}
if(o3a[n]==290){
setTile(o3x[n]+5, o3y[n]+2, o3z[n]+5, 0);
setTile(o3x[n]+5, o3y[n]+2, o3z[n], 0);
setTile(o3x[n]+5, o3y[n]+2, o3z[n]-5, 0);
setTile(o3x[n], o3y[n]+2, o3z[n]+5, 0);
setTile(o3x[n], o3y[n]+2, o3z[n]-5, 0);
setTile(o3x[n]-5, o3y[n]+2, o3z[n]+5, 0);
setTile(o3x[n]-5, o3y[n]+2, o3z[n], 0);
setTile(o3x[n]-5, o3y[n]+2, o3z[n]-5, 0);
ESP.antiLack(5);
explode(o3x[n]+5, o3y[n]+2, o3z[n]+5, 2);
explode(o3x[n]+5, o3y[n]+2, o3z[n], 2);
explode(o3x[n]+5, o3y[n]+2, o3z[n]-5, 2);
explode(o3x[n], o3y[n]+2, o3z[n]+5, 2);
explode(o3x[n], o3y[n]+2, o3z[n]-5, 2);
explode(o3x[n]-5, o3y[n]+2, o3z[n]+5, 2);
explode(o3x[n]-5, o3y[n]+2, o3z[n], 2);
explode(o3x[n]-5, o3y[n]+2, o3z[n]-5, 2);
}
if(o4c[n]>0){
o4c[n]--;
}
if(o4c[n]==1){
for(var xx=ox[n]-8;xx<ox[n]+9;xx++)
for(var yy=oy[n]+1;yy<oy[n]+5;yy++)
for(var zz=oz[n]-8;zz<oz[n]+9;zz++)
setTile(xx, yy, zz, 0);
}
if(o4a[n]==900&&o4b[n]<2){
for(var xx=ox[n]-8;xx<ox[n]+9;xx++)
for(var yy=oy[n]+1;yy<oy[n]+5;yy++)
for(var zz=oz[n]-8;zz<oz[n]+9;zz++)
setTile(xx, yy, zz, 0);
o4b[n] = 0;
}
}}
if(rich[0]!=null){
for(var n=0;n<rich.length;n++){
if(r1a[n]==145){
ESP.antiLack(5);
explode(r1x[n], r1y[n]+1, r1z[n], 2.5);
}
if(r2a[n]==295){
ESP.antiLack(5);
for(var gun=3;gun<25;gun++){
setTile(px+gun*sin, py+2, pz+gun*cos, 0);
explode(px+gun*sin, py+2, pz+gun*cos, 1.6);
}
}
if(r4a[n]==900){
for(var xx=rx[n]-4;xx<rx[n]+5;xx++){
for(var yy=ry[n]+1;yy<ry[n]+7;yy++){
for(var zz=rz[n]-4;zz<rz[n]+5;zz++){
setTile(xx, yy, rz[n]+3, 0);
setTile(xx, yy, rz[n]-3, 0);
setTile(rx[n]+3, yy, zz, 0);
setTile(rx[n]-3, yy, zz, 0);
setTile(xx, ry[n]+1, zz, 0);
setTile(xx, ry[n]+6, zz, 0);
}}}
}
}}
if(space[0]!=null){
for(var n=0;n<space.length;n++){
if(sp2a[n]==1){
if(spxa[n]>spza[n]){
for(var zz=sp2z[n]-2;zz<sp2z[n]+3;zz++)
setTile(sp2x[n], sp2y[n]+2, zz, 0);
}
else if(spxa[n]<spza[n]){
for(var xx=sp2x[n]-2;xx<sp2x[n]+3;xx++)
setTile(xx, sp2y[n]+2, sp2z[n], 0);
}
}
if(sp4a[n]==1790){
for(var xx=spx[n]-5;xx<spx[n]+6;xx++)
for(var zz=spz[n]-5;zz<spz[n]+6;zz++)
setTile(xx, spy[n]-1, zz, 0);
for(var xx=spx[n]-4;xx<spx[n]+5;xx++)
for(var zz=spz[n]-4;zz<spz[n]+5;zz++)
setTile(xx, spy[n]-2, zz, 0);
for(var xx=spx[n]-3;xx<spx[n]+4;xx++)
for(var zz=spz[n]-3;zz<spz[n]+4;zz++)
setTile(xx, spy[n]-3, zz, 0);
for(var xx=spx[n]-2;xx<spx[n]+3;xx++)
for(var zz=spz[n]-2;zz<spz[n]+3;zz++)
setTile(xx, spy[n]-4, zz, 0);
}
if(sp4a[n]==1780){
for(var xx=spx[n]-1;xx<spx[n]+2;xx++)
for(var yy=0;yy<spy[n]-3;yy++)
for(var zz=spz[n]-1;zz<spz[n]+2;zz++)
setTile(xx, yy, zz, 0);
}
}}
if(force[0]!=null){
for(var n=0;n<force.length;n++){
if(fo1a[n]==148){
setTile(px+3*sin, py+2, pz+3*cos, 0);
setTile(px+5*sin, py+2, pz+5*cos, 89);
}
if(fo1a[n]==146){
setTile(px+4*sin, py+2, pz+4*cos, 0);
setTile(px+6*sin, py+2, pz+6*cos, 89);
}
if(fo1a[n]==144){
setTile(px+5*sin, py+2, pz+5*cos, 0);
setTile(px+7*sin, py+2, pz+7*cos, 89);
}
if(fo1a[n]==142){
setTile(px+6*sin, py+2, pz+6*cos, 0);
setTile(px+8*sin, py+2, pz+8*cos, 89);
}
if(fo1a[n]==140){
setTile(px+7*sin, py+2, pz+7*cos, 0);
setTile(px+8*sin, py+2, pz+8*cos, 0);
ESP.antiLack(5);
explode(px+6*sin, py+2, pz+6*cos, 2);
explode(px+9*sin, py+2, pz+9*cos, 2);
}
if(fo2a[n]==295){
ESP.antiLack(5);
explode(fo2x[n]+1.5*foxa[n], fo2y[n], fo2z[n]+1.5*foza[n], 2.5);
}
if(fo2a[n]==290){
ESP.antiLack(5);
explode(fo2x[n]+3*foxa[n], fo2y[n], fo2z[n]+3*foza[n], 2.5);
}
if(fo2a[n]==285){
ESP.antiLack(5);
explode(fo2x[n]+4.5*foxa[n], fo2y[n], fo2z[n]+4.5*foza[n], 2.5);
}
if(fo2a[n]==280){
ESP.antiLack(5);
explode(fo2x[n]+6*foxa[n], fo2y[n], fo2z[n]+6*foza[n], 2.5);
}
if(fo2a[n]==275){
ESP.antiLack(5);
explode(fo2x[n]+7.5*foxa[n], fo2y[n], fo2z[n]+7.5*foza[n], 2.5);
}
if(fo2a[n]==270){
ESP.antiLack(5);
explode(fo2x[n]+9*foxa[n], fo2y[n], fo2z[n]+9*foza[n], 2.5);
}
}}
if(rein[0]!=null){
for(var n=0;n<rein.length;n++){
if(re1a[n]==145){
for(var xx=re1x[n]-1;xx<re1x[n]+2;xx++)
for(var yy=re1y[n]+5;yy<re1y[n]+7;yy++)
for(var zz=re1z[n]-1;zz<re1z[n]+2;zz++)
setTile(xx, yy, zz, 0);
for(var yy=re1y[n]+4;yy<re1y[n]+6;yy++){
setTile(re1x[n]+2, yy, re1z[n], 0);
setTile(re1x[n]-2, yy, re1z[n], 0);
setTile(re1x[n], yy, re1z[n]+2, 0);
setTile(re1x[n], yy, re1z[n]-2, 0);
}
for(var xx=re1x[n]-1;xx<re1x[n]+2;xx++)
for(var yy=re1y[n]+1;yy<re1y[n]+5;yy++)
for(var zz=re1z[n]-1;zz<re1z[n]+2;zz++)
setTile(xx, yy, zz, 79);
for(var yy=re1y[n]+2;yy<re1y[n]+4;yy++){
setTile(re1x[n]+2, yy, re1z[n], 79);
setTile(re1x[n]-2, yy, re1z[n], 79);
setTile(re1x[n], yy, re1z[n]+2, 79);
setTile(re1x[n], yy, re1z[n]-2, 79);
}
}
if(re1a[n]==140){
for(var xx=re1x[n]-1;xx<re1x[n]+2;xx++)
for(var yy=re1y[n]+1;yy<re1y[n]+5;yy++)
for(var zz=re1z[n]-1;zz<re1z[n]+2;zz++)
setTile(xx, yy, zz, 0);
for(var yy=re1y[n]+2;yy<re1y[n]+4;yy++){
setTile(re1x[n]+2, yy, re1z[n], 0);
setTile(re1x[n]-2, yy, re1z[n], 0);
setTile(re1x[n], yy, re1z[n]+2, 0);
setTile(re1x[n], yy, re1z[n]-2, 0);
}
ESP.antiLack(5);
explode(re1x[n]+0.5, re1y[n]+2, re1z[n]+0.5, 2.5);
setTile(re1x[n]+1, re1y[n]+1, re1z[n], 80);
setTile(re1x[n]-1, re1y[n]+1, re1z[n], 80);
setTile(re1x[n], re1y[n]+1, re1z[n]+1, 80);
setTile(re1x[n], re1y[n]+1, re1z[n]-1, 80);
}
if(re1a[n]==135){
setTile(re1x[n]+1, re1y[n]+1, re1z[n], 0);
setTile(re1x[n]-1, re1y[n]+1, re1z[n], 0);
setTile(re1x[n], re1y[n]+1, re1z[n]+1, 0);
setTile(re1x[n], re1y[n]+1, re1z[n]-1, 0);
setTile(re1x[n]+2, re1y[n]+2, re1z[n], 80);
setTile(re1x[n]-2, re1y[n]+2, re1z[n], 80);
setTile(re1x[n], re1y[n]+2, re1z[n]+2, 80);
setTile(re1x[n], re1y[n]+2, re1z[n]-2, 80);
}
if(re1a[n]==130){
setTile(re1x[n]+2, re1y[n]+2, re1z[n], 0);
setTile(re1x[n]-2, re1y[n]+2, re1z[n], 0);
setTile(re1x[n], re1y[n]+2, re1z[n]+2, 0);
setTile(re1x[n], re1y[n]+2, re1z[n]-2, 0);
}
if(re2a[n]==295){
for(var gun=3;gun<30;gun++){
setTile(px+gun*sin, py+1, pz+gun*cos, 173);
}
if(re2x[n]>re2z[n]){
for(var gun=3;gun<30;gun++){
setTile(px+gun*sin, py+3, pz+gun*cos+1, 173);
setTile(px+gun*sin, py+3, pz+gun*cos-1, 173);
}
}
else if(re2x[n]<re2z[n]){
for(var gun=3;gun<30;gun++){
setTile(px+gun*sin+1, py+3, pz+gun*cos, 173);
setTile(px+gun*sin-1, py+3, pz+gun*cos, 173);
}
}
}
if(re2a[n]==290){
ESP.antiLack(15);
if(re2x[n]>re2z[n]){
for(var gun=3;gun<30;gun++){
setTile(px+gun*sin, py+1, pz+gun*cos, 0);
setTile(px+gun*sin, py+3, pz+gun*cos+1, 0);
setTile(px+gun*sin, py+3, pz+gun*cos-1, 0);
explode(px+gun*sin, py+2, pz+gun*cos, 1.7);
}
}
else if(re2x[n]<re2z[n]){
for(var gun=3;gun<30;gun++){
setTile(px+gun*sin, py+1, pz+gun*cos, 0);
setTile(px+gun*sin+1, py+3, pz+gun*cos, 0);
setTile(px+gun*sin-1, py+3, pz+gun*cos, 0);
explode(px+gun*sin, py+2, pz+gun*cos, 1.7);
}
}
}
if(re3a[n]==298){
setTile(re3x[n]+2, re3y[n]+2, re3z[n], 0);
setTile(re3x[n]-2, re3y[n]+2, re3z[n], 0);
setTile(re3x[n], re3y[n]+2, re3z[n]+2, 0);
setTile(re3x[n], re3y[n]+2, re3z[n]-2, 0);
setTile(re3x[n]+4, re3y[n]+2, re3z[n], 35, 14);
setTile(re3x[n]-4, re3y[n]+2, re3z[n], 35, 14);
setTile(re3x[n], re3y[n]+2, re3z[n]+4, 35, 14);
setTile(re3x[n], re3y[n]+2, re3z[n]-4, 35, 14);
}
if(re3a[n]==296){
setTile(re3x[n]+4, re3y[n]+2, re3z[n], 0);
setTile(re3x[n]-4, re3y[n]+2, re3z[n], 0);
setTile(re3x[n], re3y[n]+2, re3z[n]+4, 0);
setTile(re3x[n], re3y[n]+2, re3z[n]-4, 0);
setTile(re3x[n]+5, re3y[n]+2, re3z[n]+2, 35, 14);
setTile(re3x[n]+5, re3y[n]+2, re3z[n]-2, 35, 14);
setTile(re3x[n]-5, re3y[n]+2, re3z[n]+2, 35, 14);
setTile(re3x[n]-5, re3y[n]+2, re3z[n]-2, 35, 14);
setTile(re3x[n]+2, re3y[n]+2, re3z[n]+5, 35, 14);
setTile(re3x[n]-2, re3y[n]+2, re3z[n]+5, 35, 14);
setTile(re3x[n]+2, re3y[n]+2, re3z[n]-5, 35, 14);
setTile(re3x[n]-2, re3y[n]+2, re3z[n]-5, 35, 14);
}
if(re3a[n]==292){
setTile(re3x[n]+5, re3y[n]+2, re3z[n]+2, 0);
setTile(re3x[n]+5, re3y[n]+2, re3z[n]-2, 0);
setTile(re3x[n]-5, re3y[n]+2, re3z[n]+2, 0);
setTile(re3x[n]-5, re3y[n]+2, re3z[n]-2, 0);
setTile(re3x[n]+2, re3y[n]+2, re3z[n]+5, 0);
setTile(re3x[n]-2, re3y[n]+2, re3z[n]+5, 0);
setTile(re3x[n]+2, re3y[n]+2, re3z[n]-5, 0);
setTile(re3x[n]-2, re3y[n]+2, re3z[n]-5, 0);
ESP.antiLack(5);
explode(re3x[n]+5, re3y[n]+2, re3z[n]+2, 2.5);
explode(re3x[n]+5, re3y[n]+2, re3z[n]-2, 2.5);
explode(re3x[n]-5, re3y[n]+2, re3z[n]+2, 2.5);
explode(re3x[n]-5, re3y[n]+2, re3z[n]-2, 2.5);
explode(re3x[n]+2, re3y[n]+2, re3z[n]+5, 2.5);
explode(re3x[n]-2, re3y[n]+2, re3z[n]+5, 2.5);
explode(re3x[n]+2, re3y[n]+2, re3z[n]-5, 2.5);
explode(re3x[n]-2, re3y[n]+2, re3z[n]-5, 2.5);
}
if(re4a[n]==1795){
for(var yy=rey[n]+7;yy<rey[n]+9;yy++){
setTile(rex[n]+7, yy, rez[n]+7, 0);
setTile(rex[n]+7, yy, rez[n], 0);
setTile(rex[n]+7, yy, rez[n]-7, 0);
setTile(rex[n], yy, rez[n]+7, 0);
setTile(rex[n], yy, rez[n]-7, 0);
setTile(rex[n]-7, yy, rez[n]+7, 0);
setTile(rex[n]-7, yy, rez[n], 0);
setTile(rex[n]-7, yy, rez[n]-7, 0);
}
for(var yy=rey[n]+4;yy<rey[n]+6;yy++){
setTile(rex[n]+7, yy, rez[n]+7, 173);
setTile(rex[n]+7, yy, rez[n], 173);
setTile(rex[n]+7, yy, rez[n]-7, 173);
setTile(rex[n], yy, rez[n]+7, 173);
setTile(rex[n], yy, rez[n]-7, 173);
setTile(rex[n]-7, yy, rez[n]+7, 173);
setTile(rex[n]-7, yy, rez[n], 173);
setTile(rex[n]-7, yy, rez[n]-7, 173);
}
}
if(re4a[n]==1790){
for(var yy=rey[n]+5;yy<rey[n]+7;yy++){
setTile(rex[n]+7, yy, rez[n]+7, 0);
setTile(rex[n]+7, yy, rez[n], 0);
setTile(rex[n]+7, yy, rez[n]-7, 0);
setTile(rex[n], yy, rez[n]+7, 0);
setTile(rex[n], yy, rez[n]-7, 0);
setTile(rex[n]-7, yy, rez[n]+7, 0);
setTile(rex[n]-7, yy, rez[n], 0);
setTile(rex[n]-7, yy, rez[n]-7, 0);
}
for(var yy=rey[n]+2;yy<rey[n]+5;yy++){
setTile(rex[n]+7, yy, rez[n]+7, 173);
setTile(rex[n]+7, yy, rez[n], 173);
setTile(rex[n]+7, yy, rez[n]-7, 173);
setTile(rex[n], yy, rez[n]+7, 173);
setTile(rex[n], yy, rez[n]-7, 173);
setTile(rex[n]-7, yy, rez[n]+7, 173);
setTile(rex[n]-7, yy, rez[n], 173);
setTile(rex[n]-7, yy, rez[n]-7, 173);
}
}
if(re4a[n]==1785){
for(var yy=rey[n]+3;yy<rey[n]+5;yy++){
setTile(rex[n]+7, yy, rez[n]+7, 0);
setTile(rex[n]+7, yy, rez[n], 0);
setTile(rex[n]+7, yy, rez[n]-7, 0);
setTile(rex[n], yy, rez[n]+7, 0);
setTile(rex[n], yy, rez[n]-7, 0);
setTile(rex[n]-7, yy, rez[n]+7, 0);
setTile(rex[n]-7, yy, rez[n], 0);
setTile(rex[n]-7, yy, rez[n]-7, 0);
}
for(var yy=rey[n];yy<rey[n]+3;yy++){
setTile(rex[n]+7, yy, rez[n]+7, 173);
setTile(rex[n]+7, yy, rez[n], 173);
setTile(rex[n]+7, yy, rez[n]-7, 173);
setTile(rex[n], yy, rez[n]+7, 173);
setTile(rex[n], yy, rez[n]-7, 173);
setTile(rex[n]-7, yy, rez[n]+7, 173);
setTile(rex[n]-7, yy, rez[n], 173);
setTile(rex[n]-7, yy, rez[n]-7, 173);
}
}
if(re4a[n]==1780){
for(var xx=rex[n]-11;xx<rex[n]+12;xx++)
for(var yy=rey[n]-5;yy<rey[n]+5;yy++)
for(var zz=rez[n]-11;zz<rez[n]+12;zz++)
if(getTile(xx, yy, zz)!=0&&getTile(xx, yy, zz)!=7){
setTile(xx, yy, zz, 1);
}
}
if(re4a[n]==1775){
for(var yy=rey[n];yy<rey[n]+3;yy++){
setTile(rex[n]+7, yy, rez[n]+7, 0);
setTile(rex[n]+7, yy, rez[n], 0);
setTile(rex[n]+7, yy, rez[n]-7, 0);
setTile(rex[n], yy, rez[n]+7, 0);
setTile(rex[n], yy, rez[n]-7, 0);
setTile(rex[n]-7, yy, rez[n]+7, 0);
setTile(rex[n]-7, yy, rez[n], 0);
setTile(rex[n]-7, yy, rez[n]-7, 0);
}
setTile(rex[n]+7, rey[n], rez[n]+7, 2);
setTile(rex[n]+7, rey[n], rez[n], 2);
setTile(rex[n]+7, rey[n], rez[n]-7, 2);
setTile(rex[n], rey[n], rez[n]+7, 2);
setTile(rex[n], rey[n], rez[n]-7, 2);
setTile(rex[n]-7, rey[n], rez[n]+7, 2);
setTile(rex[n]-7, rey[n], rez[n], 2);
setTile(rex[n]-7, rey[n], rez[n]-7, 2);
ESP.antiLack(5);
explode(rex[n]+7, rey[n]+1, rez[n]+7, 4);
explode(rex[n]+7, rey[n]+1, rez[n], 4);
explode(rex[n]+7, rey[n]+1, rez[n]-7, 4);
explode(rex[n], rey[n]+1, rez[n]+7, 4);
explode(rex[n], rey[n]+1, rez[n]-7, 4);
explode(rex[n]-7, rey[n]+1, rez[n]+7, 4);
explode(rex[n]-7, rey[n]+1, rez[n], 4);
explode(rex[n]-7, rey[n]+1, rez[n]-7, 4);
explode(rex[n]+7, rey[n]+2, rez[n]+7, 2.5);
explode(rex[n]+7, rey[n]+2, rez[n], 2.5);
explode(rex[n]+7, rey[n]+2, rez[n]-7, 2.5);
explode(rex[n], rey[n]+2, rez[n]+7, 2.5);
explode(rex[n], rey[n]+2, rez[n]-7, 2.5);
explode(rex[n]-7, rey[n]+2, rez[n]+7, 2.5);
explode(rex[n]-7, rey[n]+2, rez[n], 2.5);
explode(rex[n]-7, rey[n]+2, rez[n]-7, 2.5);
}
}}
if(magnet[0]!=null){
for(var n=0;n<magnet.length;n++){
if(mag1a[n]==1){
Entity.remove(mag1b);
}
if(mag3a[n]==295){
setTile(mag3x[n]+4, mag3y[n], mag3z[n]+4, 2);
setTile(mag3x[n]+4, mag3y[n], mag3z[n], 2);
setTile(mag3x[n]+4, mag3y[n], mag3z[n]-4, 2);
setTile(mag3x[n], mag3y[n], mag3z[n]+4, 2);
setTile(mag3x[n], mag3y[n], mag3z[n]-4, 2);
setTile(mag3x[n]-4, mag3y[n], mag3z[n]+4, 2);
setTile(mag3x[n]-4, mag3y[n], mag3z[n], 2);
setTile(mag3x[n]-4, mag3y[n], mag3z[n]-4, 2);
setTile(mag3x[n]+4, mag3y[n]+1, mag3z[n]+4, 15);
setTile(mag3x[n]+4, mag3y[n]+1, mag3z[n], 15);
setTile(mag3x[n]+4, mag3y[n]+1, mag3z[n]-4, 15);
setTile(mag3x[n], mag3y[n]+1, mag3z[n]+4, 15);
setTile(mag3x[n], mag3y[n]+1, mag3z[n]-4, 15);
setTile(mag3x[n]-4, mag3y[n]+1, mag3z[n]+4, 15);
setTile(mag3x[n]-4, mag3y[n]+1, mag3z[n], 15);
setTile(mag3x[n]-4, mag3y[n]+1, mag3z[n]-4, 15);
}
if(mag3a[n]==290){
setTile(mag3x[n]+4, mag3y[n]+1, mag3z[n]+4, 0);
setTile(mag3x[n]+4, mag3y[n]+1, mag3z[n], 0);
setTile(mag3x[n]+4, mag3y[n]+1, mag3z[n]-4, 0);
setTile(mag3x[n], mag3y[n]+1, mag3z[n]+4, 0);
setTile(mag3x[n], mag3y[n]+1, mag3z[n]-4, 0);
setTile(mag3x[n]-4, mag3y[n]+1, mag3z[n]+4, 0);
setTile(mag3x[n]-4, mag3y[n]+1, mag3z[n], 0);
setTile(mag3x[n]-4, mag3y[n]+1, mag3z[n]-4, 0);
ESP.antiLack(5);
explode(mag3x[n]+4, mag3y[n]+1.5, mag3z[n]+4, 2.5);
explode(mag3x[n]+4, mag3y[n]+1.5, mag3z[n], 2.5);
explode(mag3x[n]+4, mag3y[n]+1.5, mag3z[n]-4, 2.5);
explode(mag3x[n], mag3y[n]+1.5, mag3z[n]+4, 2.5);
explode(mag3x[n], mag3y[n]+1.5, mag3z[n]-4, 2.5);
explode(mag3x[n]-4, mag3y[n]+1.5, mag3z[n]+4, 2.5);
explode(mag3x[n]-4, mag3y[n]+1.5, mag3z[n], 2.5);
explode(mag3x[n]-4, mag3y[n]+1.5, mag3z[n]-4, 2.5);
}
if(mag4a[n]==1770){
explode(magx[n]+4, magy[n]+1, magz[n], 2);
explode(magx[n]-4, magy[n]+1, magz[n], 2);
explode(magx[n], magy[n]+1, magz[n]+4, 2);
explode(magx[n], magy[n]+1, magz[n]-4, 2);
}
if(mag4a[n]==870){
for(var mag4b=-2;mag4b<3;mag4b++){
setTile(magx[n]+mag4b, magy[n]+1, magz[n]+3, 0);
setTile(magx[n]+mag4b, magy[n]+1, magz[n]-3, 0);
setTile(magx[n]+3, magy[n]+1, magz[n]+mag4b, 0);
setTile(magx[n]-3, magy[n]+1, magz[n]+mag4b, 0);
}
}
}}
if(steve[0]!=null){
for(var n=0;n<steve.length;n++){
if(st2a[n]==150){
st2b[n] = false;
}
if(st4a[n]==1798){
setTile(stx[n]+1, sty[n]+1, stz[n], 46);
}
if(st4a[n]==1796){
setTile(stx[n]+1, sty[n]+1, stz[n]+1, 46);
}
if(st4a[n]==1794){
setTile(stx[n]+1, sty[n]+1, stz[n]-1, 46);
}
if(st4a[n]==1792){
setTile(stx[n], sty[n]+1, stz[n]-1, 46);
}
if(st4a[n]==1790){
setTile(stx[n]+1, sty[n]+2, stz[n], 46);
}
if(st4a[n]==1788){
setTile(stx[n]+1, sty[n]+1, stz[n]+1, 46);
}
if(st4a[n]==186){
setTile(stx[n]+2, sty[n]+1, stz[n], 46);
}
if(st4a[n]==1784){
setTile(stx[n], sty[n]+1, stz[n]+2, 46);
}
if(st4a[n]==1782){
setTile(stx[n]+1, sty[n]+1, stz[n]-2, 46);
}
if(st4a[n]==1780){
setTile(stx[n]+2, sty[n]+1, stz[n]+2, 46);
}
if(st4a[n]==1778){
setTile(stx[n], sty[n]+2, stz[n]+1, 46);
}
if(st4a[n]==1776){
setTile(stx[n], sty[n]+2, stz[n]-1, 46);
}
if(st4a[n]==1774){
setTile(stx[n]+3, sty[n]+1, stz[n], 46);
}
if(st4a[n]==1772){
setTile(stx[n], sty[n]+1, stz[n]+5, 46);
}
if(st4a[n]==1770){
setTile(stx[n]-2, sty[n]+1, stz[n]+3, 46);
}
if(st4a[n]==1768){
setTile(stx[n]-4, sty[n]+1, stz[n]+2, 46);
}
if(st4a[n]==1766){
setTile(stx[n]+3, sty[n]+1, stz[n]+2, 46);
}
if(st4a[n]==1764){
setTile(stx[n]+4, sty[n]+1, stz[n]+2, 46);
}
if(st4a[n]==1762){
setTile(stx[n]-2, sty[n]+1, stz[n]-3, 46);
}
if(st4a[n]==1760){
ESP.antiLack(5);
explode(stx[n], sty[n]+1.5, stz[n], 2);
}
}}
if(hero[0]!=null){
for(var n=0;n<hero.length;n++){
if(he1c[n]>0){
he1c[n]--;
}
if(he1c[n]==1){
setTile(he1x[n], he1y[n], he1z[n], he1d[n]);
}
if(he4a[n]==1770){
for(var yy=hey[n]-2;yy<hey[n]+6;yy++){
explode(hex[n]+4, yy, hez[n]+4, 1.6);
explode(hex[n]+4, yy, hez[n]-4, 1.6);
explode(hex[n]-4, yy, hez[n]+4, 1.6);
explode(hex[n]-4, yy, hez[n]-4, 1.6);
}
setTile(hex[n]+4, hey[n]+9, hez[n]+4, 89);
setTile(hex[n]+4, hey[n]+9, hez[n]-4, 89);
setTile(hex[n]-4, hey[n]+9, hez[n]+4, 89);
setTile(hex[n]-4, hey[n]+9, hez[n]-4, 89);
}
if(he4a[n]==1725){
for(var yy=hey[n]-2;yy<hey[n]+6;yy++){
explode(hex[n]+4, yy, hez[n]+4, 1.6);
explode(hex[n]+4, yy, hez[n]-4, 1.6);
explode(hex[n]-4, yy, hez[n]+4, 1.6);
explode(hex[n]-4, yy, hez[n]-4, 1.6);
}
setTile(hex[n]+4, hey[n]+9, hez[n]+4, 89);
setTile(hex[n]+4, hey[n]+9, hez[n]-4, 89);
setTile(hex[n]-4, hey[n]+9, hez[n]+4, 89);
setTile(hex[n]-4, hey[n]+9, hez[n]-4, 89);
}
if(he4a[n]==1680){
for(var yy=hey[n]-2;yy<hey[n]+6;yy++){
explode(hex[n]+4, yy, hez[n]+4, 1.6);
explode(hex[n]+4, yy, hez[n]-4, 1.6);
explode(hex[n]-4, yy, hez[n]+4, 1.6);
explode(hex[n]-4, yy, hez[n]-4, 1.6);
}
setTile(hex[n]+4, hey[n]+9, hez[n]+4, 89);
setTile(hex[n]+4, hey[n]+9, hez[n]-4, 89);
setTile(hex[n]-4, hey[n]+9, hez[n]+4, 89);
setTile(hex[n]-4, hey[n]+9, hez[n]-4, 89);
}
if(he4a[n]==1350){
Level.setTime(700);
setTile(hex[n]+8, hey[n]+2, hez[n]+8, 0);
setTile(hex[n]+8, hey[n]+2, hez[n]-8, 0);
setTile(hex[n]-8, hey[n]+2, hez[n]+8, 0);
setTile(hex[n]-8, hey[n]+2, hez[n]-8, 0);
setTile(hex[n]+4, hey[n]+9, hez[n]+4, 0);
setTile(hex[n]+4, hey[n]+9, hez[n]-4, 0);
setTile(hex[n]-4, hey[n]+9, hez[n]+4, 0);
setTile(hex[n]-4, hey[n]+9, hez[n]-4, 0);
}
}}
if(hermit[0]!=null){
for(var n=0;n<hermit.length;n++){
if(her4a[n]==900){
ESP.antiLack(5);
for(var xx=herx[n]-12;xx<herx[n]+14;xx++)
for(var yy=hery[n]+1;yy<hery[n]+12;yy++)
for(var zz=herz[n]-14;zz<herz[n]+14;zz++)
if(getTile(xx, yy, zz)!=0&&getTile(xx, yy, zz)!=7){
setTile(xx, yy, zz, 0);
}
}
}}
if(clay[0]!=null){
for(var n=0;n<clay.length;n++){
if(cl2a[n]==255){
ESP.antiLack(5);
explode(cl2x[n]+0.5, cl2y[n]+2, cl2z[n]+0.5, 3);
}
if(cl4a[n]==1795){
setTile(clx[n]+6, cly[n]+2, clz[n]+6, 82);
setTile(clx[n]+6, cly[n]+2, clz[n], 82);
setTile(clx[n]+6, cly[n]+2, clz[n]-6, 82);
setTile(clx[n], cly[n]+2, clz[n]+6, 82);
setTile(clx[n], cly[n]+2, clz[n]-6, 82);
setTile(clx[n]-6, cly[n]+2, clz[n]+6, 82);
setTile(clx[n]-6, cly[n]+2, clz[n], 82);
setTile(clx[n]-6, cly[n]+2, clz[n]-6, 82);
}
if(cl4a[n]==1790){
setTile(clx[n]+6, cly[n]+3, clz[n]+6, 82);
setTile(clx[n]+6, cly[n]+3, clz[n], 82);
setTile(clx[n]+6, cly[n]+3, clz[n]-6, 82);
setTile(clx[n], cly[n]+3, clz[n]+6, 82);
setTile(clx[n], cly[n]+3, clz[n]-6, 82);
setTile(clx[n]-6, cly[n]+3, clz[n]+6, 82);
setTile(clx[n]-6, cly[n]+3, clz[n], 82);
setTile(clx[n]-6, cly[n]+3, clz[n]-6, 82);
}
if(cl4a[n]==1785){
setTile(clx[n]+6, cly[n]+4, clz[n]+6, 82);
setTile(clx[n]+6, cly[n]+4, clz[n], 82);
setTile(clx[n]+6, cly[n]+4, clz[n]-6, 82);
setTile(clx[n], cly[n]+4, clz[n]+6, 82);
setTile(clx[n], cly[n]+4, clz[n]-6, 82);
setTile(clx[n]-6, cly[n]+4, clz[n]+6, 82);
setTile(clx[n]-6, cly[n]+4, clz[n], 82);
setTile(clx[n]-6, cly[n]+4, clz[n]-6, 82);
}
if(cl4a[n]==1780){
setTile(clx[n]+6, cly[n]+5, clz[n]+6, 82);
setTile(clx[n]+6, cly[n]+5, clz[n], 82);
setTile(clx[n]+6, cly[n]+5, clz[n]-6, 82);
setTile(clx[n], cly[n]+5, clz[n]+6, 82);
setTile(clx[n], cly[n]+5, clz[n]-6, 82);
setTile(clx[n]-6, cly[n]+5, clz[n]+6, 82);
setTile(clx[n]-6, cly[n]+5, clz[n], 82);
setTile(clx[n]-6, cly[n]+5, clz[n]-6, 82);
}
if(cl4a[n]==1775){
ESP.antiLack(5);
explode(clx[n]+6, cly[n]+4, clz[n]+6, 2);
explode(clx[n]+6, cly[n]+4, clz[n], 2);
explode(clx[n]+6, cly[n]+4, clz[n]-6, 2);
explode(clx[n], cly[n]+4, clz[n]+6, 2);
explode(clx[n], cly[n]+4, clz[n]-6, 2);
explode(clx[n]-6, cly[n]+4, clz[n]+6, 2);
explode(clx[n]-6, cly[n]+4, clz[n], 2);
explode(clx[n]-6, cly[n]+4, clz[n]-6, 2);
explode(clx[n]+6, cly[n]+1, clz[n]+6, 3);
explode(clx[n]+6, cly[n]+1, clz[n], 3);
explode(clx[n]+6, cly[n]+1, clz[n]-6, 3);
explode(clx[n], cly[n]+1, clz[n]+6, 3);
explode(clx[n], cly[n]+1, clz[n]-6, 3);
explode(clx[n]-6, cly[n]+1, clz[n]+6, 3);
explode(clx[n]-6, cly[n]+1, clz[n], 3);
explode(clx[n]-6, cly[n]+1, clz[n]-6, 3);
}
if(cl2a[n]==121){
for(var xx=cl2x[n]-2;xx<cl2x[n]+3;xx++)
for(var yy=cl2y[n]+1;yy<cl2y[n]+5;yy++)
for(var zz=cl2z[n]-2;zz<cl2z[n]+3;zz++)
if(getTile(xx, yy, zz)==82){
setTile(xx, yy, zz, 0);
}
}
}}
if(kirito[0]!=null){
for(var n=0;n<kirito.length;n++){
if(k2a[n]==298){
setTile(k2x[n], k2y[n]+2, k2z[n], 0);
for(var ss=-1;ss<2;ss++){
setTile(k2x[n]+ss, k2y[n]+2, k2z[n]+2, 57);
setTile(k2x[n]+ss, k2y[n]+2, k2z[n]-2, 57);
setTile(k2x[n]+2, k2y[n]+2, k2z[n]+ss, 57);
setTile(k2x[n]-2, k2y[n]+2, k2z[n]+ss, 57);
}
}
if(k2a[n]==296){
for(var ss=-1;ss<2;ss++){
setTile(k2x[n]+ss, k2y[n]+2, k2z[n]+2, 0);
setTile(k2x[n]+ss, k2y[n]+2, k2z[n]-2, 0);
setTile(k2x[n]+2, k2y[n]+2, k2z[n]+ss, 0);
setTile(k2x[n]-2, k2y[n]+2, k2z[n]+ss, 0);
}
for(var ss=-2;ss<3;ss++){
setTile(k2x[n]+ss, k2y[n]+2, k2z[n]+3, 57);
setTile(k2x[n]+ss, k2y[n]+2, k2z[n]-3, 57);
setTile(k2x[n]+3, k2y[n]+2, k2z[n]+ss, 57);
setTile(k2x[n]-3, k2y[n]+2, k2z[n]+ss, 57);
}
}
if(k2a[n]==294){
for(var ss=-2;ss<3;ss++){
setTile(k2x[n]+ss, k2y[n]+2, k2z[n]+3, 0);
setTile(k2x[n]+ss, k2y[n]+2, k2z[n]-3, 0);
setTile(k2x[n]+3, k2y[n]+2, k2z[n]+ss, 0);
setTile(k2x[n]-3, k2y[n]+2, k2z[n]+ss, 0);
}
for(var ss=-3;ss<4;ss++){
setTile(k2x[n]+ss, k2y[n]+2, k2z[n]+4, 57);
setTile(k2x[n]+ss, k2y[n]+2, k2z[n]-4, 57);
setTile(k2x[n]+4, k2y[n]+2, k2z[n]+ss, 57);
setTile(k2x[n]-4, k2y[n]+2, k2z[n]+ss, 57);
}
}
if(k2a[n]==290){
for(var ss=-3;ss<4;ss++){
setTile(k2x[n]+ss, k2y[n]+2, k2z[n]+4, 0);
setTile(k2x[n]+ss, k2y[n]+2, k2z[n]-4, 0);
setTile(k2x[n]+4, k2y[n]+2, k2z[n]+ss, 0);
setTile(k2x[n]-4, k2y[n]+2, k2z[n]+ss, 0);
}
ESP.antiLack(5);
explode(k2x[n]+3, k2y[n]+2, k2z[n], 2.5);
explode(k2x[n]-3, k2y[n]+2, k2z[n], 2.5);
explode(k2x[n], k2y[n]+2, k2z[n]+3, 2.5);
explode(k2x[n], k2y[n]+2, k2z[n]-3, 2.5);
}
if(k3a[n]==295){
setTile(px+3*sin, py+2, pz+3*cos, 0);
setTile(px+4*sin, py+2, pz+4*cos, 0);
for(var gun=5;gun<8;gun++){
setTile(px+gun*sin, py+2, pz+gun*cos, 87);
setTile(px+gun*sin, py+3, pz+gun*cos, 51);
}
}
if(k3a[n]==295){
setTile(px+5*sin, py+2, pz+5*cos, 0);
setTile(px+6*sin, py+2, pz+6*cos, 0);
for(var gun=7;gun<10;gun++){
setTile(px+gun*sin, py+2, pz+gun*cos, 87);
setTile(px+gun*sin, py+3, pz+gun*cos, 51);
}
}
if(k3a[n]==290){
for(var gun=7;gun<10;gun++)
setTile(px+gun*sin, py+2, pz+gun*cos, 0);
ESP.antiLack(5);
explode(px+7*sin, py+2, pz+7*cos, 2);
explode(px+9*sin, py+2, pz+9*cos, 2);
}
if([1796, 1792, 1788, 1784, 1780, 1776, 1772, 1768, 1764, 1760, 1756, 1752, 1748, 1744, 1740].indexOf(k4a[n])!=-1){
explode(Entity.getX(k4b[n]), Entity.getY(k4b[n])+0.2, Entity.getZ(k4b[n]), 0.5);
}
if(k4a[n]==1736){
explode(Entity.getX(k4b[n]), Entity.getY(k4b[n]), Entity.getZ(k4b[n]), 0.5);
}
}}
if(jungle[0]!=null){
for(var n=0;n<jungle.length;n++){
if(j3a[n]==150){
ESP.antiLack(5);
explode(j3x[n]+0.5, j3y[n]+2, j3z[n]+0.5, 3);
}
if(j3a[n]==120){
for(var xx=j3x[n]-2;xx<j3x[n]+3;xx++)
for(var yy=j3y[n]+1;yy<j3y[n]+5;yy++)
for(var zz=j3z[n]-2;zz<j3z[n]+3;zz++)
if(getTile(xx, yy, zz)==48){
setTile(xx, yy, zz, 0);
}
}
if(j4a[n]==1780){
for(var xx=jx[n]-11;xx<jx[n]+12;xx++){
for(var zz=jz[n]-11;zz<jz[n]+12;zz++){
setTile(xx, jy[n], zz, 18, 3);
setTile(xx, jy[n]-1, zz, 17, 3);
setTile(xx, jy[n]-2, zz, 18, 3);
}}
}
if(j4a[n]==1775){
for(var xx=jx[n]-11;xx<jx[n]+12;xx++)
for(var yy=jy[n]-6;yy<jy[n]-2;yy++)
for(var zz=jz[n]-11;zz<jz[n]+12;zz++)
setTile(xx, yy, zz, 9);
setTile(jx[n]+6, jy[n]-6, jz[n]+6, 89);
setTile(jx[n]+6, jy[n]-6, jz[n], 89);
setTile(jx[n]+6, jy[n]-6, jz[n]-6, 89);
setTile(jx[n], jy[n]-6, jz[n]+6, 89);
setTile(jx[n], jy[n]-6, jz[n], 89);
setTile(jx[n], jy[n]-6, jz[n]-6, 89);
setTile(jx[n]-6, jy[n]-6, jz[n]+6, 89);
setTile(jx[n]-6, jy[n]-6, jz[n], 89);
setTile(jx[n]-6, jy[n]-6, jz[n]-6, 89);
Level.spawnMob(jx[n]+6, jy[n]-5, jz[n]+6, 32);
Level.spawnMob(jx[n]+6, jy[n]-5, jz[n], 32);
Level.spawnMob(jx[n]+6, jy[n]-5, jz[n]-6, 32);
Level.spawnMob(jx[n], jy[n]-5, jz[n]+6, 32);
Level.spawnMob(jx[n], jy[n]-5, jz[n], 32);
Level.spawnMob(jx[n], jy[n]-5, jz[n]-6, 32);
Level.spawnMob(jx[n]-6, jy[n]-5, jz[n]+6, 32);
Level.spawnMob(jx[n]-6, jy[n]-5, jz[n], 32);
Level.spawnMob(jx[n]-6, jy[n]-5, jz[n]-6, 32);
Level.spawnMob(jx[n], jy[n]-5, jz[n], 32);
Level.spawnMob(jx[n], jy[n]-5, jz[n], 32);
}
if(j4a[n]==900){
for(var xx=jx[n]-11;xx<jx[n]+12;xx++)
for(var yy=jy[n]-6;yy<jy[n]+1;yy++)
for(var zz=jz[n]-11;zz<jz[n]+12;zz++)
setTile(xx, yy, zz, 0);
setTile(jx[n]+6, jy[n]-6, jz[n]+6, 3);
setTile(jx[n]+6, jy[n]-6, jz[n], 3);
setTile(jx[n]+6, jy[n]-6, jz[n]-6, 3);
setTile(jx[n], jy[n]-6, jz[n]+6, 3);
setTile(jx[n], jy[n]-6, jz[n], 3);
setTile(jx[n], jy[n]-6, jz[n]-6, 3);
setTile(jx[n]-6, jy[n]-6, jz[n]+6, 3);
setTile(jx[n]-6, jy[n]-6, jz[n], 3);
setTile(jx[n]-6, jy[n]-6, jz[n]-6, 3);
}
}}
if(kanade[0]!=null){
for(var n=0;n<kanade.length;n++){
if(ka3b[n]){
for(var xx=ka3x[n]-1;xx<ka3x[n]+2;xx++){
for(var yy=ka3y[n]+1;yy<ka3y[n]+4;yy++){
for(var zz=ka3z[n]-1;zz<ka3z[n]+2;zz++){
setTile(xx, yy, ka3z[n]+2, 20);
setTile(xx, yy, ka3z[n]-2, 20);
setTile(ka3x[n]+2 ,yy, zz, 20);
setTile(ka3x[n]-2 ,yy, zz, 20);
setTile(xx, ka3y[n]+4, zz, 20);
}}}
}
if(ka3a[n]==150&&ka3b[n]){
for(var xx=ka3x[n]-1;xx<ka3x[n]+2;xx++){
for(var yy=ka3y[n]+1;yy<ka3y[n]+4;yy++){
for(var zz=ka3z[n]-1;zz<ka3z[n]+2;zz++){
setTile(xx, yy, ka3z[n]+2, 0);
setTile(xx, yy, ka3z[n]-2, 0);
setTile(ka3x[n]+2 ,yy, zz, 0);
setTile(ka3x[n]-2 ,yy, zz, 0);
setTile(xx, ka3y[n]+4, zz, 0);
}}}
ka3b[n] =false;
}
if(ka4a[n]==1795){
ESP.antiLack(5);
explode(kax[n]+4, kay[n]+1, kaz[n]+4, 2);
explode(kax[n]+6, kay[n]+1, kaz[n], 2);
explode(kax[n]+4, kay[n]+1, kaz[n]-4, 2);
explode(kax[n], kay[n]+1, kaz[n]+6, 2);
explode(kax[n], kay[n]+1, kaz[n]-6, 2);
explode(kax[n]-4, kay[n]+1, kaz[n]+4, 2);
explode(kax[n]-6, kay[n]+1, kaz[n], 2);
explode(kax[n]-4, kay[n]+1, kaz[n]-4, 2);
}
if(ka4a[n]==1790){
ESP.antiLack(5);
explode(kax[n]+6, kay[n]+1, kaz[n]+6, 2.5);
explode(kax[n]+9, kay[n]+1, kaz[n], 2.5);
explode(kax[n]+6, kay[n]+1, kaz[n]-6, 2.5);
explode(kax[n], kay[n]+1, kaz[n]+9, 2.5);
explode(kax[n], kay[n]+1, kaz[n]-9, 2.5);
explode(kax[n]-6, kay[n]+1, kaz[n]+6, 2.5);
explode(kax[n]-9, kay[n]+1, kaz[n], 2.5);
explode(kax[n]-6, kay[n]+1, kaz[n]-6, 2.5);
}
if(ka4a[n]==1785){
ESP.antiLack(5);
explode(kax[n]+8, kay[n]+1, kaz[n]+8, 3);
explode(kax[n]+8, kay[n]+1, kaz[n]-8, 3);
explode(kax[n]-8, kay[n]+1, kaz[n]+8, 3);
explode(kax[n]-8, kay[n]+1, kaz[n]-8, 3);
explode(kax[n]+12, kay[n]+1, kaz[n]+3, 3);
explode(kax[n]-12, kay[n]+1, kaz[n]+3, 3);
explode(kax[n]+12, kay[n]+1, kaz[n]-3, 3);
explode(kax[n]-12, kay[n]+1, kaz[n]-3, 3);
explode(kax[n]+3, kay[n]+1, kaz[n]+12, 3);
explode(kax[n]+3, kay[n]+1, kaz[n]-12, 3);
explode(kax[n]-3, kay[n]+1, kaz[n]+12, 3);
explode(kax[n]-3, kay[n]+1, kaz[n]-12, 3);
}
if(ka4a[n]==1780){
ESP.antiLack(5);
explode(kax[n]+10, kay[n]+1, kaz[n]+10, 3.5);
explode(kax[n]+17, kay[n]+1, kaz[n], 3.5);
explode(kax[n]+10, kay[n]+1, kaz[n]-10, 3.5);
explode(kax[n], kay[n]+1, kaz[n]+17, 3.5);
explode(kax[n], kay[n]+1, kaz[n]-17, 3.5);
explode(kax[n]-10, kay[n]+1, kaz[n]+10, 3.5);
explode(kax[n]-17, kay[n]+1, kaz[n], 3.5);
explode(kax[n]-10, kay[n]+1, kaz[n]-1, 3.5);
explode(kax[n]+15, kay[n]+1, kaz[n]+5, 3.5);
explode(kax[n]-15, kay[n]+1, kaz[n]+5, 3.5);
explode(kax[n]+15, kay[n]+1, kaz[n]-5, 3.5);
explode(kax[n]-15, kay[n]+1, kaz[n]-5, 3.5);
explode(kax[n]+5, kay[n]+1, kaz[n]+15, 3.5);
explode(kax[n]+5, kay[n]+1, kaz[n]-15, 3.5);
explode(kax[n]-5, kay[n]+1, kaz[n]+15, 3.5);
explode(kax[n]-5, kay[n]+1, kaz[n]-15, 3.5);
}
}
}
if(time[0]!=null){
for(var n=0;n<time.length;n++){
if(ti3a[n]>150){
teleport(ti3b[n], ti3x[n], ti3y[n], ti3z[n]);
}
if(ti3a[n]==150){
if(getTile(ti3x[n], ti3y[n]-0.75, ti3z[n])==95&&!ESP.isPlayer(ti3b[n])){
setTile(ti3x[n], ti3y[n]-0.75, ti3z[n], 0);
}
if(getTile(ti3x[n], Entity.getY(ti3b[n])-2, ti3z[n])==95&&ESP.isPlayer(ti3b[n])){
setTile(ti3x[n], Entity.getY(ti3b[n])-2, ti3z[n], 0);
}
}
if(ti4a[n]>1350){
for(var ts=0;ts<ti4c+1;ts++){
teleport(ti4b[ts], tix[ts], tiy[ts], tiz[ts]);
if(Entity.getHealth(ti4b[ts])<=0&&!ESP.isPlayer(ti4b[ts])){
ti4b.splice(ts, 1);
tix.splice(ts, 1);
tiy.splice(ts, 1);
tiz.splice(ts, 1);
}
}
}
if(ti4a[n]==1350){
if(!mcpev3) ESP.timeStop(false);
}
}}
if(snipe[0]!=null){
for(var n=0;n<snipe.length;n++){
if(sn4a[n]==1350){
sn4b[n] = false;
for(var xx=sn4x[n]-2;xx<sn4x[n]+3;xx++)
for(var zz=sn4z[n]-2;zz<sn4z[n]+3;zz++)
setTile(xx, sn4y[n]+15, zz, 0);
teleport(snipe[n], sn4x[n], sn4y[n]+3, sn4z[n]);
}
var pos = ESP.getSniperPoint(n);
if(pos[0]!=snx[n]||pos[1]!=sny[n]||pos[2]!=snz[n]){
setTile(snx[n], sny[n], snz[n], sn4c[n], sn4d[n]);
snx[n] = pos[0];
sny[n] = pos[1];
snz[n] = pos[2];
sn4c[n] = getTile(snx[n], sny[n], snz[n]);
sn4d[n] = Level.getData(snx[n], sny[n], snz[n]);
if([54, 51, 64, 26, 63, 68, 50].indexOf(sn4c[n])==-1){
setTile(snx[n], sny[n], snz[n], 35, 14);
}
}
}}
if(zombie[0]!=null){
for(var n=0;n<zombie.length;n++){
if(Entity.getHealth(z2b[n])>0){
if(z2a[n]==270||z2a[n]==210||z2a[n]==165){
ESP.zombieFireAttack(n);
}
}
if(z2a[n]==150){
Entity.setHealth(z2b[n], 0);
}
if(Entity.getHealth(z3b[n])>0){
if(z3a[n]==270){
ESP.zombieWaterAttack(n);
}
if(z3a[n]==210){
if(z3y[n]!=null){
setTile(z3x[n], z3y[n], z3z[n], 0);
z3y[n] = null;
}
ESP.zombieWaterAttack(n);
}
if(z3a[n]==165){
if(z3y[n]!=null){
setTile(z3x[n], z3y[n], z3z[n], 0);
z3y[n] = null;
}
ESP.zombieWaterAttack(n);
}
}
if(z3a[n]==150){
Entity.setHealth(z3b[n], 0);
}
if(z3a[n]==135&&z3y[n]!=null){
setTile(z3x[n], z3y[n], z3z[n], 0);
z3y[n] = null;
}
}}
if(necro[0]!=null){
for(var n=0;n<necro.length;n++){
if(Entity.getHealth(ne4b[n])>0){
if([1770, 1695, 1650, 1590, 1530, 1485, 1440, 1390, 1360, 1330, 1270, 1195, 1120, 1075, 1000, 940, 910].indexOf(ne4a[n])!=-1){
ESP.necroAttack(n);
}
}
if(ne4a[n]==900){
Entity.setHealth(ne4b[n], 0);
Entity.setHealth(ne4c[n], 0);
}
}}
if(asuna[0]!=null){
for(var n=0;n<asuna.length;n++){
if([295, 290, 285, 280, 275, 270, 265].indexOf(asn3a[n])!=-1){
explode(Entity.getX(asn3b[n]), Entity.getY(asn3b[n])+0.2, Entity.getZ(asn3b[n]), 0.5);
}
}}
if(holy[0]!=null){
for(var n=0;n<holy.length;n++){
if(ho1a[n]==145){
for(var gun=2;gun<7;gun++)
setTile(px+gun*sin, py+1, pz+gun*cos, 0);
ESP.antiLack(5);
explode(px+3*sin, py+1, pz+3*cos, 2);
}
if(ho2a[n]==295){
for(var yy=py+1;yy<py+6;yy++)
setTile(px, yy, pz, 0);
for(var ss=1;ss<6;ss++)
setTile(px+ss*sin, py+ss, pz+ss*cos, 155);
}
if(ho2a[n]==290){
for(var ss=1;ss<6;ss++){
setTile(px+ss*sin, py+ss, pz+ss*cos, 0);
setTile(px+ss*sin, py-1, pz+ ss*cos, 155);
}
}
if(ho2a[n]==285){
for(var ss=1;ss<6;ss++)
setTile(px+ss*sin, py-1, pz+ ss*cos, 0);
ESP.antiLack(5);
explode(px+4*sin, py-1, pz+4*cos, 2);
explode(px+7*sin, py-1, pz+7*cos, 2);
}
if(ho3a[n]==295){
for(var gun=3;gun<25;gun++){
setTile(px+gun*sin, py+2, pz+gun*cos, 0);
ESP.antiLack(5);
explode(px+gun*sin, py+2, pz+gun*cos, 1.7);
}
}
if(ho4a[n]==1795){
setTile(px-sin, py+1, pz-cos, 0);
setTile(px-sin, py+3, pz-cos, 0);
setTile(px-2*sin, py+2, pz-2*cos, 0);
setTile(px-3*sin, py+1, pz-3*cos, 0);
for(var ss=3;ss<8;ss++)
setTile(px-ss*sin, py+ss, pz-ss*cos, 0);
setTile(px, py+1, pz, 17, 2);
setTile(px+sin, py+2, pz+cos, 41);
setTile(px, py+2, pz, 41);
setTile(px-sin, py+2, pz-cos, 41);
for(var ss=3;ss<8;ss++)
setTile(px, py+ss, pz, 155);
}
if(ho4a[n]==1790){
setTile(px, py+1, pz, 0);
setTile(px+sin, py+2, pz+cos, 0);
setTile(px, py+2, pz, 0);
setTile(px-sin, py+2, pz-cos, 0);
for(var ss=3;ss<8;ss++)
setTile(px, py+ss, pz, 0);
setTile(px+sin, py+1, pz+cos, 17, 2);
setTile(px+sin, py+3, pz+cos, 41);
setTile(px+2*sin, py+2, pz+2*cos, 41);
setTile(px+3*sin, py+1, pz+3*cos, 41);
for(var ss=3;ss<8;ss++)
setTile(px+ss*sin, py+ss, pz+ss*cos, 155);
}
if(ho4a[n]==1785){
setTile(px, py, pz, 0);
setTile(px+sin, py+1, pz+cos, 0);
setTile(px+sin, py+3, pz+cos, 0);
setTile(px+2*sin, py+2, pz+2*cos, 0);
setTile(px+3*sin, py+1, pz+3*cos, 0);
for(var ss=3;ss<8;ss++)
setTile(px+ss*sin, py+ss, pz+ss*cos, 0);
setTile(px+sin, py-1, pz+cos, 17, 2);
setTile(px+2*sin, py-1, pz+2*cos, 17, 2);
setTile(px+3*sin, py-1, pz+3*cos, 41);
setTile(px+3*sin, py, pz+3*cos, 41);
setTile(px+3*sin, py-2, pz+3*cos, 41);
for(var ss=4;ss<9;ss++)
setTile(px+ss*sin, py-1, pz+ss*cos, 155);
}
if(ho4a[n]==1780){
setTile(px+sin, py-1, pz+cos, 0);
setTile(px+2*sin, py-1, pz+2*cos, 0);
setTile(px+3*sin, py-1, pz+3*cos, 0);
setTile(px+3*sin, py, pz+3*cos, 0);
setTile(px+3*sin, py-2, pz+3*cos, 0);
for(var ss=4;ss<9;ss++)
setTile(px+ss*sin, py-1, pz+ss*cos, 0);
ESP.antiLack(5);
for(var gun=3;gun<20;gun++)
explode(px+2*gun*sin, py+1, pz+2*gun*cos, 3);
explode(hox[n][0]+6, hoy[n]+1, hoz[n][0]+6, 2.5);
explode(hox[n][0]+6, hoy[n]+1, hoz[n][0], 2.5);
explode(hox[n][0]+6, hoy[n]+1, hoz[n][0]-6, 2.5);
explode(hox[n][0], hoy[n]+1, hoz[n][0]+6, 2.5);
explode(hox[n][0], hoy[n]+1, hoz[n][0]-6, 2.5);
explode(hox[n][0]-6, hoy[n]+1, hoz[n][0]+6, 2.5);
explode(hox[n][0]-6, hoy[n]+1, hoz[n][0], 2.5);
explode(hox[n][0]-6, hoy[n]+1, hoz[n][0]-6, 2.5);
}
}}
if(solar[0]!=null){
for(var n=0;n<solar.length;n++){
if(sol2a[n]==295){
for(var gun=3;gun<25;gun++){
setTile(px+gun*sin, py+2, pz+gun*cos, 0);
ESP.antiLack(5);
explode(px+gun*sin, py+2, pz+gun*cos, 1.5);
}
}
if(sol4a[n]==1795){
for(var yy=soly[n]+5;yy<soly[n]+11;yy++)
setTile(solx[n], yy, solz[n], 0);
setTile(solx[n]+1, soly[n]+8, solz[n], 0);
setTile(solx[n]-1, soly[n]+8, solz[n], 0);
for(var yy=soly[n]+1;yy<soly[n]+5;yy++)
setTile(solx[n], yy, solz[n], 41);
setTile(solx[n]+1, soly[n]+5, solz[n], 42);
setTile(solx[n], soly[n]+5, solz[n], 42);
setTile(solx[n]-1, soly[n]+5, solz[n], 42);
setTile(solx[n], soly[n]+6, solz[n], 17);
setTile(solx[n], soly[n]+7, solz[n], 17);
ESP.solarHyperPlus(solar[n], 30);
}
if(sol4a[n]==1645){
for(var yy=soly[n]+1;yy<soly[n]+5;yy++)
setTile(solx[n], yy, solz[n], 0);
setTile(solx[n]+1, soly[n]+5, solz[n], 0);
setTile(solx[n], soly[n]+5, solz[n], 0);
setTile(solx[n]-1, soly[n]+5, solz[n], 0);
setTile(solx[n], soly[n]+6, solz[n], 0);
setTile(solx[n], soly[n]+7, solz[n], 0);
}
}}
if(lunar[0]!=null){
for(var n=0;n<lunar.length;n++){
if(lu2a[n]==295){
for(var gun=3;gun<25;gun++){
setTile(px+gun*sin, py+2, pz+gun*cos, 0);
ESP.antiLack(5);
explode(px+gun*sin, py+2, pz+gun*cos, 1.5);
}
}
if(lu4a[n]==1795){
for(var yy=luy[n]+5;yy<luy[n]+12;yy++)
setTile(lux[n], yy, luz[n], 0);
setTile(lux[n]+1, luy[n]+10, luz[n], 0);
setTile(lux[n]-1, luy[n]+10, luz[n], 0);
setTile(lux[n], luy[n]+10, luz[n]+1, 0);
setTile(lux[n], luy[n]+10, luz[n]-1, 0);
for(var yy=luy[n]+1;yy<luy[n]+6;yy++)
setTile(lux[n], yy, luz[n], 17);
setTile(lux[n], luy[n]+6, luz[n], 155, 1);
setTile(lux[n], luy[n]+7, luz[n], 155, 1);
setTile(lux[n]+1, luy[n]+7, luz[n], 155, 1);
setTile(lux[n]-1, luy[n]+7, luz[n], 155, 1);
setTile(lux[n], luy[n]+7, luz[n]+1, 155, 1);
setTile(lux[n], luy[n]+7, luz[n]-1, 155, 1);
setTile(lux[n], luy[n]+8, luz[n], 155, 1);
ESP.lunarHyperPlus(lunar[n], 30);
}
if(lu4a[n]==1645){
for(var yy=luy[n]+1;yy<luy[n]+9;yy++)
setTile(lux[n], yy, luz[n], 0);
setTile(lux[n]+1, luy[n]+7, luz[n], 0);
setTile(lux[n]-1, luy[n]+7, luz[n], 0);
setTile(lux[n], luy[n]+7, luz[n]+1, 0);
setTile(lux[n], luy[n]+7, luz[n]-1, 0);
}
}}
if(has[0]!=null){
for(var n=0;n<has.length;n++){
if(ha4a[n]==1770){
arroundMobHealthDown(has[n], 20, 5);
}
if(ha4a[n]==1740){
arroundMobHealthDown(has[n], 30, 10);
}
}}
if(zwei[0]!=null){
for(var n=0;n<zwei.length;n++){
if(zw1a[n]==145){
ESP.antiLack(5);
for(var gun=3;gun<20;gun++)
explode(px+gun*sin, py+2, pz+gun*cos, 1.4);
}
if(zw2a[n]==150){
for(var xx=zw2x[n]-1;xx<zw2x[n]+2;xx++){
for(var yy=zw2y[n]+1;yy<zw2y[n]+4;yy++){
for(var zz=zw2z[n]-1;zz<zw2z[n]+2;zz++){
setTile(xx, yy, zw2z[n]+2, 0);
setTile(xx, yy, zw2z[n]-2, 0);
setTile(zw2x[n]+2, yy, zz, 0);
setTile(zw2x[n]-2, yy, zz, 0);
setTile(xx, zw2y[n]+4, zz, 0);
}}}
}
if(zw3a[n]>150){
zw3x[n] = Entity.getX(zwei[n]);
if(Entity.getPitch(zwei[n])==90){
zw3y[n] = Entity.getY(zwei[n])-3;
}
else{
zw3y[n] = Entity.getY(zwei[n])-2;
}
zw3z[n] = Entity.getZ(zwei[n]);
for(var xx=zw3x[n]-2;xx<zw3x[n]+3;xx++){
for(var zz=zw3z[n]-2;zz<zw3z[n]+3;zz++){
if(getTile(xx, zw3y[n]+1, zz)==20){
setTile(xx, zw3y[n]+1, zz, 0);
}
if(getTile(xx, zw3y[n]-1, zz)==20){
setTile(xx, zw3y[n]-1, zz, 0);
}
if(getTile(xx, zw3y[n], zw3z[n]+2)==20){
setTile(xx, zw3y[n], zw3z[n]+2, 0);
}
if(getTile(xx, zw3y[n], zw3z[n]-2)==20){
setTile(xx, zw3y[n], zw3z[n]-2, 0);
}
}}
for(var zz=zw3z[n]-1;zz<zw3z[n]+2;zz++){
if(getTile(zw3x[n]+2, zw3y[n], zz)==20){
setTile(zw3x[n]+2, zw3y[n], zz, 0);
}
if(getTile(zw3x[n]-2, zw3y[n], zz)==20){
setTile(zw3x[n]-2, zw3y[n], zz, 0);
}
for(var xx=zw3x[n]-1;xx<zw3x[n]+2;xx++)
if(getTile(xx, zw3y[n], zz)==0){
setTile(xx, zw3y[n], zz, 20);
}
}
}
if(zw3a[n]==150){
for(var xx=zw3x[n]-2;xx<zw3x[n]+3;xx++)
for(var yy=zw3y[n]-1;yy<zw3y[n]+2;yy++)
for(var zz=zw3z[n]-2;zz<zw3z[n]+3;zz++)
if(getTile(xx, yy, zz)==20){
setTile(xx, yy, zz, 0);
}
zw3b[n] = -1;
}
if(zw3b[n]>0){
zw3b[n]--;
}
if(zw3b[n]==-1){
zw3x[n] = Entity.getX(zwei[n]);
zw3y[n] = Entity.getY(zwei[n])-4;
zw3z[n] = Entity.getZ(zwei[n]);
if(getTile(zw3x[n], zw3y[n]-1, zw3z[n])!=0){
for(var xx=zw3x[n]-1;xx<zw3x[n]+2;xx++)
for(var zz=zw3z[n]-1;zz<zw3z[n]+2;zz++)
if(getTile(xx, zw3y[n]+1, zz)==0){
setTile(xx, zw3y[n]+1, zz, 30);
}
zw3b[n] = 16;
}
}
if(zw3b[n]==1){
for(var xx=zw3x[n]-1;xx<zw3x[n]+2;xx++)
for(var zz=zw3z[n]-1;zz<zw3z[n]+2;zz++)
if(getTile(xx, zw3y[n]+1, zz)==30){
setTile(xx, zw3y[n]+1, zz, 0);
}
}
if(zw4a[n]==1795){
for each(var pos in zw4b[n]){
setTile(pos[0]+1, pos[1]+2, pos[2]+1, 0);
setTile(pos[0]+1, pos[1]+2, pos[2]-1, 0);
setTile(pos[0]-1, pos[1]+2, pos[2]+1, 0);
setTile(pos[0]-1, pos[1]+2, pos[2]-1, 0);
setTile(pos[0], pos[1]+2, pos[2], 79);
}
}
if(zw4a[n]==1790){
ESP.antiLack(5);
for each(var pos in zw4b[n]){
setTile(pos[0], pos[1]+2, pos[2], 0);
explode(pos[0], pos[1]+1, pos[2], 2);
}
}
if(zw4a[n]==900){
zw4b[n] = [];
}
}}
if(deco[0]!=null){
for(var n=0;n<deco.length;n++){
if(dec3a[n]==295){
ESP.antiLack(3)
explode(dec3x[n]+5, dec3y[n]+1, dec3z[n], 3);
explode(dec3x[n], dec3y[n]+1, dec3z[n]-5, 3);
explode(dec3x[n], dec3y[n]+1, dec3z[n]+5, 3);
explode(dec3x[n]-5, dec3y[n]+1, dec3z[n], 3);
for(var xx=dec3x[n]-6;xx<dec3x[n]+7;xx++)
for(var yy=dec3y[n]-1;yy<dec3y[n]+4;yy++)
for(var zz=dec3z[n]-6;zz<dec3z[n]+7;zz++)
if(getTile(xx, yy, zz)==89){
setTile(xx, yy, zz, 0)
}
}
if(dec4a[n]==1785){
ESP.antiLack(90);
}
if(dec4a[n]==1650){
for(var xx=decx[n]-8;xx<decx[n]+9;xx++){
for(var yy=decy[n];yy<decy[n]+6;yy++){
for(var zz=decz[n]-8;zz<decz[n]+9;zz++){
setTile(xx, yy, decz[n]+9, 0);
setTile(xx, yy, decz[n]-9, 0);
setTile(decx[n]+9, yy, zz, 0);
setTile(decx[n]-9, yy, zz, 0);
}}}
}
}}
if(climate[0]!=null){
for(var n=0;n<climate.length;n++){
if(cli4a[n]==900){
for(var xx=clix[n]-12;xx<clix[n]+13;xx++){
for(var yy=cliy[n]-2;yy<cliy[n]+4;yy++){
for(var zz=cliz[n]-12;zz<cliz[n]+13;zz++){
if(getTile(xx, yy, zz)==79) setTile(xx, yy, zz, 9);
else if(getTile(xx, yy+1, zz)==78) setTile(xx, yy+1, zz, 0);
}}}
}
}}
if(raid[0]!=null){
for(var n=0;n<raid.length;n++){
if(rr4a[n]==1350){
Entity.setHealth(rr0[n], Entity.getHealth(rr0[n])-10);
}
}}
if(wind[0]!=null){
for(var n=0;n<wind.length;n++){
if(wi1a[n]==145){
ESP.antiLack(5);
explode(px+9*sin, py+1, pz+9*cos, 2);
}
if(wi1a[n]==140){
ESP.antiLack(5);
explode(px+13*sin, py+1, pz+13*cos, 2);
}
if(wi4a[n]==1790||wi4a[n]==1780||wi4a[n]==1770||wi4a[n]==1760||wi4a[n]==1750||wi4a[n]==1790){
for each(var pp in wi4b[n])
Entity.setHealth(pp, Entity.getHealth(pp)-2);
}
if(wi4a[n]==1350){
wi4b[n] = [];
}
}}
if(energy[0]!=null){
for(var n=0;n<energy.length;n++){
if(en3a[n]==295){
for(var yy=en3y[n]+1;yy<en3y[n]+6;yy++){
setTile(en3x[n]+6, yy, en3z[n]+6, 0);
setTile(en3x[n]+6, yy, en3z[n], 0);
setTile(en3x[n]+6, yy, en3z[n]-6, 0);
setTile(en3x[n], yy, en3z[n]+6, 0);
setTile(en3x[n], yy, en3z[n]-6, 0);
setTile(en3x[n]-6, yy, en3z[n]+6, 0);
setTile(en3x[n]-6, yy, en3z[n], 0);
setTile(en3x[n]-6, yy, en3z[n]-6, 0);
}
ESP.antiLack(5);
explode(en3x[n]+6, en3y[n]+1, en3z[n]+6, 2);
explode(en3x[n]+6, en3y[n]+1, en3z[n], 2);
explode(en3x[n]+6, en3y[n]+1, en3z[n]-6, 2);
explode(en3x[n], en3y[n]+1, en3z[n]+6, 2);
explode(en3x[n], en3y[n]+1, en3z[n]-6, 2);
explode(en3x[n]-6, en3y[n]+1, en3z[n]+6, 2);
explode(en3x[n]-6, en3y[n]+1, en3z[n], 2);
explode(en3x[n]-6, en3y[n]+1, en3z[n]-6, 2);
explode(en3x[n]+6, en3y[n]+3, en3z[n]+6, 2);
explode(en3x[n]+6, en3y[n]+3, en3z[n], 2);
explode(en3x[n]+6, en3y[n]+3, en3z[n]-6, 2);
explode(en3x[n], en3y[n]+3, en3z[n]+6, 2);
explode(en3x[n], en3y[n]+3, en3z[n]-6, 2);
explode(en3x[n]-6, en3y[n]+3, en3z[n]+6, 2);
explode(en3x[n]-6, en3y[n]+3, en3z[n], 2);
explode(en3x[n]-6, en3y[n]+3, en3z[n]-6, 2);
}
if(en4a[n]==1770){
for each(var pp in en4b[n])
Entity.setHealth(pp, Entity.getHealth(pp)-5);
}
if(en4a[n]==1350){
en4b = [];
}
}}
if(geno[0]!=null){
for(var n=0;n<geno.length;n++){
if(g2a[n]==150){
for(var xx=g2x[n]-1;xx<g2x[n]+2;xx++){
for(var yy=g2y[n]+1;yy<g2y[n]+4;yy++){
for(var zz=g2z[n]-1;zz<g2z[n]+2;zz++){
setTile(xx, yy, g2z[n]+2, 0);
setTile(xx, yy, g2z[n]-2, 0);
setTile(g2x[n]+2, yy, zz, 0);
setTile(g2x[n]-2, yy, zz, 0);
setTile(xx, g2y[n]+4, zz, 0);
}}}
}
}}
if(server[0]!=null){
for(var n=0;n<server.length;n++){
if(se4a[n]>1350){
teleport(se4b[n], Entity.getX(ad), -5, Entity.getZ(ad));
}
if(se4a[n]==1350){
teleport(se4b[n], sex[n], sey[n]+1.5, sez[n]);
Entity.setHealth(se4b[n], se4c[n]);
}
}}
if(rgun[0]!=null){
for(var n=0;n<rgun.length;n++){
if(rg1a[n]==147){
setTile(px+3*sin, py+2, pz+3*cos, 0);
setTile(px+4*sin, py+2, pz+4*cos, 0);
setTile(px+5*sin, py+2, pz+5*cos, 89);
setTile(px+6*sin, py+2, pz+6*cos, 89);
}
if(rg1a[n]==144){
setTile(px+5*sin, py+2, pz+5*cos, 0);
setTile(px+6*sin, py+2, pz+6*cos, 0);
setTile(px+7*sin, py+2, pz+7*cos, 89);
setTile(px+8*sin, py+2, pz+8*cos, 89);
}
if(rg1a[n]==141){
setTile(px+7*sin, py+2, pz+7*cos, 0);
setTile(px+8*sin, py+2, pz+8*cos, 0);
ESP.antiLack(5);
explode(px+7*sin, py+2, pz+7*cos, 2);
explode(px+9*sin, py+2, pz+9*cos, 2);
}
if(rg2a[n]==295){
for(var yy=py+1;yy<py+9;yy++)
setTile(px, yy, pz, 0);
setTile(px+sin, py+1, pz+cos, 15);
setTile(px+2*sin, py+2, pz+2*cos, 15);
setTile(px+3*sin, py+3, pz+3*cos, 15);
setTile(px+4*sin, py+4, pz+4*cos, 15);
setTile(px+5*sin, py+5, pz+5*cos, 15);
setTile(px+6*sin, py+6, pz+6*cos, 15);
setTile(px+7*sin, py+7, pz+7*cos, 15);
setTile(px+8*sin, py+8, pz+8*cos, 15);
}
if(rg2a[n]==290){
setTile(px+sin, py+1, pz+cos, 0);
setTile(px+2*sin, py+2, pz+2*cos, 0);
setTile(px+3*sin, py+3, pz+3*cos, 0);
setTile(px+4*sin, py+4, pz+4*cos, 0);
setTile(px+5*sin, py+5, pz+5*cos, 0);
setTile(px+6*sin, py+6, pz+6*cos, 0);
setTile(px+7*sin, py+7, pz+7*cos, 0);
setTile(px+8*sin, py+8, pz+8*cos, 0);
for(var gun=2;gun<10;gun++)
setTile(px+gun*sin, py-1, pz+gun*cos, 15);
}
if(rg2a[n]==285){
for(var gun=2;gun<10;gun++)
setTile(px+gun*sin, py-1, pz+gun*cos, 0);
ESP.antiLack(5);
explode(px+11*sin, py-1, pz+11*cos, 2);
explode(px+9*sin, py-1, pz+9*cos, 2);
explode(px+7*sin, py-1, pz+7*cos, 1.5);
explode(px+5*sin, py-1, pz+5*cos, 1.5);
}
if(rg3a[n]==297){
setTile(rg3x[n]+2, rg3y[n]+1, rg3z[n]+2, 0);
setTile(rg3x[n]+2, rg3y[n]+1, rg3z[n], 0);
setTile(rg3x[n]+2, rg3y[n]+1, rg3z[n]-2, 0);
setTile(rg3x[n], rg3y[n]+1, rg3z[n]+2, 0);
setTile(rg3x[n], rg3y[n]+1, rg3z[n]-2, 0);
setTile(rg3x[n]-2, rg3y[n]+1, rg3z[n]+2, 0);
setTile(rg3x[n]-2, rg3y[n]+1, rg3z[n], 0);
setTile(rg3x[n]-2, rg3y[n]+1, rg3z[n]-2, 0);
setTile(rg3x[n]+4, rg3y[n]+1, rg3z[n]+4, 89);
setTile(rg3x[n]+4, rg3y[n]+1, rg3z[n], 89);
setTile(rg3x[n]+4, rg3y[n]+1, rg3z[n]-4, 89);
setTile(rg3x[n], rg3y[n]+1, rg3z[n]+4, 89);
setTile(rg3x[n], rg3y[n]+1, rg3z[n]-4, 89);
setTile(rg3x[n]-4, rg3y[n]+1, rg3z[n]+4, 89);
setTile(rg3x[n]-4, rg3y[n]+1, rg3z[n], 89);
setTile(rg3x[n]-4, rg3y[n]+1, rg3z[n]-4, 89);
}
if(rg3a[n]==294){
setTile(rg3x[n]+4, rg3y[n]+1, rg3z[n]+4, 0);
setTile(rg3x[n]+4, rg3y[n]+1, rg3z[n], 0);
setTile(rg3x[n]+4, rg3y[n]+1, rg3z[n]-4, 0);
setTile(rg3x[n], rg3y[n]+1, rg3z[n]+4, 0);
setTile(rg3x[n], rg3y[n]+1, rg3z[n]-4, 0);
setTile(rg3x[n]-4, rg3y[n]+1, rg3z[n]+4, 0);
setTile(rg3x[n]-4, rg3y[n]+1, rg3z[n], 0);
setTile(rg3x[n]-4, rg3y[n]+1, rg3z[n]-4, 0);
setTile(rg3x[n]+6, rg3y[n]+1, rg3z[n]+6, 89);
setTile(rg3x[n]+6, rg3y[n]+1, rg3z[n], 89);
setTile(rg3x[n]+6, rg3y[n]+1, rg3z[n]-6, 89);
setTile(rg3x[n], rg3y[n]+1, rg3z[n]+6, 89);
setTile(rg3x[n], rg3y[n]+1, rg3z[n]-6, 89);
setTile(rg3x[n]-6, rg3y[n]+1, rg3z[n]+6, 89);
setTile(rg3x[n]-6, rg3y[n]+1, rg3z[n], 89);
setTile(rg3x[n]-6, rg3y[n]+1, rg3z[n]-6, 89);
}
if(rg3a[n]==291){
setTile(rg3x[n]+6, rg3y[n]+1, rg3z[n]+6, 0);
setTile(rg3x[n]+6, rg3y[n]+1, rg3z[n], 0);
setTile(rg3x[n]+6, rg3y[n]+1, rg3z[n]-6, 0);
setTile(rg3x[n], rg3y[n]+1, rg3z[n]+6, 0);
setTile(rg3x[n], rg3y[n]+1, rg3z[n]-6, 0);
setTile(rg3x[n]-6, rg3y[n]+1, rg3z[n]+6, 0);
setTile(rg3x[n]-6, rg3y[n]+1, rg3z[n], 0);
setTile(rg3x[n]-6, rg3y[n]+1, rg3z[n]-6, 0);
ESP.antiLack(5);
explode(rg3x[n]+6, rg3y[n]+1, rg3z[n]+6, 3);
explode(rg3x[n]+6, rg3y[n]+1, rg3z[n], 3);
explode(rg3x[n]+6, rg3y[n]+1, rg3z[n]-6, 3);
explode(rg3x[n], rg3y[n]+1, rg3z[n]+6, 3);
explode(rg3x[n], rg3y[n]+1, rg3z[n]-6, 3);
explode(rg3x[n]-6, rg3y[n]+1, rg3z[n]+6, 3);
explode(rg3x[n]-6, rg3y[n]+1, rg3z[n], 3);
explode(rg3x[n]-6, rg3y[n]+1, rg3z[n]-6, 3);
}
if(rg4a[n]==1795){
ESP.antiLack(5);
explode(px+5*sin, py+2, pz+5*cos, 3);
for(var gun=3;gun<31;gun++)
explode(px+2*gun*sin, py+2, pz+2*gun*cos, 3.5);
for(var gun=3;gun<11;gun++)
explode(px-gun*sin, py+2, pz-gun*cos, 1.7);
}
}}
if(copy[0]!=null){
for(var n=0;n<copy.length;n++){
if(co2a[n]>150){
var cyaw, cpitch, csin, ccos, ctan, cpcos;
co2x[n] = Entity.getX(copy[n]);
co2y[n] = Entity.getY(copy[n]);
co2z[n] = Entity.getZ(copy[n]);
cyaw = Math.floor(Entity.getYaw(copy[n]));
cpitch = Math.floor(Entity.getPitch(copy[n]));
csin = -Math.sin(cyaw/180*Math.PI);
ccos = Math.cos(cyaw/180*Math.PI);
ctan = -Math.sin(cpitch/180*Math.PI);
cpcos = Math.cos(cpitch/180*Math.PI);
for(var gun=3;gun<30;gun++){
if(getTile(co2x[n]+gun*csin*cpcos, co2y[n]+gun*ctan, co2z[n]+gun*ccos*cpcos)!=0&&getTile(co2x[n]+gun*csin*cpcos, co2y[n]+gun*ctan+1, co2z[n]+gun*ccos*cpcos)==0){
setTile(co2x[n]+gun*csin*cpcos, co2y[n]+gun*ctan+1, co2z[n]+gun*ccos*cpcos, 51);
break;
}
}
}
if(co3a[n]==150){
teleport(co3b[n], co3x[n], co3y[n]+1, co3z[n]);
}
if(co4a[n]==1795){
ESP.antiLack(5);
explode(cox[n]+4, coy[n]+1, coz[n]+4, 2);
explode(cox[n]+5, coy[n]+1, coz[n], 2);
explode(cox[n]+4, coy[n]+1, coz[n]-4, 2);
explode(cox[n], coy[n]+1, coz[n]+5, 2);
explode(cox[n], coy[n]+1, coz[n]-5, 2);
explode(cox[n]-4, coy[n]+1, coz[n]+4, 2);
explode(cox[n]-5, coy[n]+1, coz[n], 2);
explode(cox[n]-4, coy[n]+1, coz[n]-4, 2);
}
if(co4a[n]==1790){
explode(cox[n]+7, coy[n]+1, coz[n]+7, 3);
explode(cox[n]+9, coy[n]+1, coz[n], 3);
explode(cox[n]+7, coy[n]+1, coz[n]-7, 3);
explode(cox[n], coy[n]+1, coz[n]+9, 3);
explode(cox[n], coy[n]+1, coz[n]-9, 3);
explode(cox[n]-7, coy[n]+1, coz[n]+7, 3);
explode(cox[n]-9, coy[n]+1, coz[n], 3);
explode(cox[n]-7, coy[n]+1, coz[n]-7, 3);
}
if(co4a[n]==1785){
for(var xx=cox[n]-13;xx<cox[n]+14;xx++)
for(var yy=coy[n]-4;yy<coy[n]+1;yy++)
for(var zz=coz[n]-13;zz<coz[n]+14;zz++)
if(getTile(xx, yy, zz)==0){
setTile(xx, yy, zz, 51);
}
}
if(co4a[n]==1780){
arroundMobFireTicks(copy[n], 15, 20);
}
if(co4a[n]==1765){
ESP.removeSusanoo(cox[n], coz[n], coy[n]);
}
}}
if(dragon[0]!=null){
for(var n=0;n<dragon.length;n++){
if(dr2a[n]==295){
ESP.antiLack(5);
for(var gun=3;gun<25;gun++){
setTile(px+gun*sin, py+1, pz+gun*cos, 0);
explode(px+gun*sin, py+2, pz+gun*cos, 1.4);
}
}
if(dr4a[n]==1795){
for(var xx=drx[n]-5;xx<drx[n]+6;xx++)
for(var zz=drz[n]-5;zz<drz[n]+6;zz++)
setTile(xx, dry[n]+9, zz, 35, 10);
}
if(dr4a[n]==1790){
for(var xx=drx[n]-8;xx<drx[n]+9;xx++)
for(var zz=drz[n]-8;zz<drz[n]+9;zz++)
setTile(xx, dry[n]+9, zz, 35, 10);
}
if(dr4a[n]==1785){
for(var xx=drx[n]-11;xx<drx[n]+12;xx++)
for(var zz=drz[n]-11;zz<drz[n]+12;zz++)
setTile(xx, dry[n]+9, zz, 35, 10);
}
if(dr4a[n]==1780){
for(var yy=dry[n]+1;yy<dry[n]+9;yy++){
setTile(drx[n]+7, yy, drz[n]+7, 89);
setTile(drx[n]+7, yy, drz[n], 89);
setTile(drx[n]+7, yy, drz[n]-7, 89);
setTile(drx[n], yy, drz[n]+7, 89);
setTile(drx[n], yy, drz[n]-7, 89);
setTile(drx[n]-7, yy, drz[n]+7, 89);
setTile(drx[n]-7, yy, drz[n], 89);
setTile(drx[n]-7, yy, drz[n]-7, 89);
}
}
if(dr4a[n]==1775){
for(var yy=dry[n]+1;yy<dry[n]+9;yy++){
setTile(drx[n]+7, yy, drz[n]+7, 0);
setTile(drx[n]+7, yy, drz[n], 0);
setTile(drx[n]+7, yy, drz[n]-7, 0);
setTile(drx[n], yy, drz[n]+7, 0);
setTile(drx[n], yy, drz[n]-7, 0);
setTile(drx[n]-7, yy, drz[n]+7, 0);
setTile(drx[n]-7, yy, drz[n], 0);
setTile(drx[n]-7, yy, drz[n]-7, 0);
}
ESP.antiLack(5);
explode(drx[n]+7, dry[n]+1, drz[n]+7, 3);
explode(drx[n]+7, dry[n]+1, drz[n], 3);
explode(drx[n]+7, dry[n]+1, drz[n]-7, 3);
explode(drx[n], dry[n]+1, drz[n]+7, 3);
explode(drx[n], dry[n]+1, drz[n]-7, 3);
explode(drx[n]-7, dry[n]+1, drz[n]+7, 3);
explode(drx[n]-7, dry[n]+1, drz[n], 3);
explode(drx[n]-7, dry[n]+1, drz[n]-7, 3);
explode(drx[n]+7, dry[n]+3, drz[n]+7, 2);
explode(drx[n]+7, dry[n]+3, drz[n], 2);
explode(drx[n]+7, dry[n]+3, drz[n]-7, 2);
explode(drx[n], dry[n]+3, drz[n]+7, 2);
explode(drx[n], dry[n]+3, drz[n]-7, 2);
explode(drx[n]-7, dry[n]+3, drz[n]+7, 2);
explode(drx[n]-7, dry[n]+3, drz[n], 2);
explode(drx[n]-7, dry[n]+3, drz[n]-7, 2);
}
if(dr4a[n]==1760){
for(var xx=drx[n]-11;xx<drx[n]+12;xx++)
for(var zz=drz[n]-11;zz<drz[n]+12;zz++)
setTile(xx, dry[n]+9, zz, 0);
}
}}
if(hawk[0]!=null){
for(var n=0;n<hawk.length;n++){
if(hw2a[n]>150&&(hw2a[n]%5)==0){
var hyaw, hpitch, hsin, hcos, htan, ypcos;
hwxa[n] = Entity.getX(hawk[n]);
hwya[n] = Entity.getY(hawk[n]);
hwza[n] = Entity.getZ(hawk[n]);
hyaw = Math.floor(Entity.getYaw(hawk[n]));
hpitch = Math.floor(Entity.getPitch(hawk[n]));
hsin = -Math.sin(hyaw/180*Math.PI);
hcos = Math.cos(hyaw/180*Math.PI);
htan = -Math.sin(hpitch/180*Math.PI);
hpcos = Math.cos(hpitch/180*Math.PI);
for(var gun=3;gun<30;gun++){
if(getTile(hwxa[n]+gun*hsin*hpcos, hwya[n]+gun*htan, hwza[n]+gun*hcos*hpcos)!=0&&getTile(hwza[n]+gun*hsin*hpcos, hwya[n]+gun*htan+1, hwza[n]+gun*hcos*hpcos)==0){
setTile(hwxa[n]+gun*hsin*hpcos, hwya[n]+gun*htan+1, hwza[n]+gun*hcos*hpcos, 8);
hw2x[n].push(hwxa[n]+gun*hsin*hpcos);
hw2y[n].push(hwya[n]+gun*htan+1);
hw2z[n].push(hwza[n]+gun*hcos*hpcos);
break;
}
}
}
if(hw2a[n]==75){
for(var nn in hw2x[n]){
for(var xx=hw2x[n][nn]-2;xx<hw2x[n][nn]+3;xx++)
for(var zz=hw2z[n][nn]-2;zz<hw2z[n][nn]+3;zz++)
if(getTile(xx, hw2y[n][nn], zz)==8||getTile(xx, hw2y[n][nn], zz)==9){
setTile(xx, hw2y[n][nn], zz, 0);
}
}
}
if(hw2a[n]==30){
hw2x[n] = [];
hw2y[n] = [];
hw2z[n] = [];
}
if(hw4a[n]==1795){
ESP.antiLack(5);
explode(hwx[n]+4, hwy[n]+1, hwz[n]+4, 2);
explode(hwx[n]+5, hwy[n]+1, hwz[n], 2);
explode(hwx[n]+4, hwy[n]+1, hwz[n]-4, 2);
explode(hwx[n], hwy[n]+1, hwz[n]+5, 2);
explode(hwx[n], hwy[n]+1, hwz[n]-5, 2);
explode(hwx[n]-4, hwy[n]+1, hwz[n]+4, 2);
explode(hwx[n]-5, hwy[n]+1, hwz[n], 2);
explode(hwx[n]-4, hwy[n]+1, hwz[n]-4, 2);
}
if(hw4a[n]==1790){
explode(hwx[n]+7, hwy[n]+1, hwz[n]+7, 3);
explode(hwx[n]+9, hwy[n]+1, hwz[n], 3);
explode(hwx[n]+7, hwy[n]+1, hwz[n]-7, 3);
explode(hwx[n], hwy[n]+1, hwz[n]+9, 3);
explode(hwx[n], hwy[n]+1, hwz[n]-9, 3);
explode(hwx[n]-7, hwy[n]+1, hwz[n]+7, 3);
explode(hwx[n]-9, hwy[n]+1, hwz[n], 3);
explode(hwx[n]-7, hwy[n]+1, hwz[n]-7, 3);
}
if(hw4a[n]==1785){
for(var xx=hwx[n]-13;xx<hwx[n]+14;xx++)
for(var yy=hwy[n]-4;yy<hwy[n]+1;yy++)
for(var zz=hwz[n]-13;zz<hwz[n]+14;zz++)
if(getTile(xx, yy, zz)==0){
setTile(xx, yy, zz, 9);
}
}
if(hw4a[n]==1780){
arroundMobHealthDown(hawk[n], 15, 10);
}
if(hw4a[n]==1765){
ESP.removeSusanoo(hwx[n], hwy[n], hwz[n]);
}
}}
if(solid[0]!=null){
for(var n=0;n<solid.length;n++){
if(sd4a[n]==1770){
ESP.antiLack(5);
for(var nn=0;nn<sdx[n].length;nn++){
for(var xx=sdx[n][nn]-1;xx<sdx[n][nn]+2;xx++)
for(var yy=sdy[n][nn]+1;yy<sdy[n][nn]+4;yy++)
for(var zz=sdz[n][nn]-1;zz<sdz[n][nn]+2;zz++)
setTile(xx, yy, zz, 0);
explode(sdx[n][nn], sdy[n][nn]+2.3, sdz[n][nn], 2);
}
}
if(sd4a[n]==1740){
sdx[n] = [];
sdy[n] = [];
sdz[n] = [];
}
if(sd2a[n]==900){
sd2x[n] = [];
sd2y[n] = [];
sd2z[n] = [];
}
}}
if(gravity[0]!=null){
for(var n=0;n<gravity.length;n++){
if(!(gr1b[n]==7||gr1b[n]==95)){
if(gr1a[n]==147){
setTile(gr1x[n], gr1y[n]+1, gr1z[n], 0);
setTile(gr1x[n], gr1y[n]+2, gr1z[n], gr1b[n], gr1c[n]);
}
if(gr1a[n]==144){
setTile(gr1x[n], gr1y[n]+2, gr1z[n], 0);
setTile(gr1x[n], gr1y[n]+3, gr1z[n], gr1b[n], gr1c[n]);
}
if(gr1a[n]==141){
setTile(gr1x[n], gr1y[n]+3, gr1z[n], 0);
ESP.antiLack(5);
explode(gr1x[n], gr1y[n]+3, gr1z[n], 2.5);
}
}
if(gr4a[n]==1795){
setTile(grx[n]+7, gry[n]+2, grz[n]+7, 2);
setTile(grx[n]+7, gry[n]+2, grz[n], 2);
setTile(grx[n]+7, gry[n]+2, grz[n]-7, 2);
setTile(grx[n], gry[n]+2, grz[n]+7, 2);
setTile(grx[n], gry[n]+2, grz[n]-7, 2);
setTile(grx[n]-7, gry[n]+2, grz[n]+7, 2);
setTile(grx[n]-7, gry[n]+2, grz[n], 2);
setTile(grx[n]-7, gry[n]+2, grz[n]-7, 2);
setTile(grx[n]+7, gry[n]+1, grz[n]+7, 0);
setTile(grx[n]+7, gry[n]+1, grz[n], 0);
setTile(grx[n]+7, gry[n]+1, grz[n]-7, 0);
setTile(grx[n], gry[n]+1, grz[n]+7, 0);
setTile(grx[n], gry[n]+1, grz[n]-7, 0);
setTile(grx[n]-7, gry[n]+1, grz[n]+7, 0);
setTile(grx[n]-7, gry[n]+1, grz[n], 0);
setTile(grx[n]-7, gry[n]+1, grz[n]-7, 0);
}
if(gr4a[n]==1790){
setTile(grx[n]+7, gry[n]+3, grz[n]+7, 2);
setTile(grx[n]+7, gry[n]+3, grz[n], 2);
setTile(grx[n]+7, gry[n]+3, grz[n]-7, 2);
setTile(grx[n], gry[n]+3, grz[n]+7, 2);
setTile(grx[n], gry[n]+3, grz[n]-7, 2);
setTile(grx[n]-7, gry[n]+3, grz[n]+7, 2);
setTile(grx[n]-7, gry[n]+3, grz[n], 2);
setTile(grx[n]-7, gry[n]+3, grz[n]-7, 2);
setTile(grx[n]+7, gry[n]+2, grz[n]+7, 0);
setTile(grx[n]+7, gry[n]+2, grz[n], 0);
setTile(grx[n]+7, gry[n]+2, grz[n]-7, 0);
setTile(grx[n], gry[n]+2, grz[n]+7, 0);
setTile(grx[n], gry[n]+2, grz[n]-7, 0);
setTile(grx[n]-7, gry[n]+2, grz[n]+7, 0);
setTile(grx[n]-7, gry[n]+2, grz[n], 0);
setTile(grx[n]-7, gry[n]+2, grz[n]-7, 0);
}
if(gr4a[n]==1785){
for(var xx=grx[n]-9;xx<grx[n]+10;xx++)
for(var zz=grz[n]-9;zz<grz[n]+10;zz++)
setTile(xx, gry[n], zz, 0);
arroundMobHealthDown(gravity[n], 9, 3);
}
if(gr4a[n]==1780){
ESP.antiLack(5);
explode(grx[n]+7, gry[n]+1, grz[n]+7, 2.5);
explode(grx[n]+7, gry[n]+1, grz[n], 2.5);
explode(grx[n]+7, gry[n]+1, grz[n]-7, 2.5);
explode(grx[n], gry[n]+1, grz[n]+7, 2.5);
explode(grx[n], gry[n]+1, grz[n]-7, 2.5);
explode(grx[n]-7, gry[n]+1, grz[n]+7, 2.5);
explode(grx[n]-7, gry[n]+1, grz[n], 2.5);
explode(grx[n]-7, gry[n]+1, grz[n]-7, 2.5);
explode(grx[n]+7, gry[n]+3, grz[n]+7, 2.5);
explode(grx[n]+7, gry[n]+3, grz[n], 2.5);
explode(grx[n]+7, gry[n]+3, grz[n]-7, 2.5);
explode(grx[n], gry[n]+3, grz[n]+7, 2.5);
explode(grx[n], gry[n]+3, grz[n]-7, 2.5);
explode(grx[n]-7, gry[n]+3, grz[n]+7, 2.5);
explode(grx[n]-7, gry[n]+3, grz[n], 2.5);
explode(grx[n]-7, gry[n]+3, grz[n]-7, 2.5);
}
}}
if(hass[0]!=null){
for(var n=0;n<has.length;n++){
if(hass4a[n]==1770){
for(var nn=0;nn<hass4b[n].length;nn++)
Entity.setHealth(hass4b[n][nn], Entity.getHealth(hass4b[n][nn])-10);
}
if(hass4a[n]==1350){
for(var nn=0;nn<hass4b[n].length;nn++)
Entity.setHealth(hass4b[n][nn], Entity.getHealth(hass4b[n][nn])-5);
}
if(hass4a[n]==1320){
hass4b[n] = [];
}
}}
if(sikill[0]!=null){
for(var n=0;n<sikill.length;n++){
if(sk2a[n]==255){
Entity.setHealth(sk2b[n], Entity.getHealth(sk2b[n])-6);
}
}}
if(black[0]!=null){
for(var n=0;n<black.length;n++){
if(bl1a[n]==145){
for(var yy=py+1;yy<py+8;yy++)
setTile(px, yy, pz, 0);
setTile(px+sin, py+1, pz+cos, 49);
setTile(px+2*sin, py+2, pz+2*cos, 49);
setTile(px+3*sin, py+3, pz+3*cos, 49);
setTile(px+4*sin, py+4, pz+4*cos, 49);
setTile(px+5*sin, py+5, pz+5*cos, 49);
setTile(px+6*sin, py+6, pz+6*cos, 49);
setTile(px+7*sin, py+7, pz+7*cos, 49);
setTile(px+8*sin, py+8, pz+8*cos, 49);
}
if(bl1a[n]==140){
setTile(px+sin, py+1, pz+cos, 0);
setTile(px+2*sin, py+2, pz+2*cos, 0);
setTile(px+3*sin, py+3, pz+3*cos, 0);
setTile(px+4*sin, py+4, pz+4*cos, 0);
setTile(px+5*sin, py+5, pz+5*cos, 0);
setTile(px+6*sin, py+6, pz+6*cos, 0);
setTile(px+7*sin, py+7, pz+7*cos, 0);
setTile(px+8*sin, py+8, pz+8*cos, 0);
for(var gun=2;gun<9;gun++)
setTile(px+gun*sin, py-1, pz+gun*cos, 49);
setTile(px+9*sin, py-1, pz+9*cos, 49);
}
if(bl1a[n]==135){
for(var gun=2;gun<10;gun++)
setTile(px+gun*sin, py-1, pz+gun*cos, 0);
ESP.antiLack(5);
explode(px+9*sin, py-1, pz+9*cos, 2);
explode(px+7*sin, py-1, pz+7*cos, 1.5);
explode(px+5*sin, py-1, pz+5*cos, 1.5);
}
if(bl2a[n]==295){
for(var gun=3;gun<25;gun++){
setTile(px+gun*sin, py+2, pz+gun*cos, 0);
explode(px+gun*sin, py+2, pz+gun*cos, 1.4);
}
}
if(bl3a[n]==295){
ESP.antiLack(5);
for(var gun=3;gun<12;gun++){
setTile(px+gun*sin, py+2, pz+gun*cos, 0);
setTile(px-gun*sin, py+2, pz-gun*cos, 0);
explode(px+gun*sin, py+2, pz+gun*cos, 1.5);
explode(px-gun*sin, py+2, pz-gun*cos, 1.5);
}
}
if(bl4a[n]==1795){
for(var bl4b=3;bl4b<17;bl4b++){
setTile(blx[n]+bl4b, bly[n]+2, blz[n]+bl4b, 0);
setTile(blx[n]+bl4b, bly[n]+2, blz[n], 0);
setTile(blx[n]+bl4b, bly[n]+2, blz[n]-bl4b, 0);
setTile(blx[n], bly[n]+2, blz[n]+bl4b, 0);
setTile(blx[n], bly[n]+2, blz[n]-bl4b, 0);
setTile(blx[n]-bl4b, bly[n]+2, blz[n]+bl4b, 0);
setTile(blx[n]-bl4b, bly[n]+2, blz[n], 0);
setTile(blx[n]-bl4b, bly[n]+2, blz[n]-bl4b, 0);
}
}
if(bl4a[n]==1790){
ESP.antiLack(5);
for(var bl4b=2;bl4b<9;bl4b++){
explode(blx[n]+2*bl4b, bly[n]+1, blz[n]+2*bl4b, 1.8);
explode(blx[n]+2*bl4b, bly[n]+1, blz[n], 1.8);
explode(blx[n]+2*bl4b, bly[n]+1, blz[n]-2*bl4b, 1.8);
explode(blx[n], bly[n]+1, blz[n]+2*bl4b, 1.8);
explode(blx[n], bly[n]+1, blz[n]-2*bl4b, 1.8);
explode(blx[n]-2*bl4b, bly[n]+1, blz[n]+2*bl4b, 1.8);
explode(blx[n]-2*bl4b, bly[n]+1, blz[n], 1.8);
explode(blx[n]-2*bl4b, bly[n]+1, blz[n]-2*bl4b, 1.8);
}
}
if(bl3a[n]==295){
ESP.antiLack(5);
for(var gun=3;gun<12;gun++){
setTile(px+gun*sin, py+2, pz+gun*cos, 0);
setTile(px-gun*sin, py+2, pz-gun*cos, 0);
explode(px+gun*sin, py+2, pz+gun*cos, 1.4);
explode(px-gun*sin, py+2, pz-gun*cos, 1.4);
}
}
}}
if(slash[0]!=null){
for(var n=0;n<slash.length;n++){
if(sl4a[n]==1795){
explode(slx+6, sly+1, slz+6, 3);
explode(slx+6, sly+1, slz-6, 3);
explode(slx-6, sly+1, slz+6, 3);
explode(slx-6, sly+1, slz-6, 3);
}
if(sl4a[n]==1790){
arroundMobHealthDown(slash[n], 15, 5);
}
}}
if(night[0]!=null){
for(var n=0;n<night.length;n++){
if(ni2a[n]==295){
setTile(px, py+1, pz, 0);
ESP.antiLack(5);
explode(px, py+1, pz, 2);
}
if(ni4a[n]==900){
Level.setTime(700);
}
}}
if(dra[0]!=null){
for(var n=0;n<dra.length;n++){
if(dc4a[n]==1785){
Entity.setHealth(dc4c[n], Entity.getHealth(dc4c[n])-5);
}
if(dc4a[n]==1770){
Entity.setHealth(dc4c[n], Entity.getHealth(dc4c[n])-5);
}
if(dc4a[n]==1350){
Entity.setHealth(dc4c[n], Entity.getHealth(dc4c[n])-8);
}
}}
if(amage[0]!=null){
for(var n=0;n<amage.length;n++){
if(am2a[n]==295){
for(var gun=3;gun<25;gun++)
explode(px+gun*sin, py+2, pz+gun*cos, 1.5);
}
if(am4a[n]==1785){
for(var xx=amx[n]-12;xx<amx[n]+13;xx++)
for(var zz=amz[n]-12;zz<amz[n]+13;zz++)
setTile(xx, amy[n]-1, zz, 0);
}
if(am4a[n]==1770){
for(var xx=amx[n]-12;xx<amx[n]+13;xx++)
for(var zz=amz[n]-12;zz<amz[n]+13;zz++)
setTile(xx, amy[n]-2, zz, 51);
}
}}
if(puella[0]!=null){
for(var n=0;n<puella.length;n++){
if(pm3a[n]>150){
pmx[n] = Entity.getX(puella[n]);
if(Entity.getPitch(puella[n])==90){
pmy[n] = Entity.getY(puella[n])-3;
}
else{
pmy[n] = Entity.getY(puella[n])-2;
}
pmz[n] = Entity.getZ(puella[n]);
for(var xx=pmx[n]-2;xx<pmx[n]+3;xx++){
for(var zz=pmz[n]-2;zz<pmz[n]+3;zz++){
if(getTile(xx, pmy[n]+1, zz)==20){
setTile(xx, pmy[n]+1, zz, 0);
}
if(getTile(xx, pmy[n]-1, zz)==20){
setTile(xx, pmy[n]-1, zz, 0);
}
if(getTile(xx, pmy[n], pmz[n]+2)==20){
setTile(xx, pmy[n], pmz[n]+2, 0);
}
if(getTile(xx, pmy[n], pmz[n]-2)==20){
setTile(xx, pmy[n], pmz[n]-2, 0);
}
}}
for(var zz=pmz[n]-1;zz<pmz[n]+2;zz++){
if(getTile(pmx[n]+2, pmy[n], zz)==20){
setTile(pmx[n]+2, pmy[n], zz, 0);
}
if(getTile(pmx[n]-2, pmy[n], zz)==20){
setTile(pmx[n]-2, pmy[n], zz, 0);
}
for(var xx=pmx[n]-1;xx<pmx[n]+2;xx++)
if(getTile(xx, pmy[n], zz)==0){
setTile(xx, pmy[n], zz, 20);
}
}
}
if(pm3a[n]==150){
for(var xx=pmx[n]-2;xx<pmx[n]+3;xx++)
for(var yy=pmy[n]-1;yy<pmy[n]+2;yy++)
for(var zz=pmz[n]-2;zz<pmz[n]+3;zz++)
if(getTile(xx, yy, zz)==20){
setTile(xx, yy, zz, 0);
}
pm3b[n] = -1;
}
if(pm3b[n]>0){
pm3b[n]--;
}
if(pm3b[n]==-1){
pmx[n] = Entity.getX(puella[n]);
pmy[n] = Entity.getY(puella[n])-4;
pmz[n] = Entity.getZ(puella[n]);
if(getTile(pmx[n], pmy[n]-1, pmz[n])!=0){
for(var xx=pmx[n]-1;xx<pmx[n]+2;xx++)
for(var zz=pmz[n]-1;zz<pmz[n]+2;zz++)
if(getTile(xx, pmy[n]+1, zz)==0){
setTile(xx, pmy[n]+1, zz, 30);
}
pm3b[n] = 16;
}
}
if(pm3b[n]==1){
for(var xx=pmx[n]-1;xx<pmx[n]+2;xx++)
for(var zz=pmz[n]-1;zz<pmz[n]+2;zz++)
if(getTile(xx, pmy[n]+1, zz)==30){
setTile(xx, pmy[n]+1, zz, 0);
}
}
}}
if(scalar[0]!=null){
for(var n=0;n<scalar.length;n++){
if(sc3a[n]>150){
var scyaw, scsin, sccos;
sc3x[n] = Entity.getX(scalar[n]);
sc3y[n] = Entity.getY(scalar[n])-1;
sc3z[n] = Entity.getZ(scalar[n]);
scyaw = Math.floor(Entity.getYaw(scalar[n]));
scsin = -Math.sin(scyaw/180*Math.PI);
sccos = Math.cos(scyaw/180*Math.PI);
if(getTile(sc3x[n]-2*scsin, sc3y[n], sc3z[n]-2*sccos)==0){
setTile(sc3x[n]-2*scsin, sc3y[n], sc3z[n]-2*sccos, 51);
}
}
if(sc4a[n]==1795){
ESP.antiLack(5);
for(var nn=0;nn<scx[n].length;nn++)
explode(scx[n][nn], scy[n][nn]+0.6, scz[n][nn], 2);
}
if(sc4a[n]==1350){
scx[n] = [];
scy[n] = [];
scz[n] = [];
}
}}
if(vector[0]!=null){
for(var n=0;n<vector.length;n++){
if(v1a[n]==145){
explode(v1x[n]+1.5*vxa[n], v1y[n]+1.2, v1z[n]+1.5*vza[n], 2.5);
}
if(v1a[n]==140){
ESP.antiLack(5);
explode(v1x[n]+3*vxa[n], v1y[n]+1.2, v1z[n]+3*vza[n], 2.5);
}
if(v3b[n]<25&&v3a[n]%2==0&&v3a[n]>0){
if(getTile(v3x[n]+v3b[n]*vsin[n], v3y[n], v3z[n]+v3b[n]*vcos[n])!=7&&getTile(v3x[n]+v3b[n]*vsin[n], v3y[n], v3z[n]+v3b[n]*vcos[n])!=0){
setTile(v3x[n]+v3b[n]*vsin[n], v3y[n]+1, v3z[n]+v3b[n]*vcos[n], getTile(v3x[n]+v3b[n]*vsin[n], v3y[n], v3z[n]+v3b[n]*vcos[n]), Level.getData(v3x[n]+v3b[n]*vsin[n], v3y[n], v3z[n]+v3b[n]*vcos[n]));
setTile(v3x[n]+v3b[n]*vsin[n], v3y[n], v3z[n]+v3b[n]*vcos[n], 0);
}
v3b[n]++;
}
if(v3a[n]==250){
ESP.antiLack(5);
for(var gun=2;gun<12;gun++)
explode(v3x[n]+2*gun*vsin[n], v3y[n]+2, v3z[n]+2*gun*vcos[n], 1.7);
}
if(v4a[n]==1798){
for(var nn=-1;nn<2;nn++){
setTile(vx[n]-2, vy[n]+2, vz[n]+nn, 0);
setTile(vx[n]+2, vy[n]+2, vz[n]+nn, 0);
setTile(vx[n]+nn, vy[n]+2, vz[n]+2, 0);
setTile(vx[n]+nn, vy[n]+2, vz[n]-2, 0);
}
for(var nn=-3;nn<4;nn++){
setTile(vx[n]-4, vy[n]+2, vz[n]+nn, 20);
setTile(vx[n]+4, vy[n]+2, vz[n]+nn, 20);
setTile(vx[n]+nn, vy[n]+2, vz[n]+4, 20);
setTile(vx[n]+nn, vy[n]+2, vz[n]-4, 20);
}
}
if(v4a[n]==1796){
for(var nn=-3;nn<4;nn++){
setTile(vx[n]-4, vy[n]+2, vz[n]+nn, 0);
setTile(vx[n]+4, vy[n]+2, vz[n]+nn, 0);
setTile(vx[n]+nn, vy[n]+2, vz[n]+4, 0);
setTile(vx[n]+nn, vy[n]+2, vz[n]-4, 0);
}
for(var nn=-5;nn<6;nn++){
setTile(vx[n]-6, vy[n]+2, vz[n]+nn, 20);
setTile(vx[n]+6, vy[n]+2, vz[n]+nn, 20);
setTile(vx[n]+nn, vy[n]+2, vz[n]+6, 20);
setTile(vx[n]+nn, vy[n]+2, vz[n]-6, 20);
}
}
if(v4a[n]==1794){
for(var nn=-5;nn<6;nn++){
setTile(vx[n]-6, vy[n]+2, vz[n]+nn, 0);
setTile(vx[n]+6, vy[n]+2, vz[n]+nn, 0);
setTile(vx[n]+nn, vy[n]+2, vz[n]+6, 0);
setTile(vx[n]+nn, vy[n]+2, vz[n]-6, 0);
}
for(var nn=-7;nn<8;nn++){
setTile(vx[n]-8, vy[n]+2, vz[n]+nn, 20);
setTile(vx[n]+8, vy[n]+2, vz[n]+nn, 20);
setTile(vx[n]+nn, vy[n]+2, vz[n]+8, 20);
setTile(vx[n]+nn, vy[n]+2, vz[n]-8, 20);
}
}
if(v4a[n]==1792){
for(var nn=-7;nn<8;nn++){
setTile(vx[n]-8, vy[n]+2, vz[n]+nn, 0);
setTile(vx[n]+8, vy[n]+2, vz[n]+nn, 0);
setTile(vx[n]+nn, vy[n]+2, vz[n]+8, 0);
setTile(vx[n]+nn, vy[n]+2, vz[n]-8, 0);
}
for(var nn=-9;nn<10;nn++){
setTile(vx[n]-10, vy[n]+2, vz[n]+nn, 20);
setTile(vx[n]+10, vy[n]+2, vz[n]+nn, 20);
setTile(vx[n]+nn, vy[n]+2, vz[n]+10, 20);
setTile(vx[n]+nn, vy[n]+2, vz[n]-10, 20);
}
}
if(v4a[n]==1790){
for(var nn=-9;nn<10;nn++){
setTile(vx[n]-10, vy[n]+2, vz[n]+nn, 0);
setTile(vx[n]+10, vy[n]+2, vz[n]+nn, 0);
setTile(vx[n]+nn, vy[n]+2, vz[n]+10, 0);
setTile(vx[n]+nn, vy[n]+2, vz[n]-10, 0);
}
for(var nn=-11;nn<12;nn++){
setTile(vx[n]-12, vy[n]+2, vz[n]+nn, 20);
setTile(vx[n]+12, vy[n]+2, vz[n]+nn, 20);
setTile(vx[n]+nn, vy[n]+2, vz[n]+12, 20);
setTile(vx[n]+nn, vy[n]+2, vz[n]-12, 20);
}
}
if(v4a[n]==1788){
for(var nn=-11;nn<12;nn++){
setTile(vx[n]-12, vy[n]+2, vz[n]+nn, 0);
setTile(vx[n]+12, vy[n]+2, vz[n]+nn, 0);
setTile(vx[n]+nn, vy[n]+2, vz[n]+12, 0);
setTile(vx[n]+nn, vy[n]+2, vz[n]-12, 0);
}
for(var nn=-13;nn<14;nn++){
setTile(vx[n]-14, vy[n]+2, vz[n]+nn, 20);
setTile(vx[n]+11, vy[n]+2, vz[n]+nn, 20);
setTile(vx[n]+nn, vy[n]+2, vz[n]+14, 20);
setTile(vx[n]+nn, vy[n]+2, vz[n]-14, 20);
}
}
if(v4a[n]==1786){
for(var nn=-13;nn<14;nn++){
setTile(vx[n]-14, vy[n]+2, vz[n]+nn, 0);
setTile(vx[n]+11, vy[n]+2, vz[n]+nn, 0);
setTile(vx[n]+nn, vy[n]+2, vz[n]+14, 0);
setTile(vx[n]+nn, vy[n]+2, vz[n]-14, 0);
}
for(var nn=0;nn<v4b[n].length;nn++)
Entity.setHealth(v4b[n][nn], Entity.getHealth(v4b[n][nn])-10);
}
if(v4a[n]==1350){
v4b[n] = [];
}
}}
if(tensor[0]!=null){
for(var n=0;n<tensor.length;n++){
if(te2a[n]==298){
explode(te2x[n]+5, te2y[n]+1.2, te2z[n]-5, 2.5);
}
if(te2a[n]==296){
ESP.antiLack(15);
explode(te2x[n]-5, te2y[n]+1.2, te2z[n]-5, 2.5);
}
if(te2a[n]==294){
explode(te2x[n]-5, te2y[n]+1.2, te2z[n]+5, 2.5);
}
if(te2a[n]==292){
ESP.antiLack(15);
explode(te2x[n]+5, te2y[n]+1.2, te2z[n], 2.5);
}
if(te2a[n]==290){
explode(te2x[n], te2y[n]+1.2, te2z[n]-5, 2.5);
}
if(te2a[n]==288){
ESP.antiLack(12);
explode(te2x[n]-5, te2y[n]+1.2, te2z[n], 2.5);
}
if(te2a[n]==286){
explode(te2x[n], te2y[n]+1.2, te2z[n]+5, 2.5);
}
if(te4a[n]==1785){
for(var nn in te4b[n]){
setTile(tex[n][nn], tey[n][nn], tez[n][nn], 0);
Entity.setFireTicks(te4b[n][nn], 15);
explode(tex[n][nn], tey[n][nn], tez[n][nn], 2);
}
}
if(te4a[n]==1740){
for(var nn in te4b[n])
Entity.setHealth(te4b[n][nn], Entity.getHealth(te4b[n][nn])-7);
}
if(te4a[n]==1350){
te4b[n] = [];
tex[n] = [];
tey[n] = [];
tez[n] = [];
}
}}
if(ameca[0]!=null){
for(var n=0;n<ameca.length;n++){
if(ame1a[n]==145){
ESP.antiLack(5);
for(var gun=5;gun<20;gun++)
explode(px+gun*sin, py+2, pz+gun*cos, 1.8);
setTile(px+2*sin, py+2, pz+2*cos, 247);
setTile(px+3*sin, py+2, pz+3*cos, 247);
setTile(px+4*sin, py+2, pz+4*cos, 247);
}
if(ame1a[n]==140){
setTile(px+2*sin, py+2, pz+2*cos, 0);
setTile(px+3*sin, py+2, pz+3*cos, 0);
setTile(px+4*sin, py+2, pz+4*cos, 0);
}
if(ame2a[n]==225){
setTile(ame2x[n]+7, ame2y[n]+4, ame2z[n]+7, 0);
setTile(ame2x[n]+7, ame2y[n]+4, ame2z[n]-7, 0);
setTile(ame2x[n]-7, ame2y[n]+4, ame2z[n]+7, 0);
setTile(ame2x[n]-7, ame2y[n]+4, ame2z[n]-7, 0);
}
if(ame3a[n]>150){
ame3x[n] = Entity.getX(ameca[n]);
if(Entity.getPitch(ameca[n])==90){
ame3y[n] = Entity.getY(ameca[n])-3;
}
else{
ame3y[n] = Entity.getY(ameca[n])-2;
}
ame3z[n] = Entity.getZ(ameca[n]);
for(var xx=ame3x[n]-2;xx<ame3x[n]+3;xx++){
for(var zz=ame3z[n]-2;zz<ame3z[n]+3;zz++){
if(getTile(xx, ame3y[n]+1, zz)==247){
setTile(xx, ame3y[n]+1, zz, 0);
}
if(getTile(xx, ame3y[n]-1, zz)==247){
setTile(xx, ame3y[n]-1, zz, 0);
}
if(getTile(xx, ame3y[n], ame3z[n]+2)==247){
setTile(xx, ame3y[n], ame3z[n]+2, 0);
}
if(getTile(xx, ame3y[n], ame3z[n]-2)==247){
setTile(xx, ame3y[n], ame3z[n]-2, 0);
}
}}
for(var zz=ame3z[n]-1;zz<ame3z[n]+2;zz++){
if(getTile(ame3x[n]+2, ame3y[n], zz)==247){
setTile(ame3x[n]+2, ame3y[n], zz, 0);
}
if(getTile(ame3x[n]-2, ame3y[n], zz)==247){
setTile(ame3x[n]-2, ame3y[n], zz, 0);
}
for(var xx=ame3x[n]-1;xx<ame3x[n]+2;xx++)
if(getTile(xx, ame3y[n], zz)==0){
setTile(xx, ame3y[n], zz, 247);
}
}
}
if(ame3a[n]==150){
for(var xx=ame3x[n]-2;xx<ame3x[n]+3;xx++)
for(var yy=ame3y[n]-1;yy<ame3y[n]+2;yy++)
for(var zz=ame3z[n]-2;zz<ame3z[n]+3;zz++)
if(getTile(xx, yy, zz)==247){
setTile(xx, yy, zz, 0);
}
ame3b[n] = -1;
}
if(ame3b[n]>0){
ame3b[n]--;
}
if(ame3b[n]==-1){
ame3x[n] = Entity.getX(ameca[n]);
ame3y[n] = Entity.getY(ameca[n])-4;
ame3z[n] = Entity.getZ(ameca[n]);
if(getTile(ame3x[n], ame3y[n]-1, ame3z[n])!=0){
for(var xx=ame3x[n]-1;xx<ame3x[n]+2;xx++)
for(var zz=ame3z[n]-1;zz<ame3z[n]+2;zz++)
if(getTile(xx, ame3y[n]+1, zz)==0){
setTile(xx, ame3y[n]+1, zz, 30);
}
ame3b[n] = 16;
}
}
if(ame3b[n]==1){
for(var xx=ame3x[n]-1;xx<ame3x[n]+2;xx++)
for(var zz=ame3z[n]-1;zz<ame3z[n]+2;zz++)
if(getTile(xx, ame3y[n]+1, zz)==30){
setTile(xx, ame3y[n]+1, zz, 0);
}
}
if(ame4a[n]==1795){
ESP.antiLack(13);
for(var nn=0;nn<amex[n].length;nn++){
explode(amex[n][nn], amey[n][nn]+1, amez[n][nn], 2.5);
setTile(amex[n][nn], amey[n][nn]+2, amez[n][nn], 247);
}
}
if(ame4a[n]==1790){
for(var nn=0;nn<amex[n].length;nn++)
setTile(amex[n][nn], amey[n][nn]+2, amez[n][nn], 0);
}
if(ame4a[n]==1350){
amex[n] = [];
amey[n] = [];
amez[n] = [];
}
}}
if(seal[0]!=null){
for(var n=0;n<seal.length;n++){
if(se3a[n]==1){
se3b[n] = false;
}
if(sea4a[n]>1350){
teleport(sea4b[n], seax[n], seay[n], seaz[n]);
setTile(seax[n], seay[n]+1, seaz[n], 30);
Entity.setFireTicks(sea4b[n], 2);
for(var xx=seax[n]-1;xx<seax[n]+2;xx++){
for(var yy=seay[n]+1;yy<seay[n]+4;yy++){
for(var zz=seaz[n]-1;zz<seaz[n]+2;zz++){
setTile(xx, yy, seaz[n]+2, 20);
setTile(xx, yy, seaz[n]-2, 20);
setTile(seax[n]+2 ,yy, zz, 20);
setTile(seax[n]-2 ,yy, zz, 20);
setTile(xx, seay[n]+4, zz, 20);
}}}
}
if(sea4a[n]==1350){
setTile(seax[n], seay[n]+1, seaz[n], 0);
Entity.setHealth(sea4b[n], Entity.getHealth(sea4b[n])-5);
for(var xx=seax[n]-1;xx<seax[n]+2;xx++){
for(var yy=seay[n]+1;yy<seay[n]+4;yy++){
for(var zz=seaz[n]-1;zz<seaz[n]+2;zz++){
setTile(xx, yy, seaz[n]+2, 0);
setTile(xx, yy, seaz[n]-2, 0);
setTile(seax[n]+2 ,yy, zz, 0);
setTile(seax[n]-2 ,yy, zz, 0);
setTile(xx, seay[n]+4, zz, 0);
}}}
}
}}
if(angel[0]!=null){
for(var n=0;n<angel.length;n++){
if(an1a[n]==145){
ESP.antiLack(5);
for(var gun=3;gun<20;gun++){
setTile(px+gun*sin, py+2, pz+gun*cos, 0);
explode(px+gun*sin, py+2, pz+gun*cos, 1.7);
}
}
if(an2a[n]>150){
an2x[n] = Entity.getX(angel[n]);
if(Entity.getPitch(angel[n])==90){
an2y[n] = Entity.getY(angel[n])-3;
}
else{
an2y[n] = Entity.getY(angel[n])-2;
}
an2z[n] = Entity.getZ(angel[n]);
for(var xx=an2x[n]-2;xx<an2x[n]+3;xx++){
for(var zz=an2z[n]-2;zz<an2z[n]+3;zz++){
if(getTile(xx, an2y[n]+1, zz)==20){
setTile(xx, an2y[n]+1, zz, 0);
}
if(getTile(xx, an2y[n]-1, zz)==20){
setTile(xx, an2y[n]-1, zz, 0);
}
if(getTile(xx, an2y[n], an2z[n]+2)==20){
setTile(xx, an2y[n], an2z[n]+2, 0);
}
if(getTile(xx, an2y[n], an2z[n]-2)==20){
setTile(xx, an2y[n], an2z[n]-2, 0);
}
}}
for(var zz=an2z[n]-1;zz<an2z[n]+2;zz++){
if(getTile(an2x[n]+2, an2y[n], zz)==20){
setTile(an2x[n]+2, an2y[n], zz, 0);
}
if(getTile(an2x[n]-2, an2y[n], zz)==20){
setTile(an2x[n]-2, an2y[n], zz, 0);
}
for(var xx=an2x[n]-1;xx<an2x[n]+2;xx++)
if(getTile(xx, an2y[n], zz)==0){
setTile(xx, an2y[n], zz, 20);
}
}
}
if(an2a[n]==150){
for(var xx=an2x[n]-2;xx<an2x[n]+3;xx++)
for(var yy=an2y[n]-1;yy<an2y[n]+2;yy++)
for(var zz=an2z[n]-2;zz<an2z[n]+3;zz++)
if(getTile(xx, yy, zz)==20){
setTile(xx, yy, zz, 0);
}
an2b[n] = -1;
}
if(an2b[n]>0){
an2b[n]--;
}
if(an2b[n]==-1){
an2x[n] = Entity.getX(angel[n]);
an2y[n] = Entity.getY(angel[n])-4;
an2z[n] = Entity.getZ(angel[n]);
if(getTile(an2x[n], an2y[n]-1, an2z[n])!=0){
for(var xx=an2x[n]-1;xx<an2x[n]+2;xx++)
for(var zz=an2z[n]-1;zz<an2z[n]+2;zz++)
if(getTile(xx, an2y[n]+1, zz)==0){
setTile(xx, an2y[n]+1, zz, 30);
}
an2b[n] = 16;
}
}
if(an2b[n]==1){
for(var xx=an2x[n]-1;xx<an2x[n]+2;xx++)
for(var zz=an2z[n]-1;zz<an2z[n]+2;zz++)
if(getTile(xx, an2y[n]+1, zz)==30){
setTile(xx, an2y[n]+1, zz, 0);
}
}
if(an3a[n]==295){
for(var gun=3;gun<15;gun++){
setTile(px+gun*sin, py+2, pz+gun*cos, 0);
setTile(px-gun*sin, py+2, pz-gun*cos, 0);
explode(px+gun*sin, py+2, pz+gun*cos, 1.8);
explode(px-gun*sin, py+2, pz-gun*cos, 1.8);
}
}
if(an4a[n]==1795){
for(var yy=any[n]+7;yy<any[n]+9;yy++){
setTile(anx[n]+7, yy, anz[n]+7, 155);
setTile(anx[n]+7, yy, anz[n], 155);
setTile(anx[n]+7, yy, anz[n]-7, 155);
setTile(anx[n], yy, anz[n]+7, 155);
setTile(anx[n], yy, anz[n]-7, 155);
setTile(anx[n]-7, yy, anz[n]+7, 155);
setTile(anx[n]-7, yy, anz[n], 155);
setTile(anx[n]-7, yy, anz[n]-7, 155);
}
}
if(an4a[n]==1790){
for(var yy=any[n]+5;yy<any[n]+7;yy++){
setTile(anx[n]+7, yy, anz[n]+7, 155);
setTile(anx[n]+7, yy, anz[n], 155);
setTile(anx[n]+7, yy, anz[n]-7, 155);
setTile(anx[n], yy, anz[n]+7, 155);
setTile(anx[n], yy, anz[n]-7, 155);
setTile(anx[n]-7, yy, anz[n]+7, 155);
setTile(anx[n]-7, yy, anz[n], 155);
setTile(anx[n]-7, yy, anz[n]-7, 155);
}
}
if(an4a[n]==1785){
for(var yy=any[n]+3;yy<any[n]+5;yy++){
setTile(anx[n]+7, yy, anz[n]+7, 155);
setTile(anx[n]+7, yy, anz[n], 155);
setTile(anx[n]+7, yy, anz[n]-7, 155);
setTile(anx[n], yy, anz[n]+7, 155);
setTile(anx[n], yy, anz[n]-7, 155);
setTile(anx[n]-7, yy, anz[n]+7, 155);
setTile(anx[n]-7, yy, anz[n], 155);
setTile(anx[n]-7, yy, anz[n]-7, 155);
}
}
if(an4a[n]==1780){
for(var yy=any[n]+1;yy<any[n]+3;yy++){
setTile(anx[n]+7, yy, anz[n]+7, 155);
setTile(anx[n]+7, yy, anz[n], 155);
setTile(anx[n]+7, yy, anz[n]-7, 155);
setTile(anx[n], yy, anz[n]+7, 155);
setTile(anx[n], yy, anz[n]-7, 155);
setTile(anx[n]-7, yy, anz[n]+7, 155);
setTile(anx[n]-7, yy, anz[n], 155);
setTile(anx[n]-7, yy, anz[n]-7, 155);
}
}
if(an4a[n]==1775){
for(var yy=any[n]+1;yy<any[n]+11;yy++){
setTile(anx[n]+7, yy, anz[n]+7, 0);
setTile(anx[n]+7, yy, anz[n], 0);
setTile(anx[n]+7, yy, anz[n]-7, 0);
setTile(anx[n], yy, anz[n]+7, 0);
setTile(anx[n], yy, anz[n]-7, 0);
setTile(anx[n]-7, yy, anz[n]+7, 0);
setTile(anx[n]-7, yy, anz[n], 0);
setTile(anx[n]-7, yy, anz[n]-7, 0);
}
ESP.antiLack(5);
explode(anx[n]+7, any[n]+1.8, anz[n]+7, 3);
explode(anx[n]+7, any[n]+1.8, anz[n], 3);
explode(anx[n]+7, any[n]+1.8, anz[n]-7, 3);
explode(anx[n], any[n]+1.8, anz[n]+7, 3);
explode(anx[n], any[n]+1.8, anz[n]-7, 3);
explode(anx[n]-7, any[n]+1.8, anz[n]+7, 3);
explode(anx[n]-7, any[n]+1.8, anz[n], 3);
explode(anx[n]-7, any[n]+1.8, anz[n]-7, 3);
var p2x, p2y, p2z;
for each(var e in Entity.getAll()){
p2x = Math.abs(anx[n]-Entity.getX(e));
p2y = Math.abs(any[n]-Entity.getY(e));
p2z = Math.abs(anz[n]-Entity.getZ(e));
if(p2x<=40&&p2y<=40&&p2z<=40&&angel!=e&&Entity.getEntityTypeId(e)<64)
Entity.setHealth(e, Entity.getHealth(e)-10);
}
for(var xx=anx[n]-2;xx<anx[n]+3;xx++)
for(var zz=anz[n]-2;zz<anz[n]+3;zz++)
setTile(xx, any[n]+1, zz, 0);
}
}}
if(white[0]!=null){
for(var n=0;n<white.length;n++){
if(wh2a[n]>150&&(wh2a[n]%5)==0){
var wyaw, wpitch, wsin, wcos, wtan, wpcos;
wh2x[n] = Entity.getX(white[n]);
wh2y[n] = Entity.getY(white[n]);
wh2z[n] = Entity.getZ(white[n]);
wyaw = Math.floor(Entity.getYaw(white[n]));
wpitch = Math.floor(Entity.getPitch(white[n]));
wsin = -Math.sin(wyaw/180*Math.PI);
wcos = Math.cos(wyaw/180*Math.PI);
wtan = -Math.sin(wpitch/180*Math.PI);
wpcos = Math.cos(wpitch/180*Math.PI);
ESP.antiLack(5);
for(var gun=3;gun<30;gun++){
if(getTile(wh2x[n]+gun*wsin*wpcos, wh2y[n]+gun*wtan, wh2z[n]+gun*wcos*wpcos)!=0&&getTile(wh2x[n]+gun*wsin*wpcos, wh2y[n]+gun*wtan+1, wh2z[n]+gun*wcos*wpcos)==0){
explode(wh2x[n]+gun*wsin*wpcos, wh2y[n]+gun*wtan+1, wh2z[n]+gun*wcos*wpcos, 1.5);
break;
}
}
}
if(wh3a[n]==285||wh3a[n]==270){
Entity.setHealth(wh3b[n], Entity.getHealth(wh3b[n])-5);
}
if(wh4a[n]==1795){
ESP.antiLack(15);
explode(whx[n]+4, why[n]+1, whz[n]+4, 2);
explode(whx[n]+5, why[n]+1, whz[n], 2);
explode(whx[n]+4, why[n]+1, whz[n]-4, 2);
explode(whx[n], why[n]+1, whz[n]+5, 2);
explode(whx[n], why[n]+1, whz[n]-5, 2);
explode(whx[n]-4, why[n]+1, whz[n]+4, 2);
explode(whx[n]-5, why[n]+1, whz[n], 2);
explode(whx[n]-4, why[n]+1, whz[n]-4, 2);
}
if(wh4a[n]==1790){
explode(whx[n]+7, why[n]+1, whz[n]+7, 3);
explode(whx[n]+9, why[n]+1, whz[n], 3);
explode(whx[n]+7, why[n]+1, whz[n]-7, 3);
explode(whx[n], why[n]+1, whz[n]+9, 3);
explode(whx[n], why[n]+1, whz[n]-9, 3);
explode(whx[n]-7, why[n]+1, whz[n]+7, 3);
explode(whx[n]-9, why[n]+1, whz[n], 3);
explode(whx[n]-7, why[n]+1, whz[n]-7, 3);
}
if(wh4a[n]==1785){
arroundMobHealthDown(white[n], 30, 10);
}
if(wh4a[n]==1765){
ESP.removeSusanoo(hwx[n], hwy[n], hwz[n]);
setTile(whx[n]+3, why[n]+7, whz[n], 0);
setTile(whx[n]-3, why[n]+7, whz[n], 0);
setTile(whx[n], why[n]+7, whz[n]+3, 0);
setTile(whx[n], why[n]+7, whz[n]-3, 0);
}
}}
if(mental[0]!=null){
for(var n=0;n<mental.length;n++){
if(mt1a[n]>75){
teleport(mt1b[n], mt1x[n], mt1y[n], mt1z[n]);
}
if(mt4a[n]>1350){
if(mt4c[n]){
teleport(mt4b[n], mtx[n], mty[n], mtz[n]);
mt4c[n] = false;
}
else if(mt4c[n]==false){
teleport(mt4b[n], mtx[n]+1, mty[n], mtz[n]);
mt4c[n] = true;
}
}
if(mt4a[n]==1350){
Entity.setHealth(mt4b[n], Entity.getHealth(mt4b[n])-10);
}
}}
if(wo4c[0]>0){
wo4c[0]--;
}
if(wo4c[0]==1){
setTile(wo4d[0], wo4d[1], wo4d[2], wo4c[1], wo4c[2]);
}



//---dtj----
if(dtj!=null){
if(dt1){
dt1a--;
}
if(dt2){
dt2a--;
}
if(dt3){
dt3a--;
}
if(dt4){
dt4a--;
}
if(dt1a==0){
dt1 = false;
}
if(dt2a==0){
dt2 = false;
}
if(dt3a==0){
dt3 = false;
}
if(dt4a==0){
dt4 = false;
}
if(dtl){
dtla--;
}
if(dtla==0){
dtl = false;
}
if(dtla==1){
ESP.sbm("Time is over, Dark Tornado jr. Limiter Operate");
}
if(dt2a==295){
if(!dtl){
for(var gun=4;gun<35;gun++){
setTile(px+gun*sin*pcos, py+gun*tan+0.8, pz+gun*cos*pcos, 0);
explode(px+gun*sin*pcos, py+gun*tan+0.8, pz+gun*cos*pcos, 1.8);
}
}
else if(dtl){
for(var gun=4;gun<50;gun++){
setTile(px+gun*sin*pcos, py+gun*tan+0.8, pz+gun*cos*pcos, 0);
explode(px+gun*sin*pcos, py+gun*tan+0.8, pz+gun*cos*pcos, 2.3);
}
}
}
if(dt4a==1795){
setTile(dtx+10, dty+1, dtz+10, 17);
setTile(dtx+10, dty+1, dtz-10, 17);
setTile(dtx-10, dty+1, dtz+10, 17);
setTile(dtx-10, dty+1, dtz-10, 17);
setTile(dtx+10, dty+2, dtz+10, 18);
setTile(dtx+10, dty+2, dtz-10, 18);
setTile(dtx-10, dty+2, dtz+10, 18);
setTile(dtx-10, dty+2, dtz-10, 18);
setTile(dtx+10, dty+9, dtz, 79);
setTile(dtx, dty+9, dtz+10, 79);
setTile(dtx-10, dty+9, dtz, 79);
setTile(dtx, dty+9, dtz-10, 79);
setTile(dtx+7, dty+2, dtz+7, 49);
setTile(dtx+7, dty+2, dtz-7, 49);
setTile(dtx-7, dty+2, dtz+7, 49);
setTile(dtx-7, dty+2, dtz-7, 49);
setTile(dtx+7, dty+9, dtz, 155);
setTile(dtx, dty+9, dtz+7, 155);
setTile(dtx-7, dty+9, dtz, 155);
setTile(dtx, dty+9, dtz-7, 155);
}
if(dt4a==1790){
setTile(dtx+10, dty+2, dtz+10, 17);
setTile(dtx+10, dty+2, dtz-10, 17);
setTile(dtx-10, dty+2, dtz+10, 17);
setTile(dtx-10, dty+2, dtz-10, 17);
setTile(dtx+10, dty+3, dtz+10, 18);
setTile(dtx+10, dty+3, dtz-10, 18);
setTile(dtx-10, dty+3, dtz+10, 18);
setTile(dtx-10, dty+3, dtz-10, 18);
setTile(dtx+10, dty+8, dtz, 79);
setTile(dtx, dty+8, dtz+10, 79);
setTile(dtx-10, dty+8, dtz, 79);
setTile(dtx, dty+8, dtz-10, 79);
setTile(dtx+7, dty+3, dtz+7, 49);
setTile(dtx+7, dty+3, dtz-7, 49);
setTile(dtx-7, dty+3, dtz+7, 49);
setTile(dtx-7, dty+3, dtz-7, 49);
setTile(dtx+7, dty+8, dtz, 155);
setTile(dtx, dty+8, dtz+7, 155);
setTile(dtx-7, dty+8, dtz, 155);
setTile(dtx, dty+8, dtz-7, 155);
}
if(dt4a==1785){
setTile(dtx+10, dty+3, dtz+10, 17);
setTile(dtx+10, dty+3, dtz-10, 17);
setTile(dtx-10, dty+3, dtz+10, 17);
setTile(dtx-10, dty+3, dtz-10, 17);
setTile(dtx+10, dty+4, dtz+10, 18);
setTile(dtx+10, dty+4, dtz-10, 18);
setTile(dtx-10, dty+4, dtz+10, 18);
setTile(dtx-10, dty+4, dtz-10, 18);
setTile(dtx+10, dty+7, dtz, 79);
setTile(dtx, dty+7, dtz+10, 79);
setTile(dtx-10, dty+7, dtz, 79);
setTile(dtx, dty+7, dtz-10, 79);
setTile(dtx+7, dty+4, dtz+7, 49);
setTile(dtx+7, dty+4, dtz-7, 49);
setTile(dtx-7, dty+4, dtz+7, 49);
setTile(dtx-7, dty+4, dtz-7, 49);
setTile(dtx+7, dty+7, dtz, 155);
setTile(dtx, dty+7, dtz+7, 155);
setTile(dtx-7, dty+7, dtz, 155);
setTile(dtx, dty+7, dtz-7, 155);
}
if(dt4a==1780){
setTile(dtx+10, dty+4, dtz+10, 17);
setTile(dtx+10, dty+4, dtz-10, 17);
setTile(dtx-10, dty+4, dtz+10, 17);
setTile(dtx-10, dty+4, dtz-10, 17);
setTile(dtx+10, dty+5, dtz+10, 18);
setTile(dtx+10, dty+5, dtz-10, 18);
setTile(dtx-10, dty+5, dtz+10, 18);
setTile(dtx-10, dty+5, dtz-10, 18);
setTile(dtx+10, dty+6, dtz, 79);
setTile(dtx, dty+6, dtz+10, 79);
setTile(dtx-10, dty+6, dtz, 79);
setTile(dtx, dty+6, dtz-10, 79);
setTile(dtx+7, dty+5, dtz+7, 49);
setTile(dtx+7, dty+5, dtz-7, 49);
setTile(dtx-7, dty+5, dtz+7, 49);
setTile(dtx-7, dty+5, dtz-7, 49);
setTile(dtx+7, dty+6, dtz, 155);
setTile(dtx, dty+6, dtz+7, 155);
setTile(dtx-7, dty+6, dtz, 155);
setTile(dtx, dty+6, dtz-7, 155);
}
if(dt4a==1775){
setTile(dtx+10, dty+5, dtz+10, 17);
setTile(dtx+10, dty+5, dtz-10, 17);
setTile(dtx-10, dty+5, dtz+10, 17);
setTile(dtx-10, dty+5, dtz-10, 17);
setTile(dtx+10, dty+6, dtz+10, 18);
setTile(dtx+10, dty+6, dtz-10, 18);
setTile(dtx-10, dty+6, dtz+10, 18);
setTile(dtx-10, dty+6, dtz-10, 18);
setTile(dtx+10, dty+5, dtz, 79);
setTile(dtx, dty+5, dtz+10, 79);
setTile(dtx-10, dty+5, dtz, 79);
setTile(dtx, dty+5, dtz-10, 79);
setTile(dtx+7, dty+6, dtz+7, 49);
setTile(dtx+7, dty+6, dtz-7, 49);
setTile(dtx-7, dty+6, dtz+7, 49);
setTile(dtx-7, dty+6, dtz-7, 49);
setTile(dtx+7, dty+5, dtz, 155);
setTile(dtx, dty+5, dtz+7, 155);
setTile(dtx-7, dty+5, dtz, 155);
setTile(dtx, dty+5, dtz-7, 155);
}
if(dt4a==1770){
setTile(dtx+10, dty+6, dtz+10, 17);
setTile(dtx+10, dty+6, dtz-10, 17);
setTile(dtx-10, dty+6, dtz+10, 17);
setTile(dtx-10, dty+6, dtz-10, 17);
setTile(dtx+10, dty+7, dtz+10, 18);
setTile(dtx+10, dty+7, dtz-10, 18);
setTile(dtx-10, dty+7, dtz+10, 18);
setTile(dtx-10, dty+7, dtz-10, 18);
setTile(dtx+10, dty+4, dtz, 79);
setTile(dtx, dty+4, dtz+10, 79);
setTile(dtx-10, dty+4, dtz, 79);
setTile(dtx, dty+4, dtz-10, 79);
setTile(dtx+7, dty+7, dtz+7, 49);
setTile(dtx+7, dty+7, dtz-7, 49);
setTile(dtx-7, dty+7, dtz+7, 49);
setTile(dtx-7, dty+7, dtz-7, 49);
setTile(dtx+7, dty+4, dtz, 155);
setTile(dtx, dty+4, dtz+7, 155);
setTile(dtx-7, dty+4, dtz, 155);
setTile(dtx, dty+4, dtz-7, 155);
}
if(dt4a==1765){
setTile(dtx+10, dty+7, dtz+10, 17);
setTile(dtx+10, dty+7, dtz-10, 17);
setTile(dtx-10, dty+7, dtz+10, 17);
setTile(dtx-10, dty+7, dtz-10, 17);
setTile(dtx+10, dty+8, dtz+10, 18);
setTile(dtx+10, dty+8, dtz-10, 18);
setTile(dtx-10, dty+8, dtz+10, 18);
setTile(dtx-10, dty+8, dtz-10, 18);
setTile(dtx+10, dty+3, dtz, 79);
setTile(dtx, dty+3, dtz+10, 79);
setTile(dtx-10, dty+3, dtz, 79);
setTile(dtx, dty+3, dtz-10, 79);
setTile(dtx+7, dty+8, dtz+7, 49);
setTile(dtx+7, dty+8, dtz-7, 49);
setTile(dtx-7, dty+8, dtz+7, 49);
setTile(dtx-7, dty+8, dtz-7, 49);
setTile(dtx+7, dty+3, dtz, 155);
setTile(dtx, dty+3, dtz+7, 155);
setTile(dtx-7, dty+3, dtz, 155);
setTile(dtx, dty+3, dtz-7, 155);
}
if(dt4a==1760){
setTile(dtx+10, dty+8, dtz+10, 17);
setTile(dtx+10, dty+8, dtz-10, 17);
setTile(dtx-10, dty+8, dtz+10, 17);
setTile(dtx-10, dty+8, dtz-10, 17);
setTile(dtx+10, dty+9, dtz+10, 18);
setTile(dtx+10, dty+9, dtz-10, 18);
setTile(dtx-10, dty+9, dtz+10, 18);
setTile(dtx-10, dty+9, dtz-10, 18);
setTile(dtx+10, dty+2, dtz, 79);
setTile(dtx, dty+2, dtz+10, 79);
setTile(dtx-10, dty+2, dtz, 79);
setTile(dtx, dty+2, dtz-10, 79);
setTile(dtx+7, dty+9, dtz+7, 49);
setTile(dtx+7, dty+9, dtz-7, 49);
setTile(dtx-7, dty+9, dtz+7, 49);
setTile(dtx-7, dty+9, dtz-7, 49);
setTile(dtx+7, dty+2, dtz, 155);
setTile(dtx, dty+2, dtz+7, 155);
setTile(dtx-7, dty+2, dtz, 155);
setTile(dtx, dty+2, dtz-7, 155);
}
if(dt4a==1755){
setTile(dtx+10, dty+9, dtz+10, 17);
setTile(dtx+10, dty+9, dtz-10, 17);
setTile(dtx-10, dty+9, dtz+10, 17);
setTile(dtx-10, dty+9, dtz-10, 17);
setTile(dtx+10, dty+10, dtz+10, 18);
setTile(dtx+10, dty+10, dtz-10, 18);
setTile(dtx-10, dty+10, dtz+10, 18);
setTile(dtx-10, dty+10, dtz-10, 18);
setTile(dtx+10, dty+1, dtz, 79);
setTile(dtx, dty+1, dtz+10, 79);
setTile(dtx-10, dty+1, dtz, 79);
setTile(dtx, dty+1, dtz-10, 79);
setTile(dtx+7, dty+10, dtz+7, 49);
setTile(dtx+7, dty+10, dtz-7, 49);
setTile(dtx-7, dty+10, dtz+7, 49);
setTile(dtx-7, dty+10, dtz-7, 49);
setTile(dtx+7, dty+1, dtz, 155);
setTile(dtx, dty+1, dtz+7, 155);
setTile(dtx-7, dty+1, dtz, 155);
setTile(dtx, dty+1, dtz-7, 155);
}
if(dt4a==1750){
for(var yy=dty+1;yy<dty+11;yy++){
setTile(dtx+10, yy, dtz+10, 0);
setTile(dtx+10, yy, dtz-10, 0);
setTile(dtx-10, yy, dtz+10, 0);
setTile(dtx-10, yy, dtz-10, 0);
setTile(dtx+10, yy, dtz, 0);
setTile(dtx, yy, dtz+10, 0);
setTile(dtx-10, yy, dtz, 0);
setTile(dtx, yy, dtz-10, 0);
setTile(dtx+7, yy, dtz+7, 0);
setTile(dtx+7, yy, dtz-7, 0);
setTile(dtx-7, yy, dtz+7, 0);
setTile(dtx-7, yy, dtz-7, 0);
setTile(dtx+7, yy, dtz, 0);
setTile(dtx, yy, dtz+7, 0);
setTile(dtx-7, yy, dtz, 0);
setTile(dtx, yy, dtz-7, 0);
}
explode(dtx+10, dty+2, dtz+10, 3.5);
explode(dtx+10, dty+2, dtz-10, 3.5);
explode(dtx-10, dty+2, dtz+10, 3.5);
explode(dtx-10, dty+2, dtz-10, 3.5);
explode(dtx+10, dty+2, dtz, 3.5);
explode(dtx, dty+2, dtz+10, 3.5);
explode(dtx-10, dty+2, dtz, 3.5);
explode(dtx, dty+2, dtz-10, 3.5);
explode(dtx+7, dty+2, dtz+7, 4);
explode(dtx+7, dty+2, dtz-7, 3);
explode(dtx-7, dty+2, dtz+7, 3);
explode(dtx-7, dty+2, dtz-7, 3);
explode(dtx+7, dty+2, dtz, 3);
explode(dtx, dty+2, dtz+7, 3);
explode(dtx-7, dty+2, dtz, 3);
explode(dtx, dty+2, dtz-7, 3);
explode(dtx+10, dty+5, dtz+10, 3);
explode(dtx+10, dty+5, dtz-10, 3);
explode(dtx-10, dty+5, dtz+10, 3);
explode(dtx-10, dty+5, dtz-10, 3);
explode(dtx+10, dty+5, dtz, 3);
explode(dtx, dty+5, dtz+10, 3);
explode(dtx-10, dty+5, dtz, 3);
explode(dtx, dty+5, dtz-10, 3);
explode(dtx+7, dty+5, dtz+7, 4);
explode(dtx+7, dty+5, dtz-7, 2.5);
explode(dtx-7, dty+5, dtz+7, 2.5);
explode(dtx-7, dty+5, dtz-7, 2.5);
explode(dtx+7, dty+5, dtz, 2.5);
explode(dtx, dty+5, dtz+7, 2.5);
explode(dtx-7, dty+5, dtz, 2.5);
explode(dtx, dty+5, dtz-7, 2.5);
explode(dtx+4, dty+1, dtz+4, 0.5);
explode(dtx+4, dty+1, dtz-4, 0.5);
explode(dtx-4, dty+1, dtz+4, 0.5);
explode(dtx-4, dty+1, dtz-4, 0.5);
for(var xx=dtx-16;xx<dtx+17;xx++)
for(var yy=dty-7;yy<dty;yy++)
for(var zz=dtz-16;zz<dtz+14;zz++)
if(getTile(xx, yy, zz)==0){
setTile(xx, yy, zz, 51);
}
for(var xx=dtx-1;xx<dtx+2;xx++){
for(var zz=dtz-1;zz<dtz+2;zz++){
setTile(xx, dty, zz, 2);
setTile(xx, dty+1, zz, 0);}}
for(var xx=dtx-13;xx<dtx+14;xx++){
setTile(xx, dty+1, dtz+13, 30);
setTile(xx, dty+1, dtz-13, 30);
}
for(var zz=dtz-13;zz<dtz+14;zz++){
setTile(dtx+13, dty+1, zz, 30);
setTile(dtx-13, dty+1, zz, 30);
}
setTile(dtx+12, dty+5, dtz+12, 10);
setTile(dtx+12, dty+5, dtz-12, 10);
setTile(dtx-12, dty+5, dtz+12, 10);
setTile(dtx-12, dty+5, dtz-12, 10);
}
if(dt4a==1715){
for(var xx=dtx-16;xx<dtx+17;xx++)
for(var yy=dty-7;yy<dty+1;yy++)
for(var zz=dtz-16;zz<dtz+14;zz++)
if(getTile(xx, yy, zz)==0){
setTile(xx, yy, zz, 51);
}
for(var xx=dtx-1;xx<dtx+2;xx++){
for(var zz=dtz-1;zz<dtz+2;zz++){
setTile(xx, dty, zz, 2);
setTile(xx, dty+1, zz, 0);}}
}
if(dt4a==1400){
for(var xx=dtx-16;xx<dtx+17;xx++)
for(var yy=dty+1;yy<dty+10;yy++)
for(var zz=dtz-16;zz<dtz+17;zz++)
if(getTile(xx, yy, zz)!=0){
setTile(xx, yy, zz, 0);
}
for(var xx=dtx-13;xx<dtx+14;xx++)
for(var zz=dtz-13;zz<dtz+14;zz++)
if(getTile(xx, dty, zz)==87){
setTile(xx, dty, zz, 2);
}
}
}
//-----
if(fe!=null){
if(fe1){
fe1a--;
}
if(fe2){
fe2a--;
}
if(fe3){
fe3a--;
}
if(fe4){
fe4a--;
}
if(fe1a==0){
fe1 = false;
}
if(fe2a==0){
fe2 = false;
}
if(fe3a==0){
fe3 = false;
}
if(fe4a==0){
fe4 = false;
}
if(fe4a==1350&&fe4b){
for(var xx=fex-11;xx<fex+12;xx++){
for(var zz=fez-11;zz<fez+12;zz++){
if(auto){
setTile(xx, fey, zz, 2);
}
setTile(xx, fey+1, zz, 0);
}}
fe4b = false;
}
}
if(mg1>0){
mg1--;
}
if(mg2>0){
mg2--;
}
if(mg3>0){
mg3--;
}
if(mg4>0){
mg4--;
}
if(mg3==295){
ESP.antiLack(15);
for(var gun=2;gun<12;gun++)
setTile(px+2*gun*sin, py+2, pz+2*gun*cos, 0);
for(var gun=3;gun<25;gun++)
explode(px+gun*sin, py+2, pz+gun*cos, 1.5);
}
if(mg4==1350){
setTile(mgx+6, mgy+2, mgz+6, 0);
setTile(mgx+6, mgy+2, mgz, 0);
setTile(mgx+6, mgy+2, mgz-6, 0);
setTile(mgx, mgy+2, mgz+6, 0);
setTile(mgx, mgy+2, mgz-6, 0);
setTile(mgx-6, mgy+2, mgz+6, 0);
setTile(mgx-6, mgy+2, mgz, 0);
setTile(mgx-6, mgy+2, mgz-6, 0);
setTile(mgx+2, mgy+2, mgz+2, 0);
setTile(mgx+2, mgy+2, mgz, 0);
setTile(mgx+2, mgy+2, mgz-2, 0);
setTile(mgx, mgy+2, mgz+2, 0);
setTile(mgx, mgy+2, mgz-2, 0);
setTile(mgx-2, mgy+2, mgz+2, 0);
setTile(mgx-2, mgy+2, mgz, 0);
setTile(mgx-2, mgy+2, mgz-2, 0);
setTile(mgx+4, mgy+4, mgz+4, 0);
setTile(mgx+4, mgy+4, mgz-4, 0);
setTile(mgx-4, mgy+4, mgz+4, 0);
setTile(mgx-4, mgy+4, mgz-4, 0);
}
if(kp1>0){
kp1--;
}
if(kp2>0){
kp2--;
}
if(kp3>0){
kp3--;
}
if(kp4>0){
kp4--;
}
if(kp4==1790){
kpy++;
ESP.antiLack(5);
explode(kpx+7, kpy+1, kpz+7, 3);
explode(kpx+7, kpy+1, kpz-7, 3);
explode(kpx+7, kpy+1, kpz, 3);
explode(kpx-7, kpy+1, kpz+7, 3);
explode(kpx-7, kpy+1, kpz-7, 3);
explode(kpx-7, kpy+1, kpz, 3);
explode(kpx, kpy+1, kpz+7, 3);
explode(kpx, kpy+1, kpz-7, 3);
}
if(kp4==1780){
for(var xx=kpx-11;xx<kpx+12;xx++)
for(var yy=kpy-3;yy<kpy+1;yy++)
for(var zz=kpz-11;zz<kpz+12;zz++)
if(getTile(xx, yy, zz)==0){
setTile(xx, yy, zz, 51);
}
}



//------------------------------------
if(cloud[0]!=null){
for(var n=0;n<cloud.length;n++){
if(cc3a[n]==150&&cc3b[n]){
mmxc[n] = Entity.getX(cloud[n]);
mmyc[n] = Entity.getY(cloud[n])-2;
mmzc[n] = Entity.getZ(cloud[n]);
cc3b[n] = false;
cc3c[n] = true;
for(var xx=mmxc[n]-2;xx<mmxc[n]+3;xx++)
for(var yy=mmyc[n]-1;yy<mmyc[n]+2;yy++)
for(var zz=mmzc[n]-2;zz<mmzc[n]+3;zz++)
if(getTile(xx, yy, zz)==35){
setTile(xx, yy, zz, 0);
}
}
if(cc3b[n]){
mmxc[n] = Entity.getX(cloud[n]);
if(Entity.getPitch(cloud[n])==90){
mmyc[n] = Entity.getY(cloud[n])-3;
}
else{
mmyc[n] = Entity.getY(cloud[n])-2;
}
mmzc[n] = Entity.getZ(cloud[n]);
for(var xx=mmxc[n]-1;xx<mmxc[n]+2;xx++){
for(var zz=mmzc[n]-1;zz<mmzc[n]+2;zz++)
if(getTile(xx, mmyc[n], zz)==0){
setTile(xx, mmyc[n], zz, 35);
}
if(getTile(xx, mmyc[n], mmzc[n]+2)==35){
setTile(xx, mmyc[n], mmzc[n]+2, 0);
}
if(getTile(xx, mmyc[n], mmzc[n]-2)==35){
setTile(xx, mmyc[n], mmzc[n]-2, 0);
}
}
for(var xx=mmxc[n]-2;xx<mmxc[n]+3;xx++)
for(var zz=mmzc[n]-2;zz<mmzc[n]+3;zz++){
if(getTile(xx, mmyc[n]-1, zz)==35){
setTile(xx, mmyc[n]-1, zz, 0);
}
if(getTile(mmxc[n]+2, mmyc[n], zz)==35){
setTile(mmxc[n]+2, mmyc[n], zz, 0);
}
if(getTile(mmxc[n]-2, mmyc[n], zz)==35){
setTile(mmxc[n]-2, mmyc[n], zz, 0);
}
}
for(var xx=mmxc[n]-2;xx<mmxc[n]+3;xx++)
for(var zz=mmzc[n]-2;zz<mmzc[n]+3;zz++)
if(getTile(xx, mmyc[n]+1, zz)==35){
setTile(xx, mmyc[n]+1, zz, 0);
}
}
if(cc3c[n]){
mmxc[n] = Entity.getX(cloud);
mmyc[n] = Entity.getY(cloud)-2;
mmzc[n] = Entity.getZ(cloud);
if(getTile(mmxc[n], mmyc[n]-5, mmzc[n])!=0){
for(var xx=mmxc[n]-1;xx<mmxc[n]+2;xx++)
for(var zz=mmzc[n]-1;zz<mmzc[n]+2;zz++)
if(getTile(xx, mmyc[n]-3, zz)==0){
setTile(xx, mmyc[n]-3, zz, 30);
}
cc3c[n] = false;
cc3d[n] = 16;
}
}
if(cc3d[n]>0){
cc3d[n]--;
}
if(cc3d[n]==1){
for(var xx=mmxc[n]-1;xx<mmxc[n]+2;xx++)
for(var zz=mmzc[n]-1;zz<mmzc[n]+2;zz++)
if(getTile(xx, mmyc[n]-3, zz)==30){
setTile(xx, mmyc[n]-3, zz, 0);
}
}
}}
if(hermit[0]!=null){
for(var n=0;n<hermit.length;n++){
if(her1a[n]==145){
for(var gun=3;gun<20;gun++)
explode(px+gun*sin, py+2, pz+gun*cos, 1.5);
}
if(her2a[n]==1){
her2b[n] = false;
}
if(her3b[n]>0){
her3b[n]--;
}
if(her3a[n]>150){
her3x[n] = Entity.getX(hermit[n]);
if(Entity.getPitch(hermit[n])==90){
her3y[n] = Entity.getY(hermit[n])-3;
}
else{
her3y[n] = Entity.getY(hermit[n])-2;
}
her3z[n] = Entity.getZ(hermit[n]);
for(var xx=her3x[n]-1;xx<her3x[n]+2;xx++)
for(var zz=her3z[n]-1;zz<her3z[n]+2;zz++)
if(getTile(xx, her3y[n], zz)==0){
setTile(xx, her3y[n], zz, 18);
}
for(var xx=her3x[n]-2;xx<her3x[n]+3;xx++){
for(var zz=her3z[n]-2;zz<her3z[n]+3;zz++){
if(getTile(xx, her3y[n]+1, zz)==18){
setTile(xx, her3y[n]+1, zz, 0);
}
if(getTile(xx, her3y[n]-1, zz)==18){
setTile(xx, her3y[n]-1, zz, 0);
}
if(getTile(xx, her3y[n], her3z[n]+2)==18){
setTile(xx, her3y[n], her3z[n]+2, 0);
}
if(getTile(xx, her3y[n], her3z[n]-2)==18){
setTile(xx, her3y[n], her3z[n]-2, 0);
}
}}
for(var zz=herz[n]-1;zz<herz[n]+2;zz++){
if(getTile(herx[n]+2, hery, zz)==18){
setTile(herx[n]+2, hery, zz, 0);
}
if(getTile(herx[n]-2, hery[n], zz)==18){
setTile(herx[n]-2, hery[n], zz, 0);
}
}
}
if(her3a[n]==150){
for(var xx=her3x[n]-2;xx<her3x[n]+3;xx++)
for(var yy=her3y[n]-1;yy<her3y[n]+2;yy++)
for(var zz=her3z[n]-2;zz<her3z[n]+3;zz++)
if(getTile(xx, yy, zz)==18){
setTile(xx, yy, zz, 0);
}
her3b[n] = -1;
}
if(her3b[n]==-1){
her3x[n] = Entity.getX(hermit[n]);
her3y[n] = Entity.getY(hermit[n])-4;
her3z[n] = Entity.getZ(hermit[n]);
if(getTile(her3x[n], her3y[n], her3z[n])!=0){
for(var xx=her3x[n]-1;xx<her3x[n]+2;xx++)
for(var zz=her3z[n]-1;zz<her3z[n]+2;zz++)
if(getTile(xx, her3y[n]+2, zz)==0){
setTile(xx, her3y[n]+2, zz, 30);
}
her3b[n] = 16;
}
}
if(her3b==1){
for(var xx=her3x[n]-1;xx<her3x[n]+2;xx++)
for(var zz=her3z[n]-1;zz<her3z[n]+2;zz++)
if(getTile(xx, her3y[n]+2, zz)==30){
setTile(xx, her3y[n]+2, zz, 0);
}
}
}}


//auto recovery
if(auto){
new Thread({ //여기
run : function(){
if(water[0]!=null){
for(var n=0;n<water.length;n++){
if(w4b[n]==0&&w4c[n]){
autoRecover(wxa[n], wya[n], wza[n], 11, 2);
w4c[n] = false;
}
}}
if(tree[0]!=null){
for(var n=0;n<tree.length;n++){
if(t4a[n]==1000) autoRecover(tx[n], ty[n], tz[n], 12, 2);
if(t4a[n]==1030) autoRecover(tx[n], ty[n], tz[n], 12, 3);
}}
if(creeper[0]!=null){
for(var n=0;n<creeper.length;n++){
if(c1c[n]){
c1b[n]--;
if(c1b[n]==120) autoRecover(cx[n], cy[n]-4, cz[n], 3, 3);
if(c1b[n]==90) autoRecover(cx[n], cy[n]-3, cz[n], 3, 3);
if(c1b[n]==60) autoRecover(cx[n], cy[n]-2, cz[n], 3, 3);
if(c1b[n]==30) autoRecover(cx[n], cy[n]-1, cz[n], 3, 3);
if(c1b[n]==0) autoRecover(cx[n], cy[n], cz[n], 3, 2);
}
if(c1f[n]){
c1e[n]--;
if(c1e[n]==120) autoRecover(cx1[n], cy1[n]-4, cz1[n], 3, 3);
if(c1e[n]==90) autoRecover(cx1[n], cy1[n]-3, cz1[n], 3, 3);
if(c1e[n]==60) autoRecover(cx1[n], cy1[n]-2, cz1[n], 3, 3);
if(c1e[n]==30) autoRecover(cx1[n], cy1[n]-1, cz1[n], 3, 3);
if(c1e[n]==0) autoRecover(cx1[n], cy1[n], cz1[n], 3, 2);
}
if(c3a[n]==30) autoRecover(cx3[n], cy3[n], cz3[n], 13, 2);
if(c3a[n]==60) autoRecover(cx3[n], cy3[n]-1, cz3[n], 13, 3);
if(c3a[n]==90) autoRecover(cx3[n], cy3[n]-2, cz3[n], 13, 3);
if(c3a[n]==120) autoRecover(cx3[n], cy3[n]-3, cz3[n], 12, 3);
if(c3a[n]==150) autoRecover(cx3[n], cy3[n]-4, cz3[n], 12, 3);
if(c2a[n]==30) autoRecover(c2x[n], c2y[n], c2z[n], 8, 2);
if(c2a[n]==60) autoRecover(c2x[n], c2y[n]-1, c2z[n], 8, 3);
if(c2a[n]==90) autoRecover(c2x[n], c2y[n]-2, c2z[n], 8, 3);
if(c2a[n]==120) autoRecover(c2x[n], c2y[n]-3, c2z[n], 8, 3);
if(c2a[n]==150) autoRecover(c2x[n], c2y[n]-4, c2z[n], 8, 3);
if(c2a[n]==180) autoRecover(c2x[n], c2y[n]-5, c2z[n], 8, 3);
if(c4a[n]==900) autoRecover(cx2[n], cy2[n], cz2[n], 15, 2);
if(c4a[n]==930) autoRecover(cx2[n], cy2[n]-1, cz2[n], 15, 3);
if(c4a[n]==960) autoRecover(cx2[n], cy2[n]-2, cz2[n], 15, 3);
if(c4a[n]==990) autoRecover(cx2[n], cy2[n]-3, cz2[n], 15, 3);
if(c4a[n]==1020) autoRecover(cx2[n], cy2[n]-4, cz2[n], 15, 3);
if(c4a[n]==1050) autoRecover(cx2[n], cy2[n]-5, cz2[n], 15, 3);
if(c4a[n]==1080) autoRecover(cx2[n], cy2[n]-6, cz2[n], 15, 3);
}}
if(soil[0]!=null){
for(var n=0;n<soil.length;n++){
if(s2a[n]==15) autoRecover(s2x[n], s2y[n], s2z[n], 1, 2);
if(s2a[n]==45) autoRecover(s2x[n], s2y[n]-1, s2z[n], 1, 3);
if(s2a[n]==75) autoRecover(s2x[n], s2y[n]-2, s2z[n], 1, 3);
if(s2a[n]==105) autoRecover(s2x[n], s2y[n]-3, s2z[n], 1, 3);
if(s4a[n]==800) autoRecover(sx[n], sy[n], sz[n], 9, 2);
if(s4a[n]==830) autoRecover(sx[n], sy[n]-1, sz[n], 9, 3);
if(s4a[n]==860) autoRecover(sx[n], sy[n]-2, sz[n], 9, 3);
if(s4a[n]==890) autoRecover(sx[n], sy[n]-3, sz[n], 9, 3);
if(s4a[n]==920) autoRecover(sx[n], sy[n]-4, sz[n], 9, 3);
if(s4a[n]==950) autoRecover(sx[n], sy[n]-5, sz[n], 9, 3);
}}
if(light[0]!=null){
for(var n=0;n<light.length;n++){
if(l4a[n]==900) autoRecover(lxa[n], lya[n], lza[n], 16, 2);
if(l4a[n]==930) autoRecover(lxa[n], lya[n]-1, lza[n], 16, 3);
if(l4a[n]==960) autoRecover(lxa[n], lya[n]-2, lza[n], 16, 3);
if(l4a[n]==990) autoRecover(lxa[n], lya[n]-3, lza[n], 16, 3);
if(l4a[n]==1020) autoRecover(lxa[n], lya[n]-4, lza[n], 16, 3);
}}
if(titan[0]!=null){
for(var n=0;n<titan.length;n++){
if(tt4a[n]==1500) autoRecover(ttx[n], tty[n]-3, ttz[n], 14, 3);
if(tt4a[n]==1470) autoRecover(ttx[n], tty[n]-2, ttz[n], 14, 3);
if(tt4a[n]==1440) autoRecover(ttx[n], tty[n]-1, ttz[n], 14, 3);
if(tt4a[n]==1410) autoRecover(ttx[n], tty[n], ttz[n], 14, 2);
if(tt2a[n]==200) autoRecover(ttxa[n], ttya[n]-3, ttza[n], 4, 3);
if(tt2a[n]==180) autoRecover(ttxa[n], ttya[n]-2, ttza[n], 4, 2);
}}
if(thunder[0]!=null){
for(var n=0;n<thunder.length;n++){
if(th3a[n]==70) autoRecover(thxb[n], thyb[n], thzb[n], 5, 2);
if(th3a[n]==100) autoRecover(thxb[n], thyb[n]-1, thzb[n], 5, 3);
if(th3a[n]==130) autoRecover(thxb[n], thyb[n]-2, thzb[n], 5, 3);
if(th3a[n]==160) autoRecover(thxb[n], thyb[n]-3, thzb[n], 4, 3);
if(th3a[n]==190) autoRecover(thxb[n], thyb[n]-4, thzb[n], 4, 3);
if(th4a[n]==1350) autoRecover(thx[n], thy[n], thz[n], 15, 2);
if(th4a[n]==1380) autoRecover(thx[n], thy[n]-1, thz[n], 15, 3);
if(th4a[n]==1410) autoRecover(thx[n], thy[n]-2, thz[n], 15, 3);
if(th4a[n]==1440) autoRecover(thx[n], thy[n]-3, thz[n], 15, 3);
if(th4a[n]==1470) autoRecover(thx[n], thy[n]-4, thz[n], 14, 3);
if(th4a[n]==1500) autoRecover(thx[n], thy[n]-5, thz[n], 14, 3);
}}
if(tnt[0]!=null){
for(var n=0;n<tnt.length;n++){
if(tn1a[n]==1) autoRecover(tn1x[n], tn1y[n], tn1z[n], 3, 2);
if(tn1a[n]==31) autoRecover(tn1x[n], tn1y[n]-1, tn1z[n], 3, 3);
if(tn1a[n]==61) autoRecover(tn1x[n], tn1y[n]-2, tn1z[n], 3, 3);
if(tn1a[n]==91) autoRecover(tn1x[n], tn1y[n]-3, tn1z[n], 3, 3);
if(tn3a[n]==1) autoRecover(tnx3[n], tny3[n], tnz3[n], 8, 2);
if(tn3a[n]==31) autoRecover(tnx3[n], tny3[n]-1, tnz3[n], 8, 3);
if(tn3a[n]==61) autoRecover(tnx3[n], tny3[n]-2, tnz3[n], 8, 3);
if(tn3a[n]==91) autoRecover(tnx3[n], tny3[n]-3, tnz3[n], 8, 3);
if(tn3a[n]==121) autoRecover(tnx3[n], tny3[n]-4, tnz3[n], 8, 3);
if(tn4a[n]==900) autoRecover(tnx2[n], tny2[n], tnz2[n], 12, 2);
if(tn4a[n]==930) autoRecover(tnx2[n], tny2[n]-1, tnz2[n], 12, 3);
if(tn4a[n]==960) autoRecover(tnx2[n], tny2[n]-2, tnz2[n], 12, 3);
if(tn4a[n]==990) autoRecover(tnx2[n], tny2[n]-3, tnx2[n], 12, 3);
if(tn4a[n]==1020) autoRecover(tnx2[n], tny2[n]-4, tnz2[n], 12, 3);
if(tn4a[n]==1050) autoRecover(tnx2[n], tny2[n]-5, tnz2[n], 12, 3);
if(tn4a[n]==1080) autoRecover(tnx2[n], tny2[n]-6, tnz2[n], 12, 3);
if(tn4a[n]==1110) autoRecover(tnx2[n], tny2[n]-7, tnz2[n], 12, 3);
if(tn4a[n]==1140){
for(var xx=tnx2[n]-12;xx<tnx2[n]+13;xx++)
for(var zz=tnz2[n]-12;zz<tnz2[n]+13;zz++)
if(getTile(xx, tny2[n]-8, zz)==0){
setTile(xx,tny2[n]-8,zz,3);
}
}
if(tn2a[n]==1) autoRecover(tnx[n], tny[n], tnz[n], 10, 2);
if(tn2a[n]==31) autoRecover(tnx[n], tny[n]-1, tnz[n], 10, 3);
if(tn2a[n]==61) autoRecover(tnx[n], tny[n]-2, tnz[n], 10, 3);
if(tn2a[n]==91) autoRecover(tnx[n], tny[n]-3, tnz[n], 10, 3);
if(tn2a[n]==121) autoRecover(tnx[n], tny[n]-4, tnz[n], 10, 3);
if(tn2a[n]==151) autoRecover(tnx[n], tny[n]-5, tnz[n], 10, 3);
if(tn2a[n]==181) autoRecover(tnx[n], tny[n]-6, tnz[n], 10, 3);
}}
if(trap[0]!=null){
for(var n=0;n<trap.length;n++){
if(tr1a[n]==15) autoRecover(trx1[n], try1[n], trz1[n], 5, 2);
if(tr1a[n]==30) autoRecover(trx1[n], try1[n]-1, trz1[n], 5, 3);
if(tr1a[n]==45) autoRecover(trx1[n], try1[n]-2, trz1[n], 5, 3);
if(tr1a[n]==60) autoRecover(trx1[n], try1[n]-3, trz1[n], 5, 3);
if(tr1a[n]==75) autoRecover(trx1[n], try1[n]-4, trz1[n], 5, 3);
if(tr2a[n]==30) autoRecover(trx2[n], try2[n], trz2[n], 2, 2);
if(tr2a[n]==60) autoRecover(trx2[n], try2[n]-1, trz2[n], 2, 3);
if(tr2a[n]==90) autoRecover(trx2[n], try2[n]-2, trz2[n], 2, 3);
}}
if(fire[0]!=null){
for(var n=0;n<fire.length;n++){
if(f2a[n]==15) autoRecover(f2x[n], f2y[n], f2z[n], 1, 2);
if(f2a[n]==45) autoRecover(f2x[n], f2y[n]-1, f2z[n], 1, 3);
if(f2a[n]==75) autoRecover(f2x[n], f2y[n]-2, f2z[n], 1, 3);
if(f2a[n]==105) autoRecover(f2x[n], f2y[n]-3, f2z[n], 1, 3);
if(f2a[n]==135) autoRecover(f2x[n], f2y[n]-4, f2z[n], 1, 3);
}}
if(meca[0]!=null){
for(var n=0;n<meca.length;n++){
if(mm3a[n]==30) autoRecover(mmx[n], mmy[n], mmz[n], 5, 2);
if(mm3a[n]==60) autoRecover(mmx[n], mmy[n]-1, mmz[n], 5, 3);
if(mm3a[n]==90) autoRecover(mmx[n], mmy[n]-2, mmz[n], 5, 3);
if(mm2a[n]==90) autoRecover(mmx2a[n], mmy2a[n], mmz2a[n], 11, 2);
if(mm2a[n]==120) autoRecover(mmx2a[n], mmy2a[n]-1, mmz2a[n], 11, 3);
if(mm2a[n]==150) autoRecover(mmx2a[n], mmy2a[n]-2, mmz2a[n], 11, 3);
if(mm2a[n]==180) autoRecover(mmx2a[n], mmy2a[n]-3, mmz2a[n], 11, 3);
if(mm4a[n]==1000) autoRecover(mmx4[n], mmy4[n], mmz4[n], 11, 2);
if(mm4a[n]==1030) autoRecover(mmx4[n], mmy4[n]-1, mmz4[n], 11, 3);
if(mm4a[n]==1060) autoRecover(mmx4[n], mmy4[n]-2, mmz4[n], 11, 3);
if(mm4a[n]==1090) autoRecover(mmx4[n], mmy4[n]-3, mmz4[n], 11, 3);
if(mm4a[n]==1020) autoRecover(mmx4[n], mmy4[n]-4, mmz4[n], 11, 3);
}}
if(arrow[0]!=null){
for(var n=0;n<arrow.length;n++){
if(ar2a[n]==1) autoRecover(arx2[n], ary2[n], arz2[n], 5, 2);
if(ar2a[n]==31) autoRecover(arx2[n], ary2[n]-1, arz2[n], 5, 3);
if(ar2a[n]==61) autoRecover(arx2[n], ary2[n]-2, arz2[n], 5, 3);
if(ar2a[n]==91) autoRecover(arx2[n], ary2[n]-3, arz2[n], 5, 3);
if(ar2a[n]==121) autoRecover(arx2[n], ary2[n]-4, arz2[n], 5, 3);
if(ar4a[n]==600) autoRecover(arx[n], ary[n], arz[n], 14, 2);
if(ar4a[n]==630) autoRecover(arx[n], ary[n]-1, arz[n], 14, 3);
if(ar4a[n]==660) autoRecover(arx[n], ary[n]-2, arz[n], 14, 3);
if(ar4a[n]==690) autoRecover(arx[n], ary[n]-3, arz[n], 14, 3);
if(ar4a[n]==720) autoRecover(arx[n], ary[n]-4, arz[n], 14, 3);
if(ar4a[n]==750) autoRecover(arx[n], ary[n]-5, arz[n], 14, 3);
}}
if(mage[0]!=null){
for(var n=0;n<mage.length;n++){
if(ma4a[n]==600) autoRecover(max[n], may[n], maz[n], 14, 2);
if(ma4a[n]==630) autoRecover(max[n], may[n]-1, maz[n], 14, 3);
if(ma4a[n]==660) autoRecover(max[n], may[n]-2, maz[n], 14, 3);
if(ma4a[n]==690) autoRecover(max[n], may[n]-3, maz[n], 14, 3);
if(ma4a[n]==720) autoRecover(max[n], may[n]-4, maz[n], 14, 3);
if(ma4a[n]==750) autoRecover(max[n], may[n]-5, maz[n], 14, 3);
}}
if(hfreeze[0]!=null){
for(var n=0;n<hfreeze.length;n++){
if(hf4a[n]==900) autoRecover(hfx[n], hfy[n], hfz[n], 11, 2);
if(hf4a[n]==930) autoRecover(hfx[n], hfy[n]-1, hfz[n], 11, 3);
if(hf4a[n]==960) autoRecover(hfx[n], hfy[n]-2, hfz[n], 11, 3);
if(hf4a[n]==990) autoRecover(hfx[n], hfy[n]-3, hfz[n], 11, 3);
if(hf4a[n]==1020) autoRecover(hfx[n], hfy[n]-4, hfz[n], 11, 3);
}}
if(soldier[0]!=null){
for(var n=0;n<soldier.length;n++){
if(so2a[n]==1) autoRecover(so2x[n], so2y[n], so2z[n], 5, 2);
if(so2a[n]==31) autoRecover(so2x[n], so2y[n]-1, so2z[n], 5, 3);
if(so2a[n]==61) autoRecover(so2x[n], so2y[n]-2, so2z[n], 5, 3);
if(so2a[n]==91) autoRecover(so2x[n], so2y[n]-3, so2z[n], 4, 3);
if(so2a[n]==121) autoRecover(so2x[n], so2y[n]-4, so2z[n], 4, 3);
}}
if(assault[0]!=null){
for(var n=0;n<assault.length;n++){
if(asu2a[n]==30) autoRecover(asu2x[n], asu2y[n], asu2z[n], 4, 2);
if(asu2a[n]==60) autoRecover(asu2x[n], asu2y[n]-1, asu2z[n], 4, 3);
if(asu2a[n]==90) autoRecover(asu2x[n], asu2y[n]-2, asu2z[n], 4, 3);
if(asu2a[n]==120) autoRecover(asu2x[n], asu2y[n]-3, asu2z[n], 4, 3);
}}
if(burst[0]!=null){
for(var n=0;n<burst.length;n++){
if(bus4a[n]==900) autoRecover(busx[n], busy[n], busz[n], 17, 2);
if(bus4a[n]==930) autoRecover(busx[n], busy[n]-1, busz[n], 17, 3);
if(bus4a[n]==960) autoRecover(busx[n], busy[n]-2, busz[n], 17, 3);
if(bus4a[n]==990) autoRecover(busx[n], busy[n]-3, busz[n], 17, 3);
if(bus4a[n]==1020) autoRecover(busx[n], busy[n]-4, busz[n], 17, 3);
if(bus4a[n]==1050) autoRecover(busx[n], busy[n]-5, busz[n], 16, 3);
}}
if(warrior[0]!=null){
for(var n=0;n<warrior.length;n++){
if(wa4a[n]==900) autoRecover(wax[n], way[n], waz[n], 12, 2);
if(wa4a[n]==930) autoRecover(wax[n], way[n]-1, waz[n], 12, 3);
if(wa4a[n]==960) autoRecover(wax[n], way[n]-2, waz[n], 12, 3);
if(wa4a[n]==990) autoRecover(wax[n], way[n]-3, waz[n], 12, 3);
if(wa4a[n]==1020) autoRecover(wax[n], way[n]-4, waz[n], 12, 3);
}}
if(ore[0]!=null){
for(var n=0;n<ore.length;n++){
if(o3a[n]==1) autoRecover(o3x[n], o3y[n], o3z[n], 11, 2);
if(o3a[n]==31) autoRecover(o3x[n], o3y[n]-1, o3z[n], 11, 3);
if(o3a[n]==61) autoRecover(o3x[n], o3y[n]-2, o3z[n], 11, 3);
if(o4a[n]==930) autoRecover(ox[n], oy[n], oz[n], 11, 2);
if(o4a[n]==960) autoRecover(ox[n], oy[n]-1, oz[n], 11, 3);
if(o4b[n]==2){
if(o4a[n]==990) autoRecover(ox[n], oy[n]-2, oz[n], 11, 3);
if(o4a[n]==1020) autoRecover(ox[n], oy[n]-3, oz[n], 11, 3);
if(o4a[n]==1050) autoRecover(ox[n], oy[n]-4, oz[n], 11, 3);
}
}}
if(tp[0]!=null){
for(var n=0;n<tp.length;n++){
if(tp4a[n]==900) autoRecover(tpx[n], tpy[n], tpz[n], 2, 2);
if(tp4a[n]==930) autoRecover(tpx[n], tpy[n]-1, tpz[n], 2, 3);
if(tp4a[n]==960) autoRecover(tpx[n], tpy[n]-2, tpz[n], 2, 3);
if(tp4a[n]==990) autoRecover(tpx[n], tpy[n]-3, tpz[n], 2, 3);
}}
if(space[0]!=null){
for(var n=0;n<space.length;n++){
if(sp4a[n]==1350) autoRecover(spx[n], spy[n]-5, spz[n], 1, 3);
if(sp4a[n]==1320) autoRecover(spx[n], spy[n]-4, spz[n], 2, 3);
if(sp4a[n]==1290){
autoRecover(spx[n], spy[n]-3, spz[n], 3, 3);
for(var xx=spx[n]-1;xx<spx[n]+2;xx++)
for(var yy=0;yy<spy[n]-7;yy++)
for(var zz=spz[n]-1;zz<spz[n]+2;zz++)
setTile(xx, yy, zz, 0);
}
if(sp4a[n]==1260) autoRecover(spx[n], spy[n]-2, spz[n], 4, 3);
if(sp4a[n]==1230) autoRecover(spx[n], spy[n]-1, spz[n], 5, 3);
if(sp4a[n]==1200){
autoRecover(spx[n], spy[n], spz[n], 6, 2);
for(var xx=spx[n]-1;xx<spx[n]+2;xx++){
for(var zz=spz[n]-1;zz<spz[n]+2;zz++){
for(var yy=1;yy<spy[n]-5;yy++)
setTile(xx, yy, zz, 3);
setTile(xx, 0, zz, 7);
}}
}
}}
if(sattack[0]!=null){
for(var n=0;n<sattack.length;n++){
if(sa2a[n]==1) autoRecover(sa2x[n], sa2y[n], sa2z[n], 7, 2);
if(sa2a[n]==31) autoRecover(sa2x[n], sa2y[n]-1, sa2z[n], 7, 3);
if(sa2a[n]==61) autoRecover(sa2x[n], sa2y[n]-2, sa2z[n], 7, 3);
if(sa2a[n]==91) autoRecover(sa2x[n], sa2y[n]-3, sa2z[n], 7, 3);
if(sa2a[n]==121) autoRecover(sa2x[n], sa2y[n]-4, sa2z[n], 7, 3);
if(sa2a[n]==151) autoRecover(sa2x[n], sa2y[n]-5, sa2z[n], 7, 3);
if(sa2a[n]==181) autoRecover(sa2x[n], sa2y[n]-6, sa2z[n], 7, 3);
if(sa3a[n]==30) autoRecover(sa3x[n], sa3y[n], sa3z[n], 9, 2);
if(sa3a[n]==60) autoRecover(sa3x[n], sa3y[n]-1, sa3z[n], 9, 3);
if(sa3a[n]==90) autoRecover(sa3x[n], sa3y[n]-2, sa3z[n], 9, 3);
if(sa3a[n]==120) autoRecover(sa3x[n], sa3y[n]-3, sa3z[n], 9, 3);
if(sa4a[n]==1350&&sa4b[n]){
autoRecover(sax[n], say[n], saz[n], 10, 2);
sa4b[n] = false;
}
}}
if(force[0]!=null){
for(var n=0;n<force.length;n++){
if(fo4a[n]==900) autoRecover(fox[n], foy[n], foz[n], 18, 2);
if(fo4a[n]==930) autoRecover(fox[n], foy[n]-1, foz[n], 18, 3);
if(fo4a[n]==960) autoRecover(fox[n], foy[n]-2, foz[n], 18, 3);
if(fo4a[n]==990) autoRecover(fox[n], foy[n]-3, foz[n], 18, 3);
if(fo4a[n]==1020) autoRecover(fox[n], foy[n]-4, foz[n], 18, 3);
}}
if(rein[0]!=null){
for(var n=0;n<rein.length;n++){
if(re1a[n]==1) autoRecover(re1x[n], re1y[n], re1z[n], 4, 2);
if(re1a[n]==31) autoRecover(re1x[n], re1y[n]-1, re1z[n], 4, 3);
if(re1a[n]==61) autoRecover(re1x[n], re1y[n]-2, re1z[n], 4, 3);
if(re1a[n]==91) autoRecover(re1x[n], re1y[n]-3, re1z[n], 4, 3);
if(re3a[n]==31) autoRecover(re3x[n], re3y[n], re3z[n], 8, 2);
if(re3a[n]==61) autoRecover(re3x[n], re3y[n]-1, re3z[n], 8, 3);
if(re3a[n]==91) autoRecover(re3x[n], re3y[n]-2, re3z[n], 8, 3);
if(re3a[n]==121) autoRecover(re3x[n], re3y[n]-3, re3z[n], 8, 3);
if(re4a[n]==870){
for(var xx=rex[n]-11;xx<rex[n]+12;xx++)
for(var yy=rey[n];yy<rey[n]+5;yy++)
for(var zz=rez[n]-11;zz<rez[n]+12;zz++)
if(getTile(xx, yy, zz)==1){
setTile(xx, yy, zz, 0);
}
}
if(re4a[n]==900) autoRecover(rex[n], rey[n], rez[n], 12, 2);
if(re4a[n]==930) autoRecover(rex[n], rey[n]-1, rez[n], 12, 3);
if(re4a[n]==960) autoRecover(rex[n], rey[n]-2, rez[n], 12, 3);
if(re4a[n]==990) autoRecover(rex[n], rey[n]-3, rez[n], 12, 3);
if(re4a[n]==1020) autoRecover(rex[n], rey[n]-4, rez[n], 12, 3);
if(re4a[n]==1050) autoRecover(rex[n], rey[n]-5, rez[n], 12, 3);
if(re4a[n]==1080) autoRecover(rex[n], rey[n]-6, rez[n], 12, 3);
}}
if(magnet[0]!=null){
for(var n=0;n<magnet.length;n++){
if(mag3a[n]==1) autoRecover(mag3x[n], mag3y[n], mag3z[n], 9, 2);
if(mag3a[n]==31) autoRecover(mag3x[n], mag3y[n]-1, mag3z[n], 9, 3);
if(mag3a[n]==61) autoRecover(mag3x[n], mag3y[n]-2, mag3z[n], 9, 3);
if(mag4a[n]==900) autoRecover(magx[n], magy[n], magz[n], 13, 2);
if(mag4a[n]==930) autoRecover(magx[n], magy[n]-1, magz[n], 13, 3);
if(mag4a[n]==960) autoRecover(magx[n], magy[n]-2, magz[n], 13, 3);
if(mag4a[n]==990) autoRecover(magx[n], magy[n]-3, magz[n], 13, 3);
if(mag4a[n]==1020) autoRecover(magx[n], magy[n]-4, magz[n], 13, 3);
}}
if(steve[0]!=null){
for(var n=0;n<steve.length;n++){
if(Cool.isFalse(st2c[n])){
if(st2a[n]==1) autoRecover(st2x[n], st2y[n], st2z[n], 4, 2);
if(st2a[n]==31) autoRecover(st2x[n], st2y[n]-1, st2z[n], 4, 3);
if(st2a[n]==61) autoRecover(st2x[n], st2y[n]-2, st2z[n], 4, 3);
if(st2a[n]==91) autoRecover(st2x[n], st2y[n]-3, st2z[n], 4, 3);
}
if(st4a[n]==900){
for(var xx=stx[n]-19;xx<stx[n]+20;xx++)
for(var zz=stz[n]-19;zz<stz[n]+20;zz++)
if(getTile(xx, sty[n], zz)==0){
setTile(xx, sty[n], zz, 2);
}
}
if(st4a[n]==930){
for(var xx=stx[n]-19;xx<stx[n]+20;xx++)
for(var zz=stz[n]-19;zz<stz[n]+20;zz++)
if(getTile(xx, sty[n]-1, zz)==0){
setTile(xx, sty[n]-1, zz, 3);
}
}
if(st4a[n]==960){
for(var xx=stx[n]-19;xx<stx[n]+20;xx++)
for(var zz=stz[n]-19;zz<stz[n]+20;zz++)
if(getTile(xx, sty[n]-2, zz)==0){
setTile(xx, sty[n]-2, zz,3);
}
}
if(st4a[n]==990){
for(var xx=stx[n]-19;xx<stx[n]+20;xx++)
for(var zz=stz[n]-19;zz<stz[n]+20;zz++)
if(getTile(xx, sty[n]-3, zz)==0){
setTile(xx, sty[n]-3, zz,3);
}
}
if(st4a[n]==1020){
for(var xx=stx[n]-19;xx<stx[n]+20;xx++)
for(var zz=stz[n]-19;zz<stz[n]+20;zz++)
if(getTile(xx, sty[n]-4, zz)==0){
setTile(xx, sty[n]-4, zz,3);
}
}
if(st4a[n]==1050){
for(var xx=stx[n]-19;xx<stx[n]+20;xx++)
for(var zz=stz[n]-19;zz<stz[n]+20;zz++)
if(getTile(xx, sty[n]-5, zz)==0){
setTile(xx, sty[n]-5, zz,3);
}
}
if(st4a[n]==1080){
for(var xx=stx[n]-19;xx<stx[n]+20;xx++)
for(var zz=stz[n]-19;zz<stz[n]+20;zz++)
if(getTile(xx, sty[n]-6, zz)==0){
setTile(xx, sty[n]-6, zz,3);
}
}
}}
if(hero[0]!=null){
for(var n=0;n<hero.length;n++){
if(he3a[n]==1) autoRecover(he3x[n], he3y[n], he3z[n], 8, 2);
if(he3a[n]==31) autoRecover(he3x[n], he3y[n]-1, he3z[n], 8, 3);
if(he3a[n]==61) autoRecover(he3x[n], he3y[n]-2, he3z[n], 8, 3);
if(he3a[n]==91) autoRecover(he3x[n], he3y[n]-3, he3z[n], 7, 3);
if(he3a[n]==121) autoRecover(he3x[n], he3y[n]-4, he3z[n], 7, 3);
if(he3a[n]==151) autoRecover(he3x[n], he3y[n]-5, he3z[n], 7, 3);
if(he4a[n]==900) autoRecover(hex[n], hey[n], hez[n], 16, 2);
if(he4a[n]==960) autoRecover(hex[n], hey[n]-1, hez[n], 16, 3);
if(he4a[n]==990) autoRecover(hex[n], hey[n]-2, hez[n], 16, 3);
if(he4a[n]==1020) autoRecover(hex[n], hey[n]-3, hez[n], 16, 3);
if(he4a[n]==1050) autoRecover(hex[n], hey[n]-4, hez[n], 16, 3);
}}
if(sand[0]!=null){
for(var n=0;n<sand.length;n++){
if(m3a[n]==1) autoRecover(m3x[n], m3y[n], m3z[n], 4, 2);
if(m3a[n]==31) autoRecover(m3x[n], m3y[n]-1, m3z[n], 4, 3);
if(m3a[n]==61) autoRecover(m3x[n], m3y[n]-2, m3z[n], 4, 3);
}}
if(clay[0]!=null){
for(var n=0;n<clay.length;n++){
if(cl2a[n]==1) autoRecover(cl2x[n], cl2y[n], cl2z[n], 4, 2);
if(cl2a[n]==31) autoRecover(cl2x[n], cl2y[n]-1, cl2z[n], 4, 3);
if(cl2a[n]==91) autoRecover(cl2x[n], cl2y[n]-2, cl2z[n], 4, 3);
if(cl3a[n]==1) autoRecover(cl3x[n], cl3y[n], cl3z[n], 4, 2);
if(cl3a[n]==31) autoRecover(cl3x[n], cl3y[n]-1, cl3z[n], 4, 3);
if(cl3a[n]==61) autoRecover(cl3x[n], cl3y[n]-2, cl3z[n], 4, 3);
if(cl3a[n]==91) autoRecover(cl3x[n], cl3y[n]-3, cl3z[n], 4, 3);
if(cl4a[n]==900) autoRecover(clx[n], cly[n], clz[n], 11, 2);
if(cl4a[n]==930) autoRecover(clx[n], cly[n]-1, clz[n], 11, 3);
if(cl4a[n]==960) autoRecover(clx[n], cly[n]-2, clz[n], 11, 3);
if(cl4a[n]==990) autoRecover(clx[n], cly[n]-3, clz[n], 11, 3);
if(cl4a[n]==1020) autoRecover(clx[n], cly[n]-4, clz[n], 11, 3);
}}
if(kirito[0]!=null){
for(var n=0;n<kirito.length;n++){
if(k2a[n]==1) autoRecover(k2x[n], k2y[n], k2z[n], 7, 2);
if(k2a[n]==31) autoRecover(k2x[n], k2y[n]-1, k2z[n], 7, 3);
if(k2a[n]==61) autoRecover(k2x[n], k2y[n]-2, k2z[n], 7, 3);
if(k2a[n]==91) autoRecover(k2x[n], k2y[n]-3, k2z[n], 7, 3);
if(k2a[n]==1) autoRecover(k2x[n], k2y[n]-1, k2z[n], 7, 3);
}}
if(jungle[0]!=null){
for(var n=0;n<jungle.length;n++){
if(j3a[n]==1) autoRecover(j3x[n], j3y[n], j3z[n], 4, 2);
if(j3a[n]==31) autoRecover(j3x[n], j3y[n]-1, j3z[n], 4, 3);
if(j3a[n]==61) autoRecover(j3x[n], j3y[n]-2, j3z[n], 4, 3);
if(j3a[n]==91) autoRecover(j3x[n], j3y[n]-3, j3z[n], 4, 3);
if(j4a[n]==870) autoRecover(jx[n], jy[n]-6, jz[n], 11, 3);
if(j4a[n]==840) autoRecover(jx[n], jy[n]-5, jz[n], 11, 3);
if(j4a[n]==810) autoRecover(jx[n], jy[n]-4, jz[n], 11, 3);
if(j4a[n]==780) autoRecover(jx[n], jy[n]-3, jz[n], 11, 3);
if(j4a[n]==750) autoRecover(jx[n], jy[n]-2, jz[n], 11, 3);
if(j4a[n]==720) autoRecover(jx[n], jy[n]-1, jz[n], 11, 3);
if(j4a[n]==690) autoRecover(jx[n], jy[n], jz[n], 11, 2);
}}
if(kanade[0]!=null){
for(var n=0;n<kanade.length;n++){
if(ka4a[n]==900) autoRecover(kax[n], kay[n], kaz[n], 23, 2);
if(ka4a[n]==930) autoRecover(kax[n], kay[n]-1, kaz[n], 23, 3);
if(ka4a[n]==960) autoRecover(kax[n], kay[n]-2, kaz[n], 23, 3);
if(ka4a[n]==990) autoRecover(kax[n], kay[n]-3, kaz[n], 23, 3);
if(ka4a[n]==1020) autoRecover(kax[n], kay[n]-4, kaz[n], 23, 3);
if(ka4a[n]==1050) autoRecover(kax[n], kay[n]-5, kaz[n], 23, 3);
}}
if(holy[0]!=null){
for(var n=0;n<holy.length;n++){
if(ho4a[n]==900){
for(var nn=0;nn<3;nn++)
autoRecover(hox[n][nn], hoy[n], hoz[n][nn], 12, 2);
}
if(ho4a[n]==930){
for(var nn=0;nn<3;nn++)
autoRecover(hox[n][nn], hoy[n]-1, hoz[n][nn], 12, 3);
}
if(ho4a[n]==960){
for(var nn=0;nn<3;nn++)
autoRecover(hox[n][nn], hoy[n]-2, hoz[n][nn], 12, 3);
}
if(ho4a[n]==990){
for(var nn=0;nn<3;nn++)
autoRecover(hox[n][nn], hoy[n]-3, hoz[n][nn], 12, 3);
}
if(ho4a[n]==1020){
for(var nn=0;nn<3;nn++)
autoRecover(hox[n][nn], hoy[n]-4, hoz[n][nn], 12, 3);
}
if(ho4a[n]==1050){
for(var nn=0;nn<3;nn++)
autoRecover(hox[n][nn], hoy[n]-5, hoz[n][nn], 12, 3);
}
}}
if(has[0]!=null){
for(var n=0;n<has.length;n++){
if(ha2a[n]==30) autoRecover(ha2x[n], ha2y[n], ha2z[n], 5, 2);
if(ha2a[n]==60) autoRecover(ha2x[n], ha2y[n]-1, ha2z[n], 5, 3);
if(ha2a[n]==90) autoRecover(ha2x[n], ha2y[n]-2, ha2z[n], 5, 3);
if(ha2a[n]==120) autoRecover(ha2x[n], ha2y[n]-3, ha2z[n], 5, 3);
if(ha2a[n]==150) autoRecover(ha2x[n], ha2y[n]-4, ha2z[n], 5, 3);
}}
if(random[0]!=null){
for(var n=0;n<random.length;n++){
if(ra4a[n]==1755&&ra4b[n]==1){
for(var xx=rax[n]-12;xx<rax[n]+13;xx++)
setTile(xx, ray[n], raz[n], 2);
for(var zz=raz[n]-12;zz<raz[n]+13;zz++)
setTile(rax[n], ray[n], zz, 2);
}
if(ra4b==1||ra4b==3){
if(ra4a[n]==900) autoRecover(rax[n], ray[n], raz[n], 12, 2);
if(ra4a[n]==930) autoRecover(rax[n], ray[n]-1, raz[n], 12, 3);
}
if(ra4b==3){
if(ra4a[n]==960) autoRecover(rax[n], ray[n]-2, raz[n], 12, 3);
if(ra4a[n]==990) autoRecover(rax[n], ray[n]-3, raz[n], 12, 3);
if(ra4a[n]==1020) autoRecover(rax[n], ray[n]-4, raz[n], 12, 3);
if(ra4a[n]==1050) autoRecover(rax[n], ray[n]-5, raz[n], 12, 3);
}
}}
if(zwei[0]!=null){
for(var n=0;n<zwei.length;n++){
if(zw4a[n]==1350){
for each(var pos in zw4b[n]) autoRecover(pos[0], pos[1], pos[2], 4, 2);
}
if(zw4a[n]==1380){
for each(var pos in zw4b[n]) autoRecover(pos[0], pos[1]-1, pos[2], 4, 3);
}
if(zw4a[n]==1410){
for each(var pos in zw4b[n]) autoRecover(pos[0], pos[1]-2, pos[2], 4, 3);
}
if(zw4a[n]==1440){
for each(var pos in zw4b[n]) autoRecover(pos[0], pos[1]-3, pos[2], 4, 3);
}
}}
if(deco[0]!=null){
for(var n=0;n<deco.length;n++){
if(dec3a[n]==30) autoRecover(dec3x[n], dec3y[n], dec3z[n], 10, 2);
if(dec3a[n]==60) autoRecover(dec3x[n], dec3y[n]-1, dec3z[n], 10, 3);
if(dec3a[n]==90) autoRecover(dec3x[n], dec3y[n]-2, dec3z[n], 10, 3);
if(dec3a[n]==120) autoRecover(dec3x[n], dec3y[n]-3, dec3z[n], 10, 3);
if(dec4a[n]==900) autoRecover(decx[n], decy[n], decz[n], 14, 2);
if(dec4a[n]==930) autoRecover(decx[n], decy[n]-1, decz[n], 14, 3);
if(dec4a[n]==960) autoRecover(decx[n], decy[n]-2, decz[n], 14, 3);
if(dec4a[n]==990) autoRecover(decx[n], decy[n]-3, decz[n], 14, 3);
if(dec4a[n]==1020) autoRecover(decx[n], decy[n]-4, decz[n], 14, 3);
if(dec4a[n]==1050) autoRecover(decx[n], decy[n]-5, decz[n], 14, 3);
if(dec4a[n]==1080) autoRecover(decx[n], decy[n]-6, decz[n], 14, 3);
if(dec4a[n]==1100) autoRecover(decx[n], decy[n]-7, decz[n], 14, 3);
if(dec4a[n]==1140) autoRecover(decx[n], decy[n]-8, decz[n], 14, 3);
}}
if(wind[0]!=null){
for(var n=0;n<wind.length;n++){
if(wi4a[n]==900) autoRecover(wix[n], wiy[n], wix[n], 9, 2);
if(wi4a[n]==930) autoRecover(wix[n], wiy[n]-1, wix[n], 9, 3);
if(wi4a[n]==960) autoRecover(wix[n], wiy[n]-2, wix[n], 9, 3);
if(wi4a[n]==990) autoRecover(wix[n], wiy[n]-3, wix[n], 9, 3);
}}
if(energy[0]!=null){
for(var n=0;n<energy.length;n++){
if(en1a[n]==1) autoRecover(en1x[n], en1y[n], en1z[n], 5, 2);
if(en1a[n]==31) autoRecover(en1x[n], en1y[n]-1, en1z[n], 5, 3);
if(en1a[n]==61) autoRecover(en1x[n], en1y[n]-2, en1z[n], 5, 3);
if(en1a[n]==61) autoRecover(en1x[n], en1y[n]-3, en1z[n], 5, 3);
if(en3a[n]==1) autoRecover(en3x[n], en3y[n], en3z[n], 10, 2);
if(en3a[n]==31) autoRecover(en3x[n], en3y[n]-1, en3z[n], 10, 3);
if(en3a[n]==61) autoRecover(en3x[n], en3y[n]-2, en3z[n], 10, 3);
if(en3a[n]==91) autoRecover(en3x[n], en3y[n]-3, en3z[n], 10, 3);
if(en3a[n]==121) autoRecover(en3x[n], en3y[n]-4, en3z[n], 10, 3);
}}
if(geno[0]!=null){
for(var n=0;n<geno.length;n++){
if(g2a[n]==1) autoRecover(g2x[n], g2y[n], g2z[n], 6, 2);
if(g2a[n]==31) autoRecover(g2x[n], g2y[n]-1, g2z[n], 6, 3);
if(g2a[n]==61) autoRecover(g2x[n], g2y[n]-2, g2z[n], 6, 3);
if(g2a[n]==91) autoRecover(g2x[n], g2y[n]-3, g2z[n], 6, 3);
if(g4a[n]==900){
for(var nn in g4b[n]) autoRecover(g4b[n][0], g4b[n][1], g4b[n][2], 4, 2);
}
if(g4a[n]==930){
for(var nn in g4b[n]) autoRecover(g4b[n][0], g4b[n][1]-1, g4b[n][2], 4, 3);
}
if(g4a[n]==960){
for(var nn in g4b[n]) autoRecover(g4b[n][0], g4b[n][1]-2, g4b[n][2], 4, 3);
}
if(g4a[n]==990){
for(var nn in g4b[n]) autoRecover(g4b[n][0], g4b[n][1]-3, g4b[n][2], 4, 3);
}
}}
if(rgun[0]!=null){
for(var n=0;n<rgun.length;n++){
if(rg3a[n]==1) autoRecover(rg3x[n], rg3y[n], rg3z[n], 12, 2);
if(rg3a[n]==31) autoRecover(rg3x[n], rg3y[n]-1, rg3z[n], 12, 3);
if(rg3a[n]==61) autoRecover(rg3x[n], rg3y[n]-2, rg3z[n], 12, 3);
if(rg3a[n]==91) autoRecover(rg3x[n], rg3y[n]-3, rg3z[n], 12, 3);
if(rg3a[n]==121) autoRecover(rg3x[n], rg3y[n]-4, rg3z[n], 12, 3);
if(rg4a[n]==900){
autoRecover(rgx[n][0], rgy[n], rgz[n][0], 7, 2);
for(var nn=1;nn<4;nn++) autoRecover(rgx[n][nn], rgy[n], rgz[n][nn], 14, 2);
}
if(rg4a[n]==930){
autoRecover(rgx[n][0], rgy[n]-1, rgz[n][0], 7, 3);
for(var nn=1;nn<4;nn++) autoRecover(rgx[n][nn], rgy[n]-1, rgz[n][nn], 14, 3);
}
if(rg4a[n]==960){
autoRecover(rgx[n][0], rgy[n]-2, rgz[n][0], 7, 3);
for(var nn=1;nn<4;nn++) autoRecover(rgx[n][nn], rgy[n]-2, rgz[n][nn], 14, 3);
}
if(rg4a[n]==990){
autoRecover(rgx[n][0], rgy[n]-3, rgz[n][0], 7, 3);
for(var nn=1;nn<4;nn++) autoRecover(rgx[n][nn], rgy[n]-3, rgz[n][nn], 14, 3);
}
if(rg4a[n]==1020){
for(var nn=1;nn<4;nn++) autoRecover(rgx[n][nn], rgy[n]-4, rgz[n][nn], 14, 3);
}
if(rg4a[n]==1050){
for(var nn=1;nn<4;nn++) autoRecover(rgx[n][nn], rgy[n]-5, rgz[n][nn], 14, 3);
}
if(rg4a[n]==1080){
for(var nn=1;nn<4;nn++) autoRecover(rgx[n][nn], rgy[n]-6, rgz[n][nn], 14, 3);
}
}}
if(copy[0]!=null){
for(var n=0;n<copy.length;n++){
if(co4a[n]==900) autoRecover(cox[n], coy[n], coz[n], 14, 2);
if(co4a[n]==930) autoRecover(cox[n], coy[n]-1, coz[n], 14, 3);
if(co4a[n]==960) autoRecover(cox[n], coy[n]-2, coz[n], 14, 3);
if(co4a[n]==990) autoRecover(cox[n], coy[n]-3, coz[n], 14, 3);
if(co4a[n]==1020) autoRecover(cox[n], coy[n]-4, coz[n], 14, 3);
}}
if(dragon[0]!=null){
for(var n=0;n<dragon.length;n++){
if(dr4a[n]==900) autoRecover(drx[n], dry[n], drz[n], 12, 2);
if(dr4a[n]==930) autoRecover(drx[n], dry[n]-1, drz[n], 12, 3);
if(dr4a[n]==960) autoRecover(drx[n], dry[n]-2, drz[n], 12, 3);
if(dr4a[n]==990) autoRecover(drx[n], dry[n]-3, drz[n], 12, 3);
if(dr4a[n]==1020) autoRecover(drx[n], dry[n]-4, drz[n], 12, 3);
}}
if(hawk[0]!=null){
for(var n=0;n<hawk.length;n++){
if(hw1a[n]==75) autoRecover(hw1x[n], hw1y[n], hw1z[n], 14, 2);
if(hw4a[n]==900) autoRecover(hwx[n], hwy[n], hwz[n], 14, 2);
if(hw4a[n]==930) autoRecover(hwx[n], hwy[n]-1, hwz[n], 14, 3);
if(hw4a[n]==960) autoRecover(hwx[n], hwy[n]-2, hwz[n], 14, 3);
if(hw4a[n]==990) autoRecover(hwx[n], hwy[n]-3, hwz[n], 14, 3);
if(hw4a[n]==1020) autoRecover(hwx[n], hwy[n]-4, hwz[n], 14, 3);
}}
if(gravity[0]!=null){
for(var n=0;n<gravity.length;n++){
if(gr4a[n]==900) autoRecover(grx[n], gry[n], grz[n], 14, 2);
if(gr4a[n]==930) autoRecover(grx[n], gry[n]-1, grz[n], 14, 3);
if(gr4a[n]==960) autoRecover(grx[n], gry[n]-2, grz[n], 14, 3);
if(gr4a[n]==990) autoRecover(grx[n], gry[n]-3, grz[n], 14, 3);
if(gr4a[n]==1020) autoRecover(grx[n], gry[n]-4, grz[n], 14, 3);
}}
if(black[0]!=null){
for(var n=0;n<black.length;n++){
if(bl4a[n]==900) autoRecover(blx[n], bly[n], blz[n], 24, 2);
if(bl4a[n]==930) autoRecover(blx[n], bly[n]-1, blz[n], 24, 3);
if(bl4a[n]==960) autoRecover(blx[n], bly[n]-2, blz[n], 24, 3);
if(bl4a[n]==990) autoRecover(blx[n], bly[n]-3, blz[n], 24, 3);
if(bl4a[n]==1020) autoRecover(blx[n], bly[n]-4, blz[n], 24, 3);
}}
if(slash[0]!=null){
for(var n=0;n<slash.length;n++){
if(sl4a[n]==900) autoRecover(slx[n], sly[n], slz[n], 15, 2);
if(sl4a[n]==930) autoRecover(slx[n], sly[n]-1, slz[n], 15, 3);
if(sl4a[n]==960) autoRecover(slx[n], sly[n]-2, slz[n], 15, 3);
if(sl4a[n]==990) autoRecover(slx[n], sly[n]-3, slz[n], 15, 3);
if(sl4a[n]==1020) autoRecover(slx[n], sly[n]-4, slz[n], 15, 3);
}}
if(mush[0]!=null){
for(var n=0;n<mush.length;n++){
if(mu4a[n]==900){
for(var xx=mux[n]-9;xx<mux[n]+10;xx++)
for(var yy=muy[n]+1;yy<muy[n]+8;yy++)
for(var zz=muz[n]-9;zz<muz[n]+10;zz++)
if(getTile(xx, yy, zz)!=7){
setTile(xx, yy, zz, 0);
}
autoRecover(mux[n], muy[n], muz[n], 9, 2);
}
}}
if(ender[0]!=null){
for(var n=0;n<ender.length;n++){
if(end4a[n]==900){
for(var xx=endx[n]+2;xx<endx[n]+5;xx++)
for(var yy=endy[n]+1;yy<endy[n]+8;yy++)
for(var zz=endz[n]-5;zz<endz[n]-2;zz++)
setTile(xx, yy, zz, 0);
setTile(endx[n]+3, endy[n]+7, endz[n]-4, 0);
setTile(endx[n]+3, endy[n]+9, endz[n]-4, 0);
for(var xx=endx[n]-9;xx<endx[n]+10;xx++)
for(var yy=endy[n]+1;yy<endy[n]+3;yy++)
for(var zz=endz[n]-9;zz<endz[n]+10;zz++)
if(getTile(xx, yy, zz)!=7){
setTile(xx, yy, zz, 0);
}
for(var xx=endx[n]-9;xx<endx[n]+10;xx++)
for(var zz=endz[n]-9;zz<endz[n]+10;zz++)
setTile(xx, endy[n], zz, 2);
}
}}
if(taiga[0]!=null){
for(var n=0;n<taiga.length;n++){
if(ta4a[n]==900){
for(var xx=tax[n]-9;xx<tax[n]+10;xx++)
for(var yy=tay[n]+1;yy<tay[n]+24;yy++)
for(var zz=taz[n]-9;zz<taz[n]+10;zz++)
if(getTile(xx, yy, zz)!=7){
setTile(xx, yy, zz, 0);
}
setTile(tax[n]-4, tay[n]+25, taz[n]-4, 0);
setTile(tax[n]-4, tay[n]+25, taz[n]-3, 0);
for(var xx=tax[n]-5;xx<tax[n]-2;xx++)
for(var zz=taz[n]-4;zz<taz[n]-2;zz++)
setTile(xx, tay[n]+24, zz, 0);
setTile(tax[n]-4, tay[n]+24, taz[n]-5, 0);
setTile(tax[n]-4, tay[n]+24, taz[n]-4, 0);
setTile(tax[n]-3, tay[n]+24, taz[n]-5, 0);
setTile(tax[n]-3, tay[n]+24, taz[n]-2, 0);
setTile(tax[n]-3, tay[n]+24, taz[n]-5, 0);
setTile(tax[n]-3, tay[n]+24, taz[n]-2, 0);
for(var xx=tax[n]-9;xx<tax[n]+10;xx++)
for(var zz=taz[n]-9;zz<taz[n]+10;zz++)
setTile(xx, tay[n], zz, 2);
}
}}
if(ruin[0]!=null){
for(var n=0;n<ruin.length;n++){
if(ru3a[n]==1) autoRecover(ru3x[n], ru3y[n], ru3z[n], 12, 2);
if(ru3a[n]==31) autoRecover(ru3x[n], ru3y[n]-1, ru3z[n], 12, 3);
if(ru3a[n]==61) autoRecover(ru3x[n], ru3y[n]-2, ru3z[n], 12, 3);
if(ru3a[n]==91) autoRecover(ru3x[n], ru3y[n]-3, ru3z[n], 12, 3);
if(ru3a[n]==121) autoRecover(ru3x[n], ru3y[n]-4, ru3z[n], 12, 3);
if(ru4a[n]==900) autoRecover(rux[n], ruy[n], ruz[n], 20, 2);
if(ru4a[n]==930) autoRecover(rux[n], ruy[n]-1, ruz[n], 20, 3);
if(ru4a[n]==960) autoRecover(rux[n], ruy[n]-2, ruz[n], 20, 3);
if(ru4a[n]==990) autoRecover(rux[n], ruy[n]-3, ruz[n], 20, 3);
if(ru4a[n]==1020) autoRecover(rux[n], ruy[n]-4, ruz[n], 20, 3);
if(ru4a[n]==1050) autoRecover(rux[n], ruy[n]-5, ruz[n], 20, 3);
if(ru4a[n]==1080) autoRecover(rux[n], ruy[n]-6, ruz[n], 20, 3);
if(ru4a[n]==1100) autoRecover(rux[n], ruy[n]-7, ruz[n], 20, 3);
}}
if(swamp[0]!=null){
for(var n=0;n<swamp.length;n++){
if(sw4a[n]==900){
for(var xx=swx[n]-5;xx<swx[n]+6;xx++)
for(var yy=swy[n]+1;yy<swy[n]+9;yy++)
for(var zz=swz[n]-5;zz<swz[n]+6;zz++)
if(getTile(xx, yy, zz)!=7){
setTile(xx, yy, zz, 0);
}
for(var xx=swx[n]-9;xx<swx[n]+10;xx++)
for(var zz=swz[n]-9;zz<swz[n]+10;zz++)
setTile(xx, swy[n], zz, 2);
}
}}
if(amage[0]!=null){
for(var n=0;n<amage.length;n++){
if(am3a[n]==1) autoRecover(am3x[n], am3y[n], am3z[n], 10, 2);
if(am3a[n]==31) autoRecover(am3x[n], am3y[n]-1, am3z[n], 10, 3);
if(am3a[n]==61) autoRecover(am3x[n], am3y[n]-2, am3z[n], 10, 3);
if(am3a[n]==91) autoRecover(am3x[n], am3y[n]-3, am3z[n], 10, 3);
if(am3a[n]==121) autoRecover(am3x[n], am3y[n]-4, am3z[n], 10, 3);
if(am3a[n]==151) autoRecover(am3x[n], am3y[n]-5, am3z[n], 10, 3);
if(am4a[n]==900) autoRecover(amx[n], amy[n], amz[n], 12, 2);
if(am4a[n]==930) autoRecover(amx[n], amy[n]-1, amz[n], 12, 3);
if(am4a[n]==960) autoRecover(amx[n], amy[n]-2, amz[n], 12, 3);
}}
if(hbuild[0]!=null){
for(var n=0;n<hbuild.length;n++){
if(hb4a[n]==900){
ESP.antiLack(5);
for(var xx=hbx[n]-4;xx<hbx[n]+5;xx++)
for(var yy=hby[n]+1;yy<hby[n]+28;yy++)
for(var zz=hbz[n]-4;zz<hbz[n]+5;zz++)
if(getTile(xx, yy, zz)!=7){
setTile(xx, yy, zz, 0);
}
setTile(hbx[n]-1, hby[n]+1, hbz[n]-5, 0);
setTile(hbx[n], hby[n]+1, hbz[n]-5, 0);
setTile(hbx[n]+1, hby[n]+1, hbz[n]-5, 0);
setTile(hbx[n], hby[n]+28, hbz[n], 0);
setTile(hbx[n], hby[n]+29, hbz[n], 0);
}
}}
if(scalar[0]!=null){
for(var n=0;n<scalar.length;n++){
if(sc1a[n]==1) autoRecover(sc1x[n], sc1y[n], sc1z[n], 6, 2);
if(sc1a[n]==31) autoRecover(sc1x[n], sc1y[n]-1, sc1z[n], 6, 3);
if(sc1a[n]==61) autoRecover(sc1x[n], sc1y[n]-2, sc1z[n], 6, 2);
if(sc1a[n]==91) autoRecover(sc1x[n], sc1y[n]-3, sc1z[n], 6, 2);
}}
if(tensor[0]!=null){
for(var n=0;n<tensor.length;n++){
if(te2a[n]==1) autoRecover(te2x[n], te2y[n], te2z[n], 8, 2);
if(te2a[n]==31) autoRecover(te2x[n], te2y[n]-1, te2z[n], 8, 3);
if(te2a[n]==61) autoRecover(te2x[n], te2y[n]-2, te2z[n], 8, 3);
if(te2a[n]==91) autoRecover(te2x[n], te2y[n]-3, te2z[n], 8, 3);
if(te2a[n]==121) autoRecover(te2x[n], te2y[n]-4, te2z[n], 8, 3);
if(te2a[n]==151) autoRecover(te2x[n], te2y[n]-5, te2z[n], 8, 3);
}}
if(ameca[0]!=null){
for(var n=0;n<ameca.length;n++){
if(ame2a[n]==1) autoRecover(ame2x[n], ame2y[n], ame2z[n], 16, 2);
if(ame2a[n]==31) autoRecover(ame2x[n], ame2y[n]-1, ame2z[n], 16, 3);
if(ame2a[n]==61) autoRecover(ame2x[n], ame2y[n]-2, ame2z[n], 16, 3);
if(ame2a[n]==91) autoRecover(ame2x[n], ame2y[n]-3, ame2z[n], 16, 3);
if(ame2a[n]==121) autoRecover(ame2x[n], ame2y[n]-4, ame2z[n], 16, 3);
if(ame2a[n]==151) autoRecover(ame2x[n], ame2y[n]-5, ame2z[n], 16, 3);
}}
if(angel[0]!=null){
for(var n=0;n<angel.length;n++){
if(an4a[n]==900) autoRecover(anx[n], any[n], anz[n], 13, 2);
if(an4a[n]==930) autoRecover(anx[n], any[n]-1, anz[n], 13, 3);
if(an4a[n]==960) autoRecover(anx[n], any[n]-2, anz[n], 13, 3);
if(an4a[n]==990) autoRecover(anx[n], any[n]-3, anz[n], 13, 3);
if(an4a[n]==1020) autoRecover(anx[n], any[n]-4, anz[n], 13, 3);
if(an4a[n]==1050) autoRecover(anx[n], any[n]-5, anz[n], 13, 3);
}}
if(white[0]!=null){
for(var n=0;n<white.length;n++){
if(wh4a[n]==900) autoRecover(whx[n], why[n], whz[n], 14, 2);
if(wh4a[n]==930) autoRecover(whx[n], why[n]-1, whz[n], 14, 3);
if(wh4a[n]==960) autoRecover(whx[n], why[n]-2, whz[n], 14, 3);
if(wh4a[n]==990) autoRecover(whx[n], why[n]-3, whz[n], 14, 3);
if(wh4a[n]==1020) autoRecover(whx[n], why[n]-4, whz[n], 14, 3);
}}



//-----------------
if(dt4a==900){
for(var xx=dtx-1;xx<dtx+2;xx++)
for(var zz=dtz-1;zz<dtz+2;zz++)
setTile(xx, dty+5, zz, 0);
}
if(dt4a==600){
for(var xx=dtx-17;xx<dtx+18;xx++)
for(var zz=dtz-17;zz<dtz+18;zz++)
setTile(xx, dty, zz, 2);
}
if(dt4a==630){
for(var xx=dtx-17;xx<dtx+18;xx++)
for(var zz=dtz-17;zz<dtz+18;zz++)
setTile(xx, dty-1, zz, 3);
}
if(dt4a==660){
for(var xx=dtx-17;xx<dtx+18;xx++)
for(var zz=dtz-17;zz<dtz+18;zz++)
setTile(xx, dty-2, zz, 3);
}
if(dt4a==680){
for(var xx=dtx-17;xx<dtx+18;xx++)
for(var zz=dtz-17;zz<dtz+18;zz++)
setTile(xx, dty-3, zz, 3);
}
if(dt4a==720){
for(var xx=dtx-17;xx<dtx+18;xx++)
for(var zz=dtz-17;zz<dtz+18;zz++)
setTile(xx, dty-4, zz, 3);
}
if(dt4a==750){
for(var xx=dtx-17;xx<dtx+18;xx++)
for(var zz=dtz-17;zz<dtz+18;zz++)
setTile(xx, dty-5, zz, 3);
}
if(dt4a==780){
for(var xx=dtx-17;xx<dtx+18;xx++)
for(var zz=dtz-17;zz<dtz+18;zz++)
setTile(xx, dty-6, zz, 3);
}
if(dt4a==810){
for(var xx=dtx-16;xx<dtx+19;xx++)
for(var zz=dtz-16;zz<dtz+19;zz++)
setTile(xx, dty-7, zz, 3);
}
if(kp3==1){
for(var xx=kp3x-10;xx<kp3x+11;xx++)
for(var zz=kp3z-10;zz<kp3z+11;zz++)
setTile(xx, kp3y, zz, 2);
}
if(kp3==31){
for(var xx=kp3x-10;xx<kp3x+11;xx++)
for(var zz=kp3z-10;zz<kp3z+11;zz++)
setTile(xx, kp3y-1, zz, 3);
}
if(kp3==61){
for(var xx=kp3x-10;xx<kp3x+11;xx++)
for(var zz=kp3z-10;zz<kp3z+11;zz++)
setTile(xx, kp3y-2, zz, 3);
}
if(kp3==91){
for(var xx=kp3x-10;xx<kp3x+11;xx++)
for(var zz=kp3z-10;zz<kp3z+11;zz++)
setTile(xx, kp3y-3, zz, 3);
}
if(kp4==900){
for(var xx=kpx-11;xx<kpx+12;xx++)
for(var zz=kpz-11;zz<kpz+12;zz++)
setTile(xx, kpy, zz, 2);
}
if(kp4==930){
for(var xx=kpx-11;xx<kpx+12;xx++)
for(var zz=kpz-11;zz<kpz+12;zz++)
setTile(xx, kpy-1, zz, 3);
}
if(kp4==960){
for(var xx=kpx-11;xx<kpx+12;xx++)
for(var zz=kpz-11;zz<kpz+12;zz++)
setTile(xx, kpy-2, zz, 3);
}
if(kp4==990){
for(var xx=kpx-11;xx<kpx+12;xx++)
for(var zz=kpz-11;zz<kpz+12;zz++)
setTile(xx, kpy-3, zz, 3);
}


}
}).start(); //저기
}


//-----------------------------
if(h.r1>0){
h.r1--;
}
if(h.r2>0){
h.r2--;
}
if(h.r3>0){
h.r3--;
}
if(h.r4>0){
h.r4--;
}

if(h.r4==900){
for(var xx=h.rx-20;xx<h.rx+21;xx++)
for(var zz=h.rz-20;zz<h.rz+21;zz++)
setTile(xx, h.ry, zz, 2);
}
if(h.r4==930){
for(var xx=h.rx-20;xx<h.rx+21;xx++)
for(var zz=h.rz-20;zz<h.rz+21;zz++)
setTile(xx, h.ry-1, zz, 3);
}
if(h.r4==960){
for(var xx=h.rx-20;xx<h.rx+21;xx++)
for(var zz=h.rz-20;zz<h.rz+21;zz++)
setTile(xx, h.ry-2, zz, 3);
}
if(h.r4==990){
for(var xx=h.rx-20;xx<h.rx+21;xx++)
for(var zz=h.rz-20;zz<h.rz+21;zz++)
setTile(xx, h.ry-3, zz, 3);
}
if(h.r4==1020){
for(var xx=h.rx-20;xx<h.rx+21;xx++)
for(var zz=h.rz-20;zz<h.rz+21;zz++)
setTile(xx, h.ry-4, zz, 3);
}
if(h.r4==1050){
for(var xx=h.rx-20;xx<h.rx+21;xx++)
for(var zz=h.rz-20;zz<h.rz+21;zz++)
setTile(xx, h.ry-5, zz, 3);
}
if(h.r4==1080){
for(var xx=h.rx-20;xx<h.rx+21;xx++)
for(var zz=h.rz-20;zz<h.rz+21;zz++)
setTile(xx, h.ry-6, zz, 3);
}
if(h.r4==1110){
for(var xx=h.rx-20;xx<h.rx+21;xx++)
for(var zz=h.rz-20;zz<h.rz+21;zz++)
if(getTile(xx, h.ry-7, zz)==0){
setTile(xx, h.ry-7, zz, 3);
}
}


//passive
if(passOnoff){
new Thread({
run : function(){
if(fire[0]!=null){
for(var n=0;n<fire.length;n++){
Entity.setFireTicks(fire[n], 0);
if(mcpev3) Entity.addEffect(fire[n], MobEffect.fireResistance, 10, 0, true, false);
if(getTile(Entity.getX(fire[n]), Entity.getY(fire[n])-1, Entity.getZ(fire[n]))==51){
ESP.setHealth(fire[n], f0[n]);
}
else{
f0[n] = Entity.getHealth(fire[n]);
}
}
}
if(water[0]!=null){
for(var n=0;n<water.length;n++){
if([8, 9].indexOf(getTile(Entity.getX(water[n]), Entity.getY(water[n])-1, Entity.getZ(water[n])))!=-1&&[8, 9].indexOf(getTile(Entity.getX(water[n]), Entity.getY(water[n])-2, Entity.getZ(water[n])))!=-1&&Entity.getHealth(water[n])>0){
ESP.setHealth(water[n], w0[n]);
}
else{
w0[n] = Entity.getHealth(water[n]);
}
}
}
if(tree[0]!=null){
if(t0>0){
t0--;
}
if(t0==0){
t0 = 75;
}
if(t0==1&&tree[0]!=null){
if(tree[1]!=null){
for(var n=0;n<tree.length;n++)
ESP.healNG(n);
}
else{
ESP.healNG(0);
}
}
}
if(soil[0]!=null){
for(var n=0;n<soil.length;n++){
var sbbbb = getTile(Entity.getX(soil[n]), Entity.getY(soil[n]), Entity.getZ(soil[n]));
if(sbbbb==1||sbbbb==2||sbbbb==3||sbbbb==4||sbbbb==12||sbbbb==13||sbbbb==24){
setTile(Entity.getX(soil[n]), Entity.getY(soil[n]), Entity.getZ(soil[n]), 0);
}
}
}
if(ice[0]!=null){
if(i0>0){
i0--;
}
if(i0==0){
i0 = 75;
}
if(i0==1&&ice!=null){
for(var n=0;n<ice.length;n++)
ESP.healFreezer(n);
}
}
if(sand[0]!=null){
if(m0>0){
m0--;
}
if(m0==0){
m0 = 75;
}
if(m0==1){
for(var n=0;n<sand.length;n++){
if([12, 24].indexOf(getTile(Entity.getX(sand[n]), Entity.getY(sand[n])-2, Entity.getZ(sand[n])))!=-1&&Entity.getHealth(sand[n])<=25){
ESP.setHealth(sand[n], Entity.getHealth(sand[n])+2);
}
}
}
}
if(elsa[0]!=null){
if(e0>0){
e0--;
}
if(e0==0){
e0 = 75;
}
if(e0==1){
for(var n=0;n<elsa.length;n++){
if(getTile(Entity.getX(elsa[n]), Entity.getY(elsa[n])-2, Entity.getZ(elsa[n]))==79&&Entity.getHealth(elsa[n])<=25){
ESP.setHealth(elsa[n], Entity.getHealth(elsa[n])+2);
}
}
}
}
if(meca[0]!=null){
if(mm0>0){
mm0--;
}
if(mm0==0){
mm0 = 75;
}
if(mm0==1){
for(var n=0;n<meca.length;n++){
if(Entity.getHealth(meca[n])<20)
ESP.setHealth(meca[n], Entity.getHealth(meca[n])+1);
}
}
}
if(heal[0]!=null){
if(h0>0){
h0--;
}
if(h0==0){
h0 = 75;
}
if(h0==1){
for(var n=0;n<heal.length;n++){
if(Entity.getHealth(heal[n])<60) ESP.setHealth(heal[n], Entity.getHealth(heal[n])+2);
}
}
}
if(nether[0]!=null){
if(n0>0){
n0--;
}
if(n0==0){
n0 = 75;
}
if(n0==1){
for(var n=0;n<nether.length;n++)
if(getTile(Entity.getX(nether[n]), Entity.getY(nether[n])-2, Entity.getZ(nether[n]))==87&&Entity.getHealth(nether[n])<=25){
ESP.setHealth(nether[n], Entity.getHealth(nether[n])+2);
}
}
}
if(cloud[0]!=null){
if(cc0>0){
cc0--;
}
if(cc0==0){
cc0 = 75;
}
if(cc0==1){
for(var n=0;n<cloud.length;n++)
if(getTile(Entity.getX(cloud[n]), Entity.getY(cloud[n])-2, Entity.getZ(cloud[n]))==35&&Level.getData(Entity.getX(cloud[n]), Entity.getY(cloud[n])-2, Entity.getZ(cloud[n]))==0&&Entity.getHealth(cloud[n])<=25){
ESP.setHealth(cloud[n], Entity.getHealth(cloud[n])+2);
}
}
}
if(melt[0]!=null){
for(var n=0;n<melt.length;n++){
if((getTile(Entity.getX(melt[n]), Entity.getY(melt[n])-1, Entity.getZ(melt[n]))==10||getTile(Entity.getX(melt[n]), Entity.getY(melt[n])-1, Entity.getZ(melt[n]))==11)){
Entity.addEffect(melt[n], MobEffect.fireResistance, 20, 0, true, false);
if(Entity.getHealth(melt[n])>0) ESP.setHealth(melt[n], me0[n]);
}
else{
me0[n] = Entity.getHealth(melt[n]);
}
}
}
if(hfreeze[0]!=null){
for(var n=0;n<hfreeze.length;n++){
if((getTile(Entity.getX(hfreeze[n]), Entity.getY(hfreeze[n])-2, Entity.getZ(hfreeze[n]))==79||getTile(Entity.getX(hfreeze[n]), Entity.getY(hfreeze[n])-3, Entity.getZ(hfreeze[n]))==79)&&Entity.getHealth(hfreeze[n])>0){
ESP.setHealth(hfreeze[n], hf0[n]);
}
else{
hf0[n] = Entity.getHealth(hfreeze[n]);
}
}
}
if(hermit[0]!=null){
if(her0>0){
her0--;
}
if(her0==0){
her0 = 75;
}
if(her0==1&&hermit[0]!=null){
for(var n=0;n<hermit.length;n++)
ESP.healHermit(n);
}
}
if(jungle[0]!=null){
if(j0>0){
j0--;
}
if(j0==0){
j0 = 75;
}
if(j0==1&&jungle[0]!=null){
for(var n=0;n<jungle.length;n++)
ESP.healJF(n);
}
}
if(copy[0]!=null){
for(var n=0;n<copy.length;n++)
Entity.setFireTicks(copy[n], 0);
}
if(ender[0]!=null){
if(en0>0){
en0--;
}
if(en0==0){
en0 = 75;
}
if(en0==1){
for(var n=0;n<ender.length;n++)
if(getTile(Entity.getX(ender[n]), Entity.getY(ender[n])-2, Entity.getZ(ender[n]))==121&&Entity.getHealth(ender[n])<=25){
ESP.setHealth(ender[n], Entity.getHealth(ender[n])+2);
}
}
}
if(taiga[0]!=null){
if(ta0>0){
ta0--;
}
if(ta0==0){
ta0 = 75;
}
if(ta0==1&&taiga[0]!=null){
for(var n=0;n<taiga.length;n++)
ESP.healTA(n);
}
}

if(fe!=null){
if(mcpev3) Entity.addEffect(fe, MobEffect.fireResistance, 10, 0, true, false);
else Entity.setFireTicks(fe, 0);
}
if(magma!=null) Entity.addEffect(magma, MobEffect.fireResistance, 10, 0, true, false);
if(kaian!=null) Entity.addEffect(kaian, MobEffect.fireResistance, 10, 0, true, false);


//-----
if(defense[0]!=null){
for(var n=0;n<defense.length;n++){
if(mcpev4){
Entity.addEffect(defense[n], MobEffect.damageResistance, 50, 1, true, false);
}
else{
if(d0[n]>Entity.getHealth(defense[n])&&Entity.getHealth(defense[n])!=0){
defenserHit(defense[n], d0[n]-Entity.getHealth(defense[n]));
}
d0[n] = Entity.getHealth(defense[n]);
}
}
}
if(time[0]!=null){
for(var n=0;n<time.length;n++){
if(ti0[n]>0){
ti0[n]--;
}
if(ESP.isPlayer(time[n])&&Entity.getHealth(time[n])<=0&&Cool.isFalse(ti0a[n])){
ESP.heal(time[n]);
ti0a[n] = true;
ti0[n] = 301;
}
if(ti0[n]==1){
ESP.kill(time[n]);
}
if(ti0[n]==0){
ti0a[n] = false;
}
}
}
if(hawk[0]!=null){
for(var n=0;n<hawk.length;n++){
if(mcpev4){
Entity.addEffect(hawk[n], MobEffect.damageResistance, 50, 0, true, false);
}
else{
if(hw0[n]>Entity.getHealth(hawk[n])&&Entity.getHealth(hawk[n])!=0){
hawkEyeHit(n);
}
hw0[n] = Entity.getHealth(hawk[n]);
}
}
}
if(gem[0]!=null){
for(var n=0;n<gem.length;n++){
if(mcpev4){
Entity.addEffect(gem[n], MobEffect.damageResistance, 50, 0, true, false);
}
else{
if(g0[n]>Entity.getHealth(gem[n])&&Entity.getHealth(gem[n])!=0){
lightGemstoneHit(n);
}
}
g0[n] = Entity.getHealth(gem[n]);
}
}
}
}).start();
}


//---
if(he.b4>1350&&he.b4a>Entity.getHealth(he.buf)&&Entity.getHealth(he.buf)>0){
Entity.setHealth(he.buf, Entity.getHealth(he.buf)+1);
}
he.b4a = Entity.getHealth(he.buf);


//------------------------------
if(anti){
anti2--;
}
if(anti2==0){
anti = false;
}
if(anti3>0){
anti3--;
}
if(anti3==1){
anti3 = 2700;
ESP.removeMob();
ESP.toast("All Mobs were removed.");
}
if(anti4>0){
anti4--;
}
if(anti4==1){
anti4 = 900;
for each(var e in Entity.getAll()){
if(Entity.getEntityTypeId(e)==64) Entity.remove(e);
}
ESP.toast("Dropped Items were removed.");
}


//-------------------------------

if(ad1){
ad1a--;   
}
if(ad1a==1){
setNightMode(false);
}
if(ad1a==0){
ad1 = false;
}
if(fill){
adx = Entity.getX(ad);
ady = Entity.getY(ad)-2;
adz = Entity.getZ(ad);
for(var xx=adx-2;xx<adx+3;xx++){
for(var zz=adz-2;zz<adz+3;zz++){
setTile(xx,ady,zz,2);}}
for(var xx=adx-2;xx<adx+3;xx++){
for(var yy=ady-2;yy<ady;yy++){
for(var zz=adz-2;zz<adz+3;zz++){
setTile(xx,yy,zz,3);}}}
for(var xx=adx-2;xx<adx+3;xx++)
for(var yy=ady+1;yy<ady+6;yy++)
for(var zz=adz-2;zz<adz+3;zz++)
if(getTile(xx, yy, zz)!=7){
setTile(xx, yy, zz, 0);
}
}



//-------------------
if(expl>=0){
expl++;
}
if(lang==0){
if(expl==150) ESP.sbm("If you touch the obsidian, it will turn into a glowing obsidian and the E.S.P. will be turned on.");
if(expl==300) ESP.sbm("Then, if you touch it again, it will turn into an obsidian and the E.S.P. will be turned off.");
if(expl==450) ESP.sbm("While the E.S.P. is turning on, you can use the E.S.P. which you selected.");
if(expl==600) ESP.sbm("If you touch or hit someone with chain armor, skills of the E.S.P will work.");
if(expl==750) ESP.sbm("There are 4 skills of each E.S.P with cool times.");
if(expl==900) ESP.sbm("The cool times of skills are....\n   Item      hat  coat  pants  shoes\ncool time    10   20      20     120");
if(expl==1050) ESP.sbm("Air Bander and The Teleporter's hat cool time is 5 seconds.");
if(expl==1200) ESP.sbm("Mass Titan's shoes cool time is 150 seconds.");
if(expl==1350) ESP.sbm("If you use a Hyper Skill(shoes), the skill's name will be printed to admin's chating Window.");
}
else if(lang==1){
if(expl==150) ESP.sbm("옵시디언을 터치하시면, 빛나는 옵시디언으로 바뀌면서 능력이 활성화 됩니다.");
if(expl==300) ESP.sbm("한번 더 터치하시면 옵시디언으로 돌아오면서 능력이 비활성화 됩니다.");
if(expl==450) ESP.sbm("능력이 활상화된 상태에서, 선택하신 능력을 사용하실 수 있습니다.");
if(expl==600) ESP.sbm("터치하시거나 누군가를 때리시면, 해당 능력의 스킬이 발동됩니다.");
if(expl==750) ESP.sbm("능력마다 스킬은 4개이며, 쿨타임이 있습니다.");
if(expl==900) ESP.sbm("쿨타임은...\n아이템   모자   윗옷  바지  신발\n쿨타임    10      20    20    120");
if(expl==1050) ESP.sbm("Air Bander와 The Teleporter의 모자 스킬의 쿨타임은 5초 입니다.");
if(expl==1200) ESP.sbm("Mass Titan의 신발 스킬의 쿨타임은 150초 입니다.");
if(expl==1350) ESP.sbm("궁극기(신발)을 사용하실 경우, 서버장의 체팅창에 그 스킬의 이름이 뜹니다.");
}


//0.4.3
if(of1>0){
of1--;   
}
if(of2>0){
of2--;
}
if(of3>0){
of3--;
}
if(of4>0){
of4--;
}
if(ow1>0){
ow1--;
}
if(ow2>0){
ow2--;
}
if(ow3>0){
ow3--;
}
if(ow4>0){
ow4--;
}
if(ot1>0){
ot1--;
}
if(ot2>0){
ot2--;
}
if(ot3>0){
ot3--;
}
if(ot4>0){
ot4--;
}
if(oc1>0){
oc1--;
}
if(oc2>0){
oc2--;
}
if(oc3>0){
oc3--;
}
if(oc4>0){
oc4--;
}
if(os1>0){
os1--;
}
if(os2>0){
os2--;
}
if(os3>0){
os3--;
}
if(os4>0){
os4--;
}
if(oss1>0){
oss1--;
}
if(oss2>0){
oss2--;
}
if(oss3>0){
oss3--;
}
if(oss4>0){
oss4--;
}
if(ol1>0){
ol1--;
}
if(ol2>0){
ol2--;
}
if(ol3>0){
ol3--;
}
if(ol4>0){
ol4--;
}
if(od1>0){
od1--;
}
if(od2>0){
od2--;
}
if(od3>0){
od3--;
}
if(od4>0){
od4--;
}
if(oi1>0){
oi1--;
}
if(oi2>0){
oi2--;
}
if(oi3>0){
oi3--;
}
if(oi4>0){
oi4--;
}

if(of2==1){
for(var xx=of2x-1;xx<of2x+2;xx++)
for(var zz=of2z-1;zz<of2z+2;zz++)
setTile(xx, of2y, zz, 2);
}
if(of2==31){
for(var xx=of2x-1;xx<of2x+2;xx++)
for(var zz=of2z-1;zz<of2z+2;zz++)
setTile(xx, of2y-1, zz, 3);
}
if(of2==61){
for(var xx=of2x-1;xx<of2x+2;xx++)
for(var zz=of2z-1;zz<of2z+2;zz++)
setTile(xx, of2y-2, zz, 3);
}
if(of4==1350){
setTile(ofx+4, ofy, ofz+4, 2);
setTile(ofx+4, ofy, ofz+2, 2);
setTile(ofx+4, ofy, ofz, 2);
setTile(ofx+4, ofy, ofz-2, 2);
setTile(ofx+4, ofy, ofz-4, 2);
setTile(ofx+2, ofy, ofz+4, 2);
setTile(ofx+2, ofy, ofz+2, 2);
setTile(ofx+2, ofy, ofz, 2);
setTile(ofx+2, ofy, ofz-2, 2);
setTile(ofx+2, ofy, ofz-4, 2);
setTile(ofx, ofy, ofz+4, 2);
setTile(ofx, ofy, ofz+2, 2);
setTile(ofx, ofy, ofz, 89);
setTile(ofx, ofy, ofz-2, 2);
setTile(ofx, ofy, ofz-4, 2);
setTile(ofx-4, ofy, ofz+4, 2);
setTile(ofx-4, ofy, ofz+2, 2);
setTile(ofx-4, ofy, ofz, 2);
setTile(ofx-4, ofy, ofz-2, 2);
setTile(ofx-4, ofy, ofz-4, 2);
setTile(ofx-2, ofy, ofz+4, 2);
setTile(ofx-2, ofy, ofz+2, 2);
setTile(ofx-2, ofy, ofz, 2);
setTile(ofx-2, ofy, ofz-2, 2);
setTile(ofx-2, ofy, ofz-4, 2);
setTile(ofx+7, ofy, ofz+7, 2);
setTile(ofx+7, ofy, ofz-7, 2);
setTile(ofx-7, ofy, ofz+7, 2);
setTile(ofx-7, ofy, ofz-7, 2);
setTile(ofx+8, ofy, ofz, 2);
setTile(ofx, ofy, ofz+8, 2);
setTile(ofx-8, ofy, ofz, 2);
setTile(ofx, ofy, ofz-8, 2);
}
if(ow1==115){
setTile(ow1x, ow1y+1, ow1z, 0);
}
if(ow2==150){
for(var xx=ow2x-2;xx<ow2x+3;xx++)
for(var zz=ow2z-2;zz<ow2z+3;zz++)
setTile(xx, ow2y, zz, 2);
}
if(ow3==150){
setTile(ow3x+3, ow3y+1, ow3z, 0);
setTile(ow3x-3, ow3y+1, ow3z, 0);
setTile(ow3x, ow3y+1, ow3z+3, 0);
setTile(ow3x, ow3y+1, ow3z-3, 0);
}
if(ow4==1500){
setTile(owx+9, owy+10, owz+9, 0);
setTile(owx+9, owy+10, owz-9, 0);
setTile(owx-9, owy+10, owz+9, 0);
setTile(owx-9, owy+10, owz-9, 0);
setTile(owx+9, owy+10, owz, 0);
setTile(owx-9, owy+10, owz, 0);
setTile(owx, owy+10, owz+9, 0);
setTile(owx, owy+10, owz-9, 0);
setTile(owx+1, owy+1, owz, 0);
setTile(owx-1, owy+1, owz, 0);
setTile(owx, owy+1, owz+1, 0);
setTile(owx, owy+1, owz-1, 0);
}
if(oc4==900){
for(var xx=ocx-17;xx<ocx+18;xx++)
for(var zz=ocz-17;zz<ocz+18;zz++)
setTile(xx, ocy, zz, 2);
}
if(oc4==930){
for(var xx=ocx-17;xx<ocx+18;xx++)
for(var zz=ocz-17;zz<ocz+18;zz++)
setTile(xx, ocy-1, zz, 3);
}
if(oc4==960){
for(var xx=ocx-17;xx<ocx+18;xx++)
for(var zz=ocz-17;zz<ocz+18;zz++)
setTile(xx, ocy-2, zz, 3);
}
if(oc4==990){
for(var xx=ocx-17;xx<ocx+18;xx++)
for(var zz=ocz-17;zz<ocz+18;zz++)
setTile(xx, ocy-3, zz, 3);
}
if(oc4==1020){
for(var xx=ocx-17;xx<ocx+18;xx++)
for(var zz=ocz-17;zz<ocz+18;zz++)
setTile(xx, ocy-4, zz, 3);
}
if(os3==150){
setTile(os3x, os3y+5, os3z, 0);
}
if(os4==1500){
for(var xx=osx-8;xx<osx+9;xx++)
for(var zz=osz-8;zz<osz+9;zz++)
setTile(xx, osy+1, zz, 0);
}
if(ol3==150){
setTile(ol3x+2, ol3y+3, ol3z, 0);
setTile(ol3x-2, ol3y+3, ol3z, 0);
setTile(ol3x, ol3y+3, ol3z+2, 0);
setTile(ol3x, ol3y+3, ol3z-2, 0);
}
if(ol4==900){
for(var xx=olx-12;xx<olx+13;xx++)
for(var zz=olz-12;zz<olz+13;zz++)
setTile(xx, oly, zz, 2);
}
if(ol4==930){
for(var xx=olx-12;xx<olx+13;xx++)
for(var zz=olz-12;zz<olz+13;zz++)
setTile(xx, oly-1, zz, 3);
}
if(ol4==960){
for(var xx=olx-12;xx<olx+13;xx++)
for(var zz=olz-12;zz<olz+13;zz++)
setTile(xx, oly-2, zz, 3);
}
if(ol4==990){
for(var xx=olx-12;xx<olx+13;xx++)
for(var zz=olz-12;zz<olz+13;zz++)
setTile(xx, oly-3, zz, 3);
}
if(ol4==1020){
for(var xx=olx-12;xx<olx+13;xx++)
for(var zz=olz-12;zz<olz+13;zz++)
setTile(xx, oly-4, zz, 3);
}
if(od1==75){
setTile(od1x, od1y+2, od1z, 0);
}
if(od3==225){
setTile(od3x+2, od3y+2, od3z+1, 0);
setTile(od3x+2, od3y+2, od3z, 0);
setTile(od3x+2, od3y+2, od3z-1, 0);
setTile(od3x-2, od3y+2, od3z+1, 0);
setTile(od3x-2, od3y+2, od3z, 0);
setTile(od3x-2, od3y+2, od3z-1, 0);
setTile(od3x+1, od3y+2, od3z+2, 0);
setTile(od3x, od3y+2, od3z+2, 0);
setTile(od3x-1, od3y+2, od3z+2, 0);
setTile(od3x+1, od3y+2, od3z-2, 0);
setTile(od3x, od3y+2, od3z-2, 0);
setTile(od3x-1, od3y+2, od3z-2, 0);
setTile(od3x, od3y+1, od3z, 0);
}
if(od4==1350){
Level.setTime(700);
setTile(odx+9, ody+8, odz+9, 0);
setTile(odx+9, ody+8, odz, 0);
setTile(odx+9, ody+8, odz-9, 0);
setTile(odx, ody+8, odz+9, 0);
setTile(odx, ody+8, odz-9, 0);
setTile(odx-9, ody+8, odz+9, 0);
setTile(odx-9, ody+8, odz, 0);
setTile(odx-9, ody+8, odz-9, 0);
}
if(oi1==105){
for(var xx=oi1x-1;xx<oi1x+2;xx++)
for(var zz=oi1z-1;zz<oi1z+2;zz++)
setTile(xx, oi1y, zz, 79);
}
if(oi4==900){
for(var xx=oix-6;xx<oix+7;xx++)
for(var zz=oiz-6;zz<oiz+7;zz++)
setTile(xx, oiy, zz, 2);
for(var xx=oix-6;xx<oix+7;xx++)
for(var yy=oiy+1;yy<oiy+6;yy++)
for(var zz=oiz-6;zz<oiz+7;zz++)
setTile(xx, yy, zz, 0);
}


if(adt>0){
adt--;
}
if(adt==1){
ad = Player.getEntity();
}
exp.c = 0;


//A.I.S.
//aifire
if(aift>0){
aift--;
}
if(aift==0&&getTile(Entity.getX(aifire), Entity.getY(aifire)-1, Entity.getZ(aifire))==2){
aif2 = Math.floor(Math.random()*9);
if(aif2<3){
aifx = Math.floor(Entity.getX(aifire));
aify = Math.floor(Entity.getY(aifire));
aifz = Math.floor(Entity.getZ(aifire));
yaw = Math.floor(Entity.getYaw(aifire));
sin = -Math.sin(yaw/180*Math.PI);
cos = Math.cos(yaw/180*Math.PI);
for(var xx=aifx+4*sin-1;xx<aifx+4*sin+2;xx++)
for(var zz=aifz+4*cos-1;zz<aifz+4*cos+2;zz++)
setTile(xx, aify, zz, 51);
setTile(aifx+4*sin+2, aify, aifz+4*cos, 51);
setTile(aifx+4*sin, aify, aifz+4*cos+2, 51);
setTile(aifx+4*sin-2, aify, aifz+4*cos, 51);
setTile(aifx+4*sin, aify, aifz+4*cos-2, 51);
}
if((aif2==3)||(aif2==4)){
aifx = Math.floor(Entity.getX(aifire));
aify = Math.floor(Entity.getY(aifire))-1;
aifz = Math.floor(Entity.getZ(aifire));
yaw = Math.floor(Entity.getYaw(aifire));
sin = -Math.sin(yaw/180*Math.PI);
cos = Math.cos(yaw/180*Math.PI);
for(var xx=aifx+4*sin-1;xx<aifx+4*sin+2;xx++){
for(var yy=aify-2;yy<aify+1;yy++)
for(var zz=aifz+4*cos-1;zz<aifz+4*cos+2;zz++){
setTile(xx+2, yy, zz-1, 0);
setTile(xx+2, aify-3, zz-1, 51);}}
}
if((aif2==5)||(aif2==6)){
aifx = Math.floor(Entity.getX(aifire));
aify = Math.floor(Entity.getY(aifire));
aifz = Math.floor(Entity.getZ(aifire));
yaw = Math.floor(Entity.getYaw(aifire));
sin = -Math.sin(yaw/180*Math.PI);
cos = Math.cos(yaw/180*Math.PI);
for(var gun=3;gun<20;gun++)
setTile(aifx+gun*sin, aify, aifz+gun*cos, 51);
}
if(aif2==7){
ESP.aiSbm("Burning Area");
aifx = Entity.getX(aifire);
aify = Entity.getY(aifire);
aifz = Entity.getZ(aifire);
for(var xx=aifx-9;xx<aifx+10;xx++)
for(var zz=aifz-9;zz<aifz+10;zz++)
setTile(xx, aify, zz, 51);
for(var xx=aifx-1;xx<aifx+2;xx++)
for(var zz=aifz-1;zz<aifz+2;zz++)
setTile(xx, aify, zz, 0);
}
if(aifd==false){
aift = 225;
}
else if(aifd==true){
aift = -1;
}
}
if((aif2==3)||(aif2==4)){
var p2x, p2z;
p2x = aifx+4*sin;
p2z = aifz+4*cos;
if(aift==15){
Entity.setVelY(aifire, 0.4);
for(var xx=p2x-1;xx<p2x+2;xx++)
for(var zz=p2z-1;zz<p2z+2;zz++)
setTile(xx+2, aify, zz-1, 2);
}
if(aift==30){
Entity.setVelY(aifire, 0.4);
for(var xx=p2x-1;xx<p2x+2;xx++)
for(var zz=p2z-1;zz<p2z+2;zz++)
setTile(xx+2, aify-1, zz-1, 3);
}
if(aift==45){
Entity.setVelY(aifire, 0.4);
for(var xx=p2x-1;xx<p2x+2;xx++)
for(var zz=p2z-1;zz<p2z+2;zz++)
setTile(xx+2, aify-2, zz-1, 3);
}
if(aift==60){
Entity.setVelY(aifire, 0.4);
for(var xx=p2x-1;xx<p2x+2;xx++)
for(var zz=p2z-1;zz<p2z+2;zz++)
setTile(xx+2, aify-3, zz-1, 3);
}
}
if(aift==75&&aif2==7){
for(var xx=aifx-9;xx<aifx+10;xx++)
for(var zz=aifz-9;zz<aifz+10;zz++)
setTile(xx, aify, zz, 0);
}
if(aift>75&&aif2==7){
Entity.setVelX(aifire, 0.00001);
Entity.setVelX(aifire, -0.00001);
Entity.setVelZ(aifire, 0.00001);
Entity.setVelZ(aifire, -0.00001);
}
if(aift==0&&aifd==true){
aift = -1;
}
//aiwater
if(aiwt>0){
aiwt--;
}
if(aiwt==0&&getTile(Entity.getX(aiwater), Entity.getY(aiwater)-1, Entity.getZ(aiwater))==2){
aiw2 = Math.floor(Math.random()*9);
if(aiw2<3){
aiwx = Math.floor(Entity.getX(aiwater));
aiwy = Math.floor(Entity.getY(aiwater));
aiwz = Math.floor(Entity.getZ(aiwater));
yaw = Math.floor(Entity.getYaw(aiwater));
sin = -Math.sin(yaw/180*Math.PI);
cos = Math.cos(yaw/180*Math.PI);
setTile(aiwx+4*sin, aiwy, aiwz+4*cos, 8);
}
if((aiw2==3)||(aiw2==4)){
aiwx = Math.floor(Entity.getX(aiwater));
aiwy = Math.floor(Entity.getY(aiwater))-1;
aiwz = Math.floor(Entity.getZ(aiwater));
yaw = Math.floor(Entity.getYaw(aiwater));
sin = -Math.sin(yaw/180*Math.PI);
cos = Math.cos(yaw/180*Math.PI);
for(var xx=aiwx+6*sin-2;xx<aiwx+6*sin+3;xx++)
for(var zz=aiwz+6*cos-2;zz<aiwz+6*cos+3;zz++)
setTile(xx-1, aiwy, zz, 0);
setTile(aiwx+6*sin+1, aiwy, aiwz+6*cos+2, 8);
setTile(aiwx+6*sin+1, aiwy, aiwz+6*cos-2, 8);
setTile(aiwx+6*sin-3, aiwy, aiwz+6*cos+2, 8);
setTile(aiwx+6*sin-3, aiwy, aiwz+6*cos-2, 8);
}
if((aiw2==5)||(aiw2==6)){
aiwx = Entity.getX(aiwater);
aiwy = Entity.getY(aiwater);
aiwz = Entity.getZ(aiwater);
for(var xx=aiwx-2;xx<aiwx+3;xx++)
for(var zz=aiwz-2;zz<aiwz+3;zz++)
setTile(xx, aiwy, zz, 79);
for(var xx=aiwx-1;xx<aiwx+2;xx++)
for(var zz=aiwz-1;zz<aiwz+2;zz++)
setTile(xx, aiwy, zz, 0);
setTile(aiwx+3, aiwy, aiwz, 8);
setTile(aiwx, aiwy, aiwz+3, 8);
setTile(aiwx-3, aiwy, aiwz, 8);
setTile(aiwx, aiwy, aiwz-3, 8);
}
if(aiw2==7){
ESP.aiSbm("Wide Flood");
aiwx = Entity.getX(aiwater)+2;
aiwy = Entity.getY(aiwater)-1;
aiwz = Entity.getZ(aiwater)-3;
for(var xx=aiwx-9;xx<aiwx+10;xx++)
for(var zz=aiwz-9;zz<aiwz+10;zz++)
setTile(xx, aiwy, zz, 0);
setTile(aiwx+7, aiwy+8, aiwz+7, 8);
setTile(aiwx+7, aiwy+8, aiwz, 8);
setTile(aiwx+7, aiwy+8, aiwz-7, 8);
setTile(aiwx, aiwy+8, aiwz+7, 8);
setTile(aiwx, aiwy+8, aiwz-7, 8);
setTile(aiwx-7, aiwy+8, aiwz+7, 8);
setTile(aiwx-7, aiwy+8, aiwz, 8);
setTile(aiwx-7, aiwy+8, aiwz-7, 8);
}
if(aiwd==false){
aiwt = 225;
}
else if(aiwd==true){
aiwt = -1;
}
}
if(aiwt==180&&aiw2<3){
setTile(aiwx+4*sin, aiwy, aiwz+4*cos, 0);
}
if(aiwt==75&&((aiw2==3)||(aiw2==4))){
Entity.setVelY(aiwater, 0.4);
for(var xx=aiwx+6*sin-2;xx<aiwx+6*sin+3;xx++)
for(var zz=aiwz+6*cos-2;zz<aiwz+6*cos+3;zz++)
setTile(xx-1, aiwy, zz, 2);
}
if(aiwt>75&&((aiw2==5)||(aiw2==6))){
Entity.setVelX(aiwater, 0.00001);
Entity.setVelX(aiwater, -0.00001);
Entity.setVelZ(aiwater, 0.00001);
Entity.setVelZ(aiwater, -0.00001);
}
if(aiwt==75&&((aiw2==5)||(aiw2==6))){
setTile(aiwx+3, aiwy, aiwz, 0);
setTile(aiwx, aiwy, aiwz+3, 0);
setTile(aiwx-3, aiwy, aiwz, 0);
setTile(aiwx, aiwy, aiwz-3, 0);
}
if(aiwt==150&&aiw2==7){
setTile(aiwx+7, aiwy+8, aiwz+7, 0);
setTile(aiwx+7, aiwy+8, aiwz, 0);
setTile(aiwx+7, aiwy+8, aiwz-7, 0);
setTile(aiwx, aiwy+8, aiwz+7, 0);
setTile(aiwx, aiwy+8, aiwz-7, 0);
setTile(aiwx-7, aiwy+8, aiwz+7, 0);
setTile(aiwx-7, aiwy+8, aiwz, 0);
setTile(aiwx-7, aiwy+8, aiwz-7, 0);
for(var xx=aiwx-9;xx<aiwx+10;xx++)
for(var zz=aiwz-9;zz<aiwz+10;zz++)
setTile(xx, aiwy, zz, 9);
}
if(aiwt==15&&aiw2==7){
Entity.setVelY(aiwater, 0.4);
for(var xx=aiwx-9;xx<aiwx+10;xx++)
for(var zz=aiwz-9;zz<aiwz+10;zz++)
setTile(xx, aiwy, zz, 2);
}
if(aiwt==0&&aiwd==true){
aiwt = -1;
}
//aitree
if(aitt>0){
aitt--;
}
if(aitt==0&&getTile(Entity.getX(aitree), Entity.getY(aitree)-1, Entity.getZ(aitree))==2){
ait2 = Math.floor(Math.random()*9);
if(ait2<3){
var p2x, p2z;
aitx = Math.floor(Entity.getX(aitree));
aity = Math.floor(Entity.getY(aitree))-1;
aitz = Math.floor(Entity.getZ(aitree));
yaw = Math.floor(Entity.getYaw(aitree));
sin = -Math.sin(yaw/180*Math.PI);
cos = Math.cos(yaw/180*Math.PI);
p2x = aitx+3*sin;
p2z = aitz+3*cos;
for(var yy=aity+1;yy<aity+7;yy++)
setTile(p2x, yy, p2z, 17);
setTile(p2x, aity+7, p2z, 18);
for(var yy=aity+6;yy<aity+8;yy++){
setTile(p2x+1, yy, p2z, 18);
setTile(p2x, yy, p2z-1, 18);
setTile(p2x, yy, p2z+1, 18);
setTile(p2x-1, yy, p2z, 18);
}
for(var yy=aity+4;yy<aity+6;yy++){
setTile(p2x+1, yy, p2z+1, 18);
setTile(p2x+1, yy, p2z-1, 18);
setTile(p2x+1, yy, p2z, 18);
setTile(p2x-1, yy, p2z+1, 18);
setTile(p2x-1, yy, p2z-1, 18);
setTile(p2x-1, yy, p2z, 18);
setTile(p2x, yy, p2z+1, 18);
setTile(p2x, yy, p2z-1, 18);
setTile(p2x+2, yy, p2z+1, 18);
setTile(p2x+2, yy, p2z-1, 18);
setTile(p2x+2, yy, p2z, 18)
setTile(p2x-2, yy, p2z+1, 18);
setTile(p2x-2, yy, p2z-1, 18);
setTile(p2x-2, yy, p2z, 18);
setTile(p2x+1, yy, p2z+2, 18);
setTile(p2x-1, yy, p2z+2, 18);
setTile(p2x, yy, p2z+2, 18);
setTile(p2x+1, yy, p2z-2, 18);
setTile(p2x-1, yy, p2z-2, 18);
setTile(p2x, yy, p2z-2, 18);
}
}
if((ait2==3)||(ait2==4)){
var p2x, p2z;
aitx = Math.floor(Entity.getX(aitree));
aity = Math.floor(Entity.getY(aitree))-1;
aitz = Math.floor(Entity.getZ(aitree));
yaw = Math.floor(Entity.getYaw(aitree));
sin = -Math.sin(yaw/180*Math.PI);
cos = Math.cos(yaw/180*Math.PI);
p2x = aitx+5*sin;
p2z = aitz+5*cos;
for(var n=1;n<4;n++){
setTile(p2x+2, aity+n, p2z+2, 17);
setTile(p2x+1, aity+n, p2z+2, 17);
setTile(p2x, aity+n, p2z+2, 17);
setTile(p2x-1, aity+n, p2z+2, 17);
setTile(p2x-2, aity+n, p2z+2, 17);
setTile(p2x+2, aity+n, p2z-2, 17);
setTile(p2x+1, aity+n, p2z-2, 17);
setTile(p2x, aity+n, p2z-2, 17);
setTile(p2x-1, aity+n, p2z-2, 17);
setTile(p2x-2, aity+n, p2z-2, 17);
setTile(p2x-2, aity+n, p2z+1, 17);
setTile(p2x-2, aity+n, p2z, 17);
setTile(p2x-2, aity+n, p2z-1, 17);
setTile(p2x+2, aity+n, p2z+1, 17);
setTile(p2x+2, aity+n, p2z, 17);
setTile(p2x+2, aity+n, p2z-1, 17);
}
setTiles(p2x-1, p2x+1, aity+4, aity+4, p2z-1, p2z+1, 17);
setTile(p2x, aity, p2z, 87);
setTile(p2x, aity+1, p2z, 51);
}
if((ait2==5)||(ait2==6)){
aimc = 1;
}
if(ait2==7){
ESP.aiSbm("Lava Leaf...");
aitx = Entity.getX(aitree);
aity = Entity.getY(aitree)-1;
aitz = Entity.getZ(aitree);
for(var xx=aitx-8;xx<aitx+9;xx++)
for(var zz=aitz-8;zz<aitz+9;zz++)
setTile(xx, aity, zz, 18);
}
aitt = 225;
}
if(aitt==15&&((ait2==5)||(ait2==6))){
aimc = 0;
Entity.setHealth(aitree, Entity.getHealth(aitree)+10);
setVelX(aitree, 1);
}
if((ait2==5)||(ait2==6)){
if([210, 180, 150, 135, 120, 90, 75, 60].indexOf(aitt)!=-1) Entity.setVelY(aitree, 0.4);
else if(aitt==30) Entity.setVelZ(aitree, -0.4);
}
if(aitt==90&&ait2==7){
ESP.aiSbm("Lava Leaf");
for(var xx=aitx-7;xx<aitx+8;xx++)
for(var zz=aitz-7;zz<aitz+8;zz++)
setTile(xx, aity-1, zz, 11);
}
if(aitt==1&&ait2==7){
for(var xx=aitx-7;xx<aitx+8;xx++)
for(var zz=aitz-7;zz<aitz+8;zz++)
setTile(xx, aity-1, zz, 3);
for(var xx=aitx-8;xx<aitx+9;xx++)
for(var zz=aitz-8;zz<aitz+9;zz++)
setTile(xx, aity, zz, 2);
}
if(aitt==0&&aitd==true){
aitt = -1;
}
//aicreeper
if(aict>0){
aict--;
}
if(aict==0&&getTile(Entity.getX(aicreeper), Entity.getY(aicreeper)-1, Entity.getZ(aicreeper))==2){
aic2 = Math.floor(Math.random()*9);
if(aic2<3){
aicx = Math.floor(Entity.getX(aicreeper));
aicy = Math.floor(Entity.getY(aicreeper))-1;
aicz = Math.floor(Entity.getZ(aicreeper));
yaw = Math.floor(Entity.getYaw(aicreeper));
sin = -Math.sin(yaw/180*Math.PI);
cos = Math.cos(yaw/180*Math.PI);
ESP.antiLack(5);
explode(aicx+4*sin+2, aicy, aicz+4*cos, 2.5);
}
if((aic2==3)||(aic2==4)){
var p2x, p2z;
aicx = Math.floor(Entity.getX(aicreeper));
aicy = Math.floor(Entity.getY(aicreeper))-1;
aicz = Math.floor(Entity.getZ(aicreeper));
yaw = Math.floor(Entity.getYaw(aicreeper));
sin = -Math.sin(yaw/180*Math.PI);
cos = Math.cos(yaw/180*Math.PI);
p2x = Math.floor(aicx+5*sin);
p2z = Math.floor(aicz+5*cos);
setTile(p2x, aicy+1, p2z, 46);
setTile(p2x, aicy+2, p2z, 46);
Level.spawnMob(p2x+0.5, aicy+9, p2z+0.5, 65);
}
if((aic2==5)||(aic2==6)){
aicx = Entity.getX(aicreeper);
aicy = Entity.getY(aicreeper)-1;
aicz = Entity.getZ(aicreeper);
ESP.antiLack(5);
explode(aicx+5, aicy, aicz+5, 2.5);
explode(aicx+5, aicy, aicz, 2.5);
explode(aicx+5, aicy, aicz-5, 2.5);
explode(aicx, aicy, aicz+5, 2.5);
explode(aicx, aicy, aicz-5, 2.5);
explode(aicx-5, aicy, aicz+5, 2.5);
explode(aicx-5, aicy, aicz, 2.5);
explode(aicx-5, aicy, aicz-5, 2.5);
}
if(aic2==7){
ESP.aiSbm("Meteor");
aicx = Entity.getX(aicreeper);
aicy = Entity.getY(aicreeper)-1;
aicz = Entity.getZ(aicreeper);
ESP.antiLack(90);
explode(aicx+5, aicy, aicz+5, 3.5);
explode(aicx+5, aicy, aicz-5, 3.5);
explode(aicx-5, aicy, aicz+5, 3.5);
explode(aicx-5, aicy, aicz-5, 3.5);
Level.spawnMob(aicx+4, aicy+5, aicz-1, 65);
Level.spawnMob(aicx-6, aicy+8, aicz+4, 65);
Level.spawnMob(aicx, aicy+9, aicz+7, 65);
Level.spawnMob(aicx+2, aicy+4, aicz-2, 65);
Level.spawnMob(aicx-7, aicy+11, aicz-5, 65);
Level.spawnMob(aicx+6, aicy+7, aicz+3, 65);
}
if(aicd==false){
aict = 225;
}
}
if(aict==0&&aicd==true){
aict = -1;
}
if(aic2<=4){
if(aict==15){
Entity.setVelY(aicreeper, 0.4);
for(var xx=aicx+4*sin-5;xx<aicx+4*sin+6;xx++)
for(var zz=aicz+4*cos-5;zz<aicz+4*cos+6;zz++)
setTile(xx, aicy, zz, 2);
}
if(aict==30){
Entity.setVelY(aicreeper, 0.4);
for(var xx=aicx+4*sin-4;xx<aicx+4*sin+5;xx++)
for(var zz=aicz+4*cos-4;zz<aicz+4*cos+5;zz++)
setTile(xx, aicy-1, zz, 3);
}
if(aict==45){
Entity.setVelY(aicreeper, 0.4);
for(var xx=aicx+4*sin-4;xx<aicx+4*sin+5;xx++)
for(var zz=aicz+4*cos-4;zz<aicz+4*cos+5;zz++)
setTile(xx, aicy-2, zz, 3);
}
if(aict==60){
Entity.setVelY(aicreeper, 0.4);
for(var xx=aicx+4*sin-4;xx<aicx+4*sin+5;xx++)
for(var zz=aicz+4*cos-4;zz<aicz+4*cos+5;zz++)
setTile(xx, aicy-3, zz, 3);
}
}
if(aic2>=5){
if(aict==15){
Entity.setVelY(aicreeper, 0.4);
for(var xx=aicx+4*sin-8;xx<aicx+4*sin+9;xx++)
for(var zz=aicz+4*cos-8;zz<aicz+4*cos+9;zz++)
setTile(xx, aicy, zz, 2);
}
if(aict==30){
Entity.setVelY(aicreeper, 0.4);
for(var xx=aicx+4*sin-8;xx<aicx+4*sin+9;xx++)
for(var zz=aicz+4*cos-8;zz<aicz+4*cos+9;zz++)
setTile(xx, aicy-1, zz, 3);
}
if(aict==45){
Entity.setVelY(aicreeper, 0.4);
for(var xx=aicx+4*sin-8;xx<aicx+4*sin+9;xx++)
for(var zz=aicz+4*cos-8;zz<aicz+4*cos+9;zz++)
setTile(xx, aicy-2, zz, 3);
}
if(aict==60){
Entity.setVelY(aicreeper, 0.4);
for(var xx=aicx+4*sin-8;xx<aicx+4*sin+9;xx++)
for(var zz=aicz+4*cos-8;zz<aicz+4*cos+9;zz++)
setTile(xx, aicy-3, zz, 3);
}
if(aict==75){
Entity.setVelY(aicreeper, 0.4);
for(var xx=aicx+4*sin-8;xx<aicx+4*sin+9;xx++)
for(var zz=aicz+4*cos-8;zz<aicz+4*cos+9;zz++)
setTile(xx, aicy-4, zz, 3);
}
if(aict==90){
Entity.setVelY(aicreeper, 0.4);
for(var xx=aicx+4*sin-8;xx<aicx+4*sin+9;xx++)
for(var zz=aicz+4*cos-8;zz<aicz+4*cos+9;zz++)
setTile(xx, aicy-5, zz, 3);
}
}
//aisoil
if(aist>0){
aist--;
}
if(aist==0&&getTile(Entity.getX(aisoil), Entity.getY(aisoil)-1, Entity.getZ(aisoil))==2){
ais2 = Math.floor(Math.random()*9);
if(ais2<3){
aisx = Math.floor(Entity.getX(aisoil));
aisy = Math.floor(Entity.getY(aisoil))-1;
aisz = Math.floor(Entity.getZ(aisoil));
sin = -Math.sin(yaw/180*Math.PI);
cos = Math.cos(yaw/180*Math.PI);
for(var xx=aisx+4*sin-1;xx<aisx+4*sin+2;xx++){
for(var zz=aisz+4*cos-1;zz<aisz+4*cos+2;zz++){
for(var yy=aisy-2;yy<aisy;yy++)
setTile(xx, yy, zz, 0);
setTile(xx, aisy, zz, 13);
setTile(xx, aisy+5, zz, 13);
setTile(xx, aisy+8, zz, 13);
}}
}
if((ais2==3)||(ais2==4)){
aisx = Math.floor(Entity.getX(aisoil));
aisy = Math.floor(Entity.getY(aisoil))-1;
aisz = Math.floor(Entity.getZ(aisoil));
sin = -Math.sin(yaw/180*Math.PI);
cos = Math.cos(yaw/180*Math.PI);
for(var xx=aisx+4*sin-1;xx<aisx+4*sin+2;xx++)
for(var yy=aisy-3;yy<aisy+1;yy++)
for(var zz=aisz+4*cos-1;zz<aisz+4*cos+2;zz++)
setTile(xx-2, yy, zz+1, 0);
setTile(aisx+4*sin-2, aisy-3, aisz+4*cos+1, 11);
}
if((ais2==5)||(ais2==6)){
aisx = Math.floor(Entity.getX(aisoil));
aisy = Math.floor(Entity.getY(aisoil))-1;
aisz = Math.floor(Entity.getZ(aisoil));
sin = -Math.sin(yaw/180*Math.PI);
cos = Math.cos(yaw/180*Math.PI);
for(var xx=aisx+4*sin-1;xx<aisx+4*sin+2;xx++){
for(var yy=aisy+1;yy<aisy+4;yy++){
for(var zz=aisz+4*cos-1;zz<aisz+4*cos+2;zz++){
setTile(xx, yy, aisz+4*cos+2, 24);
setTile(xx, yy, aisz+4*cos-2, 24);
setTile(aisx+4*sin+2, yy, zz, 24);
setTile(aisx+4*sin-2, yy, zz, 24);
setTile(xx, yy, zz, 0);
setTile(xx, aisy+4, zz, 24);
setTile(aisx+4*sin, aisy, aisz+4*cos, 11);
}}}
}
if(ais2==7){
ESP.aiSbm("Sink Hole");
aisx = Entity.getX(aisoil);
aisy = Entity.getY(aisoil)-1;
aisz = Entity.getZ(aisoil);
for(var xx=aisx-9;xx<aisx+10;xx++){
for(var yy=aisy-2;yy<aisy+1;yy++){
for(var zz=aisz-9;zz<aisz+10;zz++){
setTile(xx, yy, zz, 0);
setTile(xx, aisy-3, zz, 13);
}}}
setTile(aisx+6, aisy-2, aisz+6, 10);
setTile(aisx+6, aisy-2, aisz, 10);
setTile(aisx+6, aisy-2, aisz-6, 10);
setTile(aisx, aisy-2, aisz+6, 10);
setTile(aisx, aisy-2, aisz-6, 10);
setTile(aisx-6, aisy-2, aisz+6, 10);
setTile(aisx-6, aisy-2, aisz, 10);
setTile(aisx-6, aisy-2, aisz-6, 10);
for(var xx=aisx;xx<aisx+10;xx++)
setTile(xx, aisy, aisz, 1);
}
if(aisd==false){
aist = 225;
}
else if(aisd==true){
aist = -1;
}
}
if(ais2==7){
if(aist>75){
Entity.setVelX(aisoil, 0.00001);
Entity.setVelX(aisoil, -0.00001);
Entity.setVelZ(aisoil, 0.00001);
Entity.setVelZ(aisoil, -0.00001);
}
if(aist==1){
for(var xx=aisx-9;xx<aisx+10;xx++)
for(var zz=aisz-9;zz<aisz+10;zz++)
setTile(xx, aisy, zz, 2);
Entity.setVelY(aisoil, 0.4);
}
if(aist==31){
for(var xx=aisx-9;xx<aisx+10;xx++)
for(var zz=aisz-9;zz<aisz+10;zz++)
setTile(xx, aisy-1, zz, 3);
Entity.setVelY(aisoil, 0.4);
}
if(aist==61){
for(var xx=aisx-9;xx<aisx+10;xx++)
for(var zz=aisz-9;zz<aisz+10;zz++)
setTile(xx, aisy-2, zz, 3);
Entity.setVelY(aisoil, 0.4);
}
if(aist==91){
for(var xx=aisx-9;xx<aisx+10;xx++)
for(var zz=aisz-9;zz<aisz+10;zz++)
setTile(xx, aisy-3, zz, 3);
Entity.setVelY(aisoil, 0.4);
}
}
if(aist==0&&aisd==true){
aist = -1;
}
//aisummon
if(aisst>0){
aisst--;
}
if(aisst==0&&getTile(Entity.getX(aisummon), Entity.getY(aisummon)-1, Entity.getZ(aisummon))==2){
aiss2 = Math.floor(Math.random()*9);
aissx = Math.floor(Entity.getX(aisummon));
aissy = Math.floor(Entity.getY(aisummon));
aissz = Math.floor(Entity.getZ(aisummon));
yaw = Math.floor(Entity.getYaw(aisummon));
pitch = Math.floor(Entity.getPitch(aisummon));
sin = -Math.sin(yaw/180*Math.PI);
cos = Math.cos(yaw/180*Math.PI);
var cache = [aissx+4*sin, aissy+2, aissz+4*cos];
if(aiss2<3){
Level.spawnMob(cache[0], cache[1], cache[2], 32);
Level.spawnMob(cache[0], cache[1], cache[2], 32);
Level.spawnMob(cache[0], cache[1], cache[2], 36);
}
if((aiss2==3)||(aiss2==4)){
Level.spawnMob(cache[0], cache[1], cache[2], 33);
Level.spawnMob(cache[0], cache[1], cache[2], 33);
Level.spawnMob(cache[0], cache[1], cache[2], 33);
Level.spawnMob(cache[0], cache[1], cache[2], 33);
}
if((aiss2==5)||(aiss2==6)){
Level.spawnMob(cache[0], cache[1], cache[2], 34);
Level.spawnMob(cache[0], cache[1], cache[2], 34);
Level.spawnMob(cache[0], cache[1], cache[2], 34);
uuu = Level.spawnMob(cache[0], cache[1], cache[2], 34);
ddd = Level.spawnMob(cache[0], cache[1], cache[2], 35);
Entity.rideAnimal(uuu, ddd);
}
if(aiss2==7){
ESP.aiSbm("Master Summon");
for(var n=0;n<5;n++)
Level.spawnMob(cache[0], cache[1], cache[2], 32);
for(var n=0;n<3;n++){
Level.spawnMob(cache[0], cache[1], cache[2], 33);
Level.spawnMob(cache[0], cache[1], cache[2], 34);
Level.spawnMob(cache[0], cache[1], cache[2], 36);
}
uuu = Level.spawnMob(cache[0], cache[1], cache[2], 34);
ddd = Level.spawnMob(cache[0], cache[1], cache[2], 35);
Entity.rideAnimal(uuu, ddd);
uuu = Level.spawnMob(cache[0], cache[1], cache[2], 34);
ddd = Level.spawnMob(cache[0], cache[1], cache[2], 35);
Entity.rideAnimal(uuu, ddd);
}
if(aissd==false){
aisst = 225;
}
}
if(aisst==0&&aissd==true){
aisst = -1;
}



//---------------
if(aimc==1){
aitx = Entity.getX(aitree);
aity = Entity.getY(aitree)-1;
aitz = Entity.getZ(aitree);
for(var xx=aitx-1;xx<aitx+2;xx++)
for(var zz=aitz-1;zz<aitz+2;zz++)
if(getTile(xx, aity, zz)==0){
setTile(xx, aity, zz, 17);
}
}
//--A.I.S. deathHook---
if(Entity.getHealth(aifire)<=0&&aifd2){
ESP.aiSbm("Fire User was died");
aifd = true;
aifd2 = false;
}
if(Entity.getHealth(aiwater)<=0&&aiwd2){
ESP.aiSbm("Water Controller was died");
aiwd = true;
aiwd2 = false;
}
if(Entity.getHealth(aitree)<=0&&aitd2){
ESP.aiSbm("Nature Guardian was died");
aitd = true;
aitd2 = false;
}
if(Entity.getHealth(aicreeper)<=0&&aicd2){
ESP.aiSbm("I am Creeper was died");
aicd = true;
aicd2 = false;
}
if(Entity.getHealth(aisoil)<=0&&aisd2){
ESP.aiSbm("Soil Maaister was died");
aisd = true;
aisd2 = false;
}
if(Entity.getHealth(aisummon)<=0&&aissd2){
ESP.aiSbm("The Summoner was died");
aissd = true;
aissd2 = false
}


//show cooltime
if(adt1>0){
adt1--;
}
if(adt2>0){
adt2--;
}
if(adt3>0){
adt3--;
}
if(adt4>0){
adt4--;
}
if(adsc){
if(mcpev3) ModPE.showTipMessage("\n\n\n     기본기 "+Math.floor((adt1+14)/15)+"초, 스킬1 "+Math.floor((adt2+14)/15)+"초, 스킬2 "+Math.floor((adt3+14)/15)+"초, 궁극기 "+Math.floor((adt4+14)/15)+"초");
else ModPE.showTipMessage("\n\n\n                                                          기본기 "+Math.floor((adt1+14)/15)+"초, 스킬1 "+Math.floor((adt2+14)/15)+"초, 스킬2 "+Math.floor((adt3+14)/15)+"초, 궁극기 "+Math.floor((adt4+14)/15)+"초");
}


if(bgmOnoff){
if(bgmTime>0){
bgmTime--;
}
if(bgmTime==0){
bgmPlayer(true);
}
if(dn2!=checkArea()){
bgmPlayer(true);
}
if((checkArea()==6||checkArea()==1)&&dn!=nightCheck()){
bgmPlayer(true);
}
}
if(checkArea()==9&&!underTaleActive) underTaleActive = true;


if(slt2){
makeStreetlights(false);
slt2 = false;
}
if(dn!=nightCheck()&&streetLight){
makeStreetlights(nightCheck());
slt = 451;
}
if(nightCheck()==false&&slt>0){
slt = 0;
}
dn = nightCheck();
dn2 = checkArea();


//S.E.
if(se.tf){
if(se.d1>0){
se.d1--;
}
if(se.d2>0){
se.d2--;
}
if(se.d3>0){
se.d3--;
}
if(se.d4>0){
se.d4--;
}
if(se.b1>0){
se.b1--;
}
if(se.b2>0){
se.b2--;
}
if(se.b3>0){
se.b3--;
}
if(se.b4>0){
se.b4--;
}
if(se.g1>0){
se.g1--;
}
if(se.g2>0){
se.g2--;
}
if(se.g3>0){
se.g3--;
}
if(se.g4>0){
se.g4--;
}
if(se.l1>0){
se.l1--;
}
if(se.l2>0){
se.l2--;
}
if(se.l3>0){
se.l3--;
}
if(se.l4>0){
se.l4--;
}
if(se.a1>0){
se.a1--;
}
if(se.a2>0){
se.a2--;
}
if(se.a3>0){
se.a3--;
}
if(se.a4>0){
se.a4--;
}
if(se.h1>0){
se.h1--;
}
if(se.h2>0){
se.h2--;
}
if(se.h3>0){
se.h3--;
}
if(se.h4>0){
se.h4--;
}
if(se.ga1>0){
se.ga1--;
}
if(se.ga2>0){
se.ga2--;
}
if(se.ga3>0){
se.ga3--;
}
if(se.ga4>0){
se.ga4--;
}
if(se.r1>0){
se.r1--;
}
if(se.r2>0){
se.r2--;
}
if(se.r3>0){
se.r3--;
}
if(se.r4>0){
se.r4--;
}
if(se.i1>0){
se.i1--;
}
if(se.i2>0){
se.i2--;
}
if(se.i3>0){
se.i3--;
}
if(se.i4>0){
se.i4--;
}
if(se.o1>0){
se.o1--;
}
if(se.o2>0){
se.o2--;
}
if(se.o3>0){
se.o3--;
}
if(se.o4>0){
se.o4--;
}
if(se.bl1>0){
se.bl1--;
}
if(se.bl2>0){
se.bl2--;
}
if(se.bl3>0){
se.bl3--;
}
if(se.bl4>0){
se.bl4--;
}
if(se.c1>0){
se.c1--;
}
if(se.c2>0){
se.c2--;
}
if(se.c3>0){
se.c3--;
}
if(se.c4>0){
se.c4--;
}
if(se.do1>0){
se.do1--;
}
if(se.do2>0){
se.do2--;
}
if(se.do3>0){
se.do3--;
}
if(se.do4>0){
se.do4--;
}
if(se.ht1>0){
se.ht1--;
}
if(se.ht2>0){
se.ht2--;
}
if(se.ht3>0){
se.ht3--;
}
if(se.ht4>0){
se.ht4--;
}
if(se.e1>0){
se.e1--;
}
if(se.e2>0){
se.e2--;
}
if(se.e3>0){
se.e3--;
}
if(se.e4>0){
se.e4--;
}

if(se.d1==145){
ESP.antiLack(5);
for(var gun=3;gun<20;gun++){
setTile(px+gun*sin, py+2, pz+gun*cos, 0);
explode(px+gun*sin, py+2, pz+gun*cos, 1.8);
}
}
if(se.d2==295){
for(var gun=3;gun<14;gun++){
setTile(px+gun*sin, py+2, pz+gun*cos, 0);
setTile(px-gun*sin, py+2, pz-gun*cos, 0);
explode(px+gun*sin, py+2, pz+gun*cos, 1.8);
explode(px-gun*sin, py+2, pz-gun*cos, 1.8);
}
}
if(se.r1==145){
ESP.antiLack(5);
setTile(px+4*sin, py+2, pz+4*cos, 0);
explode(px+4*sin, py+2.7, pz+4*cos, 3);
}
if(se.r3==295){
ESP.antiLack(5);
for(var gun=3;gun<25;gun++){
setTile(px+gun*sin, py+2, pz+gun*cos, 0);
explode(px+gun*sin, py+2, pz+gun*cos, 1.8);
}
}
if(se.r4==1770){
for(var yy=se.ry+1;yy<se.ry+11;yy++){
setTile(se.rx+7, yy, se.rz+7, 0);
setTile(se.rx+7, yy, se.rz, 0);
setTile(se.rx+7, yy, se.rz-7, 0);
setTile(se.rx, yy, se.rz+7, 0);
setTile(se.rx, yy, se.rz-7, 0);
setTile(se.rx-7, yy, se.rz+7, 0);
setTile(se.rx-7, yy, se.rz, 0);
setTile(se.rx-7, yy, se.rz-7, 0);
}
}
if(se.i2==285){
Entity.setHealth(se.i2a, Entity.getHealth(se.i2a)-6);
}
if(se.i4>1350){
se.ix = Entity.getX(se.ima);
se.iy = Entity.getY(se.ima)-2;
se.iz = Entity.getZ(se.ima);
for(var xx=se.ix-1;xx<se.ix+2;xx++)
for(var yy=se.iy+1;yy<se.iy+4;yy++)
for(var zz=se.iz-1;zz<se.iz+2;zz++)
if(getTile(xx, yy, zz)!=7){
setTile(xx, yy, zz, 0);
}
ESP.heal(se.ima);
}
if(se.e4==900){
if(nightCheck())
Level.setTime(100);
for(var xx=se.ex-18;xx<se.ex+19;xx++){
setTile(xx, se.ey+2, se.ez-19, 95);
setTile(xx, se.ey+2, se.ez+19, 95);
}
for(var zz=se.ez-18;zz<se.ez+19;zz++){
setTile(se.ex+19, se.ey+2, zz, 95);
setTile(se.ex-19, se.ey+2, zz, 95);
}
for(var xx=se.ex-18;xx<se.ex+19;xx++){
for(var yy=se.ey-3;yy<se.ey+9;yy++){
for(var zz=se.ez-18;zz<se.ez+19;zz++){
if(getTile(xx, yy, zz)==3){
setTile(xx, yy, zz, 2);
}
if(getTile(xx, yy, zz)==41){
setTile(xx, yy, zz, 3);
}
if(getTile(xx, yy, zz)==22){
setTile(xx, yy, zz, 9);
}
}}}
}



if(auto){
if(se.d4==1350){
Level.setTime(100);
for(var xx=se.dx-11;xx<se.dx+12;xx++)
for(var zz=se.dz-11;zz<se.dz+12;zz++)
setTile(xx, se.dy, zz, 2);
}
if(se.b4==900){
for(var xx=se.bx-17;xx<se.bx+18;xx++)
for(var zz=se.bz-17;zz<se.bz+18;zz++)
setTile(xx, se.by, zz, 2);
}
if(se.b4==930){
for(var xx=se.bx-17;xx<se.bx+18;xx++)
for(var zz=se.bz-17;zz<se.bz+18;zz++)
setTile(xx, se.by-1, zz, 3);
}
if(se.b4==960){
for(var xx=se.bx-17;xx<se.bx+18;xx++)
for(var zz=se.bz-17;zz<se.bz+18;zz++)
setTile(xx, se.by-2, zz, 3);
}
if(se.b4==990){
for(var xx=se.bx-17;xx<se.bx+18;xx++)
for(var zz=se.bz-17;zz<se.bz+18;zz++)
setTile(xx, se.by-3, zz, 3);
}
if(se.b4==1020){
for(var xx=se.bx-17;xx<se.bx+18;xx++)
for(var zz=se.bz-17;zz<se.bz+18;zz++)
setTile(xx, se.by-4, zz, 3);
}
if(se.b4==1050){
for(var xx=se.bx-17;xx<se.bx+18;xx++)
for(var zz=se.bz-17;zz<se.bz+18;zz++)
setTile(xx, se.by-5, zz, 3);
}
if(se.b4==1080){
for(var xx=se.bx-17;xx<se.bx+18;xx++)
for(var zz=se.bz-17;zz<se.bz+18;zz++)
setTile(xx, se.by-6, zz, 3);
}
if(se.b4==1110){
for(var xx=se.bx-17;xx<se.bx+18;xx++)
for(var zz=se.bz-17;zz<se.bz+18;zz++)
if(getTile(xx, se.by-7, zz)==0){
setTile(xx, se.by-7, zz, 3);
}
}
if(se.b4==1140){
for(var xx=se.bx-17;xx<se.bx+18;xx++)
for(var zz=se.bz-17;zz<se.bz+18;zz++)
if(getTile(xx, se.by-8, zz)==0){
setTile(xx, se.by-8, zz, 3);
}
}
if(se.b4==1170){
for(var xx=se.bx-17;xx<se.bx+18;xx++)
for(var zz=se.bz-17;zz<se.bz+18;zz++)
if(getTile(xx, se.by-9, zz)==0){
setTile(xx, se.by-9, zz, 3);
}
}
if(se.b4==1200){
for(var xx=se.bx-17;xx<se.bx+18;xx++)
for(var zz=se.bz-17;zz<se.bz+18;zz++)
if(getTile(xx, se.by-10, zz)==0){
setTile(xx, se.by-10, zz, 3);
}
}


}


}

//H.E.
if(he.e1>0){
he.e1--;
}
if(he.e2>0){
he.e2--;
}
if(he.e3>0){
he.e3--;
}
if(he.e4>0){
he.e4--;
}
if(he.s1>0){
he.s1--;
}
if(he.s2>0){
he.s2--;
}
if(he.s3>0){
he.s3--;
}
if(he.s4>0){
he.s4--;
}
if(he.t1>0){
he.t1--;
}
if(he.t2>0){
he.t2--;
}
if(he.t3>0){
he.t3--;
}
if(he.t4>0){
he.t4--;
}
if(he.b1>0){
he.b1--;
}
if(he.b2>0){
he.b2--;
}
if(he.b3>0){
he.b3--;
}
if(he.b4>0){
he.b4--;
}
if(he.x1>0){
he.x1--;
}
if(he.x2>0){
he.x2--;
}
if(he.x3>0){
he.x3--;
}
if(he.x4>0){
he.x4--;
}
if(he.bi1>0){
he.bi1--;
}
if(he.bi2>0){
he.bi2--;
}
if(he.bi3>0){
he.bi3--;
}
if(he.bi4>0){
he.bi4--;
}
if(he.th1>0){
he.th1--;
}
if(he.th2>0){
he.th2--;
}
if(he.th3>0){
he.th3--;
}
if(he.th4>0){
he.th4--;
}
if(he.j1>0){
he.j1--;
}
if(he.j2>0){
he.j2--;
}
if(he.j3>0){
he.j3--;
}
if(he.j4>0){
he.j4--;
}
if(he.c1>0){
he.c1--;
}
if(he.c2>0){
he.c2--;
}
if(he.c3>0){
he.c3--;
}
if(he.c4>0){
he.c4--;
}
if(he.d1>0){
he.d1--;
}
if(he.d2>0){
he.d2--;
}
if(he.d3>0){
he.d3--;
}
if(he.d4>0){
he.d4--;
}

if(he.e1==145){
for(var gun=2;gun<5;gun++)
setTile(px+gun*sin, py+2, pz+gun*cos, 0);
ESP.antiLack(5);
explode(px+4*sin, py+2.5, pz+4*cos, 2);
}
if(he.e2==295){
ESP.antiLack(5);
for(var gun=3;gun<25;gun++)
explode(px+gun*sin, py+2, pz+gun*cos, 1.7);
}
if(he.e3b>0){
he.e3b--;
}
if(he.e3b==1){
setTile(he.e3x, he.e3y+2, he.e3z, 0);
ESP.antiLack(5);
explode(he.e3x, he.e3y+2, he.e3z, 3);
}
if(he.e3==1){
he.e3a = false;
}
if(he.e4==1790){
ESP.antiLack(5);
for(var n=3;n<17;n++){
explode(he.ex+n, he.ey+2, he.ez+n, 1.9);
explode(he.ex+n, he.ey+2, he.ez, 1.9);
explode(he.ex+n, he.ey+2, he.ez-n, 1.9);
explode(he.ex, he.ey+2, he.ez+n, 1.9);
explode(he.ex, he.ey+2, he.ez-n, 1.9);
explode(he.ex-n, he.ey+2, he.ez+n, 1.9);
explode(he.ex-n, he.ey+2, he.ez, 1.9);
explode(he.ex-n, he.ey+2, he.ez-n, 1.9);
}
}
if(he.s4==1770){
for each(var e in he.s4a)
Entity.setHealth(e, Entity.getHealth(e)-10);
}
if(he.s4==1740){
for each(var e in he.s4a)
Entity.setHealth(e, 20);
}
if(he.s4==1680){
for each(var e in he.s4a)
Entity.setHealth(e, Entity.getHealth(e)-5);
}
if(he.s4==1340){
for each(var e in he.s4a)
Entity.setHealth(e, Entity.getHealth(e)-10);
}
if(he.s4==900){
he.s4a = [];
}
if(he.t4==1797){
ESP.antiLack(5);
explode(he.tx+7, he.ty+1, he.tz+7, 3);
explode(he.tx-7, he.ty+1, he.tz-7, 3);
}
if(he.t4==1794){
ESP.antiLack(5);
explode(he.tx, he.ty+1, he.tz+7, 3);
explode(he.tx, he.ty+1, he.tz-7, 3);
}
if(he.t4==1791){
ESP.antiLack(5);
explode(he.tx-7, he.ty+1, he.tz+7, 3);
explode(he.tx+7, he.ty+1, he.tz-7, 3);
}
if(he.t4==1788){
ESP.antiLack(5);
explode(he.tx+7, he.ty+1, he.tz, 3);
explode(he.tx-7, he.ty+1, he.tz, 3);
}
if(he.t4==1785){
ESP.antiLack(5);
explode(he.tx+7, he.ty+1, he.tz+7, 3);
explode(he.tx-7, he.ty+1, he.tz-7, 3);
}
if(he.t4==1782){
ESP.antiLack(5);
explode(he.tx, he.ty+1, he.tz+7, 3);
explode(he.tx, he.ty+1, he.tz-7, 3);
}
if(he.t4==1779){
ESP.antiLack(5);
explode(he.tx-7, he.ty+1, he.tz+7, 3);
explode(he.tx+7, he.ty+1, he.tz-7, 3);
}
if(he.b3==270||he.b3==240||he.b3==210||he.b3==180){
Entity.setHealth(he.b3a, Entity.getHealth(he.b3a)-2);
}
if(he.x4==1770){
setTile(he.xx, he.xy+1, he.xz, 51);
}
if(he.x4==1350){
if(auto){
setTiles(he.xx-2, he.xx+2, he.xy+1, he.xy+4, he.xz-2, he.xz+2, 0);
setTiles(he.xx-2, he.xx+2, he.xy, he.xy, he.xz-2, he.xz+2, 2);
}
else{
setTiles(he.xx-2, he.xx+2, he.xy, he.xy+4, he.xz-2, he.xz+2, 0);
}
}
if(he.j4==1795){
setTile(he.jx, he.jy+9, he.jz, 0);
setTile(he.jx, he.jy+8, he.jz, 7);
}
if(he.j4==1790){
setTile(he.jx, he.jy+8, he.jz, 0);
setTile(he.jx, he.jy+7, he.jz, 7);
}
if(he.j4==1785){
setTile(he.jx, he.jy+7, he.jz, 0);
setTile(he.jx, he.jy+6, he.jz, 7);
}
if(he.j4==1780){
setTile(he.jx, he.jy+6, he.jz, 0);
setTile(he.jx, he.jy+5, he.jz, 7);
}
if(he.j4==1775){
setTile(he.jx, he.jy+5, he.jz, 0);
setTile(he.jx, he.jy+4, he.jz, 7);
}
if(he.j4==1770){
setTile(he.jx, he.jy+4, he.jz, 0);
setTile(he.jx, he.jy+3, he.jz, 7);
}
if(he.j4==1765){
setTile(he.jx, he.jy+3, he.jz, 0);
setTile(he.jx, he.jy+2, he.jz, 7);
}
if(he.j4==1760){
setTile(he.jx, he.jy+2, he.jz, 0);
setTile(he.jx, he.jy+1, he.jz, 7);
}
if(he.j4==1750){
for(var xx=he.jx-12;xx<he.jx+13;xx++)
for(var zz=he.jz-12;zz<he.jz+13;zz++)
setTile(xx, he.jy+1, zz, 0);
ESP.antiLack(15);
explode(he.jx+8, he.jy+1, he.jz+8, 5);
explode(he.jx+8, he.jy+1, he.jz, 5);
explode(he.jx+8, he.jy+1, he.jz-8, 5);
explode(he.jx, he.jy+1, he.jz+8, 5);
explode(he.jx, he.jy+1, he.jz, 5);
explode(he.jx, he.jy+1, he.jz-8, 5);
explode(he.jx-8, he.jy+1, he.jz+8, 5);
explode(he.jx-8, he.jy+1, he.jz, 5);
explode(he.jx-8, he.jy+1, he.jz-8, 5);
}
if(he.j4==1700){
for(var xx=he.jx-13;xx<he.jx+14;xx++)
for(var zz=he.jz-13;zz<he.jz+14;zz++)
setTile(xx, he.jy+2, zz, 0);
}
if(he.d3>150){
he.d3x = Entity.getX(he.dark);
he.d3y = Entity.getY(he.dark)-2;
he.d3z = Entity.getZ(he.dark);
for(var xx=he.d3x-1;xx<he.d3x+2;xx++)
for(var zz=he.d3z-1;zz<he.d3z+2;zz++)
if([0, 8, 9, 51].indexOf(getTile(xx, he.d3y, zz))!=-1){
setTile(xx, he.d3y, zz, 17, 1);
}
}
if(he.d3==150){
he.c2 = -1;
}
if(he.c2==-1){
he.d3x = Entity.getX(he.dark);
he.d3y = Entity.getY(he.dark)-4;
he.d3z = Entity.getZ(he.dark);
if(getTile(he.d3x, he.d3y-1, he.d3z)!=0){
for(var xx=he.d3x-1;xx<he.d3x+2;xx++)
for(var zz=he.d3z-1;zz<he.d3z+2;zz++)
if(getTile(xx, he.d3y+2, zz)==0){
setTile(xx, he.d3y+2, zz, 30);
he.c2 = 16;
}
}
}
if(he.c2>0){
he.c2--;
}
if(he.c2==1){
for(var xx=he.d3x-1;xx<he.d3x+2;xx++)
for(var zz=he.d3z-1;zz<he.d3z+2;zz++)
if(getTile(xx, he.d3y+2, zz)==30){
setTile(xx, he.d3y+2, zz, 0);
}
}
if(he.d4==1795){
for(var yy=he.dy+5;yy<he.dy+9;yy++){
setTile(he.dx+7, yy, he.dz+7, 173);
setTile(he.dx+7, yy, he.dz, 173);
setTile(he.dx+7, yy, he.dz-7, 173);
setTile(he.dx, yy, he.dz+7, 173);
setTile(he.dx, yy, he.dz-7, 173);
setTile(he.dx-7, yy, he.dz+7, 173);
setTile(he.dx-7, yy, he.dz, 173);
setTile(he.dx-7, yy, he.dz-7, 173);
}
}
if(he.d4==1790){
for(var yy=he.dy+1;yy<he.dy+9;yy++){
setTile(he.dx+7, yy, he.dz+7, 89);
setTile(he.dx+7, yy, he.dz, 89);
setTile(he.dx+7, yy, he.dz-7, 89);
setTile(he.dx, yy, he.dz+7, 89);
setTile(he.dx, yy, he.dz-7, 89);
setTile(he.dx-7, yy, he.dz+7, 89);
setTile(he.dx-7, yy, he.dz, 89);
setTile(he.dx-7, yy, he.dz-7, 89);
}
var p2x, p2y, p2z;
for each(var e in Entity.getAll()){
p2x = Math.abs(Player.getX()-Entity.getX(e));
p2y = Math.abs(Player.getY()-Entity.getY(e));
p2z = Math.abs(Player.getZ()-Entity.getZ(e));
if(p2x<=30&&p2y<=30&&p2z<=30&&he.dark!=e){
teleport(e, Entity.getX(e), Entity.getY(e)+13, Entity.getZ(e));
Entity.setHealth(e, Entity.getHealth(e)-6);
try{
Entity.darkdEffect(e, MobEffect.wither, 200, 2, true, false);
}
catch(e){
//null;
}
}
}
}
if(he.d4==1780){
for(var yy=he.dy+1;yy<he.dy+9;yy++){
setTile(he.dx+7, yy, he.dz+7, 0);
setTile(he.dx+7, yy, he.dz, 0);
setTile(he.dx+7, yy, he.dz-7, 0);
setTile(he.dx, yy, he.dz+7, 0);
setTile(he.dx, yy, he.dz-7, 0);
setTile(he.dx-7, yy, he.dz+7, 0);
setTile(he.dx-7, yy, he.dz, 0);
setTile(he.dx-7, yy, he.dz-7, 0);
}
}


if(auto){
if(he.e4==900){
for(var xx=he.ex-17;xx<he.ex+18;xx++)
for(var zz=he.ez-17;zz<he.ez+18;zz++)
setTile(xx, he.ey, zz, 2);
}
if(he.e4==930){
for(var xx=he.ex-17;xx<he.ex+18;xx++)
for(var zz=he.ez-17;zz<he.ez+18;zz++)
setTile(xx, he.ey-1, zz, 3);
}
if(he.e4==960){
for(var xx=he.ex-17;xx<he.ex+18;xx++)
for(var zz=he.ez-17;zz<he.ez+18;zz++)
setTile(xx, he.ey-2, zz, 3);
}
if(he.e4==990){
for(var xx=he.ex-17;xx<he.ex+18;xx++)
for(var zz=he.ez-17;zz<he.ez+18;zz++)
setTile(xx, he.ey-3, zz, 3);
}
if(he.e4==1020){
for(var xx=he.ex-17;xx<he.ex+18;xx++)
for(var zz=he.ez-17;zz<he.ez+18;zz++)
setTile(xx, he.ey-4, zz, 3);
}
if(he.e4==1050){
for(var xx=he.ex-17;xx<he.ex+18;xx++)
for(var zz=he.ez-17;zz<he.ez+18;zz++)
setTile(xx, he.ey-5, zz, 3);
}
if(he.t4==900){
for(var xx=he.tx-14;xx<he.tx+15;xx++)
for(var zz=he.tz-14;zz<he.tz+15;zz++)
setTile(xx, he.ty, zz, 2);
}
if(he.t4==930){
for(var xx=he.tx-14;xx<he.tx+15;xx++)
for(var zz=he.tz-14;zz<he.tz+15;zz++)
setTile(xx, he.ty-1, zz, 3);
}
if(he.t4==960){
for(var xx=he.tx-14;xx<he.tx+15;xx++)
for(var zz=he.tz-14;zz<he.tz+15;zz++)
setTile(xx, he.ty-2, zz, 3);
}
if(he.t4==990){
for(var xx=he.tx-13;xx<he.tx+14;xx++)
for(var zz=he.tz-13;zz<he.tz+14;zz++)
setTile(xx, he.ty-3, zz, 3);
}
if(he.t4==1020){
for(var xx=he.tx-13;xx<he.tx+14;xx++)
for(var zz=he.tz-13;zz<he.tz+14;zz++)
setTile(xx, he.ty-4, zz, 3);
}
if(he.th2==1) autoRecover(he.th2x, he.th2y, he.th2z, 4, 2);
if(he.th2==31) autoRecover(he.th2x, he.th2y-1, he.th2z, 4, 3);
if(he.th2==61) autoRecover(he.th2x, he.th2y-2, he.th2z, 4, 3);
if(he.th2==91) autoRecover(he.th2x, he.th2y-3, he.th2z, 4, 3);
if(he.th4==900) autoRecover(he.thx, he.thy, he.thz, 11, 2);
if(he.th4==930) autoRecover(he.thx, he.thy-1, he.thz, 11, 3);
if(he.th4==960) autoRecover(he.thx, he.thy-2, he.thz, 11, 3);
if(he.th4==990) autoRecover(he.thx, he.thy-3, he.thz, 11, 3);
if(he.th4==1020) autoRecover(he.thx, he.thy-4, he.thz, 11, 3);
if(he.j4==900) autoRecover(he.jx, he.jy, he.jz, 15, 2);
if(he.j4==930) autoRecover(he.jx, he.jy-1, he.jz, 15, 3);
if(he.j4==960) autoRecover(he.jx, he.jy-2, he.jz, 15, 3);
if(he.j4==990) autoRecover(he.jx, he.jy-3, he.jz, 15, 3);
if(he.j4==1020) autoRecover(he.jx, he.jy-4, he.jz, 15, 3);
if(he.j4==1050) autoRecover(he.jx, he.jy-5, he.jz, 15, 3);
if(he.j4==1080) autoRecover(he.jx, he.jy-6, he.jz, 15, 3);
}



if(hhhhh>0){
hhhhh--;
if(!nightCheck())
Level.setTime(14000);
}
if(hhhhh<0){
hhhhh++;
}
if(hhhhh==1){
theyAreComing();
}
if(hhhhh==151){
for(var n=0;n<5;n++)
Entity.remove(cree[n]);
}
if(hhhhh==181){
ctx.runOnUiThread(new java.lang.Runnable({
run : function(){
try{
var dialog = new AlertDialog.Builder(ctx, holoDark);
dialog.setTitle("???'s Message");
dialog.setMessage("I will call you. Will you accept?");
dialog.setNegativeButton("Yes", new DialogInterface.OnClickListener({
onClick: function(v){
anti3 = 30;
hhhhh = -150;
bgmPlayer(false);
playWLMusic();
}
}));
dialog.setPositiveButton("No", new DialogInterface.OnClickListener({
onClick: function(v){
wl.m("Then, good bye.");
Entity.setHealth(ad, 0);
hhhhh = -300;
}
}));
dialog.show();
}
catch(e){
ESP.sbm(e+", "+e.lineNumber);
}
}
}));
}
if(hhhhh==255){
wl.m("Do you know who I am?");
}
if(hhhhh==-270){
ModPE.leaveGame();
hhhhh = 90;
}
if(hhhhh==-135){
makeHiddenArea();
Entity.setPosition(ad, 100, 12, 150);
makeLady();
}
if(hhhhh==-90){
wl.t = 1350;
hhhhh = 0;
for each(var e in Entity.getAll()){
if(ESP.isPlayer(e)&&ad!=e){
wl.pn.push(" "+Player.getName(e));
Entity.remove(e);
}
}
if(wl.pn[0]!=null)
wl.m("Hello,"+Player.getName(ad)+". Good-bye,"+wl.pn+".");
else
wl.m("Hello,"+Player.getName(ad)+".");
auto = false;
}
if(wl.t>0){
wl.t--;
}
if((wl.t%90)==1&&wl.t>10){
ladyAttack();
}
if((wl.t%90)==10){
if(!checkPlayerIsThere()) Entity.setPositon(ad, 110, 12, 160);
}
if((wl.t%300)==10){
Level.spawnMob(120, 13, 150, 32);
Level.spawnMob(120, 13, 150, 32);
Level.spawnMob(100, 13, 170, 35);
Level.spawnMob(100, 13, 170, 35);
Level.spawnMob(120, 13, 170, 34);
Level.spawnMob(120, 13, 170, 34);
}
if(wl.t==1){
redScreen();
wl.t = -76;
}
if(wl.t<0){
wl.t++;
}
if(wl.t==-6){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var nm = ctx.getSystemService(android.content.Context.NOTIFICATION_SERVICE);
var noti = new android.app.Notification.Builder(ctx);
noti.setSmallIcon(android.R.drawable.ic_menu_info_details);
noti.setContentTitle("???'s Message");
noti.setContentText("Good bye, "+Player.getName(Player.getEntity())+".");
noti.setContentInfo("초능력자 대전 "+version);
noti.setOngoing(false);
nm.notify(1, noti.getNotification());
}
catch(e){
print(e+", "+e.lineNumber);
}
}
}));
}
if(wl.t==-1){
makeCrash();
}
if(wl.o>0){
wl.o--;
}

if(zs.t!=0){
if(zs.t>0&&zs.n<11){
if(zs.n<6) Level.setTime(18000);
zs.t--;
}
if(zs.t<0){
Level.setTime(14000);
zs.t++;
}
if(zs.t==-1){
ESP.sbm("곧 좀비들이 몰려올 것입니다. 모두 마을로 소환합니다.", true);
for each(var e in Entity.getAll()){
if(Player.isPlayer(e)) ESP.send(e);
}
ESP.reset();
ESP.sbm("모든 능력이 비활성화됩니다.", true);
zs.t = 402;
}
if(zs.t==302){
ESP.sbm("모두에게 삽을 전송합니다.", true);
for each(var e in Entity.getAll()){
if(Player.isPlayer(e))
Level.dropItem(Entity.getX(e), Entity.getY(e), Entity.getZ(e), 0, 277, 1, 0);
}
}
if(zs.t==262){
ESP.sbm("이 전설의 삽스칼리버로 좀비들을 처치해주세요.\n삽스칼리버는 맨손으로 땅을 터치하셔도 얻으실 수 있습니다.", true);
}
if(zs.t==201){
for each(var e in Entity.getAll()){
if(ESP.isPlayer(e)){
Level.spawnMob(Entity.getX(e), Entity.getY(e)+1, Entity.getZ(e), 32);
Level.spawnMob(Entity.getX(e), Entity.getY(e)+1, Entity.getZ(e), 32);
}
}
}
if(zs.t==1){
zs.t = 202;
zs.n++;
}
if(!nightCheck()){
zs.t = 0;
ESP.sbm("낮이 되어 더 이상 좀비가 나타나지 않습니다.", true);
}

}

if(la.t>0){
la.t--;
if(!nightCheck())
Level.setTime(14000);
}
if(la.t<0){
la.t++;
}
if(la.t==1){
var rrrrr = ESP.random(3);
switch(rrrrr){
case 0 : 
la.m("누가 나를 깨웠는가...");
break;
case 1 : 
la.m("자네가 나를 깨웠는가, "+Player.getName(ad)+".");
break;
case 2 : 
la.m("음...");
Entity.setFireTicks(ad, 5);
break;
}
la.t = 201;
if(ESP.random(4)==0) la.t = -600;
}
if(la.t==-500) la.m("나는 이만 돌아가도록 하지.");
if(la.t==-400) la.m("그대도 이만 돌아가시게나....");
if(la.t==-60){
ESP.sbm("Legendary Assassination", true);
for each(var e in Entity.getAll()){
if(ESP.isPlayer(e)) ESP.kill(e);
}
}
if(la.t==-1) makeCrash();


if(slt>0){
slt--;
}
if(slt==1){
makeStreetlights(true);
slt = 451;
}


if(mp3){
if(Math.round(Entity.getX(ad))==-1029&&Math.floor(Entity.getY(ad))==9&&Math.round(Entity.getZ(ad))==993){
Entity.setPosition(ad, 116, 52, 25);
ESP.toast("Teleported to Texeris.");
}
if(Math.round(Entity.getX(ad)-0.5)==-1015&&Math.floor(Entity.getY(ad))==20&&Math.round(Entity.getZ(ad)-0.5)==-1007){
Entity.setPosition(ad, 116, 52, 25);
ESP.toast("Teleported to Texeris.");
}
if(Math.round(Entity.getX(ad)-0.5)==2016&&Math.floor(Entity.getY(ad))==41&&Math.round(Entity.getZ(ad)-0.5)==-1031){
Entity.setPosition(ad, 2000, 30, -1500);
ESP.toast("Teleported to the Chroxia.");
}

pa.sin = Math.sin(pa.n*Math.PI/27);
pa.cos = Math.cos(pa.n*Math.PI/27);
Level.addParticle(ParticleType.flame, -999.5+pa.sin, 46.5, 3008.5+pa.cos, 0, 0, 0, 3);
Level.addParticle(ParticleType.flame, -996.5+pa.sin, 46.5, 3008.5+pa.cos, 0, 0, 0, 3);
Level.addParticle(ParticleType.flame, -996.5+pa.sin, 46.5, 3005.5+pa.cos, 0, 0, 0, 3);
Level.addParticle(ParticleType.flame, -999.5+pa.sin, 46.5, 3005.5+pa.cos, 0, 0, 0, 3);
pa.n++;
if(pa.n>360){
pa.n = 0;
}


}


if(dt.l){
if(dt.t>0){
dt.t--;
}
Entity.setHealth(dt.p, 3000);
Entity.setFireTicks(dt.p, 0);
if(dt.t==152){
if(dt.ek==1) dtm("Why did you call me, "+Player.getName(ad)+".");
if(dt.ek==2) dtm("어찌하여 나를 불렀는가, "+Player.getName(ad)+".");
}
if(dt.f==false){
if(dt.t==1){
dt.r = ESP.random(5);
if(dt.ek==1){
if(dt.r==0) dtm("Hello?");
if(dt.r==1) dtm("I am the ESI, Dark Tornado.");
if(dt.r==2) dtm("Hey, "+Player.getName(ad)+", I'd like to know why you called me.");
if(dt.r==3){
dtm("Humm...");
Entity.setVelY(dt.p, 1.5);
}
}
else if(dt.ek==2){
if(dt.r==0) dtm("안녕하신가...");
if(dt.r==1) dtm("내가 ESI인 Dark Tornado 일세.");
if(dt.r==2) dtm("이보시게, "+Player.getName(ad)+", 그대는 왜 나를 불렀는가.");
if(dt.r==3){
dtm("음...");
Entity.setVelY(dt.p, 1.5);
}
}
dt.t = 151;
}
}
if(dt.f&&dt.t==1){
darkTornadoAssault();
dt.t = 121;
}
dt.sin = Math.sin(dt.n*Math.PI/27);
dt.cos = Math.cos(dt.n*Math.PI/27);
Level.addParticle(ParticleType.flame, Entity.getX(dt.p)+dt.sin, Entity.getY(dt.p)+1, Entity.getZ(dt.p)+dt.cos, 0, 0, 0, 3);
dt.n++;
if(dt.n>360){
dt.n = 0;
}
if(dt.f){
Level.addParticle(ParticleType.lava, Entity.getX(dt.p), Entity.getY(dt.p)+2.5, Entity.getZ(dt.p), 0, 0, 0, 2);
}

}
if(Entity.getHealth(dt.p)<=0){
dt.l = false;
dt.f = false;
dt.t = 0;
}

if(ra.t>0){
ra.t--;
}
if(ra.t==1){
for(var pp in ra.p)
Entity.setHealth(pp, 20);
}
for(var n in ra.p){
var pp = ra.p[n];
if(mp3&&!townCheck(Entity.getX(pp), Entity.getZ(pp))){
Entity.setHealth(pp, 20);
ra.p.splice(n, 1);
}
}

if(tttt[0]!=null){
for(var n=0;n<tttt.length;n++){
if(tttt[n].tt>0){
tttt[n].tt--;
}
if(tttt[n].tt==0){
Entity.remove(tttt[n].tp);
tttt.splice(n, 1);
}
}
}
for(var n=0;n<15;n++){
if(u[n].p==null) continue;
if(u[n].c1>0) u[n].c1--;
if(u[n].c2>0) u[n].c2--;
if(u[n].c3>0) u[n].c3--;
if(u[n].c4>0) u[n].c4--;
}
for(var n=0;n<4;n++){
if(l.fc[n]>0) l.fc[n]--;
if(l.ic[n]>0) l.ic[n]--;
if(l.dc[n]>0) l.dc[n]--;
if(l.ac[n]>0) l.ac[n]--;
if(l.tc[n]>0) l.tc[n]--;
}

if(maxHealthFix){
var pls = ScriptManager.allentities;
for(var n=0;n<pls.size();n++){
if(Player.isPlayer(pls.get(n))){
var eh = Entity.getHealth(pls.get(n));
if(eh>0){
if(eh>20) Entity.setMaxHealth(pls.get(n), eh);
else if(eh<=20) Entity.setMaxHealth(pls.get(n), 20);
}
}
}
}
if(getPlayers){
var pls = ScriptManager.allplayers;
for(var n=0;n<pls.size();n++){
if(!Player.isPlayer(pls.get(n))){
leftPls.push(pls.get(n));
ScriptManager.callScriptMethod("entityRemovedHook", [new java.lang.Long(pls.get(n))]);
ScriptManager.allplayers.remove(n);
}
}
}


}


//Commands
function procCmd(cmd){
var Data = cmd.split(" ");
//time set
if(cmd=="day"){
Level.setTime(700);
ESP.sbm("Time Day");
}
else if(cmd=="night"){
Level.setTime(14000);
ESP.sbm("Time Night");
}

//admin+
if(cmd=="fill"){
admin = 0;
ESP.sbm("Filling Mode");
}
if(cmd=="delete"){
admin = 1;
ESP.sbm("Deleting Mode");
}
if(cmd=="both"){
admin = 2;
ESP.sbm("Filling&Deleting Mode");
}
if(cmd=="gun"){
admin = 3;
ESP.sbm("Rail Gun Mode");
}
if(cmd=="auto"){
fill = true;
ESP.sbm("Auto Filling&Deleting Mode");
}
if(cmd=="auto off"){
fill = false;
ESP.sbm("Auto Filling&Deleting Mode off");
}
if(cmd=="move1"){
admin2 = 0;
ESP.sbm("Teleportion mode");
}
if(cmd=="move1+"){
admin2 = 4;
ESP.sbm("Teleportion mode plus");
}
if(cmd=="move2"){
admin2 = 1;
ESP.sbm("Faster mode");
}
if(cmd=="wide"){
admin = 4;
ESP.sbm("Wide Filling&Deleting Mode");
}
if(cmd=="heal"){
admin = 5;
ESP.sbm("Healing Mode");
}
if(Data[0]=="kill"&&Data[1]==null){
admin = 6;
ESP.sbm("Killing Mode");
}
if(cmd=="send"){
admin = 8;
ESP.sbm("Sending Mode");
}

if(Data[0]=="kill"&&Data[1]!=null){
var n = espCode.indexOf(Data[1]);
if(n!=-1){
ESP.kill(eval(espCodes[n]));
ESP.sbm(ra.n[n]+" was killed");
}
else if(Data[1]=="dtj"){
ESP.kill(dtj);
ESP.sbm("Dark Tornado jr. was killed");
}
else if(Data[1]=="fe"){
ESP.kill(fe);
ESP.sbm("Fire Expert was killed");
}
else{
if(Data[5]!=null){
killPlayer(Data[1]+" "+Data[2]+" "+Data[3]+" "+Data[4]+" "+Data[5]);
}
else if(Data[4]!=null){
killPlayer(Data[1]+" "+Data[2]+" "+Data[3]+" "+Data[4]);
}
else if(Data[3]!=null){
killPlayer(Data[1]+" "+Data[2]+" "+Data[3]);
}
else if(Data[2]!=null){
killPlayer(Data[1]+" "+Data[2]);
}
else{
killPlayer(Data[1]);
}
}

}

if(Data[0]=="send"&&Data[1]!=null){
var n = espCode.indexOf(Data[1]);
if(n!=-1){
ESP.send(eval(espCodes[n]));
ESP.sbm(ra.n[n]+" was sent");
}
else if(Data[1]=="dtj"){
ESP.send(dtj);
ESP.sbm("Dark Tornado jr. was sent");
}
else if(Data[1]=="fe"){
ESP.send(fe);
ESP.sbm("Fire Expert was sent");
}
else{
if(Data[5]!=null){
ESP.sendHuman(Data[1]+" "+Data[2]+" "+Data[3]+" "+Data[4]+" "+Data[5]);
}
else if(Data[4]!=null){
ESP.sendHuman(Data[1]+" "+Data[2]+" "+Data[3]+" "+Data[4]);
}
else if(Data[3]!=null){
ESP.sendHuman(Data[1]+" "+Data[2]+" "+Data[3]);
}
else if(Data[2]!=null){
ESP.sendHuman(Data[1]+" "+Data[2]);
}
else{
ESP.sendHuman(Data[1]);
}
}

}

if(Data[0]=="heal"&&Data[1]!=null){
if(Data[2]==null){
var n = espCode.indexOf(Data[1]);
if(n!=-1){
ESP.heal(eval(espCodes[n]));
ESP.sbm(ra.n[n]+" was healed");
}
else if(Data[1]=="dtj"){
ESP.heal(dtj);
ESP.sbm("Dark Tornado jr. was healed");
}
else if(Data[1]=="fe"){
ESP.heal(fe);
ESP.sbm("Fire Expert was healed");
}

}
else if(Data[2]!=null){
var n = espCode.indexOf(Data[1]);
if(n!=-1){
ESP.setHealth(eval(espCodes[n]), Data[2]);
ESP.sbm(ra.n[n]+"s health was set to"+Data[2]+".");
}
if(Data[1]=="dtj"){
ESP.setHealth(dtj, Data[2]);
ESP.sbm("Dark Tornado jr.'s health was set to"+Data[2]+".");
}
if(Data[1]=="fe"){
ESP.setHealth(fe, Data[2]);
ESP.sbm("Fire Expert's health was set to"+Data[2]+".");
}
}

}
if(Data[0]==".heal"){
if(Data[5]!=null){
healPlayer(Data[1]+" "+Data[2]+" "+Data[3]+" "+Data[4]+" "+Data[5]);
}
else if(Data[4]!=null){
healPlayer(Data[1]+" "+Data[2]+" "+Data[3]+" "+Data[4]);
}
else if(Data[3]!=null){
healPlayer(Data[1]+" "+Data[2]+" "+Data[3]);
}
else if(Data[2]!=null){
healPlayer(Data[1]+" "+Data[2]);
}
else{
healPlayer(Data[1]);
}
}

//remote on
if(Data[0]=="on"&&Data[2]!=0){
var n = espCode.indexOf(Data[1]);
if(n!=-1){
if(Data[1]=="mush"){
if(mcpev){
if(Data[5]!=null){
mush[0] = ESP.findHuman(Data[2]+" "+Data[3]+" "+Data[4]+" "+Data[5]);
}
if(Data[4]!=null){
mush[0] = ESP.findHuman(Data[2]+" "+Data[3]+" "+Data[4]);
}
if(Data[3]!=null){
mush[0] = ESP.findHuman(Data[2]+" "+Data[3]);
}
else{
mush[0] = ESP.findHuman(Data[2]);
}
ESP.sbm("Mushroom Grower on");
}
else{
ESP.toast("0.8.1 이하에서는 사용할 수 없습니다");
}
}
else if(Data[1]=="ender"){
if(mcpev){
if(Data[5]!=null){
ender[0] = ESP.findHuman(Data[2]+" "+Data[3]+" "+Data[4]+" "+Data[5]);
}
if(Data[4]!=null){
ender[0] = ESP.findHuman(Data[2]+" "+Data[3]+" "+Data[4]);
}
if(Data[3]!=null){
ender[0] = ESP.findHuman(Data[2]+" "+Data[3]);
}
else{
ender[0] = ESP.findHuman(Data[2]);
}
ESP.sbm("Ender Girl on");
}
else{
ESP.toast("0.8.1 이하에서는 사용할 수 없습니다");
}
}
else if(Data[1]=="taiga"){
if(mcpev){
if(Data[5]!=null){
taiga[0] = ESP.findHuman(Data[2]+" "+Data[3]+" "+Data[4]+" "+Data[5]);
}
if(Data[4]!=null){
taiga[0] = ESP.findHuman(Data[2]+" "+Data[3]+" "+Data[4]);
}
if(Data[3]!=null){
taiga[0] = ESP.findHuman(Data[2]+" "+Data[3]);
}
else{
taiga[0] = ESP.findHuman(Data[2]);
}
ESP.sbm("Taiga Appearer on");
}
else{
ESP.toast("0.8.1 이하에서는 사용할 수 없습니다");
}
}
else if(Data[1]=="swamp"){
if(mcpev){
if(Data[5]!=null){
swamp[0] = ESP.findHuman(Data[2]+" "+Data[3]+" "+Data[4]+" "+Data[5]);
}
if(Data[4]!=null){
swamp[0] = ESP.findHuman(Data[2]+" "+Data[3]+" "+Data[4]);
}
if(Data[3]!=null){
swamp[0] = ESP.findHuman(Data[2]+" "+Data[3]);
}
else{
swamp[0] = ESP.findHuman(Data[2]);
}
ESP.sbm("Swamp Generater on");
}
else{
ESP.toast("0.8.1 이하에서는 사용할 수 없습니다");
}
}
else if(Data[1]=="asum"){
if(mcpev){
if(Data[5]!=null){
asum[0] = ESP.findHuman(Data[2]+" "+Data[3]+" "+Data[4]+" "+Data[5]);
}
if(Data[4]!=null){
asum[0] = ESP.findHuman(Data[2]+" "+Data[3]+" "+Data[4]);
}
if(Data[3]!=null){
asum[0] = ESP.findHuman(Data[2]+" "+Data[3]);
}
else{
asum[0] = ESP.findHuman(Data[2]);
}
ESP.sbm("Arch Summoner on");
}
else{
ESP.toast("0.8.1 이하에서는 사용할 수 없습니다");
}
}
else if(Data[1]=="dtj"){
if(Data[5]!=null){
dtj = ESP.findHuman(Data[2]+" "+Data[3]+" "+Data[4]+" "+Data[5]);
}
if(Data[4]!=null){
dtj = ESP.findHuman(Data[2]+" "+Data[3]+" "+Data[4]);
}
if(Data[3]!=null){
dtj = ESP.findHuman(Data[2]+" "+Data[3]);
}
else{
dtj = ESP.findHuman(Data[2]);
}
ESP.sbm("Dark Tornado jr. on");
}
else if(Data[1]=="fe"){
if(Data[5]!=null){
fe = ESP.findHuman(Data[2]+" "+Data[3]+" "+Data[4]+" "+Data[5]);
}
if(Data[4]!=null){
fe = ESP.findHuman(Data[2]+" "+Data[3]+" "+Data[4]);
}
if(Data[3]!=null){
fe = ESP.findHuman(Data[2]+" "+Data[3]);
}
else{
fe = ESP.findHuman(Data[2]);
}
ESP.sbm("Fire Expert on");
}
else{
if(Data[5]!=null){
playerTarget = ESP.findHuman(Data[2]+" "+Data[3]+" "+Data[4]+" "+Data[5]);
}
if(Data[4]!=null){
playerTarget = ESP.findHuman(Data[2]+" "+Data[3]+" "+Data[4]);
}
if(Data[3]!=null){
playerTarget = ESP.findHuman(Data[2]+" "+Data[3]);
}
else{
playerTarget = ESP.findHuman(Data[2]);
}
SB.espOn(n);
ESP.sbm(ra.n[n]+" on");
}

}
}

if(cmd=="move3"){
admin2 = 2;
ESP.sbm("Flash Jump Mode");
}
if(cmd=="move4"){
admin2 = 3;
ESP.sbm("Super Jump Mode");
}
if(cmd=="move off"){
admin2 = 5;
ESP.sbm("Clock Moving Mode off");
}
if(cmd=="time"){
admin = 7;
ESP.sbm("Time Control Mode");
}
if(Data[0]=="tp"&&Data[3]!=null){
Entity.setPosition(Player.getEntity(), Data[1], Data[2], Data[3]);
ESP.sbm("Teleported to "+Data[1]+", "+Data[2]+", "+Data[3]);
}
if(cmd=="hideout"){
if(ho==false){
Entity.setPosition(ad,18,13,19);
ESP.sbm("Teleported to Hideout");
}
else if(ho==true){
teleport(Player.getEntity(),18,13,19);
ESP.sbm("Someone Teleported to Hideout");
}
}
if(cmd=="house"){
if(mp==false){
Entity.setPosition(ad,127,53,23);
}
if(mp==true){
Entity.setPosition(ad,6,53.5,23);
}
ESP.sbm("Teleported to Admin's House");
}
if(cmd=="release"){
dtl = true;
ESP.sbm("Dark Tornado jr. Limiter Release");
dtla = 4500;
}
if(cmd=="operate"){
dtl = false;
ESP.sbm("Dark Tornado jr. Limiter Operate");
}
if(cmd=="ho open"){
ho = true;
ESP.sbm("Hideout is opened");
}
if(cmd=="ho close"){
ho = false;
ESP.sbm("Hideout is opened");
}
if(cmd=="return"){
if(mpk){
Entity.setPosition(ad, 151, 22, 18);
}
else if(mp3){
if(mp4){
Entity.setPosition(ad, 21, 52, 40);
}
else{
if(mp) Entity.setPosition(ad, 24, 52, 23);
else Entity.setPosition(ad, 116, 52, 25);
}
}
else{
ESP.toast("전용맵이 아닙니다.");
}
}

//off
if(Data[1]=="off"){
var n = espCode.indexOf(Data[0]);
if(n!=-1){
SB.espOff(n);
ESP.sbm(ra.n[n]+" off");
}
}
if(cmd=="dtj off"){
dtj = null;
ESP.sbm("Dark Tornado jr. off");
}
if(cmd=="fe off"){
fe = null;
ESP.sbm("Fire Expert off");
}

//reset
else if(cmd=="reset"){
ESP.reset();
ESP.sbm("All Reset");
}


//help
if(cmd=="help"){
lang = 0;
expl = 0;
ESP.sbm("You can turn on E.S.P. by touching an obsidian under a sign which an Esper's name was writen.");
}
if(cmd=="도움말"){
lang = 1;
expl = 0;
ESP.sbm("능력활성화는 능력자 이름이 쓰여있는 표지판 아래에 있는 옵시디언을 터치하시면 됩니다.");
}

//anti lack off
if(cmd=="al off"){
anti = false;
anti2 = 0;
ESP.toast("Anti Lack was reseted.");
}

if(cmd=="rm"){
ESP.toast("Removing Mob on");
anti3 = 45;
}
if(cmd=="rm off"){
ESP.toast("Removing Mob off");
anti3 = 0;
}
if(cmd=="rd"){
ESP.toast("Removing Dropped Items on");
anti4 = 45;
}
if(cmd=="rd off"){
ESP.toast("Removing Dropped Items off");
anti4 = 0;
}


//auto recovery+
if(cmd=="ar"){
ESP.sbm("Auto Recovery was actived.");
auto = true;
}
if(cmd=="ar off"){
ESP.sbm("Auto Recovery was stopped.");
auto = false;
}


//0.4.3
if(Data[0]=="o"){
if(Data[1]=="fire"){
if(Data[2]==null){
ofire = 1;
ESP.sbm("Fire Master(old vers) on");
}
else if(Data[2]=="off"){
ofire = 0;
ESP.sbm("Fire Master(old vers) off");
}
}
if(Data[1]=="water"){
if(Data[2]==null){
owater = 1;
ESP.sbm("Water Controller(old vers) on");
}
else if(Data[2]=="off"){
owater = 0;
ESP.sbm("Water Controller(old vers) off");
}
}
if(Data[1]=="tree"){
if(Data[2]==null){
otree = 1;
ESP.sbm("Nature Guardian(old vers) on");
}
else if(Data[2]=="off"){
otree = 0;
ESP.sbm("Nature Guardian(old vers) off");
}
}
if(Data[1]=="creeper"){
if(Data[2]==null){
ocreeper = 1;
ESP.sbm("I am Creeper(old vers) on");
}
else if(Data[2]=="off"){
ocreeper = 0;
ESP.sbm("I am Creeper(old vers) off");
}
}
if(Data[1]=="soil"){
if(Data[2]==null){
osoil = 1;
ESP.sbm("Earth Bander(old vers) on");
}
else if(Data[2]=="off"){
osoil = 0;
ESP.sbm("Earth Bander(old vers) off");
}
}
if(Data[1]=="summon"){
if(Data[2]==null){
osummon = 1;
ESP.sbm("The Summoner(old vers) on");
}
else if(Data[2]=="off"){
osummon = 0;
ESP.sbm("The Summoner(old vers) oft");
}
}
if(Data[1]=="light"){
if(Data[2]==null){
olight = 1;
ESP.sbm("The Luminous(old vers) on");
}
else if(Data[2]=="off"){
olight = 0;
ESP.sbm("The Luminous(old vers) off");
}
}
if(Data[1]=="dark"){
if(Data[2]==null){
odark = 1;
ESP.sbm("The Darkness(old vers) on");
}
else if(Data[2]=="off"){
odark = 0;
ESP.sbm("The Darkness(old vers) off");
}
}
if(Data[1]=="ice"){
if(Data[2]==null){
oice = 1;
ESP.sbm("The Freezer(old vers) on");
}
else if(Data[2]=="off"){
oice = 0;
ESP.sbm("The Freezer(old vers) off");
}
}
if(Data[1]=="all"){
ofire = 1;
owater = 1;
otree = 1;
ocreeper = 1;
osoil = 1;
osummon = 1;
olight = 1;
odark = 1;
oice = 1;
ESP.sbm("All Ability(old vers) on");
}
if(Data[1]=="reset"){
ofire = 0;
owater = 0;
otree = 0;
ocreeper = 0;
osoil = 0;
osummon = 0;
olight = 0;
odark = 0;
oice = 0;
ESP.sbm("All Ability(old vers) off");
}

}


//------
if(cmd=="em"&&btn==null){
ESP.addEMButton();
ESP.sbm("ESP Manager Button on");
}
if(cmd=="em off"&&btn!=null){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
if(btn!=null){
btn.dismiss();
btn = null;
}
}
}));
ESP.toast("ESP Manager Button off");
}


if(cmd=="fix pa"){
fixt = 300;
ESP.toast("능력 연습장 수복 시작");
}
if(cmd=="fix bf6"){
ESP.save("fixbf6", true);
ESP.toast("Battle Field 6 was Fixed");
}


if(cmd=="sc"){
adsc = true;
ESP.sbm("Showing Cool Time on");
}
if(cmd=="sc off"){
adsc = false;
ESP.sbm("Showing Cool Time off");
ModPE.showTipMessage("");
}

if(cmd=="bgm"){
bgmPlayer(true);
ESP.sbm("BGM on");
}
if(cmd=="bgm off"){
bgmPlayer(false);
ESP.sbm("BGM off");
}

if(cmd=="town"){
town = true;
ESP.sbm("Town Protection on");
}
if(cmd=="town off"){
town = false;
ESP.sbm("Town Protection off");
}

//eg+
if(cmd=="under on"){
underTaleActive = true;
}
else if(cmd=="under off"){
underTaleActive = false;
}



}


function deathHook(m, v){
if(v==se.avenage){
se.a4a = m;
}
if(getPlayers){
if(Player.isPlayer(m)) playerAddedHandler(m);
if(Player.isPlayer(v)) playerAddedHandler(v);
}
}


function entityAddedHook(e){
//anti lack
if(anti){
if(Entity.getEntityTypeId(e)==64){
Entity.remove(e);
}

}

//add function
if(ESP.isPlayer(e)){
playerAddedHook(e);
}

if(Entity.getEntityTypeId(e)==0&&mcpev){
new Thread({
run : function(){
Thread.sleep(150);
if(Player.isPlayer(e)) entityAddedHook(e);
}
}).start();
}

}


function playerAddedHook(p){
ep.p.push(p);
}


function chatHook(str){
if(str=="시발"||str=="씨발"||str=="썅"||str=="개새끼"||str=="슈발"){
new Thread({
run : function(){
Thread.sleep(1000);
dtm("욕하지 마, "+Player.getName(ad)+"§f.");
}
}).start();
}
if(str=="fuck"){
new Thread({
run : function(){
Thread.sleep(1000);
dtm("Do not slang, "+Player.getName(ad)+"§f.");
}
}).start();
}

if(str==" /texe"){
Entity.setPosition(ad, 116, 52, 25);
hcm("Teleported to Texeris.");
preventDefault();
}
if(str==" /nether"){
Entity.setPosition(ad, -1033, 10, 1003);
hcm("Teleported to Nether Texeris.");
preventDefault();
}
if(str==" /ender"){
Entity.setPosition(ad, -1024, 23, -1001);
hcm("Teleported to Endersterly.");
preventDefault();
}
if(str==" /time"){
Entity.setPosition(ad, 1000.5, 51, 1500.5);
hcm("Teleported to Time Zone.");
preventDefault();
}
if(str==" /past"){
Entity.setPosition(ad, 1018, 20, 1039);
hcm("Time Jumped to Past.");
preventDefault();
}
if(str==" /present"){
Entity.setPosition(ad, 116, 52, 25);
hcm("Time Jumped to Present.");
preventDefault();
}
if(str==" /future"){
Entity.setPosition(ad, 2014, 53, -1023);
hcm("Time Jumped to Future.");
preventDefault();
}
if(str==" /esi"){
Entity.setPosition(ad, -998, 45, 3007);
hcm("Teleported to the ESI Temple.");
preventDefault();
}

if(dt.l){
if(str=="안녕"||str=="안녕?"||str=="안녕하세요"||str=="안녕하세요?"){
new Thread({
run : function(){
Thread.sleep(1000);
dtm("안녕하신가, "+Player.getName(ad)+".");
}
}).start();
}
if(str=="Hello"||str=="Hello?"||str=="hello"||str=="hello?"){
new Thread({
run : function(){
Thread.sleep(1000);
dtm("Hello, "+Player.getName(ad)+".");
}
}).start();
}

}


}


function chatReceiveHook(str, s){
var user = ESP.findHuman(s);
if(str==".return"){
ESP.send(user);
ESP.sbm(s+"(이)가 명령어 .return을 사용하였습니다.");
preventDefault();
}
if(str==".give"){
giveItems(user);
ESP.sbm(s+"(이)가 명령어 .give을 사용하였습니다.");
preventDefault();
}

}


//ESP Manager
function openESPManager(){
if(espCache1==""){
var cache = ESP.read("espData");
if(cache!=""){
eval(cache+"");
espCache1 = cache+"";
}
else{
ESP.toast("추가 파일이 없습니다.");
}
}
else{
eval(espCache1);
}
}


function makeButton(txt, func){
var button = new Button(ctx);
button.setText(txt);
button.setOnClickListener(new View.OnClickListener(){
onClick: function(v){
if(typeof func=="function") func();
else eval(func+"");
}
});
return button;
}

function makeToggleButton(txt1, txt2, func1, func2, tf){
var button = new ToggleButton(ctx);
button.setTextOn(txt1);
button.setTextOff(txt2);
button.setChecked(tf);
button.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(toggle, onoff){
if(onoff) func1();
else func2();
}
}));
return button;
}

function makeExitButton(menu){
var button = new Button(ctx);
button.setText("EXIT");
button.setOnClickListener(new View.OnClickListener(){
onClick: function(v){
if(menu!=null){
menu.dismiss();
menu = null;
}
}
});
return button;
}

function makeDialog(title, layout, txt1, func1, txt2, func2){
var dialog = new AlertDialog.Builder(ctx, holoDark);
dialog.setTitle(title);
var pad = dip2px(ctx, 5);
layout.setPadding(pad, pad, pad, pad);
var scroll = new ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
if(func1==null)
dialog.setNegativeButton(txt1, null);
else
dialog.setNegativeButton(txt1, new DialogInterface.OnClickListener({
onClick: function(v){
func1();
}
}));
if(txt2!=null)
dialog.setPositiveButton(txt2, new DialogInterface.OnClickListener({
onClick: function(v){
func2();
}
}));
return dialog;
}

function makeRadioList(arr, tf){
var radios = new RadioGroup(ctx);
radios.setOrientation(1);
var radio = [];
for(var n in arr){
radio[n] = new RadioButton(ctx);
radio[n].setText(Player.getName(arr[n]));
radio[n].setId(n);
radios.addView(radio[n]);
}
if(tf){
radios.setOnCheckedChangeListener(new RadioGroup.OnCheckedChangeListener({
onCheckedChanged: function (group, checkedId){
espN = checkedId;
}
}));
}
else{
radios.setOnCheckedChangeListener(new RadioGroup.OnCheckedChangeListener({
onCheckedChanged: function (group, checkedId){
playerTarget = arr[checkedId];
}
}));
}
return radios;
}

function makeESPName(txt){
var text = new TextView(ctx);
text.setText(txt+"\n");
text.setTextSize(23);
text.setGravity(Gravity.CENTER);
return text;
}

function makeUserList(arr){
var user = new TextView(ctx);
var userNames = [];
for(var n in arr)
userNames.push(" "+Player.getName(arr[n]));
user.setText("  User :"+userNames);
user.setTextSize(18);
return user;
}

function makeScroll(layout, menu){
var pad = dip2px(ctx, 3);
layout.setPadding(pad, pad, pad, pad);
var scroll = new ScrollView(ctx);
scroll.addView(layout);
menu.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth()*1/3);
menu.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight());
return scroll;
}


function dayNight(){
if(nightCheck()){
Level.setTime(700);
ESP.toast("Time Day");
}
else{
Level.setTime(14000);
ESP.toast("Time Night");
}

}


function otherESPManager(){
if(espCache2==""){
var cache = ESP.read("etcData");
if(cache!=""){
eval(cache+"");
espCache2 = cache+"";
}
else{
ESP.toast("추가 파일이 없습니다.");
}
}
else{
eval(espCache2);
}
}


function openESPManager2(){
var cache = ESP.read("sb2Data");
if(cache!="") eval(cache+"");
else ESP.toast("추가 파일이 없습니다.");
}


function setButtonLocation(){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var dialog = new AlertDialog.Builder(ctx, holoDark);
var layout = new LinearLayout(ctx);
layout.setOrientation(1);
layout.setGravity(Gravity.CENTER);
var layout1 = new LinearLayout(ctx);
layout1.setGravity(Gravity.CENTER);
layout1.setOrientation(0);
var loc1 = new Button(ctx);
var loc2 = new Button(ctx);
var loc3 = new Button(ctx);
loc1.setText("↖");
loc2.setText("↑");
loc3.setText("↗");
loc1.setOnClickListener(new View.OnClickListener(){
onClick: function(v){
locate = 0;
ESP.toast("수정되었습니다.");
}
});
loc2.setOnClickListener(new View.OnClickListener(){
onClick: function(v){
locate = 2;
ESP.toast("수정되었습니다.");
}
});
loc3.setOnClickListener(new View.OnClickListener(){
onClick: function(v){
locate = 3;
ESP.toast("수정되었습니다.");
}
});
layout1.addView(loc1);
layout1.addView(loc2);
layout1.addView(loc3);
var layout2 = new LinearLayout(ctx);
layout2.setGravity(Gravity.CENTER);
layout2.setOrientation(0);
var loc4 = new Button(ctx);
var loc5 = new Button(ctx);
var loc6 = new Button(ctx);
loc4.setText("←");
loc5.setText("○");
loc6.setText("→");
loc4.setOnClickListener(new View.OnClickListener(){
onClick: function(v){
locate = 4;
ESP.toast("수정되었습니다.");
}
});
loc5.setOnClickListener(new View.OnClickListener(){
onClick: function(v){
locate = 5;
ESP.toast("수정되었습니다.");
}
});
loc6.setOnClickListener(new View.OnClickListener(){
onClick: function(v){
locate = 6;
ESP.toast("수정되었습니다.");
}
});
layout2.addView(loc4);
layout2.addView(loc5);
layout2.addView(loc6);
var layout3 = new LinearLayout(ctx);
layout3.setGravity(Gravity.CENTER);
layout3.setOrientation(0);
var loc7 = new Button(ctx);
var loc8 = new Button(ctx);
var loc9 = new Button(ctx);
loc7.setText("↙");
loc8.setText("↓ ");
loc9.setText("↘");
loc7.setOnClickListener(new View.OnClickListener(){
onClick: function(v){
locate = 7;
ESP.toast("수정되었습니다.");
}
});
loc8.setOnClickListener(new View.OnClickListener(){
onClick: function(v){
locate = 8;
ESP.toast("수정되었습니다.");
}
});
loc9.setOnClickListener(new View.OnClickListener(){
onClick: function(v){
locate = 9;
ESP.toast("수정되었습니다.");
}
});
layout3.addView(loc7);
layout3.addView(loc8);
layout3.addView(loc9);
layout.addView(layout1);
layout.addView(layout2);
layout.addView(layout3);
dialog.setTitle("버튼 위치 수정");
dialog.setView(layout);
dialog.setNegativeButton("터치한 곳으로 설정", new DialogInterface.OnClickListener({
onClick: function(v){
makeScreen();
ESP.save("locate", 10);
locate = 10;
ESP.toast("화면을 터치하여 주세요.");
}
}));
dialog.setPositiveButton("확인", new DialogInterface.OnClickListener({
onClick: function(v){
ESP.save("locate", locate);
if(btn!=null){
btn.dismiss();
btn = null;
}
ESP.addEMButton();
}
}));
dialog.show();
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
}));
}


var SB = {
hyperManager : function(type){
var esps = [dtj, fe, magma, kaian];
var espNames = ["Dark Tornado jr.", "Fire Expert", "Magma Controller", "Kaian Pon Kalropon"];
if(esps[type]!=null){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var menu = new PopupWindow();
var text = new TextView(ctx);
text.setText(espNames[type]+"\n");
text.setTextSize(20);
text.setGravity(Gravity.CENTER);
var user = new TextView(ctx);
user.setText("  User : "+Player.getName(esps[type]));
user.setTextSize(18);
var layout = new LinearLayout(ctx);
layout.setOrientation(1);
layout.addView(text);
layout.addView(user);
var off = makeButton("ESP off", function(){
SB.hyperOff(type);
ESP.toast(espNames[type]+" off");
});
var send = makeButton("Send ESP", function(){
ESP.send(esps[type]);
ESP.toast(espNames[type]+" was sent");
});
var kill = makeButton("Kill ESP", function(){
ESP.kill(esps[type]);
ESP.toast(espNames[type]+" was killed");
});
var heal = makeButton("Heal ESP", function(){
ESP.heal(esps[type]);
ESP.toast(espNames[type]+" was healed");
});
var call = makeButton("Call ESP", function(){
teleport(esps[type], Entity.getX(ad), Entity.getY(ad)+1, Entity.getZ(ad));
ESP.toast(espNames[type]+" was called.");
});
layout.addView(off);
layout.addView(send);
layout.addView(kill);
layout.addView(heal);
layout.addView(call);
var exit = makeExitButton(menu);
layout.addView(exit);
var scroll = makeScroll(layout, menu);
menu.setContentView(scroll);
menu.setBackgroundDrawable(new ColorDrawable(Color.BLACK));
menu.showAtLocation(ctx.getWindow().getDecorView(),Gravity.RIGHT|Gravity.TOP, 0, 0);
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
}));
}
else if(esps[type]==null){
if(type==0) ESP.toast("서버장 전용 능력입니다.");
if(type==1) ESP.toast("서버장(정확히는 제작자) 전용 능력입니다.");
var players = [];
for each(var e in Entity.getAll()){
if(ESP.isPlayer(e)) players.push(e);
}
var radios = makeRadioList(players);
var layout = new LinearLayout(ctx);
layout.setOrientation(1);
layout.addView(radios);
var dialog = makeDialog(espNames[type]+" on", layout, "취소", null, "확인", function(){
ESP.toast(espNames[type]+" on.");
SB.hyperOn(type, playerTarget);
});
dialog.show();
}
},
hyperOn : function(type, player){
if(type==0) dtj = player;
else if(type==1) fe = player;
else if(type==2) magma = player;
else if(type==3) kaian = player;
},
hyperOff : function(type){
if(type==0) dtj = null;
else if(type==1) fe = null;
else if(type==2) magma = null;
else if(type==3) kaian = null;
},
espManage : function(type){
if(espCache3==""){
var cache = ESP.read("espData_2");
if(cache!=""){
eval(cache+"");
espCache3 = cache+"";
}
else{
ESP.toast("추가 파일이 없습니다.");
}
}
else{
eval(espCache3);
}
},
hiddenAbility : function(){
if(h.rrr!=null){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var rrrmenu = new PopupWindow();
var layout = new LinearLayout(ctx);
layout.setOrientation(1);
var text = new TextView(ctx);
text.setText("Hidden Ability\n");
text.setTextSize(20);
text.setGravity(Gravity.CENTER);
var user = new TextView(ctx);
user.setText("  User : "+Player.getName(h.rrr));
user.setTextSize(18);
layout.addView(text);
layout.addView(user);
var btns = [];
var menus = ["ESP off", "Send ESP", "Kill ESP", "Heal ESP", "EXIT"];
for(var n in menus){
btns[n] = new Button(ctx);
btns[n].setText(menus[n]);
btns[n].setId(n);
btns[n].setOnClickListener(new View.OnClickListener(){
onClick: function(v){
switch(v.getId()){
case 0 : 
h.rrr = null;
ESP.toast("Hidden Ability off");
break;
case 1 : 
ESP.send(h.rrr);
ESP.toast("Hidden Ability was sent");
break;
case 2 : 
ESP.kill(h.rrr);
ESP.toast("Hidden Ability was killed");
break;
case 3 : 
ESP.heal(h.rrr);
ESP.toast("Hidden Ability was healed");
break;
case 4 : 
rrrmenu.dismiss();
rrrmenu = null;
break;
}
}
});
layout.addView(btns[n]);
}
var scroll = makeScroll(layout,rrrmenu);
rrrmenu.setContentView(scroll);
rrrmenu.setBackgroundDrawable(new ColorDrawable(Color.BLACK));
rrrmenu.showAtLocation(ctx.getWindow().getDecorView(),Gravity.RIGHT|Gravity.TOP, 0, 0);
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
}));
}
else if(h.rrr==null){
var player = null;
var players = [];
for each(var e in Entity.getAll()){
if(ESP.isPlayer(e)){
players.push(e);
}
}
var dialog = new AlertDialog.Builder(ctx, holoDark);
var layout = new LinearLayout(ctx);
layout.setOrientation(1);
var radios = new RadioGroup(ctx);
radios.setOrientation(1);
var radio = [];
for(var n=0;n<players.length;n++){
radio[n] = new RadioButton(ctx);
radio[n].setText(Player.getName(players[n]));
radio[n].setId(n);
radios.addView(radio[n]);
}
radios.setOnCheckedChangeListener(new RadioGroup.OnCheckedChangeListener({
onCheckedChanged: function (group, checkedId){
player = players[checkedId];
}
}));
layout.addView(radios);
var pad = dip2px(ctx, 5);
layout.setPadding(pad, pad, pad, pad);
var scroll = new ScrollView(ctx);
scroll.addView(layout);
dialog.setTitle("Hidden Ability on");
dialog.setView(scroll);
dialog.setNegativeButton("취소", null);
dialog.setPositiveButton("확인", new DialogInterface.OnClickListener({
onClick: function(v){
ESP.toast("Hidden Ability on.");
h.rrr = player;
}
}));
dialog.show();
}
},
espOnoff : function(type, tf){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
if(tf){
var players = [];
for each(var e in Entity.getAll()){
if(ESP.isPlayer(e)) players.push(e);
}
var radios = makeRadioList(players);
var layout = new LinearLayout(ctx);
layout.setOrientation(1);
layout.addView(radios);
var dialog = makeDialog(ra.n[type]+" on", layout, "취소", null, "확인", function(){
if(eval(espCodes[type])==null){
SB.espOn(type);
}
else{
eval(espCode[type]).push(playerTarget);
}
ESP.toast(ra.n[type]+" on.");
});
}
else{
var radios = makeRadioList(eval(espCode[type]), true);
var layout = new LinearLayout(ctx);
layout.setOrientation(1);
layout.addView(radios);
var dialog = makeDialog(ra.n[type]+" off", layout, "취소", null, "확인", function(){
try{
eval(espCode[type]).splice(espN, 1);
SB.removeUserData(type, espN);
ESP.toast(ra.n[type]+" off.");
}
catch(e){
dtm(e);
}
});
}
dialog.show();
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
}));
},
espOn : function(n){
if(n==0) fire[0] = playerTarget;
if(n==1) water[0] = playerTarget;
if(n==2) tree[0] = playerTarget;
if(n==3) creeper[0] = playerTarget;
if(n==4) soil[0] = playerTarget;
if(n==5) summon[0] = playerTarget;
if(n==6) light[0] = playerTarget;
if(n==7) dark[0] = playerTarget;
if(n==8) ice[0] = playerTarget;
if(n==9) sand[0] = playerTarget;
if(n==10) blood[0] = playerTarget;
if(n==11) air[0] = playerTarget;
if(n==12) elsa[0] = playerTarget;
if(n==13) titan[0] = playerTarget;
if(n==14) thunder[0] = playerTarget;
if(n==15) bind[0] = playerTarget;
if(n==16) meca[0] = playerTarget;
if(n==17) tnt[0] = playerTarget;
if(n==18) trap[0] = playerTarget;
if(n==19) heal[0] = playerTarget;
if(n==20) nether[0] = playerTarget;
if(n==21) cloud[0] = playerTarget;
if(n==22) assassin[0] = playerTarget;
if(n==23) arrow[0] = playerTarget;
if(n==24) mage[0] = playerTarget;
if(n==25) defense[0] = playerTarget;
if(n==26) poison[0] = playerTarget;
if(n==27) melt[0] = playerTarget;
if(n==28) hfreeze[0] = playerTarget;
if(n==29) builder[0] = playerTarget;
if(n==30) soldier[0] = playerTarget;
if(n==31) assault[0] = playerTarget;
if(n==32) burst[0] = playerTarget;
if(n==33) warrior[0] = playerTarget;
if(n==34) ore[0] = playerTarget;
if(n==35) rich[0] = playerTarget;
if(n==36) tp[0] = playerTarget;
if(n==37) space[0] = playerTarget;
if(n==38) sattack[0] = playerTarget;
if(n==39) force[0] = playerTarget;
if(n==40) rein[0] = playerTarget;
if(n==41) magnet[0] = playerTarget;
if(n==42) steve[0] = playerTarget;
if(n==43) hero[0] = playerTarget;
if(n==44) hermit[0] = playerTarget;
if(n==45) clay[0] = playerTarget;
if(n==46) kirito[0] = playerTarget;
if(n==47) jungle[0] = playerTarget;
if(n==48) kanade[0] = playerTarget;
if(n==49) time[0] = playerTarget;
if(n==50) snipe[0] = playerTarget;
if(n==51) zombie[0] = playerTarget;
if(n==52) necro[0] = playerTarget;
if(n==53) asuna[0] = playerTarget;
if(n==54) holy[0] = playerTarget;
if(n==55) solar[0] = playerTarget;
if(n==56) lunar[0] = playerTarget;
if(n==57) has[0] = playerTarget;
if(n==58) random[0] = playerTarget;
if(n==59) zwei[0] = playerTarget;
if(n==60) deco[0] = playerTarget;
if(n==61) hsum[0] = playerTarget;
if(n==62) climate[0] = playerTarget;
if(n==63) raid[0] = playerTarget;
if(n==64) wind[0] = playerTarget;
if(n==65) energy[0] = playerTarget;
if(n==66) geno[0] = playerTarget;
if(n==67) server[0] = playerTarget;
if(n==68) out[0] = playerTarget;
if(n==69) rgun[0] = playerTarget;
if(n==70) copy[0] = playerTarget;
if(n==71) dragon[0] = playerTarget;
if(n==72) hawk[0] = playerTarget;
if(n==73) solid[0] = playerTarget;
if(n==74) gravity[0] = playerTarget;
if(n==75) hass[0] = playerTarget;
if(n==76) sikill[0] = playerTarget;
if(n==77) black[0] = playerTarget;
if(n==78) slash[0] = playerTarget;
if(n==79) night[0] = playerTarget;
if(n==80) gem[0] = playerTarget;
if(n==81) dra[0] = playerTarget;
if(n==82) mush[0] = playerTarget;
if(n==83) ender[0] = playerTarget;
if(n==84) taiga[0] = playerTarget;
if(n==85) ruin[0] = playerTarget;
if(n==86) swamp[0] = playerTarget;
if(n==87) asum[0] = playerTarget;
if(n==88) amage[0] = playerTarget;
if(n==89) puella[0] = playerTarget;
if(n==90) hbuild[0] = playerTarget;
if(n==91) scalar[0] = playerTarget;
if(n==92) vector[0] = playerTarget;
if(n==93) tensor[0] = playerTarget;
if(n==94) ameca[0] = playerTarget;
if(n==95) seal[0] = playerTarget;
if(n==96) angel[0] = playerTarget;
if(n==97) white[0] = playerTarget;
if(n==98) mental[0] = playerTarget;
if(n==99) world[0] = playerTarget;
},
espOff : function(n){
if(n==0) fire = [];
if(n==1) water = [];
if(n==2) tree = [];
if(n==3) creeper = [];
if(n==4) soil = [];
if(n==5) summon = [];
if(n==6) light = [];
if(n==7) dark = [];
if(n==8) ice = [];
if(n==9) sand = [];
if(n==10) blood = [];
if(n==11) air = [];
if(n==12) elsa = [];
if(n==13) titan = [];
if(n==14) thunder = [];
if(n==15) bind = [];
if(n==16) meca = [];
if(n==17) tnt = [];
if(n==18) trap = [];
if(n==19) heal = [];
if(n==20) nether = [];
if(n==21) cloud = [];
if(n==22) assassin = [];
if(n==23) arrow = [];
if(n==24) mage = [];
if(n==25) defense = [];
if(n==26) poison = [];
if(n==27) melt = [];
if(n==28) hfreeze = [];
if(n==29) builder = [];
if(n==30) soldier = [];
if(n==31) assault = [];
if(n==32) burst = [];
if(n==33) warrior = [];
if(n==34) ore = [];
if(n==35) rich = [];
if(n==36) tp = [];
if(n==37) space = [];
if(n==38) sattack = [];
if(n==39) force = [];
if(n==40) rein = [];
if(n==41) magnet = [];
if(n==42) steve = [];
if(n==43) hero = [];
if(n==44) hermit = [];
if(n==45) clay = [];
if(n==46) kirito = [];
if(n==47) jungle = [];
if(n==48) kanade = [];
if(n==49) time = [];
if(n==50) snipe = [];
if(n==51) zombie = [];
if(n==52) necro = [];
if(n==53) asuna = [];
if(n==54) holy = [];
if(n==55) solar = [];
if(n==56) lunar = [];
if(n==57) has = [];
if(n==58) random = [];
if(n==59) zwei = [];
if(n==60) deco = [];
if(n==61) hsum = [];
if(n==62) climate = [];
if(n==63) raid = [];
if(n==64) wind = [];
if(n==65) energy = [];
if(n==66) geno = [];
if(n==67) server = [];
if(n==68) out = [];
if(n==69) rgun = [];
if(n==70) copy = [];
if(n==71) dragon = [];
if(n==72) hawk = [];
if(n==73) solid = [];
if(n==74) gravity = [];
if(n==75) hass = [];
if(n==76) sikill = [];
if(n==77) black = [];
if(n==78) slash = [];
if(n==79) night = [];
if(n==80) gem = [];
if(n==81) dra = [];
if(n==82) mush = [];
if(n==83) ender = [];
if(n==84) taiga = [];
if(n==85) ruin = [];
if(n==86) swamp = [];
if(n==87) asum = [];
if(n==88) amage = [];
if(n==89) puella = [];
if(n==90) hbuild = [];
if(n==91) scalar = [];
if(n==92) vector = [];
if(n==93) tensor = [];
if(n==94) ameca = [];
if(n==95) seal = [];
if(n==96) angel = [];
if(n==97) white = [];
if(n==98) mental = [];
if(n==99) world = [];
},
removeUserData : function(type, n){
if(type==0){
if(n==-1){
f1 = [];
f2 = [];
f2x = [];
f2y = [];
f2z = [];
f3 = [];
f4 = [];
f1a = [];
f2a = [];
f3a = [];
f4a = [];
f4b = [];
f4c = [];
f4d = [];
fx = [];
fy = [];
fz = [];
f0 = [];
}
else{
f1.splice(n, 1);
f2.splice(n, 1);
f2x.splice(n, 1);
f2y.splice(n, 1);
f2z.splice(n, 1);
f3.splice(n, 1);
f4.splice(n, 1);
f1a.splice(n, 1);
f2a.splice(n, 1);
f3a.splice(n, 1);
f4a.splice(n, 1);
f4b.splice(n, 1);
f4c.splice(n, 1);
f4d.splice(n, 1);
fx.splice(n, 1);
fy.splice(n, 1);
fz.splice(n, 1);
f0.splice(n, 1);
}
}
else if(type==1){
if(n==-1){
w1 = [];
w2 = [];
w3 = [];
w4 = [];
w1a = [];
w2a = [];
w3a = [];
w4a = [];
w1b = [];
w1c = [];
wx = [];
wy = [];
wz = [];
w4b = [];
w4c = [];
wxa = [];
wya = [];
wza = [];
w3b = [];
w3c = [];
wxb = [];
wyb = [];
wzb = [];
w2x = [];
w2y = [];
w2z = [];
}
else{
w1.splice(n, 1);
w2.splice(n, 1);
w3.splice(n, 1);
w4.splice(n, 1);
w1a.splice(n, 1);
w2a.splice(n, 1);
w3a.splice(n, 1);
w4a.splice(n, 1);
w1b.splice(n, 1);
w1c.splice(n, 1);
wx.splice(n, 1);
wy.splice(n, 1);
wz.splice(n, 1);
w4b.splice(n, 1);
w4c.splice(n, 1);
wxa.splice(n, 1);
wya.splice(n, 1);
wza.splice(n, 1);
w3b.splice(n, 1);
w3c.splice(n, 1);
wxb.splice(n, 1);
wyb.splice(n, 1);
wzb.splice(n, 1);
w2x.splice(n, 1);
w2y.splice(n, 1);
w2z.splice(n, 1);
}
}
else if(type==2){
if(n==-1){
t1 = [];
t2 = [];
t3 = [];
t4 = [];
t1a = [];
t2a = [];
t3a = [];
t3b = [];
t4a = [];
t4b = [];
tx = [];
ty = [];
tz = [];
}
else{
t1.splice(n, 1);
t2.splice(n, 1);
t3.splice(n, 1);
t4.splice(n, 1);
t1a.splice(n, 1);
t2a.splice(n, 1);
t3a.splice(n, 1);
t3b.splice(n, 1);
t4a.splice(n, 1);
t4b.splice(n, 1);
tx.splice(n, 1);
ty.splice(n, 1);
tz.splice(n, 1);
}
}
else if(type==3){
if(n==-1){
c1 = [];
c2 = [];
c3 = [];
c4 = [];
c1a = [];
c2a = [];
c2x = [];
c2y = [];
c2z = [];
c3a = [];
c4a = [];
c1b = [];
c1c = [];
c1d = [];
cx = [];
cy = [];
cz = [];
c1e = [];
c1f = [];
cx1 = [];
cy1 = [];
cz1 = [];
cx2 = [];
cy2 = [];
cz2 = [];
cx3 = [];
cy3 = [];
cz3 = [];
}
else{
c1.splice(n, 1);
c2.splice(n, 1);
c3.splice(n, 1);
c4.splice(n, 1);
c1a.splice(n, 1);
c2a.splice(n, 1);
c2x.splice(n, 1);
c2y.splice(n, 1);
c2z.splice(n, 1);
c3a.splice(n, 1);
c4a.splice(n, 1);
c1b.splice(n, 1);
c1c.splice(n, 1);
c1d.splice(n, 1);
cx.splice(n, 1);
cy.splice(n, 1);
cz.splice(n, 1);
c1e.splice(n, 1);
c1f.splice(n, 1);
cx1.splice(n, 1);
cy1.splice(n, 1);
cz1.splice(n, 1);
cx2.splice(n, 1);
cy2.splice(n, 1);
cz2.splice(n, 1);
cx3.splice(n, 1);
cy3.splice(n, 1);
cz3.splice(n, 1);
}
}
else if(type==4){
if(n==-1){
s1 = [];
s2 = [];
s3 = [];
s4 = [];
s1a = [];
s2a = [];
s2x = [];
s2y = [];
s2z = [];
s3a = [];
s4a = [];
sx = [];
sy = [];
sz = [];
}
else{
s1.splice(n, 1);
s2.splice(n, 1);
s3.splice(n, 1);
s4.splice(n, 1);
s1a.splice(n, 1);
s2a.splice(n, 1);
s2x.splice(n, 1);
s2y.splice(n, 1);
s2z.splice(n, 1);
s3a.splice(n, 1);
s4a.splice(n, 1);
sx.splice(n, 1);
sy.splice(n, 1);
sz.splice(n, 1);
}
}
else if(type==5){
if(n==-1){
ss1 = [];
ss2 = [];
ss3 = [];
ss4 = [];
ss1a = [];
ss2a = [];
ss3a = [];
ss4a = [];
}
else{
ss1.splice(n, 1);
ss2.splice(n, 1);
ss3.splice(n, 1);
ss4.splice(n, 1);
ss1a.splice(n, 1);
ss2a.splice(n, 1);
ss3a.splice(n, 1);
ss4a.splice(n, 1);
}
}
else if(type==6){
if(n==-1){
l1 = [];
l2 = [];
l3 = [];
l4 = [];
l1a = [];
l2a = [];
l3a = [];
l4a = [];
l3b = [];
l3c = [];
lx = [];
ly = [];
lz = [];
lxa = [];
lya = [];
lza = [];
}
else{
l1.splice(n, 1);
l2.splice(n, 1);
l3.splice(n, 1);
l4.splice(n, 1);
l1a.splice(n, 1);
l2a.splice(n, 1);
l3a.splice(n, 1);
l4a.splice(n, 1);
l3b.splice(n, 1);
l3c.splice(n, 1);
lx.splice(n, 1);
ly.splice(n, 1);
lz.splice(n, 1);
lxa.splice(n, 1);
lya.splice(n, 1);
lza.splice(n, 1);
}
}
else if(type==7){
if(n==-1){
d1 = [];
d2 = [];
d3 = [];
d4 = [];
d1a = [];
d2a = [];
d3a = [];
d4a = [];
dx = [];
dy = [];
dz = [];
d3b = [];
d3c = [];
dxa = [];
dya = [];
dza = [];
d1b = [];
d1c = [];
dxb = [];
dyb = [];
dzb = [];
}
else{
d1.splice(n, 1);
d2.splice(n, 1);
d3.splice(n, 1);
d4.splice(n, 1);
d1a.splice(n, 1);
d2a.splice(n, 1);
d3a.splice(n, 1);
d4a.splice(n, 1);
dx.splice(n, 1);
dy.splice(n, 1);
dz.splice(n, 1);
d3b.splice(n, 1);
d3c.splice(n, 1);
dxa.splice(n, 1);
dya.splice(n, 1);
dza.splice(n, 1);
d1b.splice(n, 1);
d1c.splice(n, 1);
dxb.splice(n, 1);
dyb.splice(n, 1);
dzb.splice(n, 1);
}
}
else if(type==8){
if(n==-1){
i1 = [];
i2 = [];
i3 = [];
i4 = [];
i1a = [];
i2a = [];
i3a = [];
i4a = [];
i1b = [];
i1c = [];
ix = [];
iy = [];
iz = [];
i3b = [];
i3c = [];
ixa = [];
iya = [];
iza = [];
ixb = [];
izb = [];
ixc = [];
iyc = [];
izc = [];
}
else{
i1.splice(n, 1);
i2.splice(n, 1);
i3.splice(n, 1);
i4.splice(n, 1);
i1a.splice(n, 1);
i2a.splice(n, 1);
i3a.splice(n, 1);
i4a.splice(n, 1);
i1b.splice(n, 1);
i1c.splice(n, 1);
ix.splice(n, 1);
iy.splice(n, 1);
iz.splice(n, 1);
i3b.splice(n, 1);
i3c.splice(n, 1);
ixa.splice(n, 1);
iya.splice(n, 1);
iza.splice(n, 1);
ixb.splice(n, 1);
izb.splice(n, 1);
ixc.splice(n, 1);
iyc.splice(n, 1);
izc.splice(n, 1);
}
}
else if(type==9){
if(n==-1){
m1 = [];
m2 = [];
m3 = [];
m4 = [];
m1a = [];
m2a = [];
m3a = [];
m3x  = [];
m3y = [];
m3z = [];
m4a = [];
m4x = [];
m4y = [];
m4z = [];
}
else{
m1.splice(n, 1);
m2.splice(n, 1);
m3.splice(n, 1);
m4.splice(n, 1);
m1a.splice(n, 1);
m2a.splice(n, 1);
m3a.splice(n, 1);
m3x .splice(n, 1);
m3y.splice(n, 1);
m3z.splice(n, 1);
m4a.splice(n, 1);
m4x.splice(n, 1);
m4y.splice(n, 1);
m4z.splice(n, 1);
}
}
else if(type==10){
if(n==-1){
b1 = [];
b2 = [];
b3 = [];
b4 = [];
b1a = [];
b2a = [];
b3a = [];
b4a = [];
b4b = [];
}
else{
b1.splice(n, 1);
b2.splice(n, 1);
b3.splice(n, 1);
b4.splice(n, 1);
b1a.splice(n, 1);
b2a.splice(n, 1);
b3a.splice(n, 1);
b4a.splice(n, 1);
b4b.splice(n, 1);
}
}
else if(type==11){
if(n==-1){
a1 = [];
a2 = [];
a3 = [];
a4 = [];
a1a = [];
a2a = [];
a2b = [];
a2x = [];
a2y = [];
a2z = [];
a3a = [];
a4a = [];
}
else{
a1.splice(n, 1);
a2.splice(n, 1);
a3.splice(n, 1);
a4.splice(n, 1);
a1a.splice(n, 1);
a2a.splice(n, 1);
a2b.splice(n, 1);
a2x.splice(n, 1);
a2y.splice(n, 1);
a2z.splice(n, 1);
a3a.splice(n, 1);
a4a.splice(n, 1);
}
}
else if(type==12){
if(n==-1){
e1 = [];
e2 = [];
e3 = [];
e4 = [];
e1a = [];
e2a = [];
e3a = [];
e3b = [];
e3c = [];
ex = [];
ey = [];
ez = [];
e4a = [];
ex4 = [];
ey4 = [];
ez4 = [];
}
else{
e1.splice(n, 1);
e2.splice(n, 1);
e3.splice(n, 1);
e4.splice(n, 1);
e1a.splice(n, 1);
e2a.splice(n, 1);
e3a.splice(n, 1);
e3b.splice(n, 1);
e3c.splice(n, 1);
ex.splice(n, 1);
ey.splice(n, 1);
ez.splice(n, 1);
e4a.splice(n, 1);
ex4.splice(n, 1);
ey4.splice(n, 1);
ez4.splice(n, 1);
}
}
else if(type==13){
if(n==-1){
th1 = [];
th2 = [];
th3 = [];
th4 = [];
th1a = [];
th1c = [];
th2a = [];
th3a = [];
th3b = [];
th4a = [];
thx = [];
thy = [];
thz = [];
thxa = [];
thya = [];
thza = [];
thxb = [];
thyb = [];
thzb = [];
}
else{
th1.splice(n, 1);
th2.splice(n, 1);
th3.splice(n, 1);
th4.splice(n, 1);
th1a.splice(n, 1);
th1c.splice(n, 1);
th2a.splice(n, 1);
th3a.splice(n, 1);
th3b.splice(n, 1);
th4a.splice(n, 1);
thx.splice(n, 1);
thy.splice(n, 1);
thz.splice(n, 1);
thxa.splice(n, 1);
thya.splice(n, 1);
thza.splice(n, 1);
thxb.splice(n, 1);
thyb.splice(n, 1);
thzb.splice(n, 1);
}
}
else if(type==14){
if(n==-1){
tt1 = [];
tt2 = [];
tt3 = [];
tt4 = [];
tt1a = [];
tt2a = [];
tt3a = [];
tt4a = [];
tt4b = [];
tt4c = [];
ttx = [];
tty = [];
ttz = [];
tt2b = [];
ttxa = [];
ttya = [];
ttza = [];
ttxb = [];
ttyb = [];
ttzb = [];
}
else{
tt1.splice(n, 1);
tt2.splice(n, 1);
tt3.splice(n, 1);
tt4.splice(n, 1);
tt1a.splice(n, 1);
tt2a.splice(n, 1);
tt3a.splice(n, 1);
tt4a.splice(n, 1);
tt4b.splice(n, 1);
tt4c.splice(n, 1);
ttx.splice(n, 1);
tty.splice(n, 1);
ttz.splice(n, 1);
tt2b.splice(n, 1);
ttxa.splice(n, 1);
ttya.splice(n, 1);
ttza.splice(n, 1);
ttxb.splice(n, 1);
ttyb.splice(n, 1);
ttzb.splice(n, 1);
}
}
else if(type==15){
if(n==-1){
bb1 = [];
bb2 = [];
bb3 = [];
bb4 = [];
bb1a = [];
bb2a = [];
bb3a = [];
bb4a = [];
bb4b = [];
bb4c = [];
bbx = [];
bby = [];
bbz = [];
}
else{
bb1.splice(n, 1);
bb2.splice(n, 1);
bb3.splice(n, 1);
bb4.splice(n, 1);
bb1a.splice(n, 1);
bb2a.splice(n, 1);
bb3a.splice(n, 1);
bb4a.splice(n, 1);
bb4b.splice(n, 1);
bb4c.splice(n, 1);
bbx.splice(n, 1);
bby.splice(n, 1);
bbz.splice(n, 1);
}
}
else if(type==16){
if(n==-1){
mm1 = [];
mm2 = [];
mm3 = [];
mm4 = [];
mm1a = [];
mmx1 = [];
mmy1 = [];
mmz1 = [];
mmx2a = [];
mmy2a = [];
mmz2a = [];
mm2a = [];
mm3a = [];
mm3b = [];
mmx = [];
mmy = [];
mmz = [];
mmx2 = [];
mmy2 = [];
mmz2 = [];
mm4a = [];
mmx4 = [];
mmy4 = [];
mmz4 = [];
}
else{
mm1.splice(n, 1);
mm2.splice(n, 1);
mm3.splice(n, 1);
mm4.splice(n, 1);
mm1a.splice(n, 1);
mmx1.splice(n, 1);
mmy1.splice(n, 1);
mmz1.splice(n, 1);
mmx2a.splice(n, 1);
mmy2a.splice(n, 1);
mmz2a.splice(n, 1);
mm2a.splice(n, 1);
mm3a.splice(n, 1);
mm3b.splice(n, 1);
mmx.splice(n, 1);
mmy.splice(n, 1);
mmz.splice(n, 1);
mmx2.splice(n, 1);
mmy2.splice(n, 1);
mmz2.splice(n, 1);
mm4a.splice(n, 1);
mmx4.splice(n, 1);
mmy4.splice(n, 1);
mmz4.splice(n, 1);
}
}
else if(type==17){
if(n==-1){
tn1 = [];
tn2 = [];
tn3 = [];
tn4 = [];
tn1a = [];
tn1x = [];
tn1y = [];
tn1z = [];
tn2a = [];
tnx = [];
tny = [];
tnz = [];
tn3a = [];
tnx3 = [];
tny3 = [];
tnz3 = [];
tn4a = [];
tnx2 = [];
tny2 = [];
tnz2 = [];
}
else{
tn1.splice(n, 1);
tn2.splice(n, 1);
tn3.splice(n, 1);
tn4.splice(n, 1);
tn1a.splice(n, 1);
tn1x.splice(n, 1);
tn1y.splice(n, 1);
tn1z.splice(n, 1);
tn2a.splice(n, 1);
tnx.splice(n, 1);
tny.splice(n, 1);
tnz.splice(n, 1);
tn3a.splice(n, 1);
tnx3.splice(n, 1);
tny3.splice(n, 1);
tnz3.splice(n, 1);
tn4a.splice(n, 1);
tnx2.splice(n, 1);
tny2.splice(n, 1);
tnz2.splice(n, 1);
}
}
else if(type==18){
if(n==-1){
tr1 = [];
tr2 = [];
tr3 = [];
tr4 = [];
tr1a = [];
tr1b = [];
trx1 = [];
try1 = [];
trz1 = [];
tr2a = [];
tr2b = [];
trx2 = [];
try2 = [];
trz2 = [];
tr3a = [];
tr3b = [];
trx3 = [];
try3 = [];
trz3 = [];
tr4a = [];
tr4b = [];
trx4 = [];
try4 = [];
trz4 = [];
}
else{
tr1.splice(n, 1);
tr2.splice(n, 1);
tr3.splice(n, 1);
tr4.splice(n, 1);
tr1a.splice(n, 1);
tr1b.splice(n, 1);
trx1.splice(n, 1);
try1.splice(n, 1);
trz1.splice(n, 1);
tr2a.splice(n, 1);
tr2b.splice(n, 1);
trx2.splice(n, 1);
try2.splice(n, 1);
trz2.splice(n, 1);
tr3a.splice(n, 1);
tr3b.splice(n, 1);
trx3.splice(n, 1);
try3.splice(n, 1);
trz3.splice(n, 1);
tr4a.splice(n, 1);
tr4b.splice(n, 1);
trx4.splice(n, 1);
try4.splice(n, 1);
trz4.splice(n, 1);
}
}
else if(type==19){
if(n==-1){
h1 = [];
h2 = [];
h3 = [];
h4 = [];
h1a = [];
h2a = [];
h3a = [];
h4a = [];
h4b = [];
}
else{
h1.splice(n, 1);
h2.splice(n, 1);
h3.splice(n, 1);
h4.splice(n, 1);
h1a.splice(n, 1);
h2a.splice(n, 1);
h3a.splice(n, 1);
h4a.splice(n, 1);
h4b.splice(n, 1);
}
}
else if(type==20){
if(n==-1){
n1 = [];
n2 = [];
n3 = [];
n4 = [];
n1a = [];
n2a = [];
n2x = [];
n2y = [];
n2z = [];
n3a = [];
n4a = [];
nx = [];
ny = [];
nz = [];
}
else{
n1.splice(n, 1);
n2.splice(n, 1);
n3.splice(n, 1);
n4.splice(n, 1);
n1a.splice(n, 1);
n2a.splice(n, 1);
n2x.splice(n, 1);
n2y.splice(n, 1);
n2z.splice(n, 1);
n3a.splice(n, 1);
n4a.splice(n, 1);
nx.splice(n, 1);
ny.splice(n, 1);
nz.splice(n, 1);
}
}
else if(type==21){
if(n==-1){
cc1 = [];
cc2 = [];
cc3 = [];
cc4 = [];
cc1a = [];
cc2a = [];
cc2b = [];
cc3a = [];
cc3b = [];
cc3c = [];
cc3d = [];
cc4a = [];
ccx = [];
ccy = [];
ccz = [];
ccx1 = [];
ccy1 = [];
ccz1 = [];
ccx2 = [];
ccy2 = [];
ccz2 = [];
mmxc = [];
mmyc = [];
mmzc = [];
}
else{
cc1.splice(n, 1);
cc2.splice(n, 1);
cc3.splice(n, 1);
cc4.splice(n, 1);
cc1a.splice(n, 1);
cc2a.splice(n, 1);
cc2b.splice(n, 1);
cc3a.splice(n, 1);
cc3b.splice(n, 1);
cc3c.splice(n, 1);
cc3d.splice(n, 1);
cc4a.splice(n, 1);
ccx.splice(n, 1);
ccy.splice(n, 1);
ccz.splice(n, 1);
ccx1.splice(n, 1);
ccy1.splice(n, 1);
ccz1.splice(n, 1);
ccx2.splice(n, 1);
ccy2.splice(n, 1);
ccz2.splice(n, 1);
mmxc.splice(n, 1);
mmyc.splice(n, 1);
mmzc.splice(n, 1);
}
}
else if(type==22){
if(n==-1){
as1 = [];
as2 = [];
as3 = [];
as4 = [];
as1a = [];
as2a = [];
as3a = [];
as4a = [];
}
else{
as1.splice(n, 1);
as2.splice(n, 1);
as3.splice(n, 1);
as4.splice(n, 1);
as1a.splice(n, 1);
as2a.splice(n, 1);
as3a.splice(n, 1);
as4a.splice(n, 1);
}
}
else if(type==23){
if(n==-1){
ar1 = [];
ar2 = [];
ar3 = [];
ar4 = [];
ar1a = [];
ar1x = [];
ar1y = [];
ar1z = [];
ar2a = [];
arx2 = [];
ary2 = [];
arz2 = [];
ar3a = [];
ar4a = [];
arx = [];
ary = [];
arz = [];
}
else{
ar1.splice(n, 1);
ar2.splice(n, 1);
ar3.splice(n, 1);
ar4.splice(n, 1);
ar1a.splice(n, 1);
ar1x.splice(n, 1);
ar1y.splice(n, 1);
ar1z.splice(n, 1);
ar2a.splice(n, 1);
arx2.splice(n, 1);
ary2.splice(n, 1);
arz2.splice(n, 1);
ar3a.splice(n, 1);
ar4a.splice(n, 1);
arx.splice(n, 1);
ary.splice(n, 1);
arz.splice(n, 1);
}
}
else if(type==24){
if(n==-1){
ma1 = [];
ma2 = [];
ma3 = [];
ma4 = [];
ma1a = [];
ma2a = [];
ma2b = [];
max2 = [];
may2 = [];
maz2 = [];
ma3a = [];
ma4a = [];
max = [];
may = [];
maz = [];
}
else{
ma1.splice(n, 1);
ma2.splice(n, 1);
ma3.splice(n, 1);
ma4.splice(n, 1);
ma1a.splice(n, 1);
ma2a.splice(n, 1);
ma2b.splice(n, 1);
max2.splice(n, 1);
may2.splice(n, 1);
maz2.splice(n, 1);
ma3a.splice(n, 1);
ma4a.splice(n, 1);
max.splice(n, 1);
may.splice(n, 1);
maz.splice(n, 1);
}
}
else if(type==25){
if(n==-1){
de1 = [];
de2 = [];
de3 = [];
de4 = [];
de1a = [];
de2a = [];
de3a = [];
de3b = [];
dex3 = [];
dey3 = [];
dez3 = [];
de4a = [];
de4b = [];
dex = [];
dey = [];
dez = [];
}
else{
de1.splice(n, 1);
de2.splice(n, 1);
de3.splice(n, 1);
de4.splice(n, 1);
de1a.splice(n, 1);
de2a.splice(n, 1);
de3a.splice(n, 1);
de3b.splice(n, 1);
dex3.splice(n, 1);
dey3.splice(n, 1);
dez3.splice(n, 1);
de4a.splice(n, 1);
de4b.splice(n, 1);
dex.splice(n, 1);
dey.splice(n, 1);
dez.splice(n, 1);
}
}
else if(type==26){
if(n==-1){
p1 = [];
p2 = [];
p3 = [];
p4 = [];
p1a = [];
p1b = [];
p2a = [];
p2xa = [];
p2ya = [];
p2za = [];
p3a = [];
p3b = [];
p4a = [];
p4x = [];
p4y = [];
p4z = [];
}
else{
p1.splice(n, 1);
p2.splice(n, 1);
p3.splice(n, 1);
p4.splice(n, 1);
p1a.splice(n, 1);
p1b.splice(n, 1);
p2a.splice(n, 1);
p2xa.splice(n, 1);
p2ya.splice(n, 1);
p2za.splice(n, 1);
p3a.splice(n, 1);
p3b.splice(n, 1);
p4a.splice(n, 1);
p4x.splice(n, 1);
p4y.splice(n, 1);
p4z.splice(n, 1);
}
}
else if(type==27){
if(n==-1){
me1 = [];
me2 = [];
me3 = [];
me4 = [];
me1a = [];
me1x = [];
me1y = [];
me1z = [];
me2a = [];
me2x = [];
me2y = [];
me2z = [];
mexa = [];
meza = [];
me3a = [];
me4a = [];
mex = [];
mey = [];
mez = [];
}
else{
me1.splice(n, 1);
me2.splice(n, 1);
me3.splice(n, 1);
me4.splice(n, 1);
me1a.splice(n, 1);
me1x.splice(n, 1);
me1y.splice(n, 1);
me1z.splice(n, 1);
me2a.splice(n, 1);
me2x.splice(n, 1);
me2y.splice(n, 1);
me2z.splice(n, 1);
mexa.splice(n, 1);
meza.splice(n, 1);
me3a.splice(n, 1);
me4a.splice(n, 1);
mex.splice(n, 1);
mey.splice(n, 1);
mez.splice(n, 1);
}
}
else if(type==28){
if(n==-1){
hf1 = [];
hf2 = [];
hf3 = [];
hf4 = [];
hf1a = [];
hf1x = [];
hf1y = [];
hf1z = [];
hf2a = [];
hf2x = [];
hf2y = [];
hf2z = [];
hf3a = [];
hf3b = [];
hf3c = [];
hf3x = [];
hf3y = [];
hf3z = [];
hf4a = [];
hfx = [];
hfy = [];
hfz = [];
}
else{
hf1.splice(n, 1);
hf2.splice(n, 1);
hf3.splice(n, 1);
hf4.splice(n, 1);
hf1a.splice(n, 1);
hf1x.splice(n, 1);
hf1y.splice(n, 1);
hf1z.splice(n, 1);
hf2a.splice(n, 1);
hf2x.splice(n, 1);
hf2y.splice(n, 1);
hf2z.splice(n, 1);
hf3a.splice(n, 1);
hf3b.splice(n, 1);
hf3c.splice(n, 1);
hf3x.splice(n, 1);
hf3y.splice(n, 1);
hf3z.splice(n, 1);
hf4a.splice(n, 1);
hfx.splice(n, 1);
hfy.splice(n, 1);
hfz.splice(n, 1);
}
}
else if(type==29){
if(n==-1){
bu1 = [];
bu2 = [];
bu3 = [];
bu4 = [];
bu1a = [];
bu2a = [];
bu2b = [];
bu2x = [];
bu2y = [];
bu2z = [];
bu3a = [];
bu3b = [];
bu3x = [];
bu3y = [];
bu3z = [];
bu4a = [];
bu4b = [];
bux = [];
buy = [];
buz = [];
}
else{
bu1.splice(n, 1);
bu2.splice(n, 1);
bu3.splice(n, 1);
bu4.splice(n, 1);
bu1a.splice(n, 1);
bu2a.splice(n, 1);
bu2b.splice(n, 1);
bu2x.splice(n, 1);
bu2y.splice(n, 1);
bu2z.splice(n, 1);
bu3a.splice(n, 1);
bu3b.splice(n, 1);
bu3x.splice(n, 1);
bu3y.splice(n, 1);
bu3z.splice(n, 1);
bu4a.splice(n, 1);
bu4b.splice(n, 1);
bux.splice(n, 1);
buy.splice(n, 1);
buz.splice(n, 1);
}
}
else if(type==30){
if(n==-1){
so1 = [];
so2 = [];
so3 = [];
so4 = [];
so1a = [];
so2a = [];
so2b = [];
so2x = [];
so2y = [];
so2z = [];
so3a = [];
so4a = [];
so4b = [];
so4c = [];
sox = [];
soy = [];
soz = [];
}
else{
so1.splice(n, 1);
so2.splice(n, 1);
so3.splice(n, 1);
so4.splice(n, 1);
so1a.splice(n, 1);
so2a.splice(n, 1);
so2b.splice(n, 1);
so2x.splice(n, 1);
so2y.splice(n, 1);
so2z.splice(n, 1);
so3a.splice(n, 1);
so4a.splice(n, 1);
so4b.splice(n, 1);
so4c.splice(n, 1);
sox.splice(n, 1);
soy.splice(n, 1);
soz.splice(n, 1);
}
}
else if(type==31){
if(n==-1){
asu1 = [];
asu2 = [];
asu3 = [];
asu4 = [];
asu1a = [];
asu2a = [];
asu2x = [];
asu2y = [];
asu2z = [];
asu3a = [];
asu4a = [];
}
else{
asu1.splice(n, 1);
asu2.splice(n, 1);
asu3.splice(n, 1);
asu4.splice(n, 1);
asu1a.splice(n, 1);
asu2a.splice(n, 1);
asu2x.splice(n, 1);
asu2y.splice(n, 1);
asu2z.splice(n, 1);
asu3a.splice(n, 1);
asu4a.splice(n, 1);
}
}
else if(type==32){
if(n==-1){
bus1 = [];
bus2 = [];
bus3 = [];
bus4 = [];
bus1a = [];
bus1b = [];
bus1c = [];
bus1x = [];
bus1y = [];
bus1z = [];
bus2a = [];
bus3a = [];
bus4a = [];
busx = [];
busy = [];
busz = [];
}
else{
bus1.splice(n, 1);
bus2.splice(n, 1);
bus3.splice(n, 1);
bus4.splice(n, 1);
bus1a.splice(n, 1);
bus1b.splice(n, 1);
bus1c.splice(n, 1);
bus1x.splice(n, 1);
bus1y.splice(n, 1);
bus1z.splice(n, 1);
bus2a.splice(n, 1);
bus3a.splice(n, 1);
bus4a.splice(n, 1);
busx.splice(n, 1);
busy.splice(n, 1);
busz.splice(n, 1);
}
}
else if(type==33){
if(n==-1){
wa1 = [];
wa2 = [];
wa3 = [];
wa4 = [];
wa1a = [];
wa1x = [];
wa1y = [];
wa1z = [];
waxa = [];
waza = [];
wa2a = [];
wa3a = [];
wa4a = [];
wax = [];
way = [];
waz = [];
}
else{
wa1.splice(n, 1);
wa2.splice(n, 1);
wa3.splice(n, 1);
wa4.splice(n, 1);
wa1a.splice(n, 1);
wa1x.splice(n, 1);
wa1y.splice(n, 1);
wa1z.splice(n, 1);
waxa.splice(n, 1);
waza.splice(n, 1);
wa2a.splice(n, 1);
wa3a.splice(n, 1);
wa4a.splice(n, 1);
wax.splice(n, 1);
way.splice(n, 1);
waz.splice(n, 1);
}
}
else if(type==34){
if(n==-1){
o1 = [];
o2 = [];
o3 = [];
o4 = [];
o1a = [];
o2a = [];
o3a = [];
o3x = [];
o3y = [];
o3z = [];
o4a = [];
o4b = [];
o4c = [];
ox = [];
oy = [];
oz = [];
}
else{
o1.splice(n, 1);
o2.splice(n, 1);
o3.splice(n, 1);
o4.splice(n, 1);
o1a.splice(n, 1);
o2a.splice(n, 1);
o3a.splice(n, 1);
o3x.splice(n, 1);
o3y.splice(n, 1);
o3z.splice(n, 1);
o4a.splice(n, 1);
o4b.splice(n, 1);
o4c.splice(n, 1);
ox.splice(n, 1);
oy.splice(n, 1);
oz.splice(n, 1);
}
}
else if(type==35){
if(n==-1){
r1 = [];
r2 = [];
r3 = [];
r4 = [];
r1a = [];
r1x = [];
r1y = [];
r1z = [];
r2a = [];
r3a = [];
r4a = [];
rx = [];
ry = [];
rz = [];
}
else{
r1.splice(n, 1);
r2.splice(n, 1);
r3.splice(n, 1);
r4.splice(n, 1);
r1a.splice(n, 1);
r1x.splice(n, 1);
r1y.splice(n, 1);
r1z.splice(n, 1);
r2a.splice(n, 1);
r3a.splice(n, 1);
r4a.splice(n, 1);
rx.splice(n, 1);
ry.splice(n, 1);
rz.splice(n, 1);
}
}
else if(type==36){
if(n==-1){
tp1 = [];
tp2 = [];
tp3 = [];
tp4 = [];
tp1a = [];
tp2a = [];
tp3a = [];
tp4a = [];
tpx = []
tpy = []
tpz = [];
}
else{
tp1.splice(n, 1);
tp2.splice(n, 1);
tp3.splice(n, 1);
tp4.splice(n, 1);
tp1a.splice(n, 1);
tp2a.splice(n, 1);
tp3a.splice(n, 1);
tp4a.splice(n, 1);
tpx.splice(n, 1)
tpy.splice(n, 1)
tpz.splice(n, 1);
}
}
else if(type==37){
if(n==-1){
sp1 = [];
sp2 = [];
sp3 = [];
sp4 = [];
sp1a = [];
sp2a = [];
sp2x = [];
sp2y = [];
sp2z = [];
spxa = [];
spza = [];
sp3a = [];
sp3x = [];
sp3y = [];
sp3z = [];
sp4a = [];
sp4b = [];
spx = [];
spy = [];
spz = [];
}
else{
sp1.splice(n, 1);
sp2.splice(n, 1);
sp3.splice(n, 1);
sp4.splice(n, 1);
sp1a.splice(n, 1);
sp2a.splice(n, 1);
sp2x.splice(n, 1);
sp2y.splice(n, 1);
sp2z.splice(n, 1);
spxa.splice(n, 1);
spza.splice(n, 1);
sp3a.splice(n, 1);
sp3x.splice(n, 1);
sp3y.splice(n, 1);
sp3z.splice(n, 1);
sp4a.splice(n, 1);
sp4b.splice(n, 1);
spx.splice(n, 1);
spy.splice(n, 1);
spz.splice(n, 1);
}
}
else if(type==38){
if(n==-1){
sa1 = [];
sa2 = [];
sa3 = [];
sa4 = [];
sa1a = [];
sa1x = [];
sa1y = [];
sa1z = [];
sa2a = [];
sa2x = [];
sa2y = [];
sa2z = [];
sa3a = [];
sa3x = [];
sa3y = [];
sa3z = [];
sa4a = [];
sa4b = [];
sax = [];
say = [];
saz = [];
}
else{
sa1.splice(n, 1);
sa2.splice(n, 1);
sa3.splice(n, 1);
sa4.splice(n, 1);
sa1a.splice(n, 1);
sa1x.splice(n, 1);
sa1y.splice(n, 1);
sa1z.splice(n, 1);
sa2a.splice(n, 1);
sa2x.splice(n, 1);
sa2y.splice(n, 1);
sa2z.splice(n, 1);
sa3a.splice(n, 1);
sa3x.splice(n, 1);
sa3y.splice(n, 1);
sa3z.splice(n, 1);
sa4a.splice(n, 1);
sa4b.splice(n, 1);
sax.splice(n, 1);
say.splice(n, 1);
saz.splice(n, 1);
}
}
else if(type==39){
if(n==-1){
fo1 = [];
fo2 = [];
fo3 = [];
fo4 = [];
fo1a = [];
fo1x = [];
fo1y = [];
fo1z = [];
fo2a = [];
fo2x = [];
fo2y = [];
fo2z = [];
foxa = [];
foza = [];
fo3a = [];
fo4a = [];
fox = [];
foy = [];
foz = [];
}
else{
fo1.splice(n, 1);
fo2.splice(n, 1);
fo3.splice(n, 1);
fo4.splice(n, 1);
fo1a.splice(n, 1);
fo1x.splice(n, 1);
fo1y.splice(n, 1);
fo1z.splice(n, 1);
fo2a.splice(n, 1);
fo2x.splice(n, 1);
fo2y.splice(n, 1);
fo2z.splice(n, 1);
foxa.splice(n, 1);
foza.splice(n, 1);
fo3a.splice(n, 1);
fo4a.splice(n, 1);
fox.splice(n, 1);
foy.splice(n, 1);
foz.splice(n, 1);
}
}
else if(type==40){
if(n==-1){
re1 = [];
re2 = [];
re3 = [];
re4 = [];
re1a = [];
re1x = [];
re1y = [];
re1z = [];
re2a = [];
re2x = [];
re2z = [];
re3a = [];
re2x = [];
re2y = [];
re2z = [];
re4a = [];
rex = [];
rey = [];
rez = [];
}
else{
re1.splice(n, 1);
re2.splice(n, 1);
re3.splice(n, 1);
re4.splice(n, 1);
re1a.splice(n, 1);
re1x.splice(n, 1);
re1y.splice(n, 1);
re1z.splice(n, 1);
re2a.splice(n, 1);
re2x.splice(n, 1);
re2z.splice(n, 1);
re3a.splice(n, 1);
re2x.splice(n, 1);
re2y.splice(n, 1);
re2z.splice(n, 1);
re4a.splice(n, 1);
rex.splice(n, 1);
rey.splice(n, 1);
rez.splice(n, 1);
}
}
else if(type==41){
if(n==-1){
mag1 = [];
mag2 = [];
mag3 = [];
mag4 = [];
mag1a = [];
mag2a = [];
mag3a = [];
mag3x = [];
mag3y = [];
mag3z = [];
mag4a = [];
mag4b = [];
magx = [];
magy = [];
magz = [];
}
else{
mag1.splice(n, 1);
mag2.splice(n, 1);
mag3.splice(n, 1);
mag4.splice(n, 1);
mag1a.splice(n, 1);
mag2a.splice(n, 1);
mag3a.splice(n, 1);
mag3x.splice(n, 1);
mag3y.splice(n, 1);
mag3z.splice(n, 1);
mag4a.splice(n, 1);
mag4b.splice(n, 1);
magx.splice(n, 1);
magy.splice(n, 1);
magz.splice(n, 1);
}
}
else if(type==42){
if(n==-1){
st1 = [];
st2 = [];
st3 = [];
st4 = [];
st1a = [];
st2a = [];
st2b = [];
st2x = [];
st2y = [];
st2z = [];
st2c = [];
st3a = [];
st4a = [];
stx = [];
sty = [];
stz = [];
}
else{
st1.splice(n, 1);
st2.splice(n, 1);
st3.splice(n, 1);
st4.splice(n, 1);
st1a.splice(n, 1);
st2a.splice(n, 1);
st2b.splice(n, 1);
st2x.splice(n, 1);
st2y.splice(n, 1);
st2z.splice(n, 1);
st2c.splice(n, 1);
st3a.splice(n, 1);
st4a.splice(n, 1);
stx.splice(n, 1);
sty.splice(n, 1);
stz.splice(n, 1);
}
}
else if(type==43){
if(n==-1){
he1 = [];
he2 = [];
he3 = [];
he4 = [];
he1a = [];
he1b = [];
he1x = [];
he1y = [];
he1z = [];
he1c = [];
he1d = [];
he2a = [];
he2b = [];
he2x = [];
he2y = [];
he2z = [];
he3a = [];
he3x = [];
he3y = [];
he3z = [];
he4a = [];
hex = [];
hey = [];
hez = [];
}
else{
he1.splice(n, 1);
he2.splice(n, 1);
he3.splice(n, 1);
he4.splice(n, 1);
he1a.splice(n, 1);
he1b.splice(n, 1);
he1x.splice(n, 1);
he1y.splice(n, 1);
he1z.splice(n, 1);
he1c.splice(n, 1);
he1d.splice(n, 1);
he2a.splice(n, 1);
he2b.splice(n, 1);
he2x.splice(n, 1);
he2y.splice(n, 1);
he2z.splice(n, 1);
he3a.splice(n, 1);
he3x.splice(n, 1);
he3y.splice(n, 1);
he3z.splice(n, 1);
he4a.splice(n, 1);
hex.splice(n, 1);
hey.splice(n, 1);
hez.splice(n, 1);
}
}
else if(type==44){
if(n==-1){
her1 = [];
her2 = [];
her3 = [];
her4 = [];
her1a = [];
her2a = [];
her2b = [];
her2x = [];
her2y = [];
her2z = [];
her3a = [];
her3b = [];
her3x = [];
her3y = [];
her3z = [];
her4a = [];
herx = [];
hery = [];
herz = [];
}
else{
her1.splice(n, 1);
her2.splice(n, 1);
her3.splice(n, 1);
her4.splice(n, 1);
her1a.splice(n, 1);
her2a.splice(n, 1);
her2b.splice(n, 1);
her2x.splice(n, 1);
her2y.splice(n, 1);
her2z.splice(n, 1);
her3a.splice(n, 1);
her3b.splice(n, 1);
her3x.splice(n, 1);
her3y.splice(n, 1);
her3z.splice(n, 1);
her4a.splice(n, 1);
herx.splice(n, 1);
hery.splice(n, 1);
herz.splice(n, 1);
}
}
else if(type==45){
if(n==-1){
cl1 = [];
cl2 = [];
cl3 = [];
cl4 = [];
cl1a = [];
cl2a = [];
cl2x = [];
cl2y = [];
cl2z = [];
cl3a = [];
cl3x = [];
cl3y = [];
cl3z = [];
cl4a = [];
clx = [];
cly = [];
clz = [];
}
else{
cl1.splice(n, 1);
cl2.splice(n, 1);
cl3.splice(n, 1);
cl4.splice(n, 1);
cl1a.splice(n, 1);
cl2a.splice(n, 1);
cl2x.splice(n, 1);
cl2y.splice(n, 1);
cl2z.splice(n, 1);
cl3a.splice(n, 1);
cl3x.splice(n, 1);
cl3y.splice(n, 1);
cl3z.splice(n, 1);
cl4a.splice(n, 1);
clx.splice(n, 1);
cly.splice(n, 1);
clz.splice(n, 1);
}
}
else if(type==46){
if(n==-1){
k1 = [];
k2 = [];
k3 = [];
k4 = [];
k1a = [];
kxa = [];
kza = [];
k2a = [];
k2x = [];
k2y = [];
k2z = [];
k3a = [];
k4a = [];
k4b = [];
kx = [];
ky = [];
kz = [];
}
else{
k1.splice(n, 1);
k2.splice(n, 1);
k3.splice(n, 1);
k4.splice(n, 1);
k1a.splice(n, 1);
kxa.splice(n, 1);
kza.splice(n, 1);
k2a.splice(n, 1);
k2x.splice(n, 1);
k2y.splice(n, 1);
k2z.splice(n, 1);
k3a.splice(n, 1);
k4a.splice(n, 1);
k4b.splice(n, 1);
kx.splice(n, 1);
ky.splice(n, 1);
kz.splice(n, 1);
}
}
else if(type==47){
if(n==-1){
j1 = [];
j2 = [];
j3 = [];
j4 = [];
j1a = [];
j2a = [];
jxa = [];
jza = [];
j3a = [];
j3b = [];
j3x = [];
j3y = [];
j3z = [];
j4a = [];
j4b = [];
jx = [];
jy = [];
jz = [];
}
else{
j1.splice(n, 1);
j2.splice(n, 1);
j3.splice(n, 1);
j4.splice(n, 1);
j1a.splice(n, 1);
j2a.splice(n, 1);
jxa.splice(n, 1);
jza.splice(n, 1);
j3a.splice(n, 1);
j3b.splice(n, 1);
j3x.splice(n, 1);
j3y.splice(n, 1);
j3z.splice(n, 1);
j4a.splice(n, 1);
j4b.splice(n, 1);
jx.splice(n, 1);
jy.splice(n, 1);
jz.splice(n, 1);
}
}
else if(type==48){
if(n==-1){
ka1 = [];
ka2 = [];
ka3 = [];
ka4 = [];
ka1a = [];
ka2a = [];
ka3a = [];
ka3b = [];
ka3x = [];
ka3y = [];
ka3z = [];
ka4a = [];
kax = [];
kay = [];
kaz = [];
}
else{
ka1.splice(n, 1);
ka2.splice(n, 1);
ka3.splice(n, 1);
ka4.splice(n, 1);
ka1a.splice(n, 1);
ka2a.splice(n, 1);
ka3a.splice(n, 1);
ka3b.splice(n, 1);
ka3x.splice(n, 1);
ka3y.splice(n, 1);
ka3z.splice(n, 1);
ka4a.splice(n, 1);
kax.splice(n, 1);
kay.splice(n, 1);
kaz.splice(n, 1);
}
}
else if(type==49){
if(n==-1){
ti1 = [];
ti2 = [];
ti3 = [];
ti4 = [];
ti1a = [];
ti2a = [];
ti3a = [];
ti3b = [];
ti3x = [];
ti3y = [];
ti3z = [];
ti4a = [];
ti4b = [];
tix = [];
tiy = [];
tiz = [];
}
else{
ti1.splice(n, 1);
ti2.splice(n, 1);
ti3.splice(n, 1);
ti4.splice(n, 1);
ti1a.splice(n, 1);
ti2a.splice(n, 1);
ti3a.splice(n, 1);
ti3b.splice(n, 1);
ti3x.splice(n, 1);
ti3y.splice(n, 1);
ti3z.splice(n, 1);
ti4a.splice(n, 1);
ti4b.splice(n, 1);
tix.splice(n, 1);
tiy.splice(n, 1);
tiz.splice(n, 1);
}
}
else if(type==50){
if(n==-1){
sn1 = [];
sn2 = [];
sn3 = [];
sn4 = [];
sn1a = [];
sn2a = [];
sn3a = [];
sn4a = [];
sn4b = [];
sn4c = [];
sn4d = [];
snx = [];
sny = [];
snz = [];
sn4x = [];
sn4y = [];
sn4z = [];
}
else{
sn1.splice(n, 1);
sn2.splice(n, 1);
sn3.splice(n, 1);
sn4.splice(n, 1);
sn1a.splice(n, 1);
sn2a.splice(n, 1);
sn3a.splice(n, 1);
sn4a.splice(n, 1);
sn4b.splice(n, 1);
sn4c.splice(n, 1);
sn4d.splice(n, 1);
snx.splice(n, 1);
sny.splice(n, 1);
snz.splice(n, 1);
sn4x.splice(n, 1);
sn4y.splice(n, 1);
sn4z.splice(n, 1);
}
}
else if(type==51){
if(n==-1){
z1 = [];
z2 = [];
z3 = [];
z4 = [];
z1a = [];
z2a = [];
z2b = [];
z3a = [];
z3b = [];
z3x = [];
z3y = [];
z3z = [];
z4a = [];
}
else{
z1.splice(n, 1);
z2.splice(n, 1);
z3.splice(n, 1);
z4.splice(n, 1);
z1a.splice(n, 1);
z2a.splice(n, 1);
z2b.splice(n, 1);
z3a.splice(n, 1);
z3b.splice(n, 1);
z3x.splice(n, 1);
z3y.splice(n, 1);
z3z.splice(n, 1);
z4a.splice(n, 1);
}
}
else if(type==52){
if(n==-1){
ne1 = [];
ne2 = [];
ne3 = [];
ne4 = [];
ne1a = [];
ne2a = [];
ne3a = [];
ne4a = [];
ne4b = [];
ne4c = [];
nex = [];
ney = [];
nez = [];
}
else{
ne1.splice(n, 1);
ne2.splice(n, 1);
ne3.splice(n, 1);
ne4.splice(n, 1);
ne1a.splice(n, 1);
ne2a.splice(n, 1);
ne3a.splice(n, 1);
ne4a.splice(n, 1);
ne4b.splice(n, 1);
ne4c.splice(n, 1);
nex.splice(n, 1);
ney.splice(n, 1);
nez.splice(n, 1);
}
}
else if(type==53){
if(n==-1){
asn1 = [];
asn2 = [];
asn3 = [];
asn4 = [];
asn1a = [];
asn2a = [];
asnx = [];
asny = [];
asnz = [];
asn3a = [];
asn3b = [];
asn4a = [];
}
else{
asn1.splice(n, 1);
asn2.splice(n, 1);
asn3.splice(n, 1);
asn4.splice(n, 1);
asn1a.splice(n, 1);
asn2a.splice(n, 1);
asnx.splice(n, 1);
asny.splice(n, 1);
asnz.splice(n, 1);
asn3a.splice(n, 1);
asn3b.splice(n, 1);
asn4a.splice(n, 1);
}
}
else if(type==54){
if(n==-1){
ho1 = [];
ho2 = [];
ho3 = [];
ho4 = [];
ho1a = [];
ho2a = [];
ho3a = [];
ho4a = [];
hox = [];
hoy = [];
hoz = [];
}
else{
ho1.splice(n, 1);
ho2.splice(n, 1);
ho3.splice(n, 1);
ho4.splice(n, 1);
ho1a.splice(n, 1);
ho2a.splice(n, 1);
ho3a.splice(n, 1);
ho4a.splice(n, 1);
hox.splice(n, 1);
hoy.splice(n, 1);
hoz.splice(n, 1);
}
}
else if(type==55){
if(n==-1){
sol1 = [];
sol2 = [];
sol3 = [];
sol4 = [];
sol1a = [];
sol2a = [];
sol3a = [];
sol4a = [];
solx = [];
soly = [];
solz = [];
}
else{
sol1.splice(n, 1);
sol2.splice(n, 1);
sol3.splice(n, 1);
sol4.splice(n, 1);
sol1a.splice(n, 1);
sol2a.splice(n, 1);
sol3a.splice(n, 1);
sol4a.splice(n, 1);
solx.splice(n, 1);
soly.splice(n, 1);
solz.splice(n, 1);
}
}
else if(type==56){
if(n==-1){
lu1 = [];
lu2 = [];
lu3 = [];
lu4 = [];
lu1a = [];
lu2a = [];
lu3a = [];
lu4a = [];
lux = [];
luy = [];
luz = [];
}
else{
lu1.splice(n, 1);
lu2.splice(n, 1);
lu3.splice(n, 1);
lu4.splice(n, 1);
lu1a.splice(n, 1);
lu2a.splice(n, 1);
lu3a.splice(n, 1);
lu4a.splice(n, 1);
lux.splice(n, 1);
luy.splice(n, 1);
luz.splice(n, 1);
}
}
else if(type==57){
if(n==-1){
ha1 = [];
ha2 = [];
ha3 = [];
ha4 = [];
ha1a = [];
ha2a = [];
ha2x = [];
ha2y = [];
ha2z = [];
ha3a = [];
ha4a = [];
}
else{
ha1.splice(n, 1);
ha2.splice(n, 1);
ha3.splice(n, 1);
ha4.splice(n, 1);
ha1a.splice(n, 1);
ha2a.splice(n, 1);
ha2x.splice(n, 1);
ha2y.splice(n, 1);
ha2z.splice(n, 1);
ha3a.splice(n, 1);
ha4a.splice(n, 1);
}
}
else if(type==58){
if(n==-1){
ra1 = [];
ra2 = [];
ra3 = [];
ra4 = [];
ra1a = [];
ra1b = [];
ra2a = [];
ra2b = [];
ra3a = [];
ra3b = [];
ra4a = [];
ra4b = [];
rax = [];
ray = [];
raz = [];
}
else{
ra1.splice(n, 1);
ra2.splice(n, 1);
ra3.splice(n, 1);
ra4.splice(n, 1);
ra1a.splice(n, 1);
ra1b.splice(n, 1);
ra2a.splice(n, 1);
ra2b.splice(n, 1);
ra3a.splice(n, 1);
ra3b.splice(n, 1);
ra4a.splice(n, 1);
ra4b.splice(n, 1);
rax.splice(n, 1);
ray.splice(n, 1);
raz.splice(n, 1);
}
}
else if(type==59){
if(n==-1){
zw1 = [];
zw2 = [];
zw3 = [];
zw4 = [];
zw1a = [];
zw2a = [];
zw2x = [];
zw2y = [];
zw2z = [];
zw3a = [];
zw3b = [];
zw3x = [];
zw3y = [];
zw3z = [];
zw4a = [];
zw4b = [];
zwx = [];
zwy = [];
zwz = [];
}
else{
zw1.splice(n, 1);
zw2.splice(n, 1);
zw3.splice(n, 1);
zw4.splice(n, 1);
zw1a.splice(n, 1);
zw2a.splice(n, 1);
zw2x.splice(n, 1);
zw2y.splice(n, 1);
zw2z.splice(n, 1);
zw3a.splice(n, 1);
zw3b.splice(n, 1);
zw3x.splice(n, 1);
zw3y.splice(n, 1);
zw3z.splice(n, 1);
zw4a.splice(n, 1);
zw4b.splice(n, 1);
zwx.splice(n, 1);
zwy.splice(n, 1);
zwz.splice(n, 1);
}
}
else if(type==60){
if(n==-1){
dec1 = [];
dec2 = [];
dec3 = [];
dec4 = [];
dec1a = [];
dec2a = [];
dec3a = [];
dec3x = [];
dec3y = [];
dec3z = [];
dec4a = [];
dec4c = [];
decx = [];
decy = [];
decz = [];
}
else{
dec1.splice(n, 1);
dec2.splice(n, 1);
dec3.splice(n, 1);
dec4.splice(n, 1);
dec1a.splice(n, 1);
dec2a.splice(n, 1);
dec3a.splice(n, 1);
dec3x.splice(n, 1);
dec3y.splice(n, 1);
dec3z.splice(n, 1);
dec4a.splice(n, 1);
dec4c.splice(n, 1);
decx.splice(n, 1);
decy.splice(n, 1);
decz.splice(n, 1);
}
}
else if(type==61){
if(n==-1){
hs1 = [];
hs2 = [];
hs3 = [];
hs4 = [];
hs1a = [];
hs2a = [];
hs3a = [];
hs4a = [];
}
else{
hs1.splice(n, 1);
hs2.splice(n, 1);
hs3.splice(n, 1);
hs4.splice(n, 1);
hs1a.splice(n, 1);
hs2a.splice(n, 1);
hs3a.splice(n, 1);
hs4a.splice(n, 1);
}
}
else if(type==62){
if(n==-1){
cli1 = [];
cli2 = [];
cli3 = [];
cli4 = [];
cli1a = [];
cli1b = [];
cli2a = [];
cli3a = [];
cli4a = [];
clix = [];
cliy = [];
cliz = [];
}
else{
cli1.splice(n, 1);
cli2.splice(n, 1);
cli3.splice(n, 1);
cli4.splice(n, 1);
cli1a.splice(n, 1);
cli1b.splice(n, 1);
cli2a.splice(n, 1);
cli3a.splice(n, 1);
cli4a.splice(n, 1);
clix.splice(n, 1);
cliy.splice(n, 1);
cliz.splice(n, 1);
}
}
else if(type==63){
if(n==-1){
rr1 = [];
rr2 = [];
rr3 = [];
rr4 = [];
rr1a = [];
rr2a = [];
rr3a = [];
rr4a = [];
rr0 = [];
}
else{
rr1.splice(n, 1);
rr2.splice(n, 1);
rr3.splice(n, 1);
rr4.splice(n, 1);
rr1a.splice(n, 1);
rr2a.splice(n, 1);
rr3a.splice(n, 1);
rr4a.splice(n, 1);
rr0.splice(n, 1);
}
}
else if(type==64){
if(n==-1){
wi1 = [];
wi2 = [];
wi3 = [];
wi4 = [];
wi1a = [];
wi2a = [];
wi3a = [];
wi4a = [];
wi4b = [];
wix = [];
wiy = [];
wiz = [];
}
else{
wi1.splice(n, 1);
wi2.splice(n, 1);
wi3.splice(n, 1);
wi4.splice(n, 1);
wi1a.splice(n, 1);
wi2a.splice(n, 1);
wi3a.splice(n, 1);
wi4a.splice(n, 1);
wi4b.splice(n, 1);
wix.splice(n, 1);
wiy.splice(n, 1);
wiz.splice(n, 1);
}
}
else if(type==65){
if(n==-1){
en1 = [];
en2 = [];
en3 = [];
en4 = [];
en1a = [];
en1x = [];
en1y = [];
en1z = [];
en2a = [];
en3a = [];
en3x = [];
en3y = [];
en3z = [];
en4a = [];
en4b = [];
}
else{
en1.splice(n, 1);
en2.splice(n, 1);
en3.splice(n, 1);
en4.splice(n, 1);
en1a.splice(n, 1);
en1x.splice(n, 1);
en1y.splice(n, 1);
en1z.splice(n, 1);
en2a.splice(n, 1);
en3a.splice(n, 1);
en3x.splice(n, 1);
en3y.splice(n, 1);
en3z.splice(n, 1);
en4a.splice(n, 1);
en4b.splice(n, 1);
}
}
else if(type==66){
if(n==-1){
g1 = [];
g2 = [];
g3 = [];
g4 = [];
g1a = [];
g2a = [];
g2x = [];
g2y = [];
g2z = [];
g3a = [];
g3x = [];
g3y = [];
g3z = [];
g4a = [];
g4b = [];
gx = [];
gy = [];
gz = [];
}
else{
g1.splice(n, 1);
g2.splice(n, 1);
g3.splice(n, 1);
g4.splice(n, 1);
g1a.splice(n, 1);
g2a.splice(n, 1);
g2x.splice(n, 1);
g2y.splice(n, 1);
g2z.splice(n, 1);
g3a.splice(n, 1);
g3x.splice(n, 1);
g3y.splice(n, 1);
g3z.splice(n, 1);
g4a.splice(n, 1);
g4b.splice(n, 1);
gx.splice(n, 1);
gy.splice(n, 1);
gz.splice(n, 1);
}
}
else if(type==67){
if(n==-1){
se1 = [];
se2 = [];
se3 = [];
se4 = [];
se1a = [];
se2a = [];
se3a = [];
se4a = [];
se4b = [];
se4c = [];
sex = [];
sey = [];
sez = [];
}
else{
se1.splice(n, 1);
se2.splice(n, 1);
se3.splice(n, 1);
se4.splice(n, 1);
se1a.splice(n, 1);
se2a.splice(n, 1);
se3a.splice(n, 1);
se4a.splice(n, 1);
se4b.splice(n, 1);
se4c.splice(n, 1);
sex.splice(n, 1);
sey.splice(n, 1);
sez.splice(n, 1);
}
}
else if(type==68){
if(n==-1){
ou1 = [];
ou2 = [];
ou3 = [];
ou4 = [];
ou1a = [];
ou2a = [];
ou3a = [];
ou4a = [];
oux = [];
ouy = [];
ouz = [];
}
else{
ou1.splice(n, 1);
ou2.splice(n, 1);
ou3.splice(n, 1);
ou4.splice(n, 1);
ou1a.splice(n, 1);
ou2a.splice(n, 1);
ou3a.splice(n, 1);
ou4a.splice(n, 1);
oux.splice(n, 1);
ouy.splice(n, 1);
ouz.splice(n, 1);
}
}
else if(type==69){
if(n==-1){
rg1 = [];
rg2 = [];
rg3 = [];
rg4 = [];
rg1a = [];
rg2a = [];
rg3a = [];
rg3x = [];
rg3y = [];
rg3z = [];
rg4a = [];
rgx = [];
rgy = [];
rgz = [];
}
else{
rg1.splice(n, 1);
rg2.splice(n, 1);
rg3.splice(n, 1);
rg4.splice(n, 1);
rg1a.splice(n, 1);
rg2a.splice(n, 1);
rg3a.splice(n, 1);
rg3x.splice(n, 1);
rg3y.splice(n, 1);
rg3z.splice(n, 1);
rg4a.splice(n, 1);
rgx.splice(n, 1);
rgy.splice(n, 1);
rgz.splice(n, 1);
}
}
else if(type==70){
if(n==-1){
co1 = [];
co2 = [];
co3 = [];
co4 = [];
co1a = [];
co1x = [];
co1y = [];
co1z = [];
co2a = [];
co2x = [];
co2y = [];
co2z = [];
co3a = [];
co3b = [];
co3x = [];
co3y = [];
co3z = [];
co4a = [];
cox = [];
coy = [];
coz = [];
}
else{
co1.splice(n, 1);
co2.splice(n, 1);
co3.splice(n, 1);
co4.splice(n, 1);
co1a.splice(n, 1);
co1x.splice(n, 1);
co1y.splice(n, 1);
co1z.splice(n, 1);
co2a.splice(n, 1);
co2x.splice(n, 1);
co2y.splice(n, 1);
co2z.splice(n, 1);
co3a.splice(n, 1);
co3b.splice(n, 1);
co3x.splice(n, 1);
co3y.splice(n, 1);
co3z.splice(n, 1);
co4a.splice(n, 1);
cox.splice(n, 1);
coy.splice(n, 1);
coz.splice(n, 1);
}
}
else if(type==71){
if(n==-1){
dr1 = [];
dr2 = [];
dr3 = [];
dr4 = [];
dr1a = [];
dr2a = [];
dr3a = [];
dr4a = [];
drx = [];
dry = [];
drz = [];
}
else{
dr1.splice(n, 1);
dr2.splice(n, 1);
dr3.splice(n, 1);
dr4.splice(n, 1);
dr1a.splice(n, 1);
dr2a.splice(n, 1);
dr3a.splice(n, 1);
dr4a.splice(n, 1);
drx.splice(n, 1);
dry.splice(n, 1);
drz.splice(n, 1);
}
}
else if(type==72){
if(n==-1){
hw1 = [];
hw2 = [];
hw3 = [];
hw4 = [];
hw1a = [];
hw1x = [];
hw1y = [];
hw1z = [];
hw2a = [];
hwxa = [];
hwya = [];
hwza = [];
hw2x = [];
hw2y = [];
hw2z = [];
hw3a = [];
hw4a = [];
hwx = [];
hwy = [];
hwz = [];
}
else{
hw1.splice(n, 1);
hw2.splice(n, 1);
hw3.splice(n, 1);
hw4.splice(n, 1);
hw1a.splice(n, 1);
hw1x.splice(n, 1);
hw1y.splice(n, 1);
hw1z.splice(n, 1);
hw2a.splice(n, 1);
hwxa.splice(n, 1);
hwya.splice(n, 1);
hwza.splice(n, 1);
hw2x.splice(n, 1);
hw2y.splice(n, 1);
hw2z.splice(n, 1);
hw3a.splice(n, 1);
hw4a.splice(n, 1);
hwx.splice(n, 1);
hwy.splice(n, 1);
hwz.splice(n, 1);
}
}
else if(type==73){
if(n==-1){
sd1 = [];
sd2 = [];
sd3 = [];
sd4 = [];
sd1a = [];
sd2a = [];
sd3a = [];
sd4a = [];
sd4x = [];
sd4y = [];
sd4z = [];
sdx = [];
sdy = [];
sdz = [];
}
else{
sd1.splice(n, 1);
sd2.splice(n, 1);
sd3.splice(n, 1);
sd4.splice(n, 1);
sd1a.splice(n, 1);
sd2a.splice(n, 1);
sd3a.splice(n, 1);
sd4a.splice(n, 1);
sd4x.splice(n, 1);
sd4y.splice(n, 1);
sd4z.splice(n, 1);
sdx.splice(n, 1);
sdy.splice(n, 1);
sdz.splice(n, 1);
}
}
else if(type==74){
if(n==-1){
gr1 = [];
gr2 = [];
gr3 = [];
gr4 = [];
gr1a = [];
gr1b = [];
gr1c = [];
gr1x = [];
gr1y = [];
gr1z = [];
gr2a = [];
gr3a = [];
gr4a = [];
grx = [];
gry = [];
grz = [];
}
else{
gr1.splice(n, 1);
gr2.splice(n, 1);
gr3.splice(n, 1);
gr4.splice(n, 1);
gr1a.splice(n, 1);
gr1b.splice(n, 1);
gr1c.splice(n, 1);
gr1x.splice(n, 1);
gr1y.splice(n, 1);
gr1z.splice(n, 1);
gr2a.splice(n, 1);
gr3a.splice(n, 1);
gr4a.splice(n, 1);
grx.splice(n, 1);
gry.splice(n, 1);
grz.splice(n, 1);
}
}
else if(type==75){
if(n==-1){
hass1 = [];
hass2 = [];
hass3 = [];
hass4 = [];
hass1a = [];
hass2a = [];
hass2b = [];
hass2x = [];
hass2y = [];
hass2z = [];
hass3a = [];
hass3b = [];
hass4a = [];
hass4b = [];
}
else{
hass1.splice(n, 1);
hass2.splice(n, 1);
hass3.splice(n, 1);
hass4.splice(n, 1);
hass1a.splice(n, 1);
hass2a.splice(n, 1);
hass2b.splice(n, 1);
hass2x.splice(n, 1);
hass2y.splice(n, 1);
hass2z.splice(n, 1);
hass3a.splice(n, 1);
hass3b.splice(n, 1);
hass4a.splice(n, 1);
hass4b.splice(n, 1);
}
}
else if(type==76){
if(n==-1){
sk1 = [];
sk2 = [];
sk3 = [];
sk4 = [];
sk1a = [];
sk2a = [];
sk2b = [];
sk3a = [];
sk4a = [];
}
else{
sk1.splice(n, 1);
sk2.splice(n, 1);
sk3.splice(n, 1);
sk4.splice(n, 1);
sk1a.splice(n, 1);
sk2a.splice(n, 1);
sk2b.splice(n, 1);
sk3a.splice(n, 1);
sk4a.splice(n, 1);
skx.splice(n, 1);
sky.splice(n, 1);
skz.splice(n, 1);
}
}
else if(type==77){
if(n==-1){
bl1 = [];
bl2 = [];
bl3 = [];
bl4 = [];
bl1a = [];
bl2a = [];
bl3a = [];
bl4a = [];
blx = [];
bly = [];
blz = [];
}
else{
bl1.splice(n, 1);
bl2.splice(n, 1);
bl3.splice(n, 1);
bl4.splice(n, 1);
bl1a.splice(n, 1);
bl2a.splice(n, 1);
bl3a.splice(n, 1);
bl4a.splice(n, 1);
blx.splice(n, 1);
bly.splice(n, 1);
blz.splice(n, 1);
}
}
else if(type==78){
if(n==-1){
sl1 = [];
sl2 = [];
sl3 = [];
sl4 = [];
sl1a = [];
sl2a = [];
sl3a = [];
sl3x = [];
sl3y = [];
sl3z = [];
sl4a = [];
slx = [];
sly = [];
slz = [];
}
else{
sl1.splice(n, 1);
sl2.splice(n, 1);
sl3.splice(n, 1);
sl4.splice(n, 1);
sl1a.splice(n, 1);
sl2a.splice(n, 1);
sl3a.splice(n, 1);
sl3x.splice(n, 1);
sl3y.splice(n, 1);
sl3z.splice(n, 1);
sl4a.splice(n, 1);
slx.splice(n, 1);
sly.splice(n, 1);
slz.splice(n, 1);
}
}
else if(type==79){
if(n==-1){
ni1 = [];
ni2 = [];
ni3 = [];
ni4 = [];
ni1a = [];
ni2a = [];
ni3a = [];
ni4a = [];
}
else{
ni1.splice(n, 1);
ni2.splice(n, 1);
ni3.splice(n, 1);
ni4.splice(n, 1);
ni1a.splice(n, 1);
ni2a.splice(n, 1);
ni3a.splice(n, 1);
ni4a.splice(n, 1);
}
}
else if(type==80){
if(n==-1){
ge1 = [];
ge2 = [];
ge3 = [];
ge4 = [];
ge1a = [];
ge2a = [];
ge3a = [];
ge4a = [];
}
else{
ge1.splice(n, 1);
ge2.splice(n, 1);
ge3.splice(n, 1);
ge4.splice(n, 1);
ge1a.splice(n, 1);
ge2a.splice(n, 1);
ge3a.splice(n, 1);
ge4a.splice(n, 1);
}
}
else if(type==81){
if(n==-1){
dc1 = [];
dc2 = [];
dc3 = [];
dc4 = [];
dc1a = [];
dc2a = [];
dc3a = [];
dc4a = [];
dc4b = [];
dc4c = [];
}
else{
dc1.splice(n, 1);
dc2.splice(n, 1);
dc3.splice(n, 1);
dc4.splice(n, 1);
dc1a.splice(n, 1);
dc2a.splice(n, 1);
dc3a.splice(n, 1);
dc4a.splice(n, 1);
dc4b.splice(n, 1);
dc4c.splice(n, 1);
}
}
else if(type==82){
if(n==-1){
mu1 = [];
mu2 = [];
mu3 = [];
mu4 = [];
mu1a = [];
mu2a = [];
mu3a = [];
mu4a = [];
mux = [];
muy = [];
muz = [];
}
else{
mu1.splice(n, 1);
mu2.splice(n, 1);
mu3.splice(n, 1);
mu4.splice(n, 1);
mu1a.splice(n, 1);
mu2a.splice(n, 1);
mu3a.splice(n, 1);
mu4a.splice(n, 1);
mux.splice(n, 1);
muy.splice(n, 1);
muz.splice(n, 1);
}
}
else if(type==83){
if(n==-1){
end1 = [];
end2 = [];
end3 = [];
end4 = [];
end1a = [];
end2a = [];
end3a = [];
end4a = [];
endx = [];
endy = [];
endz = [];
}
else{
end1.splice(n, 1);
end2.splice(n, 1);
end3.splice(n, 1);
end4.splice(n, 1);
end1a.splice(n, 1);
end2a.splice(n, 1);
end3a.splice(n, 1);
end4a.splice(n, 1);
endx.splice(n, 1);
endy.splice(n, 1);
endz.splice(n, 1);
}
}
else if(type==84){
if(n==-1){
ta1 = [];
ta2 = [];
ta3 = [];
ta4 = [];
ta1a = [];
ta2a = [];
ta3a = [];
ta4a = [];
tax = [];
tay = [];
taz = [];
}
else{
ta1.splice(n, 1);
ta2.splice(n, 1);
ta3.splice(n, 1);
ta4.splice(n, 1);
ta1a.splice(n, 1);
ta2a.splice(n, 1);
ta3a.splice(n, 1);
ta4a.splice(n, 1);
tax.splice(n, 1);
tay.splice(n, 1);
taz.splice(n, 1);
}
}
else if(type==85){
if(n==-1){
ru1 = [];
ru2 = [];
ru3 = [];
ru4 = [];
ru1a = [];
ru1b = [];
ru2a = [];
ru3a = [];
ru3x = [];
ru3y = [];
ru3z = [];
ru4a = [];
rux = [];
ruy = [];
ruz = [];
}
else{
ru1.splice(n, 1);
ru2.splice(n, 1);
ru3.splice(n, 1);
ru4.splice(n, 1);
ru1a.splice(n, 1);
ru1b.splice(n, 1);
ru2a.splice(n, 1);
ru3a.splice(n, 1);
ru3x.splice(n, 1);
ru3y.splice(n, 1);
ru3z.splice(n, 1);
ru4a.splice(n, 1);
rux.splice(n, 1);
ruy.splice(n, 1);
ruz.splice(n, 1);
}
}
else if(type==86){
if(n==-1){
sw1 = [];
sw2 = [];
sw3 = [];
sw4 = [];
sw1a = [];
sw2a = [];
sw3a = [];
sw4a = [];
sw4b = [];
swx = [];
swy = [];
swz = [];
}
else{
sw1.splice(n, 1);
sw2.splice(n, 1);
sw3.splice(n, 1);
sw4.splice(n, 1);
sw1a.splice(n, 1);
sw2a.splice(n, 1);
sw3a.splice(n, 1);
sw4a.splice(n, 1);
sw4b.splice(n, 1);
swx.splice(n, 1);
swy.splice(n, 1);
swz.splice(n, 1);
}
}
else if(type==87){
if(n==-1){
asum1 = [];
asum2 = [];
asum3 = [];
asum4 = [];
asum1a = [];
asum2a = [];
asum3a = [];
asum4a = [];
}
else{
asum1.splice(n, 1);
asum2.splice(n, 1);
asum3.splice(n, 1);
asum4.splice(n, 1);
asum1a.splice(n, 1);
asum2a.splice(n, 1);
asum3a.splice(n, 1);
asum4a.splice(n, 1);
}
}
else if(type==88){
if(n==-1){
am1 = [];
am2 = [];
am3 = [];
am4 = [];
am1a = [];
am2a = [];
am3a = [];
am3x = [];
am3y = [];
am3z = [];
am4a = [];
am4b = [];
amx = [];
amy = [];
amz = [];
am4x = [];
am4y = [];
am4z = [];
}
else{
am1.splice(n, 1);
am2.splice(n, 1);
am3.splice(n, 1);
am4.splice(n, 1);
am1a.splice(n, 1);
am2a.splice(n, 1);
am3a.splice(n, 1);
am3x.splice(n, 1);
am3y.splice(n, 1);
am3z.splice(n, 1);
am4a.splice(n, 1);
am4b.splice(n, 1);
amx.splice(n, 1);
amy.splice(n, 1);
amz.splice(n, 1);
am4x.splice(n, 1);
am4y.splice(n, 1);
am4z.splice(n, 1);
}
}
else if(type==89){
if(n==-1){
pm1 = [];
pm2 = [];
pm3 = [];
pm4 = [];
pm1a = [];
pm2a = [];
pm3a = [];
pm3b = [];
pmx = [];
pmy = [];
pmz = [];
pm4a = [];
pm4x = [];
pm4y = [];
pm4z = [];
}
else{
pm1.splice(n, 1);
pm2.splice(n, 1);
pm3.splice(n, 1);
pm4.splice(n, 1);
pm1a.splice(n, 1);
pm2a.splice(n, 1);
pm3a.splice(n, 1);
pm3b.splice(n, 1);
pmx.splice(n, 1);
pmy.splice(n, 1);
pmz.splice(n, 1);
pm4a.splice(n, 1);
pm4x.splice(n, 1);
pm4y.splice(n, 1);
pm4z.splice(n, 1);
}
}
else if(type==90){
if(n==-1){
hb1 = [];
hb2 = [];
hb3 = [];
hb4 = [];
hb1a = [];
hb2a = [];
hb3a = [];
hb3b = [];
hb4a = [];
hbx = [];
hby = [];
hbz = [];
}
else{
hb1.splice(n, 1);
hb2.splice(n, 1);
hb3.splice(n, 1);
hb4.splice(n, 1);
hb1a.splice(n, 1);
hb2a.splice(n, 1);
hb3a.splice(n, 1);
hb3b.splice(n, 1);
hb4a.splice(n, 1);
hbx.splice(n, 1);
hby.splice(n, 1);
hbz.splice(n, 1);
}
}
else if(type==91){
if(n==-1){
sc1 = [];
sc2 = [];
sc3 = [];
sc4 = [];
sc1a = [];
sc1x = [];
sc1y = [];
sc1z = [];
sc2a = [];
sc3a = [];
sc3x = [];
sc3y = [];
sc3z = [];
sc4a = [];
scx = [];
scy = [];
scz = [];
}
else{
sc1.splice(n, 1);
sc2.splice(n, 1);
sc3.splice(n, 1);
sc4.splice(n, 1);
sc1a.splice(n, 1);
sc1x.splice(n, 1);
sc1y.splice(n, 1);
sc1z.splice(n, 1);
sc2a.splice(n, 1);
sc3a.splice(n, 1);
sc3x.splice(n, 1);
sc3y.splice(n, 1);
sc3z.splice(n, 1);
sc4a.splice(n, 1);
scx.splice(n, 1);
scy.splice(n, 1);
scz.splice(n, 1);
}
}
else if(type==92){
if(n==-1){
v1 = [];
v2 = [];
v3 = [];
v4 = [];
v1a = [];
v1x = [];
v1y = [];
v1z = [];
vxa = [];
vza = [];
v2a = [];
v3a = [];
v3b = [];
v3x = [];
v3y = [];
v3z = [];
vsin = [];
vcos = [];
v4a = [];
v4b = [];
vx = [];
vy = [];
vz = [];
}
else{
v1.splice(n, 1);
v2.splice(n, 1);
v3.splice(n, 1);
v4.splice(n, 1);
v1a.splice(n, 1);
v1x.splice(n, 1);
v1y.splice(n, 1);
v1z.splice(n, 1);
vxa.splice(n, 1);
vza.splice(n, 1);
v2a.splice(n, 1);
v3a.splice(n, 1);
v3b.splice(n, 1);
v3x.splice(n, 1);
v3y.splice(n, 1);
v3z.splice(n, 1);
vsin.splice(n, 1);
vcos.splice(n, 1);
v4a.splice(n, 1);
v4b.splice(n, 1);
vx.splice(n, 1);
vy.splice(n, 1);
vz.splice(n, 1);
}
}
else if(type==93){
if(n==-1){
te1 = [];
te2 = [];
te3 = [];
te4 = [];
te1a = [];
te2a = [];
te2x = [];
te2y = [];
te2z = [];
te3a = [];
te4a = [];
te4b = [];
tex = [];
tey = [];
tez = [];
}
else{
te1.splice(n, 1);
te2.splice(n, 1);
te3.splice(n, 1);
te4.splice(n, 1);
te1a.splice(n, 1);
te2a.splice(n, 1);
te2x.splice(n, 1);
te2y.splice(n, 1);
te2z.splice(n, 1);
te3a.splice(n, 1);
te4a.splice(n, 1);
te4b.splice(n, 1);
tex.splice(n, 1);
tey.splice(n, 1);
tez.splice(n, 1);
}
}
else if(type==94){
if(n==-1){
ame1 = [];
ame2 = [];
ame3 = [];
ame4 = [];
ame1a = [];
ame2a = [];
ame2x = [];
ame2y = [];
ame2z = [];
ame3a = [];
ame3b = [];
ame3x = [];
ame3y = [];
ame3z = [];
ame4a = [];
amex = [];
amey = [];
amez = [];
}
else{
ame1.splice(n, 1);
ame2.splice(n, 1);
ame3.splice(n, 1);
ame4.splice(n, 1);
ame1a.splice(n, 1);
ame2a.splice(n, 1);
ame2x.splice(n, 1);
ame2y.splice(n, 1);
ame2z.splice(n, 1);
ame3a.splice(n, 1);
ame3b.splice(n, 1);
ame3x.splice(n, 1);
ame3y.splice(n, 1);
ame3z.splice(n, 1);
ame4a.splice(n, 1);
amex.splice(n, 1);
amey.splice(n, 1);
amez.splice(n, 1);
}
}
else if(type==95){
if(n==-1){
sea1 = [];
sea2 = [];
sea3 = [];
sea4 = [];
sea1a = [];
sea2a = [];
sea3a = [];
sea3b = [];
sea3x = [];
sea3y = [];
sea3z = [];
sea4a = [];
sea4b = [];
seax = [];
seay = [];
seaz = [];
}
else{
sea1.splice(n, 1);
sea2.splice(n, 1);
sea3.splice(n, 1);
sea4.splice(n, 1);
sea1a.splice(n, 1);
sea2a.splice(n, 1);
sea3a.splice(n, 1);
sea3b.splice(n, 1);
sea3x.splice(n, 1);
sea3y.splice(n, 1);
sea3z.splice(n, 1);
sea4a.splice(n, 1);
sea4b.splice(n, 1);
seax.splice(n, 1);
seay.splice(n, 1);
seaz.splice(n, 1);
}
}
else if(type==96){
if(n==-1){
an1 = [];
an2 = [];
an3 = [];
an4 = [];
an1a = [];
an2a = [];
an2b = [];
an2x = [];
an2y = [];
an2z = [];
an3a = [];
an4a = [];
anx = [];
any = [];
anz = [];
}
else{
an1.splice(n, 1);
an2.splice(n, 1);
an3.splice(n, 1);
an4.splice(n, 1);
an1a.splice(n, 1);
an2a.splice(n, 1);
an2b.splice(n, 1);
an2x.splice(n, 1);
an2y.splice(n, 1);
an2z.splice(n, 1);
an3a.splice(n, 1);
an4a.splice(n, 1);
anx.splice(n, 1);
any.splice(n, 1);
anz.splice(n, 1);
}
}
else if(type==97){
if(n==-1){
wh1 = [];
wh2 = [];
wh3 = [];
wh4 = [];
wh1a = [];
wh2a = [];
wh2x = [];
wh2y = [];
wh2z = [];
wh3a = [];
wh3b = [];
wh4a = [];
whx = [];
why = [];
whz = [];
}
else{
wh1.splice(n, 1);
wh2.splice(n, 1);
wh3.splice(n, 1);
wh4.splice(n, 1);
wh1a.splice(n, 1);
wh2a.splice(n, 1);
wh2x.splice(n, 1);
wh2y.splice(n, 1);
wh2z.splice(n, 1);
wh3a.splice(n, 1);
wh3b.splice(n, 1);
wh4a.splice(n, 1);
whx.splice(n, 1);
why.splice(n, 1);
whz.splice(n, 1);
}
}
else if(type==98){
if(n==-1){
mt1 = [];
mt2 = [];
mt3 = [];
mt4 = [];
mt1a = [];
mt1b = [];
mt1x = [];
mt1y = [];
mt1z = [];
mt2a = [];
mt3a = [];
mt4a = [];
mt4b = [];
mt4c = [];
mtx = [];
mty = [];
mtz = [];
}
else{
mt1.splice(n, 1);
mt2.splice(n, 1);
mt3.splice(n, 1);
mt4.splice(n, 1);
mt1a.splice(n, 1);
mt1b.splice(n, 1);
mt1x.splice(n, 1);
mt1y.splice(n, 1);
mt1z.splice(n, 1);
mt2a.splice(n, 1);
mt3a.splice(n, 1);
mt4a.splice(n, 1);
mt4b.splice(n, 1);
mt4c.splice(n, 1);
mtx.splice(n, 1);
mty.splice(n, 1);
mtz.splice(n, 1);
}
}
if(type==99){
if(n==-1){
wo1 = [];
wo2 = [];
wo3 = [];
wo4 = [];
wo1a = [];
wo2a = [];
wo3a = [];
wo3b = [];
wo3x = [];
wo3y = [];
wo3z = [];
wo4a = [];
wo4b = [];
wox = [];
woy = [];
woz = [];
}
else{
wo1.splice(n, 1);
wo2.splice(n, 1);
wo3.splice(n, 1);
wo4.splice(n, 1);
wo1a.splice(n, 1);
wo2a.splice(n, 1);
wo3a.splice(n, 1);
wo3b.splice(n, 1);
wo3x.splice(n, 1);
wo3y.splice(n, 1);
wo3z.splice(n, 1);
wo4a.splice(n, 1);
wo4b.splice(n, 1);
wox.splice(n, 1);
woy.splice(n, 1);
woz.splice(n, 1);
}
}
}

};
var cccache = null;

var SB2 = {
espManage : function(type){
var cache = ESP.read("sb2Data_2");
if(cache!="") eval(cache+"");
else ESP.toast("추가 파일이 없습니다.");
},
isOff : function(type){
if(type==0&&t2hor==null) return true;
if(type==1&&w2ater==null) return true;
if(type==2&&k2ill==null) return true;
if(type==3&&m2isaka==null) return true;
if(type==4&&e2lsa==null) return true;
if(type==5&&p2ush==null) return true;
if(type==6&&f2ire==null) return true;
if(type==7&&f2aster==null) return true;
if(type==8&&k2ick==null) return true;
if(type==9&&t2ree==null) return true;
if(type==10&&l2ava==null) return true;
if(type==11&&b2ind==null) return true;
if(type==12&&s2and==null) return true;
else return false;
}

};


var SBh = {
espManage : function(type){
var espCodes = [he.elect, he.shade, he.torn, he.buf, he.x, he.bind, he.thor, he.joker, he.chat, he.dark];
var espNames = ["Electric Current", "The Shader", "Tornado Striker", "Buf Exerter", "The X", "Hyper Binder", "I am Thor", "Joker Junior", "Chat Coverer", "Dark Cheater"];
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
var layout = new LinearLayout(ctx);
layout.setOrientation(1);
try{
if(SBh.isOff(type)){
var players = [];
for each(var e in Entity.getAll()){
if(ESP.isPlayer(e)) players.push(e);
}
var radios = makeRadioList(players);
layout.addView(radios);
var dialog = makeDialog(espNames[type]+" on", layout, "취소", null, "확인", function(){
SBh.espOn(type, playerTarget);
ESP.toast(espNames[type]+" on.");
});
dialog.show();
}
else{
var menu = new PopupWindow();
var text = makeESPName(espNames[type]);
var user = new TextView(ctx);
user.setText("  User : "+Player.getName(espCodes[type]));
user.setTextSize(18);
var layout = new LinearLayout(ctx);
layout.setOrientation(1);
layout.addView(text);
layout.addView(user);
var menus = [];
for(var n in he.menus){
menus[n] = new Button(ctx);
menus[n].setText(he.menus[n]);
}
menus[0].setOnClickListener(new View.OnClickListener(){
onClick: function(v){
SBh.espOff(type);
ESP.toast(espNames[type]+" off");
}
});
menus[1].setOnClickListener(new View.OnClickListener(){
onClick: function(v){
ESP.send(espCodes[type]);
ESP.toast(espNames[type]+" was sent");
}
});
menus[2].setOnClickListener(new View.OnClickListener(){
onClick: function(v){
ESP.kill(espCodes[type]);
ESP.toast(espNames[type]+" was killed");
}
});
menus[3].setOnClickListener(new View.OnClickListener(){
onClick: function(v){
ESP.heal(espCodes[type]);
ESP.toast(espNames[type]+" was healed");
}
});
for(var n in he.menus)
layout.addView(menus[n]);
var exit = makeExitButton(menu);
layout.addView(exit);
var scroll = makeScroll(layout, menu);
menu.setContentView(scroll);
menu.setBackgroundDrawable(new ColorDrawable(Color.BLACK));
menu.showAtLocation(ctx.getWindow().getDecorView(),Gravity.RIGHT|Gravity.TOP, 0, 0);
}
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
}));
},
isOff : function(type){
if(type==0&&he.elect==null) return true;
if(type==1&&he.shade==null) return true;
if(type==2&&he.torn==null) return true;
if(type==3&&he.buf==null) return true;
if(type==4&&he.x==null) return true;
if(type==5&&he.bind==null) return true;
if(type==6&&he.thor==null) return true;
if(type==7&&he.joker==null) return true;
if(type==8&&he.chat==null) return true;
if(type==9&&he.dark==null) return true;
else return false;
},
espOn : function(type, target){
if(type==0) he.elect = target;
else if(type==1) he.shade = target;
else if(type==2) he.torn = target;
else if(type==3) he.buf = target;
else if(type==4) he.x = target;
else if(type==5) he.bind = target;
else if(type==6) he.thor = target;
else if(type==7) he.joker = target;
else if(type==8) he.chat = target;
else if(type==9) he.dark = target;
},
espOff : function(type){
if(type==0) he.elect = null;
else if(type==1) he.shade = null;
else if(type==2) he.torn = null;
else if(type==3) he.buf = null;
else if(type==4) he.x = null;
else if(type==5) he.bind = null;
else if(type==6) he.thor = null;
else if(type==7) he.joker = null;
else if(type==8) he.chat = null;
else if(type==9) he.dark = null;
}

};


function mapData(){
var cache = ESP.read("mapData");
if(cache!="") eval(cache+"");
else ESP.toast("추가 파일이 없습니다.");
}


function addItem(tf){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var dialog = new AlertDialog.Builder(ctx, holoDark);
var layout = new LinearLayout(ctx);
layout.setOrientation(1);
layout.setGravity(Gravity.CENTER);
var layout1 = new LinearLayout(ctx);
layout1.setGravity(Gravity.CENTER);
layout1.setOrientation(0);
var loc1 = new TextView(ctx);
var loc2 = new EditText(ctx);
loc1.setText("ID : ");
loc1.setTextSize(18);
loc2.setHint("Item Id");
loc2.setInputType(number);
layout1.addView(loc1);
layout1.addView(loc2);
var layout2 = new LinearLayout(ctx);
layout2.setGravity(Gravity.CENTER);
layout2.setOrientation(0);
var loc3 = new TextView(ctx);
var loc4 = new EditText(ctx);
loc3.setText("Amount : ");
loc3.setTextSize(18);
loc4.setHint("Item Amount");
loc4.setInputType(number|number2);
layout2.addView(loc3);
layout2.addView(loc4);
var layout3 = new LinearLayout(ctx);
layout3.setGravity(Gravity.CENTER);
layout3.setOrientation(0);
var loc5 = new TextView(ctx);
var loc6 = new EditText(ctx);
loc5.setText("Demage : ");
loc5.setTextSize(18);
loc6.setHint("Item Demage");
loc6.setInputType(number);
layout3.addView(loc5);
layout3.addView(loc6);
layout.addView(layout1);
layout.addView(layout2);
layout.addView(layout3);
dialog.setTitle("Adding Items");
dialog.setView(layout);
dialog.setNegativeButton("취소", null);
dialog.setPositiveButton("확인", new DialogInterface.OnClickListener({
onClick: function(v){
if(tf){
addItemInventory(loc2.getText(), loc4.getText(), loc6.getText());
ESP.toast("아이템이 지급되었니다.");
}
else{
Level.dropItem(Entity.getX(playerTarget), Entity.getY(playerTarget), Entity.getZ(playerTarget), 0, loc2.getText(), loc4.getText(), loc6.getText());
ESP.toast(Player.getName(playerTarget)+"에게 아이템이 지급되었습니다.");
}
}
}));
dialog.show();
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
}));
}


function addItem2(){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var dialog = new AlertDialog.Builder(ctx, holoDark);
var layout = new LinearLayout(ctx);
layout.setOrientation(1);
var code = 0;
var types = ["Dark Tornado's Book", "책", "옵시디언", "빛나는 옵시디언", "스펀지", "먹물", "안장", "사슬 모자", "사슬 갑옷", "사슬 레깅스", "사슬 신발", "시계", "나침반"];
var codes = [511, 320, 49, 246, 19, 351, 329, 302, 303, 304, 305, 347, 345];
var spin = new android.widget.Spinner(ctx);
var adapter = new android.widget.ArrayAdapter(ctx, android.R.layout.simple_list_item_1, types);
spin.setAdapter(adapter);
spin.setOnItemSelectedListener(new android.widget.AdapterView.OnItemSelectedListener({
onItemSelected : function(parent, v, p) {
code = codes[p];
}
}));
layout.addView(spin);
var loc1 = new TextView(ctx);
var loc2 = new EditText(ctx);
loc1.setText("개수 : ");
loc1.setTextSize(18);
loc2.setHint("개수를 입력하세요...");
loc2.setInputType(number|number2);
layout.addView(loc1);
layout.addView(loc2);
var pad = dip2px(ctx, 5);
layout.setPadding(pad, pad, pad, pad);
var scroll = new ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setTitle("Add ESP Item");
dialog.setNegativeButton("취소", null);
dialog.setPositiveButton("확인", new DialogInterface.OnClickListener({
onClick: function(v){
addItemInventory(code, loc2.getText(), 0);
ESP.toast("지급되었습니다.");
}
}));
dialog.show();
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
}));
}


function skillInfoSelect(){
if(espCache5==""){
var cache = ESP.read("espData_4");
if(cache!=""){
eval(cache+"");
espCache5 = cache+"";
}
else{
ESP.toast("추가 파일이 없습니다.");
}
}
else{
eval(espCache5);
}

}


function makeScreenShotButton(){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
btnSS = new PopupWindow();
var button = new Button(ctx);
button.setText("SS");
button.setOnClickListener(new View.OnClickListener({
onClick: function(v){
ScriptManager.takeScreenshot("SB-Capture");
ESP.toast("Screen was captured.");
}
}));
if(emcolor==0) button.setBackgroundColor(Color.argb(70, 0, 0, 0));
else if(emcolor==1) button.setBackgroundColor(Color.argb(70, 255, 255, 255));
else if(emcolor==2) button.setBackgroundColor(Color.argb(0, 0, 0, 0));
btnSS.setContentView(button);
btnSS.setWidth(dip2px(ctx, 50));
btnSS.setHeight(dip2px(ctx, 48));
btnSS.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
btnSS.showAtLocation(ctx.getWindow().getDecorView(), Gravity.LEFT|Gravity.TOP, 2, 210);
}
catch(e){
ESP.toast(e+", "+e.lineNumber);
}
}
}));
}


function clockMoving(){
ctx.runOnUiThread(new java.lang.Runnable({
run : function(){
try{
var dialog = new AlertDialog.Builder(ctx, holoDark);
var layout = new LinearLayout(ctx);
layout.setOrientation(1);
var radios = new RadioGroup(ctx);
radios.setOrientation(1);
var radio = [];
var names = ["move1(teleport)", "move2(faster)", "move3(flash jump)", "move4(super jump)", "move off"];
for(var n in names){
radio[n] = new RadioButton(ctx);
radio[n].setText(names[n]);
radio[n].setId(n);
radios.addView(radio[n]);
}
radios.setOnCheckedChangeListener(new RadioGroup.OnCheckedChangeListener({
onCheckedChanged: function (group, checkedId){
if(checkedId==4){
admin2 = 5;
ESP.toast("Clock Moving Mode off");
}
else{
if(checkedId==0) ESP.toast("Teleportation Mode");
if(checkedId==1) ESP.toast("Faster Mode");
if(checkedId==2) ESP.toast("Flash Jump Mode");
if(checkedId==3) ESP.toast("Super Jump Mode");
admin2 = checkedId;
}
}
}));
layout.addView(radios);
var pad = dip2px(ctx, 5);
layout.setPadding(pad, pad, pad, pad);
var scroll = new ScrollView(ctx);
scroll.addView(layout);
dialog.setTitle("Clock Moving Mode");
dialog.setView(scroll);
dialog.setNegativeButton("확인",null);
dialog.show();
}
catch(e){
clientMessage("error"+e+", "+e.lineNumber);
}
}
}));
}


function compassType(){
ctx.runOnUiThread(new java.lang.Runnable({
run : function(){
try{
var dialog = new AlertDialog.Builder(ctx, holoDark);
var layout = new LinearLayout(ctx);
layout.setOrientation(1);
var radios = new RadioGroup(ctx);
radios.setOrientation(1);
var radio = [];
var names = ["Filling", "Deleting", "Filling&Deleting", "Rail Gun", "Wide Filling&Deleting", "Healing", "Killing", "Sending"];
for(var n in names){
radio[n] = new RadioButton(ctx);
radio[n].setText(names[n]+" Mode");
radio[n].setId(n+1);
radios.addView(radio[n]);
}
radios.setOnCheckedChangeListener(new RadioGroup.OnCheckedChangeListener({
onCheckedChanged: function (group, checkedId){
if(checkedId==1){
admin = 0;
ESP.toast("Filling Mode");
}
if(checkedId==2){
admin = 1;
ESP.toast("Deleting Mode");
}
if(checkedId==3){
admin = 2;
ESP.toast("Filling&Deleting Mode");
}
if(checkedId==4){
admin = 3;
ESP.toast("Rail Gun Mode");
}
if(checkedId==5){
admin = 4;
ESP.toast("Wide Filling&Deleting Mode");
}
if(checkedId==6){
admin = 5;
ESP.toast("Healing Mode");
}
if(checkedId==7){
admin = 6;
ESP.toast("Killing Mode");
}
if(checkedId==8){
admin = 8;
ESP.toast("Sending Mode");
}
}
}));
layout.addView(radios);
var pad = dip2px(ctx, 5);
layout.setPadding(pad, pad, pad, pad);
var scroll = new ScrollView(ctx);
scroll.addView(layout);
dialog.setTitle("Compass Function Type");
dialog.setView(scroll);
dialog.setNegativeButton("확인",null);
dialog.show();
}
catch(e){
clientMessage("error"+e+", "+e.lineNumber);
}
}
}));
}


function scriptInfoDialog(){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var dialog = new AlertDialog.Builder(ctx, holoDark);
var layout = new LinearLayout(ctx);
layout.setOrientation(1);
var text = new TextView(ctx);
text.setText("버전 : "+version+"\n능력자 : "+espn+"명\n제작자 : Dark Tornado\n제작자 블로그 : http://blog.naver.com/dt3141592\n제작자 홈페이지 : http://darktornado.dothome.co.kr\n안티 랙 : 작동중");
text.setTextSize(18);
var txt = new TextView(ctx);
txt.setText("능력자 수는 ESP-0에 속하는 Dark Tornado jr.와 Fire Expert, Hidden Ability를 제외한 수입니다.\nDark Tornado's Book 한 권으로 사슬갑옷세트, 옵시디언, 빛나는 옵시디언, 구운 돼지고기, 스폰지, 잉크(검은염료)가 조합이 가능하며, Dark Tornado's Book의 조합법은 책 한권입니다. 책은 책장을 터치하면 나옵니다.\n능력아이템은 사슬갑옷 세트이며, 모자 - 웃옷 - 바지 - 신발 순서대로 기본기 - 스킬1 - 스킬2 - 궁극기입니다.\n쿨타임은 10초(Air Bander, The Teleporter는 5초) - 20초 - 20초 - 2분(Mass Titan은 2분 30초)입니다.\n능력 활성화/비활성화는 능력 이름이 쓰여있는 표지판의 아랫쪽에 있는 옵시디언을 터치하시면, 빛나는 옵시디언으로 바뀌며 활성화되고, 다시 터치하시면 비활성화 됩니다. 맵을 나갔다 오거나, 블록런처를 껐다가 킨 경우, 빛나는 옵시디언 상태여도 능력은 비활성화 된 상태이며, 이 때는 능력을 껐다가 키시면 됩니다.\n능력자들의 스킬은 \"스킬 정보\"를 참고해 주세요.이 스크립트 경우, 15틱을 1초라고 가정하고 만들었습니다.따라서, 지속시간이나 쿨타임이 전체적으로 3/4로 줄어들어 있습니다.\nDark Tornado jr.은 서버장만 사용해 주시길 바랍니다.\n인공지능 능력자(A.I.S.)는 멀티 지원이 되지 않습니다. 정확히는 서버원들에게는 거미로 보입니다.\nFire Expert가 제작자 전용 능력인 이유는 설정상의 이유입니다.\n0.9.0~0.9.5에서는 일부 기능이 작동하지 않습니다.");
txt.setTextSize(18);
var ar = new TextView(ctx);
if(auto) ar.setText("자동수복 : 활성화");
else ar.setText("자동수복 : 비활성화");
ar.setTextSize(18);
var rm = new TextView(ctx);
if(anti3==0) rm.setText("몹 삭제 : 비활성화");
else rm.setText("몹 삭제 : 활성화");
rm.setTextSize(18);
var rd = new TextView(ctx);
if(anti4==0) rd.setText("드롭된 아이템 삭제 : 비활성화");
else rd.setText("드롭된 아이템 삭제 : 활성화");
rd.setTextSize(18);
var ps = new TextView(ctx);
if(passOnoff) ps.setText("패시브 스킬 : 활성화");
else ps.setText("패시브 스킬 : 비활성화");
ps.setTextSize(18);
var espo = new TextView(ctx);
if(espOnoff) espo.setText("초능력 : 활성화");
else espo.setText("초능력 : 비활성화");
espo.setTextSize(18);
var tp = new TextView(ctx);
if(town) tp.setText("마을보호 : 활성화");
else tp.setText("마을보호 : 비활성화");
tp.setTextSize(18);
var bgm = new TextView(ctx);
if(bgmOnoff) bgm.setText("배경음악 : 활성화");
else bgm.setText("배경음악 : 비활성화");
bgm.setTextSize(18);
var ct = new TextView(ctx);
if(adsc) ct.setText("쿨타임 표시 : 활성화");
else ct.setText("쿨타임 표시 : 비활성화");
ct.setTextSize(18);
var maker = new TextView(ctx);
maker.setText("\n© 2014-2017 Dark Tornado\n(http://blog.naver.com/dt3141592)\n");
maker.setGravity(Gravity.CENTER);
maker.setTextSize(15);
var button = new Button(ctx);
button.setText("초능력자 레벨");
button.setOnClickListener(new View.OnClickListener({
onClick: function(v){
ESP.skillInfo("초능력자 레벨(1~5)", "Fire User - 3.5\nWater Controller - 2\nNature Guardian- 3\nI am Creeper - 5\nSoil Master - 4\nThe Summoner - 2\nThe Luminous - 2.5\nThe Darkness - 4\nThe Freezer - 2\nDesert Maker - 2.5\nThe Vampire - 5\nAir Bander - 2.5\nI am Elsa - 3\nMass Titan - 3.5\nThunder Breaker - 5\nThe Binder - 2\nThe Mechanic - 4\nTNT Expert - 5\nTrap Creater - 4\nThe Healer - 2.5\nNether Man - 3\nCloud Manager - 3.5\nThe Assassin - 4\nArrow Shooter - 2\nThe Mage - 3\nThe Defenser - 2.5\nPoison Maven - 3.5\nGround Melter - 4.5\nHyper Freezer - 3.5\nThe Builder - 3\nThe Soldier - 3.5\nThe Assaulter - 4\nThe Burster - 5\nThe Warrior - 4\nOre Collecter - 3.5\nThe Rich - 3\nThe Teleporter - 3.5\nSpace Warpper - 3\nSurround Attacker - 4\nForce Shifter - 4.5\nI am ReinForce - 5\nMagnetism Distorter - 3\nI am Steve - 3.5\nI am Herobrine - 5\nThe Hermit - 3\nClay Gatherer - 3.5\nI am Kirito - 5\nJungle Former - 3.5\nI am Kanade - 5\nTime Traveler - 5\nThe Sniper - 4.5\nZombie Employer - 3\nThe Necromancer - 4\nI am Asuna - 4.5\nHoly Knight - 4\nSolar Paladin - 4\nLunar Wizard - 4\nHyper Ass5aulter - 5\nRandom Ability - 3.5\nReinforce Zwei - 4\nThe Decorater - 3.5\nHyper Summoner - 3\nClimate Changer - 3.5\nRemote Raider - 4\nWind Operater - 3.5\nEnergy Transfer - 3.5\nThe Genocider - 5\nServer Deminator - 5\nThe Outsider - 4\nI am Railgun - 5\nCopying Eye - 4\nDragon Trainer - 5\nHawk Eye - 4\nThe Solidifier - 3.5\nGravity Twister - 4\nHyper Assassin - 5\nSilent Killer - 3\nBlack Slayer - 4\nThe Slasher - 3.5\nNight Worker - 4\nLight Gemstone - 2\nThe Dracula - 5\nMushroom Grower - 3\nEnder Girl - 2\nTaiga Appearer - 2.5\nThe Ruiner - 4\nSwamp Generater - 3\nArch Summoner - 3\nArch Mage - 3.5\nPuella Magica - 2.5\nHyper Builder - 3\nScalar Increaser - 4\nVector Reflacter - 4.5\nTensor Veerer - 5\nArch Mechanic - 4\nThe Sealer - 3\nThe Archangel - 4\nWhite Eye - 3.5\nMental Out - 3\nWorld Editor - 3\n\nWater Controller sr. - 4.5\nAir Bander sr. - 4.5\nThe Binder sr. - 4.5\n\nDark Healer - 4\n\nFire Expert - 3.5\n\nDark Tornado jr. - 5.5(6)\n");
}
}));
layout.addView(text);
layout.addView(ar);
layout.addView(rm);
layout.addView(rd);
layout.addView(espo);
layout.addView(ps);
layout.addView(tp);
layout.addView(bgm);
layout.addView(ct);
layout.addView(txt);
if(mp2==false){
var txt2 = new TextView(ctx);
txt2.setText("스크립트와 맵의 버전이 다릅니다.");
txt2.setTextSize(18);
layout.addView(txt2);
}
if(mcpev==false){
var txt3 = new TextView(ctx);
txt3.setText("이 스크립트는 더 이상 0.8.1 이하를 (공식적으로) 지원하지 않습니다. MCPE를 0.10.5 이상으로 업데이트해주세요.");
txt3.setTextSize(18);
layout.addView(txt3);
}
layout.addView(maker);
layout.addView(button);
var ts = new Button(ctx);
ts.setText("테마곡 감상");
ts.setOnClickListener(new View.OnClickListener({
onClick: function(v){
if(!themeSong){
try{
media.reset();
media.setDataSource(sdcard+"/darkTornado/ESP-SB/ESP.mp3");
media.prepare();
media.start();
themeSong = true;
ESP.toast("Play");
}
catch(e){
ESP.toast("해당 경로에 음악파일이 없습니다.");
}
}
else if(themeSong){
media.reset();
themeSong = false;
ESP.toast("Stop");
}
}
}));
layout.addView(ts);
var blog = new Button(ctx);
blog.setText("제작자 블로그로 이동");
blog.setOnClickListener(new View.OnClickListener({
onClick: function(v){
blogDialog();
}
}));
layout.addView(blog);
var pad = dip2px(ctx, 5);
layout.setPadding(pad, pad, pad, pad);
var scroll = new ScrollView(ctx);
scroll.addView(layout);
dialog.setTitle("스크립트 정보");
dialog.setView(scroll);
dialog.setNegativeButton("확인",null);
dialog.show();
}
catch(e){
ESP.sbm(e+", "+e.lineNumber);
}
}
}));
}


function openCmdList(){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var dialog = new AlertDialog.Builder(ctx, holoDark);
var text = new TextView(ctx);
text.setText("/day - 낮으로 설정\n/night - 밤으로 설정\n/tp x y z - 해당 좌표로 순간이동\n/reset - 모든 능력 리셋\n/house - 운영자의 집으로 이동\n/hideout - 운영자의 은신처로 순간이동\n/능력자코드 off - 능력 비활성화\n/send 능력자코드 - 능력자를 입구로 전송. 전용맵의 아닐 경우, 서버장의 위치로 소환\n/kill 능력자코드 - 해당 능력사 사살\n/heal 능력자코드 - 해당 능력자의 체력을 30으로 회복\n/heal 능력자코드 n - 해당 능력자의 체력을 n으로 설정\n/on 능력자코드 닉네임 - 해당 플레이어를 해당 능력자로 설정(?)\n/kill 닉네임 - 해당 플레이어 사살\n/send - 해당 플레이어를 입구로 전송\n/.heal 닉네임 - 해당 플레이어의 체력을 20으로 회복\n/move1 - 시계로 터치시 터치한 곳으로 순간이동\n/move2 - 시계로 터치시 터치한 방향으로 이동\n/move3 - 시계로 터치시 터치한 방향으로 플래시 점프\n/move4 - 시계로 터치시 슈퍼점프(아픔)\n/fill - 나침반으로 터치하면 수동수복\n/delete - 나침반으로 터치하면 수동삭제\n/both - 나침반으로 터치하면 수동수복&삭제\n/auto - 플레이어의 위치를 기준으로 /both를 자동으로 실행\n/wide - 나침반으로 터치하면 범위를 늘린 /both를 실행\n/gun - 나침반으로 터치하면 바라보는 방향으로 폭발발사\n/kill - 나침반으로 때리면 맞은 엔티티 사망\n/heal - 나침반으로 때리면 맞은 엔티티의 체력상승. 땅 터치시 자신의 체력 상승\n\n/o 능력자코드 - 0.4.3+의 능력 중 해당 능력 활성화\n/o 능력자코드 off - 0.4.3+의 능력 중 해당 능력 비활성화\n/o all - 0.4.3+의 모든 능력 활성화\n/o off - 0.4.3+의 모든 능력 비활성화\n");
text.setTextSize(18);
var btn = new Button(ctx);
btn.setText("능력자코드");
btn.setOnClickListener(new View.OnClickListener(){
onClick: function(v){
ESP.skillInfo("능력자 코드", "Fire User - fire\nWater Controller - water\nNature Guardian - tree\nI am Creeper - creeper\nSoil Master - soil\nThe Summoner - summon\nThe Luminous - light\nThe Darkness - dark\nThe Freezer - ice\nDesert Maker - sand\nThe Vampire - blood\nAir Bander - air\nThunder Breaker - thunder\nI am Elsa - elsa\nMass Titan - titan\nThe Binder - bind\nThe Mechanic - meca\nTNT Expert - tnt\nTrap Creater - trap\nThe Healer - heal\nNether Man - nether\nClould Manager - cloud\nThe Assassin - ass\nArrow Shooter - arrow\nThe Defenser - defense\nThe Mage - mage\nPoison Maven - poison\nGround Melter - melt\nHyper Freezer - hfreeze\nThe Builder - builder\nThe Soldier - soldier\nThe Assaulter - as\nThe Burster - burst\nTheWarrior - warrior\nOre Collecter - ore\nThe Rich - rich\nThe Teleporter - tp\nSpace Warpper - space\nSurround Attacker - sattack\nForce Shifter - force\nI am Reinforce - rein\nMagnetism Distorter - magnet\nI am Steve - steve\nI am Herobrine - hero\nThe Hermit - hermit\nClay Gatherer - clay\nI am Kirito - kirito\nJungle Former - jungle\nI am Kanade - kanade\nTime Traveler - time\nThe Sniper - snipe\nZombie Employer - zombie\nThe Necromancer - necro\nI am Asuna - asuna\nHoly Knight - holy\nSolar Paladin - solar\nLunar Wizard - lunar\nHyper Assaulter - has\nRandom Ability - random\nReinforce Zwei - zwei\nThe Decorater - deco\nHyper Sumnoner - hsum\nClimate Changer - climate\nRemote Raider - raid\nWind Operater - wind\nEnergy Transfer - energy\nThe Genocider - geno\nServer Dominator - server\nThe Outsider - out\nI am Railgun - rgun\nCopying Eye - copy\nDragon Trainer - dragon\nHawk Eye - hawk\nThe Solidifier - solid\nGravity Twister - gravity\nHyper Assassin - hass\nSilent Killer - sikill\nBlack Slayer - black\nThe Slasher - slash\nNight Worker - night\nLight Gemstone - gem\nThe Dracula - dra\nMushroom Grower - mush\nEnder Girl - ender\nTaiga Appearer - taiga\nThe Ruiner - ruin\nSwamp Generater - swamp\nArch Summoner - asum\nArch Mage - amage\nPuella Magica - puella\nHyper Builder - hbuild\nScalar Increaser - scalar\nVector Reflacter - vector\nTensor Veerer - tensor\nArch Mechanic - ameca\nThe Sealer - seal\nThe Archangel - angel\nWhite Eye - white\nMental Out - mental\nWorld Editor - world\n\nDark Tornado jr. - dtj\nFire Expert - fe\n\n\n <0.4.3+>\nFire Master - fire\nWater Controller - water\nNature Guardian - tree\nI am Creeper - creeper\nEarth Bander - soil\nThe Summoner - summon\nThe Luminous - light\nThe Darkness - dark\nThe Freezer - ice\n");
}
});
var layout = new LinearLayout(ctx);
layout.setOrientation(1);
layout.addView(text);
layout.addView(btn);
var pad = dip2px(ctx, 5);
layout.setPadding(pad, pad, pad, pad);
var scroll = new ScrollView(ctx);
scroll.addView(layout);
dialog.setTitle("명령어 목록");
dialog.setView(scroll);
dialog.setNegativeButton("확인",null);
dialog.show();
}
catch(e){
ESP.sbm(e+", "+e.lineNumber);
}
}
}));
}


function qA(){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var dialog = new AlertDialog.Builder(ctx, holoDark);
var layout = new LinearLayout(ctx);
layout.setOrientation(1);
var btn = [];
var ques = ["능력 어떻게 쓰나요?", "멀티가 안돼요", "운영자의 은신처 어떻게 가나요?", "숨겨진 능력이 작동을 안해요", "다른사람 맵 들어갈 때 오류떠요", "멀티되나요?", "공유나 리뷰해도 되나요?", "0.13.x에서 일부 능력을 사용하면 팅겨요"];
var anss = ["A. 도움말 버튼이나 스크립트 정보 버튼을 눌러보세요. 아니면 명령어 /도움말을 치시면 됩니다.", "A. 0.9.0 이상의 경우, 일부 폰에서는 멀티가 되지 않습니다(왜 그런지는 mojang에게 물어보세요. 전 모릅니다.). 인벤에디터의 월드정보수정에서 old를 flat이나 infinite로 바꾸사면 됩니다.\n는 무슨 전용맵 자체를 이미 flat로 바꾸어서 공유하고 있습니다.", "A. Admin's House에 있는 탁자(참나무 반 블록)를 터치하시면 은신처로 이동되며, 은신처의 벽에 있는 철창을 터치하시면 Admin's House로 돌아옵니다.", "A. 다른 능력자 스크립트입니다.", "A. 전용맵인지 아닌지를 구분하기 위해, 맵 이름에다가 .toString();랑 .split를();을 갈겨서 구분하는데, 서버 접속 시에는 맵 이름이 null이라서 블록런처가 빼애액 거리는겁니다.", "A. 네, 됩니다. 단, 서버장만 적용하셔야 오류(?)가 안생깁니다.", "A. 리뷰, 무단공유는 허용되어있습니다. 단 비덧공유는 불허하며, 무단수정이나 판매, 도용 및 제작자를 속이는 행위는 불허합니다.", "A. 블록런처를 1.11.2 이상으로 업데이트 하시면 됩니다. 서버원 tp에 사용되는 함수인 Entity.rideAnimal();를 사용하면 팅기는 오류는 블록런처 1.11.2에서 수정되었습니다."];
for(var n in ques){
btn[n] = new Button(ctx);
btn[n].setText(ques[n]);
btn[n].setId(n);
btn[n].setOnClickListener(new View.OnClickListener(){
onClick: function(v){
ESP.skillInfo(ques[v.getId()], anss[v.getId()]);
}
});
layout.addView(btn[n]);
}
var scroll = new ScrollView(ctx);
scroll.addView(layout);
dialog.setTitle("Q & A");
dialog.setView(scroll);
dialog.setNegativeButton("닫기",null);
dialog.show();
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
}));
}


function worldEdit(){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
menu5 = new PopupWindow();
var layout = new LinearLayout(ctx);
layout.setOrientation(1);
var text = new TextView(ctx);
text.setText("지형 수정\n");
text.setTextSize(23);
text.setGravity(Gravity.CENTER);
var p1 = new Button(ctx);
p1.setText("지점 1 입력");
p1.setOnClickListener(new View.OnClickListener(){
onClick: function(v){
inputPoint(false);
}
});
var p2 = new Button(ctx);
p2.setText("지점 2 입력");
p2.setOnClickListener(new View.OnClickListener(){
onClick: function(v){
inputPoint(true);
}
});
var p1w = new Array(3);
var p2w = new Array(3);
var set = new Button(ctx);
var replace = new Button(ctx);
set.setText("블록 설정");
replace.setText("블록 변경");
set.setOnClickListener(new View.OnClickListener(){
onClick: function(v){
p1w = [Math.min(p0w[0][0], p0w[1][0]), Math.min(p0w[0][1], p0w[1][1]), Math.min(p0w[0][2], p0w[1][2])];
p2w = [Math.max(p0w[0][0], p0w[1][0]), Math.max(p0w[0][1], p0w[1][1]), Math.max(p0w[0][2], p0w[1][2])];
setDialog(p1w[0], p1w[1], p1w[2], p2w[0], p2w[1], p2w[2]);
}
});
replace.setOnClickListener(new View.OnClickListener(){
onClick: function(v){
p1w = [Math.min(p0w[0][0], p0w[1][0]), Math.min(p0w[0][1], p0w[1][1]), Math.min(p0w[0][2], p0w[1][2])];
p2w = [Math.max(p0w[0][0], p0w[1][0]), Math.max(p0w[0][1], p0w[1][1]), Math.max(p0w[0][2], p0w[1][2])];
replaceDialog(p1w[0], p1w[1], p1w[2], p2w[0], p2w[1], p2w[2]);
}
});
var exit = new Button(ctx);
exit.setText("EXIT");
exit.setOnClickListener(new View.OnClickListener(){
onClick: function(v){
if(menu5!=null){
menu5.dismiss();
menu5 = null;
}
}
});
layout.addView(text);
layout.addView(p1);
layout.addView(p2);
layout.addView(set);
layout.addView(replace);
layout.addView(exit);
var scroll = makeScroll(layout, menu5);
menu5.setContentView(scroll);
menu5.setBackgroundDrawable(new ColorDrawable(Color.BLACK));
menu5.showAtLocation(ctx.getWindow().getDecorView(),Gravity.RIGHT|Gravity.TOP, 0, 0);
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
}));
}


function inputPoint(tf){
var dialog = new AlertDialog.Builder(ctx, holoDark);
var layout = new LinearLayout(ctx);
layout.setOrientation(1);
var p1x = new EditText(ctx);
var p1y = new EditText(ctx);
var p1z = new EditText(ctx);
p1x.setHint("x좌표");
p1y.setHint("y좌표");
p1z.setHint("z좌표");
p1x.setInputType(number|number2);
p1y.setInputType(number|number2);
p1z.setInputType(number|number2);
var p1t = new Button(ctx);
p1t.setText("플레이어(머리)의 좌표로 설정");
p1t.setOnClickListener(new View.OnClickListener(){
onClick: function(v){
p1x.setText(Math.floor(Entity.getX(ad))+"");
p1y.setText(Math.floor(Entity.getY(ad))+"");
p1z.setText(Math.floor(Entity.getZ(ad))+"");
}
});
layout.addView(p1x);
layout.addView(p1y);
layout.addView(p1z);
layout.addView(p1t);
var pad = dip2px(ctx, 5);
layout.setPadding(pad, pad, pad, pad);
var scroll = new ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
if(tf) dialog.setTitle("지점 2 선택");
else dialog.setTitle("지점 1 선택");
dialog.setNegativeButton("취소", null);
dialog.setPositiveButton("확인", new DialogInterface.OnClickListener({
onClick: function(v){
if(tf) p0w[1] = [p2x.getText(), p2y.getText(), p2z.getText()];
else p0w[0] = [p1x.getText(), p1y.getText(), p1z.getText()];
ESP.toast("설정되었습니다.");
}
}));
dialog.show();
}


function setDialog(x1, y1, z1, x2, y2, z2){
var dialog = new AlertDialog.Builder(ctx, holoDark);
var layout = new LinearLayout(ctx);
layout.setOrientation(1);
var loc1 = new TextView(ctx);
var loc2 = new EditText(ctx);
var loc3 = new TextView(ctx);
var loc4 = new EditText(ctx);
loc1.setText("블록 아이디 : ");
loc1.setTextSize(18);
loc2.setHint("블록 아이디를 입력하세요");
loc2.setInputType(number);
loc3.setText("블록 데미지 : ");
loc3.setTextSize(18);
loc4.setHint("블록 데미지를 입력하세요");
loc4.setInputType(number);
layout.addView(loc1);
layout.addView(loc2);
layout.addView(loc3);
layout.addView(loc4);
var pad = dip2px(ctx, 5);
layout.setPadding(pad, pad, pad, pad);
var scroll = new ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setTitle("블록설정");
dialog.setNegativeButton("취소", null);
dialog.setPositiveButton("확인", new DialogInterface.OnClickListener({
onClick: function(v){
for(var xx=x1;xx<x2+1;xx++)
for(var yy=y1;yy<y2+1;yy++)
for(var zz=z1;zz<z2+1;zz++)
setTile(xx, yy, zz, loc2.getText(), loc4.getText());
ESP.toast("설정되었습니다.");
}
}));
dialog.show();
}


function replaceDialog(x1, y1, z1, x2, y2, z2){
var dialog = new AlertDialog.Builder(ctx, holoDark);
var layout = new LinearLayout(ctx);
layout.setOrientation(1);
var loc0 = new TextView(ctx);
var loc1 = new TextView(ctx);
var loc2 = new EditText(ctx);
var loc3 = new TextView(ctx);
var loc4 = new EditText(ctx);
var loc5 = new TextView(ctx);
var loc6 = new TextView(ctx);
var loc7 = new EditText(ctx);
var loc8 = new TextView(ctx);
var loc9 = new EditText(ctx);
loc0.setText("이 블록(들)을");
loc1.setText("블록 아이디 : ");
loc1.setTextSize(18);
loc2.setHint("블록 아이디를 입력하세요");
loc2.setInputType(number);
loc3.setText("블록 데미지 : ");
loc3.setTextSize(18);
loc4.setHint("블록 데미지를 입력하세요");
loc4.setInputType(number);
loc5.setText("\n이 블록(들)으로");
loc6.setText("블록 아이디 : ");
loc6.setTextSize(18);
loc7.setHint("블록 아이디를 입력하세요");
loc7.setInputType(number);
loc8.setText("블록 데미지 : ");
loc8.setTextSize(18);
loc9.setHint("블록 데미지를 입력하세요");
loc9.setInputType(number);
layout.addView(loc0);
layout.addView(loc1);
layout.addView(loc2);
layout.addView(loc3);
layout.addView(loc4);
layout.addView(loc5);
layout.addView(loc6);
layout.addView(loc7);
layout.addView(loc8);
layout.addView(loc9);
var pad = dip2px(ctx, 5);
layout.setPadding(pad, pad, pad, pad);
var scroll = new ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setTitle("블록변경");
dialog.setNegativeButton("취소", null);
dialog.setPositiveButton("확인", new DialogInterface.OnClickListener({
onClick: function(v){
for(var xx=x1;xx<x2+1;xx++)
for(var yy=y1;yy<y2+1;yy++)
for(var zz=z1;zz<z2+1;zz++)
if(getTile(xx, yy, zz)==loc2.getText()){
if(loc4.getText()==""){
setTile(xx, yy, zz, loc7.getText(), loc9.getText());
}
else{
if(Level.getData(xx, yy, zz)==loc4.getText()){
setTile(xx, yy, zz, loc7.getText(), loc9.getText());
}
}
}
ESP.toast("변경되었습니다.");
}
}));
dialog.show();
}


function aiESP(){
ctx.runOnUiThread(new java.lang.Runnable({
run : function(){
try{
var dialog = new AlertDialog.Builder(ctx, holoDark);
var layout = new LinearLayout(ctx);
layout.setOrientation(1);
var radios = new RadioGroup(ctx);
radios.setOrientation(1);
var radio = [];
var types = ["fire", "water", "tree", "creeper", "soil", "summon"];
var names = ["Fire User", "Water Controller", "Nature Guardian", "I am Creeper", "Soil Master", "The Summoner"];
for(var n in names){
radio[n] = new RadioButton(ctx);
radio[n].setText(names[n]);
radio[n].setId(n);
radios.addView(radio[n]);
}
radios.setOnCheckedChangeListener(new RadioGroup.OnCheckedChangeListener({
onCheckedChanged: function (group, checkedId){
aiType = types[checkedId];
ESP.toast(names[checkedId]+" was selected");
}
}));
layout.addView(radios);
var pad = dip2px(ctx, 5);
layout.setPadding(pad, pad, pad, pad);
var scroll = new ScrollView(ctx);
scroll.addView(layout);
dialog.setTitle("초능력자 대전 인공지능 (A.I.S.)");
dialog.setView(scroll);
dialog.setNegativeButton("취소",null);
dialog.setPositiveButton("확인", new DialogInterface.OnClickListener({
onClick: function(v){
ESP.toast("소환하려면 터치하세요.");
aiOn = true;
}
}));
dialog.show();
}
catch(e){
clientMessage("error"+e+", "+e.lineNumber);
}
}
}));
}


function makePMButton(){
if(ESP.read("playerManager")=="") ESP.toast("추가 파일이 없습니다.");
else eval(ESP.read("playerManager"));
}


function playerHealthSet(){
var dialog = new AlertDialog.Builder(ctx, holoDark);
var layout = new LinearLayout(ctx);
layout.setOrientation(1);
var loc1 = new TextView(ctx);
var loc2 = new EditText(ctx);
loc1.setText("체력 : ");
loc1.setTextSize(18);
loc2.setHint("체력을 입력하세요");
loc2.setInputType(number);
layout.addView(loc1);
layout.addView(loc2);
var pad = dip2px(ctx, 5);
layout.setPadding(pad, pad, pad, pad);
var scroll = new ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setTitle("체력설정 : "+Player.getName(playerTarget));
dialog.setNegativeButton("취소", null);
dialog.setPositiveButton("확인", new DialogInterface.OnClickListener({
onClick: function(v){
ESP.setHealth(playerTarget, loc2.getText());
ESP.toast("체력이 "+loc2.getText()+"로 설정되었습니다.");
}
}));
dialog.show();
}


function bgmPlayer(tf){
if(tf){
try{
var area = checkArea();
bgm.reset();
if(area==0){
bgm.setDataSource(sdcard+"/darkTornado/ESP-SB/ESP.mp3");
bgmTime = 2900;
}
else if(area==1){
if(nightCheck()){
bgm.setDataSource(sdcard+"/darkTornado/ESP-SB/easterEgg/Putting to Death.mp3");
bgmTime = 2500;
}
else{
bgm.setDataSource(sdcard+"/darkTornado/ESP-SB/easterEgg/R.mp3");
bgmTime = 2100;
}
}
else if(area==2){
bgm.setDataSource(sdcard+"/darkTornado/ESP-SB/easterEgg/Under this World.mp3");
bgmTime = 2400;
}
else if(area==3){
bgm.setDataSource(sdcard+"/darkTornado/ESP-SB/easterEgg/The End.mp3");
bgmTime = 2800;
}
else if(area==4){
bgm.setDataSource(sdcard+"/darkTornado/ESP-SB/easterEgg/Time Stop.mp3");
bgmTime = 3250;
}
else if(area==5){
bgm.setDataSource(sdcard+"/darkTornado/ESP-SB/easterEgg/ESI.mp3");
bgmTime = 3950;
}
else if(area==6){
if(nightCheck()){
bgm.setDataSource(sdcard+"/darkTornado/ESP-SB/Dark Battle.mp3");
bgmTime = 3700;
}
else{
bgm.setDataSource(sdcard+"/darkTornado/ESP-SB/We Must Fight.mp3");
bgmTime = 3300;
}
}
else if(area==7){
bgm.setDataSource(sdcard+"/darkTornado/ESP-SB/easterEgg/Lost.mp3");
bgmTime = 3100;
}
else if(area==8){
bgm.setDataSource(sdcard+"/darkTornado/ESP-SB/easterEgg/In the Forest.mp3");
bgmTime = 2400;
}
else if(area==9){
bgm.setDataSource(sdcard+"/darkTornado/ESP-SB/easterEgg/Sad Story From Under World.mp3");
bgmTime = 2800;
}
else if(area==10){
bgm.setDataSource(sdcard+"/darkTornado/ESP-SB/easterEgg/Force of Fire.mp3");
bgmTime = 2440;
}
else if(area==11){
bgm.setDataSource(sdcard+"/darkTornado/ESP-SB/easterEgg/Sparkling Water.mp3");
bgmTime = 3200;
}
else if(area==12){
bgm.setDataSource(sdcard+"/darkTornado/ESP-SB/easterEgg/Power of Earth.mp3");
bgmTime = 3000;
}
else if(area==13){
bgm.setDataSource(sdcard+"/darkTornado/ESP-SB/easterEgg/Flying.mp3");
bgmTime = 1980;
}
else if(area==14){
bgm.setDataSource(sdcard+"/darkTornado/ESP-SB/easterEgg/The Forest.mp3");
bgmTime = 2940;
}
bgm.prepare();
bgm.start();
bgmOnoff = true;
ESP.toast("BGM on");
}
catch(e){
ESP.toast("해당 경로에 음악파일이 없습니다.");
}
}
else if(!tf&&bgmOnoff){
bgm.reset();
bgmOnoff = false;
ESP.toast("BGM off");
}

}


function checkArea(){
if(inTheWay) return 7;
var px, pz;
px = Math.round(Entity.getX(ad)-0.5);
pz = Math.round(Entity.getZ(ad)-0.5);
if(px>=1000&&px<=1082&&pz>=1000&&pz<=1063) return 0;
else if(px>=1995&&px<=2137&&pz>=-1052&&pz<=-944) return 1;
else if(px>=-1057&&px<=-992&&pz>=992&&pz<=1066) return 2;
else if(px>=-1044&&px<=-994&&pz>=-1028&&pz<=-972) return 3;
else if(px>=996&&px<=1004&&pz>=1496&&pz<=1504) return 4;
else if(px>=-1011&&px<=-986&&pz>=2994&&pz<=3019) return 5;
else if(px>=2138&&px<=2164&&pz>=-1052&&pz<=-987) return 8;
else if(Player.getY()<12&&((px>=168&&px<=179&&pz>=9&&pz<=57)||(px>=179&&px<=209&&pz>=26&&pz<=57))) return 9;
else if(px>=1958&&px<=1969&&pz>=-1509&&pz<=-1492) return 10;
else if(px>=2028&&px<=2046&&pz>=-1512&&pz<=-1489) return 11;
else if(px>=1990&&px<=2009&&pz>=-1467&&pz<=-1453) return 12;
else if(px>=1988&&px<=2011&&pz>=-1549&&pz<=-1533) return 13;
else if(px>=1952&&px<=2054&&pz>=-1556&&pz<=-1446) return 14;
else return 6;

}


function blogDialog(){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var dialog = new AlertDialog.Builder(ctx, holoDark);
var layout = new LinearLayout(ctx);
layout.setOrientation(1);
var text = new TextView(ctx);
text.setText("제작자(Dark Tornado)의 블로그로 이동하시겠습니까?");
text.setTextSize(18);
layout.addView(text);
var pad = dip2px(ctx, 5);
layout.setPadding(pad, pad, pad, pad);
var scroll = new ScrollView(ctx);
scroll.addView(layout);
dialog.setTitle("블로그로 이동");
dialog.setView(scroll);
dialog.setNegativeButton("취소",null);
dialog.setPositiveButton("확인", new DialogInterface.OnClickListener({
onClick: function(v){
try{
var link = new android.content.Intent(android.content.Intent.ACTION_VIEW, android.net.Uri.parse("http://blog.naver.com/dt3141592"));
ctx.startActivity(link);
}
catch(e){
clientMessage(e+", "+e.lineNumber)
}
}
}));
dialog.show();
}
catch(e){
ESP.sbm(e+", "+e.lineNumber);
}
}
}));
}


function scriptVersionCheck(){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var dialog = new AlertDialog.Builder(ctx, holoDark);
var layout = new LinearLayout(ctx);
layout.setOrientation(1);
var loadTxt = new android.webkit.WebView(ctx);
loadTxt.setWebChromeClient(new android.webkit.WebChromeClient());
loadTxt.setWebViewClient(new android.webkit.WebViewClient());
loadTxt.loadUrl("http://darktornado.dothome.co.kr/000+/ESP-SB.txt");
layout.addView(loadTxt);
var scroll = new ScrollView(ctx);
scroll.addView(layout);
dialog.setTitle("버전 확인");
dialog.setView(scroll);
dialog.setNegativeButton("닫기", null);
dialog.setPositiveButton("블로그로 이동", new DialogInterface.OnClickListener({
onClick: function(v){
try{
blogDialog();
}
catch(e){
clientMessage(e+", "+e.lineNumber)
}
}
}));
dialog.show();
}
catch(e){
ESP.sbm(e+", "+e.lineNumber);
}
}
}));
}


//Semi ESP Manager
function openSemiESPManager(){
if(clientMode==""){
var cache = ESP.read("clientMode");
if(cache!=""){
eval(cache+"");
clientMode = cache+"";
}
else{
ESP.toast("추가 파일이 없습니다.");
}
}
else{
eval(clientMode);
}
}


function goToPlayer(){
ESP.toast("플레이어를 선택하세요");
var player = null;
var players = [];
for each(var e in Entity.getAll()){
if(ESP.isPlayer(e)){
players.push(e);
}
}
var dialog = new AlertDialog.Builder(ctx, holoDark);
var layout = new LinearLayout(ctx);
layout.setOrientation(1);
var radios = new RadioGroup(ctx);
radios.setOrientation(1);
var radio = [];
for(var n=0;n<players.length;n++){
radio[n] = new RadioButton(ctx);
radio[n].setText(Player.getName(players[n]));
radio[n].setId(n);
radios.addView(radio[n]);
}
radios.setOnCheckedChangeListener(new RadioGroup.OnCheckedChangeListener({
onCheckedChanged: function (group, checkedId){
player = players[checkedId];
}
}));
layout.addView(radios);
var pad = dip2px(ctx, 5);
layout.setPadding(pad, pad, pad, pad);
var scroll = new ScrollView(ctx);
scroll.addView(layout);
dialog.setTitle("Go to Player");
dialog.setView(scroll);
dialog.setNegativeButton("취소", null);
dialog.setPositiveButton("확인", new DialogInterface.OnClickListener({
onClick: function(v){
Entity.setPosition(ESP.getUser(), Entity.getX(player), Entity.getY(player)+0.2, Entity.getZ(player));
ESP.toast("이동되었습니다");
}
}));
dialog.show();
}


//Sealed ESP Manager
function openSEManager(){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
menuH = new PopupWindow();
var layout = new LinearLayout(ctx);
layout.setOrientation(1);
var text = new TextView(ctx);
text.setText("SE Manager\n");
text.setTextSize(23);
text.setGravity(Gravity.CENTER);
text.setOnClickListener(new View.OnClickListener(){
onClick: function(v){
if(hhhhh==0){
hhhhh = 150;
ESP.toast("They are coming...");
}
else{
hhhhh = 0;
}
}
});
layout.addView(text);
var radios = new RadioGroup(ctx);
radios.setOrientation(1);
var radio = [];
var names = ["The Demon", "Hyper Burster", "Hyper Genocider", "Lolita Complex", "The Avenger", "Hidden Blade", "The Gambler", "Dark Reaper", "Imagine Vanisher", "The Overwhelmer", "I am B.R.S.", "The C", "The Doctor", "Hyper Teleporter", "Evil Eye"];
for(var n in names){
radio[n] = new RadioButton(ctx);
radio[n].setText(names[n]);
radio[n].setId(n);
radios.addView(radio[n]);
}
radios.setOnCheckedChangeListener(new RadioGroup.OnCheckedChangeListener({
onCheckedChanged: function (group, checkedId){
seNum = checkedId;
}
}));
layout.addView(radios);
var of = new ToggleButton(ctx);
of.setTextOn("ESP-SE on");
of.setTextOff("ESP-SE off");
of.setChecked(se.tf);
of.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(toggle, onoff){
se.tf = onoff;
}
}));
layout.addView(of);
var medit = new Button(ctx);
medit.setText("Manage");
medit.setOnClickListener(new View.OnClickListener(){
onClick: function(v){
SE.espManage(seNum);
}
});
layout.addView(medit);
var mhexit = new Button(ctx);
mhexit.setText("EXIT");
mhexit.setOnClickListener(new View.OnClickListener(){
onClick: function(v){
if(menuH!=null){
menuH.dismiss();
menuH = null;
}
}
});
layout.addView(mhexit);
var layout2 = new LinearLayout(ctx);
layout2.setOrientation(0);
layout2.setGravity(Gravity.CENTER);
var lol = new Button(ctx);
lol.setText("←");
lol.setOnClickListener(new View.OnClickListener(){
onClick: function(v){
se.locate = 1;
menuH.dismiss();
menuH = null;
openSEManager();
}
});
layout2.addView(lol);
var loc = new Button(ctx);
loc.setText("○");
loc.setOnClickListener(new View.OnClickListener(){
onClick: function(v){
se.locate = 0;
menuH.dismiss();
menuH = null;
openSEManager();
}
});
layout2.addView(loc);
var lor = new Button(ctx);
lor.setText("→");
lor.setOnClickListener(new View.OnClickListener(){
onClick: function(v){
se.locate = 2;
menuH.dismiss();
menuH = null;
openSEManager();
}
});
layout2.addView(lor);
layout.addView(layout2);

var scroll = makeScroll(layout, menuH);
menuH.setContentView(scroll);
menuH.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth()*1/3);
menuH.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight()*4/5);
menuH.setBackgroundDrawable(new ColorDrawable(Color.argb(180, 0, 0, 0)));
if(se.locate==0) menuH.showAtLocation(ctx.getWindow().getDecorView(),Gravity.CENTER, 0, 0);
else if(se.locate==1) menuH.showAtLocation(ctx.getWindow().getDecorView(),Gravity.LEFT|Gravity.CENTER, 0, 0);
else if(se.locate==2) menuH.showAtLocation(ctx.getWindow().getDecorView(),Gravity.RIGHT|Gravity.CENTER, 0, 0);
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
}));
}


function adminPass(){
ctx.runOnUiThread(new java.lang.Runnable({
run : function(){
try{
var dialog = new AlertDialog.Builder(ctx, holoDark);
var layout = new LinearLayout(ctx);
layout.setOrientation(1);
var text = new EditText(ctx);
text.setHint("ID를 입력하세요...")
var txt = new EditText(ctx);
txt.setHint("비밀번호를 입력하세요...")
txt.setInputType(number);
layout.addView(text);
layout.addView(txt);
var pad = dip2px(ctx, 5);
layout.setPadding(pad, pad, pad, pad);
var scroll = new ScrollView(ctx);
scroll.addView(layout);
dialog.setTitle("ESI 권한이 필요합니다...");
dialog.setView(scroll);
dialog.setNegativeButton("취소",null);
dialog.setPositiveButton("확인", new DialogInterface.OnClickListener({
onClick: function(v){
var esiId = text.getText();
var esiPass = txt.getText();
eval(function(p,a,c,k,e,r){e=function(c){return c.toString(a)};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('l f=["m d",e,"h j",k,"a b n",o,p];3(4=="c g"){3(5=="i"){0.1("6 0 7 8");9()}2{0.1("비밀번호가 다릅니다.")}}2 3(4=="a b q"){3(5=="r"){0.1("6 0 7 8");9()}2{0.1("비밀번호가 다릅니다.")}}2 3(4=="s t"){3(5=="u"){0.1("6 0 7 8");9()}2{0.1("비밀번호가 다릅니다.")}}2{0.1("해당 아이디는 존재하지 않습니다.")}',31,31,'ESP|toast|else|if|esiId|esiPass|Sealed|Manager|on|openSEManager|Liber|de|Dark|Hurricane|3289|passs|Tornado|Master|3014|Transfer|1234|var|Bright|Lumen|0321|6254|Obscurum|1237|Skill|Drottinn|2580'.split('|'),0,{}));
}
}));
dialog.show();
}
catch(e){
clientMessage("error"+e+", "+e.lineNumber);
}
}
}));
}


var SE = {
espManage : function(type){
var names = ["The Demon", "Hyper Burster", "Hyper Genocider", "Lolita Complex", "The Avenger", "Hidden Blade", "The Gambler", "Dark Reaper", "Imagine Vanisher", "The Overwhelmer", "I am B.R.S.", "The C", "The Doctor", "Hyper Teleporter", "Evil Eye"];
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
if(SE.isOff(type)){
var player = null;
var players = [];
for each(var e in Entity.getAll()){
if(ESP.isPlayer(e)) players.push(e);
}
var dialog = new AlertDialog.Builder(ctx, holoDark);
var layout = new LinearLayout(ctx);
layout.setOrientation(1);
var radios = new RadioGroup(ctx);
radios.setOrientation(1);
var radio = [];
for(var n in players){
radio[n] = new RadioButton(ctx);
radio[n].setText(Player.getName(players[n]));
radio[n].setId(n);
radios.addView(radio[n]);
}
radios.setOnCheckedChangeListener(new RadioGroup.OnCheckedChangeListener({
onCheckedChanged: function (group, checkedId){
player = players[checkedId];
}
}));
layout.addView(radios);
var pad = dip2px(ctx, 5);
layout.setPadding(pad, pad, pad, pad);
var scroll = new ScrollView(ctx);
scroll.addView(layout);
dialog.setTitle(names[type]+" on");
dialog.setView(scroll);
dialog.setNegativeButton("취소", null);
dialog.setPositiveButton("확인", new DialogInterface.OnClickListener({
onClick: function(v){
SE.on(type, player);
ESP.toast(names[type]+" on.");
}
}));
dialog.show();
}
else{
var work = null;
var dialog = new AlertDialog.Builder(ctx, holoDark);
var layout = new LinearLayout(ctx);
layout.setOrientation(1);
var user = new TextView(ctx);
user.setText("  User : "+Player.getName(eval(se.code[type])));
user.setTextSize(18);
layout.addView(user);
var radios = new RadioGroup(ctx);
radios.setOrientation(1);
var radio = [];
for(var n=0;n<4;n++){
radio[n] = new RadioButton(ctx);
radio[n].setText(se.menus[n]);
radio[n].setId(n);
radios.addView(radio[n]);
}
radios.setOnCheckedChangeListener(new RadioGroup.OnCheckedChangeListener({
onCheckedChanged: function (group, checkedId){
work = checkedId;
}
}));
layout.addView(radios);
var pad = dip2px(ctx, 5);
layout.setPadding(pad, pad, pad, pad);
var scroll = new ScrollView(ctx);
scroll.addView(layout);
dialog.setTitle(names[type]);
dialog.setView(scroll);
dialog.setNegativeButton("취소", null);
dialog.setPositiveButton("확인", new DialogInterface.OnClickListener({
onClick: function(v){
if(work==0){
SE.off(type);
ESP.toast(names[type]+" off");
}
else if(work==1){
ESP.send(eval(se.code[type]));
ESP.toast(names[type]+" was sent");
}
else if(work==2){
ESP.kill(eval(se.code[type]));
ESP.toast(names[type]+" was killed");
}
else if(work==3){
ESP.heal(eval(se.code[type]));
ESP.toast(names[type]+" was healed");
}
}
}));
dialog.show();
}
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
}));
},
isOff : function(type){
if(type==0&&se.demon==null) return true;
if(type==1&&se.burst==null) return true;
if(type==2&&se.geno==null) return true;
if(type==3&&se.lolita==null) return true;
if(type==4&&se.avenge==null) return true;
if(type==5&&se.hide==null) return true;
if(type==6&&se.gamble==null) return true;
if(type==7&&se.reaper==null) return true;
if(type==8&&se.ima==null) return true;
if(type==9&&se.over==null) return true;
if(type==10&&se.bls==null) return true;
if(type==11&&se.c==null) return true;
if(type==12&&se.doctor==null) return true;
if(type==13&&se.htp==null) return true;
if(type==14&&se.evil==null) return true;
else return false;
},
on : function(type, target){
if(type==0) se.demon = target;
if(type==1) se.burst = target;
if(type==2) se.geno = target;
if(type==3) se.lolita = target;
if(type==4) se.avenge = target;
if(type==5) se.hide = target;
if(type==6) se.gamble = target;
if(type==7) se.reaper = target;
if(type==8) se.ima = target;
if(type==9) se.over = target;
if(type==10) se.bls = target;
if(type==11) se.c = target;
if(type==12) se.doctor = target;
if(type==13) se.htp = target;
if(type==14) se.evil = target;
},
off : function(type){
if(type==0) se.demon = null;
if(type==1) se.burst = null;
if(type==2) se.geno = null;
if(type==3) se.lolita = null;
if(type==4) se.avenge = null;
if(type==5) se.hide = null;
if(type==6) se.gamble = null;
if(type==7) se.reaper = null;
if(type==8) se.ima = null;
if(type==9) se.over = null;
if(type==10) se.bls = null;
if(type==11) se.c = null;
if(type==12) se.doctor = null;
if(type==13) se.htp = null;
if(type==14) se.evil = null;
}

};


function passwordDialog(){
ctx.runOnUiThread(new java.lang.Runnable({
run : function(){
try{
var layout = new LinearLayout(ctx);
layout.setOrientation(1);
var text = new EditText(ctx);
text.setHint("비밀번호를 입력하세요...")
text.setInputType(number);
layout.addView(text);
var dialog = makeDialog("ESP - 14 해제", layout, "취소", null, "확인", function(){
if(text.getText()=="1234"){
he.on = true;
ESP.toast("해제되었습니다.");
}
else{
ESP.toast("비밀번호가 다릅니다.");
}
});
dialog.show();
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
}));
}


//easter egg
function theyAreComing(){
var rrr = ESP.random(15);
hhhhh = 150;
if(rrr==0){
Level.playSound(Entity.getX(ad), Entity.getY(ad), Entity.getZ(ad), "random.explode", 10, 1);
}
else if(rrr==1||rrr==2||rrr==8||rrr==10|rrr==12){
Level.playSound(Entity.getX(ad), Entity.getY(ad), Entity.getZ(ad), "random.fuse", 10, 1);
}
if(rrr==3){
Level.playSound(Entity.getX(ad), Entity.getY(ad), Entity.getZ(ad), "random.splash", 10, 1);
}
if(rrr==4){
Level.playSound(Entity.getX(ad), Entity.getY(ad), Entity.getZ(ad), "random.door_open", 10, 1);
}
if(rrr==5){
Level.playSound(Entity.getX(ad), Entity.getY(ad), Entity.getZ(ad), "random.door_close", 10, 1);
}
if(rrr==6){
wl.m("Hello, "+Player.getName(ad)+"§f.");
}
if(rrr==7){
Level.playSound(Entity.getX(ad), Entity.getY(ad), Entity.getZ(ad), "random.break", 10, 1);
}
if(rrr==9){
for(var n=0;n<5;n++)
cree[n] = Level.spawnMob(Entity.getX(ad), Entity.getY(ad)+1, Entity.getZ(ad), 33);
hhhhh = 180;
}
if(rrr==11){
wl.m("Hello, "+Player.getName(ad)+"§f. Are you There?");
hhhhh = 330;
}
if(rrr==13){
Level.playSound(Entity.getX(ad), Entity.getY(ad), Entity.getZ(ad), "mob.zpigdeath", 10, 1);
}


}


function makeHiddenArea(){
for(var xx=90;xx<130;xx++){
for(var zz=140;zz<185;zz++){
setTile(xx, 9, zz, 7);
setTile(xx, 17, zz, 7);
}}
for(var xx=90;xx<130;xx++){
for(var yy=9;yy<18;yy++){
setTile(xx, yy, 140, 7);
setTile(xx, yy, 184, 7);
}}
for(var yy=9;yy<18;yy++){
for(var zz=140;zz<185;zz++){
setTile(90, yy, zz, 7);
setTile(129, yy, zz, 7);
}}
for(var xx=91;xx<129;xx++){
for(var zz=141;zz<184;zz++){
for(var yy=10;yy<16;yy++)
setTile(xx, yy, zz, 0);
setTile(xx, 16, zz, 89);
}}
setTile(100, 16, 150, 10);

}


function makeLady(){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
menuI = new PopupWindow();
var layout = new LinearLayout(ctx);
layout.setOrientation(1);
var imageView = new android.widget.ImageView(ctx);
var bitmap = new android.graphics.BitmapFactory.decodeFile(sdcard+"/games/com.mojang/minecraftWorlds/"+Level.getWorldDir()+"/wl.png");
imageView.setImageBitmap(bitmap);
imageView.setOnClickListener(new View.OnClickListener({
onClick: function(v){
var rrr = ESP.random(31);
if(rrr>=21){
wl.m("Do you know who I am?");
}
else if(rrr>=11){
wl.m("Do you know where am I?");
}
else if(rrr>=1){
wl.m("You cannot kill me!");
}
else if(rrr==0){
wl.m("I miss him...");
}
}
}));
layout.addView(imageView);
var scroll = new ScrollView(ctx);
scroll.addView(layout);
menuI.setContentView(scroll);
menuI.setWidth(233);
menuI.setHeight(254);
menuI.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
menuI.showAtLocation(ctx.getWindow().getDecorView(),Gravity.CENTER|Gravity.BOTTOM, 0, 0);
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
}));
}


function redScreen(){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var menuR = new PopupWindow();
var layout = new LinearLayout(ctx);
layout.setOrientation(1);
var off = new Button(ctx);
off.setText("       ");
off.setBackgroundColor(Color.argb(0, 0, 0, 0));
off.setOnClickListener(new View.OnClickListener(){
onClick: function(v){
if(wl.o==0){
wl.o = 15;
}
else if(wl.o>0){
if(menuR!=null){
menuR.dismiss();
menuR = null;
}
if(menuI!=null){
menuI.dismiss();
menuI = null;
}
wl.t = 0;
if(mp==false){
Entity.setPosition(ad, 116, 52, 25);
}
else if(mp==true){
Entity.setPosition(ad, 24, 52, 23);
}
hhhhh = 0;
wl.pn = [];
}
}
});
layout.addView(off);
var text = new TextView(ctx);
text.setText("\nGood bye, "+Player.getName(ad)+".");
text.setTextSize(30);
text.setGravity(Gravity.CENTER);
text.setTextColor(Color.argb(255, 255, 60, 60));
layout.addView(text);
menuR.setContentView(layout);
menuR.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth());
menuR.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight());
menuR.setBackgroundDrawable(new ColorDrawable(Color.argb(150, 255, 0, 0)));
menuR.showAtLocation(ctx.getWindow().getDecorView(),Gravity.CENTER, 0, 0);
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
}));
}


function ladyAttack(){
var rrr = ESP.random(10);
if(rrr<=2){
for each(var e in wl.p){
Entity.setHealth(e, Entity.getHealth(e)-6);
}
}
else if(rrr<=4){
for each(var e in wl.p){
var zzz = Level.spawnMob(Entity.getX(e), Entity.getY(e)+1, Entity.getZ(e), 32);
Entity.setHealth(zzz, 30);
zzz = Level.spawnMob(Entity.getX(e), Entity.getY(e)+1, Entity.getZ(e), 32);
Entity.setHealth(zzz, 30);
zzz = Level.spawnMob(Entity.getX(e), Entity.getY(e)+1, Entity.getZ(e), 32);
Entity.setHealth(zzz, 30);
}
}
else if(rrr==5){
for each(var e in wl.p){
explode(Entity.getX(e), Entity.getY(e)+0.1, Entity.getZ(e), 1);
}
}
else if(rrr==6){
for each(var e in wl.p){
setTile(Entity.getX(e), Entity.getY(e)+2, Entity.getZ(e), 46);
explode(Entity.getX(e), Entity.getY(e)+2, Entity.getZ(e), 0.6);
}
}
else if(rrr==7){
for each(var e in wl.p){
setTile(Entity.getX(e), Entity.getY(e)-1, Entity.getZ(e), 30);
}
}
else{
for each(var e in wl.p){
Entity.setFireTicks(e, 5);
}
}

}


function checkPlayerIsThere(){
var px, py, pz;
px = Player.getX();
py = Player.getY();
pz = Player.getZ();
if(px>=90&&px<=131&&py>=8&&py<=19&&pz>=141&&pz<=185){
return true;
}
else{
return false;
}

}


function makeCrash(){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
thisWillMakeCrash();
}
}));
}


function playWLMusic(){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
wl.bgm.reset();
wl.bgm.setDataSource(sdcard+"/games/com.mojang/minecraftWorlds/"+Level.getWorldDir()+"/White_Lady_Theme.mp3");
wl.bgm.prepare();
wl.bgm.start();
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
}));
}


function explodeHook(e, x, y, z, p, f){
if(exp.onoff){
if(ESP.isPlayer(e)&&Level.getGameMode()==0){
var dis = getDistanceFromAdmin(x, y, z);
if(dis<=(p+1)&&exp.c==0){
if(dis>0.5){
Entity.setHealth(ad, Entity.getHealth(ad)-Math.round(3*p/dis));
}
else if(p<3){
Entity.setHealth(ad, Entity.getHealth(ad)-Math.round((5*p-1)/(dis+1)));
}
else{
Entity.setHealth(ad, Entity.getHealth(ad)-Math.round((5*p+4)/(dis+1)+2));
}
if(Math.abs(exp.x-x)<1.5&&Math.abs(exp.y-y)<1.5&&Math.abs(exp.z-z)<1.5){
exp.c = 1;
}
exp.x = x;
exp.y = y;
exp.z = z;
}
else if(exp.c==1){
exp.c = 2;
}
else if(exp.c==2){
exp.c = 0;
}
}
}

if(se.i4>1350){
var i = {x : null, x : null, x : null, d : null};
i.x = x-Entity.getX(se.ima);
i.y = y-Entity.getY(se.ima);
i.z = z-Entity.getZ(se.ima);
i.d = Math.sqrt(Math.pow(i.x, 2)+Math.pow(i.x, 2)+Math.pow(i.z, 2));
if(i.d<=(p+2))
preventDefault();
}

if(townCheck(x, z)){
preventDefault();
return;
}

if(ep.tf){
if(Level.getGameMode()==0){
for(var n=0;n<ep.p.length;n++){
var pp = ep.p[n];
var dis = Player.getDistance(pp, x, y, z);
if(dis<=(p+1)){
if(dis>0.5){
Entity.setHealth(pp, Entity.getHealth(pp)-Math.round(3*p/dis));
}
else if(p<3){
Entity.setHealth(pp, Entity.getHealth(pp)-Math.round((5*p-1)/(dis+1)));
}
else{
Entity.setHealth(pp, Entity.getHealth(pp)-Math.round((5*p+4)/(dis+1)+2));
}
}
if(!ESP.isPlayer(pp)){
ep.p.splice(n, 1);
}
}
}
preventDefault();
var ppp = Math.round(p-0.6);
for(var n=-ppp;n<ppp+1;n++){
for(var m=-ppp;m<ppp+1;m++){
for(var o=-ppp;o<ppp+1;o++){
var xx = x+n, yy = y+m, zz = z+o;
var b = getTile(xx, yy, zz);
if(b==46){
setTile(xx, yy, zz, 0);
explode(xx, yy, zz, 3);
}
if((Math.pow(n, 2)+Math.pow(m, 2)+Math.pow(o, 2))<=Math.pow(ppp, 2)&&b!=7&&b!=49&&b!=246&&b!=8&&b!=9){
setTile(xx, yy, zz, 0);
}
}}}
Level.playSound(x, y, z, "random.explode", 15, 1);
}

}

/*
function setTile(x, y, z, b, bd){
if(bd==undefined) bd = 0;
if(townCheck(x, z)) return;
else ScriptManager.nativeSetTile(x, y, z, b, bd);
}
*/

function getDistanceFromAdmin(x, y, z){
var px, py, pz, dist;
px = x-Entity.getX(ad);
py = y-Entity.getY(ad);
pz = z-Entity.getZ(ad);
dist = Math.sqrt(Math.pow(px, 2)+Math.pow(py, 2)+Math.pow(pz, 2));
return dist;
}


function showSummonDialog(){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var nn = 0;
var layout = new LinearLayout(ctx);
layout.setOrientation(1);
var radios = new RadioGroup(ctx);
var eng = new RadioButton(ctx);
eng.setText("English");
eng.setId(1);
var kor = new RadioButton(ctx);
kor.setText("한국어");
kor.setId(2);
radios.addView(eng);
radios.addView(kor);
radios.setOnCheckedChangeListener(new RadioGroup.OnCheckedChangeListener({
onCheckedChanged: function (group, checkedId){
nn = checkedId;
}
}));
layout.addView(radios);
var dialog = makeDialog("제작자가 사용할 언어를 선택하세요", layout, "확인",
function(){
dt.tf = true;
ESP.toast("소환하려면 \"Dark Tornado's Book\"으로 터치하세요.");
dt.ek = nn;
});
dialog.show();
}
catch(e){
ESP.sbm(e+", "+e.lineNumber);
}
}
}));
}


function fightDialog(){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var layout = new LinearLayout(ctx);
layout.setOrientation(1);
var text = new TextView(ctx);
text.setText(Player.getName(ad)+", 나와 대련을 할 생각이 있는가?");
text.setTextSize(18);
layout.addView(text);
var dialog = makeDialog("대련신청", layout, "네", function(){
dt.f = true;
ESP.toast("전투 모드가 되었습니다.");
var p3x = Entity.getX(dt.p);
var p3y = Entity.getY(dt.p);
var p3z = Entity.getZ(dt.p);
var p3p = dt.p;
dt.p = Level.spawnMob(p3x, p3y+0.5, p3z, 35, "mob/darkTornado.png");
Entity.setRenderType(dt.p, darkRender.renderType);
Entity.setNameTag(dt.p, "    §0Dark Tornado§f");
Entity.remove(p3p);
Entity.setCollisionSize(dt.p, 0.7, 1.8);
anti3 = 0;
dt.l = true;
},
"아니요", function(){
dt.f = false;
ESP.toast("평화 모드를 유지합니다.");
});
dialog.show();
}
catch(e){
ESP.sbm(e+", "+e.lineNumber);
}
}
}));
}


function darkTornadoAssault(){
var yaw, pitch;
dt.r = ESP.random(15); 
dt.x = Entity.getX(dt.p);
dt.y = Entity.getY(dt.p)-1;
dt.z = Entity.getZ(dt.p);
if(dt.r==0) Entity.setHealth(ad, Entity.getHealth(ad)-5);
if(dt.r==1) Entity.setFireTicks(ad, 5);
if(dt.r==2) Entity.setPosition(ad, dt.x, dt.y+3, dt.z);
if(dt.r==3) Entity.setPosition(dt.p, Entity.getX(ad), Entity.getY(ad)+1, Entity.getZ(ad));
if(dt.r==4) setTile(Entity.getX(ad), Entity.getY(ad)-1, Entity.getZ(ad), 30);
if(dt.r==5) Entity.setVelY(ad, 2);
if(dt.r==6) arroundMobHealthDown(dt.p, 30, 10);
if(dt.r==7) explode(Entity.getX(ad), Entity.getY(ad)+1, Entity.getZ(ad), 2);
if(dt.r==8){
dt.x = Entity.getX(dt.p);
dt.y = Entity.getY(dt.p)-1;
dt.z = Entity.getZ(dt.p);
yaw = Math.floor(Entity.getYaw(dt.p));
dt.s = -Math.sin(yaw/180*Math.PI);
dt.c = Math.cos(yaw/180*Math.PI);
ESP.antiLack(5);
explode(dt.x+5*dt.s, dt.y+1, dt.z+5*dt.c, 3);
}
if(dt.r==9){
yaw = Math.floor(Entity.getYaw(dt.p));
dt.s = -Math.sin(yaw/180*Math.PI);
dt.c = Math.cos(yaw/180*Math.PI);
for(var gun=3;gun<25;gun++)
setTile(dt.x+gun*dt.s, dt.y+1, dt.z+gun*dt.c, 51);
}
if(dt.r==10){
yaw = Math.floor(Entity.getYaw(dt.p));
dt.s = -Math.sin(yaw/180*Math.PI);
dt.c = Math.cos(yaw/180*Math.PI);
ESP.antiLack(5);
for(var gun=4;gun<25;gun++)
explode(dt.x+gun*dt.s, dt.y+2.5, dt.z+gun*dt.c, 2);
}
if(dt.r==11){
Level.spawnMob(dt.x-5, dt.t+6, dt.z-1, 65);
Level.spawnMob(dt.x, dt.t+10, dt.z+3, 65);
Level.spawnMob(dt.x+4, dt.t+7, dt.z, 65);
Level.spawnMob(dt.x, dt.t+15, dt.z-7, 65);
Level.spawnMob(dt.x-7, dt.t+5, dt.z, 65);
Level.spawnMob(dt.x+6, dt.t+17, dt.z+3, 65);
Level.spawnMob(dt.x-4, dt.t+15, dt.z-6, 65);
Level.spawnMob(dt.x-5, dt.t+15, dt.z+5, 65);
ESP.antiLack(90);
}
if(dt.r==12){
yaw = Math.floor(Entity.getYaw(dt.p));
dt.s = -Math.sin(yaw/180*Math.PI);
dt.c = Math.cos(yaw/180*Math.PI);
for(var xx=dt.x+4*dt.s-1;xx<dt.x+4*dt.s+2;xx++)
for(var yy=dt.y+1;yy<dt.y+4;yy++)
for(var zz=dt.z+4*dt.c-1;zz<dt.z+4*dt.c+2;zz++)
setTile(xx, yy, zz, 12);
Level.spawnMob(dt.x+4*dt.s, dt.y+2.6, dt.z+4*dt.c, 65);
ESP.antiLack(90);
}
if(dt.r==13){
for(var n=0;n<5;n++)
Level.spawnMob(dt.x+4*dt.s, dt.y+2.6, dt.z+4*dt.c, 33);
}

}


function makeStreetlights(tf){
var n;
if(tf) n = 89;
else n = 0;
new Thread({
run : function(){
if(sldCache==""){
var cache = ESP.read("streetLightData");
if(cache!=""){
eval(cache+"");
sldCache = cache+"";
}
else{
ESP.toast("추가 파일이 없습니다.");
}
}
else{
eval(sldCache);
}
}
}).start();
}


function spellStone(x, y, z, b){
r.n = 0;
if(b==234){
setTile(x, y, z, 233);
r.x = x;
r.y = y;
r.z = z;
while(true){
if(getTile(r.x+1, r.y, r.z)==49) setTile(r.x+1, r.y, r.z, 89);
if(getTile(r.x-1, r.y, r.z)==49) setTile(r.x-1, r.y, r.z, 89);
if(getTile(r.x, r.y+1, r.z)==49) setTile(r.x, r.y+1, r.z, 89);
if(getTile(r.x, r.y-1, r.z)==49) setTile(r.x, r.y-1, r.z, 89);
if(getTile(r.x, r.y, r.z+1)==49) setTile(r.x, r.y, r.z+1, 89);
if(getTile(r.x, r.y, r.z-1)==49) setTile(r.x, r.y, r.z-1, 89);
if(getTile(r.x+1, r.y, r.z)==235) pushBlock(r.x+1, r.y, r.z, true);
if(getTile(r.x-1, r.y, r.z)==235) pushBlock(r.x-1, r.y, r.z, true);
if(getTile(r.x, r.y+1, r.z)==235) pushBlock(r.x, r.y+1, r.z, true);
if(getTile(r.x, r.y-1, r.z)==235) pushBlock(r.x, r.y-1, r.z, true);
if(getTile(r.x, r.y, r.z+1)==235) pushBlock(r.x, r.y, r.z+1, true);
if(getTile(r.x, r.y, r.z-1)==235) pushBlock(r.x, r.y, r.z-1, true);
if(getTile(r.x+1, r.y, r.z)==232&&r.n!=1){
r.x++;
setTile(r.x, r.y, r.z, 236);
r.n = 2;
}
else if(getTile(r.x-1, r.y, r.z)==232&&r.n!=2){
r.x--;
setTile(r.x, r.y, r.z, 236);
r.n = 1;
}
else if(getTile(r.x, r.y+1, r.z)==232&&r.n!=3){
r.y++;
setTile(r.x, r.y, r.z, 236);
r.n = 4;
}
else if(getTile(r.x, r.y-1, r.z)==232&&r.n!=4){
r.y--;
setTile(r.x, r.y, r.z, 236);
r.n = 3;
}
else if(getTile(r.x, r.y, r.z+1)==232&&r.n!=5){
r.z++;
setTile(r.x, r.y, r.z, 236);
r.n = 6;
}
else if(getTile(r.x, r.y, r.z-1)==232&&r.n!=6){
r.z--;
setTile(r.x, r.y, r.z, 236);
r.n = 5;
}
else{
break;
}
}
preventDefault();
}
else if(b==233){
setTile(x, y, z, 234);
r.x = x;
r.y = y;
r.z = z;
while(true){
if(getTile(r.x+1, r.y, r.z)==89) setTile(r.x+1, r.y, r.z, 49);
if(getTile(r.x-1, r.y, r.z)==89) setTile(r.x-1, r.y, r.z, 49);
if(getTile(r.x, r.y+1, r.z)==89) setTile(r.x, r.y+1, r.z, 49);
if(getTile(r.x, r.y-1, r.z)==89) setTile(r.x, r.y-1, r.z, 49);
if(getTile(r.x, r.y, r.z+1)==89) setTile(r.x, r.y, r.z+1, 49);
if(getTile(r.x, r.y, r.z-1)==89) setTile(r.x, r.y, r.z-1, 49);
if(getTile(r.x+1, r.y, r.z)==235) pushBlock(r.x+1, r.y, r.z, false);
if(getTile(r.x-1, r.y, r.z)==235) pushBlock(r.x-1, r.y, r.z, false);
if(getTile(r.x, r.y+1, r.z)==235) pushBlock(r.x, r.y+1, r.z, false);
if(getTile(r.x, r.y-1, r.z)==235) pushBlock(r.x, r.y-1, r.z, false);
if(getTile(r.x, r.y, r.z+1)==235) pushBlock(r.x, r.y, r.z+1, false);
if(getTile(r.x, r.y, r.z-1)==235) pushBlock(r.x, r.y, r.z-1, false);
if(getTile(r.x+1, r.y, r.z)==236&&r.n!=1){
r.x++;
setTile(r.x, r.y, r.z, 232);
r.n = 2;
}
else if(getTile(r.x-1, r.y, r.z)==236&&r.n!=2){
r.x--;
setTile(r.x, r.y, r.z, 232);
r.n = 1;
}
else if(getTile(r.x, r.y+1, r.z)==236&&r.n!=3){
r.y++;
setTile(r.x, r.y, r.z, 232);
r.n = 4;
}
else if(getTile(r.x, r.y-1, r.z)==236&&r.n!=4){
r.y--;
setTile(r.x, r.y, r.z, 232);
r.n = 3;
}
else if(getTile(r.x, r.y, r.z+1)==236&&r.n!=5){
r.z++;
setTile(r.x, r.y, r.z, 232);
r.n = 6;
}
else if(getTile(r.x, r.y, r.z-1)==236&&r.n!=6){
r.z--;
setTile(r.x, r.y, r.z, 232);
r.n = 5;
}
else{
break;
}
}
preventDefault();
}
}


function pushBlock(x, y, z, tf){
if(tf){
if(blockCheck(x+1, y, z)&&getTile(x+2, y, z)==0){
setTile(x+2, y, z, getTile(x+1, y, z), Level.getData(x+1, y, z));
setTile(x+1, y, z, 85);
}
if(blockCheck(x-1, y, z)&&getTile(x-2, y, z)==0){
setTile(x-2, y, z, getTile(x-1, y, z), Level.getData(x-1, y, z));
setTile(x-1, y, z, 85);
}
if(blockCheck(x, y, z+1)&&getTile(x, y, z+2)==0){
setTile(x, y, z+2, getTile(x, y, z+1), Level.getData(x, y, z+1));
setTile(x, y, z+1, 85);
}
if(blockCheck(x, y, z-1)&&getTile(x, y, z-2)==0){
setTile(x, y, z-2, getTile(x, y, z-1), Level.getData(x, y, z-1));
setTile(x, y, z-1, 85);
}
}
else{
if(blockCheck(x+2, y, z)&&getTile(x+1, y, z)==85){
setTile(x+1, y, z, getTile(x+2, y, z), Level.getData(x+2, y, z));
setTile(x+2, y, z, 0);
}
if(blockCheck(x-2, y, z)&&getTile(x-1, y, z)==85){
setTile(x-1, y, z, getTile(x-2, y, z), Level.getData(x-2, y, z));
setTile(x-2, y, z, 0);
}
if(blockCheck(x, y, z+2)&&getTile(x, y, z+1)==85){
setTile(x, y, z+1, getTile(x, y, z+2), Level.getData(x, y, z+2));
setTile(x, y, z+2, 0);
}
if(blockCheck(x, y, z-2)&&getTile(x, y, z-1)==85){
setTile(x, y, z-1, getTile(x, y, z-2), Level.getData(x, y, z-2));
setTile(x, y, z-2, 0);
}
}

}


function blockCheck(x, y, z){
if([0, 7, 85, 95, 232, 233, 234, 235, 236, 49, 89, 240, 241].indexOf(getTile(x, y, z))!=-1) return false;
else return true;
}


function makeForest(x, y, z){
if(espCache6==""){
var cache = ESP.read("espData_5");
if(cache!=""){
eval(cache+"");
espCache6 = cache+"";
}
else{
ESP.toast("추가 파일이 없습니다.");
}
}
else{
eval(espCache6);
}
}


function giveItems(target){
var tx, ty, tz;
tx = Entity.getX(target);
ty = Entity.getY(target);
tz = Entity.getZ(target);
Level.dropItem(tx, ty, tz, 0, 302, 1, 0);
Level.dropItem(tx, ty, tz, 0, 303, 1, 0);
Level.dropItem(tx, ty, tz, 0, 304, 1, 0);
Level.dropItem(tx, ty, tz, 0, 305, 1, 0);
Level.dropItem(tx, ty, tz, 0, 267, 1, 0);
Level.dropItem(tx, ty, tz, 0, 354, 30, 0);
Level.dropItem(tx, ty, tz, 0, 320, 30, 0);
if(mcpev4){
Level.dropItem(tx, ty, tz, 0, 373, 30, 28);
Level.dropItem(tx, ty, tz, 0, 373, 15, 30);
}
Level.dropItem(tx, ty, tz, 0, 306, 1, 0);
Level.dropItem(tx, ty, tz, 0, 307, 1, 0);
Level.dropItem(tx, ty, tz, 0, 308, 1, 0);
Level.dropItem(tx, ty, tz, 0, 309, 1, 0);
}


function makeScreen(){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var menu = new PopupWindow();
var layout = new LinearLayout(ctx);
layout.setOnTouchListener(new View.OnTouchListener({
onTouch : function(v, ev){
if(ev.getAction()==android.view.MotionEvent.ACTION_DOWN){
ESP.save("btnX", ev.getRawX());
ESP.save("btnY", ev.getRawY());
if(btn!=null){
btn.dismiss();
btn = null;
}
ESP.addEMButton();
ESP.toast("수정되었습니다.");
menu.dismiss();
}
return true;
}
}));
menu.setContentView(layout);
menu.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth());
menu.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight());
menu.setBackgroundDrawable(new ColorDrawable(Color.argb(120, 0, 0, 0)));
menu.showAtLocation(ctx.getWindow().getDecorView(),Gravity.CENTER, 0, 0);
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
}));
}


function rebootMapDialog(){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var dialog = new AlertDialog.Builder(ctx, holoDark);
dialog.setTitle("리부트 전용맵 감지");
dialog.setMessage("초능력자 대전 Reboot 전용맵이 감지되었습니다. EM(ESP Manager) 버튼을 생성하시겠습니까?");
dialog.setNegativeButton("아니요", null);
dialog.setPositiveButton("네", new DialogInterface.OnClickListener({
onClick: function(v){
ESP.addEMButton();
ESP.callFunc("rembmonsc", [version]);
ESP.toast("버튼이 생성되었습니다.");
}
}));
dialog.show();
}
catch(e){
if(tf){
ESP.showDialog(title, false);
}
else{
ESP.sbm(title+" by Dark Tornado");
if(mp2) ESP.toast("자동수복 활성화");
else ESP.toast("자동수복 활성화, 스크립트와 맵의 버전이 다릅니다.");
}
}
}
}));
}


function playerAddedHandler(p){
var isLeft = false;
if(leftPls[0]!=null){
for(var n=0;n<leftPls.length;n++){
if(leftPls[n]==p){
ScriptManager.callScriptMethod("entityAddedHook", [new java.lang.Long(p)]);
ScriptManager.allplayers.add(new java.lang.Long(p));
isLeft = true;
ESP.sbm("들어온 플레이어를 인식하였습니다.\n닉네임 : "+Player.getName(p)+", Client Id : "+p);
leftPls.splice(n, 1);
}
}
}
if(!isLeft){
var checkDouble = false;
var ents = ScriptManager.allentities;
for(var n=0;n<ents.size();n++){
if(ents.get(n)==p){
checkDouble = true;
break;
}
}
if(!checkDouble){
ESP.sbm("새로운 플레이어를 인식하였습니다.\n닉네임 : "+Player.getName(p)+", Client Id : "+p);
ScriptManager.entityAddedCallback(new java.lang.Long(p));
}
}
}


function leaveGame(){
//reseting data
mp = false;
mp2 = false;
mp3 = false;
mpk = false;
mpr = false;
auto = false;
anti3 = 0;
anti4 = false;
fill = false;
mp4 = false;

//removing em
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
if(btn!=null){
btn.dismiss();
btn = null;
}
if(menu!=null){
menu.dismiss();
menu = null;
ESP.toast("ESP Manager off");
}
if(btnTime!=null){
btnTime.dismiss();
btnTime = null;
}
if(menu2!=null){
menu2.dismiss();
menu2 = null;
}
if(menu3!=null){
menu3.dismiss();
menu3 = null;
}
if(menu4!=null){
menu4.dismiss();
menu4 = null;
}
if(btnSS!=null){
btnSS.dismiss();
btnSS = null;
}
if(menu5!=null){
menu5.dismiss();
menu5 = null;
}
if(btnPlayer!=null){
btnPlayer.dismiss();
btnPlayer = null;
}
if(menuP!=null){
menuP.dismiss();
menuP = null;
}
if(menuS!=null){
menuS.dismiss();
menuS = null;
}
if(menuH!=null){
menuH.dismiss();
menuH = null;
}
if(menuE!=null){
menuE.dismiss();
menuE = null;
}
}
}));

//Saving EM Data
ESP.save("em", locate);
ESP.save("em2", emcolor);

//BGM off
if(bgmOnoff){
bgmPlayer(false);
bgmOnoff = false;
}

//passive off
passOnoff = false;

//else
multi = false;
town = false;
espOnoff = false;
streetLight = false;
exp.onoff = false;
ep.p = [];

}


