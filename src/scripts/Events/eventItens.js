const createEventItens = (variableToStoreEvents, event) => {
    if (event.type == "PushEvent") {
        variableToStoreEvents += `
                                <li class="event-item">
                                    <strong class="name">${event.repo.name}</strong>
                                    <span class="message">
                                        - ${event.payload.commits[0].message}
                                    </span>
                                </li>
                                `;
      } else {
        variableToStoreEvents += `
                                <li class="event-item">
                                    <strong class="name">${event.repo.name}</strong>
                                    <span class="message empty">
                                        - não há mensagem
                                    </span>
                                </li>
                                `;
      }

      return variableToStoreEvents
}

export { createEventItens }