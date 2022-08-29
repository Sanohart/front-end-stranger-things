// Importa as funções do sdk que você precisa
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js';
// Adicione SDKs para os produtos Firebase que você deseja
// https://firebase.google.com/docs/web/setup#available-libraries

// Configuração Firebase do app
const firebaseConfig = {
  apiKey: 'AIzaSyBnQg5XI-N3-JH-6cFomTExxst1UCl3IGQ',
  authDomain: 'sano-stranger-site.firebaseapp.com',
  projectId: 'sano-stranger-site',
  storageBucket: 'sano-stranger-site.appspot.com',
  messagingSenderId: '945167872093',
  appId: '1:945167872093:web:24ff22310d694470481db4',
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

export default app;
