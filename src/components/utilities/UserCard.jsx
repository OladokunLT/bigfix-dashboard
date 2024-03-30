const UserCard = ({ avatar, name, role }) => {
  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex gap-4 border items-center justify-start rounded p-2">
        <span className="min-w-8 min-h-8">
          <img src={avatar} alt="" />
        </span>
        <div className="flex flex-col">
          <h4 className="text-[#1A1A1A] leading-[19.41px]">{name}</h4>
          <p className="text-xs text-[#7A8A98] leading-[14.56px]">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
