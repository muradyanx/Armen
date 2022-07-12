import '../Book-Table/style.scss';
import UniversalInput from '../UniversalInput';
import { HashLink } from 'react-router-hash-link';
import { useState, useEffect } from 'react';


function BookTable(){

    const [value, setValue] = useState('')
    const [validation, setValidation] = useState('')

    let inputlist = [
        {
            id:1,
            type:"email",
            placeholder: " EMAIL"
         },
        {
            id:2,
            type:"number",
            placeholder: " NUMBER OF GUESTS"
        },
        {
            id:3,
            type:"time",

        },
        {
            id:4,
            type:"date"
        },
    ]

   

    function Email(val) {
        let regEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$$/;
        if(!regEmail.test(val)){
            setValidation('Invalid Email');
          return validation;
        }
    }

    return(
        <div className='g-flex-direction g-align-center g-justify-around book-blok'id='book'>
            <p className='g-text-center book-text'>BOOK A TABLE</p>
          <div className='g-justify-evenly book-item'>  {inputlist.map(el => <UniversalInput onChange={(e) => {setValue(e.target.value)}} key={el.id} input={el}/>)}</div>
          {/* <HashLink className='hash' to='/#' smooth={true}>  */}
          {/* {validation} */}
          <button onClick={() => { Email(value)}} className=' book-btn'>FIND TABLE</button>
          {/* </HashLink> */}
        </div>
    )
}

export default BookTable