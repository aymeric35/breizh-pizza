<template>
  <div>
    <h2 id="entrées" class="font-heading text-center pt-3 pb-2 text-3xl">Entrées</h2>
    <MenuDivider></MenuDivider>
    <div class="pt-6 pb-6 lg:flex lg:justify-between">
      <MenuItem
        title="Salade Californienne"
        ingredients="Salade verte, pommes, oignons, tomate"
        price="6,00€"
      ></MenuItem>
      <MenuItem
        title="Salade Caprese"
        ingredients="Tomate, mozzarella, basilic, huile d’olive"
        price="6,00€"
      ></MenuItem>
    </div>
    <h2 id="pizzas" class="font-heading text-center pt-3 pb-2 text-3xl">Pizzas</h2>
    <MenuDivider></MenuDivider>
    <div class="pt-6 pb-6 lg:flex lg:justify-between lg:flex-wrap">
      <MenuItem
        title="Margherita"
        ingredients="Tomate, mozzarella, basilic, huile d'olive"
        price="6,00€"
      ></MenuItem>
      <MenuItem
        title="Reine"
        ingredients="Tomate, mozzarella, jambon, champignons"
        price="6,50€"
      ></MenuItem>
      <MenuItem
        title="Napolitaine"
        ingredients="Tomate, mozzarella, anchois, olives noires, origan, huile d’olive"
        price="7,00€"
      ></MenuItem>
      <MenuItem
        title="Bretonne"
        ingredients="Tomate, oignons, andouille, fromage, crème fraîche"
        price="7,00€"
      ></MenuItem>
      <MenuItem
        title="Romaine"
        ingredients="Tomate, mozzarella, anchois, origan, huile d’olive"
        price="7,00€"
      ></MenuItem>
      <MenuItem
        title="Sicilienne"
        ingredients="Tomate, mozzarella, basilic, anchois, câpres, champignons"
        price="7,50€"
      ></MenuItem>
      <MenuItem
        title="Capricciosa"
        ingredients="Mozzarella, champignons, artichaut, jambon, olives"
        price="7,50€"
      ></MenuItem>
      <MenuItem
        title="Quatre Fromages"
        ingredients="Mozzarella, chèvre, bleu, emmental, olives"
        price="8,00€"
      ></MenuItem>
      <MenuItem
        title="Calzone"
        ingredients="Mozzarella, jambon, champignons, sauce tomate"
        price="8,50€"
      ></MenuItem>
      <MenuItem
        title="Hawaïenne"
        ingredients="Tomate, mozzarella, jambon, ananas"
        price="9,00€"
      ></MenuItem>
    </div>
    <h2 id="desserts" class="font-heading text-center pt-3 pb-2 text-3xl">Desserts</h2>
    <MenuDivider></MenuDivider>
    <div class="pt-6 pb-6 lg:flex lg:justify-between lg:flex-wrap">
      <MenuItem
        title="Pizza au chocolat"
        ingredients="Chocolat, bananes, fraises, pépites de chocolat blanc"
        price="6,00€"
      ></MenuItem>
      <MenuItem
        title="Pizza aux pommes"
        ingredients="Tranches de pommes, cannelle, sucre"
        price="6,00€"
      ></MenuItem>
    </div>
    <h2 id="boissons" class="font-heading text-center pt-3 pb-2 text-3xl">Boissons</h2>
    <MenuDivider></MenuDivider>
    <div class="pt-6 pb-6 lg:flex lg:justify-between lg:flex-wrap">
      <MenuDrink drink="Eau 50cl" price="1,00€"></MenuDrink>
      <MenuDrink drink="Eau 1.5L" price="1,80€"></MenuDrink>
      <MenuDrink drink="Kronembourg (33cl)" price="2,50€"></MenuDrink>
      <MenuDrink drink="1664 (33cl)" price="2,70€"></MenuDrink>
      <MenuDrink drink="Heineken (33cl)" price="2,60€"></MenuDrink>
      <MenuDrink drink="Guinness (33cl)" price="2,90€"></MenuDrink>
      <MenuDrink drink="Coca 50cl" price="1,50€"></MenuDrink>
      <MenuDrink drink="Orangina 50cl" price="1,50€"></MenuDrink>
      <MenuDrink drink="Fanta 50cl" price="1,50€"></MenuDrink>
      <MenuDrink drink="Icea Tea 50cl" price="1,50€"></MenuDrink>
      <MenuDrink drink="Limonade 50cl" price="1,50€"></MenuDrink>
      <MenuDrink drink="Perrier 50cl" price="1,50€"></MenuDrink>
    </div>
    <h2 id="vins" class="font-heading text-center pt-3 pb-2 text-3xl">Vins</h2>
    <MenuDivider></MenuDivider>
    <div class="pt-6 pb-10 lg:flex lg:justify-between lg:flex-wrap">
      <h3 class="font-heading text-center text-2xl text-orange-500 pb-3 lg:w-full lg:pb-6">Rouges</h3>
      <MenuDrink drink="Bordeaux 37,5cl" price="8,40€"></MenuDrink>
      <MenuDrink drink="Bordeaux 75cl" price="11,00€"></MenuDrink>
      <MenuDrink drink="Côtes du Rhône 37,5cl" price="8,50€"></MenuDrink>
      <MenuDrink drink="Côtes du Rhône 75cl" price="12,50€"></MenuDrink>
      <MenuDrink drink="Valpolicella 37,5cl" price="7,90€"></MenuDrink>
      <MenuDrink drink="Valpolicella 75cl" price="12,00€"></MenuDrink>
      <h3 class="font-heading text-center text-2xl text-orange-500 pt-4 pb-3 lg:w-full lg:pb-6">Blancs</h3>
      <MenuDrink drink="Sauvignon 75cl" price="8,50€"></MenuDrink>
      <MenuDrink drink="Champagne" price="28,00€"></MenuDrink>
      <MenuDrink drink="Mousseux" price="15,00€"></MenuDrink>
      <MenuDrink drink="Cidre" price="7,00€"></MenuDrink>
      <MenuDrink drink="Pinot blanc 37,5cl" price="7,90€"></MenuDrink>
      <MenuDrink drink="Pinot blanc 75cl" price="11,50€"></MenuDrink>
    </div>
  </div>
</template>