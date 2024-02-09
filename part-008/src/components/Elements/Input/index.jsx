import { forwardRef } from "react";
import Label from './Label.jsx'
import Input from './Input.jsx'

const Inputs = forwardRef(({labelFor, labelText, typeInput, children}, ref) => {
  return (
    <div className="mb-6">
      <Label HTMLfor={labelFor}>{labelText}</Label>
      <Input inputType={typeInput} inputPlaceholder={children} ID={labelFor} names={labelFor} ref={ref}/>
    </div>
  )
});

export default Inputs;