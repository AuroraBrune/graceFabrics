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

            <div className="ordersForm">
                <div className="row">
                    <div className="col md6 offset-md2">

                        <label>
                            First Name:
                        </label>
                    </div>

                    <div>
                        <input type="text" {...bindFirstName} />
                    </div>
                </div>
                <div>
                    <div>
                        <label>
                            Last Name:
                        </label>
                    </div>
                    <div>
                        <input type="text" {...bindLastName} />
                    </div>
                </div>
                <div>
                <div>
                    <label>
                        Description:
                        </label>
                </div>

                <div>
                    <textarea {...bindDescription} />
                </div>
                </div>
                <div>
                    <label>
                        Price:
                        </label>
                </div>

                <div>
                    <input type="text" {...bindPrice} />
                </div>
                <div>
                    <label>
                        Image:
                            </label>

                </div>
                <div>
                    <input type="text" {...bindImage} />
                </div>
                <div>
                    <input type="submit" value="Submit" />
                </div>
            </div>

        </form >

    );
}
export default Form;
