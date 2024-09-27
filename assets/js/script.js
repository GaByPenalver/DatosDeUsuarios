const userData = (() => {
    const container = document.querySelector('#user-data');
    return {
        show: async () => {
            try {
                let response = await fetch('https://randomuser.me/api/?results=10');
                let data = await response.json();

                const userInfo = data.results
                    .map(
                        (i) => `
                            <img src="${i.picture.large}" alt="Imagen de ${i.name.first}">
                                <p>${i.name.first} ${i.name.last}</p>
                                <p>${i.email}</p>
                                <p>${i.cell}</p>
                            
                        
                    `
                    )
                    .join('');

                container.innerHTML = userInfo;
            } catch (error) {
                console.error('Error al obtener los usuarios:', error);
            }
        },
    };
})();

userData.show();
