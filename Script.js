// year
document.getElementById("year").textContent = new Date().getFullYear();

const OFFER_URL = "https://smrturl.co/a/s0f386d23e3/576?s1=";

document.getElementById("ctaTop").onclick = () => {
  document.getElementById("verifyBox")
    .scrollIntoView({ behavior: "smooth" });
};

const socialProof = [
  { name: "Jason Miller", img: "https://randomuser.me/api/portraits/men/11.jpg" },
  { name: "Emily Johnson", img: "https://randomuser.me/api/portraits/women/12.jpg" }
];

let i = 0;
const spAvatar = document.getElementById("spAvatar");
const spName = document.getElementById("spName");
const spMsg = document.getElementById("spMsg");

function showProof() {
  const p = socialProof[i];
  spAvatar.src = p.img;
  spName.textContent = p.name;
  spMsg.textContent = "just claimed $100 via PayPal";
  i = (i + 1) % socialProof.length;
}

setInterval(showProof, 6000);
showProof();

document.getElementById("spToast").onclick = () => {
  window.open(OFFER_URL, "_blank");
};

document.getElementById("spClose").onclick = (e) => {
  e.stopPropagation();
  document.getElementById("spToast").classList.add("sp-hide");
};
