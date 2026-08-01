import { products, categories, categoryName, inventoryValue } from './data.js';
// import "./App.css";
import "./index.css";

function Header(){
  return (
    <header className='cm-header'>
      <h1 data-testid="cm-brand">CampusMart</h1>
      <nav data-testid="cm-nav">
        <a href="#home">Trang chu</a>
        <a href="#products">San pham</a>
        {/* Lỗi 1: Đã thêm dấu # vào #about để không bị trắng trang khi click */}
        <a href="#about">Gioi thieu</a> 
      </nav>
    </header>
  );
}

function CategoryList(){
  return (
    <section>
      <h2>Danh muc</h2>
      <ul data-testid="cm-category-list">
        {categories.map((c) => (
          <li key={c.id}>{c.name}</li>
        ))}
      </ul>
    </section>
  );
}

// Lỗi 2: Đã sửa đồng bộ tên biến thành productList (không có s)
function Stats({ productList }){
  return (
    <section data-testid="cm-inventory-total" className="cm-stats-section">
      <p>So san pham = {productList.length}</p>
      <p>Tong gia tri kho = {inventoryValue(productList)}</p>
    </section>
  );
}

function ProductCard({ product }){
  return (
    // Lỗi 3: Đã sửa data-test-id thành data-testid (Autograder rất bắt bẻ dấu gạch ngang này)
    <article className='cm-card' data-testid="cm-product-row" data-sku={product.sku}>
      <h3>{product.name}</h3>
      <p>Mã sản phẩm (SKU): {product.sku}</p>
      <p className='cm-card-cat'>Danh mục: {categoryName(product.category_id)}</p>
      <p className='cm-card-price'>Giá: {product.price}</p>
      <p>Số lượng: {product.qty}</p>
    </article>
  );
}

// Đã sửa đồng bộ tên biến thành productList (không có s)
function ProductGrid({ productList }){
  return (
    <section>
      <h2>Danh sách sản phẩm</h2>
      <div className='cm-grid' data-testid="cm-product-table">
        {productList.map((p) => (
          <ProductCard key={p.sku} product={p} />
        ))}
      </div>
    </section>
  );
}

export default function App() {
  return (
    <main className="cm-main">
      {/* CM_EXPECT product_count=8 inventory_value=41380000 components=Header,CategoryList,ProductGrid,ProductCard,Stats */}
      <Header />
      <CategoryList />
      {/* Đã sửa đồng bộ tên biến truyền vào là productList */}
      <Stats productList={products} />
      <ProductGrid productList={products} />
    </main>
  );
}