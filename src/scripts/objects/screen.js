import { createEventItens } from "../Events/eventItens.js";

const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user){
        this.userProfile.innerHTML = ` <div class="info">
                                            <img src="${user.avatarUrl}" alt="Foto do perfil do usuário" />
                                            <div class="data">
                                                <h1>${user.name ?? 'Não possui nome cadastrado 😒'}</h1>
                                                <p>${user.bio ?? 'Não possui bio cadastrada 😢'}</p>
                                                <br>
                                                    <div class="follows">
                                                        <div class="followers">
                                                            <span>Followers</span>
                                                            <p>${user.followers}</p>
                                                        </div>
                                                        <div class="following">
                                                            <span>Following</span>
                                                            <p>${user.following}</p>
                                                        </div>
                                                    </div>
                                            </div>
                                        </div> `
        let repositoriesItens = ''
        user.repositories.forEach((repo) => {
             repositoriesItens +=  `<li>
                                        <a href="${repo.html_url}"target="_blank">${repo.name}</a>
                                        <div class="info">
                                            <p class="forks">
                                                <i class="fa-solid fa-code-fork"></i>
                                                ${repo.forks_count}
                                            </p>
                                            <p class="stargazes">
                                                <i class="fa-solid fa-star"></i>
                                                ${repo.stargazers_count}
                                            </p>
                                            <p class="watchers">
                                                <i class="fa-solid fa-eye"></i>
                                                ${repo.watchers_count}
                                            </p>
                                        </div>
                                        <p class="language">
                                            <i class="fa-solid fa-code"></i>
                                            ${repo.language ?? "Desconhecida"}
                                        </p>
                                    </li>`});

        if(user.repositories.length > 0){
            this.userProfile.innerHTML += `<div class="repositories section">
                                                <h2>Repositórios</h2>
                                                <ul>${repositoriesItens}</ul>
                                            </div>`
        }
        
        this.renderEvents(user);
    },

    renderEvents(user) {
        let eventItens = "";

        user.events.forEach((event) => {
            eventItens = createEventItens(eventItens, event)
        });

        this.userProfile.innerHTML += ` <div class="event-section">
                                            <h2>Eventos (${user.events.length})</h2>
                                            <ul class="event-list">
                                                ${eventItens}
                                            </ul>
                                        </div> `;
    },

    renderNotFound(){
        this.userProfile.innerHTML = `<h3>Usuário não encontrado</h3>`
    },
}

export { screen }