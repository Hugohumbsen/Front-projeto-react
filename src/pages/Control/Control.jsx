import React, { useState } from 'react';

function Control() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [type, setType] = useState('');
  const [products, setProducts] = useState([]);
  const [id, setId] = useState(1);

  const handleAddProduct = () => {
    if (!name || !price || !quantity || !type) {
      alert('Preencha todos os campos');
      return;
    }

    const newProduct = {
      id,
      name,
      price,
      quantity,
      type: type.toLowerCase(),  // Garantindo que o tipo seja minúsculo
    };

    setProducts([...products, newProduct]);
    setId(id + 1);
    setName('');
    setPrice('');
    setQuantity('');
    setType('');
  };

  const handleDeleteProduct = (productId) => {
    setProducts(products.filter(product => product.id !== productId));
  };

  const handleEditProduct = (productId) => {
    const productToEdit = products.find(product => product.id === productId);
    setName(productToEdit.name);
    setPrice(productToEdit.price);
    setQuantity(productToEdit.quantity);
    setType(productToEdit.type);
    handleDeleteProduct(productId);
  };

  return (
    <div className="control">
      <h2>Controle de Estoque</h2>
      <div>
        <label>Nome do Produto</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label>Preço</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <div>
        <label>Quantidade</label>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
      </div>
      <div>
        <label>Tipo</label>
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="legumes">Legumes</option>
          <option value="frutos">Frutos</option>
          <option value="panificacao">Panificação</option>
          <option value="bebidas">Bebidas</option>
          <option value="congelados">Congelados</option>
        </select>
      </div>
      <button onClick={handleAddProduct}>Adicionar Produto</button>

      <h3>Produtos no Estoque</h3>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - {product.price} - {product.quantity} - {product.type}
            <button onClick={() => handleDeleteProduct(product.id)}>Excluir</button>
            <button onClick={() => handleEditProduct(product.id)}>Editar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Control;
