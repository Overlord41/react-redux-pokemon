export const BUY_POKEMON = 'BUY_POKEMON';
export const RETURN_POKEMON = 'RETURN_POKEMON';


export const buy_pokemon_action = (arg) => {
    return {
        type: BUY_POKEMON,
        payload: arg
    }
}

export const return_pokemon_action = (arg) => {
    return {
        type: RETURN_POKEMON,
        payload: arg
    }
}
