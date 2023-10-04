import data from '../json/data.json' assert { type: 'json' };

const resSummaryList = document.querySelector('.list');

data.forEach((item) => {
    const listItemInner = createListItem(item);

    const listItem = document.createElement("li");
    listItem.classList.add("list__item");
    listItem.classList.add(getItemColor(item));

    listItem.innerHTML = listItemInner;

    resSummaryList.appendChild(listItem);
});

console.log(data);

function createListItem(data) {
    const markup =
        `<div class="list__item-label">
            <img
                src="${data.icon}"
                alt="summary item icon"
            />
            <p>${data.category}</p>
        </div>

        <p>${data.score} <span>/ 100</span></p>`;

    return markup;
}

function getItemColor(data) {
    switch (data.category) {
        case "Reaction":
            return 'light-red';
        case "Memory":
            return 'orange-yellow';
        case "Verbal":
            return 'green-teal';
        case "Visual":
            return 'cobalt-blue';
        default:
            return 'orange-yellow';
    }
}