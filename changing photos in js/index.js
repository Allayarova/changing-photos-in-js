function bosildi(r)
{
    bosh.src = r.src;

    sarlavha.innerHTML = r.title;


    let images = document.getElementsByTagName('img')

    for (let i = 0; i < images.length; i++)
    {
       images[i].style = " ";
    }

    r.style = "transform:scale(1.15); border:3px solid black ;border-radius:15px;"
}