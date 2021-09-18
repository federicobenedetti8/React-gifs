

export const getGifs = async (category) => {
    const url = (`https://api.giphy.com/v1/gifs/search?limit=6&api_key=gemKml3XUGyv639hYzz0WZKYmLW0yyou&q=${ encodeURI( category ) }`);
    const resp = await fetch(url);
    const { data } = await resp.json();
    
    const gifs = data.map( gif => {
        return {
            id: gif.id,
            title: gif.title,
            img: gif.images?.downsized_medium.url,     
        }
    });  

    return gifs;
}