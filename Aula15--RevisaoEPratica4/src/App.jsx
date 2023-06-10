import axios from "axios";
import { useEffect, useState } from "react";
import './App.css';

import ProductList from "./ProductList";
import Input from "./Input";

function App() {
  // estados da lista de produtos
  const [products, setProducts] = ([]);
  
  useEffect(
    ()=> {
      getProducts();
  
  }, [])
  
  async function getProducts(){
    try {
      const response = await axios.get("api/products")
      console.log(response)
      
      const products = response.data.products;
      
      if(products.lenght >0){
        console.log(products);
        setProducts(products);
      }else{
        setProducts([]);
        
      }
      
    } catch (error) {
      alert(`Ocorreu um erro ao buscra a lista de produtos - Erro: ${error}`)
      
    }
    
  }

  return (
    <>

      <h2>Cadastre seu produto</h2>

      <form>

        <Input
          title="Título"
          type="text"
          value={"title"}
          fnOnChange={(e) => { }}
          fnOnKeyUp={"formValidator"}
        />

        <br />

        <Input
          title="Descrição"
          type="text"
          value={"description"}
          fnOnChange={(e) => { }}
          fnOnKeyUp={"formValidator"}
        />

        <br />

        <Input
          title="Preço"
          type="text"
          value={"price"}
          fnOnChange={(e) => { }}
          fnOnKeyUp={"formValidator"}
        />

        <br />

        <Input
          title="Estoque"
          type="text"
          value={"stock"}
          fnOnChange={(e) => { }}
          fnOnKeyUp={"formValidator"}
        />

        <br />

        <Input
          title="Categoria"
          type="text"
          value={"category"}
          fnOnChange={(e) => { }}
          fnOnKeyUp={"formValidator"}
        />

        <br />

        <Input
          title="IMG Url"
          type="text"
          value={"image"}
          fnOnChange={(e) => { }}
          fnOnKeyUp={"formValidator"}
        />

        <br />

        <button
          disabled={true}
          onClick={() => { }}>
          Cadastrar
        </button>

      </form>





      {/* Lista de produtos */}
      <h2>Lista de produtos</h2>

      <ProductList />

    </>
  );
}

export default App;
