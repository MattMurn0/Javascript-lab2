export default function renderAbout(about){
	return `
	<section id="about">
		<h1 class="title">
			<i class="fa-solid fa-address-card"></i>
			${about.name}
		</h1>
	</section>
	<div>
		<div class="row">
			<div class="col-6"> 
				<image class="img-container" src=${about.photo} alt="Profile picture"></image>
				<p class="bold">${about.title}</p>
				<div class="row">
					<p><i class="fa-solid fa-inbox animate__animated animate__fadeIn"></i> ${about.email} | 
						<i class="fa-brands fa-github-square animate__animated animate__fadeIn"></i> <a href="${about.github}">Github</a> |

					</p>
				</div>
			</div> 
			<div class="col-6"> <p>Matthew Murno is a Computer Science Student at Boston College. His plan is to go into either Web Development or Video Game Design as a career out of college. He challeneges himself by working on many projects in Computer Science and Art. 
				He likes to create new ways to play Video Games, as well as different aestetics to go with recording video games live. The different Art Projects he creates are just the surface of the precision and detail he puts into his work.</p>
			</div>
		</div>
	</div>
	`
};