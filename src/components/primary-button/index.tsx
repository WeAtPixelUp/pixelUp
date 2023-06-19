import "./style.css";

type PropsType = {
  title: string;
  backgroundColor: string;
  destination?: string;
};

const Index = ({ title, backgroundColor, destination }: PropsType) => {
  return (
    <a
      href={destination}
      hrefLang="en"
      style={{ backgroundColor: `${backgroundColor}` }}
      className="btn-primary"
    >
      {title}
    </a>  
  );
};

export default Index;
