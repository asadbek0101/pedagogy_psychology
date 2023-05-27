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
                            <p className="item-1">Zamonaviy dunyoda inson har doimgidan ham ko'proq psixologiyaga muhtoj. Axir, har birimiz stress va muammolar bilan o'ralganmiz. Zamonaviy bolalarning qo'rquv yoki stressdan psixologik shikastlanishlari tez-tez uchraydi. Bolalar psixologik kasalliklarga juda moyil, chunki zamonaviy dunyoda shahvat, buzuqlik, zo'ravonlik hamma joyda mavjud. Kompyuter juda katta ta'sirga ega, chunki agar bola bolaligidan shafqatsiz o'yinlarni o'ynasa, keyinchalik bu shafqatsizlik uning o’ziga va yaqinlariga zarba beradi.
                                </p>
                            </div>
                            <div className="carousel-item">
                            <p className="item-1">
                            В современном мире психология нужна людям как никогда. Ведь каждого из нас окружают стрессы и проблемы. Современные дети часто страдают психологическими травмами от страха или стресса. Дети очень подвержены психологическим заболеваниям, потому что в современном мире повсюду похоть, коррупция, насилие. Большое влияние имеет компьютер, ведь если ребенок с детства играет в жестокие игры, то эта жестокость коснется его и его близких.

                                 </p>
                            </div>
                            <div className="carousel-item">
                            <p className="item-1">
                            In the modern world, people need psychology more than ever. After all, each of us is surrounded by stress and problems. Modern children often suffer psychological damage from fear or stress. Children are very prone to psychological diseases, because in the modern world lust, corruption, violence are everywhere. The computer has a great influence, because if a child plays cruel games from childhood, then this cruelty will affect him and his loved ones.
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

