import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getFirestore, doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";
import { firebaseConfig } from "./firebase-config.js";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const loginBtn = document.getElementById("loginBtn");
const saveBtn = document.getElementById("saveBtn");
const nameInput = document.getElementById("nameInput");
const wishlistBox = document.getElementById("wishlist");
const status = document.getElementById("status");
const matchDiv = document.getElementById("match");

let currentName = "";

// Example fixed pairings — you can replace or generate dynamically
const pairs = {
  "Alice": "Bob",
  "Bob": "Charlie",
  "Charlie": "Alice"
};

loginBtn.onclick = async () => {
  currentName = nameInput.value.trim();
  if (!currentName) return alert("Enter your name!");
  document.getElementById("login").style.display = "none";
  document.getElementById("app").style.display = "block";
  document.getElementById("welcome").textContent = `Welcome, ${currentName}!`;
  await loadWishlist();
  showMatch();
};

async function loadWishlist() {
  const ref = doc(db, "wishlists", currentName);
  const snap = await getDoc(ref);
  if (snap.exists()) wishlistBox.value = snap.data().text;
}

saveBtn.onclick = async () => {
  const ref = doc(db, "wishlists", currentName);
  await setDoc(ref, { text: wishlistBox.value });
  status.textContent = "✅ Saved!";
  setTimeout(()=>status.textContent="",2000);
};

function showMatch() {
  const match = pairs[currentName];
  if (match)
    matchDiv.innerHTML = `🎁 You are Secret Santa for <strong>${match}</strong>!`;
  else
    matchDiv.innerHTML = "Pairing not found yet.";
}
