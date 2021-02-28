import React from 'react';
import Section from "./Section";
import Weather from "./Weather";

export default function App() {
   return (
   <Section name="Погода в Київ, Львів">
       <Weather cityName="Kyiv" degrees={3} imgLink="https://p.kindpng.com/picc/s/178-1780507_sunny-weather-weather-line-icon-png-transparent-png.png"/>
       <Weather cityName="Lviv" degrees={-1} imgLink="https://www.clipartkey.com/mpngs/m/191-1914094_icon-free-download-png-snow-weather-icon.png"/>
       
   </Section>
)};