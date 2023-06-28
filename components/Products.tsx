import { Item, Product } from "@/type";
import Image from "next/image";
import Link from "next/link";
import { BsStarFill } from "react-icons/bs";
import { GoPlus } from "react-icons/go";

interface Props {
  productData: Product;
}

const Products = ({ productData }: Props) => {
  return (
    <div className="py-6 px-4 grid grid-cols-4 gap-4">
      {productData.map((item: Item) => (
        <div key={item._id} className="border-[1px] border-gray-200 mb-6 group">
          <div className="w-full h-[350px] overflow-hidden p-1">
            <Image
              className="w-full h-full object-contain scale-100 group-hover:scale-105 duration-300"
              width={300}
              height={250}
              src={item.image}
              alt="item image "
            />
          </div>

          {/* Description Start */}

          <div className="px-2 py-4 flex-col justify-center">
            <div className="flex justify-between py-2">
              <button className="w-20 h-9 bg-blue text-white rounded-full flex gap-1 items-center justify-center hover:bg-[#004f9a] duration-300">
                <span>
                  <GoPlus />
                </span>
                Add
              </button>
              <Link
                href={{
                  pathname: `product/${item._id}`,
                  query: {
                    _id: item._id,
                    title: item.title,
                    description: item.description,
                    price: item.price,
                    oldPrice: item.oldPrice,
                    brand: item.brand,
                    category: item.category,
                    image: item.image,
                    isNew: item.isNew,
                  },
                }}
                as={`product/${item._id}`}
              >
                <button className="w-24 h-9 bg-white border-[1px] border-black text-black rounded-full flex items-center justify-center gap-1 hover:bg-black hover:text-white duration-300">
                  <span>
                    <GoPlus />
                  </span>
                  Details
                </button>
              </Link>
            </div>
            <div className="flex items-center gap-3">
              <p className="font-titleFont text-lg text-green-700 font-semibold">
                Now ${item.price}
              </p>
              <p className="text-gray-500 line-through decoration-[1px]">
                ${item.oldPrice}
              </p>
            </div>
            <p className="text-lg font-semibold py-2">
              {item.title.substring(0, 25)}
            </p>
            <p className="text-base text-zinc-500">
              {item.description.substring(0, 80)}...
            </p>
            <div className="flex gap-2 items-center text-sm mt-2">
              <div className="flex text-sm gap-1 items-center">
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <p>25</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
