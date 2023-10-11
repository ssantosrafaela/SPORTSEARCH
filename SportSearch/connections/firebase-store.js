import {
  getFirestore,
  collection,
  addDoc,
  setDoc,
  doc,
} from "firebase/firestore";
import { auth } from "./firebase-auth";
import { app } from "./firebase-app";

const db = getFirestore(app);

//FUNCAO PARA ADICIONAR UM DOCUMENTO NA COLEÇÃO "DOGS"
// const addDogFirebase = async (dogNome, dogRaca, dogPeso) => {
//   // Add a new document with a generated id.
//   //NESSE CASO, A CHAVE DO DOCUMENTO É DEFINIDA PELO FIREBASE
//   const docRef = await addDoc(collection(db, "dogs"), {
//     nome: dogNome,
//     peso: dogPeso,
//     raca: dogRaca,
//     user: auth.currentUser.uid, //Define cão como do usuario atual
//   });
// };

//FUNCAO PARA ADD USUARIO NO FIRESTORE
const addUserFirestore = async (
  userCredential,
  nome,
  sobrenome,
  telefone,
  dataNascimento,
  genero,
  estado,
  cidade,
  email,
) => {
  const uid = auth.currentUser.uid;
   const data = {
    userCredential: userCredential,
    name: nome,
    lastName: sobrenome,
    birth: dataNascimento,
    phone: telefone,
    genro: genero,
    state: estado,
    city: cidade,
    email: email,
  };
  return await setDoc(doc(db, "users", uid), data);
};

export { addDogFirebase, addUserFirestore };

// usuário oferecer esportes e poder participar de outros esportes oferecidos por outros usuários (ex: futebol, vôlei, basquete, etc). 
// O usuário poderá oferecer um esporte e definir o local, data e horário que ele será realizado. 