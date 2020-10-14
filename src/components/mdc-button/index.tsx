import React from "react";
import { Button,Label} from '@tarojs/components'
import "./index.scss";

const MdcButton = ({children})=>{
  return <Button className={`mdc-button`}><Label className={`mdc-label`}>{children}</Label></Button>
}
export default MdcButton
