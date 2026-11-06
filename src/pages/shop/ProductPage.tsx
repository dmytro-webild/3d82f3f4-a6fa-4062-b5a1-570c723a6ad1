import { ReactLenis } from "lenis/react";
import { useParams, useNavigate } from "react-router-dom";
import { Loader2 } from "lucide-react";
import ProductDetailCard from "@/components/ecommerce/ProductDetailCard";
import ProductCart from "@/components/ecommerce/ProductCart";
import useProductDetail from "@/hooks/useProductDetail";
import useCart from "@/hooks/useCart";
import useCheckout from "@/hooks/useCheckout";

const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const { product, isLoading, images, createCartItem, selectedQuantity } = useProductDetail(id || "");
  const { items: cartItems, isOpen: cartOpen, setIsOpen: setCartOpen, addItem, updateQuantity, removeItem, total: cartTotal, getCheckoutItems } = useCart();
  const { buyNow, checkout } = useCheckout();

  if (isLoading) {
    return (
      <section className="w-content-width mx-auto py-20">
        <div className="flex justify-center">
          <Loader2 className="size-8 animate-spin text-foreground" strokeWidth={1.5} />
        </div>
      </section>
    );
  }

  if (!product) {
    return (
      <section className="w-content-width mx-auto py-20 text-center">
        <p className="text-foreground mb-4">Product not found</p>
        <button onClick={() => navigate("/shop")} className="primary-button px-6 py-2 rounded-theme text-primary-cta-text">
          Back to Shop
        </button>
      </section>
    );
  }

  const handleAddToCart = () => {
    const item = createCartItem();
    if (item) addItem(item);
  };

  const handleBuyNow = () => {
    buyNow(product, selectedQuantity);
  };

  const handleCheckout = async () => {
    if (cartItems.length === 0) return;
    const url = new URL(window.location.href);
    url.searchParams.set("success", "true");
    await checkout(getCheckoutItems(), { successUrl: url.toString() });
  };

  return (
    <ReactLenis root>
      <ProductDetailCard
        name={product.name}
        price={product.price}
        description={product.description}
        images={images.map((img) => img.src)}
        rating={product.rating}
        onAddToCart={handleAddToCart}
        onBuyNow={handleBuyNow}
      />
      <ProductCart
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cartItems}
        total={`$${cartTotal}`}
        onQuantityChange={updateQuantity}
        onRemove={removeItem}
        onCheckout={handleCheckout}
      />
    </ReactLenis>
  );
};

export default ProductPage;
