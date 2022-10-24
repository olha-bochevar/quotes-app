const key = '3bi0x7y+JEQpm5RJX10t6Q==qKLYLOy798n8D7Ng';

const getQuote = async (category) =>{
    const options = {
        method: 'GET',
        headers: {
            'X-Api-Key': key
        }
    };

    const base = 'https://api.api-ninjas.com/v1/quotes?category=';
    const query = `${category}`;

    const response = await fetch(base+query, options);
    const data = await response.json();

    return data[0];
};





   