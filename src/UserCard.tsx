// **********************
// UserCard COMPONENT
// **********************

interface User {
    id: number;
    name: string;
    url: string;
    gender: 'M' | 'F';
    description: string;
    isAdmin: boolean;
  }

interface UserCardProps {
    user: User
}
  
  const UserCard: React.FC<UserCardProps> = (props: UserCardProps) => {
    const {gender, url, isAdmin, name, description} = props.user;

    const cls = gender === 'M' ? 'card male' : 'card female';
  
    return <div className={cls}>
      <img src={url} className="thumb" alt={name} />
      {isAdmin ? <span>★</span> : null }
      <span>{name}</span>
      <p>{description}</p>
    </div>
  }

  export default UserCard;