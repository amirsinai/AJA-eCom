import React from "react";
import '../index.css';
import { KeyboardArrowLeftOutlined, KeyboardArrowRightOutlined } from "@material-ui/icons"

export default function Slide() {
  return (
    <Container>
        <Arrow>
            <KeyboardArrowLeftOutlined/>
        </Arrow>
        <Arrow>
            <KeyboardArrowRightOutlined/>
        </Arrow>
    </Container>
  );
}
