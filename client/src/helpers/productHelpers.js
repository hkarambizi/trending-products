import _ from 'lodash'
const returnSearchMatches = (term) => (product) => {
    term = term.toLowerCase()
    return product.itemName.toLowerCase().includes(term) || product.restaurant.toLowerCase().includes(term)
}

const showFavorites = (faves) => (product) => product._id === faves[product._id];

const returnBoolean = (boolean) => (product) => boolean; // arbitrary call to return true when passed in
export {showFavorites, returnSearchMatches, returnBoolean};
