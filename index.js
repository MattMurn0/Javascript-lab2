import renderNavBar from './Components/Navbar.js';
import renderMainPage from './Components/MainPage.js';
import renderProjectPage from './Components/ProjectPage.js';
fetch('Assets/data.json')
.then(resp=>resp.json())
.then(data=>{
    // console.log('loaded:',d);
    // determine what page to render
    const urlParams = new URLSearchParams(window.location.search);
	const projectId = urlParams.get("project");
	const page = projectId==null?"main":"project-detail";

	if (urlParams.get('project')==null){
		renderNavBar(page);
		renderMainPage(data);
	}
	else {
        renderNavBar(page)
		const project = data.personalProjects.concat(data.classProjects).find(project=>project.id===projectId);
		renderProjectPage(project);
	}
});