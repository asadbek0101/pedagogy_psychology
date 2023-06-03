import "./assets/home-text.scss"

export default function HomeText(){

    return (
        <div className="home-text-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-5 box">
                    <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                            <p className="item-1">Ushbu bitiruv malakaviy ishi  “Psixologiya fanidan amaliy mashg’ulotlar uchun web sayt ishlab chiqishga qaratilgan.Bitiruv malakaviy ishida Psixologiya fani haqida mavzulashtirilgan ma’lumotlar jamlangan. Web sayt fanga oid barcha amaliy mashg’ulotlarni o’z ichiga oladi. Bundan tashqari saytda fan bo’yicha yangiliklar va interaktiv o’yinlardan foydalanish imkoniyati mavjud.
                                </p>
                            </div>
                            <div className="carousel-item">
                            <p className="item-1">
                            Данная выпускная работа направлена на разработку сайта для практических занятий по психологии.Выпускная работа содержит тематическую информацию о науке психологии. Сайт содержит все практические занятия, связанные с наукой. Кроме того, сайт предлагает новости науки и интерактивные игры.

                                 </p>
                            </div>
                            <div className="carousel-item">
                            <p className="item-1">
                            This graduation thesis is focused on the development of a website for practical training in psychology. The graduation thesis contains thematic information about the science of psychology. The website contains all practical exercises related to science. In addition, the site offers science news and interactive games.
                                </p>
                            </div>
                        </div>
                        {/* <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

