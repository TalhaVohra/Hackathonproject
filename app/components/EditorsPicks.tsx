type ImageData = {
    src: string;
    alt: string;
    buttonText: string;
  };
  
  type EditorsPickProps = {
    largeImage: ImageData;
    narrowImage: ImageData;
    stackedImages: ImageData[];
  };
  
  const EditorsPick: React.FC<EditorsPickProps> = ({ largeImage, narrowImage, stackedImages }) => {
    return (
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Large image with button */}
        <div className="col-span-1 md:col-span-2">
          <div className="relative">
            <img
              src={largeImage.src}
              alt={largeImage.alt}
              className="w-full h-auto rounded-lg"
            />
            <button className="absolute bottom-4 left-4 px-6 py-2 bg-blue-500 text-white rounded-lg">
              {largeImage.buttonText}
            </button>
          </div>
        </div>
  
        {/* Narrow image with button */}
        <div className="col-span-1">
          <div className="relative">
            <img
              src={narrowImage.src}
              alt={narrowImage.alt}
              className="w-full h-auto rounded-lg"
            />
            <button className="absolute bottom-4 left-4 px-6 py-2 bg-blue-500 text-white rounded-lg">
              {narrowImage.buttonText}
            </button>
          </div>
        </div>
  
        {/* Two stacked images, each with a button */}
        <div className="col-span-1 space-y-4">
          {stackedImages.map((image, index) => (
            <div className="relative" key={index}>
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-auto rounded-lg"
              />
              <button className="absolute bottom-4 left-4 px-6 py-2 bg-blue-500 text-white rounded-lg">
                {image.buttonText}
              </button>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default EditorsPick;
  