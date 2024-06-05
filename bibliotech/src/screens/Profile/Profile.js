
import { Button, ScrollView, Text, View } from "react-native";
import { ContainerImage, ContainerProfile, ImageComponent, PhotoContent, PhotoProfile, Scroll, ViewIcon, ViewPhotoIcon } from "../../components/Container/Style";
import { MaterialIcons } from '@expo/vector-icons';
import { Input, ViewInput } from "../../components/Input/Style";
import { ButtonLight, ButtonText } from "../../components/Button/Style";
export const Profile = ({PadContainer=10}) => {
    return (
        <Scroll>
        <ContainerProfile
        PadContainer={PadContainer}
        >
                
          
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
        </Scroll>
        
    )
}