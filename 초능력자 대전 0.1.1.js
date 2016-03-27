//초능력자 대전 
//Made by Dark Tornado
//version 0.1.1
//불-268(나무칼)-269(나무삽)-270(나무 곡괭이)-271(나무도끼)
//물-272(돌칼)-273(돌삽)-274(돌곡괭이)-275(돌도끼)
//나무-280(막대기)-281(그릇)-288(깃털)-289(화약)
//크리퍼-가죽세트(298~301)
//흙-290(나무괭이)-291(돌괭이)-292(철괭이)-294(금괭이)
//소환-금갑빠세트(314~317)


var fire = 0;
var water = 0;
var tree = 0;
var creeper = 0;
var soil = 0;
var summon = 0;

var f1 = false;
var f2 = false;
var f3 = false;
var f4 = false;
var f1a = 0;
var f2a = 0;
var f3a = 0;
var f4a = 0;

var w1 = false;
var w2 = false;
var w3 = false;
var w4 = false;
var w1a = 0;
var w2a = 0;
var w3a = 0;
var w4a = 0;

var t1 = false;
var t2 = false;
var t3 = false;
var t4 = false;
var t1a = 0;
var t2a = 0;
var t3a = 0;
var t4a = 0;

var c1 = false;
var c2 = false;
var c3 = false;
var c4 = false;
var c1a = 0;
var c2a = 0;
var c3a = 0;
var c4a = 0;

var s1 = false;
var s2 = false;
var s3 = false;
var s4 = false;
var s1a = 0;
var s2a = 0;
var s3a = 0;
var s4a = 0;

var ss1 = false;
var ss2 = false;
var ss3 = false;
var ss4 = false;
var ss1a = 0;
var ss2a = 0;
var ss3a = 0;
var ss4a = 0;




