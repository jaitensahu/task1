export const getFormFields= (data) =>{
    return [
      {
        label: "First Name",
        name: "firstName",
        value: data.firstName,
        type: "text",
      },
      {
        label: "Middle Name",
        name: "middleName",
        value: data.middleName,
        type: "text",
      },
      {
        label: "Last Name",
        name: "lastName",
        value: data.lastName,
        type: "text",
      },
      {
        label: "Gender",
        name: "gender",
        value: data.gender,
        type: "text",
      },
      {
        label: "Phone Number",
        name: "phoneNo",
        value: data.phoneNo,
        type: "tel",
      },
      {
        label: "Email",
        name: "email",
        value: data.email,
        type: "email",
      },
      {
        label: "University",
        name: "university",
        value: data.university,
        type: "text",
      },
      {
        label: "Registration No",
        name: "registrationNo",
        value: data.registrationNo,
        type: "text",
      },
    ];
  }