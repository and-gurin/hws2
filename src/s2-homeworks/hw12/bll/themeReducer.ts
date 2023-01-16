const initState = {
    themeId: '1',
}

export type ActionType = {
    type: 'SET_THEME_ID'
    id: string
}

export type StateType = {
    themeId: string
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

export const changeThemeId = (id: string): ActionType => ({ type: 'SET_THEME_ID', id })
