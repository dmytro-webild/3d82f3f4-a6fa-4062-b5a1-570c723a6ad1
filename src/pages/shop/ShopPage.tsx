import { useNavigate } from "react-router-dom";
import { Loader2 } from "lucide-react";
import ProductCatalog from "@/components/ecommerce/ProductCatalog";
import useProductCatalog from "@/hooks/useProductCatalog";

const ShopPage = () => {
  const navigate = useNavigate();
  const { products, isLoading, search, setSearch } = useProductCatalog({
    onProductClick: (productId) => navigate(`/shop/${productId}`),
  });

  if (isLoading) {
    return (
      <section className="w-content-width mx-auto py-20">
        <div className="flex justify-center">
          <Loader2 className="size-8 animate-spin text-foreground" strokeWidth={1.5} />
        </div>
      </section>
    );
  }

  return (
    <ProductCatalog
      products={products}
      searchValue={search}
      onSearchChange={setSearch}
    />
  );
};

export default ShopPage;
