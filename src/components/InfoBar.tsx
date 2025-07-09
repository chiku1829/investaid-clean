const InfoBar = () => {
  return (
    <div className="bg-black text-white text-sm py-2 px-6 flex justify-between items-center">
      {/* LEFT: Call to action */}
      <div className="font-medium">📢 Get a quick call</div>

      {/* RIGHT: Email and Phone */}
      <div className="flex items-center space-x-4">
        <span>📞 +91 7368079633</span>
        <span>📧 liquidbackoffice@gmail.com</span>
      </div>
    </div>
  );
};

export default InfoBar;
