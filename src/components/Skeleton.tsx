import "./Skeleton.css";

const Skeleton = () => {
  return (
    <div className="skeleton-card">
      <div className="skeleton-avatar" />
      <div className="skeleton-line short" />
      <div className="skeleton-line" />
    </div>
  );
};

export default Skeleton;
