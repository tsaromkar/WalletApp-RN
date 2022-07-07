import React, { FunctionComponent } from 'react'
import { StatusBar } from 'react-native'
import styled from 'styled-components/native'

// custom components
import { colors } from '../components/colors'
import { Container } from '../components/shared'
import BigText from './Texts/BigText'
import SmallText from './Texts/SmallText'
import RegularButton from './Buttons/RegularButton'

const WelcomeContainer = styled(Container)`
    background-color: ${colors.secondary};
    justify-content: space-between;
    width: 100%;
    height: 100%;
`

const TopSection = styled.View`
    width: 100%;
    flex: 1;
    max-height: 55%;
`

const BottomSection = styled.View`
    width: 100%;
    padding: 25px;
    flex: 1;
    justify-content: flex-end;
`

const TopImage = styled.Image`
    width: 100%;
    height: 100%;
    resize-mode: stretch;
`

// image
import background from "./../assets/bgs/background_v1.png" // refer to photo.d.ts for importing images

const Welcome: FunctionComponent = () => {
  return (
    <>
      <StatusBar />
      <WelcomeContainer>
        <TopSection>
          <TopImage source={background} />
        </TopSection>
        <BottomSection>
          <BigText textStyles={{ width: "70%", marginBottom: 25 }}>
            Best way to track your money
          </BigText>
          <SmallText textStyles={{ width: "70%", marginBottom: 25 }}>
            Best payment method, connects your oney to your friends, family
          </SmallText>
          <RegularButton onPress={() => { }}>
            Get Started
          </RegularButton>
        </BottomSection>
      </WelcomeContainer>
    </>
  )
}

export default Welcome
