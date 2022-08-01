import React, { useState } from 'react';
import { ScrollView, View, } from 'react-native';

import NumbGeneratorLogo from '../../assets/logo.svg'

import { Conditional } from '../../components/Conditional';
import { useNumberGenerator } from '../../hooks/useNumberGenerator';
import { theme } from '../../styles/theme';

import {
  Button,
  ButtonText,
  Container,
  ContainerLogo,
  InputField,
  Label,
  NumberText,
  Page,
  TitlePage
} from './styles';

export const Home: React.FC = () => {
  const [total, setTotal] = useState(5)
  const [max, setMax] = useState(10)

  const { clear, generate, isGenerated, numbers } = useNumberGenerator()

  function onPress() {
    if (isGenerated) {
      return clear()
    }

    generate(total, max)
  }

  return (
    <Page>
      <ScrollView>
        <ContainerLogo>
          <NumbGeneratorLogo width={250} />
        </ContainerLogo>

        <Conditional condition={!isGenerated}>
          <Container>
            <TitlePage>Gerar números</TitlePage>

            <View>
              <Label>Total de numeros aleatórios</Label>
              <InputField
                keyboardType="numeric"
                value={String(total)}
                onChangeText={text => setTotal(Number(text))}
              />
            </View>
            <View style={{ marginTop: theme.common.spacings.lg }}>
              <Label>Máximo</Label>
              <InputField
                keyboardType="numeric"
                value={String(max)}
                onChangeText={text => setMax(Number(text))}
              />
            </View>

            <Button onPress={onPress}>
              <ButtonText>Gerar</ButtonText>
            </Button>
          </Container>
        </Conditional>

        <Conditional condition={isGenerated}>
          <Container>
            <TitlePage>Números gerados</TitlePage>
            <View>
              {numbers.map((number, index) => (
                <NumberText key={`${number}${index}`}>
                  {number.toString()}
                </NumberText>
              ))}
            </View>

            <Button onPress={onPress}>
              <ButtonText>Limpar</ButtonText>
            </Button>
          </Container>
        </Conditional>
      </ScrollView>
    </Page>
  )
}
