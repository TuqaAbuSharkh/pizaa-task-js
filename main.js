async function gettype(){
    const response = await fetch(`https://forkify-api.herokuapp.com/api/search?q=pizza`);
    const data = await response.json();
    const types = data.recipes;

    const result = types.map(function(ele){
        return `
        <div class="type">
        <h2>${ele.title}</h2>
        <img src="${ele.image_url}"/>
        </div>`;
    }).join('');

    document.querySelector('.pizaa').innerHTML = result;
}
gettype();