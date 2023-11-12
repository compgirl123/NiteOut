import './TipTemplate.scss';

export const TipTemplate = (props) => {
  return (
    <div className = "tipWrapper">
      <div className="tipPercentage">
        {props.children}
      </div>
    </div>
  );
 };

