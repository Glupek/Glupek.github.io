import { useShoppingCart } from "../context/ShoppingCartContext";
import storeItems from "../data/items.json"
import { CartItem } from "../components/CartItem";
import { formatCurrency } from "../utilities/formatCurrency";
import { Stack } from "react-bootstrap";

export function Cart(){
    const {cartItems} = useShoppingCart()
    return (
        <Stack gap={3}>
            {cartItems.map(item =>(
                <CartItem key={item.id} {...item}/>
            ) )}
            <div className="ms-auto fw-bold fs-5">
                Total {formatCurrency(cartItems.reduce((total, cartItem)=>{
                   const item = storeItems.find(i => i.id === cartItem.id)
                   return total + (item?.price || 0) * cartItem.quantity
                },0))}
            </div>
         </Stack>
        ) }
    
