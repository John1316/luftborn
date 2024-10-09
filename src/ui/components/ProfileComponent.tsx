

export default function ProfileComponent({ image, name }: ProfileProps) {
  return <div className="sales-dashboard__profile">
    <img src={image} alt={name} className="sales-dashboard__profile-image" />
    <div className="sales-dashboard__profile-name">{name}</div>
  </div>;
}
