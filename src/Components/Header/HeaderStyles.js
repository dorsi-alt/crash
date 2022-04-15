import styled from "styled-components";


export const Image = styled.img`
  height: 40vmin;
  margin-bottom: 16px;
  pointer-events: none;
`;

export const Header = styled.header`
    background: rgba(50,50,50,1);
    display: flex;
    position: fixed;
    width: 100%;
    height: 55px;
`;

export const CasinoLogoDiv = styled.div`
    position: relative;
    width: 13%;
    height: 100%;
    justify-content: center;
    align-items: center;
    background: rgba(19, 20, 22, 1);
    display: flex;
`;

export const CasinoHeader = styled.p`
    font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif; 
    font-weight: 20;
    font-size: 30px;
    letter-spacing: 2px;
    color: white;
`;

export const UtilButtonsDiv = styled.div`
  postion: relative;
  top: 0%;
  width: 8%;
  height: 100%;
  background: rgba(50,50,50,1);
  display: flex;
`;

export const UtilButton = styled.button`
  background: #373838;
  margin-left: 10px;
  position: relative;
  height: 45px;
  width: 45px;
  top: 50%;
  left: 20%;
  border-radius: 50%;
  border: 1px solid #3C3F40;
  transform: translate(-50%, -50%);
  cursor:pointer;
`;


export const LogoHeader = styled.div`
  position: relative;
  width: 15%;
  height: 100%;
  // background: red;
  justify-content: center;
  // align-items: center;
  display: flex;
`;

export const LogoHeaderTXT = styled.div`
  font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif; 
  font-weight: 20;
  top: 25%;
  // transform: translateY(-50%);
  font-size: 25px;
  position: relative;
  color: white;
`;

export const SelectTokenDiv = styled.div`
  positiion: relative;
  width: 30%;
  height: 100%;
  background: rgba(50,50,50,1);
  justify-content: center;
  align-items: center;
  display: flex;
`;

export const TokenButton = styled.button`
  background: #373838;
  margin-left: 10px;
  position: relative;
  height: 45px;
  width: 100px;
  border-radius: 25px;
  border: 1px solid #3C3F40;
  justify-content: center;
  align-items: center;
  cursor:pointer;
  color: white;
`;

export const SettingsDiv = styled.div`
  positiion: relative;
  width: 35%;
  height: 100%;
  // background: rgba(50,50,50,1);
  justify-content: center;
  align-items: center;
  display: flex;
`;

export const SettingsButton = styled.button`
  poistion relative;
  background: rgba(50,50,50,1);
  border: none;
  color: white;
  // margin: 60px;
  cursor: pointer;
`;

export const AccoutButton = styled.button`
  poistion relative;
`;
