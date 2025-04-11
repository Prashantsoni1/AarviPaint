import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Styles from './product_index2.module.css';

// Dynamic data structure
type Product = {
  id: number;
  name: string;
  type: string;
  description: string;
  features: string[];
  image: string;
  colorCode1: string;
  colorCode2: string;
};

type Category = {
  name: string;
  options: string[];
};

const ProductIndex2 = () => {
  const [productsData] = useState<Product[]>([
    {
      id: 1,
      name: "HD GLOSS PU EMULSION",
      type: "Interior & Exterior Both",
      description: "A high sheen, washable wall paint with stain-resistant finish ensures walls look new for a long time.",
      features: ["Smooth and glossy finish", "Non toxic and Lead free", "5 years warranty"],
      image: "/assets/product/image 27.png",
      colorCode1: "#15816A",
      colorCode2: "#33B496",
    },
    {
      id: 2,
      name: "HD ACRYLIC PLASTIC EMULSION",
      type: "Interior Emulsion",
      description: "A high sheen, washable wall paint with stain-resistant finish ensures walls look new for a long time.",
      features: ["Smooth and glossy finish", "Non toxic and Lead free", "5 years warranty"],
      image: "/assets/product/image 28.png",
      colorCode1: "#C79A19",
      colorCode2: "#D9B84A",
    },
  ]);

  const [categoriesData] = useState<Category[]>([
    { name: "Emulsion", options: ["Interior & Exterior Both", "Interior Emulsion", "Exterior Emulsion"] },
    { name: "Enamel", options: ["Interior & Exterior Both"] },
    { name: "Primer", options: ["Interior & Exterior Both"] },
    { name: "Wallputty", options: ["Interior & Exterior Both"] },
    { name: "Waterproofing", options: ["Interior & Exterior Both"] },
  ]);

  const [openDropdowns, setOpenDropdowns] = useState<string[]>([]);
  const [selectedType, setSelectedType] = useState<string>("");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(productsData);
  const [isMobileView, setIsMobileView] = useState(false);
  const [showMobileCategories, setShowMobileCategories] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (selectedType === "") {
      setFilteredProducts(productsData);
    } else {
      const filtered = productsData.filter(product => product.type === selectedType);
      setFilteredProducts(filtered);
    }
  }, [selectedType, productsData]);

  const toggleDropdown = (category: string) => {
    setOpenDropdowns((prev) =>
      prev.includes(category) ? prev.filter((item) => item !== category) : [category]
    );
  };

  const filterProducts = (type: string) => {
    setSelectedType(type);
    if (isMobileView) setShowMobileCategories(false);
  };

  const showAllProducts = () => {
    setSelectedType("");
    if (isMobileView) setShowMobileCategories(false);
  };

  const handleNavigation = (productId?: number) => {
    // Optional: send productId in route
    navigate("/products/productDetails");
    // or with ID: navigate(`/products/productDetails/${productId}`);
  };

  const handleContactNavigation = () => {
    navigate("/contact");
  };

  const toggleMobileCategories = () => {
    setShowMobileCategories(!showMobileCategories);
  };

  return (
    <div className={`${Styles.main} ${isMobileView ? Styles.mobileMain : ''}`}>
      {isMobileView && (
        <div className={Styles.mobileCategoryHeader}>
          <div className={Styles.leftHeading}>Category</div>
          <button className={Styles.mobileToggleBtn} onClick={toggleMobileCategories}>
            {showMobileCategories ? 'Hide Categories' : 'View Categories'}
          </button>
        </div>
      )}

      {(!isMobileView || showMobileCategories) && (
        <div className={`${Styles.category} ${isMobileView ? Styles.mobileCategory : ''}`}>
          <div className={Styles.container}>
            {!isMobileView && (
              <>
                <div className={Styles.leftHeading}>Category</div>
                <div className={Styles.lineleft}></div>
              </>
            )}

            <div 
              className={`${Styles.categoryItem} ${selectedType === "" ? Styles.selected : ''}`}
              onClick={showAllProducts}
            >
              <div className={Styles.type}>
                <div className={Styles.opt}>All Products</div>
              </div>
            </div>

            {categoriesData.map((category) => (
              <div className={Styles.categoryItem} key={category.name}>
                <div className={Styles.type} onClick={() => toggleDropdown(category.name)}>
                  <div className={Styles.opt}>{category.name}</div>
                  <div className={`${Styles.downArrow} ${openDropdowns.includes(category.name) ? Styles.rotate : ""}`}>
                    <img src="/assets/product/down-arrow (1) 5.png" alt="→" />
                  </div>
                </div>
                {openDropdowns.includes(category.name) && (
                  <div className={Styles.dropdown}>
                    {category.options.map((option) => (
                      <div 
                        key={option} 
                        className={`${Styles.dropdownItem} ${selectedType === option ? Styles.selected : ''}`} 
                        onClick={() => filterProducts(option)}
                      >
                        {option}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className={Styles.contact}>
            <div className={Styles.contactHeading}>Contact Us</div>
            <button className={Styles.btn} onClick={handleContactNavigation}>Contact Now</button>
          </div>
        </div>
      )}

      <div className={`${Styles.products} ${isMobileView ? Styles.mobileProducts : ''}`}>
        <div className={Styles.head}>
          <div className={Styles.productHeading}>Product List</div>
          <div className={Styles.line}></div>
        </div>
        <div className={Styles.productList}>
          {filteredProducts.map(product => (
            <div className={Styles.productDescription} key={product.id}>
              <div className={Styles.left1} style={{ background: `linear-gradient(144.76deg, ${product.colorCode1} 48%, ${product.colorCode2} 99.96%)` }}>
                <div className={Styles.imgcontainer}>
                  <img src={product.image} alt={product.name} className={Styles.img} />
                </div>
              </div>
              <div className={Styles.right}>
                <div className={Styles.rightHeading1}>{product.name}</div>
                <div className={Styles.info}>
                  <div className={Styles.rightHeading2}>{product.type}</div>
                  <div className={Styles.para}>{product.description}</div>
                </div>
                <div className={Styles.feature}>
                  <div className={Styles.featureHeading}>Key Features</div>
                  <ul className={Styles.featureList}>
                    {product.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <div className={Styles.btnDiv}>
                  <button className={Styles.btn2} onClick={() => handleNavigation(product.id)}>Know More</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductIndex2;
