import {readable, writable} from "svelte/store";

export const products = readable([
    {id: 1, name: "Apple", image: "https://bluecure.org/wp-content/uploads/2016/03/apples-prostate-cancer-curing-foods-768x580.jpg", price: 10, quantity: 1},
    {id: 2,name: "Orange", image: "https://www.telegraph.co.uk/multimedia/archive/01834/orange_1834038b.jpg", price: 11, quantity: 1},
    {id: 3,name: "Grapes", image: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F4_3_horizontal_-_1200x900%2Fpublic%2Fimage%2F2015%2F08%2Fmain%2F1508w-grapes-getty_0.jpg%3Fitok%3D_vUbtJUc&w=200&c=sc&poi=face&q=85", price: 12, quantity: 1}
    ])

    export const cart = writable([])

    export const address = writable({
        name: "",
        email: "",
        phone: "",
        street: "",
        city: "",
        state: "",
        pin: ""
    })
