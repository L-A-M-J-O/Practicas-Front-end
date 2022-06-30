const array = [1,2,3,4,5];

array.forEach(function ( element ){
  console.log (element)
});


programaAcciones ( )

function programaAcciones ( )
{
  programaBotonVer ( )
}

function programaBotonVer ( )
{
    const btn = document.getElementById ('ver')
    btn.addEventListener ('click', ( )=> 
    {
        cargarListadoDePosts ( );
    })
}

function cargarListadoDePosts ( )
{
  fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then((res)=>res.json ( ))
  .then((json)=>mostrarListadoDePosts(json))
}

function mostrarListadoDePosts (posts)
{
  const container = document.getElementById ('appContainer')
  posts.forEach((ver)=>{
    mostrarPosts (ver, container)
  })
}

function mostrarPosts (post, div)
{
  const divPost= document.createElement('div')
  divPost.innerHTML= `<h2>${post.title}</h2>
                                    <p>${post.body}</p>
                                    <hr>`
  div.appendChild(divPost);
}

