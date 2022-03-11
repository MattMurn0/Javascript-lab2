export default function renderNavBar(page){
	const nav =document.querySelector("nav");

	nav.innerHTML = page ==="main"?`
			<ul>
				<li><a class='nav-item' href="#about">About <i class="fa-regular fa-address-card"></i></a></li>
				<li ><a class='nav-item' href="#news">News <i class="fa-regular fa-newspaper"></i></a></li>
				<li><a class='nav-item' href="#projects">Projects <i class="fa-solid fa-laptop-code"></i></a></li>
			</ul>`:`
			<ul>
				<li>
					<a class='nav-item' href=".">Go Back</a>
				</li>
			</ul>`;
};