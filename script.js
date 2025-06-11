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

// Form Inputs
const form = document.getElementById("form");
const inputFullName = document.getElementById("fullName");
const inputJob = document.getElementById("job");
const inputEmail = document.getElementById("email");
const inputImageUrl = document.getElementById("imageUrl");
const inputSubmitBtn = document.getElementById("button");

// Layout Elements
const showSectionBtn = document.getElementById("showSectionBtn");
const hideSectionBtn = document.getElementById("hideSectionBtn");
const rowEl = document.querySelector(".row");
const addMemberSection = document.getElementById("add-member-section");

renderTeam(teamMembers, rowEl)

// Render Team Members
function renderTeam(teamArray, renderEl) {
  rowEl.innerHTML = '';
  for (let i = 0; i < teamArray.length; i++) {
    const thisMember = teamArray[i];
    const { name, role, email, img } = thisMember;
    renderString = `<div class="col">
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
    renderEl.insertAdjacentHTML('beforeend', renderString);
  }
}

// Add New Member
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const fullName = inputFullName.value;
  const job = inputJob.value;
  const email = inputEmail.value;
  const imageUrl = inputImageUrl.value;

  const newMember = {
    name: fullName, role: job, email: email, img: imageUrl
  }

  teamMembers.push(newMember);

  renderTeam(teamMembers, rowEl);
})

