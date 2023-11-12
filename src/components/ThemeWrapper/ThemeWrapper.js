import './ThemeWrapper.scss';

export const ThemeWrapper = (props) => {
  return (
    <div className="toDoWrapper">
      {props.children}
    </div>
  );
 };

