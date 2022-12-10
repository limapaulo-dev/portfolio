const createProjectsThumbnail = async (project) => {
  const borderLightDiv = document.createElement('div');
  borderLightDiv.classList.add('border-light');
  const thumbnailImg = document.createElement('img');
  thumbnailImg.setAttribute('src', project.thumbnail);
  thumbnailImg.setAttribute('alt', project.name);

  const imgBorderDiv = document.createElement('div');
  imgBorderDiv.classList.add('img-border');
  imgBorderDiv.appendChild(borderLightDiv);
  imgBorderDiv.appendChild(thumbnailImg);

  const projectTitle = document.createElement('h5');
  projectTitle.classList.add('project-title');
  projectTitle.innerHTML = project.name;
  const projectSyntax = document.createElement('p');
  projectSyntax.classList.add('project-syntax');
  projectSyntax.innerHTML = project.thumbnailSyntaxes;

  const thumbnailBodyDiv = document.createElement('div');
  thumbnailBodyDiv.classList.add('thumbnail-body');
  thumbnailBodyDiv.appendChild(projectTitle);
  thumbnailBodyDiv.appendChild(projectSyntax);

  const projectThumbnail = document.createElement('Div');
  projectThumbnail.classList.add('project-thumbnail');
  projectThumbnail.classList.add(project.value);
  projectThumbnail.setAttribute('onclick', `projectsShowModal("${project.value}")`);
  projectThumbnail.appendChild(imgBorderDiv);
  projectThumbnail.appendChild(thumbnailBodyDiv);

  const projects = document.querySelector('.portfolio-projects');
  projects.appendChild(projectThumbnail);
};

const projectsShowModal = async (projectValue) => {
  const projectsDataRaw = await fetch('/data/projectsData.json');
  const projectsDataObj = await projectsDataRaw.json();
  const projectsData = projectsDataObj['projects data'];

  const filteredProjectsData = projectsData.filter((projectObj) => projectObj.value === projectValue);

  const modalimg = document.querySelector('.modal-img');
  const modalTitle = document.querySelector('.modal-project-title');
  const modalSubtitle = document.querySelector('.modal-project-subtitle');
  const modalText = document.querySelector('.modal-project-text');
  const modalPage = document.querySelector('.modal-project-page');

  modalimg.setAttribute('src', filteredProjectsData[0].img[0]);
  modalTitle.innerHTML = filteredProjectsData[0].name;
  modalSubtitle.innerHTML = filteredProjectsData[0].syntaxes;
  modalText.innerHTML = filteredProjectsData[0].abstract;
  modalPage.setAttribute('href', filteredProjectsData[0].link);

  const modal = document.querySelector('.project-modal');
  modal.style.display = 'block';
};

const projectsDataFetch = async () => {
  const projectsDataRaw = await fetch('/data/projectsData.json');
  const projectsDataObj = await projectsDataRaw.json();
  const projectsData = projectsDataObj['projects data'];
  projectsData.map(createProjectsThumbnail);
};

const projectsThumbRunAnim = () => {
  const thumblight = Array.from(document.querySelectorAll('.border-light'));
  thumblight.map((element) => {
    element.classList.add('projects-light-anim');
  });
};

const projectsThumbStopAnim = () => {
  const thumblight = Array.from(document.querySelectorAll('.border-light'));
  thumblight.map((element) => {
    element.classList.remove('projects-light-anim');
  });
};


const showProjectsModal = () => {
  modal.style.display = 'block';
};
const closeProjectsModal = () => {
  modal.style.display = 'none';
};