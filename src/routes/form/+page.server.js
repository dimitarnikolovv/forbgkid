/** @type {import('./$types').Actions} */
import axios from 'axios';

export const actions = {
    default: async ({ request }) => {
        const data = await request.formData();

        const declaration = data.get('declaration');
        console.log(declaration);

        axios
            .post('https://forbgkids-cms.herokuapp.com/api/upload', {
                declaration,
            })
            .then((res) => {
                console.log(res);
            })
            .catch((error) => {
                // error.response.status Check status code
            })
            .finally(() => {
                //Perform action in always
            });

        // const formData = {
        //     firstName: data.get('firstName'),
        //     middleName: data.get('middleName'),
        //     lastName: data.get('lastName'),
        //     age: data.get('age'),
        //     city: data.get('city'),
        //     school: data.get('school'),
        //     tel: data.get('tel'),
        //     email: data.get('email'),
        //     declaration: data.get('file'),
        // };

        // axios
        //     .post('https://forbgkids-cms.herokuapp.com/api/ezforms/submit', {
        //         formName: 'Test form',
        //         formData: formData,
        //     })
        //     .then((res) => {
        //         console.log(res);
        //     })
        //     .catch((error) => {
        //         // error.response.status Check status code
        //     })
        //     .finally(() => {
        //         //Perform action in always
        //     });

        return { success: true };
    },
};
