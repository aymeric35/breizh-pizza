<template>
  <div class="container">
    <MenuTitle custom-i-d="entrées" content="Entrées"></MenuTitle>
    <MenuDivider></MenuDivider>
    <div class="pt-10 pb-6 lg:flex lg:justify-between">
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
    <MenuTitle custom-i-d="pizzas" custom-class="md:pb-4" content="Pizzas"></MenuTitle>
    <MenuDivider></MenuDivider>
    <div class="pt-10 pb-6 lg:flex lg:flex-wrap lg:justify-between">
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
    <MenuTitle custom-i-d="desserts" content="Desserts"></MenuTitle>
    <MenuDivider></MenuDivider>
    <div class="pt-10 pb-6 lg:flex lg:flex-wrap lg:justify-between">
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
    <MenuTitle custom-i-d="boissons" content="Boissons"></MenuTitle>
    <MenuDivider></MenuDivider>
    <div class="pt-10 pb-6 lg:flex lg:flex-wrap lg:justify-between">
      <MenuDrink custom-class="lg:w-4/10" drink="Eau 50cl" price="1,00€"></MenuDrink>
      <MenuDrink custom-class="lg:w-4/10" drink="Eau 1.5L" price="1,80€"></MenuDrink>
      <MenuDrink custom-class="lg:w-4/10" drink="Kronembourg (33cl)" price="2,50€"></MenuDrink>
      <MenuDrink custom-class="lg:w-4/10" drink="1664 (33cl)" price="2,70€"></MenuDrink>
      <MenuDrink custom-class="lg:w-4/10" drink="Heineken (33cl)" price="2,60€"></MenuDrink>
      <MenuDrink custom-class="lg:w-4/10" drink="Guinness (33cl)" price="2,90€"></MenuDrink>
      <MenuDrink custom-class="lg:w-4/10" drink="Coca 50cl" price="1,50€"></MenuDrink>
      <MenuDrink custom-class="lg:w-4/10" drink="Orangina 50cl" price="1,50€"></MenuDrink>
      <MenuDrink custom-class="lg:w-4/10" drink="Fanta 50cl" price="1,50€"></MenuDrink>
      <MenuDrink custom-class="lg:w-4/10" drink="Icea Tea 50cl" price="1,50€"></MenuDrink>
      <MenuDrink custom-class="lg:w-4/10" drink="Limonade 50cl" price="1,50€"></MenuDrink>
      <MenuDrink custom-class="lg:w-4/10" drink="Perrier 50cl" price="1,50€"></MenuDrink>
    </div>
    <MenuTitle custom-i-d="vins" content="Vins"></MenuTitle>
    <MenuDivider></MenuDivider>
    <div class="pt-10 pb-10 lg:flex lg:justify-between">
      <div class="lg:flex lg:flex-col lg:w-4/10">
        <h3
          class="font-heading text-center pb-3 text-2xl text-orange-500 lg:pb-6"
        >
          Rouges
        </h3>
        <MenuDrink custom-class="lg:w-full" drink="Bordeaux 37,5cl" price="8,40€"></MenuDrink>
        <MenuDrink custom-class="lg:w-full" drink="Bordeaux 75cl" price="11,00€"></MenuDrink>
        <MenuDrink custom-class="lg:w-full" drink="Côtes du Rhône 37,5cl" price="8,50€"></MenuDrink>
        <MenuDrink custom-class="lg:w-full" drink="Côtes du Rhône 75cl" price="12,50€"></MenuDrink>
        <MenuDrink custom-class="lg:w-full" drink="Valpolicella 37,5cl" price="7,90€"></MenuDrink>
        <MenuDrink custom-class="lg:w-full" drink="Valpolicella 75cl" price="12,00€"></MenuDrink>
      </div>
      <div class="lg:flex lg:flex-col lg:w-4/10">
        <h3
          class="font-heading text-center pb-3 text-2xl text-orange-500 lg:pb-6"
        >
          Blancs
        </h3>
        <MenuDrink custom-class="lg:w-full" drink="Sauvignon 75cl" price="8,50€"></MenuDrink>
        <MenuDrink custom-class="lg:w-full" drink="Champagne" price="28,00€"></MenuDrink>
        <MenuDrink custom-class="lg:w-full" drink="Mousseux" price="15,00€"></MenuDrink>
        <MenuDrink custom-class="lg:w-full" drink="Cidre" price="7,00€"></MenuDrink>
        <MenuDrink custom-class="lg:w-full" drink="Pinot blanc 37,5cl" price="7,90€"></MenuDrink>
        <MenuDrink custom-class="lg:w-full" drink="Pinot blanc 75cl" price="11,50€"></MenuDrink>
      </div>
    </div>
  </div>
</template>