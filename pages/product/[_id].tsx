import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {IoMdHeartEmpty} from "react-icons/io"

const ProductDetails = () => {
  const router = useRouter();
  const [product, setProduct] = useState<any>({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setProduct(router.query);
    setIsLoading(false);
  }, [router.query]);

  console.log(product);

  return (
    <div className="w-full bg-white">
      <div className="max-w-contentContainer mx-auto flex items-center py-4">
        <div className="w-2/3 h-full flex items-center justify-center overflow-hidden relative">
          <img
            src={product.image}
            alt="productImg"
            className="w-[80%] transform-origin-top-left cursor-move duration-500"
          />
        </div>
        <div className="w-1/3 h-full flex flex-col gap-2">
          <p className="p-2 text-blue text-sm font-semibold border border-gray-400 rounded-md">
            500+ bought since yesterday
          </p>
          <div className="px-2 py-4 border border-gray-400 rounded-md flex flex-col gap-6">
            <div className="flex justify-between items-center">
              <div className="flex gap-2">
                <button className="px-2 py-[1px] text-blue text-sm border-[1px] border-blue rounded-sm">
                  Best seller
                </button>
                <button className="px-2 py-[1px] text-red-600 text-sm border-[1px] border-red-600 rounded-sm">
                  Rollback
                </button>
              </div>
              <IoMdHeartEmpty className="text-gray-600 text-2xl"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
