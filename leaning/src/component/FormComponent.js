import {useState} from "react"
function FormComponent (){
  const [number, setNumber] = useState('')
  
  return(
    <div>
      <form>
        <div className="numberlist">
        </div>
        <div className="numberlist">
            <div className="formcontrol">
              <label>กรอกตัวเลข :</label>&nbsp;
              <input type="text" className="number" name="number" id="number" onChange={(e) => setNumber(e.target.value)}/>
              &nbsp;
              <label>บน :</label>&nbsp;
              <input type="text" className="number" name="bon" id="bon"></input>&nbsp;
              <label>ล่าง :</label>&nbsp;
              <input type="text" className="number" name="lang" id="lang"></input>&nbsp;
            </div>
        </div>   
      </form>
    </div>
  )
}
export default FormComponent;