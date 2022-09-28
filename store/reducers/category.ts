import * as categoryActions from "../actions/category"

const initialState : Category[]= [
    {
        id: 1,
        name: "Outdoors",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
        imagePaths: ["https://source.unsplash.com/900x700/?category", "https://source.unsplash.com/900x700/?category", "https://source.unsplash.com/900x700/?category"],
        displayImagePath: "https://source.unsplash.com/900x700/?category"
    },
    {
        id: 2,
        name: "Art and Culture",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
        imagePaths: ["https://source.unsplash.com/900x700/?category", "https://source.unsplash.com/900x700/?category", "https://source.unsplash.com/900x700/?category"],
        displayImagePath: "https://source.unsplash.com/900x700/?category"
    },
    {
        id: 3,
        name: "Wild Life",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
        imagePaths: ["https://source.unsplash.com/900x700/?category", "https://source.unsplash.com/900x700/?category", "https://source.unsplash.com/900x700/?category"],
        displayImagePath: "https://source.unsplash.com/900x700/?category"
    },
    {
        id: 4,
        name: "By The Water",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
        imagePaths: ["https://source.unsplash.com/900x700/?category", "https://source.unsplash.com/900x700/?category", "https://source.unsplash.com/900x700/?category"],
        displayImagePath: "https://source.unsplash.com/900x700/?category"
    },
    {
        id: 5,
        name: "Symposium",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
        imagePaths: ["https://source.unsplash.com/900x700/?category", "https://source.unsplash.com/900x700/?category", "https://source.unsplash.com/900x700/?category"],
        displayImagePath: "https://source.unsplash.com/900x700/?category"
    },
    {
        id: 6,
        name: "Museums",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
        imagePaths: ["https://source.unsplash.com/900x700/?category", "https://source.unsplash.com/900x700/?category", "https://source.unsplash.com/900x700/?category"],
        displayImagePath: "https://source.unsplash.com/900x700/?category"
    }
]

export default (state = initialState, action:any) => {
    switch (action.type) {
        case categoryActions.ADD_CATEGORY:
        default:
            return state
    }
}

