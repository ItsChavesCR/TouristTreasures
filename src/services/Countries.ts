const urlUsersBase = 'https://6632f68bf7d50bbd9b47beee.mockapi.io/countries';

const getAllCountries = async () => {
    const response = await fetch(urlUsersBase);
    const result = await response.json();
    return result;
};

const getCountryById = async (id: number) => {
    const response = await fetch(`${urlUsersBase}/${id}`);
    const result = await response.json();
    return result;
}

export {
    getAllCountries,
    getCountryById
}