/**
 * Copyright 2019-present GCF Task Force. All Rights Reserved.
 */

import React from 'react';
import styled from 'styled-components';

import ScrollToTopOnMount from './ScrollToTopOnMount';

const iconMap = {
	'Soy': ['seedling', 'chess-bishop'],
	'Coffee': ['coffee', 'coffee-togo', 'coffee-pot', 'mug', 'mug-hot', 'chess-bishop'],
	'Palm oil': ['tree-palm'],
	'Cacao': ['th-large', 'th', 'grip-vertical', 'grip-horizontal', 'eraser', 'chess-bishop'],
	'Pineapple': ['apple-crate', 'salad'],
	'Corn': ['corn'],
	'Fruit': ['apple-crate', 'salad', 'balance-scale-right'],
	'Mezcal': ['glass-whiskey', 'wine-bottle'],
	'Mango': ['apple-crate', 'salad', 'balance-scale-right'],
	'Watermelon': ['apple-crate', 'salad', 'balance-scale-right'],
	'Cucumber': ['apple-crate', 'salad', 'balance-scale-right'],
	'Lemon': ['lemon'],
	'Flowers': ['flower', 'flower-tulip', 'flower-daffodil'],
	'Brazil nuts': ['acorn'],
	'Grapes': ['apple-crate', 'salad', 'balance-scale-right'],
	'Bananas': ['apple-crate', 'salad', 'balance-scale-right'],
	'Cassava': ['carrot'],
	'Sugarcane': ['candy-cane', 'seedling'],
	'Rice': ['wheat', 'mortar-pestle'],
	'Pitaya': ['apple-crate', 'salad', 'balance-scale-right'],
	'Oranges': ['apple-crate', 'salad', 'balance-scale-right'],
	'Yuca': ['carrot'],
	'Potato': ['apple-crate', 'carrot', 'french-fries'],
	'Pepper': ['pepper-hot'],
	'Petroleum': ['gas-pump'],
	'Ethanol': ['gas-pump'],
	'Natural Gas': ['gas-pump', 'burn', 'fire'],
	'Forest Products': ['tree', 'trees', 'tree-large', 'tree-alt', 'tree-palm', 'pagelines', 'axe'],
	'Agriculture': ['tractor', 'farm'],
	'Automotive': ['car', 'cars', 'car-side', 'car-bus', 'tire', 'truck-pickup', 'truck-moving', 'truck-container'],
	'Textiles': ['blanket'],
	'Electronics': ['desktop', 'laptop', 'mobile', 'mobile-alt', 'phone-laptop', 'tv', 'plug'],
	'Rubber': ['tire', 'eraser'],
	'Agrochemicals': ['atom', 'database', 'flask', 'flask-potion'],
	'Manufactured Goods': ['conveyor-belt-alt', 'conveyor-belt', 'industry-alt'],
	'Industrial Equipment': ['conveyor-belt-alt', 'conveyor-belt', 'industry-alt', 'tools'],
	'Meat': ['meat', 'steak', 'turkey', 'drumstick-bite', 'drumstick', 'cow', 'skull-cow'],
	'Fisheries': ['fish'],
	'Leather': ['cow'],
	'Beef': ['meat', 'steak', 'cow', 'skull-cow'],
	'Copper': ['digging', 'shovel', 'atom', 'gem', 'construction', 'coin', 'coins', 'ring', 'hard-hat', 'dice-d10', 'dice-d12', 'dice-d20', 'dice-d8'],
	'Gold': ['digging', 'shovel', 'atom', 'gem', 'construction', 'coin', 'coins', 'ring', 'hard-hat', 'dice-d10', 'dice-d12', 'dice-d20', 'dice-d8'],
	'Lead': ['digging', 'shovel', 'atom', 'gem', 'construction', 'coins', 'hard-hat', 'dice-d10', 'dice-d12', 'dice-d20', 'dice-d8'],
	'Zinc': ['digging', 'shovel', 'atom', 'gem', 'construction', 'coins', 'hard-hat', 'dice-d10', 'dice-d12', 'dice-d20', 'dice-d8'],
	'Iron': ['digging', 'shovel', 'atom', 'gem', 'construction', 'coins', 'hard-hat', 'dice-d10', 'dice-d12', 'dice-d20', 'dice-d8'],
	'Aluminum': ['digging', 'shovel', 'atom', 'gem', 'construction', 'coins', 'hard-hat', 'dice-d10', 'dice-d12', 'dice-d20', 'dice-d8'],
	'Mineral Oils': ['oil-can', 'flask', 'flask-potion'],
	'Mineral Fuels': ['atom', 'database', 'flask', 'flask-potion'],
	'Ores': ['digging', 'shovel', 'atom', 'gem', 'construction', 'coins', 'hard-hat', 'dice-d10', 'dice-d12', 'dice-d20', 'dice-d8'],
	'Steel': ['digging', 'shovel', 'atom', 'gem', 'construction', 'coins', 'hard-hat', 'dice-d10', 'dice-d12', 'dice-d20', 'dice-d8'],
	'Coal': ['fireplace', 'digging', 'shovel', 'atom', 'gem', 'construction', 'coins', 'hard-hat', 'dice-d10', 'dice-d12', 'dice-d20', 'dice-d8'],
	'Metals': ['digging', 'shovel', 'atom', 'gem', 'construction', 'coins', 'hard-hat', 'dice-d10', 'dice-d12', 'dice-d20', 'dice-d8'],
	'Minerals': ['gem'],
	'Gypsum': ['digging', 'shovel', 'atom', 'gem', 'construction', 'coins', 'hard-hat', 'dice-d10', 'dice-d12', 'dice-d20', 'dice-d8'],
	'Cotton': ['sheep'],
	'Timber': ['tree', 'trees', 'tree-large', 'tree-alt', 'tree-palm', 'axe'],
	'Ash': ['ball-pile'],
	'Paper': ['scroll', 'paper-plane', 'copy', 'file', 'file-alt'],
};

