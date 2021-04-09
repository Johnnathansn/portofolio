<script>
    import {products, cart, address } from "./cart.js";
    import CartLength from "./CartLength.svelte";
    import Products from "./Products.svelte";    
    import Cart from "./Cart.svelte";
    import Address from "./Address.svelte";
</script>

<div>
    <CartLength />
    <Products />
    <Cart />
    <Address />
</div>