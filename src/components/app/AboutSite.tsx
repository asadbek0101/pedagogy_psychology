import { useState } from "react";
import Text from "../ui/Text";
import Title from "../ui/Title";
import "./assets/about-site.scss";

const image1 = require("../../images/Author_Image1.jpg");
const image2 = require("../../images/Author_Image2.jpg");
const image3 = require("../../images/Author_Image3.jpg");
const image4 = require("../../images/Author_Image4.jpg");

const images = [
    {
        id: 1,
        imageLink: image1
    },
    {
        id: 2,
        imageLink: image2
    },
    {
        id: 3,
        imageLink: image3
    },
    {
        id: 4,
        imageLink: image4
    },
]

export default function AboutSite(){

    const [imgIndex, setImgIndex] = useState(0);

    return (
        <div className="container mb-3">
            <Title>
                Sayt Haqida
            </Title>
            <div className="row">
                <div className="col-6">
                <Text>
                    <strong>
                        Muallif: Ism Familiya
                    </strong>
                    <br />
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab, ullam ducimus! Tempora a doloribus voluptatem aliquam necessitatibus nobis asperiores quasi, praesentium sit inventore dolores adipisci dolore veritatis eum voluptatibus omnis pariatur illo similique cumque, voluptas eius in. Accusantium, obcaecati optio quas adipisci sapiente neque. Delectus iste eum fuga tempore id nostrum aliquam commodi fugiat similique, blanditiis animi voluptatibus numquam facere aut error reiciendis. Nulla eligendi aspernatur non voluptas, minus, quam vero nobis voluptatibus earum quia ab. Consectetur ducimus eius quo cumque harum, perspiciatis quae cupiditate minima architecto. Porro itaque accusamus maxime architecto natus tenetur aspernatur vitae! Consectetur laudantium delectus sequi?
                </Text>
                <Text>
                    <strong>
                        Muallif: Ism Familiya
                    </strong>
                    <br />
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab, ullam ducimus! Tempora a doloribus voluptatem aliquam necessitatibus nobis asperiores quasi, praesentium sit inventore dolores adipisci dolore veritatis eum voluptatibus omnis pariatur illo similique cumque, voluptas eius in. Accusantium, obcaecati optio quas adipisci sapiente neque. Delectus iste eum fuga tempore id nostrum aliquam commodi fugiat similique, blanditiis animi voluptatibus numquam facere aut error reiciendis. Nulla eligendi aspernatur non voluptas, minus, quam vero nobis voluptatibus earum quia ab. Consectetur ducimus eius quo cumque harum, perspiciatis quae cupiditate minima architecto. Porro itaque accusamus maxime architecto natus tenetur aspernatur vitae! Consectetur laudantium delectus sequi?
                </Text>
                <Text>
                    <strong>
                        Muallif: Ism Familiya
                    </strong>
                    <br />
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab, ullam ducimus! Tempora a doloribus voluptatem aliquam necessitatibus nobis asperiores quasi, praesentium sit inventore dolores adipisci dolore veritatis eum voluptatibus omnis pariatur illo similique cumque, voluptas eius in. Accusantium, obcaecati optio quas adipisci sapiente neque. 
                </Text>
                </div>
                <div className="col-6">
                    <div className="imga-view">
                            <img src={images[imgIndex].imageLink} alt="" width="100%" />
                    </div>
                    <div 
                        className="img-menu d-flex gap-2 w-100 mt-3">
                        {images.map((image: any, index: number)=>{
                            return (
                                <div 
                                    onClick={()=>setImgIndex(index)}
                                    className="image-menu-item w-24" key={index}>
                                    <img className={`${imgIndex === index ? "active-image-item" : ""}`} src={image.imageLink} width="100%"  alt="" />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}