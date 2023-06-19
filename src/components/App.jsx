//import TableSort from './TableSort/TableSort';
import { useState } from 'react';

export const App = () => {
  const [productRestShow, setProductRestShow] = useState(true);
  const [searchValue, setSearchvalue] = useState('');
  const [filtredStock, setFilteredStock] = useState([
    { category: 'Fruits', price: '$1', stocked: true, name: 'Apple' },
    { category: 'Fruits', price: '$1', stocked: true, name: 'Dragonfruit' },
    { category: 'Fruits', price: '$2', stocked: false, name: 'Passionfruit' },
    { category: 'Vegetables', price: '$2', stocked: true, name: 'Spinach' },
    { category: 'Vegetables', price: '$4', stocked: false, name: 'Pumpkin' },
    { category: 'Vegetables', price: '$1', stocked: true, name: 'Peas' },
  ]);

  const PRODUCTS = [
    { category: 'Fruits', price: '$1', stocked: true, name: 'Apple' },
    { category: 'Fruits', price: '$1', stocked: true, name: 'Dragonfruit' },
    { category: 'Fruits', price: '$2', stocked: false, name: 'Passionfruit' },
    { category: 'Vegetables', price: '$2', stocked: true, name: 'Spinach' },
    { category: 'Vegetables', price: '$4', stocked: false, name: 'Pumpkin' },
    { category: 'Vegetables', price: '$1', stocked: true, name: 'Peas' },
  ];
  // PRODUCTS.forEach(elem => {
  //   setFilteredStock(elem);
  // });
  const letSort = () => {
    setProductRestShow(!productRestShow);
    let prodTrue = filtredStock.filter(prod => prod.stocked);
    if (productRestShow) {
      setFilteredStock(prodTrue);
    } else {
      setFilteredStock(PRODUCTS);
    }
  };
  const searchField = e => {
    const inputValue = e.target.value;
    setSearchvalue(inputValue);
  };

  const filteredList = filtredStock.filter(value =>
    value.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
  );
  return (
    <div
      style={{
        //height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <form action="">
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
          }}
        >
          <input
            type="text"
            placeholder="Search..."
            name="search"
            onChange={searchField}
          />
          <label htmlFor="">
            <input type="checkbox" name="sort" onChange={letSort} /> Only show
            products in stock
          </label>
        </div>
      </form>
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Prise</th>
            </tr>
          </thead>
          <tbody>
            {/* <TableSort PRODUCTS={PRODUCTS} /> */}

            {/* {letSort
              ? filtredStock.map(product => {
                  return (
                    <tr>
                      <td>{product.name}</td>
                      <td>{product.price}</td>
                    </tr>
                  );
                })
              : PRODUCTS.map(product => {
                  return (
                    <tr>
                      <td>{product.name}</td>
                      <td>{product.price}</td>
                    </tr>
                  );
                })} */}
            {filteredList.map(product => {
              return (
                <tr>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
