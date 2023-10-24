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
  name,
  lasName,
  phone,
  state,
  profile
) => {
  const uid = auth.currentUser.uid;
  const data = {
    name: name,
    lastName: lasName,
    phone: phone,
    //state: state,
    profile: profile,
  };
  return await setDoc(doc(db, "users", uid), data);
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

export { addUserFirestore, getProfileFromUid };

// usuário oferecer esportes e poder participar de outros esportes oferecidos por outros usuários (ex: futebol, vôlei, basquete, etc).
// O usuário poderá oferecer um esporte e definir o local, data e horário que ele será realizado.
