import React from "react";
import { useInput } from './inputHook';
import "./form.css"


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
            <table className="ordersForm">

                <tr>
                    <td>
                        <label>
                            First Name:
                        </label>
                    </td>
                    <td>
                        <input type="text" {...bindFirstName} />
                    </td>
                </tr>

                <tr>
                    <td>
                        <label>
                            Last Name:
                        </label>
                    </td>
                    <td>
                        <input type="text" {...bindLastName} />
                    </td>
                </tr>

                <tr>
                    <td>
                        <label>
                            Description:
                        </label>
                    </td>
                    <td>
                        <input type="text" {...bindDescription} />
                    </td>
                </tr>

                <tr>
                    <td>
                        <label>
                            Price:
                        </label>
                    </td>
                    <td>
                        <input type="text" {...bindPrice} />
                    </td>
                </tr>

                <tr>
                    <td>
                        <label>
                            Image:
                            </label>
                    </td>
                    <td>
                        <input type="text" {...bindImage} />

                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="submit" value="Submit" />
                    </td>
                </tr>

            </table>
        </form >

    );
}
export default Form;
