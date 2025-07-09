import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const contacts = [
    {
      icon: <FaEnvelope size={28} />,
      title: "Email Address",
      info: "liquidbackoffice@gmail.com",
    },
    {
      icon: <FaPhoneAlt size={28} />,
      title: "Phone Number",
      info: "+91 7368079633",
    },
    {
      icon: <FaMapMarkerAlt size={28} />,
      title: "Primary Address",
      info: "Marathon futures A602 4th floor MAFATLA MEALS compound, MM joshi Marg, lower panel east Mumbai ,Maharashtra  400013",
    },
  ];

  return (
    <div className="min-h-screen bg-white py-16 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-purple-700 mb-12">Contact Us</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {contacts.map((item, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-xl p-6 shadow-md hover:shadow-xl transition transform hover:-translate-y-2"
            >
              <div className="flex flex-col items-center text-center">
                <div className="bg-purple-600 text-white rounded-full p-4 mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-black mb-2">{item.title}</h3>
                <p className="text-gray-700">{item.info}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
