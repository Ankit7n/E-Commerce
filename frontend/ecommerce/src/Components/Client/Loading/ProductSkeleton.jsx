const ProductSkeleton = () => {
  return (
    <div className="animate-pulse bg-surface-container-lowest rounded-xl border border-outline-variant overflow-hidden">
      {/* IMAGE */}
      <div className="w-full h-48 bg-surface-variant" />

      <div className="p-md space-y-3">
        {/* CATEGORY */}
        <div className="h-3 w-20 bg-surface-variant rounded" />

        {/* TITLE */}
        <div className="h-4 w-3/4 bg-surface-variant rounded" />

        {/* PRICE */}
        <div className="h-4 w-1/3 bg-surface-variant rounded" />

        {/* BUTTON */}
        <div className="h-9 w-full bg-surface-variant rounded mt-3" />
      </div>
    </div>
  );
};

export default ProductSkeleton;
