export const SettingBox = ({
    title = "",
    imgSrc = "",
    imgAlt = "image",
    ...props
  }) => {
    return (
      <div
        className="icon icon-container w-[40px] h-[40px] flex items-center"
        data-button-name={title}
        {...props}
      >
        <img src={imgSrc} alt={imgAlt} />
      </div>
    );
  };