const HOST = 'http://localhost:4002';

const api = (endpoint, method, data) => {
  return fetch(endpoint, {
    method,
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(data),
  }).then((response) => {
    if (!response.ok) {
      throw new Error('Ups, something on our servers went wrong!');
    }

    return response.json();
  });
}

const addPerson = async (person) => await api(`${HOST}/people`, 'POST', person);
const editPerson = async (person) => await api(`${HOST}/people/${person.id}`, 'PATCH', person);
const getPerson = async (id) => await api(`${HOST}/people/${id}`, 'GET');


export {
   addPerson,
   editPerson,
   getPerson
};