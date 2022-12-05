const projectsThumbnail = () => {


    
};

const projectsModal = (projectName) => {};

const projectsDataFetch = async () => {
  const projectsDataRaw = await fetch('/data/projectsData.json');
  const projectsDataObj = await projectsDataRaw.json();
  const projectsData = projectsDataObj['projects'];
  // projectsData.map(createSyntaxCosmos);
};
