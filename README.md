# Frontend Mentor - Planets fact site solution

This is a solution to the [Planets fact site challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/planets-fact-site-gazqN8w_f). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- View each planet page and toggle between "Overview", "Internal Structure", and "Surface Geology"

### Screenshot

![](/public/Screenshot.jpg)



### Links

- Solution URL: Pending
- Live Site URL: Pending

## My process

### Built with

- Semantic HTML5 markup
- Tailwins CSS
- Flexbox
- Mobile-first workflow
- [Next.js](https://nextjs.org/) - React framework



### What I learned

Select the particular item from the data.json file, from the PlanetComponent.js

```js
const getPlanet = useCallback(() => {
    const thisPlanet = planetsData.find((i) => i.name === `${planetName}`);
    return thisPlanet;
  }, [planetName]);

  useEffect(() => {
    setPlanet(getPlanet());
  }, [getPlanet]);

```


Each planet is rendered dynamically through a reusable component, by calling it from every planet page:

```js
import PlanetComponent from "@/components/PlanetComponent";

export default function Earth() {
  return (
    <PlanetComponent
      planetName="Earth"
      decorColor="decoration-violetlike"
      bgColor="bg-violetlike"
      mobileSize={171}
      tabletSize={284}
      desktopSize={450}
    />
  );
}
```


### Continued development

Continue improving my coding skills by developing challenging applications, like this one.

### Useful resources

- [Responsive Navbar with Next.js and Tailwind](https://www.youtube.com/watch?v=pxxthSFvXFA) - Video tutorial. Provided an example of responsive navbar.
- ChatGPT provided an example for selecting a particular planet data, similar to the code snippet above, getPlanet() function.

## Author


- Website - [Guillermo Dominguez](https://gdominguez2024.vercel.app/)
- Frontend Mentor - [@memominguez](https://www.frontendmentor.io/profile/memominguez)

## Acknowledgments


Thanks to all those who share their knowledge, free of charge, through video tutorials in the youtube platform.

