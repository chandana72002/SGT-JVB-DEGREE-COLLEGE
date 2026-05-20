function CardImage({ image, height = 'h-44' }) {
  if (!image?.src) {
    return null;
  }

  return (
    <img
      src={image.src}
      alt={image.alt}
      loading="lazy"
      className={`-mx-6 -mt-6 mb-6 w-[calc(100%+3rem)] object-cover ${height}`}
    />
  );
}

export default CardImage;
