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
            <label>
                First Name:
          <input type="text" {...bindFirstName} />
            </label>

            <label>
                Last Name:
          <input type="text" {...bindLastName} />
            </label>

            <label>
                Description:
          <input type="text" {...bindDescription} />
            </label>

            <label>
                Price:
        <input type="text" {...bindPrice} />
            </label>

            <label>
                Image:
          <input type="text" {...bindImage} />
            </label>

            <input type="submit" value="Submit" />
        </form>
    );
}
export default Form;
