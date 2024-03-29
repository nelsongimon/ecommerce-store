import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/Billboard";
import ProductList from "@/components/ProductList";
import Container from "@/components/ui/Container";

export const revalidate = 0;

export default async function HomePage() {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard("50615a91-8cca-4170-b02d-fa6c43b3ba47");
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
        <div className="
        flex
        flex-col
        gap-y-3
        px-4
        sm:px-4
        lg:px-8
        ">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  );
}
