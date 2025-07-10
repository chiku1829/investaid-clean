const InfoBar = () => {
  return (
    <div className="bg-black text-white text-sm px-4 py-2">
      <div className="flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0">
        {/* LEFT: Call to action */}
        <div className="font-medium text-center md:text-left">
          📢 Get a quick call
        </div>

        {/* RIGHT: Email and Phone */}
        <div className="flex flex-col md:flex-row items-center text-xs md:text-sm gap-1 md:gap-4 text-center">
          <span>📞 +91 7368079633</span>
          <span>📧 liquidbackoffice@gmail.com</span>
        </div>
      </div>
    </div>
  );
};

export default InfoBar;