const iconMap2 = {
  'Small-scale cattle ranching': ['cow'],
  'Large-scale cattle ranching': ['cow'],
  'Small-scale agriculture': ['tractor', 'farm'],
  'Large-scale agriculture': ['tractor', 'farm'],
  'Land speculation': ['sign', 'house', 'home', 'home-alt', 'home-lg', 'city'],
  'Transportation infrastructure': ['train', 'subway', 'car-bus'],
  'Large-scale illegal timber extraction': ['tree', 'trees', 'tree-large', 'tree-alt', 'tree-palm', 'axe'],
  'Small-scale illegal timber extraction': ['tree', 'trees', 'tree-large', 'tree-alt', 'tree-palm', 'axe'],
  'Illegal land speculation': ['sign', 'house', 'home', 'home-alt', 'home-lg', 'city', 'times-octagon', 'times-hexagon', 'times-square', 'do-not-enter'],
  'Illicit crop cultivation': ['cannabis', 'joint', 'pills', 'capsules', 'times-octagon', 'times-hexagon', 'times-square', 'smoking-ban', 'do-not-enter'],
  'Artisanal and industrial mining': ['digging', 'shovel', 'atom', 'gem', 'construction', 'coin', 'coins', 'ring', 'hard-hat', 'dice-d10', 'dice-d12', 'dice-d20', 'dice-d8'],
  'Illegal small-scale gold mining': ['digging', 'shovel', 'atom', 'gem', 'construction', 'coin', 'coins', 'ring', 'hard-hat', 'dice-d10', 'dice-d12', 'dice-d20', 'dice-d8', 'times-octagon', 'times-hexagon', 'times-square', 'do-not-enter'],
  'Industrial mining': ['digging', 'shovel', 'atom', 'gem', 'construction', 'coin', 'coins', 'ring', 'hard-hat', 'dice-d10', 'dice-d12', 'dice-d20', 'dice-d8'],
  'Large-scale legal mining': ['digging', 'shovel', 'atom', 'gem', 'construction', 'coin', 'coins', 'ring', 'hard-hat', 'dice-d10', 'dice-d12', 'dice-d20', 'dice-d8'],
  'Transportation and other infrastructure': ['train', 'subway', 'car-bus'],
  'Infrastructure development': ['city'],
  'Fisheries': ['fish'],
  'Large-scale legal logging': ['tree', 'trees', 'tree-large', 'tree-alt', 'tree-palm', 'axe'],
  'Small-scale illegal timber harvest': ['tree', 'trees', 'tree-large', 'tree-alt', 'tree-palm', 'axe', 'times-octagon', 'times-hexagon', 'times-square', 'do-not-enter'],
  'New settlements': ['campground', 'house', 'home', 'home-alt', 'home-lg', 'city'],
  'Small-scale illegal logging': ['tree', 'trees', 'tree-large', 'tree-alt', 'tree-palm', 'axe', 'times-octagon', 'times-hexagon', 'times-square', 'do-not-enter'],
  'Illicit coca production': ['times-octagon', 'times-hexagon', 'times-square', 'smoking-ban', 'do-not-enter', 'cannabis', 'joint', 'pills', 'capsules'],
  'Illegal artisanal mining': ['digging', 'shovel', 'atom', 'gem', 'construction', 'coin', 'coins', 'ring', 'hard-hat', 'dice-d10', 'dice-d12', 'dice-d20', 'dice-d8', 'times-octagon', 'times-hexagon', 'times-square', 'do-not-enter'],
  'Fire': ['burn', 'fire'],
  'Illegal logging': ['tree', 'trees', 'tree-large', 'tree-alt', 'tree-palm', 'axe', 'times-octagon', 'times-hexagon', 'times-square', 'do-not-enter'],
  'Small-scale illegal logging': ['tree', 'trees', 'tree-large', 'tree-alt', 'tree-palm', 'axe', 'times-octagon', 'times-hexagon', 'times-square', 'do-not-enter'],
  'Large-scale illegal mining': ['digging', 'shovel', 'atom', 'gem', 'construction', 'coin', 'coins', 'ring', 'hard-hat', 'dice-d10', 'dice-d12', 'dice-d20', 'dice-d8', 'times-octagon', 'times-hexagon', 'times-square', 'do-not-enter'],
  'Large-scale timber extraction': ['tree', 'trees', 'tree-large', 'tree-alt', 'tree-palm', 'axe'],
};

const TempIconListGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;

  background-color: white;
  height: auto;
  padding: 0px 50px;
  margin: 0 auto;

  max-width: 1000px;
  box-shadow: 6px 18px 18px rgba(0, 0, 0, 0.08), -6px 18px 18px rgba(0, 0, 0, 0.08);
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 40px;
`;

const SubTitle = styled.h2`
  text-align: center;
  margin-bottom: 40px;
`;

const IconListTitle = styled.span`
  font-size: 16px;
  font-weight: bold;
  justify-self: left;
`;

const Icon = styled.i`
  margin: 0 20px;
  color: #3e522d;
`

const IconListGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
  grid-row-gap: 20px;
  place-items: center;
  margin-bottom: 40px;
`;

const IconList = ({ icons }) => (
  <IconListGrid>
    {icons.map(iconType => {
      if (iconType === 'pagelines') {
        return (
          <>
            <IconListTitle>{iconType}:</IconListTitle>
            <Icon className={`fab fa-${iconType} fa-2x`}></Icon>
            <div/>
            <div/>
            <div/>
          </>
        );
      }
      return (
        <>
          <IconListTitle>{iconType}:</IconListTitle>
          <Icon className={`fas fa-${iconType} fa-2x`}></Icon>
          <Icon className={`far fa-${iconType} fa-2x`}></Icon>
          <Icon className={`fal fa-${iconType} fa-2x`}></Icon>
          <Icon className={`fad fa-${iconType} fa-2x`}></Icon>
        </>
      );
    })}
  </IconListGrid>

);

const TempIconList = () => (
  <>
    <ScrollToTopOnMount />

    <TempIconListGrid>
			<Title>Major Exports Icons</Title>
      {Object.keys(iconMap).map(category  => (
        <>
          <SubTitle>{category}</SubTitle>
          <IconList icons={iconMap[category]} />
        </>
      ))}
    </TempIconListGrid>

		<TempIconListGrid>
			<Title>Drivers of Deforestation Icons</Title>
      {Object.keys(iconMap2).map(category  => (
        <>
          <SubTitle>{category}</SubTitle>
          <IconList icons={iconMap2[category]} />
        </>
      ))}
    </TempIconListGrid>

  </>
);

export default TempIconList;
