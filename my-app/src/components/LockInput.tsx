import { lockerImg } from "utils/info"


type LockInputType = {
  name: string,
  value: string
}

const LockInput: React.FC<LockInputType> = ({ name, value }) => {

  const propsArray = [name, value];

  const getCorrectElement= (item: string) => {
    let elem;
    if (item === propsArray[0]) {
      elem = (<div className="lock-field-tittle">{item}</div>)
    } else {
        elem = (new Date(item).toString() !== 'Invalid Date') 
        ? (<div>{new Date(item).toLocaleDateString().replaceAll('.', '-')}</div>)
        :(<div>{item}</div>)
    }
    return elem;
  }


  return (
    <div className="lock-field-container">
      <div>
        {propsArray.map(prop => getCorrectElement(prop))}
      </div>
      <img title="locker" alt="locker" src={lockerImg.locker} className="lock-field-img" />
    </div>
  )
}

export default LockInput;