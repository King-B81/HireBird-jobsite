export const RightUserChat = ({
  avatarSrc,
  timestamp,
  message,
}) => (
  <div className="mb-2.5 flex flex-row-reverse gap-x-2 items-center">
    <div className="flex flex-col gap-y-2">
      <p className="text-white text-base font-medium px-7 py-[14px] bg-[#191A1E] border border_green rounded-[0px_10px_10px_10px] max-w-[520px]">
        {message}
      </p>
      <time className="text-gray text-xs self-end">{timestamp}</time>
    </div>
    <div className="">
    <img src={avatarSrc} alt="more details" className="rotate-90" />
  </div>
  </div>
);
