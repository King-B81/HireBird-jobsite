export const LeftUserChat = ({ avatarSrc, username, timestamp, message }) => (
  <div className="max-w-[460px]">
    <div className="flex gap-x-4 mb-2.5">
      <div className="flex gap-x-2 items-start">
        <img src={avatarSrc} alt="user avatar" width={36} height={36} />
      </div>
      <p className="w-fit text-white text-base font-medium px-7 py-[14px] btn rounded-[10px_10px_0px_10px] max-w-[460px]">
        {message}
      </p>
    </div>
    <time className="text-gray text-xs float-right ">{timestamp}</time>
  </div>
);