//select&ability
function useItem(x, y, z, i, b, s, it, bd){
//select
if(b==246){
fire = 1;
clientMessage("fire");
}
if(b==20){
water = 1;
clientMessage("water");
}
if(b==17&&bd==1){
tree = 1;
clientMessage("tree");
}
if(b==46){
creeper = 1;
clientMessage("creeper");
}
if(b==42){
soil = 1;
clientMessage("soil");
}
if(b==19){
summon = 1;
clientMessage("summon");
}
if(b==30){
fire = 0;
water = 0;
tree = 0;
creeper = 0;
soil = 0;
summon = 0;
clientMessage("reset");
}
//fire
if(fire==1){
if(i==268&&f1a==0){
setTile(x+1, y+1, z-1, 51)
setTile(x+1, y+1, z, 51)
setTile(x+1, y+1, z+1, 51)
setTile(x, y+1, z-1, 51)
setTile(x, y+1, z, 51)
setTile(x, y+1, z+1, 51)
setTile(x-1, y+1, z-1, 51)
setTile(x-1, y+1, z, 51)
setTile(x-1, y+1, z+1, 51)
f1 = true;
f1a = 75;
}
if(i==269&&f2a==0){
setTile(x+1, y, z+1, 0)
setTile(x+1, y, z, 0)
setTile(x+1, y, z-1, 0)
setTile(x, y, z+1, 0)
setTile(x, y, z, 0)
setTile(x, y, z-1, 0)
setTile(x-1, y, z+1, 0)
setTile(x-1, y, z, 0)
setTile(x-1, y, z-1, 0)

setTile(x+1, y-1, z-1, 51)
setTile(x+1, y-1, z, 51)
setTile(x+1, y-1, z+1, 51)
setTile(x, y-1, z-1, 51)
setTile(x, y-1, z, 51)
setTile(x, y-1, z+1, 51)
setTile(x-1, y-1, z-1, 51)
setTile(x-1, y-1, z, 51)
setTile(x-1, y-1, z+1, 51)
f2 = true;
f2a = 300;
}
if(i==270&&f3a==0){
setTile(x+2, y+1, z+2, 51)
setTile(x+1, y+1, z+2, 51)
setTile(x, y+1, z+2, 51)
setTile(x-1, y+1, z+2, 51)
setTile(x-2, y+1, z+2, 51)

setTile(x+2, y+1, z-2, 51)
setTile(x+1, y+1, z-2, 51)
setTile(x, y+1, z-2, 51)
setTile(x-1, y+1, z-2, 51)
setTile(x-2, y+1, z-2, 51)

setTile(x-2, y+1, z+1, 51)
setTile(x-2, y+1, z, 51)
setTile(x-2, y+1, z-1, 51)

setTile(x+2, y+1, z+1, 51)
setTile(x+2, y+1, z, 51)
setTile(x+2, y+1, z-1, 51)
f3 = true;
f3a = 150;
}
if(i==271&&f4a==0){
setTile(x+1, y, z+1, 11)
setTile(x+1, y, z-1, 11)
setTile(x, y, z, 11)
setTile(x-1, y, z+1, 11)
setTile(x-1, y, z-1, 11)
f4 = true;
f4a = 450;
}
}
//water
if(water==1){
if(i==272&&w1a==0){
setTile(x+1, y, z+1, 8)
setTile(x+1, y, z, 8)
setTile(x+1, y, z-1, 8)
setTile(x, y, z+1, 8)
setTile(x, y, z, 8)
setTile(x, y, z-1, 8)
setTile(x-1, y, z+1, 8)
setTile(x-1, y, z, 8)
setTile(x-1, y, z-1, 8)
w1 = true;
w1a = 75;
}
if(i==273&&w2a==0){
setTile(x, y+1, z, 79)
setTile(x, y+2, z, 79)
setTile(x, y+3, z, 79)
setTile(x, y+4, z, 79)
setTile(x, y+5, z, 79)
setTile(x, y+6, z, 79)
setTile(x, y+7, z, 79)
w2 = true;
w2a = 150;
}
if(i==274&&w3a==0){
setTile(x+2, y, z+2, 8)
setTile(x+1, y, z+2, 8)
setTile(x, y, z+2, 8)
setTile(x-1, y, z+2, 8)
setTile(x-2, y, z+2, 8)

setTile(x+2, y, z-2, 8)
setTile(x+1, y, z-2, 8)
setTile(x, y, z-2, 8)
setTile(x-1, y, z-2, 8)
setTile(x-2, y, z-2, 8)

setTile(x-2, y, z+1, 8)
setTile(x-2, y, z, 8)
setTile(x-2, y, z-1, 8)

setTile(x+2, y, z+1, 8)
setTile(x+2, y, z, 8)
setTile(x+2, y, z-1, 8)
w3 = true;
w3a = 150;
}
if(i==275&&w4a==0){
setTile(x+1, y, z+1, 79)
setTile(x+1, y, z, 79)
setTile(x+1, y, z-1, 79)
setTile(x, y, z+1, 79)
setTile(x, y, z, 79)
setTile(x, y, z-1, 79)
setTile(x-1, y, z+1, 79)
setTile(x-1, y, z, 79)
setTile(x-1, y, z-1, 79)
w4 = true;
w4a = 225;
}
}
//tree
if(tree==1){
if(i==280&&t1a==0){
setTile(x+1, y+1, z+1, 18)
setTile(x+1, y+1, z-1, 18)
setTile(x, y+1, z, 18)
setTile(x-1, y+1, z+1, 18)
setTile(x-1, y+1, z-1, 18)
t1 = true;
t1a = 75;
}
if(i==281&&t2a==0){
setTile(x, y+1, z, 17)
setTile(x, y+2, z, 17)
setTile(x, y+3, z, 17)
setTile(x, y+4, z, 17)
setTile(x, y+5, z, 17)
setTile(x, y+6, z, 17)
setTile(x, y+7, z, 17)
t2 = true;
t2a = 75;
}
if(i==288&&t3a==0){
setTile(x+2, y+1, z+2, 18)
setTile(x+1, y+1, z+2, 18)
setTile(x, y+1, z+2, 18)
setTile(x-1, y+1, z+2, 18)
setTile(x-2, y+1, z+2, 18)

setTile(x+2, y+1, z-2, 18)
setTile(x+1, y+1, z-2, 18)
setTile(x, y+1, z-2, 18)
setTile(x-1, y+1, z-2, 18)
setTile(x-2, y+1, z-2, 18)

setTile(x-2, y+1, z+1, 18)
setTile(x-2, y+1, z, 18)
setTile(x-2, y+1, z-1, 18)

setTile(x+2, y+1, z+1, 18)
setTile(x+2, y+1, z, 18)
setTile(x+2, y+1, z-1, 18)


setTile(x+2, y+2, z+2, 18)
setTile(x+1, y+2, z+2, 18)
setTile(x, y+2, z+2, 18)
setTile(x-1, y+2, z+2, 18)
setTile(x-2, y+2, z+2, 18)

setTile(x+2, y+2, z-2, 18)
setTile(x+1, y+2, z-2, 18)
setTile(x, y+2, z-2, 18)
setTile(x-1, y+2, z-2, 18)
setTile(x-2, y+2, z-2, 18)

setTile(x-2, y+2, z+1, 18)
setTile(x-2, y+2, z, 18)
setTile(x-2, y+2, z-1, 18)

setTile(x+2, y+2, z+1, 18)
setTile(x+2, y+2, z, 18)
setTile(x+2, y+2, z-1, 18)


setTile(x+2, y+3, z+2, 18)
setTile(x+1, y+3, z+2, 18)
setTile(x, y+3, z+2, 18)
setTile(x-1, y+3, z+2, 18)
setTile(x-2, y+3, z+2, 18)

setTile(x+2, y+3, z-2, 18)
setTile(x+1, y+3, z-2, 18)
setTile(x, y+3, z-2, 18)
setTile(x-1, y+3, z-2, 18)
setTile(x-2, y+3, z-2, 18)

setTile(x-2, y+3, z+1, 18)
setTile(x-2, y+3, z, 18)
setTile(x-2, y+3, z-1, 18)

setTile(x+2, y+3, z+1, 18)
setTile(x+2, y+3, z, 18)
setTile(x+2, y+3, z-1, 18)
t3 = true;
t3a = 150;
}
if(i==289&&t4a==0){
setTile(x, y+1, z, 17)
setTile(x, y+2, z, 17)
setTile(x, y+3, z, 17)
setTile(x, y+4, z, 17)
setTile(x, y+5, z, 17)
setTile(x, y+6, z, 17)

setTile(x, y+7, z, 18)
setTile(x+1, y+7, z+1, 18)
setTile(x+1, y+7, z-1, 18)
setTile(x-1, y+7, z+1, 18)
setTile(x-1, y+7, z-1, 18)

setTile(x+1, y+6, z+1, 18)
setTile(x+1, y+6, z-1, 18)
setTile(x-1, y+6, z+1, 18)
setTile(x-1, y+6, z-1, 18)

setTile(x+1, y+5, z+1, 18)
setTile(x+1, y+5, z-1, 18)
setTile(x+1, y+5, z, 18)
setTile(x-1, y+5, z+1, 18)
setTile(x-1, y+5, z-1, 18)
setTile(x-1, y+5, z, 18)
setTile(x, y+5, z+1, 18)
setTile(x, y+5, z-1, 18)

setTile(x+1, y+4, z+1, 18)
setTile(x+1, y+4, z-1, 18)
setTile(x+1, y+4, z, 18)
setTile(x-1, y+4, z+1, 18)
setTile(x-1, y+4, z-1, 18)
setTile(x-1, y+4, z, 18)
setTile(x, y+4, z+1, 18)
setTile(x, y+4, z-1, 18)

setTile(x+2, y+5, z+1, 18)
setTile(x+2, y+5, z-1, 18)
setTile(x+2, y+5, z, 18)

setTile(x-2, y+5, z+1, 18)
setTile(x-2, y+5, z+1, 18)
setTile(x-2, y+5, z, 18)

setTile(x+1, y+5, z+2, 18)
setTile(x-1, y+5, z+2, 18)
setTile(x, y+5, z+2, 18)

setTile(x+1, y+5, z-2, 18)
setTile(x-1, y+5, z-2, 18)
setTile(x, y+5, z-2, 18)

setTile(x+2, y+4, z+1, 18)
setTile(x+2, y+4, z-1, 18)
setTile(x+2, y+4, z, 18)

setTile(x-2, y+4, z+1, 18)
setTile(x-2, y+4, z+1, 18)
setTile(x-2, y+4, z, 18)

setTile(x+1, y+4, z+2, 18)
setTile(x-1, y+4, z+2, 18)
setTile(x, y+4, z+2, 18)

setTile(x+1, y+4, z-2, 18)
setTile(x-1, y+4, z-2, 18)
setTile(x, y+4, z-2, 18)
t4 = true;
t4a = 300;
}
}
//creeper
if(creeper==1){
if(i==298&&c1a==0){
Player.setHealth(22); 
explode(x,y,z, 3);
c1 = true;
c1a = 105;
 }
if(i==291&&c2a==0){
bl_spawnMob(x, y+2, z, 33, "mob/creeper.png");
c2 = true;
c2a = 150;
}
if(i==292&&c3a==0){
explode(x+10,y,z+10, 4);
explode(x+10,y,z-10, 4);
explode(x+10,y,z, 4);
explode(x-10,y,z+10, 4);
explode(x-10,y,z-10, 4);
explode(x-10,y,z, 4);
explode(x,y,z+10, 4);
explode(x,y,z-10, 4);
c3 = true;
c3a = 450;
}
if(i==294&&c4a==0){
bl_spawnMob(x, y+12, z, 65, "mob/TNT.png");
c4 = true;
c4a = 225;
}
}
//soil
if(soil==1){
if(i==290&&s1a==0){
setTile(x, y+1, z, 1)
setTile(x, y+2, z, 1)
setTile(x, y+3, z, 1)
setTile(x, y+4, z, 1)
setTile(x, y+5, z, 1)
setTile(x, y+6, z, 1)
setTile(x, y+7, z, 1)
s1 = true;
s1a = 75;
}
if(i==291&&s2a==0){
setTile(x+1, y, z+1, 0)
setTile(x+1, y, z, 0)
setTile(x+1, y, z-1, 0)
setTile(x, y, z+1, 0)
setTile(x, y, z, 0)
setTile(x, y, z-1, 0)
setTile(x-1, y, z+1, 0)
setTile(x-1, y, z, 0)
setTile(x-1, y, z-1, 0)

setTile(x+1, y-1, z+1, 0)
setTile(x+1, y-1, z, 0)
setTile(x+1, y-1, z-1, 0)
setTile(x, y-1, z+1, 0)
setTile(x, y-1, z, 0)
setTile(x, y-1, z-1, 0)
setTile(x-1, y-1, z+1, 0)
setTile(x-1, y-1, z, 0)
setTile(x-1, y-1, z-1, 0)

setTile(x+1, y-2, z+1, 0)
setTile(x+1, y-2, z, 0)
setTile(x+1, y-2, z-1, 0)
setTile(x, y-2, z+1, 0)
setTile(x, y-2, z, 0)
setTile(x, y-2, z-1, 0)
setTile(x-1, y-2, z+1, 0)
setTile(x-1, y-2, z, 0)
setTile(x-1, y-2, z-1, 0)
s2 = true;
s2a = 150;
}
if(i==292&&s3a==0){
setTile(x+1, y+7, z-1, 13)
setTile(x+1, y+7, z, 13)
setTile(x+1, y+7, z+1, 13)
setTile(x, y+7, z-1, 13)
setTile(x, y+7, z, 13)
setTile(x, y+7, z+1, 13)
setTile(x-1, y+7, z-1, 13)
setTile(x-1, y+7, z, 13)
setTile(x-1, y+7, z+1, 13)
s3 = true;
s3a = 225;
}
if(i==294&&s4a==0){
setTile(x+1, y, z, 0)
setTile(x+1, y-1, z, 11)
setTile(x-1, y, z, 0)
setTile(x-1, y-1, z, 11)
setTile(x, y, z+1, 0)
setTile(x, y-1, z+1, 11)
setTile(x, y, z-1, 0)
setTile(x, y-1, z-1, 11)
s4 = true;
s4a = 300;
}
}
//summon
if(summon==1){
if(i==314&&ss1a==0){
bl_spawnMob( x, y+2 , z, 32, "mob/zombie.png" );
ss1 = true;
ss1a = 150;
}
if(i==315&&ss2a==0){
bl_spawnMob( x, y+2 , z, 33, "mob/creeper.png");
ss2 = true;
ss2a = 300;
}
if(i==316&&ss3a==0){
bl_spawnMob( x, y+2 , z, 34, "mob/skeleton.png");
ss3 = true;
ss3a = 150;
}
if(i==317&&ss4a==0){
bl_spawnMob( x, y+2, z, 36, "mob/pigzombie.png" );
ss4 = true;
ss4a = 300;
}
}

}

