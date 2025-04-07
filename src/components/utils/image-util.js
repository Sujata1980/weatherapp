function getImageURL(name) {
    return new URL(`https://openweathermap.org/img/wn/${name}@2x.png`, import.meta.url).href
  }
  
  export {getImageURL};