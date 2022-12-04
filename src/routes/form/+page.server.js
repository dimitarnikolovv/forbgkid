/** @type {import('./$types').Actions} */

export const actions = {
    default: async ({ request }) => {
        const formData = Object.fromEntries(await request.formData());

        const data = {};
        const uploadData = new FormData();

        data['first_name'] = formData.first_name;
        data['middle_name'] = formData.middle_name;
        data['last_name'] = formData.last_name;
        data['age'] = formData.age;
        data['school'] = formData.school;
        data['city'] = formData.city;
        data['tel'] = formData.tel;
        data['email'] = formData.email;

        console.log(data);

        uploadData.append('files.work', formData.work, 'work');
        uploadData.append('files.declaration', formData.declaration, 'declaration');
        uploadData.append('data', JSON.stringify(data));

        console.log(uploadData);

        const response = await fetch('https://forbgkids-cms.herokuapp.com/api/form-submissions', {
            method: 'post',
            body: uploadData,
        });
    },
};
