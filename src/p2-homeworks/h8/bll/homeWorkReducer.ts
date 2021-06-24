type UserType = {
    _id: number
    name: string
    age: number
}

type SortNameUpType = {
    type: "sort"
    payload: "up"
}

type SortNameDownType = {
    type: "sort"
    payload: "down"
}

type CheckAgeType = {
    type: "check"
    payload: number
}

type ActionType = SortNameUpType | SortNameDownType | CheckAgeType

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => {
    switch (action.type) {
        case "sort": {
            if (action.payload === 'up') {
                return [...state].sort((a, b) => {
                    if (a.name > b.name) return 1

                    else if (a.name < b.name) return -1

                    else return 0
                })
                /*return action.payload === "up" ? newState : newState.reverse()*/
            } else if (action.payload === 'down') {
                    return [...state].sort(function (a, b) {
                        if (a.name > b.name) {
                            return -1
                        }
                        if (a.name < b.name) {
                            return 1
                        }
                        return 0
                    })
                }
            }

        case
            "check":
            {
                return state.filter(el => el.age >= action.payload)
            }
        default:
            return state
        }
    }