import React, { useEffect, useState } from 'react';
import tw from 'tailwind-styled-components';
import { carList } from '../data/carList';


const RideSelector = ({ pickupCoordinates, dropoffCoordinates }) => {
  const [rideDuration, setRideDuration] = useState(0);

  useEffect(() => {
    const url = `https://api.mapbox.com/directions/v5/mapbox/driving/${pickupCoordinates[0]},${pickupCoordinates[1]};${dropoffCoordinates[0]},${dropoffCoordinates[1]}?access_token=pk.eyJ1Ijoic2lkZGlxdWUyMDIxIiwiYSI6ImNrdmx3bGQxOTJ4YzAyd251bXI1Mzh5MHUifQ.g9h_afFoFbRsGnTO9iWGmw`
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
      if (data.routes[0]) {
          setRideDuration(data.routes[0].duration / 100);
        }
      }
      );
  }, [pickupCoordinates, dropoffCoordinates]);

  const time = 5;

  const renderedList = carList.map((car, index) => {
    return (
      <SelectCar key={index}>
        <CarImage src={car.imgUrl} />
        <CarDetails>
          <CarType>{car.service}</CarType>
          <Time>{`${Math.round(time * car.multiplier)} min away`}</Time>
        </CarDetails>
        <RideCost>{`$${parseFloat(rideDuration * car.multiplier).toFixed(
          2
        )}`}</RideCost>
      </SelectCar>
    );
  });
  return (
    <Wrapper>
      <Title>Choose a ride, or swipe up for more</Title>
      <CarsContainer>{renderedList}</CarsContainer>
    </Wrapper>
  );
};

export default RideSelector;

const Wrapper = tw.div`flex flex-1 flex-col overflow-y-hidden`;
const Title = tw.div`border-b-2 border-gray-200 text-gray-400 text-center py-1`;
const CarsContainer = tw.div`overflow-y-scroll`;
const SelectCar = tw.div`flex flex-row flex-1 items-center p-4`;
const CarImage = tw.img`flex-.5 h-14 m-4`;
const CarDetails = tw.div`flex-1 px-2`;
const CarType = tw.div`font-medium`;
const Time = tw.div`text-xs text-blue-500`;
const RideCost = tw.div`flex-.5 px-2 text-sm`;