import * as tcActions from "../actions/tourCenter"

const initialState: TourCenter[] = [
    {
        id: 1,
        name: "Lekki",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
        imagePaths: ["https://source.unsplash.com/900x700/?tour", "https://source.unsplash.com/900x700/?tour", "https://source.unsplash.com/900x700/?tour"],
        displayImagePath: "https://source.unsplash.com/900x700/?tour"
    },
    {
        id: 2,
        name: "Eko Hotel",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
        imagePaths: ["https://source.unsplash.com/900x700/?tour", "https://source.unsplash.com/900x700/?tour", "https://source.unsplash.com/900x700/?tour"],
        displayImagePath: "https://source.unsplash.com/900x700/?tour"
    },
    {
        id: 3,
        name: "Ikorodu",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
        imagePaths: ["https://source.unsplash.com/900x700/?tour", "https://source.unsplash.com/900x700/?tour", "https://source.unsplash.com/900x700/?tour"],
        displayImagePath: "https://source.unsplash.com/900x700/?tour"
    },
    {
        id: 4,
        name: "Badagry",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
        imagePaths: ["https://source.unsplash.com/900x700/?tour", "https://source.unsplash.com/900x700/?tour", "https://source.unsplash.com/900x700/?tour"],
        displayImagePath: "https://source.unsplash.com/900x700/?tour"
    },
    {
        id: 5,
        name: "Lagos",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
        imagePaths: ["https://source.unsplash.com/900x700/?tour", "https://source.unsplash.com/900x700/?tour", "https://source.unsplash.com/900x700/?tour"],
        displayImagePath: "https://source.unsplash.com/900x700/?tour"
    },
    {
        id: 6,
        name: "Phelix Lounge",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
        imagePaths: ["https://source.unsplash.com/900x700/?tour", "https://source.unsplash.com/900x700/?tour", "https://source.unsplash.com/900x700/?tour"],
        displayImagePath: "https://source.unsplash.com/900x700/?tour"
    },
    {
        id: 7,
        name: "Water Fall",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
        imagePaths: ["https://source.unsplash.com/900x700/?tour", "https://source.unsplash.com/900x700/?tour", "https://source.unsplash.com/900x700/?tour"],
        displayImagePath: "https://source.unsplash.com/900x700/?tour"
    },
    {
        id: 8,
        name: "Crics & Crocs",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
        imagePaths: ["https://source.unsplash.com/900x700/?tour", "https://source.unsplash.com/900x700/?tour", "https://source.unsplash.com/900x700/?tour"],
        displayImagePath: "https://source.unsplash.com/900x700/?tour"
    },
    {
        id: 9,
        name: "Abule",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
        imagePaths: ["https://source.unsplash.com/900x700/?tour", "https://source.unsplash.com/900x700/?tour", "https://source.unsplash.com/900x700/?tour"],
        displayImagePath: "https://source.unsplash.com/900x700/?tour"
    },
]

export default (state = initialState, action:any) => {
    switch (action.type) {
        case tcActions.ADD_TOUR_CENTER:
        default:
            return state
    }
}