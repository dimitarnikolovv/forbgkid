import { z } from "zod";
const schema = z.object({
  first_name: z.string({ required_error: "\u041F\u043E\u043B\u0435\u0442\u043E \u0435 \u0437\u0430\u0434\u044A\u043B\u0436\u0438\u0442\u0435\u043B\u043D\u043E." }).min(1, { message: "\u041F\u043E\u043B\u0435\u0442\u043E \u0435 \u0437\u0430\u0434\u044A\u043B\u0436\u0438\u0442\u0435\u043B\u043D\u043E." }).max(70, { message: "\u0421\u044A\u0434\u044A\u0440\u0436\u0430\u043D\u0438\u0435\u0442\u043E \u043D\u0435 \u043C\u043E\u0436\u0435 \u0434\u0430 \u0435 \u043D\u0430\u0434 70 \u0437\u043D\u0430\u043A\u0430." }).trim(),
  middle_name: z.string({ required_error: "\u041F\u043E\u043B\u0435\u0442\u043E \u0435 \u0437\u0430\u0434\u044A\u043B\u0436\u0438\u0442\u0435\u043B\u043D\u043E." }).min(1, { message: "\u041F\u043E\u043B\u0435\u0442\u043E \u0435 \u0437\u0430\u0434\u044A\u043B\u0436\u0438\u0442\u0435\u043B\u043D\u043E." }).max(70, { message: "\u0421\u044A\u0434\u044A\u0440\u0436\u0430\u043D\u0438\u0435\u0442\u043E \u043D\u0435 \u043C\u043E\u0436\u0435 \u0434\u0430 \u0435 \u043D\u0430\u0434 70 \u0437\u043D\u0430\u043A\u0430." }).trim(),
  last_name: z.string({ required_error: "\u041F\u043E\u043B\u0435\u0442\u043E \u0435 \u0437\u0430\u0434\u044A\u043B\u0436\u0438\u0442\u0435\u043B\u043D\u043E." }).min(1, { message: "\u041F\u043E\u043B\u0435\u0442\u043E \u0435 \u0437\u0430\u0434\u044A\u043B\u0436\u0438\u0442\u0435\u043B\u043D\u043E." }).max(70, { message: "\u0421\u044A\u0434\u044A\u0440\u0436\u0430\u043D\u0438\u0435\u0442\u043E \u043D\u0435 \u043C\u043E\u0436\u0435 \u0434\u0430 \u0435 \u043D\u0430\u0434 70 \u0437\u043D\u0430\u043A\u0430." }).trim(),
  age: z.string({ required_error: "\u041F\u043E\u043B\u0435\u0442\u043E \u0435 \u0437\u0430\u0434\u044A\u043B\u0436\u0438\u0442\u0435\u043B\u043D\u043E." }).min(1, { message: "\u041F\u043E\u043B\u0435\u0442\u043E \u0435 \u0437\u0430\u0434\u044A\u043B\u0436\u0438\u0442\u0435\u043B\u043D\u043E." }).max(2, { message: "\u0421\u044A\u0434\u044A\u0440\u0436\u0430\u043D\u0438\u0435\u0442\u043E \u043D\u0435 \u043C\u043E\u0436\u0435 \u0434\u0430 \u0435 \u043D\u0430\u0434 2 \u0437\u043D\u0430\u043A\u0430." }),
  school: z.string({ required_error: "\u041F\u043E\u043B\u0435\u0442\u043E \u0435 \u0437\u0430\u0434\u044A\u043B\u0436\u0438\u0442\u0435\u043B\u043D\u043E." }).min(1, { message: "\u041F\u043E\u043B\u0435\u0442\u043E \u0435 \u0437\u0430\u0434\u044A\u043B\u0436\u0438\u0442\u0435\u043B\u043D\u043E." }).max(128, { message: "\u0421\u044A\u0434\u044A\u0440\u0436\u0430\u043D\u0438\u0435\u0442\u043E \u043D\u0435 \u043C\u043E\u0436\u0435 \u0434\u0430 \u0435 \u043D\u0430\u0434 128 \u0437\u043D\u0430\u043A\u0430." }).trim(),
  city: z.string({ required_error: "\u041F\u043E\u043B\u0435\u0442\u043E \u0435 \u0437\u0430\u0434\u044A\u043B\u0436\u0438\u0442\u0435\u043B\u043D\u043E." }).min(1, { message: "\u041F\u043E\u043B\u0435\u0442\u043E \u0435 \u0437\u0430\u0434\u044A\u043B\u0436\u0438\u0442\u0435\u043B\u043D\u043E." }).max(70, { message: "\u0421\u044A\u0434\u044A\u0440\u0436\u0430\u043D\u0438\u0435\u0442\u043E \u043D\u0435 \u043C\u043E\u0436\u0435 \u0434\u0430 \u0435 \u043D\u0430\u0434 70 \u0437\u043D\u0430\u043A\u0430." }).trim(),
  tel: z.string({ required_error: "\u041F\u043E\u043B\u0435\u0442\u043E \u0435 \u0437\u0430\u0434\u044A\u043B\u0436\u0438\u0442\u0435\u043B\u043D\u043E." }).min(1, { message: "\u041F\u043E\u043B\u0435\u0442\u043E \u0435 \u0437\u0430\u0434\u044A\u043B\u0436\u0438\u0442\u0435\u043B\u043D\u043E." }).max(15, { message: "\u0421\u044A\u0434\u044A\u0440\u0436\u0430\u043D\u0438\u0435\u0442\u043E \u043D\u0435 \u043C\u043E\u0436\u0435 \u0434\u0430 \u0435 \u043D\u0430\u0434 15 \u0437\u043D\u0430\u043A\u0430." }).trim(),
  email: z.string({ required_error: "\u041F\u043E\u043B\u0435\u0442\u043E \u0435 \u0437\u0430\u0434\u044A\u043B\u0436\u0438\u0442\u0435\u043B\u043D\u043E." }).min(1, { message: "\u041F\u043E\u043B\u0435\u0442\u043E \u0435 \u0437\u0430\u0434\u044A\u043B\u0436\u0438\u0442\u0435\u043B\u043D\u043E." }).max(70, { message: "\u0421\u044A\u0434\u044A\u0440\u0436\u0430\u043D\u0438\u0435\u0442\u043E \u043D\u0435 \u043C\u043E\u0436\u0435 \u0434\u0430 \u0435 \u043D\u0430\u0434 70 \u0437\u043D\u0430\u043A\u0430." }),
  policy: z.enum(["on"], {
    required_error: "\u041D\u0435 \u043C\u043E\u0436\u0435\u0442\u0435 \u0434\u0430 \u043F\u0440\u043E\u0434\u044A\u043B\u0436\u0438\u0442\u0435 \u043F\u0440\u0435\u0434\u0438 \u0434\u0430 \u043F\u0440\u0438\u0435\u043C\u0435\u0442\u0435 \u043F\u043E\u043B\u0438\u0442\u0438\u043A\u0430\u0442\u0430 \u043D\u0438 \u0437\u0430 \u043F\u043E\u0432\u0435\u0440\u0438\u0442\u0435\u043B\u043D\u043E\u0441\u0442."
  })
});
const actions = {
  default: async ({ request }) => {
    const formData = Object.fromEntries(await request.formData());
    try {
      const verifiedData = schema.parse(formData);
      const data = {};
      const uploadData = new FormData();
      data["first_name"] = verifiedData.first_name;
      data["middle_name"] = verifiedData.middle_name;
      data["last_name"] = verifiedData.last_name;
      data["age"] = verifiedData.age;
      data["school"] = verifiedData.school;
      data["city"] = verifiedData.city;
      data["tel"] = verifiedData.tel;
      data["email"] = verifiedData.email;
      uploadData.append(
        "files.work",
        formData.work,
        `work-${verifiedData.first_name}-${verifiedData.last_name}-${formData.work.name}`
      );
      uploadData.append(
        "files.declaration",
        formData.declaration,
        `declaration-${verifiedData.first_name}-${verifiedData.last_name}-${formData.declaration.name}`
      );
      uploadData.append("data", JSON.stringify(data));
      const response = await fetch(
        "https://forbgkids-cms.herokuapp.com/api/form-submissions",
        {
          method: "post",
          body: uploadData
        }
      );
    } catch (err) {
      const { fieldErrors: errors } = err.flatten();
      return {
        data: JSON.stringify(formData),
        errors
      };
    }
  }
};
export {
  actions
};
