import { IRightPart } from './rightPart.types';

const RightPart = ({ actions }: IRightPart) => {
  return (
    <div className="right-part_container">
      <div className="right-part_inner-container">
        {Object.keys(actions).length > 0 ? (
          Object.keys(actions).map((key) => <p key={key}>{actions[key]}</p>)
        ) : (
          <p>No actions to show.</p>
        )}
      </div>
    </div>
  );
};

export default RightPart;
