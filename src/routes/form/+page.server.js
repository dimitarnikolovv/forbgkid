/** @type {import('./$types').Actions} */

import { z } from 'zod';

const schema = z.object({
    first_name: z
        .string({ required_error: 'Полето е задължително.' })
        .min(1, { message: 'Полето е задължително.' })
        .max(70, { message: 'Съдържанието не може да е над 70 знака.' })
        .trim(),
    middle_name: z
        .string({ required_error: 'Полето е задължително.' })
        .min(1, { message: 'Полето е задължително.' })
        .max(70, { message: 'Съдържанието не може да е над 70 знака.' })
        .trim(),
    last_name: z
        .string({ required_error: 'Полето е задължително.' })
        .min(1, { message: 'Полето е задължително.' })
        .max(70, { message: 'Съдържанието не може да е над 70 знака.' })
        .trim(),
    age: z
        .string({ required_error: 'Полето е задължително.' })
        .min(1, { message: 'Полето е задължително.' })
        .max(2, { message: 'Съдържанието не може да е над 2 знака.' }),
    school: z
        .string({ required_error: 'Полето е задължително.' })
        .min(1, { message: 'Полето е задължително.' })
        .max(128, { message: 'Съдържанието не може да е над 128 знака.' })
        .trim(),
    city: z
        .string({ required_error: 'Полето е задължително.' })
        .min(1, { message: 'Полето е задължително.' })
        .max(70, { message: 'Съдържанието не може да е над 70 знака.' })
        .trim(),
    tel: z
        .string({ required_error: 'Полето е задължително.' })
        .min(1, { message: 'Полето е задължително.' })
        .max(15, { message: 'Съдържанието не може да е над 15 знака.' })
        .trim(),
    email: z
        .string({ required_error: 'Полето е задължително.' })
        .min(1, { message: 'Полето е задължително.' })
        .max(70, { message: 'Съдържанието не може да е над 70 знака.' }),
    policy: z.enum(['on'], {
        required_error: 'Не можете да продължите преди да приемете политиката ни за поверителност.',
    }),
});

export const actions = {
    default: async ({ request }) => {
        const formData = Object.fromEntries(await request.formData());

        try {
            const verifiedData = schema.parse(formData);

            const data = {};
            const uploadData = new FormData();

            data['first_name'] = verifiedData.first_name;
            data['middle_name'] = verifiedData.middle_name;
            data['last_name'] = verifiedData.last_name;
            data['age'] = verifiedData.age;
            data['school'] = verifiedData.school;
            data['city'] = verifiedData.city;
            data['tel'] = verifiedData.tel;
            data['email'] = verifiedData.email;

            uploadData.append('files.work', formData.work, 'work');
            uploadData.append('files.declaration', formData.declaration, 'declaration');
            uploadData.append('data', JSON.stringify(data));

            const response = await fetch(
                'https://forbgkids-cms.herokuapp.com/api/form-submissions',
                {
                    method: 'post',
                    body: uploadData,
                }
            );
        } catch (err) {
            const { fieldErrors: errors } = err.flatten();

            return {
                data: JSON.stringify(formData),
                errors,
            };
        }
    },
};
