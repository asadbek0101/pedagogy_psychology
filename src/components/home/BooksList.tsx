import Card from "../ui/Card";
import Text from "../ui/Text";
import Title from "../ui/Title";

export default function BooksList(){

    const entity = {
        title: "Asadbek Rejabboyev",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur, est!"
    }

    return (
        <div className="container">
            
            <Title>
                Adabiyotlar Ro'yxati
            </Title>
            
            <Text>
            1. Vohidov M., Maktabgacha tarbiya psixologiyasi, T., 1970;
            </Text>
            <Text>
            2. Davletshin M., Krbiliyat va uning diagnostikasi, T., 1979;
            </Text>
            <Text>
            3. Tokareva V., Talaba shaxsining axloqiy rivojlanish psixologiyasi, T., 1989;
            </Text>
            <Text>
            4. Gʻoziyev E., Psixologiya fani XXI ayerda, T., 2002;
            </Text>
            <Text>
            5. Gʻoziyev E., Psixologiya, T., 2003;
            </Text>
            <Text>
                6. Qodirov B., Layoqat psixologiyasi, T., 1989;
            </Text>
            <Text>
                7. Shoumarov Gʻ., Oila psixologiyasi, T., 2000;
            </Text>
            <Text>
                8. Karimova V., Ijtimoiy psixologiya, T., 1994.
            </Text>
            <Text>
                9. Ergash Gʻoziyev
            </Text>
        </div>
    )
}