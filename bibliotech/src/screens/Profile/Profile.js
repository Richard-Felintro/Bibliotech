
import { Button, Text, View } from "react-native";
import { ContainerImage, ContainerProfile, ImageComponent, PhotoContent, PhotoProfile, ViewIcon, ViewPhotoIcon } from "../../components/Container/Container";
import { MaterialIcons } from '@expo/vector-icons';
import { Input, ViewInput } from "../../components/Input/Style";
import { ButtonLight, ButtonText } from "../../components/Button/Style";
export const Profile = () => {
    return (
        <ContainerProfile>
            {/* <PhotoContent> */}
                <PhotoProfile>
                    <ContainerImage>
                    <ImageComponent
                        source={require('../../../assets/Profile2.jpg')}
                    />
                    </ContainerImage>
                    <ViewPhotoIcon onPress={()=> alert("fotos")}>
                        <MaterialIcons name="add-a-photo" size={24} color="#ffff" />
                    </ViewPhotoIcon>
                </PhotoProfile>
            {/* </PhotoContent> */}

            <ViewInput>
                <Input
                    placeholder="NOME"
                />
            </ViewInput>
            <ViewInput>
                <Input
                    keyboardType="numeric"
                    placeholder="RA"
                />
            </ViewInput>
            <ViewInput>
                <Input
                    placeholder="TURMA"
                />
            </ViewInput>

            <ButtonLight>
                <ButtonText>SAIR</ButtonText>
            </ButtonLight>
        </ContainerProfile>
    )
}