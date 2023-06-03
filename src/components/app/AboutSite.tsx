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
                        Muallif: Shamsiddinova Rano O'lmas qizi
                    </strong>
                    <br />
                     Shamsiddinova Rano O'lmas qizi Toshkent Axborot Texnalogiyalari universiteti Kasb ta'limi yo'nalishi bo'yicha tahsil  olgan. 
                    <br />
                     Mutaxasisligim sababli bundan tashqari,pedagogika psixalogiya qiziqishim sababli ushbu saytni bitiruv malakaviy ishimga tanladim va o'z bilimlarim asosida 
                     yaratdim.


                        <br />

                        Sayt qurishda ishlatgan texnologiyalarim: <br /> Frontend "Old tomon" : <strong>React js</strong> <br /> Backend "Orqa tomon" : <strong>Java</strong> <br /> Database "Ma'lumotlar bazasi": <strong>PostgreSQL</strong>
                </Text>
                <Text className="text-justify">
                    <strong>
                        Sayt yaratishdan maqsad
                    </strong>
                    <br />
                    Mustaqillikka erishilgandan keyin barcha sohalardagi kabi ta’lim tizimida ham jiddiy islohatlar amalga oshirildi ta’limning sifatini yaxshilashga kirishildi. Shu boisdan bugungi kunda talabalarga sifatli ta’lim berishni tashkil qilishda ilmiy-tехnika taraqqiyoti mahsuli bo‘lgan zamоnaviy aхbоrоt tехnоlоgiyalari va uning mоddiy asоsi kоmpyutеrlar хizmatidan kеng fоydalanib elеktrоn darslik va qo‘llanmalar tashkil etish va internet manbalaridan hamda masofadan o‘qitishning dasturiy vositalaridan foydalanish davr talabi bo‘lib qоlmоqda. O‘zbekiston Respublikasida oliy ta’limni tizimli isloh qilishning ustuvor yo‘nalishlarini belgilash, zamonaviy bilim va yuksak ma’naviy-axloqiy fazilatlarga ega, mustaqil fikrlaydigan yuqori malakali kadrlar tayyorlash jarayonini sifat jihatidan yangi bosqichga ko‘tarish, oliy ta’limni modernizatsiya qilish, ilg‘or ta’lim texnologiyalariga asoslangan holda ijtimoiy soha va iqtisodiyot tarmoqlarini rivojlantirish maqsadida. O‘zbekiston Respublikasi Prezidentining farmoniga [1] ilova sifatida O‘zbekiston Respublikasi oliy ta’lim tizimini 2030-yilgacha rivojlantirish Konsepsiyasi ishlab chiqildi. Konsepsiya 3-bob 2-paragrfiga binoan ta’lim jarayonlarini raqamli texnologiyalar asosida individuallashtirish, masofaviy ta’lim xizmatlarini rivojlantirish, vebinar, onlayn, “blended learning”, “flipped classroom” texnologiyalarini amaliyotga keng joriy etish va zamonaviy axborot-kommunikatsiya texnologiyalari asosida masofaviy ta’lim dasturlarini tashkil etish
                    kabi chora tatbirlar ko‘zda tutilgan. Shu sababdan ham ushbu bitiruv malakaviy ishi Psixologiya fanidan amaliy mashg’ulotlar uchun web sayt ishlab chiqish mavzusi ilgari surilgan.Bu orqali oliy ta’lim talabalarining psixologiya fanini chuqur o’rganishida masofadan turib bilim olish va qo’shimcha ma’lumotlar olish imkoniyatiga ega bo’ladi.

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