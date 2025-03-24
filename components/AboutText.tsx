interface AboutTextProps {
    text: string;
  }
  
  const AboutText: React.FC<AboutTextProps> = ({ text }) => {
    return (
      <div className="w-full bg-[#17426F] py-10 px-6 sm:px-12">
        <div className="max-w-4xl mx-auto text-center text-white">
          <p className="text-lg sm:text-xl leading-relaxed font-light tracking-wide">
            {text}
          </p>
        </div>
      </div>
    );
  };
  
  export default AboutText;
  