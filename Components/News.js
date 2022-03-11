export default function renderNews(news){
	return `
	<section id="news">
		<h1 class="title"><i class="fa-solid fa-newspaper"></i> News</h1>
		<div class="search">
    		<input type="search" name='news' placeholder="Search News...">
		</div>
		<div class="newsList">
${news.map(newsitem=>renderNewsItem(newsitem)).join("")}
		</div>
	</section>
				`;
};

export function renderNewsItem(newsitem) {
	return `
<div class="row">
	<div class="col-8">
		<p>${newsitem.title}</p>
	</div>
	<div class="col-4">
		<div class="dates">
			<p>${newsitem.date}</p>
		</div>
	</div>
</div>`;
};

export function handleNewsFilter(data) {
    const search = document.querySelector('.search input[name="news"]')
    search.addEventListener('input', (event)=>{
        const value = event.target.value;
        const filtered = data.news.filter(d=>d.title.toLowerCase().includes(value.toLowerCase()))
        const newsList = document.querySelector(".newsList");
        newsList.innerHTML = filtered.map(newsitem=>renderNewsItem(newsitem)).join("");
})};