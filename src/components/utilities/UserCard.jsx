const UserCard = ({ avatar, name, role }) => {
  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex gap-4 border items-center justify-start rounded px-1">
        <span>
          <img src={avatar} alt="" />
        </span>
        <div className="flex flex-col">
          <h4 className="text-[#1A1A1A] font-medium">{name}</h4>
          <p className="text-[#292828]">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
