import { useState, useEffect, useCallback } from "react";

import { Header, CasinoLogoDiv, CasinoHeader, UtilButtonsDiv, UtilButton, Image, LogoHeader, LogoHeaderTXT, SelectTokenDiv, TokenButton, SettingsDiv, SettingsButton,
        AccoutButton, } from "./HeaderStyles";
import soundOnIcon from "./Icons/SoundOn.png";
import soundOffIcon from "./Icons/SoundOff.png";
import mail from "./Icons/mail.png";
import Logo from "./Icons/bscfLogo.png"

// import PersonLogo from "./Icon/person-profile.png"



export const TopHeader = () => {
  const [Volume, VolumeOn] = useState(false)

  const mouseClickOn = () => {
    VolumeOn(true);
  }
  
  const mouseClickOff = () => {
    VolumeOn(false);
  }

  return (
    <Header>
        <CasinoLogoDiv>
            <CasinoHeader>CASINO</CasinoHeader>
        </CasinoLogoDiv>
        <UtilButtonsDiv>
        { Volume &&
          <UtilButton onClick={mouseClickOff}><Image src={soundOffIcon} 
              style={{width: "20px", height: "20px", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", filter: "invert(1)"}}
              alt="sound" /></UtilButton>
        }
        { Volume === false &&
          <UtilButton onClick={mouseClickOn}><Image src={soundOnIcon} 
          style={{width: "20px", height: "20px", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", filter: "invert(1)"}}
          alt="sound" /></UtilButton> 
        } 
        <UtilButton><Image src = {mail} style={{width: "20px", height: "20px", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)",filter: "invert(1)"}}/></UtilButton>
        </UtilButtonsDiv>
        <LogoHeader>
          <Image src={Logo} alt="LOGO" style={{width: "55px", height: "55px", top: "20px"}}/>
          <LogoHeaderTXT>| BSC Flip</LogoHeaderTXT>
        </LogoHeader>
        <SelectTokenDiv>
          <TokenButton>BNB</TokenButton>
          <TokenButton>BSCF</TokenButton>
        </SelectTokenDiv>
        <SettingsDiv>
          <SettingsButton>Settings</SettingsButton>
          {/* <AccoutButton><Image src={PersonLogo} 
          style={{width: "20px", height: "20px", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", filter: "invert(1)"}}
          alt="sound" /></AccoutButton> */}
        </SettingsDiv>
    </Header>
  );
};