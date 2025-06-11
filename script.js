const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

const rowEl = document.querySelector(".row");

for (let i = 0; i < teamMembers.length; i++) {
  const thisMember = teamMembers[i];
  const { name, role, email, img } = thisMember;
  renderString = `<div class="col-4">
      <div class="card">
      <div class="card-image">
        <img src='${img}'>
      </div>
      <div class="card-info">
        <span>${name}</span>
        <span>${role}</span>
        <a href="#">${email}</a>
      </div>
    </div>`;
  rowEl.insertAdjacentHTML('beforeend', renderString);
}
