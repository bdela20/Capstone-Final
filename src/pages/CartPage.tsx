import Cart from "../components/Cart/Cart";
export default function CartPage() {
  return (
    <div>
      <Cart onDeleteFromCart={undefined} cart={undefined} />
    </div>
  );
}