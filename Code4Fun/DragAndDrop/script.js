const column = $(".column");

const item = $(".item");

item.on("dragstart", function () {
    $(this).addClass("dragging"); // Adiciona a classe "dragging" ao item sendo arrastado
});

item.on("dragend", function () {
    $(this).removeClass("dragging"); // Remove a classe "dragging" do item após terminar de arrastar
});

column.each(function () {
    $(this).on("dragover", function (e) {
        e.preventDefault(); // Impede o comportamento padrão do navegador para permitir soltar elementos

        const dragging = $(".dragging"); // Obtém o item sendo arrastado

        const element = getPreviousElementToTheNewPosition($(this), e.clientY); // Obtém o elemento referência com base na coluna e na posição Y do mouse

        if (element) {
            element.insertAdjacentElement("afterend", dragging.get(0)); // Insere o item arrastado após o elemento encontrado
        } else {
            $(this).prepend(dragging.get(0)); // Insere o item arrastado no início da coluna
        }
    });
});

// Função para obter o elemento referência para o item arrastado
function getPreviousElementToTheNewPosition(column, posY) {
    const tasks = column.find(".item:not(.dragging)"); // Seleciona todas as tasks na coluna, excluindo o item sendo arrastado
    let result;

    tasks.each(function () {
        const box = this.getBoundingClientRect(); // Obtém as coordenadas do retângulo da task
        const boxCenterY = box.y + box.height / 2; // Calcula o centro vertical da task

        if (posY >= boxCenterY) { // Verifica se a posição do mouse está acima do centro vertical da task
            result = this; // Define a task como o elemento que será usado como posição referência
        }
    });

    return result; // Retorna o elemento que será usado como nova posição referência (pode ser nulo se não houver nenhum elemento encontrado)
}