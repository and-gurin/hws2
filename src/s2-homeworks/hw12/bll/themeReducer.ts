const initState = {
    themeId: 1,
}

export type ActionType = {
    type: 'SET_THEME_ID'
    id: number
}

export type StateType = {
    themeId: number
}

export const themeReducer = (state = initState, action: ActionType) => { // fix any
    switch (action.type) {
        case 'SET_THEME_ID':
        return {
            ...state, themeId: action.id
        }

        default:
            return state
    }
}

export const changeThemeId = (id: number): ActionType => ({ type: 'SET_THEME_ID', id })
