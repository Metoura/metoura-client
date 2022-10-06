import * as blogActions from "../actions/blog"

const initialState : Blog []= [
    {
        id: 1,
        title: "Best places for arts & culture in Lagos",
        description: "Abdulbasit Sulaemon . August 5, 2022",
        imagePaths: ["https://source.unsplash.com/900x700/?category", "https://source.unsplash.com/900x700/?category", "https://source.unsplash.com/900x700/?category"],
        displayImagePath: "https://source.unsplash.com/900x700/?category"
    },
    {
        id: 2,
        title: "5 magnificent waterfalls in Nigeria",
        description: "Omolola Toyyib . August 13, 2022",
        imagePaths: ["https://source.unsplash.com/900x700/?category", "https://source.unsplash.com/900x700/?category", "https://source.unsplash.com/900x700/?category"],
        displayImagePath: "https://source.unsplash.com/900x700/?category"
    },
    {
        id: 3,
        title: "Experience wildlife like you’ve never before",
        description: "Comrade Vawulence . August 24, 2022",
        imagePaths: ["https://source.unsplash.com/900x700/?category", "https://source.unsplash.com/900x700/?category", "https://source.unsplash.com/900x700/?category"],
        displayImagePath: "https://source.unsplash.com/900x700/?category"
    },
    {
        id: 4,
        title: "Best places for arts & culture in Lagos",
        description: "Adeoye Marvellous . June 8, 2022",
        imagePaths: ["https://source.unsplash.com/900x700/?category", "https://source.unsplash.com/900x700/?category", "https://source.unsplash.com/900x700/?category"],
        displayImagePath: "https://source.unsplash.com/900x700/?category"
    },
    {
        id: 5,
        title: "Best places for arts & culture in Lagos",
        description: "Hamzat Mazeedah. June 8, 2022",
        imagePaths: ["https://source.unsplash.com/900x700/?category", "https://source.unsplash.com/900x700/?category", "https://source.unsplash.com/900x700/?category"],
        displayImagePath: "https://source.unsplash.com/900x700/?category"
    },
    {
        id: 6,
        title: "Best places for arts & culture in Lagos",
        description: "Ademide Oladele, December 10, 2010",
        imagePaths: ["https://source.unsplash.com/900x700/?category", "https://source.unsplash.com/900x700/?category", "https://source.unsplash.com/900x700/?category"],
        displayImagePath: "https://source.unsplash.com/900x700/?category"
    }
]

export default (state = initialState, action:any) => {
    switch (action.type) {
        case blogActions.ADD_BLOG:
        default:
            return state
    }
}

