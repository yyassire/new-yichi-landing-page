function FeatureCard({ feature }) {
  return (
    <div
      className="flex flex-col gap-3 cursor-pointer g_feature_box"
      key={feature.name}
    >
      <div className="flex gap-3 items-center">
        <div className="w-[10px] h-[10px] bg-black rounded-full" />
        <span>{feature.name}</span>
      </div>
      <div className="w-full h-[500px] overflow-hidden rounded-2xl hover:scale-90 transition-all duration-700 group">
        <img
          src={feature.img}
          alt=""
          className="w-full h-full group-hover:scale-125 transition-all duration-700"
        />
      </div>
      <div className="flex gap-4">
        {feature.details.map((p) => {
          return (
            <button
              className="border-[1px] border-black text-[10px] md:text-[16px]  px-[5px] md:px-[20px] py-[2px] md:py-[5px] rounded-full"
              key={p}
            >
              {p}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default FeatureCard;
