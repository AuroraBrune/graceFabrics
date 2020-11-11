import React from "react";
import { useInput } from './inputHook';


const Form = (props) => {
    const { value: firstName, bind: bindFirstName, reset: resetFirstName } = useInput('');
    const { value: lastName, bind: bindLastName, reset: resetLastName } = useInput('');
    const { value: description, bind: bindDescription, reset: resetDescription } = useInput('');
    const { value: price, bind: bindPrice, reset: resetPrice } = useInput('');
    const { value: image, bind: bindImage, reset: resetImage } = useInput('');


    const handleSubmit = (evt) => {
        evt.preventDefault();
        alert(`Submitting Data ${firstName} ${lastName} ${description} ${price} ${image}`);
        resetFirstName();
        resetLastName();
        resetDescription();
        resetPrice();
        resetImage();
    }
    return (

        <form onSubmit={handleSubmit}>
            <table>

                <tr> 
                    <label>
                        First Name:
                        <input type="text" {...bindFirstName} />
                    </label>
                </tr>
                
                <tr>
                    <label>
                        Last Name:
                        <input type="text" {...bindLastName} />
                    </label>
                </tr>

                <tr>
                    <label>
                        Description:
                        <input type="text" {...bindDescription} />
                    </label>
                </tr>

                <tr>
                    <label>
                        Price:
                        <input type="text" {...bindPrice} />
                    </label>
                </tr>

                <tr>
                    <label>
                        Image:
                        <input type="text" {...bindImage} />
                    </label>

                    <input type="submit" value="Submit" />
                </tr>

            </table>
        </form>
       
    );
}
export default Form;
