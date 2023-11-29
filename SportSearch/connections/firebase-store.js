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

//FUNCAO PARA ADD USUARIO NO FIRESTORE
const addUserFirestore = async (
  userCredential,
  email,
  name,
  lasName,
  phone,
  profile
) => {
  const uid = auth.currentUser.uid;
  const data = {
    uid: uid,
    name: name,
    lastName: lasName,
    phone: phone,
    profile: profile,
    email: email,
  };
  return await setDoc(doc(db, "users", uid), data);
};

// FUNCAO PARA ADD EVENTO NO FIRESTORE
const addEventFirestore = async (
  nomeEvento,
  localEvento,
  cidade,
  estado,
  horario,
  dataEvento,
  totalPessoas,
  atualPessoas,
  valor,
  observacoes
) => {
  const uid = auth.currentUser.uid;
  const data = {
    uid: uid,
    nomeEvento: nomeEvento,
    localEvento: localEvento,
    cidade: cidade,
    estado: estado,
    horario: horario,
    dataEvento: dataEvento,
    totalPessoas: totalPessoas,
    atualPessoas: atualPessoas,
    valor: valor,
    observacoes: observacoes,
  };
  return await addDoc(doc(db, "users", uid), data);
};

const getProfileFromUid = async (uia) => {
  const docRef = doc(db, "users", uia);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
    return docSnap.data();
  } else {
    console.log("No such document!");
  }
};

export { addUserFirestore, getProfileFromUid, addEventFirestore };

// usuário oferecer esportes e poder participar de outros esportes oferecidos por outros usuários (ex: futebol, vôlei, basquete, etc).
// O usuário poderá oferecer um esporte e definir o local, data e horário que ele será realizado.
