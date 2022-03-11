export default function renderProjects(personalProjects, classProjects){
	return `
	<section id="projects">
		<h1 class="title"><i class="fa-solid fa-laptop-code"></i> Projects</h1>
		<div class="filter">
			<label>
				<input type="radio" name="filter" value="all" checked>
				All
			</label>
		<label>
			<input type="radio" name="filter" value="Adobe">
			Adobe
		</label>
		<label>
			<input type="radio" name="filter" value="Programming">
			Programming
		</label>
	</div>
		<div>
			<h3><i class="fa-solid fa-house-user"></i> Personal Projects</h3>
		<div>
		<div class="personal-project-list">
${personalProjects.map(personalProject=>renderPersonalProject(personalProject)).join("")}
		</div>
		<div>
			<h3><i class="fa-solid fa-chalkboard-user"></i> Class Projects</h3>
			<div>
		<div class="class-project-list">
${classProjects.map(classProject=>renderClassProject(classProject)).join("")}
		</div>
	</section>
	`;
};

export function renderPersonalProject(personalProject){
	return `
	<div id="${personalProject.id}">
		<p><a href="?project=${personalProject.id}">${personalProject.title}</a></p>
		<image src="${personalProject.teaser}" class="img2-container"><br>
		<p>${personalProject.source}</p>
		<div class="tags">
			<p class="${personalProject.tags}">${personalProject.tags}</p>
		</div>
	</div>`
};

export function renderClassProject(classProject){
	return `
	<div id="${classProject.id}">
		<p><a href="?project=${classProject.id}">${classProject.title}</a></p>
		<image src="${classProject.teaser}" class="img2-container"><br>
		<p>${classProject.source}</p>
		<div class="tags">
			<p class="${classProject.tags}">${classProject.tags}</p>
		</div>
	</div>`
};

export function handleProjectFilter(data){
    let buttons = document.querySelectorAll('.filter input[name="filter"]');
	buttons.forEach(cond=>cond.addEventListener('change', function(event){
		const category = event.target.value;
		category === data.personalProjects.tags;
		if (category != "all") {
			const filteredPersonal = data.personalProjects.filter(personalProject => personalProject.tags==category);
			const filteredClass = data.classProjects.filter(classProject => classProject.tags==category);
			const personalProject = document.querySelector(".personal-project-list");
			const classProject = document.querySelector(".class-project-list");
			personalProject.innerHTML = filteredPersonal.map(personalProject=>renderPersonalProject(personalProject)).join("");
			classProject.innerHTML = filteredClass.map(classProject=>renderClassProject(classProject)).join("");
		}else{
			const filteredPersonal = data.personalProjects;
			const filteredClass = data.classProjects;
			const personalProject = document.querySelector(".personal-project-list");
			const classProject = document.querySelector(".class-project-list");
			personalProject.innerHTML = filteredPersonal.map(personalProject=>renderPersonalProject(personalProject)).join("");
			classProject.innerHTML = filteredClass.map(classProject=>renderClassProject(classProject)).join("");
		}
	}))
};