import React from 'react'
import { Formik, Form, Field } from 'formik';

const InfoForm = () => {

    return(
        <div>
            <Formik
                initialValues={{
                    platform: "uber"
                }}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 500));
                    alert(JSON.stringify(values, null, 2));
                }}
            >
                <Form>
                    <Field as="select"
                        id="platform"
                        // name="platform"
                        // // type="select"
                        // options={platformOptions}
                    >
                        <option value="uber">Uber</option>
                        <option value="lyft">Lyft</option>
                        <option value="ubereats">Uber Eats</option>
                        <option value="doordash">Door Dash</option>
                    </Field>
                </Form>
            </Formik>
        </div>
    )
}

export default InfoForm