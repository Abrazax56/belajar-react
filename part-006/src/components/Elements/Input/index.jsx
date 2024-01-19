import Label from './Label.jsx'
import Input from './Input.jsx'

const Inputs = ({labelFor, labelText, typeInput, children}) => {
  return (
    <div className="mb-6">
      <Label HTMLfor={labelFor}>{labelText}</Label>
      <Input inputType={typeInput} inputPlaceholder={children} ID={labelFor} names={labelFor}/>
    </div>
  )
}

export default Inputs;