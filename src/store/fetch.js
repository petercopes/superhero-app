const accessToken = "2070372629804352";
const url = `https://superheroapi.com/api/${accessToken}/1`;

try {
    const res = await fetch(url);
    if(!res.ok){
        throw new Error('sds');
    }
    const data = await res.json();

} catch (error) {
    console.log(error);
}