window.onload = function(color){
  function backgroundChanges(){
    let content = document.querySelector('.content');
    content.style.backgroundColor = color;
    localStorage.setItem('backgroundColor', color);
  }

  function fontColor(color){
    let text = document.querySelectorAll('.paragraph');
    text.style.color = color;
    localStorage.setItem('fontColor', color);
  }

  function fontSize(size){
    let font = document.querySelectorAll('.paragraph');
    for (let i = 0; i < font.length; i +=1){
      font[i].style.fontSize = size;
    }
    localStorage.setItem('fontSize', size)
  }

  function lineHeight(height){
    let lineHeight = document.querySelectorAll('.paragraph');
    for (let i = 0; i < lineHeight.length; i += 1){
      lineHeight[i].style.height = height;
    }
    localStorage.setItem('height', height)
  }

  function fontFamily(family){
    let font = document.querySelectorAll('.paragraph');
    for (let i = 0; i < font.length; i += 1){
      font[i].style.fontFamily = family;
    }
    localStorage.setItem('fontFamily', family);
  }

  //backgroundColor
  let backgroundButton = document.querySelectorall('#backgroundColor');
  for (let i = 0; i < backgroundButton.length; i += 1){
    backgroundButton[i].addEventListener('click', function(event){
      backgroundChanges(event.target.innerHTML);
    })
  }

  //fontColor
  let fontColorButton = document.querySelectorAll('#textColor');
  for (let i = 0; i < fontColorButton.length; i += 1){
    fontColorButton.addEventListener('click', function(event){
      fontColor(event.target.innerHTML);
    })
  }

  //fontSize
  let fontSizeButton = documen.querySelectorAll('#fontSize');
  for (let i = 0; i < fontSizeButton.length; i += 1){
    fontSizeButton.addEventListener('click', function(event){
      fontSize(event.target.innerHTML);
    })
  }

  //lineHeight
  let lineHeightButton = document.querySelectorAll('#lineHeight');
  for (let i = 0; i < lineHeightButton.length; i += 1){
    lineHeightButton.addEventListener('click', function(event){
      lineHeight(event.target.innerHTML);
    })
  }

  //fontFamily
  let fontFamilyButton = document.querySelectorAll('#fontFamily');
  for (let i = 0; i < fontFamilyButton.length; i += 1){
    fontFamilyButton.addEventListener('click', function(event){
      fontFamily(event.target.innerHTML);
    })
  }

  function start(){
    let background = localStorage.getItem('backgroundColor');
    if (background) backgroundColor(background);

    let font = localStorage.getItem('fontColor');
    if (font) fontColor(font);

    let size = localStorage.getItem('fontSize');
    if (size) fontSize(size);

    let line = localStorage.getItem('height');
    if (line) lineHeight(line);

    let family = localStorage.getItem('fontFamily');
    if (family) fontFamily(family);
  }

  start();
};

