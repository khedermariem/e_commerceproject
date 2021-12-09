/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { createProduct } from "./../../actions/product.actions";
import { getCategories } from "./../../actions/categories.actions";
import { connect } from "react-redux";
import { useClickAway } from "react-use";

const ProductForm = (
  categoryState,
  createProduct,
  getCategories,
  closeModel
) => {
  useEffect(() => {
    getCategories(10);
  }, [getCategories]);
  const modalRef = useRef(null);
  const [ProductData, setProductData] = useState({
    name: "",
    image: "",
    description: "",
    price: "",
    category: "",
  });
  const [ProductFile, setProductFile] = useState(null);
  useClickAway(modalRef, () => {
    closeModel(false);
  });
  const onSubmitData = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", ProductData.name);
    formData.append("description", ProductData.description);
    formData.append("price", ProductData.price);
    formData.append("category", ProductData.category);
    formData.append("image", ProductFile);
    await createProduct(formData);
    closeModel(false);
  };

  const handleDataChange = (e) => {
    setProductData({ ...ProductData, [e.target.name]: e.target.value });
  };
  const handleFileChange = (e) => {
    setProductFile(e.target.file[0]);
    setProductData({ ...ProductData, [e.target.name]: e.target.value });
  };

  return (
    <div className="fixed top-0 left-0 z-10 flex items-center justify-center w-full h-full overflow-y-auto bg-main bg-opacity-60">
      <div ref={modalRef} className="relative w-1/3 p-4 bg-white rounded-xl ">
        <form onSubmit={(e) => onSubmitData(e)}>
          <div className="flex flex-col items-center justify-between w-full gap-4 mb-6">
            <div className="w-full">
              <label htmlFor="name">Name</label>
              <input
                onChange={(e) => handleDataChange(e)}
                type="text"
                name="name"
                className="w-full px-4 py-2 border border-black border-solid rounded focus:outline-none"
                placeholder="Name"
                value={ProductData.name}
              />
            </div>
            <div className="w-full">
              <label htmlFor="image">Image</label>
              <input
                onChange={(e) => handleFileChange(e)}
                type="file"
                name="image"
                className="w-full px-4 py-2 border border-black border-solid rounded focus:outline-none"
                placeholder="Image"
                value={ProductData.image}
              />
            </div>
            <div className="w-full">
              <label htmlFor="description">Description</label>
              <textarea
                onChange={(e) => handleDataChange(e)}
                type="text"
                name="description"
                className="w-full px-4 py-2 border border-black border-solid rounded focus:outline-none"
                placeholder="description"
                value={ProductData.description}
              />
            </div>
            <div className="flex items-center justify-between w-full gap-2">
              <div className="w-1/2">
                <label htmlFor="price">Price</label>
                <input
                  onChange={(e) => handleDataChange(e)}
                  type="number"
                  min={0}
                  name="price"
                  className="w-full px-4 py-2 border border-black border-solid rounded focus:outline-none"
                  placeholder="price"
                  value={ProductData.price}
                />
              </div>
              <div className="w-1/2">
                <label htmlFor="category">Category</label>
                <select
                  className="w-full px-4 py-2 capitalize border border-black border-solid rounded focus:outline-none"
                  name="category"
                  value={ProductData.category}
                  onChange={(e) => handleDataChange(e)}
                >
                  <option value={""} hidden>
                    --Select Category
                  </option>
                  {categoryState.categories.map((cat) => {
                    return (
                      <option className="capitalize" value={cat._id}>
                        {cat.name}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="w-full px-6 py-2 font-bold text-white transition-all duration-200 ease-in-out transform border-2 rounded-full border-main bg-main hover:opacity-95 hover:scale-105"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

ProductForm.propTypes = {
  categoryState: PropTypes.object.isRequired,
  getCategories: PropTypes.func.isRequired,
  createProduct: PropTypes.func.isRequired,
  closeModel: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  categoryState: state.categoryState,
});

const mapDispatchToProps = {
  createProduct,
  getCategories,
};

export default connect(mapDispatchToProps, mapStateToProps)(ProductForm);
