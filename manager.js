let Product = new function () {
    this.el = document.getElementById('product');
    this.products = ["Son 3CE", "Son Rose Matte", "Son Mac","Son 3CE", "Son Rose Matte", "Son Mac"];

    this.setLocalStorageProduct = function () {
        localStorage.setItem("products", JSON.stringify(this.products))
    };
    this.getLocalStorageProduct = function () {
        this.products = JSON.parse(localStorage.getItem("products"))
    };
    this.cart=[];
    this.setLocalStorageCart=function () {
        localStorage.setItem("cart",JSON.stringify(this.cart))
    };
    this.getLocalStorageCart=function () {
        this.cart=JSON.parse(localStorage.getItem("cart"))
    };
    this.count = function (data) {
        let el = document.getElementById("count");
        let name = 'product';
        if (data) {
            if (data > 1) {
                name = "products";
            }
            el.innerHTML = data + " " + name;
        } else {
            el.innerHTML = "No " + name;
        }
    };
    this.showAll = function () {
        this.getLocalStorageProduct();
        let data = '';
        if (this.products.length > 0) {
            for (let i = 0; i < this.products.length; i++) {
                data += "<tr>";
                data += "<td>" + this.products[i] + "</td>";
                //data +='<td><input type="text" value="Product.products['+i+']"></td>';
                //data += '<td><input value="'+Product.products[i]+'"></td>';
                data += '<td><button onclick="Product.edit(' + i + ')">Edit</button></td>';
                data += '<td><button onclick="Product.delete(' + i + ')">Delete</button></td>';
                data += "</tr>";
            }
        }
        this.count(this.products.length);
        this.el.innerHTML = data;
    };
    this.add = function () {
        let el = document.getElementById('add-name');
        let product = el.value;
        if (product) {
            this.products.push(product.trim());
            el.value = '';
            this.setLocalStorageProduct();
            this.showAll();
        }

    };
    this.edit = function (item) {
        let el = document.getElementById('edit-name');
        el.value = this.products[item];
        document.getElementById("spoiler").style.display = 'block';
        self = this;
        document.getElementById('saveEdit').onsubmit = function () {
            let product = el.value;
            if (product) {
                self.products.splice(item, 1, product.trim());
                el.value = "";
                closeInput();
                self.setLocalStorageProduct();
                self.showAll();
            }
        }
    };
    this.delete = function (item) {
        this.products.splice(item, 1);
        this.setLocalStorageProduct();
        this.showAll();
    };

    function closeInput() {
        document.getElementById("spoiler").style.display = 'none';
    }
    this.displayUserManager = function () {
        let sout = "";
        if (this.products.length > 0) {
            for (let i = 0; i < this.products.length; i++) {
                sout += "<tr>";
                sout += "<td>" + this.products[i] + "</td>";
                sout += '<td><button onclick="Product.addCart(' + i + ')">Add Cart</button></td>';
                sout += "</tr>";
            }
        }
        document.getElementById("result").innerHTML = sout;
        this.getLocalStorageProduct();
    };
    this.addCart=function (i) {
        let confirmAnswer=confirm("Add your Cart?");
        if (confirmAnswer){
            this.cart.push(this.products[i]);
            this.setLocalStorageCart();
        }else {
            return;
        }
    };
    this.displayUserCart=function () {
        let sout1="";
        for (let i = 0; i <this.cart.length ; i++) {
            sout1+="<tr>";
            sout1+='<td>'+this.cart[i]+'</td>';
            sout1+='</tr>';
        }
        document.getElementById("resultUserCart").innerHTML=sout1;
        this.getLocalStorageCart();
    }


};

Product.showAll();
Product.displayUserCart();

function logout() {
    return window.location = "login.html";
}
function addCart(i) {
    return Product.addCart(i);

}