//cool time
function modTick(){
if(f1==true){
f1a--;   
}
if(f2==true){
f2a--;
}
if(f3==true){
f3a--;
}
if(f4==true){
f4a--;
}
if(w1==true){
w1a--;
}
if(w2==true){
w2a--;
}
if(w3==true){
w3a--;
}
if(w4==true){
w4a--;
}
if(t1==true){
t1a--;
}
if(t2==true){
t2a--;
}
if(t3==true){
t3a--;
}
if(t4==true){
t4a--;
}
if(c1==true){
c1a--;
}
if(c2==true){
c2a--;
}
if(c3==true){
c3a--;
}
if(c4==true){
c4a--;
}
if(s1==true){
s1a--;
}
if(s2==true){
s2a--;
}
if(s3==true){
s3a--;
}
if(s4==true){
s4a--;
}
if(ss1==true){
ss1a--;
}
if(ss2==true){
ss2a--;
}
if(ss3==true){
ss3a--;
}
if(ss4==true){
ss4a--;
}


if(f1a==0){
f1 = false;
}
if(f2a==0){
f2 = false;
}
if(f3a==0){
f3 = false;
}
if(f4a==0){
f4 = false;
}
if(w1a==0){
w1 = false;
}
if(w2a==0){
w2 = false;
}
if(w3a==0){
w3 = false;
}
if(w4a==0){
w4 = false;
}
if(t1a==0){
t1 = false;
}
if(t2a==0){
t2 = false;
}
if(t3a==0){
t3 = false;
}
if(t4a==0){
t4 = false;
}
if(c1a==0){
c1 = false;
}
if(c2a==0){
c2 = false;
}
if(c3a==0){
c3 = false;
}
if(c4a==0){
c4 = false;
}
if(s1a==0){
s1 = false;
}
if(s2a==0){
s2 = false;
}
if(s3a==0){
s3 = false;
}
if(s4a==0){
s4 = false;
}
if(ss1a==0){
ss1 = false;
}
if(ss2a==0){
ss2 = false;
}
if(ss3a==0){
ss3 = false;
}
if(ss4a==0){
ss4 = false;
}

}



