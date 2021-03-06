import { elements } from './base';

export const getCartItem = () => elements.cartItem.value;
export const getCartUnit = () => elements.cartUnit.value;
export const getCartQty = () => elements.cartQty.value;

export const clearCartItem = () => {
    elements.cartItem.value = '';
};

export const clearCartQty = () => {
    elements.cartQty.value = '';
};

export const clearCartUnit = () => {
    elements.cartUnit.value = 'cup';
};

export const renderItem = item => {
    const markup = `
        <li class="shopping__item" data-itemid=${item.id}>
            <div class="shopping__count">
                <input type="number" value="${item.count}" step="${item.count}" class="shopping__count-value">
                <p>${item.unit}</p>
            </div>
            <p class="shopping__description">${item.ingredient}</p>
            <button class="shopping__delete btn-tiny">
                <svg>
                    <use href="dist/img/icons.svg#icon-circle-with-cross"></use>
                </svg>
            </button>
        </li>
    `;
    elements.shopping.insertAdjacentHTML('beforeend', markup);
};

export const deleteAll = () => {
    document.querySelector('.shopping__list').innerHTML = "";
};

export const deleteAllToggle = (e) => {
    let toggle = document.querySelector('div .delete__btn').style;
    e ? toggle.display = "block" : toggle.display = "none";
};

export const deleteItem = id => {
    const item = document.querySelector(`[data-itemid="${id}"]`);
    if (item) item.parentElement.removeChild(item);
};
