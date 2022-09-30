import * as tcActions from "../actions/touristReview"

const initialState: TouristReview[] = [
    {
        id: 1,
        email: "ade@gmail.com",
        description: "at Lekki conservation Centre",
        touristPics: "https://source.unsplash.com/900x700/?package",
        imagePaths: ["https://source.unsplash.com/900x700/?tour", "https://source.unsplash.com/900x700/?tour", "https://source.unsplash.com/900x700/?tour"],
        displayImagePath: "https://source.unsplash.com/900x700/?tour"
    },
    {
        id: 2,
        email: "ade2@gmail.com",
        description: "at Lekki conservation Centre",
        touristPics: "https://source.unsplash.com/900x700/?package",
        imagePaths: ["https://source.unsplash.com/900x700/?tour", "https://source.unsplash.com/900x700/?tour", "https://source.unsplash.com/900x700/?tour"],
        displayImagePath: "https://source.unsplash.com/900x700/?package"
    },
    {
        id: 3,
        email: "ade3@gmail.com",
        description: "at Lekki conservation Centre",
        touristPics: "https://source.unsplash.com/900x700/?package",
        imagePaths: ["https://source.unsplash.com/900x700/?tour", "https://source.unsplash.com/900x700/?tour", "https://source.unsplash.com/900x700/?tour"],
        displayImagePath: "https://source.unsplash.com/900x700/?package"
    },
    {
        id: 4,
        email: "ade4@gmail.com",
        description: "at Lekki conservation Centre",
        touristPics: "https://source.unsplash.com/900x700/?package",
        imagePaths: ["https://source.unsplash.com/900x700/?tour", "https://source.unsplash.com/900x700/?tour", "https://source.unsplash.com/900x700/?tour"],
        displayImagePath: "https://source.unsplash.com/900x700/?package"
    },
    {
        id: 5,
        email: "ade5@gmail.com",
        description: "at Lekki conservation Centre",
        touristPics: "https://source.unsplash.com/900x700/?package",
        imagePaths: ["https://source.unsplash.com/900x700/?tour", "https://source.unsplash.com/900x700/?tour", "https://source.unsplash.com/900x700/?tour"],
        displayImagePath: "https://source.unsplash.com/900x700/?package"
    },
    {
        id: 6,
        email: "ade6@gmail.com",
        description: "at Lekki conservation Centre",
        touristPics: "https://source.unsplash.com/900x700/?package",
        imagePaths: ["https://source.unsplash.com/900x700/?package", "https://source.unsplash.com/900x700/?package", "https://source.unsplash.com/900x700/?package"],
        displayImagePath: "https://source.unsplash.com/900x700/?package"
    },
]

export default (state = initialState, action:any) => {
    switch (action.type) {
        case tcActions.ADD_TOURIST_REVIEW :
        default:
            return state
    }
}