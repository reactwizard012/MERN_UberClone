import { tween } from "popmotion";
import React from "react";
import FontAwesome from "react-fontawesome";
import posed from "react-pose";
import styled from "styled-components";
import { loginMethodType } from "../LoginTypes";

const PosedBackButton = posed.span({
  hidding: {
    left: "-50px",
    transition: (props: any) => tween({ ...props, duration: 500 })
  },
  showing: {
    left: "15px",
    transition: (props: any) => tween({ ...props, duration: 500 })
  }
});

const StyledBackButton = styled<any, any>(PosedBackButton)`
  position: absolute;
  top: 15px;
  font-size: 30px;
  left: 15px;
  z-index: 9;
  color: rgba(0, 0, 0, 0.7);
`;

interface IProps {
  loginMethod: loginMethodType;
  onClick: () => void;
}

const BackButton: React.SFC<IProps> = ({ loginMethod, onClick }) => (
  <StyledBackButton
    pose={loginMethod !== "" ? "showing" : "hidding"}
    onClick={onClick}
  >
    <FontAwesome name="arrow-circle-left" />
  </StyledBackButton>
);

export default BackButton;