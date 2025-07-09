import React from "react";

const MarqueeBar: React.FC = () => {
  return (
    <div className="bg-gray-100 py-2 overflow-hidden whitespace-nowrap">
      <div className="animate-marquee inline-block text-purple-700 font-medium text-sm">
        📈 Reliance up by 1.2% &nbsp;&nbsp;&nbsp;
        🟢 Infosys hitting new 52-week high &nbsp;&nbsp;&nbsp;
        🔻 TCS sees minor dip in early trade &nbsp;&nbsp;&nbsp;
        📈 Nifty50 bullish trend continues...
      </div>
    </div>
  );
};

export default MarqueeBar;
