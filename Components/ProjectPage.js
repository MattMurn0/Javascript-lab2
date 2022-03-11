

export default function renderProjectPage(project) {
    const main = document.querySelector("main");
	main.innerHTML = `
	<div id="${project.id}">
		<h3>${project.title}</h3>
		<image src="${project.teaser}" class="img2-container" width=500px><br>
		<p>${project.source}</p>
		<p>${project.description}</p>
	</div>
	`
};