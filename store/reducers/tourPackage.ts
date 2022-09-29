import * as tpActions from "../actions/tourPackage"

const initialState: TourPackage[] = [
    {
        id: 1,
        name: "Premuim",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
         imagePaths: ["https://source.unsplash.com/900x700/?package", "https://source.unsplash.com/900x700/?package", "https://source.unsplash.com/900x700/?package"],
         displayImagePath: "https://source.unsplash.com/900x700/?package"
    },
    {
        id: 2,
        name: "Gold",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
         imagePaths: ["https://source.unsplash.com/900x700/?package", "https://source.unsplash.com/900x700/?package", "https://source.unsplash.com/900x700/?package"],
         displayImagePath: "https://source.unsplash.com/900x700/?package"
    },
    {
        id: 3,
        name: "Silver",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
         imagePaths: ["https://source.unsplash.com/900x700/?package", "https://source.unsplash.com/900x700/?package", "https://source.unsplash.com/900x700/?package"],
         displayImagePath: "https://source.unsplash.com/900x700/?package"
    },
    {
        id: 4,
        name: "Bronze",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
         imagePaths: ["https://source.unsplash.com/900x700/?package", "https://source.unsplash.com/900x700/?package", "https://source.unsplash.com/900x700/?package"],
         displayImagePath: "https://source.unsplash.com/900x700/?package"
    },
    
];

export default (state = initialState, action:any) => {
    switch (action.type) {
        case tpActions.ADD_TOUR_PACKAGE:
        default:
            return state
    }
}