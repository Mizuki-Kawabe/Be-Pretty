import Container from "@/app/components/Container";
import { product } from "@/utils/product";
import ListRating from "./ListRating";
import ProductDetails from "./ProductDetails";

interface IPrams {
  productId?: string;
}

const Product = ({ params }: { params: IPrams }) => {
  console.log("prams", params);
  return (
    <>
      <Container>
        <ProductDetails product={product} />
        <div className="flex flex-col mt-20 gap-4">
          <div>Add Rating</div>
          <ListRating product={product} />
        </div>
      </Container>
    </>
  );
};

export default Product;