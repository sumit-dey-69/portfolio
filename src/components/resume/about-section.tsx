type FieldsType = {
  fieldName: string;
  fieldValue: string | string[];
};

const Fields: FieldsType[] = [
  {
    fieldName: "Name",
    fieldValue: "Sumit Dey",
  },
  {
    fieldName: "Age",
    fieldValue: "21+ Years",
  },
  {
    fieldName: "Country",
    fieldValue: "India",
  },
  {
    fieldName: "Address",
    fieldValue: "Kokrajhar, Assam (783370)",
  },
  {
    fieldName: "Email",
    fieldValue: "sumitdey.dev@gmail.com",
  },
  {
    fieldName: "I speak",
    fieldValue: ["English", "Hindi", "Bengali", "Assamese"],
  },
];

function AboutSection() {
  return (
    <div className="space-y-[1.5em]">
      {Fields.map((field, index) => (
        <div key={index} className="flex items-end text-[1.2em] gap-[2em]">
          <p className="text-neutral-500">{field.fieldName}</p>
          <p className="font-light">{field.fieldValue}</p>
        </div>
      ))}
    </div>
  );
}

export default AboutSection;
