const bod = document.body


const colorSelect =  (ColorName) =>{
  bod.style.backgroundColor = ColorName
}

const BgRandomColor = () =>{
  const red = Math.round(Math.random() * 255)
  const green = Math.round(Math.random() * 255)
  const blue = Math.round(Math.random() * 255)
  const bgcolor = `rgb(${red}, ${green}, ${blue})`
  
  bod.style.backgroundColor = bgcolor;
}

