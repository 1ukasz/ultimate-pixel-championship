export const welcomeScreen = () => {
   const welcomeStepWrapper = document.createElement('div');
   //header
   const titleTop = document.createElement('h2');
   const titleBottom = document.createElement('h2');
   const textTitleTop = document.createTextNode('Ultimate Pix');
   const appTitleBottom = document.createTextNode('Championships');
   titleTop.appendChild(textTitleTop);
   titleTop.classList.add('top-title');
   titleBottom.appendChild(appTitleBottom);
   titleBottom.classList.add('btm-title');

   //swords icon
   const swordsImg = document.createElement('img');
   swordsImg.src = 'src/Swords.png';
   swordsImg.alt = 'Swords image in pixel art';

   //additional info
   const addInfo = document.createElement('h3');
   addInfo.classList.add('subtitle');
   addInfo.innerText = 'Fill out the form to sign up for upcoming tournee.';

   //button

   const chooseBtn = document.createElement('button');
   chooseBtn.classList.add('choose-btn');
   chooseBtn.innerText = 'Choose';

   //appending
   welcomeStepWrapper.appendChild(titleTop);
   welcomeStepWrapper.appendChild(titleBottom);
   welcomeStepWrapper.appendChild(swordsImg);
   e;
   welcomeStepWrapper.appendChild(addInfo);
   return welcomeStepWrapper;
};
