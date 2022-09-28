import { NextPage } from "next";
import Image from "next/image";
import { Tourist, CarouselContainer, CarouselContent } from './TouristReviewCard.Style'

const TouristReviewCard: NextPage = () => {

    const touristReviewDetails = [
        {
            id: 1,
            email: "ade@gmail.com",
            touristPics: "../assets/images/heroImage.png",
            images: [
                "../assets/images/heroImage2.jpg", "../assets/images/heroImage.png", 'https://source.unsplash.com/900x700/?category', 'https://source.unsplash.com/900x700/?category'
            ]
        },
        {
            id: 2,
            email: "ade1@gmail.com",
            touristPics: "../assets/images/heroImage.png",
            images: [
                "../assets/images/heroImage2.jpg", "../assets/images/heroImage.png", 'https://source.unsplash.com/900x700/?category', 'https://source.unsplash.com/900x700/?category'
            ]
        },
        {
            id: 3,
            email: "adeola@gmail.com",
            touristPics: "../assets/images/heroImage.png",
            images: [
                "../assets/images/heroImage2.jpg", "../assets/images/heroImage.png", 'https://source.unsplash.com/900x700/?category', 'https://source.unsplash.com/900x700/?category'
            ]
        }
    ]

    return (
        <div className="relative px-4 md:px-24 top-10">
            <h2 className="text-lg font-medium">Check out other tourists</h2>
            <div className="w-[320px] h-[320px] mt-6 bg-white shadow-2xl rounded px-6 pt-6">
                <div className=" h-[70px] mb-5 flex items-center">
                    <div className="w-16 ">
                        <Tourist>
                            <Image
                                src={require("../assets/images/heroImage.png")}
                                alt="Hero Image"
                                width="100%"
                                height="95%"
                                objectFit="cover"
                                className="rounded-full"
                            />
                        </Tourist>
                    </div>
                    <div className=" w-[150px] ml-4 text-black whitespace-nowrap">
                        <p className=" h-[40%] text-lg font-semibold">@abbymahn</p>
                        <p className=" h-[60%] text-xs font-medium ">at Lekki conservation Centre</p>
                    </div>
                </div>

                <CarouselContainer>
                    <CarouselContent>
                        <Image
                            src={require("../assets/images/heroImage2.jpg")}
                            alt="Hero Image"
                            width='100%'
                            height='67em'
                            layout="responsive"
                            objectFit="cover"
                            className="item"
                        />
                    </CarouselContent>
                    <CarouselContent>
                        <Image
                            src={require("../assets/images/heroImage2.jpg")}
                            alt="Hero Image"
                            width='100%'
                            height='67em'
                            layout="responsive"
                            objectFit="cover"
                            className="item"
                        />
                    </CarouselContent>
                </CarouselContainer>
            </div>
        </div >
    );
}

export default TouristReviewCard;