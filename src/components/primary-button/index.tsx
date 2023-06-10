import "./style.css";

type PropsType = {
  title: string;
  backgroundColor: string;
};

const Index = ({ title, backgroundColor }: PropsType) => {
  return (
    <a
      style={{ backgroundColor: `${backgroundColor}` }}
      className="btn-primary"
    >
      {title}
    </a>
  );
};

export default Index;
