# Frontend Mentor - REST Countries API with color theme switcher solution

This is a solution to the [REST Countries API with color theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- See all countries from the API on the homepage
- Search for a country using an `input` field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- Toggle the color scheme between light and dark mode *(optional)*

### Screenshot

![](./Screenshot%20(191).png)

### Links

- Solution URL: (https://github.com/Ohiole/country-api)
- Live Site URL: (https://country-api-indol.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library


### What I learned

I learned how to use the useParams hook to access a path from the url and display the page based on that path i accessed. The useParams hook is used with the react-router-dom.

To see how you can add code snippets, see below:
```jsx
  const countryName = useParams()

   const res =  Data.filter(item => item.name === countryName.countryName)
   <CountryPage 
              image = {image}
              name = {name}
              nativeName = {nativeName}
              population = {population}
              region = {region}
              subRegion = {subRegion}
              capital = {capital}
              topLevelDomain = {topLevelDomain}
              currencies = {currencies}
              languages = {languages}
              borderCountries = {res[0].hasOwnProperty('borders') ? borderCountries : borderEmpty}
            />
```

### Continued development

For my Continued Development, I want to enter redux for state management and use TailwindCSS more, and also start next js, but taking things slowly

### Useful resources

- [Everest Technologies on Youtubr](https://www.youtube.com/watch?v=IeFlfBR1lxw) - This helped me for hosting my react project on vercel, as i was having problems hosting oin github pages.
- [Alex Zelinsky](https://javascript.plainenglish.io/react-router-how-to-use-the-useparams-hook-321a6461732) - This is an amazing article which helped me finally understand the useParams hook. I'd recommend it to anyone still learning this concept.

## Author

-Ohiole - [Github repo](https://github.com/Ohiole)
- Frontend Mentor - [@Ohiole](https://www.frontendmentor.io/profile/Ohiole)
- Twitter - [@__ojoo](https://www.twitter.com/__ojoo)

## Acknowledgments

I would like to thank Everest Technologies on youtube and  alex zelinsky, because it was from their videos and writings respectively, that i was able to complete this project

