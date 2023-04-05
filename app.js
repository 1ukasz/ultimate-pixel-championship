import { welcomeScreen } from './js/screens/welcome-screen.js';
import { wizardScreen } from './js/screens/wizard-screen.js';

document.addEventListener('DOMContentLoaded', () => {
   const app = document.querySelector('#app');
   //margins
   const topMargin = document.createElement('img');
   topMargin.classList.add('top-margin');
   topMargin.src = 'src/topMargin.png';

   const btmMargin = document.createElement('img');
   btmMargin.classList.add('btm-margin');
   btmMargin.src = 'src/btmMargin.png';

   const displayWelcomeScreen = welcomeScreen();
   const displayWizardScreen = wizardScreen();

   // Display margins
   app.append(topMargin);
   app.append(btmMargin);

   // Display welcome screen
   app.append(displayWelcomeScreen);

   // Display wizard screen
   // app.append(displayWizardScreen);
});
